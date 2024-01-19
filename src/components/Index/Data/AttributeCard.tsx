export interface AttributeCardProps {
  title: string;
  children: React.ReactNode;
}

export default function AttributeCardPresentation({ ...props }: AttributeCardProps) {
  return (
    <div className=' w-[348px] rounded-lg bg-[#2B2B2B] px-9 py-14'>
      <h4 className='font-sans-jp text-xl font-bold'>{props.title}</h4>
      {props.children}
    </div>
  );
}
