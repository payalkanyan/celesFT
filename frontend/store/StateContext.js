import { createContext, useState } from "react";

export const StateContext = createContext();

const StateContextProvider = ({ children }) => {
  const [showCursor, setShowCursor] = useState(true);
  const [rpc, setRpc] = useState(null);
  const [verified, setVerified] = useState(false);

  return (
    <StateContext.Provider
      value={{
        showCursor,
        setShowCursor,
        rpc,
        setRpc,
        verified,
        setVerified,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
