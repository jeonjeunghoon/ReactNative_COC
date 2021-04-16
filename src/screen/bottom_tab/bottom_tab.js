import * as React from 'react';
import { Text } from 'react-native';

//바텀 탭 만들기 위해서 import 함
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screen/mypage/like에 있는 like를 가져옴
import Jim from '../mypage/like'
// screen/mypage/mypage_main경로에 있는 mypage_main를 가져옴
import MyPage from '../mypage/mypage_main'
//screen/main_page/main_page에 있는 mainPage가져옴
import Home from '../main_page/main_page'

//Tab Navigator 사용하기 위해서 만듬 변수
const Tab = createBottomTabNavigator();

//바텀 탭 부분
function BottomTab(){
	return(
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Home}
				options={{
					tabBarLabel: ({ focused }) => (
						<Text style={{ fontSize: 20, color: focused ? '#0B614B' : '#000000' , marginBottom:10 }}>
						  Home
						</Text>
					  )
				}}
			/>
			<Tab.Screen name="찜" component={Jim}
				options={{
					tabBarLabel: ({ focused }) => (
						<Text style={{ fontSize: 20, color: focused ? '#0B614B' : '#000000' , marginBottom:10 }}>
						  찜
						</Text>
					  )
				}}
			/>
			<Tab.Screen name="마이페이지" component={MyPage}
				options={{
					tabBarLabel: ({ focused }) => (
						<Text style={{ fontSize: 20, color: focused ? '#0B614B' : '#000000' , marginBottom:10 }}>
						  마이페이지
						</Text>
					  )
				}}/>
	  	</Tab.Navigator>
	);
}

export default BottomTab;