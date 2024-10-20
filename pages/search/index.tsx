import Layout from "@/components/Layout";
import SearchResult from "@/features/search-result";
import { IProduct } from "@/types/product";
import { GetServerSidePropsContext } from "next";

interface IProps {
  products: IProduct[],
  error: boolean
}

export default function ProductDetail({ products }: Readonly<IProps>) {
  return (
    <Layout>
      <main>
        <SearchResult products={products} />
      </main>
    </Layout>
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
        products: productsData?.products || [],
        error: errorCode
      }
    }
  } catch (error) {
    console.log(`Error: ${error}`)
    return {
      props: {
        product: [],
        error: 500
      }
    } 
  }
}