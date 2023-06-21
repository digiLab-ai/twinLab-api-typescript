import { getVersions } from "../api";

getVersions().then((response) => {
    console.log(JSON.stringify(response, null, 4));
});
