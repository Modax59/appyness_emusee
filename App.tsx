import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";
import HomeScreen from "./app/screens/HomeScreen";
import AppNavigator from "./app/navigation/AppNavigator";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { default as theme } from "./theme.json";

export default function App() {
  return (
    <>
      <IconRegistry icons={[EvaIconsPack]} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
}
