"use strict";
const thing1_1 = require("./src/thing1");
const thing2_1 = require("./src/thing2");
class Main {
    constructor() {
        // used internally, no need to document this
        let other = new thing2_1.default();
        // this is user facing, should be documented
        this.thing1 = new thing1_1.default();
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Main;
//# sourceMappingURL=main.js.map