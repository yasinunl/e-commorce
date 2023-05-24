import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from '../screens/homePage'
import ProductDetail from '../screens/productDetail'

const Stack = createNativeStackNavigator();

const NavigatorRouter = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{title:"Product List", headerTitleAlign:"center"}} />
            <Stack.Screen
            name="ProductDetail" component={ProductDetail} 
            options={{title:"Product Details"}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigatorRouter