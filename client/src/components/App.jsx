import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'alexander the great'
     };
  }

  // componentDidMount() {}


  render() {
    return (
      <div> {this.state.name}</div>
    );

  }
}

export default App;