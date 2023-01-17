import React, { Component } from 'react';
import HeaderClassComponent from './HeaderClassComponent';
import FooterClassComponent from './FooterClassComponent';
import MainContentClassComponent from './MainContentClassComponent';

//react snippet - rcc

class App extends Component {
    render() {
        return (
            <div>
                <HeaderClassComponent/>
                <MainContentClassComponent/>
                <FooterClassComponent/>
            </div>
        );
    }
}

export default App;