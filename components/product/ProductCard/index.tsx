import Badge from "@/components/shared/Badge";
import { IProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import StarIcon from "@/public/icons/star.svg";
import HeartIcon from "@/components/IconButton/HeartButton";
import styles from "./productCard.module.css";

const ProductCard = ({ id, title, rating, price, thumbnail, discountPercentage, stock, category }: IProduct) => {
  return(
    <Link href={`/products/${id}`} className="contents">
      <div className={`${styles.product__card} relative rounded-2xl border-[1px] h-full flex flex-col hover:shadow-lg hover:border-2 hover:border-opacity-50 hover:border-primary-50`}>
        {discountPercentage > 0 && <Badge discountPercentage={discountPercentage} />}
        <div className="relative aspect-square">
          <Image src={thumbnail} fill className="object-cover rounded-t-2xl" alt="" />
        </div>
        <div className="p-2 sm:p-4 grow flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center justify-between">
              <div className={`${styles.product__badge} my-2 rounded-md bg-primary-50 py-0.5 px-1 sm:px-3 inline-block text-white text-xs truncate`}>{category}</div>
              <button><HeartIcon /></button>
            </div>
            <p className="text-sm sm:text-base">{title}</p>
            <p className="text-sm sm:text-lg font-semibold text-primary-80">${price}</p>
          </div>
          <div>
            <hr />
            <div className="mt-2 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex gap-1 items-center"><Image src={StarIcon} width={15} height={15} alt="product rating" /><span>{rating}</span></div>
              {stock > 5 ? <p>{stock} tersisa</p> : <p className="text-red-main">Stok hampir habis</p>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard;