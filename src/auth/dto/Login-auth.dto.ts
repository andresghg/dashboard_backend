import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginAuthDto {
    @IsNotEmpty({ message: 'El correo no puede ir vacio' })
    @IsEmail({}, { message: 'El correo no es valido' })
    email: string

    @IsNotEmpty({ message: 'La contraseña no puede ir vacia' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string
}
