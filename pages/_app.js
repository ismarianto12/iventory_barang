import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/sidebar.css'
import { connect, Provider } from "react-redux"
import { store } from '../store/app'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
