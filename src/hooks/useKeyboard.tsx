import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent } from 'react-native';

export const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

  function onKeyboardWillShow(e: KeyboardEvent) { // Remove type here if not using TypeScript
    setIsKeyboardOpen(true)
    setKeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardWillHide() {
    setIsKeyboardOpen(false)
    setKeyboardHeight(0);
  }


  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardWillShow);
    const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardWillHide);
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    console.log('Cambio teclado: ',isKeyboardOpen);
  }, [isKeyboardOpen])

  return {
    keyboardHeight,
    isKeyboardOpen
  }
};
