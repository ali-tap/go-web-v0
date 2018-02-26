import React, { Component } from 'react';
import MainMenu from './MainMenu';
import Settings from './Settings';

class MenuBody extends Component {
    render() {
        return (
            <div className="menu_body">
                <MainMenu appsList={this.props.appsList} />
                <Settings constItems={this.props.constItems}/>
            </div>
        );
    }
}

export default MenuBody;
