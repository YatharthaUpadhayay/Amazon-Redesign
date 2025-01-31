import './App.css'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import VerySmallShoppingTile1 from './components/VerySmallShoppingTile1'
import VideoTile from './components/VideoTile'
import VerySmallShoppingTile2 from './components/VerySmallShoppingTile2'

function App() {
  
  return (
    <>
      <NavBar />
      
      <div className='universalContainer'>
        <Carousel />
        
        <VerySmallShoppingTile1 
        tileImage="tileImage.jpg"
        name="Handcrafted Nocturnal Owl Decor-Elegant night time charm"
        prize="599"
        mrp="999.00"
        discount="64"
        isLimitedTime={true}
        isAmazonChoice={true}
        />

        <VideoTile 
          title="Beast Games - Season 1"
          subTitle="Prime Video: Recommended for you"
          description="A thrilling web series where contestants from around the globe compete in mind-boggling challenges, extreme stunts, and high-stakes games to win life-changing prizes. Hosted by an eccentric philanthropist, every episode pushes creativity, courage, and teamwork to the limit!"
          image="thumbnail.png"
        />

        <VerySmallShoppingTile2 
          title="Get bulk discounts + Top B2B Deals"
          linkName="Register Now"
          link="#"
          image="tileImage2.jpg"
        />


      </div>
    </>
  )
}

export default App
