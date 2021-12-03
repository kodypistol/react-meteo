import React, { useState } from 'react';

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
