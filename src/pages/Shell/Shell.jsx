import { useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-native";

import { ConfigPanel } from "./components/ConfigPanel";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { toggleConfigPanelVisibility } from "../../stateManagement/layoutSlice";
import { Colors, flex } from "../../styles";

export const Shell = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showConfigPanel } = useSelector((state) => state.layout);
  const { activeSession } = useSelector((state) => state.session);

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
      <Navigation activeSessionExists={activeSession !== null} />
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
    flex: 1,
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
