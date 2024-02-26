// pages/checkout.js
import { Button } from 'react-bootstrap';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, dispatch } = useCart();

  const increaseQuantity = (item) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: item });
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: item });
  };

  const removeItem = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Layout>
      <h1>Checkout</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
          <p>Quantity: {item.quantity}</p>
          <Button onClick={() => increaseQuantity(item)}>+</Button>
          <Button onClick={() => decreaseQuantity(item)}>-</Button>
          <Button onClick={() => removeItem(item)}>Remove</Button>
        </div>
      ))}
      <h2>Total Price: ${getTotalPrice().toFixed(2)}</h2>
    </Layout>
  );
};

export default Checkout;
