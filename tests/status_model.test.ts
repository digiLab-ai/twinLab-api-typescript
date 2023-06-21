import { statusModel } from "../api";

let modelId: string = "my-model";

test("Status Model", async () => {
    await statusModel(modelId).then((response) => {
        console.log(JSON.stringify(response, null, 4));
    });
});
