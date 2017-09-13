import React from "react";
import PropTypes from 'prop-types';
import Child from './Child';

class Sammich extends React.Component {

  constructor(props) {
    super(props);
    this.state = { thing: ["hello", "whats up"] };
    console.log("Collect your ingredients. (2 slices bread, 1-2 butter knives, 1 jar peanut butter, 1 jar jelly or jam)");
    this.randomChange = this.randomChange.bind(this);
  }

  randomChange() {
    var newState = this.state.thing;
    newState.slice();
    newState.push("Hi How are you");
    this.setState({thing: newState});
  }

  componentWillMount() {
    console.log("Open jar of peanut butter by twisting the lid counter-clockwise.");
  }

  componentDidMount() {
    console.log("Pick up a butter knife by the handle and insert into the jar of peanut butter.");
  }

  componentWillUpdate() {
    console.log("Grab a second slice of bread.");
  }

  shouldComponentUpdate() {
    console.log("Withdraw the knife from the peanut butter, and evenly spread it onto one slice of bread.");
    return true;
  }

  componentDidUpdate() {
    console.log("Press the two slices of bread together so that the peanut butter and jelly meet.");
  }

  componentWillUnmount() {
    console.log("Cut the sandwich diagonally using one of the knives.");
  }

  render() {
    return(
      <div>
        <h3>Sammy works...</h3>
        <Child
          newParentFunction={this.randomChange}
          />
      </div>
    );
  }
}

Sammich.proptypes = {
  thing: PropTypes.string
}

export default Sammich;
