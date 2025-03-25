import { QueryClient } from '@tanstack/react-query';
import './index.css';
import PostsPage from './components/PostsPage';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { ScrollArea } from './components/ui/scroll-area';
import { AppProvider } from './lib/contexts/AppContext';

const persister = createSyncStoragePersister({
  storage: window.localStorage,
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

function App() {
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <AppProvider>
        <ScrollArea className='h-[100vh]'>
          <div className='max-w-[512px] mx-auto py-4'>
            <PostsPage />
          </div>
        </ScrollArea>
      </AppProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  )
}

export default App
