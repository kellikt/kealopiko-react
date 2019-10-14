import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Kealopiko extends React.Component {

  render() {
    return (
        <h1>Kealopiko!</h1>
  );
  }
}

ReactDOM.render(<Kealopiko />, document.getElementById('root'));