import React, {Component} from 'react';
import {SortableElement} from 'react-sortable-hoc';

class SortableItem extends Component{

    targ(event){
        // event.preventDefault();
        console.log(event.target);
    }

    render(){

        var itemName = this.props.itemVal.itemName;

        return(
            <div className={'sort_wrapper'}>
            <div className={'sortable_item'} onClick={this.targ.bind(this)}>

                    <button
                        className={'remove_icon'}
                        onClick={this.props.showHideWidget.bind(this, itemName)}
                        style={{opacity: this.props.isEdit ? '0' : '1', transition: ".1s linear", width: this.props.isEdit ? '0px' : '10px'}}/>
                    {itemName}
                    <button>1111</button>
                    <button>22222</button>
                    <button>33333</button>
                    <input placeholder={'fsdljfhkdsh'}/>
                    <textarea placeholder={'kjdfghkljfdh'}/>
                </div>

            </div>
        )
    }
}


// export default SortableElement(SortableItem);
export default SortableItem;
