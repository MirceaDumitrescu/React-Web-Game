"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var permissions_1 = require("../utils/permissions");
var uuid_1 = require("uuid");
var userSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        default: uuid_1.v4
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    permissions: {
        type: String,
        default: permissions_1.permissions.user
    },
    date: {
        type: Date,
        default: Date.now
    }
});
exports.User = mongoose_1.default.model('User', userSchema);
