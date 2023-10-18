import { TYPES } from "@/Actions/ShoppingActions";
import axios from "axios";
import { useReducer, useEffect } from "react";
import { ShoppingReducer, MenuInitialState } from "@/Reducer/ShoppingReducer";
import Product from "./Product";
import CartItem from "./CartItem";
import { data } from "autoprefixer";
import CartIcon from "../CartIcon";
import ShoppingContextProvider from '@/context/ShoppingContextProvider'

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(ShoppingReducer, MenuInitialState);

  const { products, cart } = state;

  // solicitud de datos a db.json mediante async/away

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:4000/products",
      cart: "http://localhost:4000/cart",
    };
    const responseProducts = await axios.get(ENDPOINTS.products),
      responseCart = await axios.get(ENDPOINTS.cart);

    const productsList = responseProducts.data,
      cartItems = responseCart.data;

    const data = {
      products: productsList,
      cart: cartItems,
    };

    dispatch({ type: TYPES.READ_STATE, payload: data });
  };

  useEffect(() => {
    updateState();
  }, []);

  //solicitudes http mediante los buttons del modal

  const addToCart = async (data) => {
    const itemIncart = cart.find((item) => item.id === data.id);

    if (!itemIncart) {
      data.quantity = 1;
      const ENDPOINT = "http://localhost:4000/cart";

      const OPTIONS = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(data),
      };

      await axios(ENDPOINT, OPTIONS);
    } else {
      data.quantity = itemIncart.quantity + 1;
      const ENDPOINT = `http://localhost:4000/cart/${data.id}`;

      const OPTIONS = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(data),
      };

      await axios(ENDPOINT, OPTIONS);
    }
    updateState();
  };

  //solicitudes mediante buttons de los CardItems

  const deleteFromCart = async (data) => {
    const itemToDelete = cart.find((item) => item.id === data.id);

    if (itemToDelete.quantity >= 2) {
      data.quantity = itemToDelete.quantity - 1;

      const ENDPOINT = `http://localhost:4000/cart/${data.id}`;

      const OPTIONS = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(data),
      };

      await axios(ENDPOINT, OPTIONS);
      updateState();
    } else {
      axios.delete(`http://localhost:4000/cart/${data.id}`);
      updateState();
    }
  };

  const deleteAll = async (data) => {
    const itemToDelete = cart.find((item) => item.id === data.id);

    axios.delete(`http://localhost:4000/cart/${data.id}`);
    updateState();
  };

  //solicitud resetCart en el shoppingCart

  const resetCart = () => {
    const item = cart[cart.length - 1];

    cart.forEach((item) => {
      axios.delete(`http://localhost:4000/cart/${item.id}`);
    });

    updateState();
  };

  return (
    <>
    <ShoppingContextProvider>
    <div>
    <a className="fixed z-[900]  bottom-12 right-5" href="#shoppingcart">
    <CartIcon />
      </a>
      <h2 className='text-center'>
        <b>Menu</b>
      </h2>
      <h3 className='text-center'>
        <b>Productos</b>
      </h3>
      <div className={styles.boxStyle}>
        {products.map((product) => (
          <Product
            key={product.id}
            data={product}
            addToCart={addToCart}
            styles={styles}
          />
        ))}
      </div>
      <div className="bg-black bg-opacity-25 rounded-3xl grid justify-center text-center justify-items-center">
        <h2>
          <b>Carrito de compras</b>
        </h2>
        <h3 id="shoppingcart">
          <b>Tu pedido</b>
        </h3>
        <div  className={styles.boxStyle}>
          {cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              deleteFromCart={deleteFromCart}
              deleteAll={deleteAll}
              styles={styles}
            />
          ))}
        </div>
        <button className={styles.buttonStyle} onClick={resetCart}>
          Limpiar Carrito
        </button>
      </div>
      </div>
      </ShoppingContextProvider>
    </>
  );
};

export default ShoppingCart;

const styles = {
  buttonStyle: `bg-black
text-white 
border-2 
border-white 
opacity-70 
hover:bg-orange-300 
hover:text-black 
focus:outline-none 
font-medium 
text-sm 
rounded-lg 
px-5 
py-2.5 
text-center mr-5`,

  cardStyle: `bg-black 
bg-opacity-30
border-1 
border-white 
shadow-2xl 
rounded-lg 
text-white
grid
content-around 
justify-center
justify-items-center
m-10 p-3 
hover:border-2 
hover:bg-grey-400`,

  boxStyle: `
grid
content-around
sm:grid-cols-1 
md:grid-cols-3 
lg:grid-cols-5`,
};