import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert } from "typeorm";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: 60})
    name: string

    @Column({ type: 'varchar', length: 60, nullable: true })
    apellido?: string

    @Column({type: 'varchar', length: 60})
    email: string

    @Column({ type: 'varchar', length: 60, nullable: true })
    telefono?: string

    @Column({type: 'varchar', length: 60, nullable: true })
    foto_perfil?: string

    @Column({type: 'varchar', length: 60})
    password: string

    @CreateDateColumn({ type: 'timestamp' })
    fecha_registro: Date;

    @Column({type: 'date', nullable: true})
    fecha_ultimaConexion: Date

    @Column({ type: 'varchar', length: 60, nullable: true })
    activo?: string

    @Column({ type: 'varchar', length: 60, nullable: true })
    verificado?: string

    @Column({ default: 'UTC' })
    timezone: string;

    @Column({ default: 'es' })
    language: string;

    @BeforeInsert()
    setDefaults() {
        // Asegurar valores por defecto si no están definidos
        if (!this.timezone) {
            this.timezone = 'UTC';
        }
        if (!this.language) {
            this.language = 'es';
        }
    }

    // @Column({type: 'varchar', length: 60})
    // id_Subcursal: string
}
