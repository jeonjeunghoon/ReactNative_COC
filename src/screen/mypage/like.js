import * as React from 'react';
import {  View, Text, StyleSheet } from 'react-native';



function Jim(){
	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={styles.tabTitle}>찜하기 화면</Text>
	  	</View>
	);
}

const styles = StyleSheet.create({
	tabTitle : {
		fontSize : 20
	}
});

export default Jim;