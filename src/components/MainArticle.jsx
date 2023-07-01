

import imgMobile from '../assets/images/image-web-3-mobile.jpg';
import imgDesktop from '../assets/images/image-web-3-desktop.jpg';

export const MainArticle = () => {
  return (
    <section className='mb-12'>

        <picture>
            <source media="(max-width: 640px)" srcSet={imgMobile} />
            <source media="(min-width: 641px)" srcSet={imgDesktop} />
            <img src={imgMobile} alt="Articulo principal imagen" />
        </picture>

      <div className='sm:flex'>

        <div className='flex-1 py-6'>
          <h2 className='text-[40px] font-bold sm:text-[58px] leading-none'>The Bright Future of Web 3.0?</h2>
        </div>

        <div className='flex-1'>
          <p className='text-[13px] sm:text-[15px] sm:pt-9 mb-10'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <button className='bg-softRed w-[185px] h-[48px] uppercase text-offWhite hover:bg-veryDarkBlue'>Read more</button>
        </div>

      </div>
        
       

    </section>
  )
}



