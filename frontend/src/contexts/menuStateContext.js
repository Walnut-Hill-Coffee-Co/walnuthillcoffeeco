import React, { useState } from "react";

const MenuStateContext = React.createContext([{}, () => {}]);

const MenuStateProvider = (props) => {
  const [state, setState] = useState({ isMenuOpen: false, browserWidth: 0 });

  return (
    <MenuStateContext.Provider value={[state, setState]}>
      {props.children}
    </MenuStateContext.Provider>
  );
};

export { MenuStateContext, MenuStateProvider };
