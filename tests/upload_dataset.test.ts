import fs from "fs";

import { uploadDataset } from "../api";

let datasetPath: string = "resources/input/biscuits/data.csv";
let datasetId: string = "my-dataset";

let datasetCSV = fs.readFileSync(datasetPath).toString();

test("Upload Dataset", async () => {
    await uploadDataset(datasetCSV, datasetId).then((response) => {
        console.log(JSON.stringify(response, null, 4));
    });
});
