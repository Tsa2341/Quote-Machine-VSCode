import { randomNumGen } from './helperFunctions';
import './vendor/css/App.css';
import React from 'react';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            num : 0,
        }
        this.randomNumReloader = this.randomNumReloader.bind(this);
    }


    randomNumReloader = () => {
            this.setState({
                num : randomNumGen(this.props.quoteObjects.length),
            });
        };

    componentDidMount() {
        this.randomNumReloader();
    }
    
    render() {
        return ( 
            <div id="div-app" className="App">
                <div id="quote-box">
                    <p id="text">{this.props.quoteObjects[this.state.num].quoteText}</p>
                    <p id="author">{this.props.quoteObjects[this.state.num].quoteAuthor}</p>
                    <a id="tweet-quote" href="https://twitter.com/intent/tweet">
                        <i className="fab fa-twitter-square" />
                    </a>
                    <button id="new-quote" onClick={this.randomNumReloader}>New-quote</button>
                </div>
            </div>
        );
    }
}
 
export default App;
