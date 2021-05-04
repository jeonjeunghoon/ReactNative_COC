import { Button, View, StyleSheet, Text} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

function CafeRender ({item,index}){
    return(
        <View style={styles.container}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25, 
    },
    title:{
        fontSize:RFPercentage(2.5),
    }
})
export default CafeRender;