import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import icedCoffee from '@/assets/images/iced-coffee.jpg'

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffee}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.text}>Marketplace</Text>
        </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    height: '100%',
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    fontSize: 45,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})