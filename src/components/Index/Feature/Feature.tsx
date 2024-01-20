import FeatureCardPresentation, { FeatureCardProps } from './FeatureCard';
import AchievementsImage from '~/img/achievements-logo.svg';
import ApproachImage from '~/img/approach-logo.svg';
import FormatImage from '~/img/format-logo.png';
import ManagementImage from '~/img/management-logo.svg';
import ReachImage from '~/img/reach-logo.png';
import TargetImage from '~/img/target-logo.png';

interface FeatureProps {
  title: string;
  text: string;
  cards: FeatureCardProps[];
}

function FeaturePresentation({ ...props }: FeatureProps) {
  return (
    <div id='feature' className='mt-44'>
      <h2 className='text-center font-sans text-3xl font-bold'>{props.title}</h2>
      <p className='mt-5 text-center'>{props.text}</p>
      <div className='mt-16 flex items-center justify-center gap-11'>
        <div className='grid grid-cols-3 gap-7'>
          {props.cards.map((card, index) => {
            return (
              <FeatureCardPresentation
                key={index}
                index={index + 1}
                title={card.title}
                image={card.image}
                text={card.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function FeatureContainer() {
  const data: FeatureProps = {
    title: 'SNS広告の特徴',
    text: '幅広いユーザーに向けた多様な広告戦略',
    cards: [
      {
        title: '若年層へのリーチ',
        image: {
          src: ReachImage,
          alt: 'reach',
          width: 120,
          height: 120,
        },
        text: '34歳までのユーザーが半数以上を占めており、若年層を中心に幅広いユーザーにリーチが可能です。',
      },
      {
        title: '多様な広告形式',
        image: {
          src: FormatImage,
          alt: 'format',
          width: 172,
          height: 120,
        },
        text: 'テキスト、画像、動画など多彩な広告形式の中からお客様のニーズに合ったご提案をいたします。',
      },
      {
        title: 'ターゲットの精度',
        image: {
          src: TargetImage,
          alt: 'target',
          width: 120,
          height: 120,
        },
        text: 'ユーザーデータを活用し、広告効果を見込めるターゲットに対して自らアプローチすることが可能です。',
      },
      {
        title: '潜在顧客へのアプローチ',
        image: {
          src: ApproachImage,
          alt: 'approach',
          width: 120,
          height: 120,
        },
        text: 'ユーザーに対してプッシュ型の広告を配信するため、「潜在顧客」に対し、有効なアプローチが行えます。',
      },
      {
        title: '柔軟な予算管理',
        image: {
          src: ManagementImage,
          alt: 'management',
          width: 120,
          height: 120,
        },
        text: '低予算から始めることができ、効果的な結果を得るための予算配分を最適化し、費用対効果を最大化できます。',
      },
      {
        title: '高い広告効果実績',
        image: {
          src: AchievementsImage,
          alt: 'achievements',
          width: 120,
          height: 120,
        },
        text: '認知拡大を目的としたプロモーション効果に定評があり、その先の深い指標における行動促進も期待できます。',
      },
    ],
  };
  return <FeaturePresentation {...data} />;
}
