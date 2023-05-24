import { View, Text } from 'react-native'
import React from 'react'
import { detailStyles } from '../styles/detailStyles'
import ContainerComponent from '../components/detailComponents/containerComponent'

export default ProductDetail = ({navigation, route}) => {
  return (
    <View style={detailStyles.container}>
      <ContainerComponent item={route.params.item} />
    </View>
  )
}