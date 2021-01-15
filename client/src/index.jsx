import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        APP IS CONNECTED!
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDom.render(<App />, document.getElementById('reviews'));
