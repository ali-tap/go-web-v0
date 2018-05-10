import React, {Component} from 'react';

class AddServices extends Component{

    render(){

        var itemsData = this.props.widgetItems;
        var hiddenBoxes = [];
        var hiddenItems = itemsData.filter((item) => {
            if (!item.showItem){
                return item
            }
        });

        hiddenItems.map((item, index) => {
            hiddenBoxes.push(
                <div className={'hidden_service_wrapper'} key={index} onClick={this.props.showHideWidget.bind(this, item.itemName)}>
                    <span className={'hidden_service'}><img src={item.itemIcon}/></span>
                    <span className={'hidden_service_name'}>{item.itemName}</span>
                </div>
            )
        });


        return(
            <div className={'add_services'}>
                {hiddenBoxes}
            </div>
        )
    }
}


export default AddServices;

