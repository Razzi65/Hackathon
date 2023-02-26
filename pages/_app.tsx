import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { useToast } from "@chakra-ui/react";


export default function App({ Component, pageProps }: AppProps) {
  const toast = useToast();
  return <>
  <Provider store={store}>
      <ChakraProvider> <Component {...pageProps} /> </ChakraProvider> </Provider>
  </>
}
