import * as React from 'react';
import {  View, Text, StyleSheet, Button } from 'react-native';
import { useLinkTo } from '@react-navigation/native';


function Jim(){

	const linkTo = useLinkTo();


	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={styles.tabTitle}>찜하기 화면</Text>

			<Button
				title="찜한 카페 정보"
				onPress={() => linkTo('/CafeInfo')}
			/>
	  	</View>
	);
}

const styles = StyleSheet.create({
	tabTitle : {
		fontSize : 20
	}
});

export default Jim;