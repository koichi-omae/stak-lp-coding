export default function AgePieChartContainer() {
  return (
    <div className='relative mt-6 size-[272px]'>
      <div className='age-pie-chart'></div>
      <div className='text1 absolute'>
        <p className='text-center text-white'>
          <span className='font-condensed text-xs'>13~17</span>
          <br />
          <span className='font-condensed text-2xl'>8</span>
          <span className='font-sans text-[8px]'>%</span>
        </p>
      </div>
      <div className='text2 absolute'>
        <p className='text-center text-white'>
          <span className='font-condensed text-base'>18~24</span>
          <span className='-mt-3 inline-block font-condensed text-[52px]'>
            20<span className='font-sans text-xl'>%</span>
          </span>
        </p>
      </div>
      <div className='text3 absolute'>
        <p className='text-center font-condensed text-white'>
          <span className='text-base'>25~34</span>
          <br />
          <span className='-mt-3 inline-block font-condensed text-[52px]'>
            26<span className='font-sans text-xl'>%</span>
          </span>
        </p>
      </div>
      <div className='text4 absolute'>
        <p className='text-center font-condensed text-white'>
          <span className='text-base'>35~44</span>
          <br />
          <span className='-mt-3 inline-block font-condensed text-[40px]'>
            23<span className='font-sans text-xl'>%</span>
          </span>
        </p>
      </div>
      <div className='text5 absolute'>
        <p className='text-center font-condensed text-white'>
          <span className='text-base'>44~54</span>
          <br />
          <span className='-mt-3 inline-block font-condensed text-[40px]'>
            17<span className='font-sans text-xl'>%</span>
          </span>
        </p>
      </div>
      <div className='text6 absolute'>
        <p className='text-center font-condensed text-white'>
          <span className='text-xs'>54~</span>
          <br />
          <span className='-mt-3 inline-block font-condensed text-xl'>
            6<span className='font-sans text-[8px]'>%</span>
          </span>
        </p>
      </div>
    </div>
  );
}
