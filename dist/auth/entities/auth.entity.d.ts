export declare class Auth {
    id: number;
    name: string;
    apellido?: string;
    email: string;
    telefono?: string;
    foto_perfil?: string;
    password: string;
    fecha_registro: Date;
    fecha_ultimaConexion: Date;
    activo?: string;
    verificado?: string;
    timezone: string;
    language: string;
    setDefaults(): void;
}
