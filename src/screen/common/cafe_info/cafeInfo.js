import * as React from 'react';
import { Button, View, Text } from 'react-native';

function CafeInfo({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>카페 정보글 화면이얌</Text>
			<Button
				title="메뉴판"
				onPress={() => navigation.navigate('CafeMenu')}
			/>

			<Button
				title="리뷰쓰러가기"
				onPress={() => navigation.navigate('CafeReviewWrite')}
			/>

			<Button
				title="리뷰보러가기"
				onPress={() => navigation.navigate('CafeReviewList')}
			/>
		</View>
	);
}
export default CafeInfo;