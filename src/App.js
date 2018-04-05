import React, { Component } from 'react';
import './styles/css/style.css';
import MenuHeader from './HeaderSection/MenuHeader';
import MenuBody from './BodySection/MenuBody';

class MenuComponent extends Component {

    render() {

        return (
            <div className={'app_wrapper hide'} ref={this.props.innerContRef} >
                <div className="menu_component" >
                    <MenuHeader {...this.props} />
                    <MenuBody {...this.props} />
                </div>
            </div>
        );
    }
}

export default MenuComponent;
