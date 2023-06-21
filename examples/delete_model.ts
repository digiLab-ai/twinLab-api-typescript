import { deleteModel } from "../api";

if (process.argv.length != 3) {
    console.log(`Usage: npx ts-node ${__filename} <model_id>`);
    process.exit(1);
}

let datasetId: string = process.argv[2]!;

deleteModel(datasetId).then((response) => {
    console.log(JSON.stringify(response, null, 4));
});
