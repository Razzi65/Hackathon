
import { Inter } from 'next/font/google'
import { Button, ButtonGroup } from '@chakra-ui/react'
import Header from '../components/header'
import Section1 from '../components/section1'
import Section2 from '@/components/section2'
import Section3 from '@/components/section3'
import Section4 from '@/components/section5'
import Section5 from '@/components/section5'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

    <Header/>

    <Section1/>

    <Section2/>
    
   <Section3/>

<Section5/>
    
    <Footer/>

  
    

    </>
  )
}
