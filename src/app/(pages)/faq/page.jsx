import React from 'react'


const data = [
    {
        title:"What is RebornGreen's mission, and how does it contribute to environmental initiatives worldwide?",
        des:"RebornGreen is committed to backing environmental initiatives worldwide. By using creative methods, we involve individuals and companies in the mission for a greener planet reminiscent of the pre-1990 era."
    },
    {
        title:"How much of my money goes into climate projects?",
        des:"Approximately 70% of the allocation is for environmental projects, 20% for initiatives to expand participation in environmental causes, and 10% for operational expenses. "
    },
    {
        title:"How do you know your impact is real?",
        des:"Our thorough due diligence and partner onboarding process encompass various criteria that partners must fulfill before joining us. This involves assessing the type and quality of forest restoration, their risk management practices in the field (such as fire and logging risks), and their emphasis on social impact, equity, fairness, ecological practices, reputation, credentials, and expertise. We collaborate with renowned environmental organizations globally to ensure reliability and credibility."
    },
    {
        title:"Why reinvest 20% of revenue in innovative ways that attract more people to create environmental impact?",
        des:"To promote environmental sustainability, the focus is on supporting and creating projects that engage consumers in environmental initiatives. Depending on revenue, the goal is to introduce a new project or product annually or biennially to educate and encourage participation in environmental projects."
    },
    {
        title:"What type of projects is RebornGreen supporting?",
        des:"Reforestation, habitat restoration, carbon avoidance and removal projects."
    },
    {
        title:"When will my tree be planted?",
        des:"The time between your contribution and the actual tree planting will vary depending on the region you have chosen and the time of year. Planting usually happens during the rainy season, when the soil provides optimum conditions for tree survival."
    },
]

export const metadata = {
  title: 'RebornGreen FAQ - Carbon Offsets & Tree Planting',
  description:'Find answers to your questions about carbon offsets, emissions, and tree planting with RebornGreen. Discover how our services support a greener planet.',
}

const page = () => {
  return (
    <div className='overflow-hidden h-full'>
      
  {/* section 1  */}
  <section className='w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto'>
        <div  className='w-full flex flex-col items-center justify-center'>
          <h1 className='text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[50px]  font-[500] text-[#3d3d3d]'>

            <span className=' text-[35px] text-[#14a800]'> FAQ</span> <br />
            Find Out Answers Here
          </h1>
          {/* <span className='w-[200px] h-1 bg-green'></span> */}
        </div>

        <div className="shadow-xl rounded-lg py-5 px-2  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
             

                {/* Acorian */}
                {
                    data?.map((item,index) =>(
                <div key={index} className="collapse collapse-arrow bg-white">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title mb-[0px] font-poppins text-[18px] font-normal text-[#504545]">
                 {item.title}
                  </div>
                  <div className="collapse-content">
                    <p className='text-[#919191] text-sm'>{item.des}</p>
                  </div>
                </div>
                    ))
                }
             
             
            </div>



          </section>
    </div>
  )
}

export default page