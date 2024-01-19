import Image, { ImageProps } from 'next/image';

export interface InfluenceCardProps {
  image: ImageProps;
  titles: string[];
  text: {
    num: number;
    unit: string;
  };
}

export default function InfluenceCardPresentation({ ...props }: InfluenceCardProps) {
  return (
    <div className='rounded-lg bg-[#2B2B2B]'>
      <Image
        src={props.image.src}
        alt={props.image.alt}
        width={props.image.width}
        height={props.image.height}
        className='mx-auto mt-14'
      />
      <h4 className='mt-6'>
        {props.titles.map((title, index) => {
          if (title === 'B.LEAGUEチャンネル') {
            return (
              <>
                <span key={title} className=' text-sm font-normal text-[#CECECE] '>
                  {title}
                </span>
                <br />
              </>
            );
          } else {
            return (
              <>
                <span key={title} className='text-xl font-bold'>
                  {title}
                </span>
                <br />
              </>
            );
          }
        })}
      </h4>
      <p className={`${props.titles.length === 1 ? 'mt-9' : 'mt-4'}`}>
        <span className='font-condensed text-[100px]'>{props.text.num}</span>
        <span className='text-3xl font-bold'>{props.text.unit}</span>
      </p>
    </div>
  );
}
