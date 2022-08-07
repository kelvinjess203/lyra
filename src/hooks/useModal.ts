import { useCallback, useContext, useEffect, useMemo } from 'react';
import { uuidv4 } from 'util/uuid';
import { Context } from '../contexts/Modals';
import { useIsMount } from './useIsMount';

const useModal = (modal: React.ReactNode, onClose?: () => void): [<T = any>(data?: T) => void, () => any] => {
  const { onDismiss, onPresent, isOpen, modalKey } = useContext(Context);

  const initModalKey = useMemo(() => uuidv4(), []);

  const isMount = useIsMount();

  useEffect(() => {
    if (isMount) {
      return;
    }

    if (!isOpen && initModalKey === modalKey) {
      if (onClose) onClose();
    }
  }, [isOpen, initModalKey, modalKey, onClose, isMount]);

  const handlePresent = useCallback(<T = any>(data?: T) => {
    onPresent(modal, data, initModalKey);
  }, [initModalKey, modal, onPresent]);

  return [handlePresent, onDismiss];
};

export default useModal;
