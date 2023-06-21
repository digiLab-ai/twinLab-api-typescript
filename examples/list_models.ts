import { listModels } from "../api";

listModels().then((response) => {
    console.log(JSON.stringify(response, null, 4));
});
