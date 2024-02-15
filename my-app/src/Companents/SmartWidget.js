import React, { Component } from 'react';

class SmartWidget extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://res.smartwidgets.ru/app.js";
    script.defer = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="sw-app" data-app="34c1867395f2f64cf3dcb63e465ee8c7"></div>
    );
  }
}

export default SmartWidget;
