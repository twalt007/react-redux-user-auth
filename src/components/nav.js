import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userSignIn, userSignOut} from '../actions';

class Nav extends Component{
    renderAuthButtons(){
        const { auth, userSignIn, userSignOut } = this.props;
        if(auth){
            return <button className="btn red darken-2" onClick={userSignOut}>Sign Out</button>
        }

        return <button className="btn green darken-2" onClick={userSignIn}>Sign In</button>

    }


    render(){
        return (
            <nav style={{padding: '0 8px'}} className="blue darken-4">
                <div className="nav-wrapper">
                    <Link to='/' className="brand-logo">Auth Demo</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/secret-list">Secret List</Link>
                        </li>
                        <li>
                            {this.renderAuthButtons()}
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {
    userSignIn: userSignIn,
    userSignOut: userSignOut
})(Nav);