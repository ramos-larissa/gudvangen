import { Link, Stack } from 'expo-router';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Box, Text, ListItem } from '@react-bulk/native';
import { LinearGradient } from 'expo-linear-gradient';
import CardCoupon from '../components/cardCoupon';

export default function MainCoupon() {
  return (
    <ScrollView>
      <Box flex center component={LinearGradient} colors={['#00a7a5', '#c83863']}>
        <CardCoupon />
        <CardCoupon />
        <CardCoupon />
        <CardCoupon />
        <CardCoupon />
        <CardCoupon />
      </Box>
    </ScrollView>
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
