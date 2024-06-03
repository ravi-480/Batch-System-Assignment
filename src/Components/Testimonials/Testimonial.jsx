import React from 'react'

const Testimonial = () => {
  return (
    <>
<div  className="self-stretch flex flex-row items-start justify-center pt-0 pb-[129px] pr-0 pl-[168px] box-border max-w-full mq750:pl-[42px] mq750:box-border mq450:pb-[55px] mq450:box-border mq1050:pl-[84px] mq1050:pb-[84px] mq1050:box-border">
        <div className="w-[772px] flex flex-col items-start justify-start gap-[88px] max-w-full mq450:gap-[22px] mq1050:gap-[44px]">
          <div className="w-[455px] flex flex-col items-end justify-start pt-0 px-0 pb-[37px] box-border gap-[4px] max-w-full text-center">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-6">
              <div id="about" href="#about" className="relative tracking-[0.16em] leading-[28px] uppercase font-medium z-[8]">
                testimonial
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-29xl leading-[48px] capitalize font-bold font-inherit z-[8] mq450:text-10xl mq450:leading-[29px] mq1050:text-19xl mq1050:leading-[38px]">
              what our users say about us?
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full text-9xl">
            <div className="w-[442px] flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h3 className="m-0 self-stretch relative text-inherit leading-[28px] capitalize font-semibold font-inherit z-[8] mq450:text-3xl mq450:leading-[22px]">
                the best financial accounting app ever!
              </h3>
              <blockquote className="m-0 self-stretch h-[196px] relative text-lg leading-[28px] capitalize font-medium text-gray-500 inline-block z-[8]">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </blockquote>
            </div>
          </div>
          <div className="w-[757px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <b className="relative leading-[28px] capitalize font-semibold inline-block min-w-[97px] z-[8]">
              nick jonas
            </b>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial