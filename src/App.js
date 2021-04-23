import * as React from 'react';
import { Text } from 'react-native';

//Navigator Container 사용을 위해서 만듬 아곤 Navigator를 담는 공간임
import { NavigationContainer } from '@react-navigation/native';


// SplashScreen -> 어플 로딩부분이얌
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

//main_page navigation에서 screen list 가져옴
import MainPageIndex from './screen/main_page/main_page_index'

//바텀 탭 만들기 위해서 import 함
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screen/mypage/like에 있는 like를 가져옴
import Jim from './screen/mypage/like'
// screen/mypage/mypage_main경로에 있는 mypage_main를 가져옴
import MyPage from './screen/mypage/mypage_main'

//Tab Navigator 사용하기 위해서 만듬 변수
const Tab = createBottomTabNavigator();

function App() {
	//이거는 앱 로딩창 부분
	useEffect(() => {
		SplashScreen.hide();
	  }, [500]);

	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName="Home" screenOptions={{title :'COC', headerTitleAlign: 'center' }}>
				{/* main_page_index에서 등록한 Stack.Screen을 가져옴 */}
				<Tab.Screen name="Home" component={MainPageIndex}
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
		</NavigationContainer>
	);
}

export default App;