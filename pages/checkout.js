// pages/checkout.js
import { Button, Image } from 'react-bootstrap';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/router'; // Import the useRouter hook

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const router = useRouter(); // Initialize the useRouter hook

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

  const handleBack = () => {
    router.back(); // Navigate back to the previous page (product list)
  };

  return (
    <Layout>
      <h1>Checkout</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <Image src={item.image} alt={item.name} fluid />
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
      <Button onClick={handleBack}>Back to Product List</Button>
    </Layout>
  );
};

export default Checkout;
