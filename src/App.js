import * as React from 'react';
// import {useEffect} from 'react';
import { Button, View, Text, Image,TouchableOpacity, Alert, StyleSheet } from 'react-native';

//Navigator Container 사용을 위해서 만듬 아곤 Navigator를 담는 공간임
import { NavigationContainer } from '@react-navigation/native';

//Stack Navigator 사용을 위해서 import
import { createStackNavigator } from '@react-navigation/stack';

//바텀 탭 만들기 위해서 import 함
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


///screen/cafe_info/cafeInfo 경로에 있는 cafeInfo를 가져옴
import CafeInfo from './screen/cafe_info/cafeInfo'

// screen/mypage/like에 있는 like를 가져옴
import Jim from './screen/mypage/like'

// screen/mypage/mypage_main경로에 있는 mypage_main를 가져옴
import MyPage from './screen/mypage/mypage_main'

// import SplashScreen from 'react-native-splash-screen';

const Tab = createBottomTabNavigator();

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
//메인화면 부분
function Home({navigation}){
	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			{/*이거는 Stack.screen에서 등록한 name인 CafeInfo로 navigate함 */}
			<Button
				title="욱재 화면"
				onPress={() => navigation.navigate('CafeInfo')}
			/>
			<Button
				title="카페 검색"
				onPress={() => navigation.navigate('CafeInfo')}
			/>
	  	</View>
	);
}

//Stack Navigatoer를 사용하기 위해서  createStackNavigator해서 만듬
const Stack = createStackNavigator();

function App() {
	// useEffect(() => {
	// 	SplashScreen.hide();
	//   }, []);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center'}}>

				{/* 위에서 만든 BottomTab 사용 */}
				<Stack.Screen name="BottomTab" component={BottomTab}
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
			</Stack.Navigator>
		</NavigationContainer>
	);
}
//아이콘을 나타내는 함수
function shareIcon() {
	//아래의 이미지를 반환한다.
	return (
		//TouchalbrOpacity를 사용하면 클릭효과인 onpress를 사용할수 있음
		<TouchableOpacity onPress ={() => Alert.alert('공유버튼 클릭됨')}>
			<Image
				style={{ width: 23, height: 23, marginRight: 15 }}
				source={require('./assets/images/screens/cafeInfo/share.png')}/>
		</TouchableOpacity>
	);
  }

const styles = StyleSheet.create({
	tabTitle : {
		fontSize : 20
	}
});
export default App;