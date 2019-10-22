import React from 'react'

const generateArray = (x,y) => Array.from({length: (y-x+1)}, (v,k)=> x+k);
const sqrtArr = (A) => (Array.from(A, element => Math.sqrt(element)));

class AppTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {a: '', b: '', arr: [], renderCounter: 0};

    this.handleChangeA = this.handleChangeA.bind(this);
    this.handleChangeB = this.handleChangeB.bind(this);
    this.processArray = this.processArray.bind(this);
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

  processArray(event){
    var temp = this.state.arr;
    this.setState({arr: sqrtArr(temp).map(x => " " + x)});
  }

  render() {
    return (
      <div>
        {console.time("Render - " + (++this.state.renderCounter))}
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
        <p>
          <button onClick={this.processArray}>Process array</button>
        </p>     
        {console.timeEnd("Render - " + this.state.renderCounter)}
      </div>
    );
  }

}

export default AppTitle