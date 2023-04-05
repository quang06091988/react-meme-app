import React from "react";
import Header from "../components/Header";
import MemeGenerator from "../components/MemeGenerator";

import axios from "axios";

class MemeApp extends React.Component {
    state = {
        topContent: "Top",
        bottomContent: "Bottom",
        picture: "https://i.imgflip.com/26am.jpg",
        memes: []
    };
    generatorMeme = (newMeme) => {
        this.setState({
            topContent: newMeme.topContent,
            bottomContent: newMeme.bottomContent,
            picture: this.state.memes[Math.floor(Math.random() * 100)].url
        });
    };
    componentDidMount() {
        axios.get("https://api.imgflip.com/get_memes")
        .then(response => {
            this.setState({
                memes: response.data.data.memes
            });
        });
    };
    render() {
        return(
            <div className="meme-app">
                <Header />
                <MemeGenerator 
                    meme={this.state}
                    generatorMeme={this.generatorMeme}
                />
            </div>
        );
    }
}

export default MemeApp;