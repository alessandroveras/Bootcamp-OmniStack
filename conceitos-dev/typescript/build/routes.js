"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        email: "alessandro.veras@gmail.com",
        password: "tim@123",
        techs: [
            "Node.js",
            "ReactJS",
            "React Native",
            { title: "JavaScript", experience: 100 },
        ],
    });
    console.log(user);
    return response.json({ message: "Hello World", user: user });
}
exports.helloWorld = helloWorld;
