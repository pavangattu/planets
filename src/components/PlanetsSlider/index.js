import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="bg-container" testid="planets">
      <h1 className="head">PLANETS</h1>
      <Slider {...settings} className="bg-container-slider">
        {planetsList.map(each => (
          <PlanetItem eachItem={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
