import * as React from 'react';
import {  View, Text, StyleSheet,Button } from 'react-native';

//마이페이지 부분
function SearchCafe({route,navigation}){ //데이터 넘겨받기 위해 route를 사용함

	const {sample} = route.params;//데이터넘겨받기위해
	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={styles.tabTitle}>검색창 화면</Text>
			<Text>넘겨받은 데이터 샘플 : {JSON.stringify(sample)}</Text>
			<Button
				title="카페 검색"
				onPress={() => navigation.navigate('CafeList')}
			/>
	  	</View>
	);
}

const styles = StyleSheet.create({
	tabTitle : {
		fontSize : 20
	}
});

export default SearchCafe;