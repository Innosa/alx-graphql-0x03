

import ErrorBoundary from "@/components/commons/ErrorBoundary";
import ErrorProneComponent from "@/components/commons/ErrorProneComponent";
import '@/styles/globals.css';
import type { AppProps } from "next/app";
import { ApolloProvider } from '@apollo/client/react';
import client from '@/graphql/apolloClient';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <ErrorProneComponent />
      <Component {...pageProps} />
      </ApolloProvider>
    </ErrorBoundary>
  );
}
export default MyApp;
