import '../styles/bootstrap.scss';
import type { AppProps } from 'next/app'
import {store} from "@/store/store";
import provider, {Provider} from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}