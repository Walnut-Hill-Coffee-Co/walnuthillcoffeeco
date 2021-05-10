import { MenuStateProvider } from "./src/contexts/menuStateContext"

export const wrapRootElement = ({element}) =>{
  return (
    <MenuStateProvider>
      {element}
    </MenuStateProvider>
  )
}
