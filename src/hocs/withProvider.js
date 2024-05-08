import React from "react";

export default function withProvider(Provider, providerProps, Component) {
  return function ProviderComponent(props) {
    return (
      <Provider {...providerProps}>
        <Component {...props} />
      </Provider>
    );
  };
}
