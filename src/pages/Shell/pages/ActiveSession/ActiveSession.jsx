import { Text, View } from "react-native";
import { useEffect } from "react";
import { useNavigate } from "react-router-native";
import { useSelector } from "react-redux";

export const ActiveSession = () => {
  const navigate = useNavigate();
  const { activeSession } = useSelector((state) => state.session);

  useEffect(() => {
    if (activeSession === null) {
      navigate("/create-session");
    }
  }, []);
  return (
    <View>
      <Text>Active session will be added here</Text>
    </View>
  );
};
