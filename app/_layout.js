import ReactBulk from "@react-bulk/core";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import theme from "../config/theme";

export default function Layout() {
  return (
    <ReactBulk theme={theme}>
      <StatusBar style="auto" translucent/>
      <Stack />
    </ReactBulk>
  );
}
