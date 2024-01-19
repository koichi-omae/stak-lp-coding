export interface MeritBoxProps {
  title: string;
  text: string;
}

export default function MeritBoxPresentation({ ...props }: MeritBoxProps) {
  return (
    <div className='mx-auto mt-16 w-[1100px] rounded-lg bg-[#2B2B2B] p-9 text-left text-white '>
      <h3 className='text-2xl font-bold'>{props.title}</h3>
      <p className=' mt-5 text-base font-medium leading-7'>{props.text}</p>
    </div>
  );
}
