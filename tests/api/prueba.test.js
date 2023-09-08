import { sayHello } from "../../api/prueba";

describe("Prueba js test", () => {
    test("Return message", () => {
        const result = sayHello();
        expect(result).toBe("Hi friend");
    })
})