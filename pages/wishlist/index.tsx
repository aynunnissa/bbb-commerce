import Layout from "@/components/Layout";
import WishListItems from "@/features/wishlist";
import Head from "next/head";

export default function WishListPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Wishlist - Bobostore Indonesia</title>
        <meta name="description" content="Your favorite items saved for later" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:url" content="https://bobostore-rosy.vercel.app/wishlist" key="ogurl" />
        <meta property="og:image" content="/favicon.ico" key="ogimage" />
        <meta property="og:site_name" content="Bobostore" key="ogsitename" />
        <meta property="og:title" content="Bobostore Indonesia" key="ogtitle" />
        <meta property="og:description" content="Your favorite items saved for later" key="ogdesc" />
      </Head>
      <Layout>
        <main>
          <WishListItems normalText="Your Favorites Are Just a Click Away," highlightText="Check Out Now" />
        </main>
      </Layout>
    </>
  );
}
