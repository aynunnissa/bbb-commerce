interface IProps {
  discountPercentage: string
}

const Badge = ({ discountPercentage }: IProps) => {
  return(
    <div className="absolute top-0 right-0 z-10 rounded-tr-2xl rounded-bl-2xl bg-red-main py-2 px-3 text-white text-xs">
      <span>{ discountPercentage }</span><br />
      <span>OFF</span>
    </div>
  );
}

export default Badge;