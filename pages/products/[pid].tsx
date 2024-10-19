import Layout from "@/components/Layout";
import ProductDetailSection from "@/features/product-detail";
import { IProductDetail } from "@/types/product";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

interface IProps {
  product: IProductDetail,
  error: boolean
}

export default function ProductDetail({ product }: Readonly<IProps>) {
  return (
    <Layout>
      <main>
        <ProductDetailSection {...product} />
      </main>
    </Layout>
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