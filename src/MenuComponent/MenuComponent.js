import React, { Component } from 'react';
import MenuHeader from './HeaderSection/MenuHeader';
import MenuBody from './BodySection/MenuBody';

class MenuComponent extends Component {

    render() {
        return (
            <div className={'app_wrapper'}>
                <div className="menu_component" >
                    <MenuHeader {...this.props} />
                    <MenuBody {...this.props} />
                </div>
            </div>
        );
    }
}

export default MenuComponent;
