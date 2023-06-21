import fs from "fs";

import { trainModel } from "../api";

if (process.argv.length != 5) {
    console.log(`Usage: npx ts-node ${__filename} <path/to/parameters.json> <model_id> <processor>`);
    process.exit(1);
}

let trainingParametersPath: string = process.argv[2]!;
let datasetId: string = process.argv[3]!;
let processor: string = process.argv[4]!;

let trainingParametersJSON = fs.readFileSync(trainingParametersPath).toString();

trainModel(trainingParametersJSON, datasetId, processor).then((response) => {
    console.log(JSON.stringify(response, null, 4));
});
