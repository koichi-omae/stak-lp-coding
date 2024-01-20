import { useState } from 'react';
import { PickUpCardProps } from '@/components/Index/PickUp/PickUpCard';

export const useSlide = (cards: PickUpCardProps[]) => {
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

  return { currentSlide, nextSlide, prevSlide, goToSlide };
};
