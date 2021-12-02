import React, { useState } from 'react';

const AppContext = React.createContext([{}, () => {}]);

const AppContextProvider = (props) => {
  const [state, setState] = useState({
    tracks: [
      {
        productId: '',
        liked: false,
      }
    ],
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
