import React, { Component } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
 import Message from "./components/Message";
import LifecycleA from "./components/LifecycleA";
import LifecycleC from "./components/LifecycleC";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div>
        <Greet name="Simform" locationName="Gujarat" />
        <Greet name="Solutions" locationName="Gujarat" />
        <Greet name="Rehan" locationName="Kolkata" />
        <Welcome name="Simform" locationName="Gujarat" />
        <Welcome name="Simform" locationName="Gujarat" />
        <Welcome name="Rehan" locationName="Kolkata" />
        <Message />
        <LifecycleA />
        <LifecycleC />
        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
