import { ReactNode } from "react";
import Header from "./Header";

interface IProps {
  children: ReactNode
}

const Layout = ({ children }: IProps) => {
  return(
    <div className="pt-[72px]">
      <Header />
      {children}
    </div>
  );
}

export default Layout;