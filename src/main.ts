import Thing1 from "./thing1";
import Thing2 from "./thing2";

export default class Main {
    thing1: Thing1;

    constructor() {

        // used internally, no need to document this
        let other = new Thing2();

        // this is user facing, should be documented
        this.thing1 = new Thing1();
    }
}
