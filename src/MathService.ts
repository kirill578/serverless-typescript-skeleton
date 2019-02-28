import {injectable} from "inversify";
import {addition} from "./legacyJsCode";
// same as
// var addition = require('./legacyJsCode').addition

@injectable()
export class MathService {
    public async add(a: number, b: number): Promise<number> {
        return addition(a, b);
    }
}
