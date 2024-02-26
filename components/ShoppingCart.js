import { useCart } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
