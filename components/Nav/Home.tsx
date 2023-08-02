import React, { FC, ReactElement } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Home: FC = (): ReactElement<any, any> | null => {

  const background = <Image style={styles.background} source={require('../../assets/HomeBG/3.jpg')} />
  return (
    <View style={styles.wrapper}>
      {background}
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>Wellcome</Text>
        <Text style={styles.title}>to</Text>
        <Text style={styles.titleBold}>RoadMap</Text>
        <Text style={styles.titleBold}>Front-end DEV</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  wrapperTitle: {
    marginTop: '20%',
    alignItems: 'center'
  },
  title: {
    fontSize: 34,
    letterSpacing: 1,
    color: 'white'
  },
  titleBold: {
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: 1,
    color: 'white',
    textShadowRadius: 10,
    textShadowColor: '#808080'
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
})

export default Home