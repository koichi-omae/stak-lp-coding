import { Bebas_Neue } from 'next/font/google';

interface HeroProps {
  title: string;
}

function HeroPresentation({ ...props }: HeroProps) {
  return (
    <div className='relative flex h-[656px] w-full items-center justify-center bg-hero-pattern bg-cover'>
      <div className='absolute inset-0 bg-[#000000]/50' />
      <h2 className='absolute font-bebas text-[46px] text-white'>{props.title}</h2>
    </div>
  );
}

export default function HeroContainer() {
  const data: HeroProps = {
    title: 'HIROSHIMA DRAGONFLIES',
  };
  return <HeroPresentation {...data} />;
}
