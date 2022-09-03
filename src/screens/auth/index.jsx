import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { signin, signup } from "../../store/actions/auth.actions";

import { colors } from "../../constants/colors";
import { isIOS } from "../../utils/functions";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const title = isLogin ? "Login" : "Registro";
  const message = isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?";
  const messageAction = isLogin ? "Ingresar" : "Registrate";
  const messageTarget = isLogin ? "Ingresar" : "Registrate";
  const onHandleChange = (value, type) => {
    if (type === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  const onHandleAuth = () => {
    dispatch(isLogin ? signin(email, password) : signup(email, password));
  };

  const onHandleChangeAuth = () => {
    setEmail("");
    setPassword("");
    setIsLogin(!isLogin);
  };
  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior={isIOS ? "padding" : "height"}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Correo electronico</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su email"
          placeholderTextColor={colors.placerholder}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => onHandleChange(text, "email")}
          value={email}
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su contraseña"
          placeholderTextColor={colors.placerholder}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          onChangeText={(text) => onHandleChange(text, "password")}
          value={password}
        />
        <Button
          disabled={!(email && password)}
          title={messageTarget}
          color={colors.primary}
          onPress={onHandleAuth}
        />

        <View style={styles.prompt}>
          <TouchableOpacity onPress={onHandleChangeAuth}>
            <Text style={styles.promptMessage}>{message}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;