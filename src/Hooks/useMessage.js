import { useContext } from "react";
import MessageContext from "../Contexts/MessageProvider"

const useMessage =() => {
  return useContext(MessageContext)
}

export default useMessage
