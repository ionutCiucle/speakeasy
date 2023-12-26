import { useEffect } from "react";
import { View } from "react-native";
import { Outlet, useNavigate } from "react-router-native";
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { ConfigPanel } from "./components/ConfigPanel";
import { toggleConfigPanelVisibility } from "../../stateManagement/layoutSlice";
import { Colors, flex } from "../../styles";

export const Shell = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showConfigPanel } = useSelector((state) => state.layout);

  useEffect(() => {
    navigate("/active-session");
  }, []);

  const handleCogPress = () => {
    dispatch(toggleConfigPanelVisibility());
  };

  return (
    <View style={styles.container}>
      <Header onCogPress={handleCogPress} />
      <View style={styles.body}>
        <Outlet />
      </View>
      <Navigation />
      <ConfigPanel visible={showConfigPanel} onClosePress={handleCogPress} />
    </View>
  );
};

const styles = {
  container: {
    ...flex("column", "space-between", "stretch"),
    height: "100%",
    position: "relative",
  },
  body: {
    backgroundColor: Colors.White,
    padding: 10,
  },
  bodyText: {
    fontSize: 16,
  },
  configPanel: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: Colors.White,
  },
  visibleConfigPanel: {
    top: 0,
  },
};