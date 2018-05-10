import React, {Component} from 'react';
import {arrayMove} from 'react-sortable-hoc';
import SortableList from './SortableList';
import './styles/css/style.css';

class WidgetsComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            items: this.props.widgetsData
        };

    }

    componentDidMount(){
        this.dataSorting();
    }

    onSortEnd({oldIndex, newIndex}){
        this.setState({
           items: arrayMove(this.state.items, oldIndex, newIndex)
        });
    }

    showHideWidget(itemId){
        var updatedState = this.state.items.map((item) => {
            if (item.itemName === itemId){
                item.showItem = !item.showItem
            }
            return item;
        });

        this.setState({
            items: updatedState
        });
        this.dataSorting();

    }

    dataSorting(){
        var hiddenItemsArr = [];
        var sortedData = [];

        Array.prototype.diff = function(a) {
            return this.filter(function(i) {return a.indexOf(i) < 0;});
        };

        for (var i = 0; i < this.state.items.length; i++){
            if (this.state.items[i].showItem === false){
                hiddenItemsArr.push(this.state.items[i]);
            }
        };

        sortedData = this.state.items.diff(hiddenItemsArr);

        hiddenItemsArr.forEach((item) => {
            sortedData.push(item)
        });

        this.setState({
            items: sortedData
        });
    }

    render(){

        return(
            <div className={'widgets_component'}>
                <div className={'widgets_wrapper'}>
                    <SortableList
                        axis={'xy'}
                        widgetItems={this.state.items}
                        onSortEnd={this.onSortEnd.bind(this)}
                        showHideWidget={this.showHideWidget.bind(this)}
                        isEdit={this.props.isEdit}
                    />
                </div>
            </div>
        )
    }

}

export default WidgetsComponent;
