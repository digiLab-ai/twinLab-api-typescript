import { listDatasets } from "../api";

test("List Datasets", async () => {
    await listDatasets().then((response) => {
        console.log(JSON.stringify(response, null, 4));
    });
});
