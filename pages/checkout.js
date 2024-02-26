import { Row, Col, Button, Image } from 'react-bootstrap';
import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/router';
import styles from '../styles/Checkout.module.css';

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const router = useRouter();

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
    router.back();
  };

  return (
    <Layout>
      <h1>Checkout</h1>
      <div className={styles.checkout}></div>
      {cart.map((item) => (
        <Row key={item.id} className="mb-3">
          <Col xs={3}>
            <Image src={item.image} alt={item.name} fluid />
          </Col>
          <Col xs={9}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <Button onClick={() => increaseQuantity(item)}>+</Button>
            <Button onClick={() => decreaseQuantity(item)}>-</Button>
            <Button onClick={() => removeItem(item)}>Remove</Button>
          </Col>
        </Row>
      ))}
      <h2 style={{ padding: '10px 0' }}>Total Price: ${getTotalPrice().toFixed(2)}</h2>
      <Button style={{ margin: '0  0 25px 0' }} onClick={handleBack}>Continue Shopping</Button>
    </Layout>
  );
};

export default Checkout;
