import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { NativeRouter, Routes, Route } from "react-router-native";
import { store } from "./src/stateManagement/store";
import { Shell } from "./src/Shell";
import { CreateSession } from "./src/views/CreateSession";
import { CompletedSessions } from "./src/views/CompletedSessions";
import { UpdateMenu } from "./src/views/UpdateMenu";
import { ActiveSession } from "./src/views/ActiveSession";

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Shell />}>
            <Route exact path="/create-session" element={<CreateSession />} />
            <Route exact path="/active-session" element={<ActiveSession />} />
            <Route exact path="/update-menu" element={<UpdateMenu />} />
            <Route
              exact
              path="/completed-sessions"
              element={<CompletedSessions />}
            />
          </Route>
        </Routes>
      </NativeRouter>
    </Provider>
  );
}
