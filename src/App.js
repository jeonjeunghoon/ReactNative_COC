import React,{useState} from 'react';
import {Image,TouchableOpacity, Alert, StyleSheet } from 'react-native';

//Navigator Container 사용을 위해서 만듬 아곤 Navigator를 담는 공간임
import { NavigationContainer } from '@react-navigation/native';
//Stack Navigator 사용을 위해서 import
import { createStackNavigator } from '@react-navigation/stack';
//바텀 탭 만든거 import 함
import BottomTab from './screen/bottom_tab/bottom_tab';


//핫한 카페 정보글 부분
import CafeInfo from './screen/cafe_info/cafeInfo'
//카페 검색창 부분
import SearchCafe from './screen/search/search_cafe'
//테마를 통한 카페 검색창 부분
import CafeTheme from './screen/search/search_cafe_theme'

// SplashScreen -> 어플 로딩
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

//Stack Navigator를 사용하기 위해서  createStackNavigator해서 만듬
const Stack = createStackNavigator();

function App() {
	useEffect(() => {
		SplashScreen.hide();
	  }, [500]);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={{title :'COC', headerTitleAlign: 'center'}}>

				{/* Bottom 탭 함수 호출해서 탭화면 가져옴 그리고 이게 제일 위로 올라와야지 바텀탭 사용가능*/}
				<Stack.Screen name="BottomTab" component={BottomTab}/>
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