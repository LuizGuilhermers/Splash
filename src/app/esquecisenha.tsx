import {View, Image, TextInput, Text, TouchableOpacity} from "react-native";
import {styles} from "../css/style";
import{Link} from "expo-router";

export default function esquecisenha (){
    return(
        //div principal
        <View style={styles.imagemBody}>
            {/*imagem logo sesi senai */}
            <Image style= {styles.imagemss} source={require ('../../assets/sesi-senai.webp')} />

            <View style={styles.form}>
                
                <Text style={styles.text}>Email</Text>

                <TextInput placeholder= "Insira seu email" style={styles.input} />

                <Text style={styles.text}>NOVA SENHA:</Text>

                <TextInput secureTextEntry placeholder="Insira sua nova senha" style={styles.input} />

                <View style={styles.subBtn}>
                    <TouchableOpacity><Link href={"login"}style={styles.subBtn1}>Cancelar</Link></TouchableOpacity>
                </View>
             </View>


             <View>
                <Link href={"recuperarsenha"} style={styles.btn}>ENVIAR EMAIL</Link>
             </View>
        </View>
    )
}