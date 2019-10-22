import React from 'react'

const generateArray = (x,y) => Array.from({length: (y-x+1)}, (v,k)=> x+k);

class AppTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {a: '', b: '', arr: []};

    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
    this.handleSubmitA = this.handleSubmitA.bind(this);
    this.handleSubmitB = this.handleSubmitB.bind(this);
  } 

  handleChangeA(event) {
    this.setState({a: Number(event.target.value)});
  }

  handleChangeB(event) {
    this.setState({b: Number(event.target.value)});
  }
  
  handleSubmitA(event) {
    { console.log('New number a: ' + this.state.a) }
    if(this.state.a > 0 && this.state.b > this.state.a)
      this.setState({arr: generateArray(Number(this.state.a),Number(this.state.b)).map(x => " " + x)});
    else
      this.setState({arr: []});
    event.preventDefault();
  }

  handleSubmitB(event) {
    { console.log('New number b: ' + this.state.b) }
    if(this.state.a > 0 && this.state.b > this.state.a)
      this.setState({arr: generateArray(Number(this.state.a),Number(this.state.b)).map(x => " " + x)});
    else
      this.setState({arr: []});
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
        <label>
          Generated array: {this.state.arr}
        </label>
      </div>
    );
  }

}

export default AppTitle