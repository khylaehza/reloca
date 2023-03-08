import {
	View,
	Text,
	StyleSheet,
	Image,
	ImageBackground,
	ScrollView,
} from 'react-native';
import Color from '../themes/Colors';
import CusFlatlist from '../components/CusFlatlist';

const ProductsScreen = ({ route }) => {
	const { uname } = route.params;
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/bg/region-page.jpg')}
				resizeMode='cover'
				style={styles.background}
			>
				<Image
					source={require('../../assets/re-loca-logo.png')}
					style={styles.logo}
				/>
				<View style={styles.region}>
					<View style={{ flex: 1 }}>
						<Text style={styles.text}>Hi! {uname}</Text>
						<Text style={[styles.text, { fontSize: 18 }]}>
							Where are you looking for?
						</Text>

						<CusFlatlist />
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};
export default ProductsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
	background: {
		top: 0,
		flex: 1,
		justifyContent: 'flex-start',
	},

	text: {
		fontFamily: 'Poppins-SemiBold',
	},
	logo: {
		objectFit: 'scale-down',
		height: 60,
		alignSelf: 'flex-start',
		marginLeft: 80,
		marginTop: 65,
	},
	region: {
		alignSelf: 'center',
		height: '80%',
		width: '100%',
		backgroundColor: Color.wh3,
		marginTop: 40,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		padding: 40,
	},
});
