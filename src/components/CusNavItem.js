import React from 'react';
import { View, Text, Image } from 'react-native';
import Color from '../themes/Colors';
import CusButton from './CusButton';
import { useState } from 'react';
// import img from '../../assets/products/reg-I';
import CusProductLayout from './CusProductLayout';

const CusNavItem = ({ region, img }) => {
	// const onNCRPress = () => {
	// 	const img = source('../../assets/products/reg-I.png');
	// 	return <CusProductLayout img={img} />;
	// };

	const NCRComponent = () => {
		return (
			<View>
				<Image
					source={require('../../assets/products/reg-I.png')}
					style={{width:height: '100%' }}
				/>
			</View>
		);
	};
	const [showNCR, setShowNCR] = useState(false);

	return (
		<View>
			<View style={{ height: 130, width: 100, marginLeft: 2 }}>
				<View
					style={{
						flex: 1,
						paddingTop: 10,
					}}
				>
					<CusButton
						type='LINKS'
						text={region}
						onPress={() => setShowNCR(!showNCR)}
					/>
					{showNCR && <NCRComponent />}
				</View>
			</View>
		</View>
	);
};

export default CusNavItem;
