import Image from "next/image";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Product = ({ data, addToCart, styles }) => {
  const { buttonStyle, cardStyle } = styles;
  const { name, price, image } = data;

  const [showModal, setShowModal] = useState(false);

  return (
    <figure className={cardStyle}>
      <Image
        className="border-2 border-orange-300"
        src={image}
        alt={name}
        width="250"
        height="200"
      />
      <h3>
        <b>{name}</b>
      </h3>
      <h5>$ {price}</h5>
      <button className={buttonStyle} onClick={() => setShowModal(true)}>
        Ver
      </button>
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        data={data}
        addToCart={addToCart}
        styles={styles}
      />
    </figure>
  );
};

export default Product;