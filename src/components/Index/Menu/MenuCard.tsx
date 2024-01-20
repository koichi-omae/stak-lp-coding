import Image, { ImageProps } from 'next/image';

export interface MenuCardProps {
  stanps: ImageProps[];
  bgImage: string;
  cardTitles: string[];
  cardText: string;
  btn: {
    text: string;
    link: string;
  };
}

export function MenuCardPresentation({ ...props }: MenuCardProps) {
  return (
    <div>
      <div
        className={`relative flex h-[352px] w-[528px] items-center justify-center ${props.bgImage}`}
      >
        <div className='absolute inset-0 bg-[#000000]/50' />
        <div className='absolute left-4 top-5 flex items-center justify-center gap-2 '>
          {props.stanps.length > 1 ? (
            props.stanps.map((stanp, index) => {
              if (index + 1 !== props.stanps.length) {
                return (
                  <div key={stanp.alt} className='flex items-center gap-2'>
                    <Image
                      src={stanp.src}
                      alt={stanp.alt}
                      width={stanp.width}
                      height={stanp.height}
                    />
                    <span className='text-3xl'>×</span>
                  </div>
                );
              } else {
                return (
                  <Image
                    key={stanp.alt}
                    src={stanp.src}
                    alt={stanp.alt}
                    width={stanp.width}
                    height={stanp.height}
                  />
                );
              }
            })
          ) : (
            <Image
              key={props.stanps[0].alt}
              src={props.stanps[0].src}
              alt={props.stanps[0].alt}
              width={props.stanps[0].width}
              height={props.stanps[0].height}
            />
          )}
        </div>
        <div className='absolute text-center leading-none'>
          <h3 className='font-condensed text-[46px] text-white '>
            {props.cardTitles.map((cartTitle) => {
              return (
                <span key={cartTitle + props.cardText}>
                  {cartTitle}
                  <br />
                </span>
              );
            })}
          </h3>
          <p className='mt-7 text-[16px] font-semibold'>{props.cardText}</p>
        </div>
      </div>
      <div className='mt-11 text-center'>
        <button className='rounded-full border-4 border-white px-44 py-4 text-[20px] font-bold hover:border-[#E94709] hover:bg-[#E94709] hover:text-white'>
          {props.btn.text}
        </button>
      </div>
    </div>
  );
}
