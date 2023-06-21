import { listDatasets } from "../api";

test("List Datasets", () => {
    return listDatasets().then((response) => {
        console.log(JSON.stringify(response, null, 4));
    });
});
