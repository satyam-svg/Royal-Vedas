import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";


export default function Layout() {



  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
