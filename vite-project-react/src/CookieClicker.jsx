import { useState } from "react";

export function CookieClicker(){
    const [score, setScore ] = useState(0);

    function scoreUp(){
        setScore(score+1);
    }
    return (
        <section className="cookieClicker">
            <div>score: {score}</div>
            <button onClick={scoreUp}>Cars</button>
        </section>
    )
}