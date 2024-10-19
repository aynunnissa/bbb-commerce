interface IProps {
  highlightText: string,
  normalText: string
}

const SectionTitle = ({ highlightText, normalText }: IProps) => {
  return(
    <div className="border-b-[1px]">
      <h1 className="text-2xl font-medium border-b-2 pb-2 border-b-primary-50 inline-block">
        {normalText} 
        <span className="ml-2 text-primary-50 font-bold">{highlightText}</span>
      </h1>
    </div>
  );
}

export default SectionTitle;