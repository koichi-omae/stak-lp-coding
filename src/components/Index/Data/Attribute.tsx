import AttributeCardPresentation, { AttributeCardProps } from './AttributeCard';

export interface AttributeProps {
  title: string;
  cards: AttributeCardProps[];
}

export default function AttributePresentation({ ...props }: AttributeProps) {
  return (
    <div className='mt-20'>
      <div className='mt-16 flex items-center justify-center gap-11'>
        <div>
          <h3 className='text-left text-2xl font-bold'>{props.title}</h3>
          <div className='mt-16 grid grid-cols-3 gap-7'>
            {props.cards.map((card, index) => {
              return <AttributeCardPresentation key={index} {...card} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
