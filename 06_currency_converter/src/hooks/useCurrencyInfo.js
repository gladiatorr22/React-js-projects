import {useEffect, useState} from "react"

function useCurrencyInfo(currency) {
    // 1. Initialize state to an empty object
    const [data, setData] = useState({})

    useEffect(() => {
        // 2. Normalize the currency string to lowercase for the API
        const baseCurrency = currency.toLowerCase();
        
        // 3. Perform the fetch request
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`)
        
        // Handle the response and convert to JSON
        .then((res) => {
            // Check for a bad response (e.g., a non-404 network error or a malformed response)
            if (!res.ok) {
                // Throw an error to be caught by the .catch() below
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        
        // Process the JSON data
        .then((res) => {
            // The API returns the data keyed by the currency string, e.g., { "usd": { ...rates } }
            // We want to store just the inner rates object: res[baseCurrency]
            setData(res[baseCurrency]);
        })
        
        // Add robust error handling to prevent application crashes
        .catch((error) => {
            console.error("Failed to fetch currency info:", error);
            // Optionally set data to an empty object or a default value on error
            setData({}); 
        });

    }, [currency]); // Re-run effect only when the 'currency' dependency changes

    // 4. (Optional) Log the *new* data after it has been set and the component re-renders
    // This runs after the state has actually been updated.
    useEffect(() => {
        if (Object.keys(data).length > 0) {
            console.log("Fetched and processed currency data:", data);
        }
    }, [data]);
    
    // 5. Return the final data object
    return data;
}

export default useCurrencyInfo;