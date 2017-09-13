import React from "react";
import PropTypes from "prop-types";


class Child extends React.Component {
  constructor(props) {
    super(props);
    this.buttonHasBeenClicked = this.buttonHasBeenClicked.bind(this);
    }


  buttonHasBeenClicked() {
    event.preventDefault();
    this.props.newParentFunction();
  }

  componentWillReceiveProps() {
    console.log("Repeat steps 2-4 with second slice of bread, using jelly instead of peanut butter.");
  }


  render() {
    return(
      <button onClick={this.buttonHasBeenClicked}>Click!</button>
    )
  }

}

Child.propTypes = {
  newParentFunction: PropTypes.func
}

export default Child;
