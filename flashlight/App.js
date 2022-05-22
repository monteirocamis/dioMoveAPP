import React, { useState , useEffect } from "react"
import { View , StyleSheet , Image , TouchableOpacity , Alert} from 'react-native'
//import ecolightOFF from './assets/icons/eco-light-off.png'
//import ecolight from './assets/icons/eco-light.png'
import Torch from "react-native-torch"
import RNShake from 'react-native-shake'



const App =()=>{
  //const toggle = true 
  const [toggle , setToggle] = useState(false)

    {/* muda o estado para o inverno , ao clicar */}
 const handleChangeToggle = () =>{setToggle(oldToggle => !oldToggle ) }

useEffect(() =>{
  
  //Alert.alert('montou o componente')

  Torch.switchState(toggle)
  //troca state do flash


}, [toggle])
// atualiza o toggle qd monta

  return  ( <View style={ toggle ? style.containerLight : style.container}>
              <TouchableOpacity
               onPress={ handleChangeToggle} >
            

                <Image
                  //source={ ecolightOFF }
                  source={ 
                    toggle 
                    ? require('./assets/icons/eco-light.png')
                    : require('./assets/icons/eco-light-off.png')
                  }
                  style={ toggle ? style.lightningOn : style.lightningOff  }
                  />
              </TouchableOpacity>
         </View>
  )
 
}

export default App


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightningOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightningOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
    tintColor: 'white' //troca cor
  }
})