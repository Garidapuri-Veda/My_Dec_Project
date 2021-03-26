import React, { useState, useEffect } from "react";

function MyApp(props) {
    const [count, setCount] = useState(0);
    const [changedBy, setChangedBy] = useState("Sandhya");
    const handleMyFunctionClick = () => {
        setCount(count + 1);
        setChangedBy("Veda");
    }

    useEffect(() => {
        if (count > 1) {
            document.title = "ReactHooks";
        }
        console.log("Title Updated")
    }, [count]);    
    return (
        <div>
            <p>This Is Functional Component {props.a} function {count} {changedBy}</p>
            <button onClick={handleMyFunctionClick}>Update Counter</button>
        </div>
    );
}

export default MyApp;