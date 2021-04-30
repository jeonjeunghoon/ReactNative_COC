import * as React from 'react';
import {  View, Text, StyleSheet, Button } from 'react-native';


function ServiceCenter({navigation}){
	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={styles.tabTitle}>고객센터 화면</Text>
			<Button
				title="개인정보 취급 방침"
				onPress={ () => {
					alert('팝업으로 띄울거얌')
				}}
			/>
			<Button
				title='1:1 문의'
				onPress={() => {
					navigation.navigate('QuestionList');
				}}
			/>
			<Button
				title='이용약관'
				onPress={ () => {
					alert('팝업으로 띄울 예정')
				}}
			/>
			<Button
				title='로그인'
				onPress={() => {
					alert('로그인/ 로그아웃 버튼');
					navigation.navigate('Login');
				}}
			/>
	  	</View>
	);
}

const styles = StyleSheet.create({
	tabTitle : {
		fontSize : 20
	}
});

export default ServiceCenter;