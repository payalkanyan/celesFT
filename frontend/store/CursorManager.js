import { createContext, useState } from 'react';

export const CursorContext = createContext({
  size: 'small',
  setSize: () => {},
});

const CursorManager = ({ children }) => {
  const [size, setSize] = useState('small');

  return (
    <CursorContext.Provider value={{ size, setSize }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorManager;
