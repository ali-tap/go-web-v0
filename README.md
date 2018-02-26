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

`animateMenu function` and `div.content` are also permanent elements. We use it show how menu should be animated in general.
These elements will also be replaced with original ones.

    ```
    animateMenu(e){
                e.preventDefault();
                var el = this.innerCont;
                el.classList.contains('hide') ? el.classList.remove('hide') : el.classList.add('hide');
            }
    ```

    ```
    <button className={'menu_btn'} onClick={this.animateMenu.bind(this)}>
                          <span></span>
                          <span></span>
                          <span></span>
    </button>
    ```



## Description





