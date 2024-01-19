import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import LogoImage from '~/img/logo.png';

interface PageHeaderProps {
  image: ImageProps;
  message: string;
  menus: MenuProps[];
}

interface MenuProps {
  link: string;
  text: string;
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
          <Link key={menu.text} href={menu.link}>
            <li className='group text-[16px] font-bold hover:cursor-pointer'>
              {menu.text}
              <span className='ml-2 inline-block duration-400 group-hover:rotate-90'>＞</span>
            </li>
          </Link>
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
    menus: [
      {
        link: '#menu',
        text: 'スポンサーメニュー',
      },
      {
        link: '#feature',
        text: 'SNS広告の特徴',
      },
      {
        link: '#merit',
        text: 'メリット',
      },
      {
        link: '#pickup',
        text: 'PICKUPメニュー',
      },
      {
        link: '#data',
        text: 'データ',
      },
    ],
  };
  return <PageHeaderPresentation {...data} />;
}
