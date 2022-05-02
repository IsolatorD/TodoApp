import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { BackHandler } from "react-native";


interface IBackHandler {
  isHome: boolean;
}

export const userBackHandler = ({ isHome }: IBackHandler) => {
  const { goBack } = useNavigation()
  useEffect(() => {
    const unsubscribe = BackHandler.addEventListener('hardwareBackPress', () => {
      if (isHome) {
        BackHandler.exitApp();
        return true;
      }
      goBack()
      return true
    })

    return () => {
      unsubscribe.remove();
    }
  }, [])
}