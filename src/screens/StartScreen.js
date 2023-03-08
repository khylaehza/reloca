import { ImageBackground, Image, View, StyleSheet } from 'react-native';
import CusButton from '../components/CusButton';

import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
	const navigation = useNavigation();

	const onStartPress = () => {
		navigation.navigate('Login');
	};

	const onCompInfo = () => {
		navigation.navigate('Company');
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/bg/start-page.jpg')}
				resizeMode='cover'
				style={styles.background}
			>
				<Image
					source={require('../../assets/goodwill-logo.png')}
					style={styles.compLogo}
				/>

				<Image
					source={require('../../assets/re-loca-logo.png')}
					style={styles.logo}
				/>

				<View
					style={{
						justifyContent: 'flex-end',
						width: '100%',
						top: 65,
					}}
				>
					<CusButton
						onPress={onStartPress}
						text={'Get Started'}
						type='START'
					/>

					<CusButton
						onPress={onCompInfo}
						text={'Company Information'}
						type='COMPANY'
					/>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
	background: {
		flex: 1,
		justifyContent: 'space-evenly',
		width: '100%',
		alignItems: 'center',
	},

	logo: {
		objectFit: 'scale-down',
		height: 250,
		width: 250,
		justifyContent: 'center',
	},
	compLogo: {
		objectFit: 'scale-down',
		height: 60,
		alignSelf: 'flex-start',
		marginLeft: 80,
		marginTop: -55,
	},
});

export default StartScreen;
