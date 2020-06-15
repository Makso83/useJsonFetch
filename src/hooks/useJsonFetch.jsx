import { useState, useEffect } from "react";
const GET = "GET";

// switch и константы реализованы на случай дальнейшего расширения функционала хука

function useJsonFetch(url, requestType = "GET") {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetcher() {
        setLoading(true);
        switch (requestType) {
            case GET: {
                try {
                    const response = await fetch(url, {
                        method: GET,
                    });
                    const responseType = response.headers.get("content-type");
                    if (!responseType.includes("application/json")) {
                        setError("Ошибка получения JSON");
                        break;
                    }
                    if (!response.ok) {
                        setError(
                            "Ошибка получения данных. Код: " +
                                response.status +
                                " (" +
                                response.statusText +
                                ")"
                        );
                        break;
                    }
                    const responseData = await response.json();
                    setData(responseData);
                    break;
                } catch (error) {
                    setError("Ошибка запроса " + error.message);
                    break;
                }
            }

            default:
                return null;
        }
        setLoading(false);
    }

    useEffect(() => {
        fetcher();
    }, []);

    return [data, loading, error];
}

export default useJsonFetch;
