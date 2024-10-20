import { IProduct } from "@/types/product"
import ProductRecommendation from "../recommendation"
import useProductSearch from "@/store/use-product-search-store"
import { useEffect } from "react"

interface IProps {
  products: IProduct[]
}

const SearchResult = ({ products }: IProps) => {
  const { query, setQuery } = useProductSearch();

  useEffect(() => {
    return () => {
      setQuery("");
    }
  }, [setQuery])

  return(
    <ProductRecommendation data={products} normalText="Your Search Results for" highlightText={query} />
  )
}

export default SearchResult;