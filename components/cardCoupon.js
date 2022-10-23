import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { Button, Box, Text } from "@react-bulk/native";

export default function Home() {
const  color =  "red" ;

  return (
    <Box>
      <Text bold color={color}>Open up App.js to start working on your app!</Text>
      <Button component={Link} href="/" flex>
        Click here
      </Button>
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
