
import Hero from '../component/Hero'
import HomeAbout from '../component/HomeAbout'
import Scroll from '../component/scroll'
import Dyk from '../component/Dyk'
import Numbers from '../component/Numbers'
import Goals from '../component/Goals'
import Testimonials from '../component/testimonials'
import Articles from '../component/articles'
import FAQ from '../component/FAQ'
import CTA from '../component/CTA'
import Footer from '../component/Footer'

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <Dyk />
      <Numbers />
      <Goals />
      <Testimonials />
      <Articles />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}