import React, { useState } from 'react';
import products from 'json/products.json';

const AppContext = React.createContext([{}, () => {}]);

const AppContextProvider = (props) => {
  const [productsIdLiked, setProductsIdLiked] = useState([]);
  return (
    <AppContext.Provider value={{productsIdLiked, setProductsIdLiked}}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
