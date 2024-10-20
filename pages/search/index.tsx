import Layout from "@/components/Layout";
import SearchResult from "@/features/search-result";
import { IProduct } from "@/types/product";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

interface IProps {
  query: string,
  products: IProduct[],
  error: boolean
}

export default function ProductDetail({ query, products }: Readonly<IProps>) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Sell Amazing Deals on {query} - Bobostore Indonesia</title>
        <meta name="description" content={`Explore the best ${query} for you`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:url" content="https://bobostore-rosy.vercel.app/search" key="ogurl" />
        <meta property="og:image" content="/favicon.ico" key="ogimage" />
        <meta property="og:site_name" content="Bobostore" key="ogsitename" />
        <meta property="og:title" content="Bobostore Indonesia" key="ogtitle" />
        <meta property="og:description" content={`Explore the best ${query} for you`} key="ogdesc" />
      </Head>
      <Layout>
        <main>
          <SearchResult products={products} />
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { q } = context.query;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/search?q=${q}`);

    const errorCode = response.ok ? null : response.status;
    const productsData = await response.json();
    
    return {
      props: {
        query: q,
        products: productsData?.products || [],
        error: errorCode
      }
    }
  } catch (error) {
    console.log(`Error: ${error}`)
    return {
      props: {
        query: q,
        product: [],
        error: 500
      }
    } 
  }
}