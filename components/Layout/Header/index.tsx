import BobostoreLogo from "@/public/images/Bobostore.svg";
import Image from "next/image";
import SearchIcon from "@/public/icons/search.svg";
import WishListIcon from "@/public/icons/heart-solid.svg";
import Link from "next/link";
import RoundedBadge from "@/components/shared/Badge/RoundedBadge";
import useWishList from "@/store/use-wishlist-store";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import useProductSearch from "@/store/use-product-search-store";

const Header = () => {
  const router = useRouter();
  const { items } = useWishList();
  const [search, setSearch] = useState('');
  const { setQuery } = useProductSearch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    setQuery(search);
    event.preventDefault();
    router.push(`/search?q=${search}`)
  }
  
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
          <form onSubmit={handleSearch} className="contents">
            <div className="flex items-center py-2.5 px-6 rounded-md bg-primary-50 bg-opacity-10">
              <div className="grow">
                <input 
                  className="w-full text-sm text-ellipsis focus:outline-none bg-transparent" 
                  placeholder="search smartphone, shoes, and more..." 
                  value={search}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="rounded-md p-2 bg-primary-50"><Image src={SearchIcon} alt="search icon" width={14} height={14} /></button>
            </div>
          </form>
        </div>
        <div>
          <Link href="/wishlist" className="hover:underline decoration-primary-50">
            <div className="mx-1 md:mx-4 flex items-center gap-3">
              <div className="relative">
                <Image src={WishListIcon} alt="wishlist icon" width={25} height={25} />
                {items.length > 0 && <RoundedBadge count={items.length} />}
              </div>
              <p className="hidden lg:block">Wishlist</p>
            </div>
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Header;