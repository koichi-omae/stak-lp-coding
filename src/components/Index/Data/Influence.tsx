import InfluenceCardPresentation, { InfluenceCardProps } from './InfluenceCard';

export interface InfluenceProps {
  title: string;
  cards: InfluenceCardProps[];
}

export default function InfluencePresentation({ ...props }: InfluenceProps) {
  return (
    <div className='mt-16'>
      <div className='mt-16 flex items-center justify-center gap-11'>
        <div>
          <h3 className='text-left text-2xl font-bold'>{props.title}</h3>
          <div className='mt-10 grid grid-cols-3 gap-7'>
            {props.cards.map((card, index) => {
              return <InfluenceCardPresentation key={index} {...card} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
