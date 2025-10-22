"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const typeorm_1 = require("typeorm");
let Auth = class Auth {
    id;
    name;
    apellido;
    email;
    telefono;
    foto_perfil;
    password;
    fecha_registro;
    fecha_ultimaConexion;
    activo;
    verificado;
    timezone;
    language;
    setDefaults() {
        if (!this.timezone) {
            this.timezone = 'UTC';
        }
        if (!this.language) {
            this.language = 'es';
        }
    }
};
exports.Auth = Auth;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Auth.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60 }),
    __metadata("design:type", String)
], Auth.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Auth.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60 }),
    __metadata("design:type", String)
], Auth.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Auth.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Auth.prototype, "foto_perfil", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60 }),
    __metadata("design:type", String)
], Auth.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Auth.prototype, "fecha_registro", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Auth.prototype, "fecha_ultimaConexion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Auth.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Auth.prototype, "verificado", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'UTC' }),
    __metadata("design:type", String)
], Auth.prototype, "timezone", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'es' }),
    __metadata("design:type", String)
], Auth.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Auth.prototype, "setDefaults", null);
exports.Auth = Auth = __decorate([
    (0, typeorm_1.Entity)()
], Auth);
//# sourceMappingURL=auth.entity.js.map