import Image from "next/image";
import { ChangeEvent, FormEvent, memo } from "react";
import SearchIcon from "@/public/icons/search.svg";

interface IProps {
  search: string,
  handleSearch: (event: FormEvent<HTMLFormElement>) => void,
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField = ({ search, handleSearch, handleChange } : IProps) => {
  console.log('search render')
  return(
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
        <button type="submit" className="rounded-md p-2 bg-primary-50">
          <Image src={SearchIcon} alt="search icon" width={14} height={14} />
        </button>
      </div>
    </form>
  );
}

export default memo(SearchField);