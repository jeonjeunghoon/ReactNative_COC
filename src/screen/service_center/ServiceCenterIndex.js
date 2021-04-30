/////이부분은 고객센터화면에서 넘어갈 화면들의 경로를 입력하는곳이다.

//여기서 우리가 메인화면에서 넘길 화면은
// - 개인정보 취급방침(팝업으로 대체)
// - 1:1문의
// - 내 문의글 리스트
// - 문의글 자세히 보기 화면
// - 이용약관(팝업으로 대체)
// - 로그아웃(팝업 띄우고 로그아웃을 로그인으로)
// - 로그인 화면


//Stack Navigation의 메인 페이지를 설정하기 위해 마이페이지 메인화면을 가져옴
import * as React from 'react';
import {Image,TouchableOpacity, Alert } from 'react-native';
//Stack Navigator 사용을 위해서 import
import { createStackNavigator } from '@react-navigation/stack';

//고객센터 메인 페이지
import ServiceCenterMain from './ServiceCenterMain'
//내 문의글 리스트
import QuestionList from './QuestionList'
//내 문의 글 보기
import QuestionDtl from './QuestionDtl'
//로그인 화면
import Login from '../common/Login/Login'


//Stack Navigator를 사용하기 위해서  createStackNavigator해서 만듬
const Stack = createStackNavigator();

function MyPageindex() {
	return (

			<Stack.Navigator initialRouteName="mypageMain" screenOptions={{headerTitleAlign: 'center'}}>
				{/* 메인화면 */}
				<Stack.Screen name="ServiceCenterMain" component={ServiceCenterMain}
					options={{
						title : '고객센터'
					}}
				/>
                
				{/* 내  문의 글 리스트*/}
				<Stack.Screen name="QuestionList" component={QuestionList}
					options={{
						title : ''
					}}
				/>	

				{/* 내 문의글 보기 */}
				<Stack.Screen name="QuestionDtl" component={QuestionDtl}
					options={{
						title : ''
					}}
				/>

				{/* 로그인 화면 */}
				<Stack.Screen name="Login" component={Login}
					options={{
						title : '로그인'
					}}
				/>                

			</Stack.Navigator>
	);
}

export default MyPageindex;