import * as React from 'react';
import {  View, Text, StyleSheet,Button } from 'react-native';
//카페 리스트(코드 재사용을 위한 import)
import CafeList from '../common/cafe_list/cafe_list'

//마이페이지 부분
function MyPageMain({navigation}){
	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text style={styles.tabTitle}>마이페이지 화면</Text>
			<Button
				title='업적 보러가기'
				onPress={ () => {
					navigation.navigate('Achievment');
				}}
			/>

			<Button
				title='내 리뷰 목록 보러가기'
				onPress={ () => {
					navigation.navigate('MyReviewList');
				}}
			/>

			<Button
				title='프로필 수정하기'
				onPress={ () => {
					navigation.navigate('UpdateProfile');
				}}
			/>
			
			<Text>찜한 카페 목록</Text>			
			<View>
				<CafeList navigation={navigation}/>
			</View>
	  	</View>
	);
}

const styles = StyleSheet.create({
	tabTitle : {
		fontSize : 20
	}
});

export default MyPageMain;