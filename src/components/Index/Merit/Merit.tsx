import MeritBoxPresentation, { MeritBoxProps } from './MeritBox';

interface MeritPresentationProps {
  title: string;
  text: string;
  boxes: MeritBoxProps[];
}

function MeritPresentation({ ...props }: MeritPresentationProps) {
  return (
    <div id='merit' className='mt-44 text-center '>
      <h2 className='text-3xl font-bold'>{props.title}</h2>
      <p className='mb-16 mt-5 text-base font-medium'>{props.text}</p>
      {props.boxes.map((box, index) => {
        return <MeritBoxPresentation key={index} {...box} />;
      })}
    </div>
  );
}

export default function MeritContainer() {
  const data: MeritPresentationProps = {
    title: 'メリット',
    text: 'ブランド強化から採用における差別化まで多面的なメリットを提供いたします',
    boxes: [
      {
        title: 'ブランドイメージの向上',
        text: '説明文が入ります。説明文が入ります。説明文がはいります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文がはいります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文がはいります。説明文が入ります。説明文が入ります',
      },
      {
        title: '認知度拡大',
        text: '説明文が入ります。説明文が入ります。説明文がはいります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文がはいります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文がはいります。説明文が入ります。説明文が入ります',
      },
      {
        title: '商品およびサービスの販売促進',
        text: '説明文が入ります。説明文が入ります。説明文がはいります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文がはいります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文がはいります。説明文が入ります。説明文が入ります',
      },
      {
        title: '差別化による採用強化',
        text: '説明文が入ります。説明文が入ります。説明文がはいります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文がはいります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文がはいります。説明文が入ります。説明文が入ります',
      },
    ],
  };
  return <MeritPresentation {...data} />;
}
