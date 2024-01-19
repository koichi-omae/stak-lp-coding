import Image, { ImageProps } from 'next/image';

export interface FeatureCardProps {
  index?: number;
  title: string;
  image: ImageProps;
  text: string;
}

export default function FeatureCardPresentation({ ...props }: FeatureCardProps) {
  return (
    <div className=' flex h-[450px]  w-[348px] justify-normal rounded-xl border-2 border-white px-6'>
      <div className='mt-10 text-center'>
        <span className='inline-block rounded-full bg-white px-6 py-4 text-center text-3xl font-bold text-black'>
          {props.index}
        </span>
        <h3 className='mt-4 text-2xl font-semibold'>{props.title}</h3>
        <Image
          src={props.image.src}
          alt={props.image.alt}
          width={props.image.width}
          height={props.image.height}
          className='mx-auto my-6'
        />
        <p className='w-[300px] text-left font-medium '>{props.text}</p>
      </div>
    </div>
  );
}
