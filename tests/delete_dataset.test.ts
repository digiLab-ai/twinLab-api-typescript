import { deleteDataset } from "../api";

let datasetId: string = "my-dataset";

test("Delete Dataset", async () => {
    const response = await deleteDataset(datasetId);
    console.log(JSON.stringify(response, null, 4));
});
