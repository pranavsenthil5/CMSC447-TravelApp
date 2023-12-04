import { Tag, TagGroup } from 'rsuite';
import compromise from 'compromise';

interface DescriptionProps {
    post: {
        title: string,
        location: string,
        date: string,
        description: string
        tags: string[]
    }
}

export default function Description({ post }: DescriptionProps) {
    const doc = compromise(post.description);
    var locations = doc.places().out('array');
    const hashtags = doc.hashTags().out('array');

    // Remove special characters from locations
    for (let i = 0; i < locations.length; i++) {
        locations[i] = locations[i].replace(/[^a-zA-Z ]/g, "");
        locations[i] = locations[i].replace(/\s+/g, ' ').trim();
    }
    // convert to set to remove duplicates
    const locationsSet = new Set(locations);

    // add tags to locations
    for (let i = 0; i < post.tags.length; i++) {
        locationsSet.add( post.tags[i]);
    }

    locations = Array.from(locationsSet);

    return (
        <div className="flex flex-col w-full h-full p-8 text-black mt-20">
            <div className="flex flex-row mb-10">

                <div className="text-3xl font-sans hover:text-blue-600">
                    <span className="font-light">{post.title}</span>
                </div>
            </div>

            <div className="flex flex-row mb-10">
                <div className="text-xl font-sans hover:text-blue-600">
                    <span className="font-light">{post.date}</span>
                </div>
            </div>


            <div className='flex flex-row mb-10'>
                <TagGroup>
                    {locations.map((location: string, index: number) => (
                        <Tag color="green" key={index}>{location}</Tag>
                    ))}
                    {hashtags.map((hashtag: string, index: number) => (
                        <Tag color="blue" key={index}>{hashtag}</Tag>
                    ))}
                </TagGroup>
            </div>

            <div className="flex flex-row mb-10">
                <div className="flex flex-row mb-10">
                    <div>
                        {post.description.split('\n').map((item, key) => {

                            // if the paragraph has a hashtag, then add a background color to it
                            if (item.includes('#')) {
                                return (
                                    <>
                                        <span key={key}>
                                            {item.split(' ').map((word, key) => {
                                                if (word.includes('#')) {
                                                    return (
                                                        <>
                                                            <Tag color="blue" key={key}>{word}</Tag>
                                                            <span> </span>
                                                        </>
                                                    );
                                                }
                                                else {
                                                    return (
                                                        <>
                                                            <span key={key}>{word}</span>
                                                            <span> </span>
                                                        </>
                                                    );
                                                }
                                            })}
                                        </span>
                                        <br />
                                    </>
                                );
                            }
                            else {
                                return (
                                    <>
                                        <span key={key}>{item}</span>
                                        <br />
                                    </>
                                );
                            }
                        })}
                    </div>
                </div>
            </div >
            <br />
            
        </div >

    )
}

