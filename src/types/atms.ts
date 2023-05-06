export interface Interval {
	start: any,
	end: any,
}

export interface DayHour {
	openIntervals?: Interval[],
	isClosed?: boolean,
}

export interface HolidayHours {
	date: string,
	openIntervals?: Interval[],
	isClosed?: boolean,
	isRegularHours?: boolean,
}

export interface Hours {
	monday?: DayHour,
	tuesday?: DayHour,
	wednesday?: DayHour,
	thursday?: DayHour,
	friday?: DayHour,
	saturday?: DayHour,
	sunday?: DayHour,
	holidayHours?: HolidayHours[],
	reopenDate?: string,
}

export enum Category {
	BOOK_TRAVEL = "Book Travel",
	CHECK_IN = "Check in",
	FEES_POLICIES = "Fees Policies",
	FLIGHT_STATUS = "Flight Status",
	TICKETS = "Tickets",
	TICKETING = "Ticketing",
	AMENITIES = "Amenities",
	RESERVE = "Reserve",
	FRONT_DESK = "Front Desk",
	PARKING = "Parking",
	GIFT_CARD = "Gift Card",
	WAITLIST = "Waitlist",
	DELIVERY = "Delivery (Restaurant)",
	ORDER = "Order (Restaurant)",
	TAKEOUT = "Takeout",
	PICKUP = "Pickup (Restaurant)",
	RESERVE = "Reserve (Restaurant)",
	MENU = "Menu",
	APPOINTMENT = "Appointment",
	PORTFOLIO = "Portfolio",
	QUOTE = "Quote",
	SERVICES = "Services (Retail)",
	STORE_ORDERS = "Store Orders",
	STORE_SHOP = "Store Shop",
	STORE_SUPPORT = "Store Support",
	SCHEDULE = "Schedule",
	SHOWTIMES = "Showtimes",
	AVAILABILITY = "Availability",
	PRICING = "Pricing",
	ACTIVITIES = "Activities",
	BOOK = "Book",
	BOOK__HOTEL_ = "Book (Hotel)",
	BOOK__RIDE_ = "Book Ride",
	BOOK__TOUR_ = "Book Tour",
	CAREERS = "Careers",
	CHARGE = "Charge",
	COUPONS = "Coupons",
	DELIVERY__RETAIL_ = "Delivery (Retail)",
	DONATE = "Donate",
	EVENTS = "Events",
	ORDER__RETAIL_ = "Order (Retail)",
	OTHER_MENU = "Other Menu",
	PICKUP__RETAIL_ = "Pickup (Retail)",
	RESERVE__PARKING_ = "Reserve (Parking)",
	SHOWS = "Shows",
	SPORTS = "Sports",
	SUPPORT = "Support",
	TEE_TIME = "Tee Time",
	GIFT_CARD__RESTAURANT_ = "Gift Card (Restaurant)",
}

