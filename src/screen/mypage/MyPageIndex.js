/////이부분은 마이페이지화면에서 넘어갈 화면들의 경로를 입력하는곳이다.

//여기서 우리가 메인화면에서 넘길 화면은
// - 카페리스트
// - 카페정보
// - 메뉴판
// - 리뷰 작성화면
// - 리뷰 리스트
// - 업적 화면
// - 프로필 수정화면
// - 내가 리뷰한 리뷰화면


//Stack Navigation의 메인 페이지를 설정하기 위해 마이페이지 메인화면을 가져옴
import * as React from 'react';
import {Image,TouchableOpacity, Alert } from 'react-native';
//Stack Navigator 사용을 위해서 import
import { createStackNavigator } from '@react-navigation/stack';

//마이페이지 메인 화면
import MyPageMain from './MyPageMain'
//카페 검색 - 카페 리스트
import CafeList from '../common/cafe_list/cafe_list'
//핫한 카페 정보글 부분
import CafeInfo from '../common/cafe_info/cafeInfo'
//카페정보 - 메뉴판
import CafeMenu from '../common/cafe_info/cafe_menu'
//카페정보 - 리뷰 쓰기
import CafeReviewWrite from '../common/cafe_info/cafe_review_write'
//카페정보 - 리뷰 쓰기
import CafeReviewList from '../common/cafe_info/cafe_review_list'
//업적 리스트 화면
import Achievment from './Achievement'
//프로필 수정화면
import UpdateProfile from './UpdateProfile'
//내가 리뷰한 리뷰글 목록 화면
import MyReviewList from './MyReviewList'

//Stack Navigator를 사용하기 위해서  createStackNavigator해서 만듬
const Stack = createStackNavigator();

function MyPageindex() {
	return (

			<Stack.Navigator initialRouteName="mypageMain" screenOptions={{headerTitleAlign: 'center'}}>
				{/* 메인화면 */}
				<Stack.Screen name="mypageMain" component={MyPageMain}
					options={{
						title : '마이페이지'
					}}
				/>

				{/* 카페 검색 - 카페 list */}
				<Stack.Screen name='CafeList' component={CafeList}
					options={{
						title : ''
					}}
				/>		

				{/* 찜했거나 평가한 카페 정보*/}
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

				{/* 업적 리스트 화면 */}
				<Stack.Screen name='Achievment' component={Achievment}
					options={{
						title : ''
					}}
				/>

				{/* 프로필 수정 화면 */}
				<Stack.Screen name='UpdateProfile' component={UpdateProfile}
					options={{
						title : ''
					}}
				/>	
				
				{/* 내 리뷰 목록 화면 */}
				<Stack.Screen name='MyReviewList' component={MyReviewList}
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

export default MyPageindex;