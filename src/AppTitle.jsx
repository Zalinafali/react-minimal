import React from 'react'

class AppTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {a: '', b: ''};

    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleSubmitA = this.handleSubmitA.bind(this);
    this.handleSubmitB = this.handleSubmitB.bind(this);
  } 

  handleChangeA(event) {
    this.setState({a: event.target.value});
  }

  handleChangeB(event) {
    this.setState({b: event.target.value});
  }
  
  handleSubmitA(event) {
    alert('New number: ' + this.state.a);
    { console.log('New number a: ' + this.state.a) }
    event.preventDefault();
  }

  handleSubmitB(event) {
    alert('New number: ' + this.state.b);
    { console.log('New number b: ' + this.state.b) }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitA}>
          <label>
            a:
            <input type="text" pattern="[0-9]*" value={this.state.a} onChange={this.handleChangeA} />
          </label>
          <input type="submit" value="Send" />
        </form>
        <form onSubmit={this.handleSubmitB}>
          <label>
            b:
            <input type="text" pattern="[0-9]*" value={this.state.b} onChange={this.handleChangeB} />
          </label>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }

}

export default AppTitle