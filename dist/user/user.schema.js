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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let User = class User {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwoHCAoJBwkGCAoHCAoICAcIDRIICQcKFREWFhURExMYHCggGCYxGxMTITEhMSkrLi4uFx8zODMsNygtLisBCgoKCw0NDw0NFS0dHxkrKysrKysrLSsrKysrLTcrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAN8A2QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQIFBgQDB//EADYQAQACAgEBBQUFBwUBAAAAAAABAgMRBAUSISIxUjJBUXKSExVCYmMzNFNhcYKiIyRzgZEU/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD9EAaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADv8AKO+WhxelXyx2s9vs49NfaBn7g3DocXTsOOPY7XzPrHHw/wAKn0lHM7PN0l+FhtGpxU/6ePkdIraJnDOvyyUY4vkxWwTNMlOzKgAAAAAAAAAAAAAAAAAAAPRwMP8A9GaKx3xXxWBodK4PZiMuaN3nyaceZEajUR3R3JZVIACJSA83K4teTSa2jv8Aw2c9mx2w3mlvc6lldZwbrGWI12PaUZAfzFQAAAAAAAAAAAAAAAAavQsf7TJP4vZZTc6LH+2j49pBogIoAAACJfHmY4yYL1n0vuraNxMT74BykfD0i2SIjJeI/DZVpAAAAAAAAAAAAAAAABudE/d/7mG1eh5Y1fHv2fEitgRuEoAAAACLd0TMpefm5Ix4L2mdeHsg5y87yZJ9VrKnf5yNIAAAAAAAAAAAAAAAAT5Ptw808fNS8eXs2fEB1dbRaItHvWY3SebFI+xzW+SzY3DKpERO0gAjcAT5MfrXI76YqTv1PdzeVXj1nxeO3s1c9e9sl5vbzsuYI7/eAqAAAAAAAAAAAAAAAAAAHm0OF1S2KOxyPFWPZyM81sHTYeRjyxE0vSX23Hm5OImPJb7S8RqMmX6kiuotetY3a2ng5PVaUia4fFdi2ta0atO/62RqI8u4gtlyXzW7eSe9UGsQAQAAAAAAAAAAAAAADcL4sVs89jFG5a3F6VSmr5/9S/p/CDKxYb5v2dLz/g9ePpOW/fbsVbdaxXurGo/kmPNKrIjo1vfl1/RP3P8Ar3+lsBRj/c/69/pPuf8AXv8AS2Aox/uf9e/0n3P+vf6WwFGPPR592b/F87dIyxG65KS3ET3lHNZuFmxe1TcflfCe7unudXO3m5PBxciPFXU+qCjnR6eZwr8ad9ndPU8yoAAAAAAAAAAPtx+PbkXilPrfGImZ7NfOzouBxY42OI7Pjn2rGi/F4teNTsUj5p9T7wlG4ZVIjcG4BIhIAhIAIBII3AJRPkbg3AK3rFomt43EsPqHAnBPbxd+P0+lvT/6rakWia2jcSDlfdsenncaeNkmPwX9l5mkAAAAAAAJ8gaHSMEZcn2lo7qVbW+95emYoxcakfHxPQmqts3CogtuDcKgLbNqgLbNqgLbNqgLbNwqAtuDcKgLbN/FUB5+p4Iz4ZmPOrA13fK6ie+NfHwua5FPssuSn5lxHzAUAAAADW5iPzCY84+aoOjw+HHSvpqvtSs+GPlSC2zapALbNo3BuATs2jcEgnZtUgFtm0SgFtm1QFtm1QFtm1UAvtidVr2eRM/GvabLI6v+8R/xA8IAAAAAB74+aoA6OvsRP5Tb4cHLOTDG/OKvuBs2AGzYAbNgBs2AGzYAbNgBs2AGzYAbZPVpic8a/hNWZ1G/SwuXknLmvf8AtB8gAAAf/9k=',
        required: true,
    }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'user' }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
User = __decorate([
    (0, mongoose_1.Schema)()
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map