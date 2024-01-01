import { Provider } from 'react-redux';
import { NativeRouter, Route, Routes } from 'react-router-native';

import { Shell } from '@/pages/Shell';
import { ActiveSession } from '@/pages/Shell/pages/ActiveSession';
import { CompletedSessions } from '@/pages/Shell/pages/CompletedSessions';
import { Home } from '@/pages/Shell/pages/Home';
import { Venues } from '@/pages/Shell/pages/Venues';
import { store } from '@/stateManagement/store';

export const Root = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Shell />}>
            <Route path="/home" element={<Home />} />
            <Route path="/active-session" element={<ActiveSession />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/completed-sessions" element={<CompletedSessions />} />
          </Route>
        </Routes>
      </NativeRouter>
    </Provider>
  );
};
