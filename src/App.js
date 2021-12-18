import React from 'react';
import { Route }  from 'react-router-dom';
import Header from "./components/header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route exact path='/' component={ Home } />
        <Route path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;

//
// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items
//   }
// };
//
// const mapDispatchToProps = {
//   setPizzas
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
