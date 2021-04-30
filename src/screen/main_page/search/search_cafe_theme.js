import * as React from 'react';
import {  View, Text, StyleSheet,Button } from 'react-native';

//마이페이지 부분
function SearchCafeTheme({navigation}){
	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={styles.tabTitle}>테마를 통한 카페 검색창 화면</Text>
			<Button
				title="카페 검색"
				onPress={() => navigation.navigate('Home',{screen : 'CafeList'})}
			/>
	  	</View>
	);
}

const styles = StyleSheet.create({
	tabTitle : {
		fontSize : 20
	}
});

export default SearchCafeTheme;