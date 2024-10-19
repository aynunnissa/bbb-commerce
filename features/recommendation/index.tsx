import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { IProduct } from "@/types/product";

interface IProps {
  highlightText: string,
  normalText: string,
  data: IProduct[],
}

const ProductRecommendation = ({ highlightText, normalText, data }: IProps) => {
  return(
    <section className="py-6 px-4 sm:px-8 md:px-16 lg:px-28">
      <SectionTitle normalText={normalText} highlightText={highlightText} />
      <div className="my-8">
        <div className="flex flex-wrap gap-y-8 -mx-2">
          {data.map(product => (
            <div key={product.title} className="w-1/2 md:w-1/3 xl:w-1/5">
              <div className="h-full px-1 sm:px-2">
                <ProductCard 
                  {...product}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductRecommendation;