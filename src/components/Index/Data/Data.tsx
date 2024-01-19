import AgePieChartContainer from './AgePieChart';
import AttributePresentation, { AttributeProps } from './Attribute';
import GenderPieChartContainer from './GenderPieChart';
import InfluencePresentation, { InfluenceProps } from './Influence';
import ResidencyBarGraphContainer from './ResidencyBarGraph';
import BLeagureImage from '~/img/b-league-logo.png';
import ComparisonImage from '~/img/comparison-logo.png';
import FollowerImage from '~/img/follower-logo.svg';
import HashtagImage from '~/img/hashtag-logo.png';
import InstagramImage from '~/img/instagram-logo.png';
import XImage from '~/img/x-logo.png';

interface DataProps {
  title: string;
  text: string;
  influences: InfluenceProps;
  attributes: AttributeProps;
}

function DataPresentation({ ...props }: DataProps) {
  return (
    <div className='mt-44'>
      <h2 className='text-3xl font-bold'>{props.title}</h2>
      <p className='mt-5 text-base font-medium'>{props.text}</p>
      <InfluencePresentation {...props.influences} />
      <AttributePresentation {...props.attributes} />
    </div>
  );
}

export default function DataContainer() {
  const data: DataProps = {
    title: 'データ',
    text: '2023年11月現在',
    influences: {
      title: '影響力',
      cards: [
        {
          image: {
            src: XImage,
            alt: 'x',
            width: 74,
            height: 76,
          },
          titles: ['公式X投稿', '月間インプレッション'],
          text: {
            num: 820,
            unit: '万imp',
          },
        },
        {
          image: {
            src: InstagramImage,
            alt: 'instagram',
            width: 76,
            height: 76,
          },
          titles: ['公式Instagram投稿', '平均リーチ数'],
          text: {
            num: 2.5,
            unit: '万リーチ',
          },
        },
        {
          image: {
            src: ComparisonImage,
            alt: 'comparison',
            width: 101,
            height: 76,
          },
          titles: ['公式SNSフォロワー数', '前年比'],
          text: {
            num: 140.6,
            unit: '%',
          },
        },
        {
          image: {
            src: FollowerImage,
            alt: 'follower',
            width: 76,
            height: 76,
          },
          titles: ['公式SNS総フォロワー数'],
          text: {
            num: 13.8,
            unit: '万人超',
          },
        },
        {
          image: {
            src: BLeagureImage,
            alt: 'b-league',
            width: 94,
            height: 76,
          },
          titles: ['Bリーグ関連動画総再生回数', 'B.LEAGUEチャンネル'],
          text: {
            num: 2.5,
            unit: '億回再生',
          },
        },
        {
          image: {
            src: HashtagImage,
            alt: 'hashtag',
            width: 100,
            height: 73,
          },
          titles: ['総SNSハッシュタグ', 'ボリューム数'],
          text: {
            num: 10,
            unit: '万件超',
          },
        },
      ],
    },
    attributes: {
      title: '属性',
      cards: [
        { title: '年齢', children: <AgePieChartContainer /> },
        { title: '男女比', children: <GenderPieChartContainer /> },
        { title: '居住地', children: <ResidencyBarGraphContainer /> },
      ],
    },
  };
  return <DataPresentation {...data} />;
}
