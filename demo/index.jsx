/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Flex from 'Flex';
import './main.scss';

class Demo extends React.Component {
  render() {
    const docs = '//github.com/Opentrace/re-flex';

    return (
      <div className="demo">
        <Flex />
        <a href={ docs }>Flex</a>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('content'));