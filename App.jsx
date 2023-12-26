import { Provider } from "react-redux";
import { NativeRouter, Routes, Route } from "react-router-native";

import { Shell } from "./src/pages/Shell";
import { ActiveSession } from "./src/pages/Shell/pages/ActiveSession";
import { CompletedSessions } from "./src/pages/Shell/pages/CompletedSessions";
import { CreateSession } from "./src/pages/Shell/pages/CreateSession";
import { UpdateMenu } from "./src/pages/Shell/pages/UpdateMenu";
import { store } from "./src/stateManagement/store";

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
