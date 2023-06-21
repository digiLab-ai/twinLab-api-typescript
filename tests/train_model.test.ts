import fs from "fs";

import { trainModel } from "../api";

let trainingParametersPath: string = "resources/input/biscuits/training_parameters.json";
let datasetId: string = "my-dataset";
let processor: string = "cpu";

let trainingParametersJSON = fs.readFileSync(trainingParametersPath).toString();

test("Train Model", async () => {
    await trainModel(trainingParametersJSON, datasetId, processor).then((response) => {
        console.log(JSON.stringify(response, null, 4));
    });
});
