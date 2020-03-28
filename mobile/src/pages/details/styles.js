import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header:{
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: 'center'
  },
  incident: {
       marginTop: 28,
        padding: 24,
        borderRadius: 8,
        marginBottton: 16,
        backgroundColor: '#fff'
    },
    incidentPropety: {
       marginTop: 12,
        fontSize: 14,
        color: '#41414d',
        fontWeght: 'bold'
    },
    incidentValue: {
        fontSize: 15,
        marginTop: 8,
        marginBottton: 24,
        color: '#737380'
    },
    contactBox:{
       marginTop: 28,
        padding: 24,
        borderRadius: 8,
        marginBottton: 16,
        backgroundColor: '#fff'
    },
    heroTitle:{
      fontWeight:'bold',
      fontSize:20,
      color:'#13131a',
      lineHeight:30
    },
    heroDescription:{
      fontSize:15,
      color:'#737380',
      marginTop:16
    },
    actions:{
      marginTop:16,
      flexDirection:'row',
      justifyContent:'space-between'

    },
    action:{
      backgroundColor:'#e02041',
      borderRadius:8,
      width:'48%',
      justifyContent:'center',
      alignItems:'center'
    },

    actionText:{
      color:'#fff',
      fontSize: 16,
      fontWeight: 'bold'
    },
    footer:{
      flexDirection: "row",
       justifyContent:'center',
      alignItems:'center',
     marginTop:30
    },
footerText:{
    fontSize:25,
      color:'#737380'
}

});