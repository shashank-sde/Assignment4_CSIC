import React, {useState} from "react";
import Axios from "axios";
import App from "../../App";

function Apirefresh() {
    const [joke, setJoke]=useState("");

    const getJoke = () => {
        Axios.get("https:official-joke-api.appspot.com/random_joke").then(
            (response) => {
                setJoke(response.data.setup + "..." + response.data.punchline);
            }
        );
        };
        return(
            <div>
                <br></br>
                <br></br>
                {joke}
                <br></br>
                <br></br>
                {joke}
                <br></br>
                <br></br>
                {joke}
                <br></br>
                <br></br>
                
                {setInterval(getJoke, 60000)}

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
            </div>
        );
    }

export default Apirefresh;