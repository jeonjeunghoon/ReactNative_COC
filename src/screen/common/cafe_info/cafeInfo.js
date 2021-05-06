import * as React from 'react';
import { Button, View, Text,Image,TouchableOpacity } from 'react-native';

function CafeInfo({ route,navigation }) {
	//cafeList에서 전달받은 props를 route로 받음
	const param = route.params;

	//route에 있는것중 CafeInfo 객체를 cafeInfo 변수에 집어넣음
	const cafeInfo = param.CafeInfo

	navigation.setOptions({
		title : cafeInfo.name,
		headerRight : shareIcon
	})

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

// 공유 버튼 클릭했을때 호출되는 메소드
function shareIcon() {
	//아래의 이미지를 반환한다.
	return (
		//TouchalbrOpacity를 사용하면 클릭효과인 onpress를 사용할수 있음
		<TouchableOpacity onPress ={() => alert('공유버튼 클릭됨')}>
			<Image
				style={{ width: 23, height: 23, marginRight: 15 }}
				source={require('../../../assets/images/screens/cafeInfo/share.png')}/>
		</TouchableOpacity>
	);
}

export default CafeInfo;