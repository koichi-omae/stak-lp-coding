import Image, { ImageProps } from 'next/image';
import { useRecoilValue } from 'recoil';
import { usePickUpModal } from '@/hooks/Index/Modal/PickUpModal';
import { pickUpModalState, PickUpModaStatelProps } from '@/model/Index/Modal/PickUpModal';
import CloseIcon from '~/img/modal-close-icon.png';

interface PickUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  imgae: ImageProps;
}

function PickUpModalPresentation({ ...props }: PickUpModalProps) {
  return (
    props.isOpen && (
      <div className='fixed left-0 top-0 z-10  h-screen w-full  bg-[#181818]/80'>
        <div className='text-right'>
          <Image
            className='ml-auto mr-9 mt-9 hover:cursor-pointer'
            src={CloseIcon}
            alt='close-icon'
            width={56}
            height={56}
            onClick={props.onClose}
          />
        </div>
        <div className='absolute inset-0 m-auto  h-[600px] w-[800px]'>
          <Image
            src={props.imgae.src}
            alt={props.imgae.alt}
            width={props.imgae.width}
            height={props.imgae.height}
            className='size-full'
          />
        </div>
      </div>
    )
  );
}

export default function PickUpModalContainer() {
  const pickUpModal = useRecoilValue<PickUpModaStatelProps>(pickUpModalState);
  const { openPickUpModal, closePickUpModal } = usePickUpModal();

  const data: PickUpModalProps = {
    isOpen: pickUpModal.isOpen,
    onClose: closePickUpModal,
    imgae: pickUpModal.image,
  };
  return <PickUpModalPresentation {...data} />;
}
