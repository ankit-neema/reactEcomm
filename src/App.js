import React, { Component } from 'react';
import { Layout } from './common/Layout';
import { Slider } from './Slider/Slider';
import { Products } from './Products/Products';
import { Footer } from './common/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout />
       <Slider />
       <Products />
       <Footer />
      </div>
    );
  };
};
export default App;