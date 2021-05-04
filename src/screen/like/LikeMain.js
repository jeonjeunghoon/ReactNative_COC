import * as React from 'react';
import {  View, Text, StyleSheet, Button } from 'react-native';
//카페 리스트(코드 재사용을 위한 import)
import CafeList from '../common/cafe_list/cafe_list'


function LikeMain({route,navigation}){

	
	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={styles.tabTitle}>찜하기 화면</Text>
			<View>
				<CafeList navigation={navigation} route={route}/>
			</View>
	  	</View>
	);
}

const styles = StyleSheet.create({
	tabTitle : {
		fontSize : 20
	}
});

export default LikeMain;