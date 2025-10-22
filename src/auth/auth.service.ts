import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

import { Auth } from './entities/auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashPassword, comparePassword } from 'src/utils/auth';
import { generateJWT } from 'src/utils/jwt';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Auth) private readonly authRepository : Repository<Auth>,
  ) { }

  async create(createAuthDto: CreateAuthDto) {
    const { name, email, password } = createAuthDto
    const userExist = await this.authRepository.findOneBy({ email })
    if (userExist){
      throw new UnauthorizedException("El correo ya esta registrado");
    }

    createAuthDto.password = await hashPassword(password)

    const user = this.authRepository.create(createAuthDto)
    await this.authRepository.save(user)

    return {message: "Usuario creado exitosamente"};
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async login(email: string, password: string) {
    const user = await this.authRepository.findOneBy({ email });
    if(!user){
      throw new UnauthorizedException("El usuario no existe");
    }

    const isPasswordIncorrect = await comparePassword(password, user.password)
    if(!isPasswordIncorrect){
      throw new UnauthorizedException("Contraseña incorrecta");
    }

    const token = generateJWT(user.id.toString())

    return {token}
  }
}
