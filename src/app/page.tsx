import PageHeaderContainer from '@/components/Common/PageHeader';
import DataContainer from '@/components/Index/Data/Data';
import FeatureContainer from '@/components/Index/Feature/Feature';
import HeroContainer from '@/components/Index/Hero/Hero';
import MenuContainer from '@/components/Index/Menu/Menu';
import MeritContainer from '@/components/Index/Merit/Merit';

export default function Home() {
  return (
    <>
      <PageHeaderContainer />
      <HeroContainer />
      <div className='bg-[#181818]  pt-24 text-center text-white'>
        <MenuContainer />
        <FeatureContainer />
        <MeritContainer />
        <DataContainer />
      </div>
    </>
  );
}
