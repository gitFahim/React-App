// components/ProductCard.js
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/router';
import styles from '../styles/ProductCard.module.css'; 
import products from '../data/products.json';

const ProductCard = ({ product, price }) => {
const router = useRouter();
const { dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    router.push('/checkout'); // Navigate to the checkout page
  };
  return (
    
    <Card className={styles.productCard}>

  
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
        </Button>
      </Card.Body>
      <Card.Footer>
      <Card.Text>Price: ${price.toFixed(2)}</Card.Text>
    </Card.Footer>
    </Card>
  );
};

export default ProductCard;
