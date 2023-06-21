import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + ".env" });

const TWINLAB_SERVER = process.env["TWINLAB_SERVER"]!;

function createHeaders(contentType?: string, processor?: string): HeadersInit {
    let headers: HeadersInit = new Headers();

    if (TWINLAB_SERVER.includes("rapidapi")) {
        headers.set("X-RapidAPI-Key", process.env["TWINLAB_KEY"]!);
        headers.set("X-RapidAPI-Host", process.env["TWINLAB_HOST"]!);
    } else {
        headers.set("X-RapidAPI-Proxy-Secret", process.env["TWINLAB_SECRET"]!);
        headers.set("X-RapidAPI-User", process.env["TWINLAB_USERNAME"]!);
    }

    if (contentType) {
        headers.set("Content-Type", contentType);
    }

    if (processor) {
        headers.set("X-Processor", processor);
    }

    return headers;
}

export async function getVersions(): Promise<string> {
    let headers: HeadersInit = createHeaders();

    let url = TWINLAB_SERVER + "/versions";

    let data = "";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers,
        });

        data = await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
    return data;
}

export async function getUser(): Promise<string> {
    let headers: HeadersInit = createHeaders();

    let url = TWINLAB_SERVER + "/user";

    let data = "";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers,
        });

        data = await response.json();
        console.log("data:", data);
    } catch (error) {
        console.error("Error:", error);
    }
    return data;
}

export async function listDatasets(): Promise<string[]> {
    let headers: HeadersInit = createHeaders();

    let url = TWINLAB_SERVER + "/datasets";

    let data = [];
    try {
        const response = await fetch(url, {
            method: "GET",
            headers,
        });

        data = await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
    return data;
}

export async function uploadDataset(datasetCSV: string, datasetId: string): Promise<string> {
    let headers: HeadersInit = createHeaders("text/csv");

    let url = TWINLAB_SERVER + "/datasets/" + datasetId;

    let data = "";
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers,
            body: datasetCSV,
        });

        data = await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
    return data;
}

export async function viewDataset(datasetId: string): Promise<string> {
    let headers: HeadersInit = createHeaders();

    let url = TWINLAB_SERVER + "/datasets/" + datasetId;

    let data = "";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers,
        });

        data = await response.text();
    } catch (error) {
        console.error("Error:", error);
    }
    return data;
}

export async function summariseDataset(datasetId: string): Promise<string> {
    let headers: HeadersInit = createHeaders();

    let url = TWINLAB_SERVER + "/datasets/" + datasetId + "/summarise";

    let data = "";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers,
        });

        data = await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
    return data;
}

export async function deleteDataset(datasetId: string): Promise<string> {
    let headers: HeadersInit = createHeaders();

    let url = TWINLAB_SERVER + "/datasets/" + datasetId;

    let data = "";
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers,
        });

        data = await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
    return data;
}

export async function listModels(): Promise<string[]> {
    let headers: HeadersInit = createHeaders();

    let url = TWINLAB_SERVER + "/models";

    let data = [];
    try {
        const response = await fetch(url, {
            method: "GET",
            headers,
        });

        data = await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
    return data;
}

export async function trainModel(trainingParametersJSON: string, modelId: string, processor: string): Promise<string> {
    let headers: HeadersInit = createHeaders("application/json", processor);

    let url = TWINLAB_SERVER + "/models/" + modelId;

    let data = "";
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers,
            body: trainingParametersJSON,
        });

        data = await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
    return data;
}

export async function statusModel(modelId: string): Promise<string> {
    let headers: HeadersInit = createHeaders();

    let url = TWINLAB_SERVER + "/models/" + modelId;

    let data = "";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers,
        });

        data = await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
    return data;
}

export async function summariseModel(modelId: string): Promise<string> {
    let headers: HeadersInit = createHeaders();

    let url = TWINLAB_SERVER + "/models/" + modelId + "/summarise";

    let data = "";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers,
        });

        data = await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
    return data;
}

export async function useModel(predictionInputCSV: string, modelId: string, method: string, processor: string): Promise<string> {
    let headers: HeadersInit = createHeaders("text/csv", processor);

    let url = TWINLAB_SERVER + "/models/" + modelId + "/" + method;

    let data = "";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers,
            body: predictionInputCSV,
        });

        data = await response.text();
    } catch (error) {
        console.error("Error:", error);
    }
    return data;
}

export async function deleteModel(datasetId: string): Promise<string> {
    let headers: HeadersInit = createHeaders();

    let url = TWINLAB_SERVER + "/models/" + datasetId;

    let data = "";
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers,
        });

        data = await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
    return data;
}
