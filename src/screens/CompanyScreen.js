import { View, Text, StyleSheet, Image } from 'react-native';
import Color from '../themes/Colors';
const CompanyScreen = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require('../../assets/goodwill-logo.png')}
				style={styles.logo}
			/>
			<View style={styles.info}>
				<Text
					style={[
						styles.text,
						{
							fontSize: 20,
							marginBottom: 30,
						},
					]}
				>
					Company Information
				</Text>

				<View
					style={{
						flexDirection: 'row',
						gap: 25,
					}}
				>
					<View
						style={{
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Image
							source={require('../../assets/members/m1.png')}
							style={styles.img}
						/>
						<Text style={[styles.text, { fontSize: 13 }]}>
							Esquivel, Sharmaine R.
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Image
							source={require('../../assets/members/m2.png')}
							style={styles.img}
						/>
						<Text style={[styles.text, { fontSize: 13 }]}>
							Pingol, Ianne
						</Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						gap: 25,
						alignItems: 'center',
					}}
				>
					<View
						style={{
							flexDirection: 'column',
							marginTop: 15,
							alignItems: 'center',
						}}
					>
						<Image
							source={require('../../assets/members/m3.png')}
							style={styles.img}
						/>
						<Text style={[styles.text, { fontSize: 13 }]}>
							Madlangbayan, Crystal
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'column',
							marginTop: 15,
							alignItems: 'center',
						}}
					>
						<Image
							source={require('../../assets/members/m4.png')}
							style={styles.img}
						/>
						<Text style={[styles.text, { fontSize: 13 }]}>
							Villamor, Joy
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default CompanyScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: Color.br0,
	},
	logo: {
		objectFit: 'scale-down',
		height: 200,
		top: 100,
		zIndex: 5,
	},
	img: {
		objectFit: 'scale-down',
		height: 100,
		width: 100,
		borderRadius: 100,
	},
	info: {
		backgroundColor: Color.br6,
		height: '70%',
		width: '100%',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		padding: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},

	text: {
		fontFamily: 'Poppins-SemiBold',
		color: Color.wh1,
		marginVertical: 5,
	},
});
