import React, { useContext } from 'react';
import { ModalsStateContext, ModalsDispatchContext } from '../../utils/ModalsContext';

export default function Modals() {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, idx) => {
    const { Component, props } = modal;
    const onClose = () => {
      close(Component);
    };

    return <Component {...props} key={idx} onClose={onClose} />;
  });
}
