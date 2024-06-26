import React,{useState,useEffect} from "react";
import './Cart.css';
import productsData from './Products.json';


function Cart() {
   const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
      // Initialize products with the imported data
      setProducts(productsData);
  
      // Initialize cart from local storage
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
          setCart(JSON.parse(storedCart));
      }
  }, []);

  const addToCart = (productId) => {
   // Add product to cart
   const existingProductIndex = cart.findIndex(item => item.product_id === productId);
   if (existingProductIndex === -1) {
       setCart([...cart, { product_id: productId, quantity: 1 }]);
   } else {
       const updatedCart = [...cart];
       updatedCart[existingProductIndex].quantity++;
       setCart(updatedCart);
   }
};

const removeFromCart = (productId) => {
   // Find the item in the cart
   const existingProductIndex = cart.findIndex(item => item.product_id === productId);
   if (existingProductIndex !== -1) {
       const updatedCart = [...cart];
       // If the quantity is greater than 1, decrement it
       if (updatedCart[existingProductIndex].quantity > 1) {
           updatedCart[existingProductIndex].quantity--;
       } else {
           // If the quantity is 1, remove the item from the cart
           updatedCart.splice(existingProductIndex, 1);
       }
       setCart(updatedCart);
   }
};




return (
   <div className="cart-container">
   <header>
                    <div className="title">PRODUCT LIST</div>
                    <div className="icon-cart">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
                        </svg>
                        <span>0</span>
                    </div>
                </header>

       <div className="listProduct">
           {products.map(product => (
               <div key={product.id} className="item">
                   <img src={product.image} alt={product.name} />
                   <h2>{product.name}</h2>
                   <div className="price">${product.price}</div>
                   <button className="addCart" onClick={() => addToCart(product.id)}>Add To Cart</button>
               </div>
           ))}
       </div>
       <div className="listCart">
           {cart.map(item => (
               <div key={item.product_id} className="item">
                   <img src={products.find(product => product.id === item.product_id).image} alt={products.find(product => product.id === item.product_id).name} />
                   <div className="name">{products.find(product => product.id === item.product_id).name}</div>
                   <div className="totalPrice">${products.find(product => product.id === item.product_id).price * item.quantity}</div>
                   <div className="quantity">
                       <button className="minus" onClick={() => removeFromCart(item.product_id)}>-</button>
                       <span>{item.quantity}</span>
                       <button className="plus" onClick={() => addToCart(item.product_id)}>+</button>
                   </div>
               </div>
           ))}
       </div>
   </div>
);
}

export default Cart;
