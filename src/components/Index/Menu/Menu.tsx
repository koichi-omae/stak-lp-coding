import { MenuCardPresentation, MenuCardProps } from './MenuCard';
import CardDownLoadImage from '~/img/card-download.svg';
import CardLogoImage from '~/img/card-logo.svg';

interface MenuProps {
  title: string;
  text: string;
  cards: MenuCardProps[];
}

function MenuPresentation({ ...props }: MenuProps) {
  return (
    <div className='bg-[#181818] py-24 text-white'>
      <h2 className='text-center text-3xl font-bold'>{props.title}</h2>
      <p className='mt-5 text-center'>{props.text}</p>
      <div className='mt-16 flex items-center justify-center gap-11'>
        {props.cards.map((card, index) => {
          return <MenuCardPresentation key={index} {...card} />;
        })}
      </div>
    </div>
  );
}

export default function MenuContainer() {
  const data: MenuProps = {
    title: 'スポンサーメニュー',
    text: '広島ドラゴンフライズの最新スポンサーメニュー（PDF）はこちらからダウンロードできます',
    cards: [
      {
        stanps: [
          {
            src: CardDownLoadImage,
            alt: 'download',
            width: 40,
            height: 40,
          },
          {
            src: CardLogoImage,
            alt: 'logo',
            width: 40,
            height: 40,
          },
        ],
        bgImage: 'bg-card-menu-pattern1',
        cardTitles: ['SNS ADS', 'PROGRAM'],
        cardText: '広島ドラゴンフライズ × stak SNS広告プログラム',
        btn: {
          text: 'download',
          link: '/',
        },
      },
      {
        stanps: [
          {
            src: CardDownLoadImage,
            alt: 'download',
            width: 40,
            height: 40,
          },
        ],
        bgImage: 'bg-card-menu-pattern2',
        cardTitles: ['PARTNERSHIP', 'PROGRAM'],
        cardText: '広島ドラゴンフライズパートナーシッププログラム',
        btn: {
          text: 'download',
          link: '/',
        },
      },
    ],
  };
  return <MenuPresentation {...data} />;
}
