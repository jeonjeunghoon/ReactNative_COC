import * as React from 'react';
import { Button, View} from 'react-native';

function Home({navigation}){
	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			{/*이거는 Stack.screen에서 등록한 name인 CafeInfo로 navigate함 */}
			<Button
				title="주변지역 핫한 카페 화면"
				onPress={() => navigation.navigate('CafeInfo')}
			/>
			<Button
				title="카페 검색"
				onPress={() => navigation.navigate('SearchCafe')}
			/>
	  	</View>
	);
}

export default Home;