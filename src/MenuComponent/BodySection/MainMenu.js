import React, { Component } from 'react';
import MainMenuItem from './MainMenuItem';

class MainMenu extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    setActItem(itemId){

        var currItems = this.state.items,
            prevIndex = 0;

        for (let index = 0; index < currItems.length; index++) {

            let item = currItems[index];

            if (item.props.itemId === itemId) {
                prevIndex = index;
                break;
            }
        }

        function array_move(arr, old_index, new_index) {
            if (new_index >= arr.length) {
                var k = new_index - arr.length + 1;
                while (k--) {
                    arr.push(undefined);
                }
            }
            arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
            return arr;
        };

        var reorderedItems = array_move(currItems, prevIndex, 0);

        this.setState({
            items: reorderedItems
        });

    }

    componentWillMount(){
        var itemsData = this.props.appsList,
            items = [];

        for (var i = 0; i < itemsData.length; i++){
            items.push(<MainMenuItem itemData={itemsData[i]} key={i} itemId={i} setActItem={this.setActItem.bind(this)} />);
        }

        this.setState({
            items: items
        });
    }


    render() {

        return (
            <div className="main_menu">
                {this.state.items}
            </div>
        );
    }
}

export default MainMenu;
