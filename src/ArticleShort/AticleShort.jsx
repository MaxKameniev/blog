import React, { Component } from 'react';
import './ArticleSort.css';

class AticleShort extends Component {

    cutBody = () => {
        let bodyShort = this.props.data.body;
        return !bodyShort ? null : bodyShort.substr(0,50);
    }

    render() {
        return (
            <div data-id={this.props.data.id} onClick={this.props.getId} className="article__block">
                <h2 data-id={this.props.data.id} className="article__text">{this.props.data.title}</h2>
                <div data-id={this.props.data.id} className="article__author">{this.cutBody()}</div>
            </div>
        );
    }
}

export default AticleShort;