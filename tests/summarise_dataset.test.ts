import { summariseDataset } from "../api";

let datasetId: string = "my-dataset";

test("Summarise Dataset", async () => {
    await summariseDataset(datasetId).then((response) => {
        console.log(JSON.stringify(response, null, 4));
    });
});
