import React, { useState, useMemo } from 'react';
import { ModalsDispatchContext, ModalsStateContext } from "../../utils/ModalsContext";
import Modals from './Modals';

export default function ModalsProvider({ children }) {
  const [openModals, setOpenedModals] = useState([]);

  const open = (Component, props) => {
    setOpenedModals(modals => [...modals, { Component, props }]);
  };

  const close = (Component) => {
    setOpenedModals(modals =>
      modals.filter(modal => modal.Component !== Component)
    );
  };

  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
        <Modals />
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}
