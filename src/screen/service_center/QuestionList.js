import * as React from 'react';
import { View, Text, Button } from 'react-native';

function QuestionList({ navigation }) {
	return (
		<View>
			<Text>내 문의 리스트 화면이얌</Text>
            <Button
                title='문의글 자세히 보기'
                onPress={ () => {
                    navigation.navigate('QuestionDtl');
                }}
            />
		</View>
	);
}
export default QuestionList;