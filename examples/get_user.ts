import { getUser } from "../api";

getUser().then((response) => {
    console.log(JSON.stringify(response, null, 4));
});
