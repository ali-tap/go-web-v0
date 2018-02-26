import React, { Component } from 'react';
import SubMenuItem from './SubMenuItem';


class SubItemGroup extends Component{

    render(){

        var subItemData = this.props.subItemData,
            items = [];

        for (var i = 0; i < subItemData.length; i++){
            items.push(<SubMenuItem subItemData={subItemData[i]} key={i} />);
        }

        return(
            <div className={'sub_item_group'}>
                {items}
            </div>
        )
    }
}

export default SubItemGroup;