import * as React from 'react';
import { Button, View, Text } from 'react-native';

function CafeList({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>카페 리스트가 보여질 화면이얌</Text>
			<Button
				title="카페 정보 보러가기"
				onPress={() => navigation.navigate('Home',{screen : 'CafeInfo'})}
			/>
		</View>
	);
}
export default CafeList;