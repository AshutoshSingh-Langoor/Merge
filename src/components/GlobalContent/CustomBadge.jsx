import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';

const CustomBadge = ({ count }) => {
  return (
    <View style={styles.badgeContainer}>
      <Badge style={styles.badge}>{count}</Badge>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    position: 'absolute',
    top: -5,
    right: -10,
  },
  badge: {
    backgroundColor: 'red',
    color: 'white',
  },
});

export default CustomBadge;
