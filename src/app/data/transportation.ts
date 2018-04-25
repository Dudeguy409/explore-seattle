
import { BlurbList } from "../models/blurb-list";

export const TRANSPORTATION: BlurbList = {
    title: "Transportation",
    description: ["Public transportation in Seattle is not as good as it could be, but depending on your needs, it may be good enough.  However, if you want to take trips outside of the city, you will need to rent a car.", "Besides driving, the two main ways to get around are Uber/Lyft and buses."],
    blurbs: [
        {
            title: "Taxis",
            description: ["Uber and Lyft are perhaps the only things that are significantly cheaper in Seattle than elsewhere. I have never had a trip around downtown cost more than $15.  Uber Pool and Lyft Line are also available in Seattle.  On the other hand, simple trips across either bridge to the east side can cost $30 to $80.  In that case, take a bus."]
        },
        {
            title: "Buses",
            description: ["Buses cost $2.50 per ride, usually.  The official map of the bus routes is pretty cryptic in my opinion, so I would recommend just using Google Maps."]
        },
        {
            title: "The Link (Subway)",
            description: ["The Seattle Link light rail is another option, but it is pretty limited on where it can go. It is especially useful for getting to and from the airport.  It runs north/south between the Airport and UW.  It has two main advantages.  First, it costs between $2 and $3.  Second, the trip between UW and SeaTac Airport takes a consistent 45 minutes because it runs mostly underground.  While this is twice as slow as a taxi on off times, it is considerably faster than a taxi during rush hour."]
        },
        {
            title: "Useless Forms of Transit",
            description: ["Seattle has two other forms of transit that are largely useless: above-ground streetcars and a monorail.  I’m bringing them up only so that you don’t accidentally use them.  Streetcars might be useful if you want to travel between Capitol Hill and Pioneer Square, but that’s about it.  In case you are curious, their problem is that they travel laughably short distances."]
        }
    ]
}