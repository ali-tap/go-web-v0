import React, { Component } from 'react';
import './style.css';

var ReactGridLayout = require('react-grid-layout');

class App extends Component {
  render() {
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 10, minW: 1, maxW: 3, minH: 10, maxH: 10},
      {i: 'b', x: 1, y: 0, w: 1, h: 10, minW: 1, maxW: 3, minH: 10, maxH: 10},
      {i: 'c', x: 2, y: 0, w: 1, h: 10, minW: 1, maxW: 3, minH: 10, maxH: 10},
      {i: 'd', x: 3, y: 0, w: 1, h: 10, minW: 1, maxW: 3, minH: 10, maxH: 10},
      {i: 'e', x: 4, y: 0, w: 1, h: 10, minW: 1, maxW: 3, minH: 10, maxH: 10},
      {i: 'f', x: 5, y: 0, w: 1, h: 10, minW: 1, maxW: 3, minH: 10, maxH: 10},
      {i: 'g', x: 6, y: 0, w: 1, h: 10, minW: 1, maxW: 3, minH: 10, maxH: 10},
      {i: 'h', x: 7, y: 0, w: 1, h: 10, minW: 1, maxW: 3, minH: 10, maxH: 10},
      {i: 'i', x: 8, y: 0, w: 1, h: 10, minW: 1, maxW: 3, minH: 10, maxH: 10}
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={50} width={4000} height={50}>
        <div key={'a'}>
          <span className="react-title">Title</span>
          <span className="react-move-handle"></span>
          <iframe src="http://www.tap.company" width="100%" height="100%"></iframe>
        </div>
        <div key={'b'}>
        <span className="react-title">Title</span>
        <span className="react-move-handle"></span>
        <br/>b
        </div>
        <div key={'c'}>
        <span className="react-title">Title</span>
        <span className="react-move-handle"></span>
        <br/>c
        </div>
        <div key={'d'}><span className="react-title">Title</span><span className="react-move-handle"></span><br/>d</div>
        <div key={'e'}><span className="react-title">Title</span><span className="react-move-handle"></span><br/>e</div>
        <div key={'f'}><span className="react-title">Title</span><span className="react-move-handle"></span><br/>f</div>
        <div key={'g'}><span className="react-title">Title</span><span className="react-move-handle"></span><br/>g</div>
        <div key={'h'}><span className="react-title">Title</span><span className="react-move-handle"></span><br/>h</div>
        <div key={'i'}><span className="react-title">Title</span><span className="react-move-handle"></span><br/>i</div>
      </ReactGridLayout>
    );
  }
}

export default App;
/*
import React, { Component } from 'react';

export default class SampleDisplay extends Component {

  render() {
    const itemStyle = {
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundColor: 'gray'
    };

    return <div
            style={itemStyle}
            className="gridItem"><span className="name">{this.props.item.name}</span></div>;
  }
}*/
