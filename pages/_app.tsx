import "../styles/globals.css";
import { MeshProvider } from "@meshsdk/react";
import { AppPropsWithLayout } from "@/models";
import { EmptyLayout } from "components/layout";
import { createEmotionCache, theme } from "@/utils";
import withTheme from '../theme';


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return withTheme(
    <>
      <MeshProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MeshProvider>
    </>
  );
}