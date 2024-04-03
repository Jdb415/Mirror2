/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
	{
	module: "MMM-iHaveBeenThere",
	position: "middle_center",
	config: {
		title: "",
		home_desc: "San Diego",
		AnimationEnabled: true,
		zoomLevel: 0.8,
		zoomLatitude: 50,
		zoomLongitude: 50,
		colorTargetPoints: "#FFFFFF",
		animationDuration: "20.0",
		home_lat: 32.96376,
		home_lon: -117.12207,
		displayDesc: false,
		away_desc: [
"Tokyo",
"Kyoto",
"Seoul",
"Taipei",
"Hong Kong",
"Guangzhou",
"Guilin",
"Singapore",
"Bali",
"Lome",
"Crete",
"Athens",
"Ibiza",
"Madrid",
"Barcelona",
"Arles",
"Paris",
"London",
"Amsterdam",
"Cartagena",
"Medellin",
"Cancun",
"Tulum",
"Mexico City",
"Guadalajara",
"Puerto Vallarta",
"Sayulita",
"Cabo San Lucas",
"Tijuana",
"Vancouver",
"Fairbanks",
"Honolulu",
"Hilo",
"Seattle",
"Big Summit Prairie",
"Las Vegas",
"Black Rock City",
"Phoenix",
"Salt Lake City",
"Denver",
"Colorado Springs",
"San Antonio",
"Austin",
"New Orleans",
"Madison",
"Nashville",
"Knoxville",
"Atlanta",
"St. Augustine",
"Miami",
"Hampton",
"Philadelphia",
"New York City",
"Boston",
"Newark"
		],
		away_lat: [
			35.6761919,
35.0211,
37.5326,
25.0329694,
22.396428,
23.12911,
25.273566,
1.352083,
-8.409518,
6.131934,
35.417416,
37.98381,
38.90883,
40.4167515,
41.3888,
43.6766,
48.8566,
51.5074,
52.3676,
10.391,
6.2518,
21.1743,
20.2117,
19.4326,
20.6668,
20.6534,
20.8683,
22.8905,
32.5149,
49.2827,
64.835365,
21.315603,
19.7299,
47.608013,
44.3568,
36.1699,
40.7865,
33.4484,
40.7608,
39.7392,
38.83388,
29.4241,
30.2672,
29.9511,
43.0731,
36.1627,
36.0183,
33.749,
29.9012,
25.7617,
37.0299,
39.9526,
40.7128,
42.3601,
40.7357
		],
		away_lon: [
			139.6503106,
135.7539,
127.024612,
121.5654177,
114.109497,
113.264385,
110.290195,
103.819836,
115.188919,
1.222678,
24.530005,
23.727539,
1.43296,
-3.7038322,
2.159,
4.6277,
2.3522,
-0.1278,
4.9041,
-75.4794,
-75.5636,
-86.8466,
-87.4633,
-99.1332,
-103.3918,
-105.2253,
-105.4409,
-109.9167,
-117.0382,
-123.1207,
-147.776749,
-157.858093,
-155.0907,
-122.335167,
-120.1975,
-115.1398,
-119.2069,
-112.074,
-111.891,
-104.9903,
-104.82136,
-98.4936,
-97.7431,
-90.0715,
-89.4012,
-86.7816,
-83.9402,
-84.388,
-81.3124,
-80.1918,
-76.3452,
-75.1652,
-74.006,
-71.0589,
-74.1724
		],
		trip: [false,true,false],
	}
},
		
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			disabled: true,
			position: "top_left"
		},
		{
			module: "calendar",
			disabled: true,
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			disabled: true,
			position: "lower_third"
		},
		{
			module: "weather",
			disabled: true,
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weather",
			disabled: true,
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "newsfeed",
			disabled: true,
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
