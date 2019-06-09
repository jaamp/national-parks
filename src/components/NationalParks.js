import React from "react";
import firebase from 'firebase';
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom"
import SelectedPark from "./SelectedPark";

export default class NationalParks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{}],

        }
    };

    componentDidMount() {
        const API_KEY = "";
        fetch(`https://developer.nps.gov/api/v1/parks?stateCode=wa&api_key=${API_KEY}`)
        .then(response => response.json())
        //.then(data => {console.log(data)})
        .then(data => {this.setState({data:data.data})})
    }

    render() {

    const parkLink = this.state.data.map((item, idx) => 
    {return <li key={idx}>
          <NavLink className="navLinkClass" activeStyle={{color: 'red'}} to={`/Park/${item.parkCode}`}>{item.fullName}</NavLink>
            </li>});

        return(
              <div className="main-div">
                <div className="appClass main-div1">
                <h2 className="select-item-p">Explore and Enjoy Washington's Beauty, History, and Natural Wonders</h2>
                <p className="select-item-p">(select an area below for a discription, weather and travel information)</p>
                <ul className="park-ul">
                  {parkLink}
                </ul>
                </div>
                <div className="appClass main-div2">
                    <h2 className="select-item-p">Support Our National Parks</h2>
                    <a className="aside-link" href="https://www.nps.gov/getinvolved/index.htm" target="_blank"><h3 className="item-h2">Get Involved</h3></a>
                    <a className="aside-link" href="https://www.nps.gov/getinvolved/volunteer.htm" target="_blank"><h3 className="item-h2">Volunteer</h3></a>
                    <a className="aside-link" href="https://www.nps.gov/getinvolved/donate.htm" target="_blank"><h3 className="item-h2">Donate</h3></a>
                    <a className="aside-link" href="https://www.wta.org/" target="_blank"><h3 className="item-h2">Washington Trails Association</h3></a>
                </div>
          </div>
        );
    }
}