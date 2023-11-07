'use client'
import Image from 'next/image'
import Description from './components/description'
import ImageGrid from './components/imageGrid'
import Sidebar from '../../components/Sidebar'
import React from 'react'

const postImage = [['/img1.png', '/img2.png', '/img3.png'],
                    ['/img4.jpeg', '/img5.jpeg', '/img6.jpeg'],
                    ['/img7.jpeg', '/img8.jpeg', '/img9.jpeg']]

const postTitle = ['Another day in paradise', 'Mouritius Diaries', 'Diving in the Maldives']

const postLocation = ['Leh, Ladakh', 'Mouritius', 'Maldives']

const postDate = ['2021-06-01', '2021-06-01', '2021-06-01']

const postDescription = [`Nestled in the heart of the mighty Himalayas, Leh Ladakh is a destination that seems to exist in a world of its own. With its breathtaking landscapes, ancient monasteries, and a unique culture that's a blend of Tibetan and Indian influences, this high-altitude region is a traveler's dream come true.

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

Leh Ladakh is a place where the journey is as rewarding as the destination. The stark, high-altitude landscapes, the serene monasteries, and the warm-hearted locals make it a destination that will forever be etched in my memory. It's a destination that reminds us of the raw, untouched beauty of our planet. #LadakhDiaries #HimalayanEscape`,

`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus. Risus in hendrerit gravida rutrum quisque non tellus. Sagittis eu volutpat odio facilisis mauris sit amet. Laoreet non curabitur gravida arcu ac tortor. Orci nulla pellentesque dignissim enim sit. Turpis in eu mi bibendum. Egestas congue quisque egestas diam. Risus at ultrices mi tempus. Sem nulla pharetra diam sit. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet volutpat consequat mauris. Scelerisque eu ultrices vitae auctor.

Facilisis magna etiam tempor orci eu. Lorem mollis aliquam ut porttitor leo a diam. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Mauris nunc congue nisi vitae suscipit tellus mauris a. Nulla porttitor massa id neque aliquam vestibulum morbi. Sem viverra aliquet eget sit. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Aliquet nibh praesent tristique magna sit. Vulputate ut pharetra sit amet. Mauris vitae ultricies leo integer malesuada nunc. Nisi vitae suscipit tellus mauris a.

Donec adipiscing tristique risus nec feugiat in fermentum. Convallis aenean et tortor at risus viverra. Enim sed faucibus turpis in eu mi bibendum neque. Adipiscing elit duis tristique sollicitudin nibh. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Sit amet nisl suscipit adipiscing bibendum. Vulputate sapien nec sagittis aliquam. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim ut sem viverra aliquet eget sit amet. Ut porttitor leo a diam sollicitudin tempor id.

Ornare aenean euismod elementum nisi quis eleifend quam. Viverra orci sagittis eu volutpat. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Hac habitasse platea dictumst vestibulum. Eget nullam non nisi est sit. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Ac tortor dignissim convallis aenean et tortor at risus viverra. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Nisl nisi scelerisque eu ultrices. Lectus nulla at volutpat diam.

Tellus integer feugiat scelerisque varius morbi enim nunc. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Velit dignissim sodales ut eu sem integer vitae justo. Morbi non arcu risus quis varius quam quisque. Donec enim diam vulputate ut pharetra. Non blandit massa enim nec dui nunc. Vitae elementum curabitur vitae nunc sed velit dignissim. Aliquet nec ullamcorper sit amet risus. Magna fringilla urna porttitor rhoncus dolor. Mi bibendum neque egestas congue quisque egestas diam. Ridiculus mus mauris vitae ultricies leo integer malesuada. Risus in hendrerit gravida rutrum quisque non. Ultrices neque ornare aenean euismod. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.`,
`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus. Risus in hendrerit gravida rutrum quisque non tellus. Sagittis eu volutpat odio facilisis mauris sit amet. Laoreet non curabitur gravida arcu ac tortor. Orci nulla pellentesque dignissim enim sit. Turpis in eu mi bibendum. Egestas congue quisque egestas diam. Risus at ultrices mi tempus. Sem nulla pharetra diam sit. Massa placerat duis ultricies lacus sed turpis tincidunt. Sit amet volutpat consequat mauris. Scelerisque eu ultrices vitae auctor.

Facilisis magna etiam tempor orci eu. Lorem mollis aliquam ut porttitor leo a diam. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Mauris nunc congue nisi vitae suscipit tellus mauris a. Nulla porttitor massa id neque aliquam vestibulum morbi. Sem viverra aliquet eget sit. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Aliquet nibh praesent tristique magna sit. Vulputate ut pharetra sit amet. Mauris vitae ultricies leo integer malesuada nunc. Nisi vitae suscipit tellus mauris a.

Donec adipiscing tristique risus nec feugiat in fermentum. Convallis aenean et tortor at risus viverra. Enim sed faucibus turpis in eu mi bibendum neque. Adipiscing elit duis tristique sollicitudin nibh. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Sit amet nisl suscipit adipiscing bibendum. Vulputate sapien nec sagittis aliquam. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Enim ut sem viverra aliquet eget sit amet. Ut porttitor leo a diam sollicitudin tempor id.

Ornare aenean euismod elementum nisi quis eleifend quam. Viverra orci sagittis eu volutpat. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Hac habitasse platea dictumst vestibulum. Eget nullam non nisi est sit. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Ac tortor dignissim convallis aenean et tortor at risus viverra. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Tellus cras adipiscing enim eu turpis egestas pretium aenean. Nisl nisi scelerisque eu ultrices. Lectus nulla at volutpat diam.

Tellus integer feugiat scelerisque varius morbi enim nunc. Orci sagittis eu volutpat odio facilisis mauris sit amet massa. Velit dignissim sodales ut eu sem integer vitae justo. Morbi non arcu risus quis varius quam quisque. Donec enim diam vulputate ut pharetra. Non blandit massa enim nec dui nunc. Vitae elementum curabitur vitae nunc sed velit dignissim. Aliquet nec ullamcorper sit amet risus. Magna fringilla urna porttitor rhoncus dolor. Mi bibendum neque egestas congue quisque egestas diam. Ridiculus mus mauris vitae ultricies leo integer malesuada. Risus in hendrerit gravida rutrum quisque non. Ultrices neque ornare aenean euismod. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.`]

