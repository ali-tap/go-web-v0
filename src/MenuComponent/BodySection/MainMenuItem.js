import React, { Component} from 'react';
import Arrow from '../styles/svg/arrow.svg';
import SubItemGroup from './SubItemGroup';
import PropTypes from 'prop-types';


class MainMenuItem extends Component {


    constructor(props){
        super(props);
        this.state = {
            subItems: []
        };
    }

    componentDidMount(){

        var subItems = [],
            subItemsData = this.props.itemData.subItems;

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

            this.refs.subItemsDiv.style.height = '0px';
            this.refs.subItemsDiv.style.opacity = 0;

            this.setState({
                subItems: []
            });

        } else {
            mainItem.classList.add(openedCl);

            for (var k = 0; k < subItemsData.length; k++){
                subItems.push(<SubItemGroup subItemData={subItemsData[k]} key={k} />);
            }

            this.refs.subItemsDiv.style.height = this.props.itemData.subItems.length * 49 +'px';
            this.refs.subItemsDiv.style.opacity = 1;

            this.setState({
                subItems: subItems
            });

            this.props.setActItem(this.props.itemId);

        }

    }

    render() {

        var d = this.props.itemData;

        return (
            <div className={'main_item_wrapper'} ref={'mainItem'} onClick={this.onItemClick.bind(this)}>
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

                    <button className={'detail_btn'} ref={'detailBtn'} ><img src={Arrow} alt={'Arrow'}/></button>

                </div>

                <div className={'sub_items'} ref={'subItemsDiv'} >
                    {this.state.subItems}
                </div>
            </div>
        );
    }
}


export default MainMenuItem;


