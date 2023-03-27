import useFetch from '../../hooks/useFetch.js'
import './featured.css'

const Featured = () => {

  const{data, laoding, error} = useFetch("/hotels/countByCity?cities=berlin,madrid,london")
  console.log(data[0])

  return (
    <div className='featured'>
      {laoding ? ("Lading please wait") :(<> <div className="featuredItem">
        <img src="https://c4.wallpaperflare.com/wallpaper/1000/732/59/spring-8k-uhd-8k-asia-wallpaper-preview.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Berlin</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://c4.wallpaperflare.com/wallpaper/910/24/10/night-artwork-futuristic-city-cyberpunk-wallpaper-preview.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Madrid</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://c4.wallpaperflare.com/wallpaper/161/296/845/nature-sea-water-turquoise-wallpaper-preview.jpg" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div> </>)}

    </div>
  )
}
export default Featured