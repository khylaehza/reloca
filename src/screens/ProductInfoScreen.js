import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Image,
	TouchableOpacity,
	ToastAndroid,
} from 'react-native';
import Color from '../themes/Colors';
import NumericInput from 'react-native-numeric-input';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const ProductInfoScreen = ({ route }) => {
	const showToast = () => {
		ToastAndroid.showWithGravity(
			'Added to Cart!',
			ToastAndroid.SHORT,
			ToastAndroid.CENTER
		);
	};

	const { name, origin, info, price, img } = route.params;
	const [value, setValue] = useState();
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/bg/region-page.jpg')}
				resizeMode='cover'
				style={styles.background}
			>
				<View style={styles.infoContainer}>
					<View>
						<View style={{ height: 380 }}>
							<Text
								style={{
									fontFamily: 'Poppins-Bold',
									fontSize: 25,
									width: 170,
									paddingTop: 20,
								}}
							>
								{name}
							</Text>
							<Text
								style={[
									styles.infoText,
									{
										fontFamily: 'Poppins-SemiBold',
										marginVertical: 5,
									},
								]}
							>
								{origin}
							</Text>
							<Text
								style={[
									styles.infoText,
									{ marginVertical: 10 },
								]}
							>
								{info}
							</Text>
						</View>

						<View
							style={{
								flexDirection: 'row',
								alignItems: 'stretch',
							}}
						>
							<View
								style={{
									width: '50%',
								}}
							>
								<NumericInput
									value={value}
									onChange={(value) => setValue(value)}
									totalWidth={110}
									totalHeight={35}
									rounded
									textColor={Color.br6}
									iconStyle={{
										color: 'white',
									}}
									rightButtonBackgroundColor={Color.br6}
									leftButtonBackgroundColor={Color.br6}
								/>
								<Text
									style={[
										styles.infoText,
										{ marginVertical: 10 },
									]}
								>
									{price}
								</Text>
							</View>
							<View
								style={{
									width: '50%',
								}}
							>
								<TouchableOpacity
									style={{
										backgroundColor: Color.br6,
										padding: 8,
										alignItems: 'center',
										borderRadius: 20,
										flexDirection: 'row',
										justifyContent: 'center',
										paddingLeft: 20,
										paddingRight: 20,
									}}
									onPress={() => showToast()}
								>
									<AntDesign
										name='shoppingcart'
										size={24}
										color={Color.wh1}
									/>
									<Text
										style={{
											color: Color.wh1,
											paddingLeft: 10,
										}}
									>
										Add to Cart
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={styles.imgContainer}>
						<Image
							source={img}
							style={styles.img}
						/>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	background: {
		flex: 1,
		width: '100%',
		justifyContent: 'flex-end',
	},
	imgContainer: {
		width: '50%',
		alignItems: 'flex-end',
		zIndex: 5,
	},
	img: {
		objectFit: 'cover',
		height: 220,
		width: 220,
		borderRadius: 120,
		alignSelf: 'flex-end',
		marginRight: 155,
		top: -150,
	},
	infoContainer: {
		height: '65%',
		backgroundColor: Color.wh1,
		width: '100%',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 30,
		paddingTop: 40,
		flexDirection: 'column',
		flexWrap: 'wrap',
	},
	infoText: {
		alignSelf: 'stretch',
		fontFamily: 'Poppins-Regular',
		textAlign: 'justify',
	},
});
export default ProductInfoScreen;
