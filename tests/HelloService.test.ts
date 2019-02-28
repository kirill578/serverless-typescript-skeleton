import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { createSandbox, SinonSandbox, SinonStubbedInstance } from 'sinon';
import {TheContainer} from "../src/handler";
import {MathService} from "../src/MathService";
import {HelloService} from "../src/HelloService";

chai.use(chaiAsPromised);

describe('Hello service', () => {
    let sandbox: SinonSandbox;
    let mathService: SinonStubbedInstance<MathService>;
    let helloService: HelloService;

    beforeEach(() => {
        TheContainer.snapshot();
        sandbox = createSandbox();

        // create mock and register with container
        mathService = sandbox.createStubInstance(MathService);
        TheContainer.bind(MathService).toConstantValue(mathService as any);

        helloService = TheContainer.get(HelloService);
    });

    afterEach(function() {
        sandbox.restore();
        TheContainer.restore();
    });

    it('should pass arguments and get a result from math service', async () => {
        mathService.add.resolves(10);

        const response = await helloService.hello();

        sandbox.assert.calledWithExactly(mathService.add, 1, 1);

        return chai.expect(response).to.equal('1 + 1 = 10');
    });
});
