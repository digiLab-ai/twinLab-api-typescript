import { deleteDataset } from "../api";

if (process.argv.length != 3) {
    console.log(`Usage: npx ts-node ${__filename} <dataset_id>`);
    process.exit(1);
}

let datasetId: string = process.argv[2]!;

deleteDataset(datasetId).then((response) => {
    console.log(JSON.stringify(response, null, 4));
});
