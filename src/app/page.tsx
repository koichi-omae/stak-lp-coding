import PageHeaderContainer from '@/components/Common/PageHeader';
import FeatureContainer from '@/components/Index/Feature/Feature';
import HeroContainer from '@/components/Index/Hero/Hero';
import MenuContainer from '@/components/Index/Menu/Menu';

export default function Home() {
  return (
    <>
      <PageHeaderContainer />
      <HeroContainer />
      <MenuContainer />
      <FeatureContainer />
    </>
  );
}
