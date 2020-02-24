import React from "react";
import App from "next/app";
import "../css/styles.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="bg-gray-900 h-screen">
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
