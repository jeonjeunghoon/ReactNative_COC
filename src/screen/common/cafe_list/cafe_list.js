import * as React from 'react';
import { Button, View, Text } from 'react-native';
//카페정보 클래스 만든걸 import 해옴
import CafeInfo from '../../../Cafe/model/CafeInfo'

function CafeList({ route,navigation }) {

	const {sample} = route.params;//데이터넘겨받기위해

	console.log('카페리스트 들어왔당');

	//카페정보 클래스로 객체를 임시로 만듬
	const wonju = new CafeInfo('사진정원', '원주시', 5,100,100,100,100);

	return (
		<View>
			<Text>카페 리스트가 보여질 화면이얌</Text>
			<Text>넘겨받은 데이터 샘플 : {JSON.stringify(sample)}</Text>
			<Button
				title="카페 정보 보러가기"
				onPress={() => {navigation.navigate('CafeInfo',{
					//위에서 만든 객체를 props로 전달
					CafeInfo : wonju
				})}}
			/>
		</View>
	);
}
export default CafeList;