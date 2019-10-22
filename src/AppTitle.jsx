import React from 'react'

const generateArray = (x,y) => Array.from({length: (y-x+1)}, (v,k)=> x+k);

class AppTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {a: '', b: '', arr: [], renderCounter: 0};

    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
  } 

  handleChangeA(event) {
    this.setState({a: Number(event.target.value)}, (nextState) => {
      if(this.state.a > 0 && this.state.b > this.state.a)
        this.setState({arr: generateArray(Number(this.state.a),Number(this.state.b)).map(x => " " + x)});
      else
        this.setState({arr: []});
    });
    { console.log('New number a: ' + event.target.value) }
  }

  handleChangeB(event) {
    this.setState({b: Number(event.target.value)}, (nextState) => {
      if(this.state.a > 0 && this.state.b > this.state.a)
      this.setState({arr: generateArray(Number(this.state.a),Number(this.state.b)).map(x => " " + x)});
    else
      this.setState({arr: []});
    });
    { console.log('New number b: ' + event.target.value) }
  }

  render() {
    return (
      <div>
        
        <p>
          <label for="a">
            a:
            <input type="text" id="a" pattern="[0-9]*" value={this.state.a} onChange={this.handleChangeA} />
          </label>
        </p>
        <p>
          <label for="b">
            b:
            <input type="text" id="b" pattern="[0-9]*" value={this.state.b} onChange={this.handleChangeB} />
          </label>
        </p>
        <p>
          <label>
            Generated array: {this.state.arr}
          </label>
        </p>       
        
      </div>
    );
  }

}

export default AppTitle