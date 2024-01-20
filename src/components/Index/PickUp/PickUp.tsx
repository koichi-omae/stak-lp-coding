import PickUpSlideShowContainer from './PickUpSlideShow';

interface PickUpProps {
  title: string;
  text: string;
  children: React.ReactNode;
}

function PickUpPresentation({ ...props }: PickUpProps) {
  return (
    <div id='pickup' className='mt-44  bg-pickup-pattern bg-cover py-44'>
      <h2 className='text-center font-sans text-3xl font-bold'>{props.title}</h2>
      <p className='mt-5 text-center'>{props.text}</p>
      {props.children}
    </div>
  );
}

export default function PickUpContainer() {
  const data: PickUpProps = {
    title: 'PICK UPメニュー',
    text: '説明文が入ります。',
    children: <PickUpSlideShowContainer />,
  };
  return <PickUpPresentation {...data} />;
}
