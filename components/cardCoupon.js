import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button, Box, Text, ListItem, Card, Divider } from '@react-bulk/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <Card w="90%" m={2}>
      <Text variant="title" mb={3}>
        Lorem ipsum
      </Text>
      <Text mb={2}>Lorem ipsum Lorem</Text>
      <Button center color="primary" mb={2}>
        USE COUPON
      </Button>
      <Text color="secondary" right size={0.7}>
        Expire DD/MM/YYYY
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#d9d9d9',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
