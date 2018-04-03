import React, { Component} from 'react';
import Arrow from '../styles/svg/arrow.svg';
import SubItemGroup from './SubItemGroup';


class MainMenuItem extends Component {


    constructor(props){
        super(props);
        this.state = {
            subItems: []
        };
    }

    componentDidMount(){

        var subItems = [],
            subItemsData = this.props.itemData.subItems,
            isReg = this.props.itemData.isReg;

        if (!this.props.itemId){
            this.refs.mainItem.classList.add('opened_item');
            for (var k = 0; k < subItemsData.length; k++){
                subItems.push(<SubItemGroup subItemData={subItemsData[k]} key={k} />);
            }
        }
        this.props.itemId && this.refs.mainItem.classList.add('hide');

        this.setState({
            subItems: subItems
        });

        !isReg && this.enableBtn.classList.add('enable_flag');
    }

    onItemClick(e){

        e.preventDefault();

        var openedCl     = 'opened_item',
            hideCl       = 'hide',
            mainItem     = this.refs.mainItem,
            els          = document.getElementsByClassName('main_item_wrapper'),
            openedNum    = 0,
            subItemsData = this.props.itemData.subItems,
            subItems     = [];

        var clicksConditions = e.target.classList.contains('sub_item') || e.target.classList.contains('sub_item_text') || e.target.classList.contains('sub_item_logo') ||
            e.target.classList.contains('sub_item_wrapper');

        for (var n = 0; n < els.length; n++){
            openedNum += els[n].classList.contains(openedCl) && openedNum + 1;
        }

        for (var i = 0; i < els.length; i++){
            (openedNum && !clicksConditions) ? els[i].classList.contains(hideCl) && els[i].classList.remove(hideCl) : els[i] !== mainItem && els[i].classList.add(hideCl);
        }

        if (openedNum && !clicksConditions){

            mainItem.classList.remove(openedCl);

            // this.refs.subItemsDiv.style.height = '0px';
            // this.refs.subItemsDiv.style.opacity = 0;

            this.setState({
                subItems: []
            });

        } else {
            mainItem.classList.add(openedCl);

            for (var k = 0; k < subItemsData.length; k++){
                subItems.push(<SubItemGroup subItemData={subItemsData[k]} key={k} />);
            }

            // this.refs.subItemsDiv.style.height = this.props.itemData.subItems.length * 49 +'px';
            // this.refs.subItemsDiv.style.opacity = 1;

            this.setState({
                subItems: subItems
            });

            this.props.setActItem(this.props.itemId);
        }

    }

    onEnableBtnClick(e){
        e.preventDefault();

        // write your code here
    }

    render() {

        var d = this.props.itemData,
            isReg = this.props.itemData.isReg;

        return (
            <div className={'main_item_wrapper'} ref={'mainItem'} onClick={isReg ? this.onItemClick.bind(this) : undefined} >
                <div className={'main_menu_item'} >

                    <div className={'info_side'}>

                        <span className={'app_logo_wrapper'}>
                            <img src={d.appLogo} alt={'app_logo'} />
                        </span>

                        <span className={'item_text'}>
                            <span className={'item_title'}>{d.appTitle}</span>
                            <span className={'item_desc'}>{d.appDesc}</span>
                        </span>

                    </div>

                    <button className={'enable_btn'} ref={(enableBtn) => this.enableBtn = enableBtn} onClick={this.onEnableBtnClick.bind(this)}>Enable</button>
                    <button className={'detail_btn'} ><img src={Arrow} alt={'Arrow'} className={'detail_btn_icon'} /></button>

                </div>

                <div className={'sub_items'} ref={'subItemsDiv'} >
                    {this.state.subItems}
                </div>
            </div>
        );
    }
}


export default MainMenuItem;


