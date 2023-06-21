import { viewDataset } from "../api";

let datasetId: string = "my-dataset";

test("View Dataset", async () => {
    await viewDataset(datasetId).then((response) => {
        console.log(response);
    });
});
