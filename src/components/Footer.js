import React from "react";

export default class Footer extends React.Component {
render() {


    return(
        <footer className="footer-nav">
            <a className="footer-link" href="https://www.nps.gov/subjects/digital/nps-data-api.htm">Thanks to the National Park Service Developers' API</a><br/> 
            <p className="item-h2">And thanks to Google Maps;  All photos are copyright by their respective owners</p>
            <p className="item-h2">This site is not affiliated with the NPS, Department of Interior, or the United States Government</p>
        </footer>
    )
}


}