import React from 'react'
import {useLocation, useHistory} from "react-router";

function About() {

    const location = useLocation();
    const history = useHistory();
    console.log(location);
    return (
        <div>
            <div>About</div>
            <div>location: {location.pathname}</div>
            <div>From: {location.state.from}</div>
            <button onClick={() => history.goBack()}> Go Back </button>
        </div>
    )
}

export default About;