import { StyleSheet, View } from 'react-native';
import { Text as MotiText } from 'moti';

export function HelloWorld() {
  return (
    <View style={styles.container}>
      <View
        style={styles.content}
      >
        <MotiText
          from={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: 'timing', delay: 300 * 1, duration: 900 }}
        >
          Hello
        </MotiText>
        <MotiText
          from={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: 'timing', delay: 300 * 2, duration: 900 }}
        >
          ,{' '}
        </MotiText>
        <MotiText
          from={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ type: 'timing', delay: 300 * 3, duration: 900 }}
        >
          Moti!
        </MotiText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flexDirection: 'row',
  },
});
