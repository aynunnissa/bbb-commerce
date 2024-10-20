import Layout from "@/components/Layout";
import ProductDetailSection from "@/features/product-detail";
import { IProductDetail } from "@/types/product";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

interface IProps {
  product: IProductDetail,
  error: boolean
}

export default function ProductDetail({ product }: Readonly<IProps>) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Sell Amazing Deals on {product.title} - Bobostore Indonesia</title>
        <meta name="description" content={`Explore ${product.title} and find the best deals. Enjoy affordable prices and great quality products!`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:url" content="https://bobostore-rosy.vercel.app/search" key="ogurl" />
        <meta property="og:image" content="/favicon.ico" key="ogimage" />
        <meta property="og:site_name" content="Bobostore" key="ogsitename" />
        <meta property="og:title" content="Bobostore Indonesia" key="ogtitle" />
        <meta property="og:description" content={`Explore ${product.title} and find the best deals. Enjoy affordable prices and great quality products!`} key="ogdesc" />
      </Head>
      <Layout>
        <main>
          <ProductDetailSection {...product} />
        </main>
      </Layout>
    </>
  );
}

interface Params extends ParsedUrlQuery {
  pid: string;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;

  const { pid } = params as Params;

  try {
    const productResp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${pid}`);

    const errorCode = productResp.ok ? null : productResp.status;
    const product = await productResp.json();
    
    return {
      props: {
        product: product || {},
        error: errorCode
      }
    }
  } catch (error) {
    console.log(`Error: ${error}`)
    return {
      props: {
        product: {},
        error: 500
      }
    } 
  }
}