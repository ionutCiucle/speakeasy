import { Provider } from "react-redux";
import { NativeRouter, Routes, Route } from "react-router-native";

import { Shell } from "./src/pages/Shell";
import { ActiveSession } from "./src/pages/Shell/pages/ActiveSession";
import { CompletedSessions } from "./src/pages/Shell/pages/CompletedSessions";
import { Home } from "./src/pages/Shell/pages/Home";
import { UpdateMenu } from "./src/pages/Shell/pages/UpdateMenu";
import { store } from "./src/stateManagement/store";

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Shell />}>
            <Route path="/home" element={<Home />} />
            <Route path="/active-session" element={<ActiveSession />} />
            <Route path="/update-menu" element={<UpdateMenu />} />
            <Route path="/completed-sessions" element={<CompletedSessions />} />
          </Route>
        </Routes>
      </NativeRouter>
    </Provider>
  );
}
