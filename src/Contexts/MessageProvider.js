import { createContext, useState, useCallback } from "react"

const MessageContext = createContext({});

export const MessageProvider = ({ children }) => {
    const [ message, setMessage ] = useState("")

    const removeMessage = () => setMessage(null)

    const contextValue = {
        message,
        setMessage,
        removeMessage: useCallback(() => removeMessage(), [])
    }

    return (
        <MessageContext.Provider value={{message, setMessage, removeMessage }}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageContext