import * as React from 'react';
import { Button, View, StyleSheet, Text} from 'react-native';

//아이콘 사용을 위한 import
import Icon from 'react-native-vector-icons/Ionicons';

function Home({navigation}){
	return(
		<View style={styles.container}>
			{/* 카페 검색창 부분 */}
			<View style={styles.searchContainer}>
				{/*카페 검색 창으로 이동 */}
				{/* <Button
					title="카페 검색"
					onPress={() => { navigation.navigate('SearchCafe',{
						sample: "give sample"
					})}}
				/> */}
				<View>
					<Text style={styles.searchIntro}>어떤 카페로 갈까요?</Text>					
				</View>
				<View>
					<Icon name='ios-search' size={20} color='#2E2E2E' style={styles.searchIcon}/>					
				</View>
			</View>

			{/* 핫한 카페 정보 부분*/}
			<View style={styles.hotContainer}>
				{/*주변지역 핫한 카페로 이동 */}
				<Button
					title="주변지역 핫한 카페로 가기"
					onPress={() => { navigation.navigate('CafeInfo')}}
				/>
			</View>
			
			{/* 카페 테마 검색 부분 */}
			<View style={styles.themeContainer}>
				{/* 카페 테마로 검색하는 창으로 이동 */}
				<Button
					title="카페 테마로 검색"
					onPress={() => { navigation.navigate('CafeTheme')}}
				/>				
			</View>

	  	</View>
	);
}
const styles = StyleSheet.create({
	//전체를 감싸는 컨테이너
	container : {
		flex: 1,
		backgroundColor : 'white',
		padding: 20
	},
	// 검색창 컨테이너
	searchContainer : {
		flex : 0.15,
		borderWidth: 1.7,
		marginTop:2,
		borderRadius : 18,
		borderColor: '#2E2E2E',
		flexDirection:'row',
		alignItems:'center'
	},
	searchIntro:{
		borderWidth: 1.7,
		fontSize:16
	},
	searchIcon:{
		borderWidth: 1.7,
	},
	//핫한 카페 감싸는 컨테이너
	hotContainer : {
		flex : 1,
		borderWidth: 3,
		marginTop:2,
	},
	//테마별 감싸는 컨테이너
	themeContainer : {
		flex : 1,
		borderWidth: 3,
		marginTop:2
	}
})
export default Home;