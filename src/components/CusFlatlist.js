import { useState } from 'react';
import {
	ScrollView,
	Text,
	View,
	Image,
	FlatList,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';
import Color from '../themes/Colors';
import CusButton from './CusButton';
import { useNavigation } from '@react-navigation/native';
import { regionList } from '../data/regionList';
import { img } from '../data/img';

const CusFlatlist = () => {
	const navigation = useNavigation();

	const [reg, setReg] = useState('ALL');
	const [regList, setRegList] = useState(img);

	const setRegFilter = (reg) => {
		if (reg !== 'ALL') {
			setRegList([...img.filter((e) => e.regName === reg)]);
		} else {
			setRegList(img);
		}
		setReg(reg);
	};

	const renderItem = ({ item, index }) => {
		return (
			<View
				key={index}
				style={styles.productContainer}
			>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Info', {
							name: item.name,
							info: item.info,
							origin: item.origin,
							price: item.price,
							img: item.src,
						});
					}}
					style={styles.productContainer}
				>
					<Image
						source={item.src}
						style={styles.images}
					/>
				</TouchableOpacity>
			</View>
		);
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.listTab}>
				<ScrollView
					showsHorizontalScrollIndicator={false}
					horizontal
				>
					<View style={styles.btnTab}>
						{regionList.map((e) => (
							<TouchableOpacity
								onPress={() => setRegFilter(e.regName)}
								style={[styles.container_REGIONS]}
							>
								<Text
									style={[
										styles.text_REGIONS,
										reg === e.regName &&
											styles.textTabActive,
									]}
								>
									{e.regName}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>

				<FlatList
					data={regList}
					renderItem={renderItem}
					keyExtractor={(e, i) => i.toString()}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 5,
		marginVertical: 5,
		marginHorizontal: 5,
	},
	title: {
		fontSize: 32,
	},
	listTab: {
		flex: 1,
		padding: 2,
		alignItems: 'center',
		marginVertical: 15,
	},
	btnTab: {
		flexDirection: 'row',
	},
	images: {
		objectFit: 'cover',
		height: 220,
		width: '100%',
		alignSelf: 'center',
		borderRadius: 10,
	},
	productContainer: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		padding: 8,
	},
	textTabActive: {
		color: Color.br5,
		fontFamily: 'Poppins-SemiBold',
	},
	container_REGIONS: {
		borderRadius: 0,
		padding: 0,
		width: 100,
		marginRight: 2,
		marginLeft: 2,
	},
	text_REGIONS: {
		color: Color.bl1,
		fontSize: 14,
		fontFamily: 'Poppins-SemiBold',
	},
});

export default CusFlatlist;
