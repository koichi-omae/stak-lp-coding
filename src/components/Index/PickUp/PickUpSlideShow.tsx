'use client';

import { useState } from 'react';
import PickUpCardPresentation, { PickUpCardProps } from './PickUpCard';
import Image3 from '~/img/hero-bg.png';
import Image1 from '~/img/menu-card-1.png';
import Image2 from '~/img/menu-card-2.png';

interface PickUpSlideShowProps {
  index: number;
  cards: PickUpCardProps[];

  containerStyle?: React.CSSProperties;
  prevOnClick?: () => void;
  nextOnClick?: () => void;
  goToSlide: (index: number) => void;
}

function PickUpSlideShowPresentation({ ...props }: PickUpSlideShowProps) {
  return (
    <>
      <div className='relative mx-auto mt-16 flex w-[1100px] items-center  justify-center overflow-x-hidden'>
        <div className='flex w-full gap-14 justify-self-center px-8' style={props.containerStyle}>
          {props.cards.map((card, index) => {
            return <PickUpCardPresentation key={card.title} {...card} />;
          })}
        </div>
        <button
          className='absolute left-0 size-16 rounded-full bg-[#E94709] text-2xl font-bold'
          onClick={props.prevOnClick}
        >
          ＜
        </button>
        <button
          className='absolute right-0 size-16 rounded-full bg-[#E94709] text-2xl font-bold'
          onClick={props.nextOnClick}
        >
          ＞
        </button>
      </div>
      j
      <div className='mt-9 flex items-center justify-center gap-3'>
        {props.cards.map((_, index) =>
          index === props.cards.length - 1 ? null : (
            <button
              key={index}
              onClick={() => props.goToSlide(index)}
              className={`size-[18px] rounded-full ${index === props.index ? 'bg-[#E94709]' : 'bg-white'}`}
            ></button>
          ),
        )}
      </div>
    </>
  );
}

export default function PickUpSlideShowContainer() {
  const cards: PickUpCardProps[] = [
    {
      title: 'メニュータイトル1',
      image: {
        src: Image1,
        alt: 'image1',
        width: 408,
        height: 408,
      },
      text: 'メニューの補足が入ります。メニューの補足が入ります。',
    },
    {
      title: 'メニュータイトル2',
      image: {
        src: Image2,
        alt: 'image2',
        width: 408,
        height: 408,
      },
      text: 'メニューの補足が入ります。メニューの補足が入ります。',
    },
    {
      title: 'メニュータイトル3',
      image: {
        src: Image3,
        alt: 'image3',
        width: 408,
        height: 408,
      },
      text: 'メニューの補足が入ります。メニューの補足が入ります。',
    },
    {
      title: 'メニュータイトル4',
      image: {
        src: Image1,
        alt: 'image4-1',
        width: 408,
        height: 408,
      },
      text: 'メニューの補足が入ります。メニューの補足が入ります。',
    },
    {
      title: 'メニュータイトル5',
      image: {
        src: Image3,
        alt: 'image5-3',
        width: 408,
        height: 408,
      },
      text: 'メニューの補足が入ります。メニューの補足が入ります。',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    currentSlide === cards.length - 2
      ? setCurrentSlide(0)
      : setCurrentSlide((currentSlide + 1) % cards.length);
  };

  const prevSlide = () => {
    (currentSlide - 1 + cards.length) % cards.length === cards.length - 1
      ? setCurrentSlide(cards.length - 2)
      : setCurrentSlide((currentSlide - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const containerStyle = {
    transition: 'transform 0.5s ease',
    transform: `translateX(-${currentSlide * 545}px)`,
  };

  const data: PickUpSlideShowProps = {
    index: currentSlide,
    cards: cards,
    containerStyle: containerStyle,
    prevOnClick: prevSlide,
    nextOnClick: nextSlide,
    goToSlide: goToSlide,
  };

  return <PickUpSlideShowPresentation {...data} />;
}
