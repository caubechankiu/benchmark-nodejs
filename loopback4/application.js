"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
class HelloWorldApplication extends rest_1.RestApplication {
    constructor(options = {}) {
        super(options);
        this.handler(({ response }, sequence) => {
            sequence.send(response, 'Hello World!');
        });
    }
    async start() {
        await super.start();
        if (!(this.options && this.options.disableConsoleLog)) {
            const rest = await this.getServer(rest_1.RestServer);
            console.log(`REST server running on port: ${await rest.get('rest.port')}`);
        }
    }
}
exports.HelloWorldApplication = HelloWorldApplication;