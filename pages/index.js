// pages/index.js
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import products from '../data/products.json';

const Home = () => (
  <Layout>
    <h1>Welcome to Minimalistic Ecommerce</h1>
    <ProductList products={products} />
  </Layout>
);

export default Home;
