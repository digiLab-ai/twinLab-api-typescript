import { listDatasets } from "../api";

listDatasets().then((response) => {
    console.log(JSON.stringify(response, null, 4));
});
