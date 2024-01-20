import Image, { ImageProps } from 'next/image';

export interface PickUpCardProps {
  title: string;
  image: ImageProps;
  text: string;
  onOpenModal: (imageProps: ImageProps) => void;
}

export default function PickUpCardPresentation({ ...props }: PickUpCardProps) {
  return (
    <div
      onClick={() => props.onOpenModal(props.image)}
      className={` h-[600px] w-full bg-[#2B2B2B] px-10 pb-12 pt-10`}
    >
      <h3 className='text-left font-sans text-xl font-bold'>{props.title}</h3>

      <div className='my-9 size-[408px]'>
        <Image
          src={props.image.src}
          alt={props.image.alt}
          width={props.image.width}
          height={props.image.height}
          className='size-full hover:cursor-pointer'
        />
      </div>
      <p className='font-sans text-sm'>{props.text}</p>
    </div>
  );
}
