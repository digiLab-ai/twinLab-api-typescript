import { listModels } from "../api";

test("List Models", async () => {
    await listModels().then((response) => {
        console.log(JSON.stringify(response, null, 4));
    });
});
