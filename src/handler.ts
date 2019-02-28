import {Container} from "inversify";
import "reflect-metadata";
import {HelloService} from "./HelloService";

export const TheContainer = new Container({
    autoBindInjectable: true,
    defaultScope: "Singleton",
    skipBaseClassChecks: true,
});

export const hello = async () => {
    const service: HelloService = TheContainer.get(HelloService);
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            value: await service.hello(),
        }),
    };
};
