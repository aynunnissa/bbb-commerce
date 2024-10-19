interface IProps {
  count: number
}

const RoundedBadge = ({ count = 1 }: IProps) => {
  return(
    <div className="absolute bg-red-main rounded-full top-[-6px] right-[-10px]">
      <div className="min-w-4 px-1 min-h-4 flex items-center justify-center text-white text-[10px]">
        <p>{count > 100 ? '100+' : count}</p>
      </div>
    </div>
  )
}

export default RoundedBadge;