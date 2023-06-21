import { listDatasets } from "../api";

test("List Datasets", () => {
    listDatasets().then((response) => {
        // console.log(JSON.stringify(response, null, 4));
        expect(response).toStrictEqual([]);
    });
});
