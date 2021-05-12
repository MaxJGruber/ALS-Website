import { Component } from "react";
import { ReactReduxContext } from "react-redux";

const withStore = (ComponentToPassReactReduxContextTo) => {
  return function (store) {
    console.log(store);
    return (
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <ComponentToPassReactReduxContextTo  store={store} />
        )}
      </ReactReduxContext.Consumer>
    );
  };
};

export default withStore;
