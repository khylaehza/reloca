import { View, Text, ScrollView } from 'react-native';
import CusButton from './CusButton';

const CusRegion = () => {
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

	return (
		<>
			<View style={{ height: 60, marginTop: 10 }}>
				<ScrollView horizontal={true}>
					<CusButton
						type='REGIONS'
						text={'NCR'}
						onPress={() => setShowNCR(showNCR)}
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
		</>
	);
};

export default CusRegion;
