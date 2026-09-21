export interface Venue {
  slug: string;
  name: string;
  address: string;
  website: string;
  description: string;
  category: string;
  schemaType: string;
  tip?: string;
}

export const venues: Venue[] = [
  {
    slug: 'barrelhouse-ballroom',
    name: 'Barrelhouse Ballroom',
    address: '1501 Long St, Chattanooga, TN 37408',
    website: 'https://www.barrelhouseballroom.com',
    description:
      'Barrelhouse Ballroom is a mid-size live music venue on Long Street in the South Side neighborhood. It books national touring acts and local and regional shows, with programming running most nights of the week across rock, hip-hop, country, and electronic genres. The main floor is standing room with a capacity around 750. The raised stage puts you within a few rows of the performers regardless of where you stand. A full bar runs along both sides of the room. The venue shares a building with Five Wits Brewing, so there is usually a beer worth drinking before or after a show. The booking calendar covers a wide range of genres, and the venue runs shows on a near-nightly schedule throughout the year. Parking in the surrounding Long Street lots is free.',
    category: 'Music Venue',
    schemaType: 'MusicVenue',
    tip: 'Parking is free in the lots along Long Street. Doors typically open 30 minutes before the first set.',
  },
  {
    slug: 'woodshop',
    name: 'The Woodshop Listening Room',
    address: '5500 Saint Elmo Avenue, Chattanooga, TN 37409',
    website: 'https://thewoodshoplisteningroom.com',
    description:
      'The Woodshop Listening Room sits on Saint Elmo Avenue in the St. Elmo neighborhood, at the foot of Lookout Mountain. It is one of Chattanooga\'s most regarded small music rooms, with a capacity under 300 and a seated format that treats performances as the main event. The programming runs toward Americana, folk, bluegrass, country, and acoustic songwriting — both touring artists and strong regional acts fill the calendar throughout the year. The bar serves before and during shows. Most performances are reserved seating, and tickets move fast. If a show sells out in advance, there is rarely any walk-up availability. The venue also hosts occasional private events and listening parties. It is a distinctly Chattanooga room in a distinctly Chattanooga neighborhood.',
    category: 'Music Venue',
    schemaType: 'MusicVenue',
    tip: 'Seating is limited and most shows sell out. Buy tickets ahead of time — walk-up availability is rare.',
  },
  {
    slug: 'the-signal',
    name: 'The Signal',
    address: '21 Choo Choo Ave, Chattanooga, TN 37402',
    website: 'https://www.thesignaltn.com',
    description:
      'The Signal is a standing room music venue on Choo Choo Avenue in downtown Chattanooga, a short walk from the Chattanooga Choo Choo hotel. Capacity is around 1,000. The booking ranges widely across indie rock, metal, hip-hop, electronic, country, and punk throughout the year. The room has a raised stage, bar service on both sides of the floor, and a layout that keeps sightlines clear from most spots. Most shows are 18 and over, though some are open to all ages. Tickets are sold through standard platforms and the venue runs general admission standing floor for most events. There is limited on-street parking nearby. The City Center Garage on Cherry Street is the closest reliable parking option for downtown shows.',
    category: 'Music Venue',
    schemaType: 'MusicVenue',
    tip: 'The Signal is 18+ for most shows. Check the event listing before you buy — some shows are all ages.',
  },
  {
    slug: 'songbirds',
    name: 'Songbirds',
    address: '206 W Main Street, Chattanooga, TN',
    website: 'https://venue.songbirds.org',
    description:
      'Songbirds is a guitar museum and live music venue at 206 West Main Street in downtown Chattanooga, adjacent to the Chattanooga Choo Choo. The museum holds one of the largest collections of vintage American guitars in the country, with instruments from the Golden Age of American music on display across multiple galleries. The attached concert venue hosts intimate performances ranging from acoustic showcases to ticketed music experiences, with a capacity under 300. Museum admission and concert tickets are sold separately. Combining both makes for a full evening. The museum is open Tuesday through Sunday, and the venue calendar runs independently of museum hours. Parking is available in the Choo Choo lot.',
    category: 'Music Venue',
    schemaType: 'MusicVenue',
    tip: 'Museum admission is separate from concert tickets. Combine both for a full evening — the collection is worth an hour.',
  },
  {
    slug: 'barking-legs',
    name: 'Barking Legs Theater',
    address: '1307 Dodds Avenue, Chattanooga, TN 37404',
    website: 'https://www.barkinglegs.org',
    description:
      'Barking Legs Theater is a small nonprofit performing arts space on Dodds Avenue in the Ridgedale neighborhood, about two miles east of downtown Chattanooga. Founded in 1986, it presents contemporary dance, experimental theater, independent film, and community performances with a consistent focus on local and regional artists. The space seats around 100 people. The proximity to performers makes every show feel immediate regardless of what is being presented. Ticket prices are kept low by design. Most events cost under $20, and many are free. The theater runs arts education programming and residencies for working artists throughout the year. It is one of the few venues in Chattanooga dedicated entirely to contemporary and experimental performance.',
    category: 'Theater',
    schemaType: 'PerformingArtsTheater',
    tip: 'Seating is flexible and casual — arrive early if you want a specific spot. The space is small and the audience is close to the performers.',
  },
  {
    slug: 'hunter-museum',
    name: 'Hunter Museum of American Art',
    address: '10 Bluff View Ave, Chattanooga, TN 37403',
    website: 'https://www.huntermuseum.org',
    description:
      'The Hunter Museum of American Art sits on a bluff above the Tennessee River in the Bluff View Art District of downtown Chattanooga. Its permanent collection spans American art from the early 1800s to the present, with works in painting, sculpture, photography, and studio glass. The museum occupies three connected buildings: a 1905 Classical Revival mansion, a 1975 addition, and a 2005 contemporary wing. Traveling exhibitions rotate throughout the year. The museum hosts opening events, member evenings, and community programs on a regular schedule. The outdoor terrace has a direct view of the river below. Admission is free on the first Thursday evening of each month. Ticket prices vary for special exhibitions.',
    category: 'Museum',
    schemaType: 'Museum',
    tip: 'The outdoor terrace has one of the best views of the Tennessee River in the city. Free on the first Thursday evening of each month.',
  },
  {
    slug: 'first-horizon',
    name: 'First Horizon Pavilion',
    address: '1826 Reggie White Blvd, Chattanooga, TN 37408',
    website: 'https://chattanoogamarket.com',
    description:
      'First Horizon Pavilion is an outdoor amphitheater and event space at 1826 Reggie White Boulevard on the south side of Chattanooga. It serves as the home of the weekly Chattanooga Market every Sunday and hosts large-scale concerts and seasonal festivals throughout the year. The venue has a covered pavilion structure with fixed seating and a broad open lawn that expands capacity for bigger events. It sits within walking distance of the riverfront and the Tennessee Riverwalk trail. Parking is free in the surrounding lots. For market days, the space fills with local farmers, food vendors, artisans, and live music from morning through early afternoon. For concerts, the lawn opens to general admission seating on blankets and chairs.',
    category: 'Outdoor Amphitheater',
    schemaType: 'Landform',
  },
  {
    slug: 'chattanooga-market',
    name: 'Chattanooga Market at First Horizon Pavilion',
    address: '1826 Reggie White Blvd, Chattanooga, TN 37408',
    website: 'https://chattanoogamarket.com',
    description:
      'The Chattanooga Market is a weekly outdoor market held every Sunday at First Horizon Pavilion on the south side of Chattanooga. Vendors include local farmers, specialty food producers, bakers, plant sellers, artisans, and craftspeople. Live music runs throughout the morning. The market operates year-round with a larger vendor footprint from spring through fall. It is one of the longest running farmers markets in the region and draws several thousand visitors on a typical Sunday. Dogs on leash are welcome. Parking is free in the surrounding lots off Reggie White Boulevard. Hours run roughly 9 AM to 3 PM on most Sundays, though seasonal hours vary slightly. The market is entirely outdoors, so dress for the weather.',
    category: 'Outdoor Market',
    schemaType: 'LocalBusiness',
    tip: 'Go early for the best selection from produce vendors. Parking is free in the surrounding lots.',
  },
  {
    slug: 'sequatchie-cove-farm',
    name: 'Sequatchie Cove Farm',
    address: 'Dunlap, TN (approx. 45 minutes from Chattanooga)',
    website: 'https://www.sequatchiecovefarm.com',
    description:
      'Sequatchie Cove Farm is a working organic farm and creamery in Dunlap, Tennessee, about 45 minutes from downtown Chattanooga in the Sequatchie Valley. The farm raises grass-fed livestock and produces cheese and dairy alongside its vegetable operation. It hosts seasonal farm to table dinners, workshops on sustainable agriculture, and community events on the property throughout the year. Dinners are held outdoors on the farm grounds, often with local chefs preparing the menu. Events are limited in size and sell out weeks or months in advance. The farm newsletter is the most reliable way to learn about upcoming dates before they go public. The drive through the Sequatchie Valley is part of the draw.',
    category: 'Farm',
    schemaType: 'LocalBusiness',
    tip: 'Events sell out weeks in advance. Sign up for the farm newsletter to get early notice of new dates.',
  },
  {
    slug: 'oddstory',
    name: 'Oddstory Brewing Co.',
    address: '1503 Campbell St, Chattanooga, TN 37409',
    website: 'https://www.oddstorybrewing.co',
    description:
      'Oddstory Brewing Co. is a craft brewery on Campbell Street in the South Side neighborhood, near the Choo Choo corridor. The taproom pours a rotating selection of house brewed beers, with styles ranging from crisp lagers and wheat beers to hoppy IPAs and seasonal releases. The outdoor patio draws a crowd on warm evenings and the indoor space has a relaxed, neighborhood feel. Events run throughout the week including pub trivia, bingo nights, and live music, with a more active schedule on weekends. The brewery is open seven days a week. It is one of the more active event hosts on the South Side, so checking the calendar before you go pays off. No food kitchen on site, but outside food is typically welcome.',
    category: 'Brewery',
    schemaType: 'BreweryFoodEstablishment',
  },
  {
    slug: 'acquarium',
    name: 'Tennessee Aquarium',
    address: '1 Broad St, Chattanooga, TN 37402',
    website: 'https://www.tnaqua.org',
    description:
      'The Tennessee Aquarium sits at the north end of the Chattanooga riverfront at 1 Broad Street and is one of the largest freshwater aquariums in the world. It spans two connected buildings: River Journey, which covers freshwater ecosystems from mountain streams to the Gulf of Mexico, and Ocean Journey, which explores saltwater environments. Together the buildings hold more than 10,000 animals. General admission covers both buildings. The aquarium hosts public events throughout the year including camps for children, conservation fundraisers, evening events for adults, and seasonal programming tied to the calendar. It is a major anchor in the downtown tourism district. Parking is available in the aquarium garage on Chestnut Street for a fee.',
    category: 'Aquarium',
    schemaType: 'Aquarium',
  },
  {
    slug: 'creative-discovery-museum',
    name: 'Creative Discovery Museum',
    address: '321 Chestnut St, Chattanooga, TN 37402',
    website: 'https://www.cdmfun.org',
    description:
      'The Creative Discovery Museum is a hands-on children\'s museum at 321 Chestnut Street in downtown Chattanooga, a short walk from the Tennessee Aquarium. The exhibits span multiple floors and include an art studio, a musician\'s workshop with real instruments, a rooftop RiverPlay area with a climbing structure, a toddler zone for young children, and science exhibits with interactive demonstrations. The museum is designed for children from toddler age through early middle school, though the art studio draws older kids and adults as well. Year-round programming includes school holiday camps, weekend workshops, birthday party packages, and seasonal events. Admission covers all permanent exhibits. Parking is available in the aquarium garage one block over.',
    category: 'Children\'s Museum',
    schemaType: 'Museum',
  },
  {
    slug: 'crabtree-farms',
    name: 'Crabtree Farms',
    address: '1000 E 30th St, Chattanooga, TN 37407',
    website: 'https://crabtreefarms.org',
    description:
      'Crabtree Farms is a nonprofit urban farm on East 30th Street on the north side of Chattanooga. The farm operates on a 22-acre property and grows produce for community donation while running educational programs in urban agriculture, cooking, and ecology. The farm serves as both a working production site and a community gathering space. Events on the property include farm dinners, volunteer days, educational workshops, and seasonal celebrations. The surrounding neighborhood is primarily residential, and the farm functions as a green anchor for the area. Chickens, bees, and seasonal crops are visible throughout the growing season. Volunteer opportunities are open to the public through the farm\'s website. The farm also sells CSA shares and operates a seasonal farm stand.',
    category: 'Urban Farm',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'chattanooga-brewing',
    name: 'Chattanooga Brewing Co.',
    address: '730 Chestnut St., Chattanooga, TN 37408',
    website: 'https://www.chattabrew.com',
    description:
      'Chattanooga Brewing Co. is one of the original craft breweries in the city, operating from a 15,000-square-foot facility on Chestnut Street in the Southside neighborhood since 2012. The tap list rotates through year-round core beers and seasonal releases across a range of styles. The taproom runs a regular event calendar including trivia nights, live music, comedy shows, and special release parties. Brewery tours of the production floor are available on weekends and include a tasting. The space has indoor bar seating and a covered outdoor patio. It sits within a few blocks of other South Side venues, making it a common starting point for a night out in the neighborhood.',
    category: 'Brewery',
    schemaType: 'BreweryFoodEstablishment',
  },
  {
    slug: 'wanderlinger',
    name: 'WanderLinger Brewing Company',
    address: '55 Station Street, Chattanooga, TN 37408',
    website: 'https://www.wanderlinger.com',
    description:
      'WanderLinger Brewing Company is a craft brewery on Station Street in the South Side neighborhood, a few blocks from the Chattanooga Choo Choo. The taproom pours a rotating selection of house beers with an emphasis on Belgian-style ales alongside American craft staples. The room has a neighborhood bar feel — low-lit, comfortable, and not trying to be a destination spot. Live music shows up on weekends, and the brewery hosts community events, trivia nights, and taproom parties throughout the week. There is a patio out back that opens when weather allows. The brewery is smaller than some other South Side options, which keeps the crowd manageable. Open daily.',
    category: 'Brewery',
    schemaType: 'BreweryFoodEstablishment',
  },
  {
    slug: 'walker-theatre',
    name: 'The Walker Theatre',
    address: '709 Broad St, Chattanooga, TN 37402',
    website: 'https://www.ticketmaster.com/the-walker-theatre-tickets-chattanooga/venue/222568',
    description:
      'The Walker Theatre is a restored 1921 venue at 709 Broad Street in downtown Chattanooga. The theater seats 1,900 and books national touring concerts, comedy shows, Broadway productions, and performing arts events throughout the year. The interior features the original architectural detailing from the 1920s, preserved through a major renovation completed in 2019. The renovation upgraded the technical systems and patron amenities while keeping the historic look of the house. Sightlines are excellent from most of the orchestra and mezzanine sections. The theater sits one block from Miller Park and several blocks from the Tennessee Aquarium, making it an easy add-on to a downtown evening. Parking is available in the City Center Garage on Cherry Street, about a half block walk.',
    category: 'Theater',
    schemaType: 'PerformingArtsTheater',
    tip: 'Parking is available in the City Center Garage on Cherry Street, a short walk from the front entrance.',
  },
  {
    slug: 'soldiers-sailors-auditorium',
    name: 'Soldiers & Sailors Memorial Auditorium',
    address: '399 McCallie Ave, Chattanooga, TN 37402',
    website: 'https://www.ticketmaster.com/soldiers-and-sailors-memorial-auditorium-tickets-chattanooga/venue/222564',
    description:
      'Soldiers and Sailors Memorial Auditorium is a 3,600-seat performing arts venue at 399 McCallie Avenue in Chattanooga, built in 1924 as a memorial to veterans of World War I. It is the largest indoor performance space in Chattanooga and one of the most prominent civic venues in the region. The auditorium hosts Broadway touring productions, large-scale concerts, family shows, circus performances, and community events throughout the year. The building\'s exterior features a neoclassical facade, and the interior retains much of its original character. The auditorium is owned and operated by the City of Chattanooga. Parking is available on McCallie Avenue and in nearby surface lots. The venue books events through Ticketmaster and its on-site box office.',
    category: 'Theater',
    schemaType: 'PerformingArtsTheater',
  },
  {
    slug: 'reflection-riding',
    name: 'Reflection Riding Arboretum and Nature Center',
    address: '400 Garden Road, Chattanooga, TN 37419',
    website: 'https://www.reflectionriding.org',
    description:
      'Reflection Riding Arboretum and Nature Center is a 300-acre natural sanctuary at the foot of Lookout Mountain on Garden Road in Chattanooga. The grounds include woodland trails, a native plant arboretum, restored wildlife habitats, a children\'s discovery loop, and a wildlife rehabilitation center that cares for injured animals. A slow-paced driving loop covers most of the property for those who cannot walk the full distance. The arboretum has a strong wildflower season in spring and a notable raptor flight in fall. Admission is $16 for adults. The center runs educational programs for schools and families, hosts seasonal member events, and operates a small gift shop. Reservations are recommended on weekends during peak seasons.',
    category: 'Nature Center',
    schemaType: 'LocalBusiness',
    tip: 'A day pass costs $16. Reserve ahead online — entry can fill up on weekends, especially in fall.',
  },
  {
    slug: 'lookouts',
    name: 'Erlanger Park',
    address: '2658 Pipe Way, Chattanooga, TN 37408',
    website: 'https://www.lookouts.com',
    description:
      'Erlanger Park is the home stadium of the Chattanooga Lookouts, the Double-A affiliate of the Cincinnati Reds, located on the south bank of the Tennessee River at Pipe Way. The stadium seats around 7,500. Games run from April through September with a full schedule that includes theme nights, postgame fireworks, giveaway dates, and promotional events throughout the season. Upper deck seats offer a direct view of the Tennessee River and the Market Street Bridge. The ballpark has a berm area in left field for lawn seating and a dedicated kids zone near the first base concourse. Single game tickets start around $10. Parking is available in lots along Hawk Street and Reggie White Boulevard for a small fee.',
    category: 'Baseball Stadium',
    schemaType: 'StadiumOrArena',
    tip: 'Parking is available in the nearby lots for a small fee. Gate 1 off Hawk Street is the main public entrance.',
  },
  {
    slug: 'riverfront-nights',
    name: "Ross's Landing",
    address: '100 Riverfront Pkwy, Chattanooga, TN 37402',
    website: 'https://www.riverfrontnights.com',
    description:
      "Ross's Landing is a riverfront park at 100 Riverfront Parkway in downtown Chattanooga, directly below the Market Street Bridge at the edge of the Tennessee River. The park serves as both a public gathering space and a concert venue. From May through Labor Day, it hosts TVFCU Riverfront Nights, a free Saturday evening outdoor concert series that draws several thousand people each week. The series books local and regional acts across a range of genres, and events run rain or shine most weeks. The park has open lawn space, a river overlook, and connects to the Tennessee Riverwalk trail. Admission is free and no tickets are required. Bring a lawn chair or blanket. Parking is available in lots off Riverfront Parkway.",
    category: 'Outdoor Venue',
    schemaType: 'Park',
    tip: 'Bring a lawn chair or blanket. The park fills up fast on nights with well-known headliners.',
  },
  {
    slug: 'five-wits-brewing',
    name: 'Five Wits Brewing Company',
    address: '1501 Long St, Chattanooga, TN 37408',
    website: 'https://fivewitsbrewing.com',
    description:
      'Five Wits Brewing Company is a craft brewery on Long Street in the South Side neighborhood, operating out of the same building as Barrelhouse Ballroom. The brewery produces a rotating selection of house brewed beers ranging from sessionable ales to bolder seasonal releases. The taproom has bar seating and a neighborhood feel, and it draws a pre-show crowd from Barrelhouse events on most nights. Community events, trivia nights, and taproom parties show up on the calendar throughout the year. Five Wits leans local — the clientele is a mix of neighborhood regulars and South Side visitors exploring the corridor. The Barrelhouse location means there is usually something worth doing before or after a show without leaving the building. Open most evenings through the week.',
    category: 'Brewery',
    schemaType: 'BreweryFoodEstablishment',
  },
  {
    slug: 'tailgate-brewery',
    name: 'TailGate Brewery Chattanooga',
    address: '1464 Market St, Chattanooga, TN 37408',
    website: 'https://www.tailgatebeer.com',
    description:
      'TailGate Brewery Chattanooga is the Chattanooga outpost of the Nashville-based craft brewing group, located at 1464 Market Street in the South Side neighborhood. The building was previously Terminal Brewhouse, one of Chattanooga\'s earlier craft spots. TailGate operates a 7-barrel brewhouse on site, so the beers are brewed locally at this location. The tap list covers the core TailGate lineup alongside Chattanooga-specific releases. The taproom is one of the larger indoor spaces in the South Side, with room for groups and a covered patio along the side. Events include pub trivia, live music nights, and seasonal release parties. It sits within a short walk of Barrelhouse Ballroom, Oddstory, and the Choo Choo corridor. Kitchen service is available.',
    category: 'Brewery',
    schemaType: 'BreweryFoodEstablishment',
  },
  {
    slug: 'hutton-smith',
    name: 'Hutton & Smith Brewing Co.',
    address: '431 E Main St, Chattanooga, TN 37408',
    website: 'https://huttonandsmithbrewing.com',
    description:
      'Hutton and Smith Brewing Co. is a craft brewery at 431 East Main Street in the Southside neighborhood, a few blocks from the Choo Choo hotel. It is one of the most well regarded craft beer stops in the city, known for a balanced lineup that spans clean lagers, IPAs, stouts, and Belgian-influenced ales. The taproom has a long bar with views into the brewhouse, a shuffleboard table in the main room, and an outdoor patio. The place is open seven days a week and busy most evenings. Events include weekly pub trivia, occasional live music, and taproom parties tied to seasonal beer releases. No food kitchen on site — food trucks rotate through the patio area on select evenings.',
    category: 'Brewery',
    schemaType: 'BreweryFoodEstablishment',
  },
  {
    slug: 'flat-top-mountain-farm',
    name: 'Flat Top Mountain Farm',
    address: '638 Bowman Cemetery Rd, Soddy-Daisy, TN 37379',
    website: 'https://www.flattopmountainfarm.com',
    description:
      'Flat Top Mountain Farm is a family-run farm on Bowman Cemetery Road in Soddy-Daisy, Tennessee, about 25 minutes north of Chattanooga. The farm sits at elevation with open views across the surrounding terrain. Events on the property include trail runs, fall harvest festivals, and community gatherings held on the farm grounds. The trail run events use the natural terrain of the farm and surrounding area. The farm has open fields and wooded sections that make it a distinctive event setting compared to flatland venues. Events are held primarily in the cooler months from fall through early spring, with fall harvest activities the most popular draw. Check the farm calendar for upcoming events, as the schedule varies from year to year.',
    category: 'Farm',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'happy-valley-farms',
    name: 'Happy Valley Farms',
    address: 'Rossville, GA',
    website: 'https://www.happyvalleyfarms.com',
    description:
      'Happy Valley Farms is a farm event venue in Rossville, Georgia, just south of the Tennessee state line and about 10 minutes from downtown Chattanooga. The farm hosts seasonal outdoor events including fall harvest festivals, markets, and community gatherings on the property. The setting is rural and open, with the kind of space that suits family friendly outdoor programming. Events vary from year to year and are typically concentrated in the fall season. Rossville is one of the closest farm venues to Chattanooga proper, which makes it an easy add-on to a south-of-the-city day. Check the farm calendar and social channels for current event announcements, as the schedule is not always listed far in advance.',
    category: 'Farm',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'quail-run-farm',
    name: 'Quail Run Farm',
    address: '1345 Birmingham Hwy, Chattanooga, TN 37419',
    website: 'https://quailrunfarmtn.com',
    description:
      'Quail Run Farm is a working farm at 1345 Birmingham Highway in Chattanooga, near the base of Lookout Mountain off Highway 11. The farm produces a range of crops and livestock on its acreage and hosts seasonal events on the property throughout the year. Programming includes farm dinners, community workshops, and agricultural education events. The farm setting is close to the city but feels distinctly rural — the drive down Birmingham Highway puts you away from the South Side corridor quickly. Events are typically small and intimate, consistent with the working farm atmosphere. The farm calendar is not always updated far in advance, so checking social channels is the most reliable way to find upcoming events.',
    category: 'Farm',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'lula-lake',
    name: 'Lula Lake Land Trust',
    address: 'Lookout Mountain, GA',
    website: 'https://www.lulalake.org',
    description:
      'Lula Lake Land Trust preserves more than 4,000 acres on Lookout Mountain in Walker County, Georgia, about 20 minutes from downtown Chattanooga. The land is privately owned and opens to the public on the first and last weekend of each month. The main attractions are Lula Lake and Lula Falls, a 100-foot waterfall accessible via a short trail from the gate. Additional trails reach smaller waterfalls, creek crossings, and a swimming hole below the main falls. The hike to the falls is about two miles round trip from the lower gate. Entry is $16 per person and must be reserved in advance through the land trust website. Slots open at the start of each month and sell out within hours during spring and fall.',
    category: 'Nature Preserve',
    schemaType: 'Park',
    tip: 'Reservations sell out fast, especially in spring and fall. Book at the start of each month when slots open.',
  },
  {
    slug: 'ketners-mill',
    name: "Ketner's Mill",
    address: '658 Ketner Mill Lane, Whitwell, TN 37397',
    website: 'https://www.ketnersmill.org',
    description:
      "Ketner's Mill is a historic 1882 grist mill and festival grounds on Ketner Mill Lane in Whitwell, Tennessee, about an hour from Chattanooga in Marion County. The mill sits on a creek in a wooded hollow and has been in continuous operation for most of its history. It hosts the annual Ketner's Mill Country Arts Fair each fall, typically held over a weekend in October. The fair draws several hundred juried artists and craftspeople alongside food vendors and live music on the mill grounds. Attendance runs into the thousands over the weekend. The drive through Marion County is part of the experience — the route passes through the Sequatchie Valley and into the hill country east of the ridge. Admission to the fair is charged at the gate.",
    category: 'Historic Site',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'lookout-winery',
    name: 'Lookout Winery',
    address: '11848 Hwy 41, Guild, TN 37340',
    website: 'https://www.lookoutwinery.com',
    description:
      'Lookout Winery is a winery and event venue at 11848 Highway 41 in Guild, Tennessee, about 45 minutes northwest of Chattanooga along the Tennessee River Gorge. The winery sits with views of Raccoon Mountain and the river below, making it one of the more scenic event venues in the region. The tasting room pours sixteen wines and the menu includes wood fired pizza made on site. Live music events run on Saturdays and special occasion weekends throughout the year. The venue hosts seasonal festivals, wine release events, and private gatherings on the property. The drive along Highway 41 follows the river through the gorge. No reservations are required for regular tasting room visits.',
    category: 'Winery',
    schemaType: 'Winery',
  },
  {
    slug: 'mash-and-hops',
    name: 'Mash and Hops Craft Beers',
    address: '168 First Street NE, Cleveland, TN 37311',
    website: 'https://www.mashandhops.com',
    description:
      'Mash and Hops Craft Beers is a craft beer bar and bottle shop at 168 First Street NE in downtown Cleveland, Tennessee, about 30 minutes north of Chattanooga. The tap list rotates through a broad selection of small batch and regional craft beers, typically running 24 or more handles at any given time. The bottle and can shop carries additional options to take home. Events run throughout the week — a monthly craft beer share where attendees bring bottles to open together, and a regular singles social night. The bar has indoor seating and a sidewalk area outside. It is one of the better craft beer destinations outside of Chattanooga proper and worth the drive for the selection alone.',
    category: 'Bar',
    schemaType: 'BarOrPub',
  },
  {
    slug: 'the-diving-mouse',
    name: 'The Diving Mouse',
    address: '201 Keith Street Suite 31, Cleveland, TN 37311',
    website: 'https://thedivingmouse.com',
    description:
      'The Diving Mouse is a bar and live music venue at 201 Keith Street in downtown Cleveland, Tennessee, about 30 minutes north of Chattanooga. The venue runs live music most Friday and Saturday nights with doors at 4:30 PM, covering country, rock, and regional touring acts. The weekly event calendar includes music bingo, karaoke, and an open mic night. The space has a central bar, indoor seating, and an outdoor patio that draws a crowd in warmer weather. It is one of the busier live music spots in Cleveland and a consistent anchor for downtown foot traffic on weekend evenings. The venue is casual. Check the calendar for show-specific age requirements and start times.',
    category: 'Bar',
    schemaType: 'BarOrPub',
  },
  {
    slug: 'take-root-studio',
    name: 'Take Root Studio',
    address: '3575 Adkisson Dr NW Suite 1010, Cleveland, TN 37312',
    website: 'https://takeroot.studio',
    description:
      'Take Root Studio is a creative studio and community gathering space at 3575 Adkisson Drive in Cleveland, Tennessee. It hosts the Rooted Night Market on the first Saturday of each month — a free outdoor market with local vendors, food, and live music running into the evening. The market draws a mix of shoppers, families, and neighbors who use it as a regular social anchor. The studio also runs classes and workshops in art, yoga, wellness, and community programming throughout the year. The space is inside a commercial development near Highway 64, accessible from Chattanooga in about 30 minutes. Vendor applications for the market are open to local makers and food producers through the studio website.',
    category: 'Studio',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'cambridge-square',
    name: 'Cambridge Square',
    address: '9453 Bradmore Ln, Ooltewah, TN 37363',
    website: 'https://www.cambridgesquaretn.com',
    description:
      'Cambridge Square is a mixed-use development at 9453 Bradmore Lane in Ooltewah, Tennessee, about 20 minutes east of downtown Chattanooga. The development includes restaurants, retail shops, and a central plaza that serves as the outdoor concert venue. Free live music runs every Saturday evening from late April through October on the plaza stage, covering a range of genres from week to week. The series draws neighborhood residents and visitors from across Hamilton County and beyond. The surrounding restaurants stay busy on concert nights, making it easy to combine dinner and a show without driving anywhere else. Parking is free in the development lots. The plaza is covered in part, providing some shelter from afternoon rain.',
    category: 'Outdoor Venue',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'rabbit-valley-farmers-market',
    name: 'Rabbit Valley Farmers Market',
    address: '7484 Nashville Street, Ringgold, GA 30736',
    website: 'https://www.rabbitvalleyfarmersmarket.com',
    description:
      'Rabbit Valley Farmers Market is a weekly outdoor market in downtown Ringgold, Georgia, held every Saturday morning from May through October. Hours run 9 AM to 1 PM. The market features local farmers, bakers, and artisans selling fresh produce, eggs, meat, prepared food, plants, and handmade goods. It is a community-scale market rather than a large tourist destination — the vendors are local, the crowd is mostly regulars, and the pace is relaxed. Ringgold is about 15 minutes south of Chattanooga just over the Georgia state line on I-75. Parking is free on the surrounding downtown streets. Dogs on leash are welcome. The market is volunteer-run and supports local growers in the Ringgold and Catoosa County area.',
    category: 'Farmers Market',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'mainstreet-cleveland',
    name: 'MainStreet Cleveland',
    address: '160 Second Street NE, Cleveland, TN 37311',
    website: 'https://msctn.org',
    description:
      'MainStreet Cleveland is the downtown revitalization and events organization for Cleveland, Tennessee, based at 160 Second Street NE. The organization manages public programming in the historic downtown district throughout the year, including seasonal markets, outdoor concert series, holiday celebrations, and community festivals. The downtown Cleveland district has a walkable commercial core with historic storefronts, restaurants, and gathering spaces. MainStreet serves as the booking and logistics arm for events that use the public plazas and streets. Cleveland is about 30 minutes north of Chattanooga on I-75, making it an accessible day or evening trip from the city. Events are free to attend unless otherwise noted. The MainStreet calendar is the most reliable source for upcoming programming dates.',
    category: 'Downtown District',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'southern-adventist-university',
    name: 'Southern Adventist University',
    address: '4980 University Dr, Collegedale, TN 37363',
    website: 'https://www.southern.edu',
    description:
      'Southern Adventist University is a private liberal arts university at 4980 University Drive in Collegedale, Tennessee, about 20 minutes east of downtown Chattanooga. The School of Music presents free public concerts throughout the academic year, including a weekly Evensong service held at Collegedale Church with student and faculty choirs performing choral repertoire. The annual Christmas concert series in December draws audiences from across the region and runs for multiple performances. Additional public recitals and ensemble performances are scheduled throughout the fall and spring semesters. The campus is walkable and well-maintained. Parking is free and available throughout campus. The music programs at Southern are well regarded, and the quality of performance at free public events is consistently high.',
    category: 'University',
    schemaType: 'CollegeOrUniversity',
  },
  {
    slug: 'nothin-like-ringgold',
    name: 'Downtown Ringgold',
    address: 'Ringgold, GA 30736',
    website: 'https://www.nothinlikeringgold.com',
    description:
      'Historic downtown Ringgold, Georgia is a small commercial district along Nashville Street and surrounding blocks in Catoosa County, about 15 minutes south of Chattanooga on I-75. The district has a walkable main street with local shops, restaurants, and community gathering spaces. Regular outdoor events include a monthly classic car show and a free live music series on Friday evenings from spring through summer. The downtown is anchored by the historic Ringgold Depot, a Civil War-era railroad station that survived the Battle of Ringgold Gap in 1863 and now serves as a community landmark. Street parking is free throughout the district. The area is small enough to cover on foot in an afternoon, and the events draw a loyal local crowd.',
    category: 'Downtown District',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'farmers-on-first',
    name: 'Farmers on First',
    address: '220 1st Street NE, Cleveland, TN 37311',
    website: 'https://farmersonfirst.org',
    description:
      'Farmers on First is a weekly Sunday market in downtown Cleveland, Tennessee, held at First Street Square at 220 First Street NE. The market runs from 11 AM to 2 PM during its seasonal window and features local produce, prepared food, baked goods, plants, and handmade items from vendors in and around Cleveland and Bradley County. The format is relaxed — a neighborhood market more than a weekend destination, with a regular vendor roster that changes gradually through the season. Cleveland is about 30 minutes north of Chattanooga on I-75. Parking is free on the surrounding downtown streets and in nearby lots. Dogs are welcome on leash. The market is volunteer-organized and community-supported.',
    category: 'Farmers Market',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'national-cornbread-festival',
    name: 'National Cornbread Festival',
    address: 'South Pittsburg, TN 37380',
    website: 'https://www.nationalcornbread.com',
    description:
      'The National Cornbread Festival is an annual outdoor festival held in downtown South Pittsburg, Tennessee on the last full weekend of April. South Pittsburg is about an hour northwest of Chattanooga in Marion County, and the festival draws visitors from across the region each year. The main draw is the cornbread cook-off competition, where contestants prepare dishes using Lodge Cast Iron cookware. South Pittsburg is the home of Lodge, the American cast iron manufacturer. The festival includes live music on multiple stages, food vendors, craft booths, and family activities across the downtown streets. Admission is charged at the gate. The drive through the Sequatchie Valley area to reach South Pittsburg is scenic on its own.',
    category: 'Festival',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'walker-rocks',
    name: 'Walker Rocks',
    address: 'Chickamauga, GA 30707',
    website: 'https://www.walkerrocks.com',
    description:
      'Walker Rocks is a community events organization for Walker County, Georgia, based in Chickamauga. It hosts public programming and special events at local natural and historic venues throughout the county. Events have included gatherings at Gordon Lee Mansion — an 1847 antebellum home that served as a Union hospital during the Civil War and sits adjacent to the Chickamauga battlefield — and programming at Fricks Cave Preserve, a limestone cave system with one of the largest bat colonies in the Southeast. Walker County is about 30 minutes south of Chattanooga over the Georgia state line. The organization\'s calendar varies from year to year. Events are typically family friendly and community-oriented. Check the Walker Rocks website and social channels for current event listings.',
    category: 'Community Events',
    schemaType: 'Organization',
  },
  {
    slug: 'jasper-main-street',
    name: 'Downtown Jasper',
    address: 'Main Street, Jasper, TN 37347',
    website: 'https://jaspermainstreet.com',
    description:
      'Downtown Jasper is the historic Main Street district of Jasper, Tennessee, in Marion County, about an hour from Chattanooga. The district sits at the edge of the Cumberland Plateau, and the surrounding terrain gives Jasper a distinct character from the valley towns closer to the city. Main Street has local restaurants, shops, and a small-town commercial core that hosts seasonal outdoor events and community celebrations throughout the year. The annual Cruzin the Depot car show is one of the more consistent recurring draws, and local organizations host markets and festivals on the streets during warmer months. The area also serves as a gateway for exploring the Tennessee River Gorge and surrounding natural areas. Parking on Main Street and in adjacent lots is free.',
    category: 'Downtown District',
    schemaType: 'LocalBusiness',
  },
];

export const venueBySlug = Object.fromEntries(venues.map((v) => [v.slug, v]));
