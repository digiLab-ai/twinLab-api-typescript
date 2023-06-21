import fs from "fs";

import { uploadDataset } from "../api";

if (process.argv.length != 4) {
    console.log(`Usage: npx ts-node ${__filename} <path/to/dataset.csv> <dataset_id>`);
    process.exit(1);
}

let datasetPath: string = process.argv[2]!;
let datasetId: string = process.argv[3]!;

let datasetCSV = fs.readFileSync(datasetPath).toString();

uploadDataset(datasetCSV, datasetId).then((response) => {
    console.log(JSON.stringify(response, null, 4));
});
