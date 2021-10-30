import { StyleSheet } from 'react-native';
import { View as MotiView, Text as MotiText } from 'moti';

export function HelloWorld() {
  return (
    <MotiView style={styles.container}>
      <MotiText>Hello, World!</MotiText>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
