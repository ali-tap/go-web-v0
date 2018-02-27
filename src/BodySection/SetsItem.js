import React, { Component } from 'react';
//import AskModal from '../ModalDialogComponent/AskModal';

class SetsItem extends Component{


    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        };
    }

    modalDialog(response){
        if (this.props.itemData.constItemTitle === 'Logout'){
            this.setState({isOpen: !this.state.isOpen});
            // 'response' - is what Modal Dialog returns
        }
    };


    render(){

        var itemData = this.props.itemData;

        return(
            <div className={'sets_item_wrapper'}>
                <span className={'sets_item'} onClick={this.modalDialog.bind(this)} >
                    <span className={'sets_icon'}><img src={itemData.constItemIcon} alt={'Item icon'}/></span>
                    <span className={'sets_text'}>
                        <span className={'sets_title'}>{itemData.constItemTitle}</span>
                        {itemData.constItemDesc ? <span className={'sets_desc'}>{ itemData.constItemDesc }</span> : null}
                    </span>
                </span>


              /*  <AskModal
                    openModal={this.state.isOpen}
                    closeModal={this.modalDialog.bind(this)}
                    acceptBtnTxt={'Log out'}
                    refuseBtnTxt={'Cancel'}
                    acceptBtnResp={'User really want to log out'}
                    refuseBtnResp={'User stays here'}>
                        Do you want to log out?
                </AskModal>*/

            </div>
        );

    }
}

export default SetsItem;
