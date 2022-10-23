import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button, Box, Text, ListItem } from '@react-bulk/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <Box flex center component={LinearGradient} colors={['#08D9D6', '#FF2E63']}>
        <Box center corners p={8} bg="backgroundLight" >
          <Text bold m={2}>
            Check the coupons available to you!
          </Text>
          <Button color="secondaryDark" component={Link} href="/mainCoupon" pt={2}>
            GO!
          </Button>
        </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    backgroundColor:'#d9d9d9',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
});
