import React from 'react'
import { Text, View } from 'react-native'
import { TEST } from '@env'

export function App() {
  console.log('AAAAAAAAAAA', TEST)
  return (
    <View>
      <Text>Test</Text>
    </View>
  )
}
