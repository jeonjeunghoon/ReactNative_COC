import * as React from 'react';
import {  View, Text, Button } from 'react-native';

function CafeReviewWrite({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>카페 리뷰 리스트 보여주는 부분</Text>
			<Button
				title="리뷰쓰러가기"
				onPress={() => navigation.navigate('Home',{screen : 'CafeReviewWrite'})}
			/>
		</View>
	);
}
export default CafeReviewWrite;