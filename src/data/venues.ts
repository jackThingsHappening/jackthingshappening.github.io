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
      'Barrelhouse Ballroom is a mid-size live music venue on the South Side. It books national touring acts alongside local and regional shows most nights of the week. The space has a full bar and a standing-room floor that puts you close to the stage.',
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
      'The Woodshop Listening Room is an intimate music venue in the St. Elmo neighborhood at the foot of Lookout Mountain. It focuses on Americana, folk, country, and acoustic music in a seated setting. The bar opens before shows and the room rarely holds more than a few hundred people.',
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
      'The Signal is a standing-room music venue located near the Choo Choo hotel in downtown Chattanooga. It books indie rock, metal, electronic, and touring acts from across genres. The raised stage and open floor plan make it a good room for almost any type of show.',
    category: 'Music Venue',
    schemaType: 'MusicVenue',
    tip: 'The Signal is 18+ for most shows. Check the event listing before you buy — some shows are all-ages.',
  },
  {
    slug: 'songbirds',
    name: 'Songbirds',
    address: '206 W Main Street, Chattanooga, TN',
    website: 'https://venue.songbirds.org',
    description:
      'Songbirds is a guitar museum and live music venue in downtown Chattanooga. The museum displays rare and historically significant guitars from the Golden Age of American music. The attached live venue hosts intimate concerts, private events, and ticketed music experiences.',
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
      'Barking Legs Theater is a small nonprofit performing arts space on Dodds Avenue in the Ridgedale neighborhood. It presents contemporary dance, experimental theater, and independent film with a focus on local and regional artists. Most events are community-priced and many are free.',
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
      'The Hunter Museum of American Art sits on a bluff above the Tennessee River in the Bluff View Art District. Its permanent collection spans American art from 1800 to the present, with works in painting, sculpture, and studio glass. Evening events and exhibition openings take place regularly throughout the year.',
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
      'First Horizon Pavilion is an outdoor amphitheater and event space on the south side of Chattanooga. It hosts large-scale concerts, the weekly Chattanooga Market, and seasonal festivals throughout the year. The venue has covered pavilion seating and a large open lawn.',
    category: 'Outdoor Amphitheater',
    schemaType: 'Landform',
  },
  {
    slug: 'chattanooga-market',
    name: 'Chattanooga Market at First Horizon Pavilion',
    address: '1826 Reggie White Blvd, Chattanooga, TN 37408',
    website: 'https://chattanoogamarket.com',
    description:
      'The Chattanooga Market is a weekly outdoor market held every Sunday at First Horizon Pavilion on the south side. It brings together local farmers, food vendors, artisans, and live music in one place. The market runs year-round with a larger footprint in the warmer months.',
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
      'Sequatchie Cove Farm is a working organic farm and creamery in Dunlap, Tennessee. It hosts seasonal dinners, workshops, and community events on the farm property. Most events take place outdoors and draw people from Chattanooga and the surrounding region.',
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
      'Oddstory Brewing Co. is a craft brewery on Campbell Street on the South Side. The taproom has a rotating selection of house-brewed beers and hosts regular events including trivia nights, live music, and themed taproom parties. It is open daily with patio seating.',
    category: 'Brewery',
    schemaType: 'BreweryFoodEstablishment',
  },
  {
    slug: 'acquarium',
    name: 'Tennessee Aquarium',
    address: '1 Broad St, Chattanooga, TN 37402',
    website: 'https://www.tnaqua.org',
    description:
      'The Tennessee Aquarium sits on the riverfront in downtown Chattanooga and is one of the largest freshwater aquariums in the world. It spans two buildings — one focused on river ecosystems and one on ocean life. Evening events, fundraisers, and educational programs take place throughout the year.',
    category: 'Aquarium',
    schemaType: 'Aquarium',
  },
  {
    slug: 'creative-discovery-museum',
    name: 'Creative Discovery Museum',
    address: '321 Chestnut St, Chattanooga, TN 37402',
    website: 'https://www.cdmfun.org',
    description:
      'The Creative Discovery Museum is a hands-on children\'s museum in downtown Chattanooga. It has art studios, a rooftop with a climbing structure, science exhibits, and a dedicated toddler area. The museum hosts camps, workshops, and seasonal events for kids of all ages.',
    category: 'Children\'s Museum',
    schemaType: 'Museum',
  },
  {
    slug: 'crabtree-farms',
    name: 'Crabtree Farms',
    address: '1000 E 30th St, Chattanooga, TN 37407',
    website: 'https://crabtreefarms.org',
    description:
      'Crabtree Farms is a nonprofit urban farm on the north side of Chattanooga. It grows food for donation and runs community programs on farming, cooking, and ecology. Events are held year-round on the farm\'s 22-acre property.',
    category: 'Urban Farm',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'chattanooga-brewing',
    name: 'Chattanooga Brewing Co.',
    address: '730 Chestnut St., Chattanooga, TN 37408',
    website: 'https://www.chattabrew.com',
    description:
      'Chattanooga Brewing Co. is one of the original craft breweries in the city, located in the Southside neighborhood. The taproom hosts trivia nights, seasonal releases, live music, and taproom events on a regular schedule. Tours of the brewing facility are available on weekends.',
    category: 'Brewery',
    schemaType: 'BreweryFoodEstablishment',
  },
  {
    slug: 'wanderlinger',
    name: 'WanderLinger Brewing Company',
    address: '55 Station Street, Chattanooga, TN 37408',
    website: 'https://www.wanderlinger.com',
    description:
      'WanderLinger Brewing is a small craft brewery near the Choo Choo hotel in downtown Chattanooga. The taproom has a warm, neighborhood feel with rotating house beers on tap. It hosts live music, community events, and casual taproom nights throughout the week.',
    category: 'Brewery',
    schemaType: 'BreweryFoodEstablishment',
  },
  {
    slug: 'walker-theatre',
    name: 'The Walker Theatre',
    address: '709 Broad St, Chattanooga, TN 37402',
    website: 'https://www.ticketmaster.com/the-walker-theatre-tickets-chattanooga/venue/222568',
    description:
      'The Walker Theatre is a restored 1921 venue on Broad Street in downtown Chattanooga. The 1,900-seat theater hosts touring concerts, comedy shows, and performing arts productions. Its original architecture has been preserved through multiple renovations.',
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
      'Soldiers & Sailors Memorial Auditorium is a 3,600-seat performing arts venue on McCallie Avenue, built in 1924. It hosts Broadway touring productions, large-scale concerts, family shows, and community events. It is one of the largest indoor performance spaces in Chattanooga.',
    category: 'Theater',
    schemaType: 'PerformingArtsTheater',
  },
  {
    slug: 'reflection-riding',
    name: 'Reflection Riding Arboretum and Nature Center',
    address: '400 Garden Road, Chattanooga, TN 37419',
    website: 'https://www.reflectionriding.org',
    description:
      'Reflection Riding Arboretum and Nature Center is a 300-acre sanctuary at the foot of Lookout Mountain. It has walking trails, wildlife habitats, native plant gardens, and a children\'s discovery area. The center hosts educational programs, seasonal events, and member evenings throughout the year.',
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
      'Erlanger Park is the home stadium of the Double-A Chattanooga Lookouts, located on the south bank of the Tennessee River. Games run from April through September with a full schedule of promotions, theme nights, and fireworks shows. The stadium seats about 7,500 and offers views of the river from the upper deck.',
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
      "Ross's Landing is a riverfront park in downtown Chattanooga at the foot of the Market Street Bridge. From May through Labor Day, it hosts TVFCU Riverfront Nights — free outdoor concerts every Saturday evening. Admission is free and the event draws several thousand people each week.",
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
      'Five Wits Brewing Company is a craft brewery on the South Side, sharing the Long Street building with Barrelhouse Ballroom. The taproom serves a rotating selection of house beers and hosts occasional community events and taproom nights.',
    category: 'Brewery',
    schemaType: 'BreweryFoodEstablishment',
  },
  {
    slug: 'tailgate-brewery',
    name: 'TailGate Brewery Chattanooga',
    address: '1464 Market St, Chattanooga, TN 37408',
    website: 'https://www.tailgatebeer.com',
    description:
      'TailGate Brewery Chattanooga is a Nashville-based craft brewery with a taproom on Market Street in the Southside neighborhood. The space hosts trivia nights, live music, and seasonal taproom events. It has a large indoor seating area and patio.',
    category: 'Brewery',
    schemaType: 'BreweryFoodEstablishment',
  },
  {
    slug: 'hutton-smith',
    name: 'Hutton & Smith Brewing Co.',
    address: '431 E Main St, Chattanooga, TN 37408',
    website: 'https://huttonandsmithbrewing.com',
    description:
      'Hutton & Smith Brewing Co. is a craft brewery in the Southside neighborhood on East Main Street. The taproom has a large indoor space and an outdoor patio. It hosts events including trivia nights, live music, and occasional taproom parties.',
    category: 'Brewery',
    schemaType: 'BreweryFoodEstablishment',
  },
  {
    slug: 'flat-top-mountain-farm',
    name: 'Flat Top Mountain Farm',
    address: '638 Bowman Cemetery Rd, Soddy-Daisy, TN 37379',
    website: 'https://www.flattopmountainfarm.com',
    description:
      'Flat Top Mountain Farm is a family-run working farm in Soddy-Daisy, about 25 minutes north of Chattanooga. It hosts seasonal outdoor events including runs, harvest festivals, and community gatherings on the farm property.',
    category: 'Farm',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'happy-valley-farms',
    name: 'Happy Valley Farms',
    address: 'Rossville, GA',
    website: 'https://www.happyvalleyfarms.com',
    description:
      'Happy Valley Farms is a farm event venue in Rossville, Georgia, just minutes from downtown Chattanooga. It hosts seasonal outdoor events including fall festivals, markets, and community gatherings.',
    category: 'Farm',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'quail-run-farm',
    name: 'Quail Run Farm',
    address: '1345 Birmingham Hwy, Chattanooga, TN 37419',
    website: 'https://quailrunfarmtn.com',
    description:
      'Quail Run Farm is a working farm on Birmingham Highway in Chattanooga near Lookout Mountain. It hosts seasonal events, farm dinners, and community workshops on the property.',
    category: 'Farm',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'lula-lake',
    name: 'Lula Lake Land Trust',
    address: 'Lookout Mountain, GA',
    website: 'https://www.lulalake.org',
    description:
      'Lula Lake Land Trust preserves more than 4,000 acres on Lookout Mountain and opens its gates to the public on the first and last weekend of each month. The property has waterfalls, swimming holes, and miles of hiking trails. Entry is $16 per person and must be reserved ahead of time.',
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
      "Ketner's Mill is a historic 1882 grist mill and festival grounds in Whitwell, Tennessee, about an hour from Chattanooga. It hosts the annual Ketner's Mill Country Arts Fair each October, drawing artists, craftspeople, and musicians to the mill grounds.",
    category: 'Historic Site',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'lookout-winery',
    name: 'Lookout Winery',
    address: '11848 Hwy 41, Guild, TN 37340',
    website: 'https://www.lookoutwinery.com',
    description:
      'Lookout Winery is a winery and event venue on Highway 41 in Guild, Tennessee, about 45 minutes from Chattanooga along the Tennessee River. It hosts live music events, seasonal festivals, and wine tasting weekends on the property.',
    category: 'Winery',
    schemaType: 'Winery',
  },
  {
    slug: 'mash-and-hops',
    name: 'Mash and Hops Craft Beers',
    address: '168 First Street NE, Cleveland, TN 37311',
    website: 'https://www.mashandhops.com',
    description:
      'Mash and Hops Craft Beers is a craft beer bar and bottle shop in downtown Cleveland, Tennessee. It hosts weekly events including a singles social night and a monthly craft beer share. The selection focuses on small-batch and regional breweries.',
    category: 'Bar',
    schemaType: 'BarOrPub',
  },
  {
    slug: 'the-diving-mouse',
    name: 'The Diving Mouse',
    address: '201 Keith Street Suite 31, Cleveland, TN 37311',
    website: 'https://thedivingmouse.com',
    description:
      'The Diving Mouse is a bar and live music venue in downtown Cleveland, Tennessee. It hosts live music most Friday and Saturday nights starting at 4:30 PM and weekly events including music bingo, karaoke, and open mic nights. The space has an outdoor patio.',
    category: 'Bar',
    schemaType: 'BarOrPub',
  },
  {
    slug: 'take-root-studio',
    name: 'Take Root Studio',
    address: '3575 Adkisson Dr NW Suite 1010, Cleveland, TN 37312',
    website: 'https://takeroot.studio',
    description:
      'Take Root Studio is a creative studio and community gathering space in Cleveland, Tennessee. It hosts a free outdoor night market on the first Saturday of each month with local vendors, food, and music. The studio also runs arts and wellness programming throughout the year.',
    category: 'Studio',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'cambridge-square',
    name: 'Cambridge Square',
    address: '9453 Bradmore Ln, Ooltewah, TN 37363',
    website: 'https://www.cambridgesquaretn.com',
    description:
      'Cambridge Square is a mixed-use development in Ooltewah with shops, restaurants, and a central plaza. It hosts free live music every Saturday evening from late April through October. The weekly series draws neighborhood residents and visitors from across the region.',
    category: 'Outdoor Venue',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'rabbit-valley-farmers-market',
    name: 'Rabbit Valley Farmers Market',
    address: '7484 Nashville Street, Ringgold, GA 30736',
    website: 'https://www.rabbitvalleyfarmersmarket.com',
    description:
      'Rabbit Valley Farmers Market is a weekly outdoor market in downtown Ringgold, Georgia. It runs every Saturday from May through October, 9 AM to 1 PM. Local farmers, bakers, and artisans sell produce, prepared food, and handmade goods.',
    category: 'Farmers Market',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'mainstreet-cleveland',
    name: 'MainStreet Cleveland',
    address: '160 Second Street NE, Cleveland, TN 37311',
    website: 'https://msctn.org',
    description:
      'MainStreet Cleveland is the downtown revitalization organization for Cleveland, Tennessee. It hosts events and festivals in the historic downtown district throughout the year, including seasonal markets, outdoor concerts, and community celebrations.',
    category: 'Downtown District',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'southern-adventist-university',
    name: 'Southern Adventist University',
    address: '4980 University Dr, Collegedale, TN 37363',
    website: 'https://www.southern.edu',
    description:
      'Southern Adventist University is a private university in Collegedale, Tennessee. Its School of Music presents free public concerts throughout the academic year, including a weekly Evensong series at Collegedale Church and an annual Christmas concert series in December.',
    category: 'University',
    schemaType: 'CollegeOrUniversity',
  },
  {
    slug: 'nothin-like-ringgold',
    name: 'Downtown Ringgold',
    address: 'Ringgold, GA 30736',
    website: 'https://www.nothinlikeringgold.com',
    description:
      'Historic downtown Ringgold, Georgia is a small commercial district with shops, restaurants, and community spaces. It hosts regular outdoor events including a monthly classic car show and a free live music series on Friday evenings through the spring and summer.',
    category: 'Downtown District',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'farmers-on-first',
    name: 'Farmers on First',
    address: '220 1st Street NE, Cleveland, TN 37311',
    website: 'https://farmersonfirst.org',
    description:
      'Farmers on First is a weekly Sunday market in downtown Cleveland, Tennessee, held at First Street Square. It runs from 11 AM to 2 PM and features local produce, prepared food, and handmade goods. The market is open seasonally.',
    category: 'Farmers Market',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'national-cornbread-festival',
    name: 'National Cornbread Festival',
    address: 'South Pittsburg, TN 37380',
    website: 'https://www.nationalcornbread.com',
    description:
      'The National Cornbread Festival is an annual outdoor festival held in downtown South Pittsburg, Tennessee every last weekend of April. It features live music, a cornbread cook-off competition, food vendors, and activities for all ages.',
    category: 'Festival',
    schemaType: 'LocalBusiness',
  },
  {
    slug: 'walker-rocks',
    name: 'Fricks Cave Preserve',
    address: '1510 Fricks Gap Rd, Chickamauga, GA 30707',
    website: 'https://www.walkerrocks.com',
    description:
      'Fricks Cave Preserve is a nature preserve in Chickamauga, Georgia managed by Walker County. It hosts outdoor events including guided hikes, nature walks, and seasonal programs on the preserve grounds.',
    category: 'Nature Preserve',
    schemaType: 'Park',
  },
  {
    slug: 'jasper-main-street',
    name: 'Downtown Jasper',
    address: 'Main Street, Jasper, TN 37347',
    website: 'https://jaspermainstreet.com',
    description:
      'Downtown Jasper is the historic Main Street district of Jasper, Tennessee, about an hour from Chattanooga in Marion County. It hosts seasonal outdoor events, festivals, and community gatherings in the downtown area throughout the year.',
    category: 'Downtown District',
    schemaType: 'LocalBusiness',
  },
];

export const venueBySlug = Object.fromEntries(venues.map((v) => [v.slug, v]));
