import { ImageProps } from 'next/image';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pickUpModalState } from '@/model/Index/Modal/PickUpModal';

export const usePickUpModal = () => {
  const pickUpModal = useRecoilValue(pickUpModalState);
  const setPickUpModal = useRecoilState(pickUpModalState)[1];

  const openPickUpModal = (imageProps: ImageProps) => {
    setPickUpModal({
      ...pickUpModal,
      isOpen: true,
      image: imageProps,
    });
  };

  const closePickUpModal = () => {
    setPickUpModal({
      ...pickUpModal,
      isOpen: false,
      image: {
        src: '',
        alt: '',
        width: 0,
        height: 0,
      },
    });
  };

  return {
    openPickUpModal,
    closePickUpModal,
  };
};
