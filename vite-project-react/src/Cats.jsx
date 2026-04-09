import { useState } from "react";


export function Cas(){
    const [ catsData, setCatsData ] = useState(null);

    async function getData() {
        const url = "https://mediacollege.dev/api/cats/";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            setCatsData(result);
            console.log(result);
        } catch (error) {
            console.error(error.message);
        }
    }



    return <div>Cats</div>
}