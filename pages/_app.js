import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  //Meta with name - viewport is usualy added to Head so it ensures app will working better in responsive mode
  return (
    <Layout>
      <Head>
        <title> NextJs Events</title>
        <meta name="description" content="nextJs event application" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
