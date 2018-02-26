import React, { Component } from 'react';

class SubMenuItem extends Component {

    onSubItemClick(){
        // some code
    }

    render() {
        return (
            <div className="sub_item" onClick={this.onSubItemClick.bind(this)} >
                <span className={'sub_item_wrapper'}>
                    <img src={this.props.subItemData.subItemIcon} alt={'Sub-item logo'} className={'sub_item_logo'} />
                </span>
                <span className={'sub_item_text'}>
                    {this.props.subItemData.subItemTitle}
                </span>
            </div>
        );
    }
}

export default SubMenuItem;
