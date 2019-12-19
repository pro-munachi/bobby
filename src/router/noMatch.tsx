import React, { Component } from 'react';
import Header from "../components/header"


class NoMatch extends Component {
    render() {
        return (
            <div>
                <Header
                    height="100vh"
                    title="404"
                    imgUrl="https://assets.knack.it/knackapp/404.jpg"
                    subTitle="You found the black hole!"
                />
            </div>
        );
    }
}
export default NoMatch;