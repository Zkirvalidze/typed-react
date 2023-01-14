import React from 'react';
import useCart from '../hooks/useCart';
type PropsType = {
  viewCart: Boolean;
};
const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();
  const year: number = new Date().getFullYear();
  const pageContent = viewCart ? (
    <p>Shoppin Cart &copy; {year}</p>
  ) : (
    <>
      <p> total items: {totalItems}</p>
      <p> total items: {totalPrice}</p>
      <p>Shoppin Cart &copy; {year}</p>
    </>
  );
  const content = <footer className="footer">{pageContent}</footer>;
  return content
};

export default Footer;
