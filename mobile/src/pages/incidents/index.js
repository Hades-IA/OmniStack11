import React,{ useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet , TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Logoimg from '../../assets/logo.png';
import api from '../../services/api'
import Styles from "./styles";

export default function Incidents(){
  const [incidents,setIncidents] = useState([]);
  const [total,setTotal] = useState(0);
  const [page,setPage] = useState(1);
  const [ loading, setLoading] = useState(false)
  const navegation = useNavigation();
  function navegationToDetail(e){
    navegation.navigate('details',{e});
  }
  async function loadIncidents(){
    if(loading){
      return;
    }
    if(total > 0 && incidents.length  === total){
      return;
    }
    setLoading(true);
const res = await api.get('incident/index',{
  params:{page}
});
setIncidents([...incidents, ...res.data]);
setTotal(res.headers['X-Total-Count']);
setPage(page + 1);
setLoading(false);

  }
  useEffect(()=>{
loadIncidents();
  },[]);
  return(
    <View style={Styles.container}  >
    <View style={Styles.header}  >
    <Image source={Logoimg} />
    <Text style={Styles.headerText}>
    Total de  <Text style={Styles.headerTextBold}> {total} casos</Text>.
    </Text>
    </View>

    <Text style={Styles.title} > Bem-vindo!</Text>
    <Text style={Styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>


<FlatList
style={Styles.incidentList}
 data={incidents}
 keyExtractor={incidentes => String(incidentes.id)}
 showsVerticalScrollIndicator={false}
 onEndReached={loadIncidents}
 onEndReachedThreshold={0.2}
  renderItem={({item}) =>(
  <View style={Styles.incident}>

<Text style={Styles.incidentPropety}>ONG:</Text>
<Text style={Styles.incidentValue}> {item.name}</Text>

<Text style={Styles.incidentPropety}>CASO:</Text>
<Text style={Styles.incidentValue}>{item.title}</Text>

<Text style={Styles.incidentPropety}>VALOR:</Text>
<Text style={Styles.incidentValue}>{ Intl.NumberFormat('pt-BR',{style: 'currency',currency:'BRL'}).format(item.value)}</Text>

<TouchableOpacity style={Styles.detailsButton} onPress={()=> navegationToDetail(e)}> 
<Text style={Styles.detailsButtonText}>
Veja mais detalhes
</Text>
<Feather name="arrow-right" size={20} color="#E02041" />
</TouchableOpacity>
</View>


)}
/>


    </View>
  )
}