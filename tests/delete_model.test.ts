import { deleteModel } from "../api";

let datasetId: string = "my-dataset";

test("Delete Model", async () => {
    await deleteModel(datasetId).then((response) => {
        console.log(JSON.stringify(response, null, 4));
    });
});
