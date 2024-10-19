import BobostoreLogo from "@/public/images/Bobostore.svg";
import Image from "next/image";
import SearchIcon from "@/public/icons/search.svg";
import BookmarkIcon from "@/public/icons/bookmark-outlined.svg";
import WishListIcon from "@/public/icons/heart-outlined.svg";
import Link from "next/link";

const Header = () => {
  return(
    <div className="fixed z-20 inset-0 h-fit lg:h-[72px] py-2 bg-white shadow-sm">
      <div className="h-full flex flex-wrap items-center justify-between gap-2 lg:gap-16 px-4 sm:px-8 md:px-16 lg:px-28">
        <div className="flex justify-center lg:block h-[40px] lg:h-full w-full lg:w-auto">
          <div className="relative w-[140px] h-full">
            <Image src={BobostoreLogo} fill alt="Bobostore Logo" />
          </div>
        </div>
        <div className="grow">
          <div className="flex py-2.5 px-6 rounded-md bg-primary-50 bg-opacity-10">
            <div className="grow">
              <input className="w-full text-sm text-ellipsis focus:outline-none bg-transparent" placeholder="search smartphone, shoes, and more..." />
            </div>
            <Image src={SearchIcon} alt="search icon" width={20} height={20} />
          </div>
        </div>
        <div>
          <div className="flex items-center lg:divide-x">
            <Link href="" className="hover:underline decoration-primary-50">
              <div className="mx-1 md:mx-4 flex items-center gap-3">
                <Image src={BookmarkIcon} alt="bookmark icon" width={15} height={15} />
                <p className="hidden lg:block">Bookmark</p>
              </div>
            </Link>
            <Link href="" className="hover:underline decoration-primary-50">
              <div className="mx-1 md:mx-4 flex items-center gap-3">
                <Image src={WishListIcon} alt="wishlist icon" width={25} height={25} />
                <p className="hidden lg:block">Wishlist</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Header;