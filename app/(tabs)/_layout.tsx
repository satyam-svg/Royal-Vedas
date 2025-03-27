import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

import { useColorScheme } from "@/hooks/useColorScheme";
import SplashScreenComponent from "../../components/Splashscreen";

SplashScreen.preventAutoHideAsync(); // Prevent hiding automatically

export default function Layout() {
  const [isAppReady, setIsAppReady] = useState(false);
  const colorScheme = useColorScheme(); // ✅ Correctly placed inside component

  useEffect(() => {
    const prepare = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading
      setIsAppReady(true);
    };

    prepare();
  }, []);

  useEffect(() => {
    if (isAppReady) {
      SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return <SplashScreenComponent />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}
