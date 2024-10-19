import ProductGallery from "@/components/product/ProductGallery";
import { IProductDetail } from "@/types/product";
import Image from "next/image";
import StarIcon from "@/public/icons/star.svg";

const ProductDetailSection = (product: IProductDetail) => {
  return (
    <section className="py-6 px-4 sm:px-8 md:px-16 lg:px-28">
      <div className="flex flex-wrap -mx-3 w-full">
        <div className="w-full md:w-2/5 px-3">
          {product.images?.length > 1 ? 
            <ProductGallery images={product.images} /> :
            <div className='w-full h-full relative aspect-square'>
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                loading='eager'
                className='object-cover'
              />
            </div>  
          }
          {/* <Gallery images={product.images} /> */}
        </div>
        <div className="w-full md:w-3/5 px-3">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="font-bold text-3xl">{ product.title }</h1>
            </div>
            <div>
              <div className="mb-2 -mx-4 flex divide-x text-xl text-neutral-40">
                <div className="flex gap-1 items-center px-4"><Image src={StarIcon} width={20} height={20} alt="product rating" /><span>{product.rating}</span></div>
                <p className="px-4">{ product.stock } Tersisa { product.stock <= 5 && <span className="text-red-main">(Hampir Habis)</span>}</p>
              </div>
              <div className="rounded-md bg-primary-50 bg-opacity-10 p-4">
                <p className="font-bold text-4xl text-primary-50">${product.price}</p>
                <div className="flex items-center gap-4">
                  <p className="text-neutral-30 line-through text-lg">${Number(product.price * ((100 + product.discountPercentage)/100)).toFixed(2)}</p>
                  <div className="my-2 rounded-md bg-red-main py-0.5 px-1 sm:px-3 text-xs inline-block text-white">{product.discountPercentage}% OFF</div>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-2">Tentang Produk</p>
              <p>{ product.description ?? '-'  }</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Kategori</p>
              <p>{ product.category ?? '-'  }</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Brand</p>
              <p>{ product.brand ?? '-' }</p>
            </div>
            <div>
              <p className="font-semibold mb-2">SKU</p>
              <p>{ product.sku ?? '-' }</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Stock Tersisa</p>
              <p>{ product.stock }{ product.stock <= 5 && <span className="text-red-main">(Hampir Habis)</span>}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailSection;