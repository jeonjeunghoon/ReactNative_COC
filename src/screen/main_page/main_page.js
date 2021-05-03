import * as React from 'react';
import { Button, View, StyleSheet, Text} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

//아이콘 사용을 위한 import
import Icon from 'react-native-vector-icons/Ionicons';
//반응형 폰트 크기를 위한 import
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

function Home({navigation}){
	return(
		<View style={styles.container}>

			{/* 카페 검색창 부분 */}
			<View style={styles.searchContainer}>
				<TouchableWithoutFeedback onPress={() => {
					navigation.navigate('SearchCafe',{
						sample: "give sample"
					})
				}}>
					<View style={styles.flexRow}>
						<View>
							<Text style={styles.searchIntro}>어떤 카페로 갈까요?</Text>
						</View>			
						<View>	
							<Icon name='ios-search' size={RFPercentage(3.5)} color='#2E2E2E' style={styles.searchIcon}/>						
						</View>						
					</View>	
				</TouchableWithoutFeedback>				
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
		justifyContent:'center'
	},
	searchIntro:{
		fontSize: RFPercentage(2.5),
		marginLeft:'42%'
	},
	searchIcon:{
		marginRight:'2%'
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
	},
	//공통으로 사용
	flexRow:{
		flexDirection:'row',
		justifyContent:'space-between'
	}
});
export default Home;