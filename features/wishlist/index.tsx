import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/shared/SectionTitle";
import useWishList from "@/store/use-wishlist-store";

interface IProps {
  highlightText: string,
  normalText: string
}

const WishListItems = ({ highlightText, normalText }: IProps) => {
  const { items } = useWishList();

  return(
    <section className="py-6 px-4 sm:px-8 md:px-16 lg:px-28">
      <SectionTitle normalText={normalText} highlightText={highlightText} />
      <div className="my-8">
        <div className="flex flex-wrap gap-y-8 -mx-2">
          {items.map(product => (
            <div key={product.title} className="w-1/2 md:w-1/3 xl:w-1/5">
              <div className="h-full px-1 sm:px-2">
                <ProductCard 
                  product={product}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WishListItems;