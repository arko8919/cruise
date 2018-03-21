import React, {Component} from 'react';
import '../css/App.css';
import {Section} from './section/section.js';
import {Header} from './header/header';
import {Footer} from './footer/footer';

class App extends Component {
    render() {
        return (
            <div id="main">
                <Header/>
                <Section/>
                <Footer/>
            </div>
        );
    }
}

export default App;
