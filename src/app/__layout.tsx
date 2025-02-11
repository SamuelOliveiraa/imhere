import "@/styles/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function Layout() {
  return (
    <>
      <StatusBar 
        translucent
        barStyle="light-content"
        backgroundColor="transparent" />
      <Stack />;
    </>
  );
} 
