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


//Stack Navigator를 사용하기 위해서  createStackNavigator해서 만듬
const Stack = createStackNavigator();

function MainNavigator() {
	return (
			<Stack.Navigator initialRouteName="Home" screenOptions={{title :'COC', headerTitleAlign: 'center'}}>
				
				<Stack.Screen name="MainHome" component={MainHome}
					options={{
						title : 'COC'
					}}
				/>
				{/* 위에서 import한 CafeInfo를 사용함 */}
				<Stack.Screen name="CafeInfo" component={CafeInfo}
					options={{
						title : '카페정보',
						headerRight : shareIcon
					}}
				/>
				<Stack.Screen name="SearchCafe" component={SearchCafe}
					options={{
						title : ''
					}}
				/>
				<Stack.Screen name='CafeTheme' component={CafeTheme}
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