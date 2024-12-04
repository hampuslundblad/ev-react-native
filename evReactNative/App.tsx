import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";

// Used for debugging network logs since react-native debugger doesn't support it
import "./ReactotronConfig.js";

import {
  onlineManager,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import NetInfo from "@react-native-community/netinfo";
import SearchBooks from "./src/views/SearchBooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

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
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <SearchBooks />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
