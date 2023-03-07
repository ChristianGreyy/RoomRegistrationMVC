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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthViewController = void 0;
const common_1 = require("@nestjs/common");
let AuthViewController = class AuthViewController {
    SignIn(res) {
        return res.render('index', { message: 'Sign in' });
    }
    SignUp(res) {
        return res.render('index', { message: 'Sign up' });
    }
};
__decorate([
    (0, common_1.Get)('sign-in'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthViewController.prototype, "SignIn", null);
__decorate([
    (0, common_1.Get)('sign-up'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthViewController.prototype, "SignUp", null);
AuthViewController = __decorate([
    (0, common_1.Controller)('auth')
], AuthViewController);
exports.AuthViewController = AuthViewController;
//# sourceMappingURL=auth.view.controller.js.map