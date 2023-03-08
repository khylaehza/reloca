import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Color from '../themes/Colors';

const CusButton = ({ onPress, text, type }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[styles.container, styles[`container_${type}`]]}
		>
			<Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '70%',
		borderRadius: 15,
		alignItems: 'center',
		zIndex: 2,
		alignSelf: 'center',
	},

	container_START: {
		backgroundColor: Color.wh1,
		marginVertical: 5,
		padding: 10,
	},

	container_LOGIN: {
		backgroundColor: Color.bl1,
		width: '45%',
		borderRadius: 10,
		padding: 10,
	},

	container_NUMBER: {
		backgroundColor: Color.br5,
		width: '80%',
		borderRadius: 10,
		padding: 10,
	},

	container_COMPANY: {
		borderRadius: 0,
		padding: 0,
		width: 'auto',
	},

	container_CART: {
		backgroundColor: Color.br6,
		marginVertical: 5,
		padding: 10,
	},

	container_LINKS: {
		borderRadius: 0,
		padding: 0,
		width: 'auto',
		marginVertical: 8,
	},

	container_REGIONS: {
		borderRadius: 0,
		padding: 0,
		width: 100,
		marginRight: 2,
		marginLeft: 2,
	},

	text: {
		textAlign: 'center',
		fontFamily: 'Poppins-SemiBold',
	},

	text_START: {
		color: Color.bl1,
	},
	text_LINKS: {
		color: Color.bl1,
		fontSize: 13,
	},

	text_REGIONS: {
		color: Color.bl1,
		fontSize: 14,
	},

	text_LOGIN: {
		color: Color.wh1,
	},

	text_NUMBER: {
		color: Color.wh1,
	},

	text_COMPANY: {
		color: Color.bl1,
		textDecorationLine: 'underline',
		fontFamily: 'Poppins-Regular',
		fontSize: 12,
	},

	text_CART: {
		color: Color.wh1,
	},
});

export default CusButton;
