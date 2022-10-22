import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button, Box } from "@react-bulk/native";

export default function Expired() {
  return (
    <Box flex bg="primary" center>
      <Text>OTA</Text>
      <Link href="/">
        <Button color="error">Click here</Button>
      </Link>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
