import { View } from "react-native";
import { Outlet, useNavigate } from "react-router-native";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { Colors } from "../styles";
import { useEffect } from "react";

export const Shell = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/active-session");
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Outlet />
      </View>
      <Navigation />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  body: {
    backgroundColor: Colors.White,
    padding: 10,
  },
  bodyText: {
    fontSize: 16,
  },
};
