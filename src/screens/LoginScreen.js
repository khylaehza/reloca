import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	ScrollView,
} from 'react-native';
import Color from '../themes/Colors';
import CusInput from '../components/CusInput';
import { useForm } from 'react-hook-form';
import CusButton from '../components/CusButton';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
	const navigation = useNavigation();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onLoginPress = (data) => {
		const username = data['username'];
		navigation.navigate('Products', { uname: username });
	};
	const onSignPress = () => {
		navigation.navigate('SignUp');
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/bg/login-page.jpg')}
				resizeMode='cover'
				style={styles.background}
			>
				<View style={styles.top}>
					<Text style={styles.page}>Login</Text>
				</View>

				<ScrollView
					showsVerticalScrollIndicator={false}
					width={'100%'}
					alignItems='center'
					// marginVertical={60}
					justifyContent='center'
				>
					<View style={styles.formContainer}>
						<View style={styles.form}>
							<CusInput
								placeholder={'E.g. JuanManila'}
								name='username'
								control={control}
								rules={{ required: 'Username is required.' }}
								label={'Username'}
							/>
							<CusInput
								placeholder={'••••••••••'}
								name='password'
								control={control}
								rules={{ required: 'Password is required.' }}
								label={'Password'}
								type={'password'}
								secureTextEntry
							/>
							<View style={{ marginVertical: 45 }}>
								<CusButton
									onPress={handleSubmit(onLoginPress)}
									text={'LOGIN'}
									type='LOGIN'
								/>

								{/* <CusButton
									// onPress={onStartPress}
									text={'Forgot your password?'}
									type='LINKS'
								/> */}
								<View style={{ marginVertical: 5 }}>
									{/* <CusButton
									// onPress={onStartPress}
									text={'LOGIN WITH NUMBER'}
									type='NUMBER'
								/> */}

									<CusButton
										onPress={onSignPress}
										text={"Don't have an account? Sign Up"}
										type='LINKS'
									/>
								</View>
							</View>
							<View style={{ marginVertical: 5 }}>
								{/* <CusButton
									// onPress={onStartPress}
									text={'LOGIN WITH NUMBER'}
									type='NUMBER'
								/> */}

								{/* <CusButton
									onPress={onSignPress}
									text={"Don't have an account? Sign Up"}
									type='LINKS'
								/> */}
							</View>
						</View>
					</View>
				</ScrollView>
			</ImageBackground>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
	},
	background: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'column',
	},
	top: {
		backgroundColor: Color.br3,
		width: '100%',
		height: '12%',
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		padding: 15,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		flex: 0,
	},
	page: {
		fontSize: 18,
		marginLeft: 10,
		color: Color.bl1,
		fontFamily: 'Poppins-Bold',
	},
	formContainer: {
		// alignItems: 'center',
		// width: '100%',
	},
	form: {
		backgroundColor: '#FFFFFF',
		opacity: 0.85,
		width: '100%',
		borderRadius: 20,
		padding: 35,
	},
});
