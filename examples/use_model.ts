import fs from "fs";

import { useModel } from "../api";

if (process.argv.length != 6) {
    console.log(`Usage: npx ts-node ${__filename} <path/to/input.csv> <model_id> <method> <processor>`);
    process.exit(1);
}

let predictionInputPath: string = process.argv[2]!;
let modelId: string = process.argv[3]!;
let method: string = process.argv[4]!;
let processor: string = process.argv[5]!;

let predictionInputCSV = fs.readFileSync(predictionInputPath).toString();

useModel(predictionInputCSV, modelId, method, processor).then((response) => {
    console.log(response);
});
