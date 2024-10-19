import Layout from "@/components/Layout";
import ProductRecommendation from "@/features/recommendation";
import { IProduct } from "@/types/product";

interface IProps {
  products: IProduct[],
  furnitures: IProduct[],
  error: boolean
}

export default function Home({ products, furnitures }: Readonly<IProps>) {
  return (
    <Layout>
      <main>
        <ProductRecommendation data={products.slice(0, 5)} normalText="Our Top Product Recommendations" highlightText="For You" />
        <ProductRecommendation data={furnitures.slice(0, 5)} normalText="Grab the best deal on" highlightText="Furnitures" />
        <ProductRecommendation data={products.slice(5)} normalText="Other Products" highlightText="" />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const [productResp, furnitureResp] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products?sortBy=rating&order=desc`),
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/category/furniture?sortBy=discountPercentage&order=desc`)
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