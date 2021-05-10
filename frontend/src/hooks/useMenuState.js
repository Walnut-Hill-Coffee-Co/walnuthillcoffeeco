import { useState, useContext, useLayoutEffect } from "react";
import { MenuStateContext } from "../contexts/menuStateContext";

const useMenuState = () => {
  const [state, setState] = useContext(MenuStateContext);

  // toggle menu visibility
  function toggleMenu() {
    setState((state) => ({ ...state, isMenuOpen: !state.isMenuOpen }));
  }

  function closeMenu() {
    setState((state) => ({ ...state, isMenuOpen: false }));
  }

  // get current size of browser
  function useWindowSize() {
    const isClient = typeof window === "object";

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useLayoutEffect(() => {
      if (!isClient) return false;

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    });
    return windowSize;
  }

  return {
    toggleMenu,
    closeMenu,
    isMenuOpen: state.isMenuOpen,
    browserWidth: useWindowSize().width,
    browserHeight: useWindowSize().height,
  };
};

export default useMenuState;
