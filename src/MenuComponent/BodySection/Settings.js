import React, { Component } from 'react';
import SetsItem from './SetsItem';

class Settings extends Component {


    render() {

        var d = this.props.constItems,
            items = [];

        for (var i = 0; i < d.length; i++){
            items.push( <SetsItem key={i} itemId={i} itemData={d[i]} />);
        }

        return (
            <div className="sets_items">
                {items}
            </div>
        );
    }
}

export default Settings;
