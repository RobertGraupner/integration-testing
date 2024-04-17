import { useState, useEffect } from "react";

export function RenderList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.example.com/data")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    return (
        <div>
            {data ? (
                <ul>
                    {data.map((item) => (
                        <li key={item.name}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <></>
            )}
        </div>
    );
}
