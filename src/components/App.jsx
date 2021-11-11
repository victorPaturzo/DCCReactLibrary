import React, {Component} from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "The Art of War", author: "Sun Tzu"},
            {title: 'Inheritance', author: 'Christopher Paolini'},
            {title: "The Lord of the Rings", author: "J.R. Tolkien"}
        ];
        this.state = {
            bookNumber: 2
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className= "row">
                    <div className= "col-md-4">
                        {/*Button here to move to the previous book viewed*/}
                    </div>
                    <div className= "col-md-4">
                        {/*Display book with the cover here*/}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className= "col-md-4">
                        {/*Button here to move to the next book viewed*/}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;