import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";

// Used for debugging network logs since react-native debugger doesn't support it
import "./ReactotronConfig.js";

import { onlineManager, QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import NetInfo from "@react-native-community/netinfo";
import NetworkStatus from "./src/components/NetworkStatus";
import SearchBooks from "./src/views/SearchBooks";

const queryClient = new QueryClient();

const asyncPersist = createAsyncStoragePersister({
  storage: AsyncStorage,
  throttleTime: 3000,
});

function App(): React.JSX.Element {
  useEffect(() => {
    onlineManager.setEventListener(setOnline => {
      return NetInfo.addEventListener(state => {
        setOnline(!!state.isConnected);
      });
    });
  }, []);

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncPersist }}>
      <SafeAreaView>
        <NetworkStatus />
        <SearchBooks />
      </SafeAreaView>
    </PersistQueryClientProvider>
  );
}

export default App;
