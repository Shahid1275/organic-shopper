import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='text-center mb-16'>
        <Title text1={'ABOUT'} text2={'US'} />
        <p className='mt-4 text-lg text-gray-500 max-w-3xl mx-auto'>
          Discover the essence of pure, natural care with Organic Shopper
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-12 items-center mb-20'>
        <div className='lg:w-1/2'>
          <img 
            className='w-full rounded-lg shadow-lg object-cover h-[400px]' 
            src={assets.about_img} 
            alt="Organic products" 
          />
        </div>
        <div className='lg:w-1/2'>
          <h2 className='text-3xl font-semibold text-gray-800 mb-6'>Our Story</h2>
          <div className='space-y-6 text-gray-600 leading-relaxed'>
            <p>
              Welcome to Organic Shopper, where nature's purity meets modern self-care. 
              We are dedicated to crafting premium, plant-based products that honor both 
              your wellbeing and the environment. Our carefully formulated shampoos, soaps, 
              and creams contain only the finest natural ingredients, completely free from 
              harsh chemicals, parabens, and synthetic additives.
            </p>
            <p>
              Born from a passion for sustainable living, Organic Shopper was founded on 
              the principle that effective personal care shouldn't compromise your health 
              or the planet's wellbeing. Each product represents our commitment to ethical 
              sourcing, environmental responsibility, and uncompromising quality.
            </p>
          </div>
        </div>
      </div>

      <div className='bg-gray-50 rounded-xl p-8 mb-20'>
        <h3 className='text-2xl font-semibold text-center text-gray-800 mb-8'>Our Mission</h3>
        <p className='text-gray-600 max-w-4xl mx-auto text-center leading-relaxed'>
          At Organic Shopper, we're redefining personal care through sustainable innovation. 
          Our mission is to provide effective, natural alternatives that nourish your body while 
          protecting the environment. We meticulously source each ingredient, prioritize 
          eco-friendly packaging, and maintain transparent practices to empower conscious 
          consumers in making healthier choices for themselves and the planet.
        </p>
      </div>

      <div className='text-center mb-16'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
        <p className='mt-4 text-lg text-gray-500 max-w-3xl mx-auto'>
          What sets Organic Shopper apart in the world of natural care
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-8 mb-20'>
        <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'>
          <div className='text-emerald-600 text-2xl mb-4'>✓</div>
          <h3 className='text-xl font-semibold text-gray-800 mb-4'>Uncompromising Quality</h3>
          <p className='text-gray-600'>
            Every product undergoes rigorous testing to meet our high standards. We use only 
            premium natural ingredients, ethically sourced and scientifically proven for their 
            beneficial properties.
          </p>
        </div>
        
        <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'>
          <div className='text-emerald-600 text-2xl mb-4'>✓</div>
          <h3 className='text-xl font-semibold text-gray-800 mb-4'>Sustainable Practices</h3>
          <p className='text-gray-600'>
            From formulation to packaging, sustainability guides every decision. Our products 
            are cruelty-free, use biodegradable ingredients, and come in environmentally 
            responsible packaging.
          </p>
        </div>
        
        <div className='bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'>
          <div className='text-emerald-600 text-2xl mb-4'>✓</div>
          <h3 className='text-xl font-semibold text-gray-800 mb-4'>Expert Formulations</h3>
          <p className='text-gray-600'>
            Developed by natural skincare experts, our products combine traditional wisdom with 
            modern science to deliver effective results you can see and feel.
          </p>
        </div>
      </div>

      <div className='bg-emerald-50 rounded-xl p-12 text-center'>
        <h3 className='text-2xl font-semibold text-gray-800 mb-4'>Join Our Natural Care Movement</h3>
        <p className='text-gray-600 max-w-2xl mx-auto mb-6'>
          Experience the difference that truly natural, thoughtfully crafted products can make 
          in your daily routine and for our planet.
        </p>
        <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300'>
          Discover Our Products
        </button>
      </div>
    </div>
  )
}

export default About;