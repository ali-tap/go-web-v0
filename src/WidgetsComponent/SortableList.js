import React, {Component} from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import SortableItem from './SortableItem';
import StaticWidget from './StaticWidget';


class SortableList extends Component{

    render(){

        var itemsData = this.props.widgetItems.map((value, index) => (
            value.showItem && <SortableItem
                key={`item-${index}`}
                index={index}
                itemVal={value}
                showHideWidget={this.props.showHideWidget.bind(this)}
                disabled={!this.props.isEdit}
                isEdit={!this.props.isEdit}
            />
        ));

        itemsData.push(
            <StaticWidget
                widgetItems={this.props.widgetItems}
                showHideWidget={this.props.showHideWidget.bind(this)}
                key={'static'} />
        );

        return(
            <div className={'sortable_grid'} >
                {itemsData}
            </div>
        )
    }
}


// export default SortableContainer(SortableList);
export default SortableList;
