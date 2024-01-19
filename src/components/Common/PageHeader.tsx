import Image, { ImageProps } from 'next/image';
import LogoImage from '~/img/logo.png';

interface PageHeaderProps {
  image: ImageProps;
  message: string;
  menus: string[];
}

function PageHeaderPresentation({ ...props }: PageHeaderProps) {
  return (
    <header className='flex items-center justify-around bg-[#E94709] py-5 text-white'>
      <div className='hover:cursor-pointer'>
        <Image
          src={props.image.src}
          alt={props.image.alt}
          width={props.image.width}
          height={props.image.height}
        />
        <span className=' text-xs'>{props.message}</span>
      </div>
      <ul className='flex items-center gap-14'>
        {props.menus.map((menu, index) => (
          <li key={menu} className='group text-[16px] font-bold hover:cursor-pointer'>
            {menu}
            <span className='ml-2 inline-block duration-400 group-hover:rotate-90'>＞</span>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default function PageHeaderContainer() {
  const data: PageHeaderProps = {
    image: {
      src: LogoImage,
      alt: 'stak-logo',
      width: 160,
      height: 44,
    },
    message: '広島ドラゴンフライズ広告ページ',
    menus: ['スポンサーメニュー', 'SNS広告の特徴', 'メリット', 'PICKUPメニュー', 'データ'],
  };
  return <PageHeaderPresentation {...data} />;
}
