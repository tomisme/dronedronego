var React = require('react');

var Test = React.createClass({
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='six columns'>
            <h1>drone drone go</h1>
          </div>
          <div className='six columns'>
            <a className='button' href='#'>Articles</a>
            <a className='button' href='#'>Units</a>
            <a className='button' href='#'>Lines</a>
          </div>
        </div>
      </div>
    );
  }
});

React.render(<Test />, document.body);
