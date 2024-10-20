import BobostoreLogo from "@/public/images/Bobostore.svg";
import Image from "next/image";
import Link from "next/link";
import useWishList from "@/store/use-wishlist-store";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import useProductSearch from "@/store/use-product-search-store";
import SearchField from "./Search";
import WishListMenu from "./WishListMenu";

const Header = () => {
  const router = useRouter();
  const { items } = useWishList();
  const [search, setSearch] = useState('');
  const { setQuery } = useProductSearch();

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, [])

  const handleSearch = useCallback( (event: FormEvent<HTMLFormElement>) => {
    setQuery(search);
    event.preventDefault();
    router.push(`/search?q=${search}`)
  }, [router, search, setQuery])
  
  return(
    <div className="fixed z-20 inset-0 h-fit lg:h-[72px] py-2 bg-white shadow-sm">
      <div className="h-full flex flex-wrap items-center justify-between gap-2 lg:gap-16 px-4 sm:px-8 md:px-16 lg:px-28">
        <div className="flex justify-center lg:block h-[40px] lg:h-full w-full lg:w-auto">
          <div className="relative w-[140px] h-full">
            <Link href="/" className="contents">
              <Image src={BobostoreLogo} fill alt="Bobostore Logo" />
            </Link>
          </div>
        </div>
        <div className="grow">
          <SearchField 
            search={search} 
            handleChange={handleChange} 
            handleSearch={handleSearch}
          />
        </div>
        <div>
          <WishListMenu count={items.length} />
        </div>
      </div>
    </div>
  );
}

export default Header;