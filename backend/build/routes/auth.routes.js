"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var router = require("express").Router();
var user_1 = require("../models/user");
var validations_1 = require("../middlewares/validations");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
router.post("/register", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, email, error, user, userExists, emailExists, salt, _b, err_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password, email = _a.email;
                error = (0, validations_1.registerValidation)(req.body).error;
                if ((0, validations_1.registerValidation)(req.body).error) {
                    return [2 /*return*/, res
                            .status(400)
                            .send(error.details[0].message)];
                }
                if (!(!username || !password || !email)) return [3 /*break*/, 1];
                res.status(400).json({
                    error: "Please provide a username, password and Email",
                });
                return [3 /*break*/, 9];
            case 1:
                user = new user_1.User({
                    username: username,
                    password: password,
                    email: email,
                });
                _c.label = 2;
            case 2:
                _c.trys.push([2, 8, , 9]);
                return [4 /*yield*/, user_1.User.findOne({
                        username: username,
                    })];
            case 3:
                userExists = _c.sent();
                if (userExists) {
                    return [2 /*return*/, res.status(400).json({
                            error: "Username already exists",
                        })];
                }
                return [4 /*yield*/, user_1.User.findOne({
                        email: email,
                    })];
            case 4:
                emailExists = _c.sent();
                if (emailExists) {
                    return [2 /*return*/, res.status(400).json({
                            error: "Email already exists",
                        })];
                }
                return [4 /*yield*/, bcryptjs_1.default.genSalt(10)];
            case 5:
                salt = _c.sent();
                _b = user;
                return [4 /*yield*/, bcryptjs_1.default.hash(password, salt)];
            case 6:
                _b.password = _c.sent();
                return [4 /*yield*/, user.save()];
            case 7:
                _c.sent();
                res.status(200).json({
                    message: "User created successfully",
                });
                return [3 /*break*/, 9];
            case 8:
                err_1 = _c.sent();
                res.json({ message: err_1 });
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
router.post("/login", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, error, user, validPass, token, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                error = (0, validations_1.loginValidation)(req.body).error;
                if ((0, validations_1.loginValidation)(req.body).error) {
                    return [2 /*return*/, res
                            .status(400)
                            .send(error.details[0].message)];
                }
                if (!(!email || !password)) return [3 /*break*/, 1];
                res.status(400).json({
                    error: "Please provide a email and password",
                });
                return [3 /*break*/, 5];
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, user_1.User.findOne({
                        email: email,
                    })];
            case 2:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, res.status(400).json({
                            error: "User does not exist",
                        })];
                }
                return [4 /*yield*/, bcryptjs_1.default.compare(password, user.password)];
            case 3:
                validPass = _b.sent();
                if (!validPass) {
                    return [2 /*return*/, res.status(400).json({
                            error: "Invalid password",
                        })];
                }
                token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN_SECRET);
                res.status(200).json({
                    message: "User logged in successfully",
                    token: token,
                });
                return [3 /*break*/, 5];
            case 4:
                err_2 = _b.sent();
                res.json({ message: err_2 });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
module.exports = router;
