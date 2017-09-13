import React from "react";

class Sammich extends React.Component {

  constructor(props) {
    super(props);
    console.log("Collect your ingredients. (2 slices bread, 1-2 butter knives, 1 jar peanut butter, 1 jar jelly or jam)");
  }

  render() {
    return(
      <h3>Sammy works</h3>
    )
  }
}

export default Sammich;
