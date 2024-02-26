import { Card, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon
import Link from 'next/link';
import Footer from './Footer';


import { Row, Col } from 'react-bootstrap';
import ProductCard from './productCard';


const categories = ['Shoes', 'Clothes', 'Accessories'];

const ProductList = ({ products }) => {
  return (
    <div className="row">
        <div className="fixed-bottom d-flex justify-content-end me-md-3 me-sm-0 mb-md-3 mb-sm-0">
        <Link href="/checkout">
          <Button variant="primary">
            <FaShoppingCart className="me-2" /> Cart
          </Button>
        </Link>
      </div>
      <Row xs={1} md={3} lg={3} className="g-4">
      {products.map((product) => (
        <Col md={4} key={product.id}>
            
          <ProductCard product={product} price={product.price}/>
        </Col>
      ))}
    </Row>
    <Footer />
    </div>
    
  );
};

export default ProductList;
