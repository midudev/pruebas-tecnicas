import { suite, test, assert } from "vitest";
import { getReviews } from "../context/helpers/services/review/getReviews.js";

suite("getReviews", () => {
    test("Debe ser una función", () => {
        assert.isFunction(getReviews);
    });

    test("Debe recibir un string y un number por parámetros", async () => {
        const data = await getReviews("978-0618640157", 1);
        assert.isObject(data);

        const { respuesta, listaDeReviews } = data;
        assert.isObject(respuesta);
        assert.isArray(listaDeReviews);
        assert.isNumber(contador);
    });
});