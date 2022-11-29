import React, { useEffect } from 'react';
import * as Updates from 'expo-updates';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/Routes';

export default function App() {
  useEffect(() => {
    async function updateApp() {
      if (process.env.NODE_ENV === 'development') return;
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }
    updateApp();
  }, []);
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
}
