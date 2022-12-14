import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout, Preloader } from '../components';
import { StreamChat } from 'stream-chat';
import Cookies from 'universal-cookie';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@stream-io/stream-chat-css/dist/css/index.css';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const cookies = new Cookies();
  const token = cookies.get('token');
  const client = StreamChat.getInstance('udmu9745hbke');

  if (token) {
    client
      .connectUser(
        {
          id: cookies.get('userId'),
          name: cookies.get('username'),
          image:
            'https://getstream.io/random_svg/?id=broken-waterfall-5&amp;name=Broken+waterfall',
          hashedPassword: cookies.get('hashedPassword'),
          email: cookies.get('email'),
        },
        token
      )
      .then((user) => {
        console.log('User connected', user);
      });
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <RecoilRoot>
      <Layout>
        <ToastContainer />
        {loading ? <Preloader /> : <Component {...pageProps} />}
      </Layout>
    </RecoilRoot>
  );
}
