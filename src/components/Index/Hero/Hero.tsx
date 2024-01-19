import { Bebas_Neue } from 'next/font/google';

function HeroPresentation() {
  return (
    <div className='flex h-[656px] items-center justify-center bg-hero-pattern bg-auto'>
      <h2 className='font-bebas text-[46px] text-white'>HIROSHIMA DRAGONFLIES</h2>
    </div>
  );
}

export default function HeroContainer() {
  return <HeroPresentation />;
}
