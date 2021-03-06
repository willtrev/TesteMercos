import React from 'react';

import InfoHeader from '../../components/infoHeader';
import ShoppingCart from '../../components/shoppingCart';
import PosNav from '../../components/posNav';
import NavigationBar from '../../components/navigationBar';
import Footer from '../../components/footer';
import stickTop from '../../components/stickTop';

const Carrinho = () => {
  return(
    <>
      <stickTop>
        <InfoHeader />
        <NavigationBar />
      </stickTop>
      <PosNav />
      <ShoppingCart />
      <Footer />
    </>
  )
}
export default Carrinho;
