## Add menu to your project

 - Import Menu Component:
```
import MenuComponent from './MenuComponent';
```

 - Import data for menu:
(DataController file contains permanent data for displaying as an example,
 you may replace it`s content with your own)

```
import {DataController} from './DataController/DataController';
```


## Example

```
import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import {DataController} from './DataController/DataController';

class App extends Component {

    constructor(props){
        super(props);
        this.state = DataController
    };


    animateMenu(e){
        e.preventDefault();
        var el = this.innerCont;
        el.classList.contains('hide') ? el.classList.remove('hide') : el.classList.add('hide');
    }

  render() {

    return (
      <div className="App">
          <MenuComponent {...this.state} innerContRef={el => this.innerCont = el} />
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
```


## Details

`animateMenu function` and `div.content` are also permanent elements. We use them to show how menu should be animated in general.
These elements will also be replaced with original ones.

```
animateMenu(e){
            e.preventDefault();
            var el = this.innerCont;
            el.classList.contains('hide') ? el.classList.remove('hide') : el.classList.add('hide');
        }

<button className={'menu_btn'} onClick={this.animateMenu.bind(this)}>
                      <span></span>
                      <span></span>
                      <span></span>
</button>
```



## Description

Main goWeb menu contains three sections: header section, products sections and general options section.

#### Header section
Header section includes personal information. 'Avatar' icon, 'gear' icon and percentage area are clickable.
Text filed displays name of current user account (it can be multiple). Percentage value indicates what part of personal
information has been completed. Percentage line and text turns red if required personal information has not been filled.
Modal dialog window appears by clicking on percentage area.


#### Products section

Displays all available product to user. One of the available options is opened as default.
Opened options appearance contains its title and list of sub-items, which are also clickable.
By clicking on title user turns to the main menu (where there are all products displayed).


#### General options section
General options have the same appearance for all users.
Modal dialog window appears by clicking on `Logout` option.






