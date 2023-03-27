import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://c4.wallpaperflare.com/wallpaper/1000/732/59/spring-8k-uhd-8k-asia-wallpaper-preview.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://c4.wallpaperflare.com/wallpaper/910/24/10/night-artwork-futuristic-city-cyberpunk-wallpaper-preview.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>523 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://c4.wallpaperflare.com/wallpaper/161/296/845/nature-sea-water-turquoise-wallpaper-preview.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>

    </div>
  )
}
export default Featured