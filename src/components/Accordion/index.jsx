'use client'
import { useState } from 'react';
import Image from 'next/image';

const AccordionItem = ({ isHeader, isFooter, title, content, isOpen, onToggle, hideToggle, isProductAndServices }) => {
  const mappedData = ['Types', 'Materials', 'Compliance Standards', 'Fasteners and Gaskets',"Pipes and Tubes","Fittings","Coating Options","Sizes Available","Standards Compliance","Acidizing and Cementing Products"];
  
  const renderContent = () => {
    if(typeof content === 'string'){
    const splittedData = content.split('\n');
      return splittedData.map((line, index) => {
        const keyword = mappedData.find(keyword => line.startsWith(keyword));
        if (keyword) {
          const [key, value] = line.split(': ');
          return (
            <div key={index}>
              <p className='font_calibri font-bold text-lg'>{key}:<span className='font-[300] ml-2'>{value}</span></p>
            </div>
          );
        } else if (line.trim() !== '') {
          return <p key={index}>{line}</p>;
        }
        return null;
      });
    }
    
  };
  
 
  return (
    <div className={`${isFooter && 'pb-3'} border-b border-[#8B8B8B80]`}>
      <button
        className={`w-full text-left ${isProductAndServices ? `${isOpen ? 'pb-[20px]' : 'pb-[18px] lg:pb-[30px]'} pt-[18px] lg:pt-[30px]` : (isHeader || hideToggle || isFooter) ? 'pt-4' : 'p-4 hover:bg-gray-100'} focus:outline-none`}
        onClick={onToggle}
      >
        <div className="flex justify-between items-center">
          <span className={`${isHeader && 'uppercase'} ${(isHeader && !isOpen) ? '' : 'font-bold'} text-lg text-theme-main`}>
            {title}
            {(isHeader && isOpen) &&
              <span className='block mt-2 w-[18px] h-[2px] bg-theme-main' />
            }
          </span>
          {
            isHeader ? <>
              {isOpen ?
                <Image src='/svg/arrow_down.svg' alt='arrow_downward' width={17} height={17} /> :
                <Image src='/svg/arrow_forward_nav.svg' alt='arrow_forward_nav' width={17} height={17} />
              }
            </> :
              hideToggle ? <></> : isOpen ?
                <span className='font-bold text-lg text-theme-main'>-</span> :
                <span className='font-bold text-lg text-theme-main'>+</span>
          }
        </div>
      </button>
      {isOpen && (
        <div className={`${isProductAndServices ? "pb-[18px] lg:pb-[30px]" : isHeader ? "" : hideToggle ? "pb-[17px] pt-4 md:pt-0" : "pt-[14px] pb-6 px-4"}`}>
          {/* <div className='font_calibri font-light text-[12px] md:text-lg'> {content}</div> */}
          <div className='font_calibri font-light text-[12px] md:text-lg'> {renderContent()}</div>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ isHeader, isFooter, data = [], isOpen, hideToggle, isFirstOpen, isProductAndServices }) => {
  const [openIndex, setOpenIndex] = useState(isFirstOpen ? 0 : null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isFooter={isFooter}
          isHeader={isHeader}
          content={item.content}
          hideToggle={hideToggle}
          isOpen={isOpen || openIndex === index}
          onToggle={() => toggleAccordion(index)}
          isProductAndServices={isProductAndServices}
        />
      ))}
    </div>
  );
};

export default Accordion;
