import React from 'react'
import Info from '../info'
import FullTitle from '../fullTitle/fullTitle'
import { expendLeft, expendRight } from '../accordian/infoAccordian';
import AccordianItem from '../accordian/AccordianItem';

function Questions() {
     const [expandedLeft, setExpandedLeft] = React.useState(expendLeft[0].id);
     const [expandedRight, setExpandedRight] = React.useState(expendRight[0].id);
  const handleChangeLeft = (panel) => (event, newExpanded) => {
    setExpandedLeft(newExpanded ? panel : expandedLeft);
  };

  const handleChangeRight = (panel) => (event, newExpanded) => {
    setExpandedRight(newExpanded ? panel : expandedRight);
  };
    return (
        <>
            <section id='question' className='max-md:py-15 py-30 bg-indigo-50'>
                <div className="container  flex flex-col items-center">
                    <div className='text-center'>
                        <FullTitle text={Info[8].text} />
                        <h3 className='mt-2.5 mb-18.75 text-[25px] max-md:text-22'>سوالات پر تکرار</h3>
                    </div>
                    <div className='grid max-lg:grid-cols-1 grid-cols-2 gap-7 '>
                     <div className='flex flex-col gap-4'>
                        {expendRight.map(item => (
                     <AccordianItem 
                     key={item.id}
                     id={item.id}
                     expanded={expandedRight}
                     handleChange={handleChangeRight}
                     title={item.title}
                     content={item.content}
                     />
                        ))}
                     </div>
                     <div className='flex flex-col gap-4'>
                             {expendLeft.map(item => (
                     <AccordianItem 
                     key={item.id}
                     id={item.id}
                     expanded={expandedLeft}
                     handleChange={handleChangeLeft}
                     title={item.title}
                     content={item.content}
                     />
                        ))}
                     </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Questions