import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './src/screens/StartScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductInfoScreen from './src/screens/ProductInfoScreen';
import CompanyScreen from './src/screens/CompanyScreen';
import SignUpScreen from './src/screens/SignUpScreen';

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
				<Stack.Screen
					name='Info'
					component={ProductInfoScreen}
				/>
				<Stack.Screen
					name='Company'
					component={CompanyScreen}
				/>
				<Stack.Screen
					name='SignUp'
					component={SignUpScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default ScreenRoutes;
