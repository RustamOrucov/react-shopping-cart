import { useState } from "react";
import Cart from "./components/Cart"
import Header from "./components/Header"
import Products from "./components/Products"


function App() {
 const [cart,setCart]=useState([]);

 const emptyCart=()=>{
  setCart([])
 }

  return (
    <>
    <h1 className="container mx-auto p-4">
      <Header cart={cart}/>
      <Products cart={cart} setCart={setCart}/>
      <Cart cart={cart} emptyCart={emptyCart}/>
    </h1>
    </>
  )
}

export default App
