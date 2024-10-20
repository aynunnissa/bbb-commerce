import Layout from "@/components/Layout";
import ProductRecommendation from "@/features/recommendation";
import { IProduct } from "@/types/product";
import dynamic from "next/dynamic";
import Head from "next/head";

interface IProps {
  products: IProduct[],
  furnitures: IProduct[],
  error: boolean
}

const BestDealsSection = dynamic(() => import("@/features/recommendation"));

export default function Home({ products, furnitures }: Readonly<IProps>) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Bobostore Indonesia</title>
        <meta name="description" content="The best and most affordable shopping site in your city" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:url" content="https://bobostore-rosy.vercel.app/" key="ogurl" />
        <meta property="og:image" content="/favicon.ico" key="ogimage" />
        <meta property="og:site_name" content="Bobostore" key="ogsitename" />
        <meta property="og:title" content="Bobostore Indonesia" key="ogtitle" />
        <meta property="og:description" content="The best and most affordable shopping site in your city" key="ogdesc" />
      </Head>
      <Layout>
        <main>
          <ProductRecommendation priority data={products.slice(0, 5)} normalText="Our Top Product Recommendations" highlightText="For You" />
          <BestDealsSection data={furnitures} normalText="Grab the best deal on" highlightText="Furnitures" />
          <BestDealsSection data={products.slice(5)} normalText="Other Products" highlightText="" />
        </main>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const [productResp, furnitureResp] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products?sortBy=rating&order=desc`),
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/category/furniture?limit=5&sortBy=discountPercentage&order=desc`)
    ]);

    const errorCode = productResp.ok ? null : productResp.status;
    const [productsData, furnituresData] = [await productResp.json(), await furnitureResp.json()];

    return {
      props: {
        products: productsData?.products || [],
        furnitures: furnituresData?.products || [],
        error: errorCode
      }
    }
  } catch (error) {
    console.log(`Error: ${error}`)
    return {
      props: {
        products: [],
        furnitures: [],
        error: 500
      }
    } 
  }
}