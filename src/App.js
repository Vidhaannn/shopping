import axios from 'axios';
import { Checkout } from './Components/checkout/Checkout';
import { Header } from './Components/Header/Header';
import { Products } from './Components/products/Products';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'



function App() {

  axios.get('http://localhost:8000/api/products')
  .then(({data}) => {
    debugger;
  })
  .catch(error => {
    debugger;
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Checkout />}>
          {/* <Route index element={<Checkout />} /> */}
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/products" element={<Products />} />
          {/* <Route exact path="*" element={<h1>No Page</h1>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    // <Router>
    //   <div className="App">

    //   {/* <Routes> */}
    //     <Route path="/header" component={Header} />
    //     <Route path="/products" component={Products} />

    //     <Route path="/">
    //       <Checkout />
    //     </Route>

    //   {/* </Routes> */}
    //   </div>
    //   </Router>
    
    
  );
}

export default App;
