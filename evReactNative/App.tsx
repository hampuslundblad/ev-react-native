import React, { useEffect } from "react";

// Used for debugging network logs since react-native debugger doesn't support it
import "./ReactotronConfig.js";

import { onlineManager, QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import NetInfo from "@react-native-community/netinfo";
import RootNavigation from "./src/navigation/RootNavigation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const asyncPersist = createAsyncStoragePersister({
  storage: AsyncStorage,
  throttleTime: 3000,
});
function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncPersist }}>
      <RootNavigation />
    </PersistQueryClientProvider>
  );
}

export default App;
