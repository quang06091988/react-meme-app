import React from "react";

class MemeGenerator extends React.Component {
    state = {
        topContent: "",
        bottomContent: ""
    };

    onChangeTopContent = e => {
        this.setState({
            topContent: e.target.value
        });        
    };
    onChangeBottomContent = e => {
        this.setState({
            bottomContent: e.target.value
        });
    };
    generatorMeme = e => {
        e.preventDefault();
        this.props.generatorMeme(this.state);
        this.setState({
            topContent: "",
            bottomContent: ""
        });
    };

    render() {
        return(
            <div className="meme-container">
                <form onSubmit={this.generatorMeme}>
                        <input type="text" value={this.state.topContent} onChange={this.onChangeTopContent} />
                        <br />
                        <input type="text" value={this.state.bottomContent} onChange={this.onChangeBottomContent} />
                        <br />
                        <input type="submit" value="Generate" />
                </form>
                <div className="meme">
                    <img src={this.props.meme.picture} />
                    <h2 className="top">{this.props.meme.topContent}</h2>
                    <h2 className="bottom">{this.props.meme.bottomContent}</h2>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;