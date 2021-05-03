import * as React from 'react';
import { Button, View, Text } from 'react-native';

function CafeList({ route,navigation }) {

	const {sample} = route.params;//데이터넘겨받기위해

	return (
		<View>
			<Text>카페 리스트가 보여질 화면이얌</Text>
			<Text>넘겨받은 데이터 샘플 : {JSON.stringify(sample)}</Text>
			<Button
				title="카페 정보 보러가기"
				onPress={() => {navigation.navigate('CafeInfo')}}
			/>
		</View>
	);
}
export default CafeList;