export default function GenderPieChartContainer() {
  return (
    <div className='relative mt-6 size-[272px]'>
      <div className='gender-pie-chart'></div>
      <div className='gender-text1 absolute'>
        <p className='text-center text-white'>
          <span className='font-condensed text-sm font-bold'>男性</span>
          <br />
          <span className='-mt-2 inline-block font-condensed text-[52px]'>
            55<span className='font-sans text-xl font-bold'>%</span>
          </span>
        </p>
      </div>
      <div className='gender-text2 absolute'>
        <p className='text-center text-white'>
          <span className='font-condensed text-sm font-bold'>女性</span>
          <br />
          <span className='-mt-2 inline-block font-condensed text-[52px]'>
            45<span className='font-sans text-xl font-bold'>%</span>
          </span>
        </p>
      </div>
    </div>
  );
}
