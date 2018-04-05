import React, { Component } from 'react';
import {DataController} from './DataController/DataController';
import {AccountData} from './DataController/DataController';

import {GoWebMainMenu} from '@tap-payments/goweb-main-menu';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataController: DataController,
            isOpen: false,
           rtlDirection: this.props.location.pathname === '/ar' ? true : false
        }
    };

    animateMenu(e){
        e.preventDefault();
        var el = this.innerCont;
        el.classList.contains('hide') ? el.classList.remove('hide') : el.classList.add('hide');
    }

    componentDidMount(){
        if (this.state.rtlDirection){
            !this.goWebMenu.classList.contains('rtl') && this.goWebMenu.classList.add('rtl');
        } else {
            this.goWebMenu.classList.contains('rtl') && this.goWebMenu.classList.remove('rtl');
        }
    }

  render() {

    return (
      <div className="go_web_menu" ref={el => this.goWebMenu = el}>
          <GoWebMainMenu {...this.state.dataController} innerContRef={el => this.innerCont = el} accountData={AccountData} />
          <div className={'content'} >
              <button className={'menu_btn'} onClick={this.animateMenu.bind(this)}>
                  <span></span>
                  <span></span>
                  <span></span>
              </button>
          </div>
      </div>
    );
  }
}

export default App;