export default function Post() {

    var [currentPost, setCurrentPost] = React.useState(0);


    React.useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'ArrowLeft') {
            // Go to the previous post
            setCurrentPost((prevPost) => Math.max(prevPost - 1, 0));
          } else if (e.key === 'ArrowRight') {
            // Go to the next post
            setCurrentPost((prevPost) => Math.min(prevPost + 1, postImage.length - 1));
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          // Remove the event listener when the component unmounts
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    // construct post object
    const post = {
        title: postTitle,
        location: postLocation,
        date: postDate,
        description: postDescription
    }




    // add a button on the top right to go to /feed
    return (
        <>
            <Sidebar />

            <div className="w-screen overflow-y-hidden	 flex justify-center items-center">
                <div className="flex flex-row align-middle justify-center max-h-[calc(100vh-60px)]">
                    <div className="flex flex-col w-1/2 justify-center items-center overflow-hidden"> 
                        <ImageGrid images={postImage[currentPost]} location={postLocation[currentPost]} />
                    </div>
                    <div id="divider" className="border-r-2 border-gray-100"></div>
                    <div className="flex flex-col w-1/2 overflow-y-scroll">
                        <Description post={{title: postTitle[currentPost], location: postLocation[currentPost], date: postDate[currentPost], description: postDescription[currentPost]}} />
                    </div>
                </div>
            </div>
        </>


    )
}
