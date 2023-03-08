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

const SignUpScreen = () => {
	const navigation = useNavigation();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onLoginPress = () => {
		navigation.navigate('Login');
	};

	const onSignPress = (data) => {
		const username = data['username'];
		navigation.navigate('Products', { uname: username });
	};
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/bg/login-page.jpg')}
				resizeMode='cover'
				style={styles.background}
			>
				<View style={styles.top}>
					<Text style={styles.page}>Sign up</Text>
				</View>

				<ScrollView
					showsVerticalScrollIndicator={false}
					width={'100%'}
					alignItems='center'
					marginVertical={20}
				>
					<View style={styles.formContainer}>
						<View style={styles.form}>
							<CusInput
								placeholder={'E.g. Ibarra'}
								name='username'
								control={control}
								rules={{
									required: 'New username is required.',
								}}
								label={'Create username'}
							/>
							<CusInput
								placeholder={'E.g. Ibarra'}
								name='email'
								control={control}
								rules={{ required: 'Email is required.' }}
								label={'Enter email'}
							/>
							<CusInput
								placeholder={'••••••••••'}
								name='password'
								control={control}
								rules={{ required: 'Password is required.' }}
								label={'Create password'}
								type={'password'}
								secureTextEntry
							/>
							<View style={{ marginVertical: 45 }}>
								<CusButton
									onPress={handleSubmit(onSignPress)}
									text={'SIGN UP'}
									type='LOGIN'
								/>
								<CusButton
									onPress={onLoginPress}
									text={'Already have an account? Login'}
									type='LINKS'
								/>
							</View>
						</View>
					</View>
				</ScrollView>
			</ImageBackground>
		</View>
	);
};

export default SignUpScreen;

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
