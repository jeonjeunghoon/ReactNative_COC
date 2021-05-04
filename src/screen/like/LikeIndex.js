/////이부분은 찜하기 화면에서 넘어갈 화면들의 경로를 입력하는곳이다.

//여기서 우리가 메인화면에서 넘길 화면은 
// - 카페정보
// - 메뉴판
// - 리뷰 작성화면
// - 리뷰 리스트

//메인 화면 지정을 위해 찜하기 화면 가저옴
import * as React from 'react';
import {Image,TouchableOpacity, Alert } from 'react-native';
//Stack Navigator 사용을 위해서 import
import { createStackNavigator } from '@react-navigation/stack';

//찜하기 메인 화면
import LikeMain from './LikeMain'
//카페 검색 - 카페 리스트
import CafeList from '../common/cafe_list/cafe_list'
//찜한 카페 정보글 부분
import CafeInfo from '../common/cafe_info/cafeInfo'
//카페정보 - 메뉴판
import CafeMenu from '../common/cafe_info/cafe_menu'
//카페정보 - 리뷰 쓰기
import CafeReviewWrite from '../common/cafe_info/cafe_review_write'
//카페정보 - 리뷰 쓰기
import CafeReviewList from '../common/cafe_info/cafe_review_list'

//Stack Navigator를 사용하기 위해서  createStackNavigator해서 만듬
const Stack = createStackNavigator();

function LikeIndex() {
	return (

			<Stack.Navigator initialRouteName="LikeMain" screenOptions={{headerTitleAlign: 'center'}}>
				{/* 메인화면 */}
				<Stack.Screen name="LikeMain" component={LikeMain}
					options={{
						title : '찜하기'
					}}
					initialParams={{
						sample: "give sample"
					}}
				/>

				{/* 카페 검색 - 카페 list */}
				<Stack.Screen name='CafeList' component={CafeList}
					options={{
						title : ''
					}}
				/>

				{/* 찜한 카페 정보*/}
				<Stack.Screen name="CafeInfo" component={CafeInfo}
					options={{
						title : '카페정보',
						headerRight : shareIcon
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

export default LikeIndex;