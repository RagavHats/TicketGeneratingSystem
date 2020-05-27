import React from 'react';
import Showtickets from './showtickets/showtickets';
class Source extends React.Component {

    render() {
        return (
            <div className ="generatingtickets">
                <Showtickets  Source={this.state.source}></Showtickets>
            </div>
        );
    }
}


export default Source;

