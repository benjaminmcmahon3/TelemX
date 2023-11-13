import React from "react";

const LoadingContext = React.createContext({
  isLoading: false,
  startLoading: () => {},
  stopLoading: () => {}
});

export default LoadingContext;