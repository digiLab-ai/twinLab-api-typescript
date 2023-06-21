import { summariseModel } from "../api";

let modelId: string = "my-model";

test("Summarise Model", async () => {
    await summariseModel(modelId).then((response) => {
        console.log(JSON.stringify(response, null, 4));
    });
});
