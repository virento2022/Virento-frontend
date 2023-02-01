import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0';
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
