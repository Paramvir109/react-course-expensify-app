import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import  Header  from './../components/Header';


const PrivateRoute = ({
    isAuthenticated,
    component : Component,
    ...rest //rest variable will contain all the props that we didn't destructure

    //props in line 19 is props of Route
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? 
        (<div>

            <Header />
            <Component {...props}/>
            
        </div>) :
        (<Redirect to="/" />)
    )}/>
)
const mapStateToProps = (state) => ({
    isAuthenticated : !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);
