import React from "react";
import Comments from "./Comments"
import firebase from 'firebase';
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom"
import ebla from "./Parks/ebla.jpg"
import laro from "./Parks/laro.jpg"
import fova from "./Parks/fova.jpg"
import iafl from "./Parks/iafl.jpg"
import klse from "./Parks/klse.jpg"
import lecl from "./Parks/lecl.jpg"
import lewi from "./Parks/lewi.jpg"
import mapr from "./Parks/mapr.jpg"
import miin from "./Parks/miin.jpg"
import mora from "./Parks/mora.jpg"
import nepe from "./Parks/nepe.JPG"
import noca from "./Parks/noca.jpg"
import olym from "./Parks/olym.jpg"
import oreg from "./Parks/oreg.jpg"
import sajh from "./Parks/sajh.jpg"
import whmi from "./Parks/whmi.jpg"
import wing from "./Parks/wing.jpg"

export default class SelectedPark extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},

        }
    };

    componentDidMount() {
        const selected = this.props.match.params.id;
        const API_KEY = "";
        fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${selected}&api_key=${API_KEY}`)
        .then(response => response.json())
        //.then(data => {console.log(data.data[0].name)})
        .then(data => {this.setState({data:data.data[0]})})
    }

    render() {
        let vari = "";
        let vari2 = "";
        const variSwitch = this.state.data.parkCode

        switch(variSwitch){
            case "laro": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d341491.82643152017!2d-118.88757338029544!3d48.034863583675985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549d9f3b565ca8ad%3A0x925d2d2d409bede2!2sLake+Roosevelt+National+Recreation+Area+Headquarters!5e0!3m2!1sen!2sus!4v1559695546812!5m2!1sen!2sus";
                        vari = laro;
            break;
            case "ebla": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13993.069117190807!2d-122.76202016273972!3d48.20933832156424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f8cfbedef4775%3A0x5ed9970ca81038f9!2sFort+Ebey+State+Park!5e0!3m2!1sen!2sus!4v1559700017466!5m2!1sen!2sus";
                        vari = ebla;
            break;
            case "fova": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.2258539366017!2d-122.65879748471613!3d45.6261989791032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495af53155e443d%3A0x42e779eac26aab76!2sFort+Vancouver+National+Historic+Site+%7C+Visitor+Center!5e0!3m2!1sen!2sus!4v1559695173844!5m2!1sen!2sus";
                        vari = fova;
            break;
            case "iafl": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.298956600769!2d-118.97032748462387!3d47.969277479210334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549c4624b40f72c7%3A0xecd40f8842fed79b!2s1008+Crest+Dr%2C+Coulee+Dam%2C+WA+99116!5e0!3m2!1sen!2sus!4v1559695360246!5m2!1sen!2sus";
                         vari = iafl;
            break;
            case "klse": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.3755681642087!2d-122.33421148463863!3d47.599386479184155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906abb34a9ba05%3A0x5f7091818a58b3c8!2sKlondike+Gold+Rush+National+Historical+Park!5e0!3m2!1sen!2sus!4v1559695448509!5m2!1sen!2sus";
                         vari = klse;
            break;
            case "lecl": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.0495890777906!2d-123.89250348469653!3d46.12984207911449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549366c0843fb223%3A0x3a3f7e6aae86394d!2sLewis+and+Clark+National+Historical+Park!5e0!3m2!1sen!2sus!4v1559695625222!5m2!1sen!2sus";
                         vari = lecl;
            break;
            case "lewi": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.0495890777906!2d-123.89250348469653!3d46.12984207911449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549366c0843fb223%3A0x3a3f7e6aae86394d!2sLewis+and+Clark+National+Historical+Park!5e0!3m2!1sen!2sus!4v1559695625222!5m2!1sen!2sus";
                        vari = lewi;
            break;
            case "mapr": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.562512304727!2d-119.30284178468918!3d46.318525379120324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5498651cf8dd1f39%3A0x3ce66a03c2f68389!2sManhattan+Project+National+Historical+Park+Hanford%3B+Branch+B+Reactor--Headquarters!5e0!3m2!1sen!2sus!4v1559695851438!5m2!1sen!2sus";
                        vari = mapr;
            break;
            case "miin": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.2184919358433!2d-114.25338978482678!3d42.677913879166766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ab670b8638f8d1%3A0xe61659ac81e487b8!2sMinidoka+National+Historic+Site!5e0!3m2!1sen!2sus!4v1559695944355!5m2!1sen!2sus";
                        vari = miin;
            break;
            case "mora": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174602.8973044223!2d-121.85500780253301!3d46.860021506236414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490cde6eec94b87%3A0x5cf4a1fb4f91a418!2sMount+Rainier+National+Park!5e0!3m2!1sen!2sus!4v1559694369908!5m2!1sen!2sus";
                        vari = mora;
            break;
            case "nepe": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d708068.0245720776!2d-117.5538607899702!3d46.12106986388709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54a048216d4dd5d9%3A0x13cb64a88a97def9!2sNez+Perce+National+Historical+Park+Visitor+Center!5e0!3m2!1sen!2sus!4v1559696055220!5m2!1sen!2sus";
                        vari = nepe;
            break;
            case "noca": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336947.1987233116!2d-121.42589604011827!3d48.716948243726655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548512b8506cf411%3A0x52084fb0ae6433ed!2sNorth+Cascades+National+Park!5e0!3m2!1sen!2sus!4v1559696110727!5m2!1sen!2sus";
                        vari = noca;
            break;
            case "olym": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.5630322713514!2d-123.42780718461869!3d48.099373579220384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548fb174d306e31b%3A0xa36ea544cf8e02ba!2sOlympic+National+Park+Visitor+Center!5e0!3m2!1sen!2sus!4v1559696379276!5m2!1sen!2sus";
                        vari = olym;
            break;
            case "oreg": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.3308337685676!2d-117.73081948474713!3d44.81482437909867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54a4f1e1d716735d%3A0xf12a3a5d1c16f051!2sNational+Historic+Oregon+Trail+Interpretive+Center!5e0!3m2!1sen!2sus!4v1559697011622!5m2!1sen!2sus";
                        vari = oreg;
            break;
            case "sajh": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.0778520692925!2d-122.97949528460433!3d48.45503577925001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f7cafe9401ac9%3A0x107a568fc2c5c6c!2sSan+Juan+Island+%7C+National+Historical+Park!5e0!3m2!1sen!2sus!4v1559697091518!5m2!1sen!2sus";
                        vari = sajh;
            break;
            case "whmi": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.4897476819137!2d-118.4661063848441!3d46.04132880276934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54a26847603804e7%3A0xba71d5a764fa96d6!2sWhitman+Mission+%7C+National+Historic+Site!5e0!3m2!1sen!2sus!4v1559620807897!5m2!1sen!2sus";
                        vari = whmi;
            break;
            case "wing": vari2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.4355001573795!2d-122.32510268463867!3d47.59822097918409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906abc3693b96d%3A0x283dad1306d5fb85!2sWing+Luke+Museum+of+the+Asian+Pacific+American+Experience!5e0!3m2!1sen!2sus!4v1559697118901!5m2!1sen!2sus";
                         vari = wing;
            break;
          default: vari = "";
                    vari2 = "";
          break;
        }


        return(
            <div className="selectedPark">
                
                <div>
            <div className="item-div">
                <h2 className="item-h2"><a href={this.state.data.url}>{this.state.data.fullName}</a></h2>
                <h3 className="item-h3">{this.state.data.description}</h3>
                <h3 className="select-item-h3">Weather Information</h3>
                <h3 className="item-h3">{this.state.data.weatherInfo}</h3>
                <h3 className="select-item-h3"> Location Information</h3>
                <h3 className="item-h3">{this.state.data.directionsInfo}</h3> 
                <hr/> 
                </div>   
                <div>
                <Comments/>
                    </div>  
            </div>
            <div>
                <img className="header-image" src={vari} alt="National Park Service" width="300" />  
                <iframe className="iFrame-style" src={vari2} allowfullscreen="true" />
            </div>
            </div>
        )

    }
}
