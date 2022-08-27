import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";
import { colors } from "../../constants/colors";
import { styles } from "./styles";

const AuthScreen = ({ navigation }) => {
  const title = "Registro";
  const message = "¿Ya tienes una cuenta?";
  const messageAction = "Registarse";
  const messageTarget = "Registrarse";

  const onHandleAuth = () => {};
  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior="padding">
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Correo electronico</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su email"
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => console.warn(text)}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su contraseña"
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          onChangeText={(text) => console.warn(text)}
        />
        <Button title={title} color={colors.primary} onPress={onHandleAuth} />
        <View style={styles.prompt}>
          <Text style={styles.promptMessage}>{message}</Text>
          <TouchableOpacity onPress={() => console.warn(messageTarget)}>
            <Text style={styles.promptButton}>{messageAction}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;