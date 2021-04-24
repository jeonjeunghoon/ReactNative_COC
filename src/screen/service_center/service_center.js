import * as React from 'react';
import {  View, Text, StyleSheet, Button } from 'react-native';


function ServiceCenter(){
	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={styles.tabTitle}>고객센터 화면</Text>
	  	</View>
	);
}

const styles = StyleSheet.create({
	tabTitle : {
		fontSize : 20
	}
});

export default ServiceCenter;