export interface AppleActionLinks {
	category: Category,
	appStoreUrl: string,
	quickLinkUrl: string,
	appName: string,
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface FrequentlyAskedQuestions {
	question: string,
	answer?: string,
}

export enum Type {
	DEPARTMENT_IN = "Department In",
	INDEPENDENT_ESTABLISHMENT_IN = "Independent Establishment In",
}

export interface GoogleEntityRelationship {
	type: Type,
	placeId: string,
}

export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export enum Type_1 {
	NONE = "None",
	BOOK_NOW = "Book Now",
	CALL_NOW = "Call Now",
	CONTACT_US = "Contact Us",
	SEND_MESSAGE = "Send Message",
	USE_APP = "Use App",
	PLAY_GAME = "Play Game",
	SHOP_NOW = "Shop Now",
	SIGN_UP = "Sign Up",
	WATCH_VIDEO = "Watch Video",
	SEND_EMAIL = "Send Email",
	LEARN_MORE = "Learn More",
	PURCHASE_GIFT_CARDS = "Purchase Gift Cards",
	ORDER_NOW = "Order Now",
	FOLLOW_PAGE = "Follow Page",
}

export interface FacebookCallToAction {
	type: Type_1,
	value?: string,
}

export interface FeaturedMessage {
	description?: string,
	url?: string,
}

export enum LocationType {
	LOCATION = "Location",
	HEALTHCARE_FACILITY = "Healthcare Facility",
	HEALTHCARE_PROFESSIONAL = "Healthcare Professional",
	ATM = "ATM",
	RESTAURANT = "Restaurant",
	HOTEL = "Hotel",
}

export enum PriceRange {
	UNSPECIFIED = "Unspecified",
	ONE = "$",
	TWO = "$$",
	THREE = "$$$",
	FOUR = "$$$$",
}

export interface RankTrackingCompetitors {
	name: string,
	website: string,
}

export enum RankTrackingFrequency {
	WEEKLY = "Weekly",
	MONTHLY = "Monthly",
	QUARTERLY = "Quarterly",
}

export enum RankTrackingKeywords {
	NAME = "Name",
	PRIMARY_CATEGORY = "Primary Category",
	SECONDARY_CATEGORY = "Secondary Category",
}

export enum RankTrackingQueryTemplates {
	KEYWORD = "Keyword",
	KEYWORD_ZIP = "Keyword Zip",
	KEYWORD_CITY = "Keyword City",
	KEYWORD_IN_CITY = "Keyword in City",
	KEYWORD_NEAR_ME = "Keyword near me",
	KEYWORD_CITY_STATE = "Keyword City State",
}

export enum RankTrackingSites {
	GOOGLE_DESKTOP = "Google Desktop",
	GOOGLE_MOBILE = "Google Mobile",
	BING_DESKTOP = "Bing Desktop",
	BING_MOBILE = "Bing Mobile",
	YAHOO_DESKTOP = "Yahoo Desktop",
	YAHOO_MOBILE = "Yahoo Mobile",
}

export interface WebsiteUrl {
	url?: string,
	displayUrl?: string,
	preferDisplayUrl?: boolean,
}

export default interface Atm {
	accessHours?: Hours,
	appleActionLinks?: AppleActionLinks[],
	appleBusinessDescription?: string,
	appleBusinessId?: string,
	appleBusinessIdDqe?: string,
	appleCompanyId?: string,
	appleCompanyIdDqe?: string,
	appleCoverPhoto?: Image,
	bingWebsiteOverride?: string,
	questionsAndAnswers?: boolean,
	driveThroughHours?: Hours,
	facebookAbout?: string,
	facebookWebsiteOverride?: string,
	frequentlyAskedQuestions?: FrequentlyAskedQuestions[],
	geomodifier?: string,
	googleEntityRelationship?: GoogleEntityRelationship,
	googleMyBusinessLabels?: string[],
	googlePlaceId?: string,
	googleShortName?: string,
	holidayHoursConversationEnabled?: boolean,
	impressum?: string,
	landingPageUrl?: string,
	neighborhood?: string,
	nudgeEnabled?: boolean,
	phoneticName?: string,
	primaryConversationContact?: any,
	reviewResponseConversationEnabled?: boolean,
	slug?: string,
	what3WordsAddress?: string,
	yelpLinkedAccount?: any,
	yelpWebsiteOverride?: string,
	additionalHoursText?: string,
	address: Address,
	alternatePhone?: any,
	description?: string,
	hours?: Hours,
	logo?: ComplexImage,
	name: string,
	categories?: any,
	cityCoordinate?: Coordinate,
	closed?: boolean,
	dm_directoryParents?: EntityReference[],
	displayCoordinate?: Coordinate,
	dropoffCoordinate?: Coordinate,
	facebookOverrideCity?: string,
	facebookCoverPhoto?: Image,
	facebookCallToAction?: FacebookCallToAction,
	facebookDescriptor?: string,
	facebookLinkedAccount?: any,
	facebookName?: string,
	facebookPageUrl?: string,
	facebookParentPageId?: string,
	facebookProfilePhoto?: Image,
	facebookStoreId?: string,
	facebookVanityUrl?: string,
	fax?: any,
	featuredMessage?: FeaturedMessage,
	foursquareLinkedAccount?: any,
	photoGallery?: ComplexImage[],
	geocodedCoordinate?: Coordinate,
	gmbLinkedAccount?: any,
	googleAccountId?: string,
	googleAttributes?: any,
	googleCoverPhoto?: Image,
	googleProfilePhoto?: Image,
	googleWebsiteOverride?: string,
	isoRegionCode?: string,
	keywords?: string[],
	localPhone?: any,
	locatedIn?: EntityReference,
	locationType?: LocationType,
	mainPhone?: any,
	mobilePhone?: any,
	phones?: any,
	pickupCoordinate?: Coordinate,
	priceRange?: PriceRange,
	alternateNames?: string[],
	alternateWebsites?: string[],
	rankTrackingCompetitors?: RankTrackingCompetitors[],
	customKeywords?: string[],
	rankTrackingEnabled?: boolean,
	rankTrackingFrequency?: RankTrackingFrequency,
	rankTrackingKeywords?: RankTrackingKeywords[],
	rankTrackingQueryTemplates?: RankTrackingQueryTemplates[],
	rankTrackingSites?: RankTrackingSites[],
	routableCoordinate?: Coordinate,
	id: string,
	timezone?: any,
	tollFreePhone?: any,
	ttyPhone?: any,
	walkableCoordinate?: Coordinate,
	websiteUrl?: WebsiteUrl,
	yextDisplayCoordinate?: Coordinate,
	yextDropoffCoordinate?: Coordinate,
	yextPickupCoordinate?: Coordinate,
	yextRoutableCoordinate?: Coordinate,
	yextWalkableCoordinate?: Coordinate,
}
