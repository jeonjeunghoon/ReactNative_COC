import * as React from 'react';
import { Button, View} from 'react-native';

function Home({navigation}){
	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			{/*이거는 Stack.screen에서 등록한 name인 CafeInfo로 navigate함 */}
			{/*주변지역 핫한 카페로 이동 */}
			<Button
				title="주변지역 핫한 카페로 가기"
				onPress={() => { navigation.navigate('CafeInfo')}}
			/>
			{/*카페 검색 창으로 이동 */}
			<Button
				title="카페 검색"
				onPress={() => { navigation.navigate('SearchCafe',{
					sample: "give sample"
				})}}
			/>
			{/* 카페 테마로 검색하는 창으로 이동 */}
			<Button
				title="카페 테마로 검색"
				onPress={() => { navigation.navigate('CafeTheme')}}
			/>
	  	</View>
	);
}

export default Home;