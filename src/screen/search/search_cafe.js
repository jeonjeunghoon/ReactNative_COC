import * as React from 'react';
import {  View, Text, StyleSheet } from 'react-native';

//마이페이지 부분
function SearchCafe(){
	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={styles.tabTitle}>검색창 화면</Text>
	  	</View>
	);
}

const styles = StyleSheet.create({
	tabTitle : {
		fontSize : 20
	}
});

export default SearchCafe;