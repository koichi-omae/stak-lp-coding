import { ImageProps } from 'next/image';
import { atom } from 'recoil';

export interface PickUpModaStatelProps {
  isOpen: boolean;
  image: ImageProps;
}

export const pickUpModalState = atom<PickUpModaStatelProps>({
  key: 'pickUpModalState',
  default: {
    isOpen: false,
    image: {
      src: '',
      alt: '',
      width: 0,
      height: 0,
    },
  },
});
