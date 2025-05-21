import React from 'react'
import ProductCard from '../ProductCards/ProductCard'

export default function Products() {
    const product=[
        {
            image:'src/assets/Product/product-1.png',
            title:'DG 1 Gram Gold Coin',
            cutie:'24k (99.99%)'
        },
        {
            image:'src/assets/Product/product-2.png',
            title:'DG 2 Gram Gold Coin',
            cutie:'24k (99.99%)'
        },
        {
            image:'src/assets/Product/product-3.png',
            title:'DG 2 Gram Gold Coin',
            cutie:'24k (99.99%)'
        },
        {
            image:'src/assets/Product/product-4.png',
            title:'DG 1 Gram Gold Coin',
            cutie:'24k (99.99%)'
        },
    ]
  return (
    <div className='mt-[40px]'>
        <div className='mb-10'>
            <h1 className='text-center text-white font-bold text-2xl mb-2'>What We Sell</h1>
            <p className='text-center text-gold-500'>Sell your gold and purchase more than just one piece</p>
        </div>
        <div className='w-[85%] m-auto flex items-center justify-between'>
        {product.map((product)=>{
            return <ProductCard image={product.image} title={product.title} cutie={product.cutie}/>
        })}
        </div>
    </div>
  )
}
