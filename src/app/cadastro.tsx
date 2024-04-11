import {View, Image, TextInput, Text, TouchableOpacity} from "react-native";
import {styles} from "../css/style";
import{Link} from "expo-router";

export default function cadastro (){
    return(
        //div principal
        <View style={styles.imagemBody}>
            {/*imagem logo sesi senai */}
            <Image style= {styles.imagemss} source={require ('../../assets/sesi-senai.webp')} />

            <View style={styles.form}>
                
                <Text style={styles.text}>NOME</Text>

                <TextInput placeholder= "Insira seu nome completo " style={styles.input} />

                <Text style={styles.text}>Unidade</Text>

                <TextInput secureTextEntry placeholder="Insira sua unidade SESI/SENAI" style={styles.input} />

                <Text style={styles.text}>CPF</Text>

                <TextInput secureTextEntry placeholder="Insira seu CPF" style={styles.input} />

                <Text style={styles.text}>SENHA:</Text>

                <TextInput secureTextEntry placeholder="Insira sua senha" style={styles.input} />

                <View style={styles.subBtn}>
                    <TouchableOpacity><Link href={"login"}style={styles.subBtn1}>Cancelar</Link></TouchableOpacity>
                </View>
             </View>


             <View>
                <Link href={"login"} style={styles.btn}>CADASTRAR</Link>
             </View>
        </View>
    )
}