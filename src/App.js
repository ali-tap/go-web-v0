import React, { Component } from 'react';
import {DataController, AccountData, WidgetsData} from './DataController/DataController';
import './styles/css/generalStylesFile.css';
import {SlidingMenu} from '@tap-payments/sliding-menu';
import stackIcon from './styles/svg/stack.svg';

import {WidgetsComponent} from '@tap-payments/widgets_component';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            rtlDirection: (this.props.location.pathname === '/ar') ? true : false,
            isEdit: false
        };

    };

    animateMenu(e){
        e.preventDefault();
        var el = this.innerCont;
        el.classList.contains('hide') ? el.classList.remove('hide') : el.classList.add('hide');
    }

    componentWillMount(){
        this.state.rtlDirection && require ('./styles/css/rtl_styles.css');
    }


    onEdit(){
        this.setState({
           isEdit: !this.state.isEdit
        });
    }


  render() {

    return (
      <div className="go_web_menu" >
            <SlidingMenu
                appListData={DataController}
                innerContRef={el => this.innerCont = el}
                accountData={AccountData}
                rtlDirection={this.state.rtlDirection}
            />

          <div className={'content'} >
              <div className={'menu_line'}>
                  <button className={'menu_btn'} onClick={this.animateMenu.bind(this)}>
                      <span></span>
                      <span></span>
                      <span></span>
                  </button>
                  <button className={'edit_btn'} onClick={this.onEdit.bind(this)} style={{opacity: this.state.isEdit ? '1' : '0.6', transition: '.1s linear'}} >
                      <img src={stackIcon}/>
                  </button>
              </div>

              <WidgetsComponent
                  widgetsData={WidgetsData}
                  isEdit={this.state.isEdit}
              />

          </div>

      </div>
    );
  }
}


export default App;
