import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Minimalistic Ecommerce</title>
    </Head>
    <div className="container">{children}</div>
  </>
);

export default Layout;
