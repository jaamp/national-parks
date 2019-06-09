import React from 'react';
import firebase from 'firebase';
import {Link, withRouter} from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <Link className="header-link" to="/">Home</Link>
        )
    }
}

export default Nav;