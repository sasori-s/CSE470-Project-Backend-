import useFetch from '../../hooks/useFetch'
import './propertyList.css'

const PropertyList = () => {

    const{data, laoding, error} = useFetch("/hotels/countByType")

    const images = [
        "https://c0.wallpaperflare.com/preview/33/202/452/neon-street-neon-light-street-view.jpg" , 
        "https://c4.wallpaperflare.com/wallpaper/42/3/754/interior-design-mansions-wallpaper-preview.jpg", 
        "https://c4.wallpaperflare.com/wallpaper/787/399/647/life-resort-travel-vacation-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/653/585/146/life-resort-house-architecture-wallpaper-preview.jpg", 
        "https://c1.wallpaperflare.com/preview/28/103/698/architecture-ceiling-chairs-chandelier.jpg" 

    ]
  return (
    <div className='pList'>
        {laoding ? ("loading") : (
        <>
        {data && 
            images.map((img, i) =>(

                <div className="pListItem" key={i}>
            <img src={img} 
            alt="" 
            className="pListImg" />
            <div className="pListTitles">
                <h1>{data[i]?.type}</h1>
                <h2>{data[i]?.count} {data[i]?.type}</h2>
            </div>
        </div>
            ))
        }

         </>)}

    </div>

  )
}

export default PropertyList