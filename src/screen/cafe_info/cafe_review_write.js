import * as React from 'react';
import {  View, Text, Button } from 'react-native';

function CafeReviewWrite({ navigation :{goBack}}) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>카페 리뷰 쓰기</Text>
			<Button
				title="리뷰 다씀"
				onPress={() => goBack()}
			/>
		</View>
	);
}
export default CafeReviewWrite;