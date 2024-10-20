import Badge from "@/components/shared/Badge/DiscountBadge";
import { IProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@/public/icons/star.svg";
import HeartIcon from "@/components/IconButton/HeartButton";
import styles from "./productCard.module.css";
import useWishList from "@/store/use-wishlist-store";
import { MouseEvent } from "react";

interface IProps {
  product: IProduct,
  priority?: boolean
}

const ProductCard = ({ product, priority }: IProps) => {
  const { toggleItem, checkIsAdded } = useWishList();

  const handleWishListClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    toggleItem(product);
  }

  return(
    <Link href={`/products/${product.id}`} className="contents">
      <div className={`${styles.product__card} relative rounded-2xl border-[1px] h-full flex flex-col hover:shadow-lg hover:border-2 hover:border-opacity-50 hover:border-primary-50`}>
        {product.discountPercentage > 0 && <Badge discountPercentage={product.discountPercentage} />}
        <div className="relative aspect-square">
          <Image priority={priority} loading={`${priority ? 'eager' : 'lazy'}`} src={product.thumbnail} fill className="object-cover rounded-t-2xl" alt="" />
        </div>
        <div className="p-2 sm:p-4 grow flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center justify-between">
              <div className={`${styles.product__badge} my-2 rounded-md bg-primary-50 py-0.5 px-1 sm:px-3 inline-block text-white text-xs truncate`}>{product.category}</div>
              <button onClick={handleWishListClick}><HeartIcon solid={checkIsAdded(product.id)} /></button>
            </div>
            <p className="text-sm sm:text-base">{product.title}</p>
            <p className="text-sm sm:text-lg font-semibold text-primary-80">${product.price}</p>
          </div>
          <div>
            <hr />
            <div className="mt-2 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex gap-1 items-center"><Image src={StarIcon} width={15} height={15} alt="product rating" /><span>{product.rating}</span></div>
              {product.stock > 5 ? <p>{product.stock} tersisa</p> : <p className="text-red-main text-[10px] md:text-sm">Hampir habis</p>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard;