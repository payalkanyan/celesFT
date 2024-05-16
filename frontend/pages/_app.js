import CustomCursor from '@/components/CustomCursor/CustomCursor';
import Layout from '@/components/Layout/Layout';
import CursorManager from '@/store/CursorManager';
import StateContextProvider from '@/store/StateContext';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar/Navbar';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <CursorManager>
      <StateContextProvider>
        <CustomCursor />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContextProvider>
    </CursorManager>
  );
}
