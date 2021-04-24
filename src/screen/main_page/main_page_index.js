/////이부분은 메인화면에서 넘어갈 화면들의 경로를 입력하는곳이다.

//여기서 우리가 메인화면에서 넘길 화면은 
//1. 주변 핫한 카페 정보글
//2. 카페 검색 창으로 넘길 부분
//3. 테마를 통한 카페 검색 창 부분


//그리고 메인 화면의 화면은 Stack.Screen에서 가장 처음으로 올려야지 
//해당 Stack.Navigation에서 메인화면으로 지정이 된다. 그래서 main화면도 가져왔다.
import * as React from 'react';
import {Image,TouchableOpacity, Alert } from 'react-native';
//Stack Navigator 사용을 위해서 import
import { createStackNavigator } from '@react-navigation/stack';

//main home 화면
import MainHome from '../main_page/main_page'
//핫한 카페 정보글 부분
import CafeInfo from '../cafe_info/cafeInfo'
//카페 검색창 부분
import SearchCafe from '../search/search_cafe'
//테마를 통한 카페 검색창 부분
import CafeTheme from '../search/search_cafe_theme'
//카페 검색 - 카페 리스트
import CafeList from '../cafe_list/cafe_list'
//카페정보 - 메뉴판
import CafeMenu from '../cafe_info/cafe_menu'
//카페정보 - 리뷰 쓰기
import CafeReviewWrite from '../cafe_info/cafe_review_write'
//카페정보 - 리뷰 쓰기
import CafeReviewList from '../cafe_info/cafe_review_list'

//Stack Navigator를 사용하기 위해서  createStackNavigator해서 만듬
const Stack = createStackNavigator();

function MainNavigator() {
	return (
			<Stack.Navigator initialRouteName="Home" screenOptions={{title :'COC', headerTitleAlign: 'center'}}>
				{/* 메인화면 */}
				<Stack.Screen name="MainHome" component={MainHome}
					options={{
						title : 'COC'
					}}
				/>
				{/* 핫한 카페 정보*/}
				<Stack.Screen name="CafeInfo" component={CafeInfo}
					options={{
						title : '카페정보',
						headerRight : shareIcon
					}}
				/>
				{/*카페 검색창 부분*/}
				<Stack.Screen name="SearchCafe" component={SearchCafe}
					options={{
						title : ''
					}}
				/>
				{/* 카페 테마로 검색 */}
				<Stack.Screen name='CafeTheme' component={CafeTheme}
					options={{
						title : ''
					}}
				/>

				{/* 카페 검색 - 카페 list */}
				<Stack.Screen name='CafeList' component={CafeList}
					options={{
						title : ''
					}}
				/>

				{/* 카페 정보 - 메뉴판 */}
				<Stack.Screen name="CafeMenu" component={CafeMenu}
					options={{
						title : ''
					}}
				/>

				{/* 카페 정보 - 리뷰 쓰기*/}
				<Stack.Screen name='CafeReviewWrite' component={CafeReviewWrite}
					options={{
						title : ''
					}}
				/>

				{/* 카페 정보 - 리뷰 리스트 보기*/}
				<Stack.Screen name='CafeReviewList' component={CafeReviewList}
					options={{
						title : ''
					}}
				/>
			</Stack.Navigator>
	);
}

function shareIcon() {
	//아래의 이미지를 반환한다.
	return (
		//TouchalbrOpacity를 사용하면 클릭효과인 onpress를 사용할수 있음
		<TouchableOpacity onPress ={() => Alert.alert('공유버튼 클릭됨')}>
			<Image
				style={{ width: 23, height: 23, marginRight: 15 }}
				source={require('../../assets/images/screens/cafeInfo/share.png')}/>
		</TouchableOpacity>
	);
  }

export default MainNavigator;