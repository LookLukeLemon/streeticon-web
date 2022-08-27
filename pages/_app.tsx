import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import Layout from "components/Layout";
import {AuthProvider} from "context/AuthProvider";
import type {AppProps} from "next/app";
import "../styles/globals.css";
const queryClient = new QueryClient();

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default MyApp;
