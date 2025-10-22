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
exports.CreateAuthDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const class_transformer_2 = require("class-transformer");
class CreateAuthDto {
    name;
    apellido;
    email;
    password;
    telefono;
    foto_perfil;
    fecha_registro;
    fecha_ultimaConexion;
    timezone;
    idioma;
    _timezone;
    _language;
}
exports.CreateAuthDto = CreateAuthDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El Nombre no puede ir vacio' }),
    (0, class_validator_1.IsString)({ message: 'Nombre no válido' }),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Apellido no válido' }),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "apellido", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El Email no puede ir vacio' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El Password no puede ir vacio' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8, { message: 'El Password debe tener al menos 8 caracteres' }),
    (0, class_validator_1.MaxLength)(10, { message: 'El Password debe contener máximo 10 caracteres' }),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPhoneNumber)('ZZ', { message: 'Telefono no válido' }),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Foto de Perfil no válida' }),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "foto_perfil", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "fecha_registro", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "fecha_ultimaConexion", void 0);
__decorate([
    (0, class_validator_1.IsTimeZone)(),
    (0, class_transformer_2.Transform)(({ value, obj, key }) => {
        if (!value && obj._timezone) {
            return obj._timezone;
        }
        return value || 'UTC';
    }),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "timezone", void 0);
__decorate([
    (0, class_validator_1.IsLocale)(),
    (0, class_transformer_2.Transform)(({ value, obj, key }) => {
        if (!value && obj._language) {
            return obj._language;
        }
        return value || 'es';
    }),
    __metadata("design:type", String)
], CreateAuthDto.prototype, "idioma", void 0);
//# sourceMappingURL=create-auth.dto.js.map