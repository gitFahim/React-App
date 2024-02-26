import { Card, Button } from 'react-bootstrap';


import { Row, Col } from 'react-bootstrap';
import ProductCard from './productCard';

const ProductList = ({ products }) => {
  return (
    <div className="row">
      <Row xs={1} md={3} className="g-4">
      {products.map((product) => (
        <Col md={4} key={product.id}>
            
          <ProductCard product={product} price={product.price}/>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default ProductList;
