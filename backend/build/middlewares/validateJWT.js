"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAuth = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var verifyAuth = function (req, res, next) {
    var token = req.headers.authorization;
    if (!token)
        return res
            .status(401)
            .send("Access denied. No token provided.");
    try {
        var verified = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }
    catch (err) {
        res.status(400).send("Invalid token.");
    }
};
exports.verifyAuth = verifyAuth;
