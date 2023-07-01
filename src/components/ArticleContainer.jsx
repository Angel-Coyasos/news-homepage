import React from 'react'
import { Article } from './Article'

import imageRetroPcs from '../assets/images/image-retro-pcs.jpg'
import imageTopLaptops from '../assets/images/image-top-laptops.jpg'
import imageGamingGrowth from '../assets/images/image-gaming-growth.jpg'


export const ArticleContainer = () => {
  return (
    <section className='mt-6 md:flex md:flex-wrap md:gap-10'>
        <Article
            image={imageRetroPcs}
            number="01"
            title="Reviving Retro PCs"
            text="What happens when old PCs are given modern upgrades?"
        />
        <Article
            image={imageTopLaptops}
            number="02"
            title="Top 10 Laptops of 2022"
            text="Our best picks for various needs and budgets."
        />
        <Article
            image={imageGamingGrowth}
            number="03"
            title="The Growth of Gaming"
            text="How the pandemic has sparked fresh opportunities."
        />
    </section>
  )
}
