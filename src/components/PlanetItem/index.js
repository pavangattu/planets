import './index.css'

const PlanetItem = props => {
  const {eachItem} = props
  const {imageUrl, name, description} = eachItem

  return (
    <div className="planets-container">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="name-head">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default PlanetItem
