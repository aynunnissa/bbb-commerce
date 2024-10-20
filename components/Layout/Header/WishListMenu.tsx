import RoundedBadge from "@/components/shared/Badge/RoundedBadge"
import Image from "next/image"
import Link from "next/link"
import WishListIcon from "@/public/icons/heart-solid.svg";
import { memo } from "react";

interface IProps {
  count: number
}

const WishListMenu = ({ count }: IProps) => {
  return(
    <Link href="/wishlist" className="hover:underline decoration-primary-50">
      <div className="mx-1 md:mx-4 flex items-center gap-3">
        <div className="relative">
          <Image src={WishListIcon} alt="wishlist icon" width={25} height={25} />
          {count > 0 && <RoundedBadge count={count} />}
        </div>
        <p className="hidden lg:block">Wishlist</p>
      </div>
    </Link>
  )
}
export default memo(WishListMenu);