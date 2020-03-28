import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation , useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'
import Styles from "./styles";
import Logoimg from '../../assets/logo.png';
export default function Details(){
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.e;
  const menssage = `Olá ONG ${incident.name}, estou entrando em contato pois gostaria  de ajuda no caoso ${incident.title} com o valor de ${ Intl.NumberFormat('pt-BR',{style: 'currency',currency:'BRL'}).format(incident.value)}`
  function navigateBack(){
navigation.goBack();
  }
  function sendEmail(){
    MailComposer.composeAsync({
      subject:'Heroi do caso: title do caso',
      recipients:[incident.email],
      body: menssage
    })
  }
  function sendWhatsapp(){
Linking.openURL(`whatsapp://send?text=${menssage}&phone=${incident.whats}`);

  }
  return(
    <View style={Styles.container}>

       <View style={Styles.header}  >
    <Image source={Logoimg} />
    
    <TouchableOpacity style={Styles.detailsButton} onPress={navigateBack}> 

<Feather name="arrow-left" size={20} color="#E02041" />
</TouchableOpacity>
    </View>


 <View style={Styles.incident}>

<Text style={[Styles.incidentPropety,{marginTop:0}]}>ONG:</Text>
<Text style={Styles.incidentValue}>{incident.name}</Text>

<Text style={Styles.incidentPropety}>CASO:</Text>
<Text style={Styles.incidentValue}>{incident.body}</Text>

<Text style={Styles.incidentPropety}>VALOR:</Text>
<Text style={Styles.incidentValue}>{ Intl.NumberFormat('pt-BR',{style: 'currency',currency:'BRL'}).format(incident.value)}</Text>

</View>

<View style={Styles.contactBox}>
<Text style={Styles.heroTitle}>Salve o dia!</Text>
<Text style={Styles.heroTitle}>Seja o heroi desse caso!</Text>
<Text style={Styles.heroDescription}>Entre em contato:</Text>
</View>

<View style={Styles.actions}>
 <TouchableOpacity style={Styles.action} onPress={sendWhatsapp}> 
<Text style={Styles.actionText}>WhatsApp</Text>

</TouchableOpacity>
<TouchableOpacity style={Styles.action} onPress={sendEmail}> 
<Text style={Styles.actionText}>E-mail</Text>

</TouchableOpacity>
</View>

<View style={Styles.footer}>
<TouchableOpacity style={Styles.detailsButton} onPress={navigateBack}> 

<Feather name="arrow-left" size={40} color="#E02041" />

</TouchableOpacity>
<Text style={Styles.footerText}>Voltar</Text>
</View>
    </View>
  )
}