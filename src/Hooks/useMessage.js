import { useState } from "react";


function useMessage() {
  const [message, setMessage] = useState(null);
  return {message, setMessage }
}

export default useMessage;
