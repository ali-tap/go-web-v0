import React, {Component} from 'react';
import plusIcon from './styles/img/plus_icon.png';
import AddServices from './AddServices';


class StaticWidget extends Component{

    constructor(){
        super();

        this.state = {
            showPlusIcon: true,
            showStaticWidget: true
        }
    }

    showHideWidget(index){
        this.props.showHideWidget(index);
        this.staticContent();
        this.setState({
            showPlusIcon: !this.state.showPlusIcon
        })
    }

    plusArea(){

        var hasHiddenItems = [];
        this.props.widgetItems.forEach((item) => {
            !item.showItem && hasHiddenItems.push(item);
        });

        hasHiddenItems.length && this.setState({
            showPlusIcon: !this.state.showPlusIcon
        });
    }

    staticContent(){
        var hasHiddenItems = [],
            showStaticWidget;

        this.props.widgetItems.forEach((item) => {
            !item.showItem && hasHiddenItems.push(item);
        });

        showStaticWidget = hasHiddenItems.length ? 'flex' : 'none';

        this.setState({
            showStaticWidget: showStaticWidget
        })
    }

    componentWillReceiveProps(){
        this.staticContent();
    }

    render(){


        var statWidgetCont = this.state.showPlusIcon ?
            <div className={'plus_icon_wrapper'} onClick={this.plusArea.bind(this)} ><img src={plusIcon} className={'plus_icon'} alt={'Plus icon'} /></div> :
            <AddServices widgetItems={this.props.widgetItems} showHideWidget={this.showHideWidget.bind(this)}/>;

        return(
            <div className={'sort_wrapper'}>
                <div className={'static_widget'} style={{display: this.state.showStaticWidget}}>
                    {statWidgetCont}
                </div>
            </div>
        )
    }
}


export default StaticWidget;


