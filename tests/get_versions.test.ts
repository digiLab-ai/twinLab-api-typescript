import { getVersions } from "../api";

test("Get Versions", async () => {
    await getVersions().then((response) => {
        console.log(JSON.stringify(response, null, 4));
    });
});
