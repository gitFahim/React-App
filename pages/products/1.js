// pages/products/[id].js
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import products from '../../data/products.json';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Layout>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </Layout>
  );
};

export default ProductDetails;
