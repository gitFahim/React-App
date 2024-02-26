import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import products from '../data/products.json';
import Head from 'next/head';

const Home = () => (
  <Layout>
    <Head>
        <title>Minimalistic Ecommerce</title>
        <meta name="description" content="Your description here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center">Welcome to Minimalistic</h1>
      </main>
    <ProductList products={products} />
  </Layout>
  
);

export default Home;
