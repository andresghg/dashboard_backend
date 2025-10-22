import 
{ IsEmail, IsNotEmpty, IsString, MinLength, MaxLength, IsPhoneNumber, IsDate, IsOptional, IsTimeZone, IsLocale } 
    from "class-validator";

import { Type } from "class-transformer";
import { Transform } from "class-transformer";

export class CreateAuthDto {
    @IsNotEmpty({message: 'El Nombre no puede ir vacio'})
    @IsString({message: 'Nombre no válido'})
    name: string

    @IsOptional()
    @IsString({message: 'Apellido no válido'})
    apellido?: string

    @IsNotEmpty({message: 'El Email no puede ir vacio'})
    @IsEmail()
    email: string

    @IsNotEmpty({message: 'El Password no puede ir vacio'})
    @IsString()
    @MinLength(8, {message: 'El Password debe tener al menos 8 caracteres'})
    @MaxLength(10, {message: 'El Password debe contener máximo 10 caracteres'})
    password: string

    @IsOptional()
    @IsPhoneNumber('ZZ' as any, {message: 'Telefono no válido'})
    telefono?: string

    @IsOptional()
    @IsString({message: 'Foto de Perfil no válida'})
    foto_perfil?: string

    @IsDate()
    @Type(() => Date)
    fecha_registro: string

    @IsDate()
    @Type(() => Date)
    fecha_ultimaConexion: string

    // @IsString()
    // activo: string

    // @IsString()
    // verificado: string

    @IsTimeZone()
    @Transform(({ value, obj, key }) => {
        // Si no se proporciona timezone, usar el del header de la request
        if (!value && obj._timezone) {
            return obj._timezone;
        }
        return value || 'UTC';
    })
    timezone?: string;

    @IsLocale()
    @Transform(({ value, obj, key }) => {
        // Si no se proporciona idioma, usar el del header de la request
        if (!value && obj._language) {
            return obj._language;
        }
        return value || 'es';
    })
    idioma: string

    // @IsString()
    // id_Subcursal: string

    // Propiedades privadas para almacenar valores detectados
    _timezone?: string;
    _language?: string;
}
