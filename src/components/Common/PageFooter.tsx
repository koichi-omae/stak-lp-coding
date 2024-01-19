import Image, { ImageProps } from 'next/image';
import FacebookIconBlock from '~/img/facebook-icon-block.svg';
import FacebookIconHidden from '~/img/facebook-icon-hidden.svg';
import InstagramIconBlock from '~/img/instagram-icon-block.svg';
import InstagramIconHidden from '~/img/instagram-icon-hidden.svg';
import LineIconBlock from '~/img/line-icon-block.svg';
import LineIconHidden from '~/img/line-icon-hidden.svg';
import TicTokIconBlock from '~/img/tictok-icon-block.svg';
import TicTokIconHidden from '~/img/tictok-icon-hidden.svg';
import XIconBlock from '~/img/x-icon-block.svg';
import XIconHidden from '~/img/x-icon-hidden.svg';
import YoutubeIconBlock from '~/img/youtube-icon-block.svg';
import YoutubeIconHidden from '~/img/youtube-icon-hidden.svg';

interface PageFooterProps {
  copyrightNotice: string;
  icons: IconProps[];
}

interface IconProps {
  block: ImageProps;
  hidden: ImageProps;
}

function PageFooterPresentation({ ...props }: PageFooterProps) {
  return (
    <footer className='bg-[#2B2B2B] pb-5 pt-14 text-white'>
      <div className='flex items-center justify-center gap-2'>
        {props.icons.map((icon, index) => (
          <button
            key={icon.block.alt + icon.hidden.alt}
            className='group size-14 rounded-full bg-[#E94709]  hover:border-2 hover:border-[#E94709] hover:bg-white'
          >
            <Image
              src={icon.block.src}
              alt={icon.block.alt}
              width={icon.block.width}
              height={icon.block.height}
              className={`mx-auto ${icon.block.className}`}
            />
            <Image
              src={icon.hidden.src}
              alt={icon.hidden.alt}
              width={icon.hidden.width}
              height={icon.hidden.height}
              className={`mx-auto ${icon.hidden.className}`}
            />
          </button>
        ))}
      </div>
      <p className='mt-10 text-center font-sans-jp text-xs font-normal'>{props.copyrightNotice}</p>
    </footer>
  );
}

export default function PageFooterContainer() {
  const data: PageFooterProps = {
    copyrightNotice: '© 2023 stak, Inc. All Rights Reserved.',
    icons: [
      {
        block: {
          src: XIconBlock,
          alt: 'x-icon-block',
          width: 28,
          height: 28,
          className: 'block group-hover:hidden',
        },
        hidden: {
          src: XIconHidden,
          alt: 'x-icon-hidden',
          width: 28,
          height: 28,
          className: 'hidden group-hover:block',
        },
      },
      {
        block: {
          src: InstagramIconBlock,
          alt: 'instagram-icon-block',
          width: 24,
          height: 28,
          className: 'block group-hover:hidden',
        },
        hidden: {
          src: InstagramIconHidden,
          alt: 'instagram-icon-hidden',
          width: 24,
          height: 28,
          className: 'hidden group-hover:block',
        },
      },
      {
        block: {
          src: YoutubeIconBlock,
          alt: 'youtube-icon-block',
          width: 28,
          height: 28,
          className: 'block group-hover:hidden',
        },
        hidden: {
          src: YoutubeIconHidden,
          alt: 'youtube-icon-hidden',
          width: 28,
          height: 28,
          className: 'hidden group-hover:block',
        },
      },
      {
        block: {
          src: TicTokIconBlock,
          alt: 'tictok-icon-block',
          width: 28,
          height: 28,
          className: 'block group-hover:hidden',
        },
        hidden: {
          src: TicTokIconHidden,
          alt: 'tictok-icon-hidden',
          width: 28,
          height: 28,
          className: 'hidden group-hover:block',
        },
      },
      {
        block: {
          src: LineIconBlock,
          alt: 'line-icon-block',
          width: 24,
          height: 28,
          className: 'block group-hover:hidden',
        },
        hidden: {
          src: LineIconHidden,
          alt: 'line-icon-hidden',
          width: 24,
          height: 28,
          className: 'hidden group-hover:block',
        },
      },
      {
        block: {
          src: FacebookIconBlock,
          alt: 'facebook-icon-block',
          width: 17,
          height: 28,
          className: 'block group-hover:hidden',
        },
        hidden: {
          src: FacebookIconHidden,
          alt: 'facebook-icon-hidden',
          width: 17,
          height: 28,
          className: 'hidden group-hover:block',
        },
      },
    ],
  };
  return <PageFooterPresentation {...data} />;
}
