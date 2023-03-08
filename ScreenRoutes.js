import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './src/screens/StartScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProductsScreen from './src/screens/ProductsScreen';

const Stack = createNativeStackNavigator();
const ScreenRoutes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name='Start'
					component={StartScreen}
				/>
				<Stack.Screen
					name='Login'
					component={LoginScreen}
				/>
				<Stack.Screen
					name='Products'
					component={ProductsScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default ScreenRoutes;
