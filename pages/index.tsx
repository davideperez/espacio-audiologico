import type { NextPage } from 'next'
import Content from '../components/Content'
import Feature from '../components/Feature'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <>
    <Hero />
    <Feature />
    <Content />
    </>
  )
}

export default Home
