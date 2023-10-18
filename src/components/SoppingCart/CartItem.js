import { data } from "autoprefixer";
import Image from "next/image";

const CartItem = ({ data, deleteFromCart, deleteAll, styles }) => {
  const { name, price, id, image, quantity } = data;
  const { buttonStyle, cardStyle } = styles;
  return (
    <figure className={cardStyle}>
      <Image
        className="border-2 border-orange-300"
        src={image}
        alt={name}
        width="250"
        height="200"
      />
      <h4>
        <b>{name}</b>
      </h4>
      <h5>
        $ {price} X {quantity} = {price * quantity}
      </h5>
      <button className={buttonStyle} onClick={() => deleteFromCart(data)}>
        Eliminar uno{" "}
      </button>
      <button className={buttonStyle} onClick={() => deleteAll(data)}>
        Eliminar todos{" "}
      </button>
    </figure>
  );
};
export default CartItem;
