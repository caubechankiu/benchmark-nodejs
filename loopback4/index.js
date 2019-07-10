"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
async function main() {
    const app = new application_1.HelloWorldApplication();
    await app.start();
    return app;
}
exports.main = main;