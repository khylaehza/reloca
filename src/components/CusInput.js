import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import { useState } from 'react';
import Color from '../themes/Colors';

const CusInput = ({
	control,
	name,
	rules = {},
	placeholder,
	secureTextEntry,
	keyboardType,
	type,
	maxLength,
	autoCapitalize,
	label,
}) => {
	const [bgColor, setBgColor] = useState(false);
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({ field: { value, onChange }, fieldState: { error } }) => (
				<>
					<Text style={styles.label}>{label}</Text>
					<View
						style={[
							styles.container,
							{
								borderColor: error ? Color.r100 : Color.br7,
								backgroundColor: bgColor
									? Color.br3
									: '#E4C69899',
							},
						]}
					>
						<TextInput
							value={value}
							onChangeText={onChange}
							placeholder={placeholder}
							style={[styles.input]}
							secureTextEntry={secureTextEntry}
							keyboardType={keyboardType}
							onFocus={() => setBgColor(true)}
							onBlur={() => setBgColor(false)}
							type={type}
							maxLength={maxLength}
							autoCapitalize={autoCapitalize}
						/>
					</View>
					{error && (
						<Text style={styles.error}>
							{error.message || 'Error'}
						</Text>
					)}
				</>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: Color.br7,
		width: '100%',
		borderColor: Color.b4,
		borderWidth: 1,
		borderRadius: 5,
		padding: 8,
		marginVertical: 7,
		alignSelf: 'center',
	},
	input: {
		color: Color.bl1,
		fontFamily: 'Poppins-Regular',
		fontSize: 16,
	},
	error: {
		color: Color.r100,
		alignSelf: 'stretch',
		top: -5,
		left: 3,
		fontSize: 12.2,
	},
	label: {
		fontFamily: 'Poppins-SemiBold',
		marginTop: 20,
		alignSelf: 'flex-start',
		fontSize: 17,
	},
});

export default CusInput;
