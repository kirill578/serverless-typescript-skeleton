import {injectable} from "inversify";
import {MathService} from "./MathService";


@injectable()
export class HelloService {
    constructor(
        private mathService: MathService,
    ) {}

    public async hello() {
        const result: number = await this.mathService.add(1, 1);
        return `1 + 1 = ${result}`;
    }
}
