import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider } from './app/contexts/ThemeContext';
import { Router } from './Router';
import { Toaster } from './view/components/ui/Toaster';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      refetchOnWindowFocus: false,
      gcTime: 10 * 60 * 1000,
      retry: false,
    },
    mutations: {},
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router />
        <ReactQueryDevtools buttonPosition="bottom-left" position="left" />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
