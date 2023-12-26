import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-native";

import { startSession } from "../../../../stateManagement/sessionSlice";
import { Color, flex } from "../../../../styles";
import { BigButton } from "../../components/BigButton/BigButton";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeSession } = useSelector((state) => state.session);

  useEffect(() => {
    if (activeSession !== null) {
      navigate("/active-session");
    }
  }, [activeSession]);

  const handleStartButtonClick = () => {
    dispatch(startSession());
  };

  return (
    <View style={styles.container}>
      <BigButton onPress={handleStartButtonClick} label="Start new session" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    ...flex("row", "center", "center"),
  },
  button: {
    padding: 10,
    borderRadius: 20,
    color: Color.RaisinBlack,
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor: Color.Jonquill,
  },
});
