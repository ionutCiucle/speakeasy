import { Routes as NativeRoutes, Route } from "react-router-native";
import { Shell } from "./Shell";
import { CreateSession } from "./views/CreateSession";
import { CompletedSessions } from "./views/CompletedSessions";
import { UpdateMenu } from "./views/UpdateMenu";
import { ActiveSession } from "./views/ActiveSession";

export const Routes = () => {
  return (
    <NativeRoutes>
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
    </NativeRoutes>
  );
};
