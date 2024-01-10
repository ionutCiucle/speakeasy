import { Provider } from 'react-redux';
import { NativeRouter, Route, Routes } from 'react-router-native';

import { Shell } from '@/pages/Shell';
import { ActiveSession } from '@/pages/Shell/pages/ActiveSession';
import { CompletedSessions } from '@/pages/Shell/pages/CompletedSessions';
import { Home } from '@/pages/Shell/pages/Home';
import {
  VenueStack,
  VenueList,
  VenueOverview,
} from './pages/Shell/pages/VenueStack';
import { store } from '@/stateManagement/store';

export const Root = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Shell />}>
            <Route path="/home" element={<Home />} />
            <Route path="/active-session" element={<ActiveSession />} />
            <Route path="/venue-stack" element={<VenueStack />}>
              <Route path="/venue-stack/venue-list" element={<VenueList />} />
              <Route
                path="/venue-stack/venue-overview"
                element={<VenueOverview />}
              />
            </Route>
            <Route path="/venue-overview" element={<VenueOverview />} />
            <Route path="/completed-sessions" element={<CompletedSessions />} />
          </Route>
        </Routes>
      </NativeRouter>
    </Provider>
  );
};
