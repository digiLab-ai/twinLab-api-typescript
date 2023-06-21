import fs from "fs";

import { useModel } from "../api";

let predictionInputPath: string = "resources/input/biscuits/prediction_input.csv";
let modelId: string = "my-model";
let method: string = "predict";
let processor: string = "cpu";

let predictionInputCSV = fs.readFileSync(predictionInputPath).toString();

test("Use Model", async () => {
    await useModel(predictionInputCSV, modelId, method, processor).then((response) => {
        console.log(response);
    });
}, 10000);
