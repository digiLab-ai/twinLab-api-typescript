import { getUser } from "../api";

test("Get User", async () => {
    await getUser().then((response) => {
        console.log(JSON.stringify(response, null, 4));
    });
});
