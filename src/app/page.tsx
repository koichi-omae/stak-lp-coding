'use client';

import { RecoilRoot } from 'recoil';
import PageFooterContainer from '@/components/Common/PageFooter';
import PageHeaderContainer from '@/components/Common/PageHeader';
import DataContainer from '@/components/Index/Data/Data';
import FeatureContainer from '@/components/Index/Feature/Feature';
import HeroContainer from '@/components/Index/Hero/Hero';
import MenuContainer from '@/components/Index/Menu/Menu';
import MeritContainer from '@/components/Index/Merit/Merit';
import PickUpModalContainer from '@/components/Index/Modal/PickUpModal';
import PickUpContainer from '@/components/Index/PickUp/PickUp';

export default function Home() {
  return (
    <RecoilRoot>
      <PageHeaderContainer />
      <HeroContainer />
      <div className='bg-[#181818] pb-56  pt-24 text-center text-white'>
        <MenuContainer />
        <FeatureContainer />
        <MeritContainer />
        <PickUpContainer />
        <DataContainer />
      </div>
      <PageFooterContainer />
      <PickUpModalContainer />
    </RecoilRoot>
  );
}
