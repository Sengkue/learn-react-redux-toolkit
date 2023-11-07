import { useEffect } from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, getCartItems } from './features/Cart/CartSlice';
import Modal from './components/Modal';

function App() {
  const { isOpen, isLoading } = useSelector((state) => state.modal);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <main>
    {isOpen && <Modal />}
    <Navbar />
    <CartContainer />
  </main>
  );
}

export default App;