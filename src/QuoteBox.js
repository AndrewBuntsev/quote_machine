import React, {Component} from 'react';
import * as $ from 'jquery';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class QuoteBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.loadQuotes = this.loadQuotes.bind(this);
        //this.getRandomQuote = this.getRandomQuote.bind(this);
        this.setNewQuote = this.setNewQuote.bind(this);
    }

    quotesData;

    getRandomQuote(){
        return this.quotesData[Math.floor(Math.random() * this.quotesData.length)];
    }

    setNewQuote(){
        let newQuote = this.getRandomQuote();
        console.log(newQuote);
        this.setState({quote: newQuote.quote, author: newQuote.author});
    }

    loadQuotes(){
        var that = this;
        $.ajax({
            headers: {
              Accept: "application/json"
            },
            url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
            success: function(jsonQuotes) {
              if (typeof jsonQuotes === 'string') {
                that.quotesData = JSON.parse(jsonQuotes).quotes;
                console.log(that.quotesData);

                that.setNewQuote();
              }
            }
          });
        }

    componentDidMount(){
        this.loadQuotes();
    }


    render(){

        const twitterStyle = {
            margin: '40px'
          };

        
        return <div id="quote-box">
            <p id="text"><i>{this.state.quote}</i></p>
            <p id="author">- {this.state.author}</p>
            <div>
                <a style={twitterStyle} id="tweet-quote" className="twitter-share-button" href={'https://twitter.com/intent/tweet?text=' + this.state.quote + '   - ' + this.state.author} target="_blank" data-size="large"><i className="fa fa-twitter"></i></a>
                <button id="new-quote" onClick={this.setNewQuote}>New Quote</button>
            </div>
        </div>;
    }
}

export default QuoteBox;