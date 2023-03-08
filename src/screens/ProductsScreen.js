import {
	View,
	Text,
	StyleSheet,
	Image,
	ImageBackground,
	ScrollView,
} from 'react-native';
import Color from '../themes/Colors';
import { useState } from 'react';
import CusButton from '../components/CusButton';

const ProductsScreen = ({ route }) => {
	const [showNCR, setShowNCR] = useState(false);

	const onNCRPressed = () => {
		console.log('ncr pressed');
	};

	const NCRComponent = () => {
		return (
			<View>
				<Image source={require('../../assets/products/reg-I.png')} />
			</View>
		);
	};

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
					<ScrollView scrollEventThrottle={16}>
						<View style={{ flex: 1 }}>
							<Text style={styles.text}>Hi! {uname}</Text>
							<Text style={[styles.text, { fontSize: 18 }]}>
								What are you looking for?
							</Text>
						</View>
						<View style={{ height: 60, marginTop: 10 }}>
							<ScrollView horizontal={true}>
								<CusButton
									type='REGIONS'
									text={'NCR'}
									onPress={() => setShowNCR(!showNCR)}
								/>
								<CusButton
									type='REGIONS'
									text={'CAR'}
									onPress={onNCRPressed}
								/>
								<CusButton
									type='REGIONS'
									text={'REGION I'}
									onPress={onNCRPressed}
								/>
								<CusButton
									type='REGIONS'
									text={'REGION II'}
									onPress={onNCRPressed}
								/>
								<CusButton
									type='REGIONS'
									text={'REGION III'}
									onPress={onNCRPressed}
								/>
								<CusButton
									type='REGIONS'
									text={'REGION IV - A'}
									onPress={onNCRPressed}
								/>
								<CusButton
									type='REGIONS'
									text={'MIMAROPA'}
									onPress={onNCRPressed}
								/>
								<CusButton
									type='REGIONS'
									text={'REGION VI'}
									onPress={onNCRPressed}
								/>
								<CusButton
									type='REGIONS'
									text={'REGION VII'}
									onPress={onNCRPressed}
								/>
								<CusButton
									type='REGIONS'
									text={'REGION VIII'}
									onPress={onNCRPressed}
								/>
								<CusButton
									type='REGIONS'
									text={'REGION IX'}
									onPress={onNCRPressed}
								/>
								<CusButton
									type='REGIONS'
									text={'REGION X'}
									onPress={onNCRPressed}
								/>
								<CusButton
									type='REGIONS'
									text={'REGION XI'}
									onPress={onNCRPressed}
								/>
								<CusButton
									type='REGIONS'
									text={'REGION XII'}
									onPress={onNCRPressed}
								/>
								<CusButton
									type='REGIONS'
									text={'REGION XIII'}
									onPress={onNCRPressed}
								/>
								<CusButton
									type='REGIONS'
									text={'BARMM'}
									onPress={onNCRPressed}
								/>
							</ScrollView>
						</View>
						<View>{showNCR && <NCRComponent />}</View>
					</ScrollView>
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
