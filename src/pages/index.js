import { Inter } from 'next/font/google'
import NavbarProject from '@/components/navbar/NavbarProject'
import Header from '@/components/header/Header'
import ShoppingCart from '@/components/SoppingCart/ShoppingCart'
import Carousel from '@/components/carousel/Carousel'
import About_us from '@/components/about/About_us'
import Footer from '@/components/footer/Footer'
import ShoppingContextProvider from '@/context/ShoppingContextProvider'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-gradient-to-t from-gray-100 to-gray-400 min-h-screen' id="homepage">
      <NavbarProject />
      <Header />
      <Carousel />
      <div id="cart">
      <ShoppingCart />
      </div>
      <div id="aboutus">
      <About_us />
      </div>
      <div id="footer">
      <Footer />
      </div>
    </main>
  )
}