import React from 'react'

export const Article = ( {image, number, title, text} ) => {
  return (
    <article className='flex md:w-[343px] h-[162px] md:flex-grow'>
      <div className='w-[100px] flex-none'>
        <img src={image} alt="imagen articulo" />
      </div>
      <div className='pl-6'>
        <p className='text-grayishBlue text-3xl mb-[10px] font-bold'>{number}</p>
        <h2 className='font-bold mb-[10px] hover:text-softOrange cursor-pointer'>{title}</h2>
        <p className='text-darkGrayishBlue'>{text}</p>
      </div>
    </article>
  )
}


  
  

  
 


  
  
  
  