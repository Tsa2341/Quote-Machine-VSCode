import { connect, Provider } from "react-redux";
import App from "../App";
import React from 'react';
import { store } from "./state";


const mapStateToProps = (state) => {
    return {
        quoteColors : state.quoteColors,
        quoteObjects : state.quoteObjects,
    }
}


const Container = connect(mapStateToProps,null)(App)

class AppWrapper extends React.Component {
    render() { 
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
};
 
export default AppWrapper;