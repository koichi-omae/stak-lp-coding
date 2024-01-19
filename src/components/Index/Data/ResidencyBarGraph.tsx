export default function ResidencyBarGraphContainer() {
  return (
    <div className='mt-7'>
      <div className='flex  gap-4'>
        <div className='relative flex h-[50px] w-[120px]  items-center justify-center bg-[#E94709]'>
          <span className=' absolute  font-sans-jp text-lg font-bold'>広島</span>
        </div>
        <div>
          <p className='ml-2 text-left font-condensed text-[46px] font-bold'>
            31<span className='font-sans text-lg font-bold'>%</span>
          </p>
        </div>
      </div>
      <div className='flex  gap-4'>
        <div className='relative flex h-[50px] w-[198px]  items-center justify-center bg-[#E94709]'>
          <span className=' absolute  font-sans-jp text-lg font-bold'>広島県外（国内）</span>
        </div>
        <div>
          <p className='ml-2 text-left font-condensed text-[46px] font-bold'>
            55<span className='font-sans text-lg font-bold'>%</span>
          </p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <div className='flex h-[50px] w-[27px]  items-center justify-center bg-[#00AFAD]'></div>
        <p className='font-sans-jp font-bold '>フィリピン</p>
        <div>
          <p className='ml-2 text-left font-condensed text-[46px] font-bold'>
            5.4<span className='font-sans text-lg font-bold'>%</span>
          </p>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <div className='flex h-[50px] w-[12px]  items-center justify-center bg-[#00AFAD]'></div>
        <p className='font-sans-jp font-bold '>台湾</p>
        <div>
          <p className='ml-2 text-left font-condensed text-[46px] font-bold'>
            2.6<span className='font-sans text-lg font-bold'>%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
