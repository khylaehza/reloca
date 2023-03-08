import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import ScreenRoutes from './ScreenRoutes';

export default function App() {
	const [fontsLoaded] = useFonts({
		'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
		'Poppins-BoldItalic': require('./assets/fonts/Poppins-BoldItalic.ttf'),
		'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
		'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
		'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
			console.log('loading');
		} else {
			console.log(error);
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		console.log('not loaded');
		return null;
	}

	return <ScreenRoutes onLayout={onLayoutRootView} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontFamily: 'Poppins-Regular',
	},
});
