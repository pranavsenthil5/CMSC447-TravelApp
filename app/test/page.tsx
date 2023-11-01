import Image from 'next/image'
import Description from './components/description'
import ImageGrid from './components/imageGrid'
import ProfileBar from './components/profilebar'




export default function Post() {

    const images = ['/img1.png',
        '/img2.png',
        '/img3.png',]

    const postTitle = 'Another day in paradise'
    const postLocation = 'Leh, Ladakh'
    const postDate = '2021-06-01'

    const postDescription = `Nestled in the heart of the mighty Himalayas, Leh Ladakh is a destination that seems to exist in a world of its own. With its breathtaking landscapes, ancient monasteries, and a unique culture that's a blend of Tibetan and Indian influences, this high-altitude region is a traveler's dream come true.

    Day 1: Arrival in Leh
    As the plane touched down at Leh's Kushok Bakula Rimpochee Airport, I was instantly greeted by the crisp mountain air and the panoramic views of snow-capped peaks. A quick acclimatization day was in order to adjust to the high altitude, so I spent my first day exploring Leh's charming market, savoring momos and thukpa, and admiring the intricate architecture of the Leh Palace.

    Day 2: Nubra Valley
    My journey continued to the enchanting Nubra Valley via the world's highest motorable road, Khardung La Pass. The stark yet surreal landscapes of the Hunder Sand Dunes were a sight to behold. I even got the chance to ride a Bactrian camel here, making for a truly unforgettable experience.

    Day 3: Pangong Lake
    A day trip to Pangong Lake, set at an elevation of 14,270 feet, was an absolute highlight of the trip. The ever-changing colors of the lake were mesmerizing, and I spent hours simply sitting by its shore, soaking in the tranquility and natural beauty.
    
    Day 4: Monasteries Galore
    Ladakh is famous for its monasteries, and I dedicated this day to exploring some of the most iconic ones, such as Thiksey, Hemis, and Shey Monastery. Each offered a unique glimpse into the spiritual and cultural aspects of the region, with their stunning architecture and serene surroundings.

    Day 5: Tso Moriri Lake
    My journey took me to the pristine Tso Moriri Lake, another jewel in Ladakh's crown. Surrounded by snow-capped peaks, the lake was a haven for birdwatching and a perfect spot for reflection and tranquility.
    
    Day 6: Adventure in the Air
    Leh Ladakh isn't just about serene landscapes; it's also a playground for adventure seekers. I tried my hand at paragliding and was rewarded with breathtaking aerial views of the region. The adrenaline rush was well worth it.
    
    Day 7: Local Cuisine
    I couldn't leave without savoring more Ladakhi dishes. The local cuisine is a delightful blend of flavors, with dishes like thukpa, momos, and the delicious apricot jam making my taste buds dance.

    Leh Ladakh is a place where the journey is as rewarding as the destination. The stark, high-altitude landscapes, the serene monasteries, and the warm-hearted locals make it a destination that will forever be etched in my memory. It's a destination that reminds us of the raw, untouched beauty of our planet. #LadakhDiaries #HimalayanEscape`


    // construct post object
    const post = {
        title: postTitle,
        location: postLocation,
        date: postDate,
        description: postDescription
    }


    // console.log(post.description)
    return (
        // <>
        // <div className="flex flex-row h-screen">
        //     {/* center the content in both the components */}
            
        //     <div className="flex flex-col w-1/2 justify-center items-center">
        //         <ImageGrid images={images} location={post.location} />
        //     </div>
        //     <div id="divider" className="border-r-2 border-gray-100"></div>
        //     <div className="flex flex-col w-1/2  h-screen overflow-auto">
        //         <Description post={post} />
        //     </div>
        // </div>
        
        // </>
        <ProfileBar />
    )
}
