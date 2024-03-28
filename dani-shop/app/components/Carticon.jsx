import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx';

const CartIcon = ({ itemCount }) => {
  return (
    <div>
      <FontAwesomeIcon className={clsx({'text-lime-600': itemCount > 0})} icon={faShoppingCart} />
      <span className={clsx({'text-lime-600': itemCount > 0})} >{itemCount}</span> {/* Muestra el número de unidades */}
    </div>
  );
}

export default CartIcon;
