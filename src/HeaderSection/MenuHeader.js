import React, { Component } from 'react';
import GearIcon from '../styles/svg/gear.svg';
import Arrow from '../styles/svg/arrow.svg';
// import InfoModal from '../ModalDialogComponent/InfoModal';



class MenuHeader extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        };
    }

    modalDialog(response){
        this.setState({isOpen: !this.state.isOpen});
        // 'response' - is what Modal Dialog returns
    };

    imgIconOnClick(){
        // console.log('imgIconOnClick');
        //some code
    }

    gearIconOnClick(){
        // console.log('gearIconOnClick');
        //some code
    }

    nextBtnOnClick(){
        // console.log('nextBtnOnClick');
        // some code
    }

    progBarOnClick(){
        // console.log('progBarOnClick');
        // some code
    }


    render() {

        var fillInfoColor = this.props.headerInfo.fillRequiredInfo ? '#73FB04' : 'red';

        return (
            <div className="menu_header">

                    <div className={'menu_header_wrapper'}>

                            <div className={'img_block'}>
                                <div className={'img_block_wrapper'}>
                                    <span className={'img_icon'}>
                                        <img src={this.props.headerInfo.userImg} alt={'User avatar'} onClick={this.imgIconOnClick.bind(this)} />
                                    </span>
                                    <img src={GearIcon} className={'gear_icon'} alt={'gear_icon'} onClick={this.gearIconOnClick.bind(this)} />
                                </div>
                            </div>

                            <div className={'text_block'} onClick={this.modalDialog.bind(this)} >
                                <div className={'text_line'}>
                                    <span className={'user_name'} > <span className={'user_name_text'}>Username of</span> account no. 1</span>
                                    <span className={'header_right_part_info'}>
                                        <span className={'percent_val'} style={{color: fillInfoColor}}>{this.props.headerInfo.fillPercent}</span>
                                    <button className={'next_btn'} onClick={this.nextBtnOnClick.bind(this)} >
                                        <img src={Arrow} alt={'Arrow'}/>
                                    </button>
                                    </span>
                                </div>
                            </div>

                    </div>
                    <div className={'prog_line'} onClick={this.progBarOnClick.bind(this)}>
                        <div className={'filled_line'} style={{width: this.props.headerInfo.fillPercent, background: fillInfoColor}}></div>
                    </div>

                {/*<InfoModal*/}
                    {/*openModal={this.state.isOpen}*/}
                    {/*closeModal={this.modalDialog.bind(this)}*/}
                    {/*okBtnTxt={'ok'}>*/}
                    {/*This info for you*/}
                {/*</InfoModal>*/}

            </div>
        );
    }
}

export default MenuHeader;
