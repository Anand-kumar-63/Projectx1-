npm i react-redux @react/toolkit
Create store using {configurestore}
Create slices >> name , inital value , reducers
Provide store to app component
dispatch action form the header hamburger click
                          >>import { useDispatch } from "react-redux";
                            import { Togglemenu } from "./utils/Menuslice";
                              const Header = () => {

                                const dispatch = useDispatch();
                                const togglethemenu=()=>{
                                  dispatch(Togglemenu());
                                }
                                return (
                                  <div className="flex bg-white justify-between shadow-lg rounded-md" >
                                    <div className="flex gap-1 h-16 items-center justify-center">
                                      <img
                                      onClick={()=>togglethemenu()}
                                        src="https://imgs.search.brave.com/-KeMJ4XDPtfRHSk5eYvtEpdUD5fXEOap4xqVNgYjwJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA5LzQ1Lzgw/LzM2MF9GXzEwOTQ1/ODAxNV9Rc1dtY2hs/enV3Q1pQcUlVV1I3/SGNURHNiYnB0ZWpS/di5qcGc"
                                        alt="hmaburger icon"
                                        className="h-7 w-8 cursor-pointer"
                                      />

# requirment clarification 
## features 
## tech stack
  >>redux store 
  >>tailwind css
  >>what bundler we are going to use >> vite
  >>routing -- react router dom
  >> for testing -- react test lib
## planning
# why report web vitals used for??


# routing 
>>Install react router dom 
>>In app.js make routes using Create Browser Router.
>>provide the routes using router provider from react-router-dom
>> where ever i will provide my router provider my element will render over there in the app.js file
>> in the porject body will render below the head

>> And the childrebn will load where the outlet is >> in this outlet is in the body component 
  const approuter = createBrowserRouter([{
  path:"/",
  element: <Body />
   children:[
    {
      path:'/',
      element:<MainContainer />
    },
    {
      path:"/watchpage",
      element:<watchpage />
    }
  ]
  }

>>Body has two childrens sidebar and main container
so when path changes body should body watchpage instead of main container
so for this outlet component from react-router-dom is used inn body component

# Link form react-router-dom
>>use to link each vedio card with there respecting url or path so that when we click on it >> directs us to that page
>>while routing means making that route to the page and linking the app.js to it so that any component can use that route

{{read more about routes and links}}
# close menu action 
>>when we are routing to the vedioapeg sidebar should be closed so for this we have to make a action and dispatch{from useDispatch() hook} it when video component loads
>>Action in menuslice and dispatch using dispatch() inaside use effect  

# Search params 
>>To extract something from Queryparams we use {usesearchparams} from react-router-dom
usesearchparams is like usestate hook 
const[searchParams , setsearchParmas] = usesearchparams();
>>then to extract something we use 
searchparams.get("parameter")
>>setSearchparams is used for setting the param 
<button onClick(()=>setSearchParams({age:anything}))>my age is {searchParams.get("age")}<button>
<!-- read more -->
https://www.youtube.com/watch?v=8M7d8T8ee3M 

# Higher Order components 
>>Components takes in a Component and returns a Components..or we can say moidfies the component a little

#[interview question]--
#make the SearchBar
>>youtube makes api call so fast that on every key strock it sends an api call
>>if the difference between two key stroks is very less then the api call for every key strok is useless  >> less number of api calls when speed is high
>>{concept of Debouncing}
  --debouncing with 200ms>>if the difference btw two key stroks is <200ms dont make an api call >>if the difference is >200ms then make an api call
  -- debpuncing time for google and youtube {30ms}is very less as compare to flipkart{200ms} 
[Debouncing]
 const [searchquery, setsearchquery] = useState("");
  useEffect(() => {
  const timer = setTimeout(() => searchdata(),200);
  // to end this timer if any other key is pressed within the 200ms time
  return()=>{
    clearTimeout(timer);
  };
  }, [searchquery]);

  const searchdata = async () => {
    try {
      const response = await fetch(
        `https://suggestqueries-clients6.youtube.com/complete/search?client=youtube-reduced&hl=en&gs_ri=youtube-reduced&ds=yt&q=${searchquery}&xhr=t&xssi=t&gl=us`
      );
      const textData = await response.text(); // Get raw response as text
      // Remove the YouTube security prefix
      const jsonData = JSON.parse(textData.replace(/^\)\]\}'/, ""));
      console.log(jsonData[1]); // Log the cleaned-up response  
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };
  


>>youtube search api {https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=faded}

# use of focus and blur property to hide the search suggestions as required
  onFocus={()=>setshowsuggetions(true)}
  onBlur={()=>setshowsuggetions(false)}
  >>where showsuggetion is a state variable 

# making scrollable nav buttons
- useref hook is used to manipulate dom 
- It returns an object containing current value as initially given by you 
const refelement = useref("empty string");
using this you have to make the scrollable nav buttons


# setting up the API

# npm i react-youtube package 
>>we get different function to explore at youtube ifrmae API
>>this is the component you have to import in

import React from "react";
import YouTube from "react-youtube";

class YoutubeVideo extends React.Component {
  VideoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: "476",
      width: "792",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const { videoId } = this.props;

    return (
      <YouTube videoId={videoId} opts={opts} onReady={this.VideoOnReady} />
    );
  }
}

export default YoutubeVideo;

# description added
## readmore feature
usestate and ternary operator 
const [show , setshow] = usestate(false);
<button onclick={()=>setshow(!show)}></button>
{show && component : null}

# comment added 
>>using comment api and destructuring the data
##replies to the comment added
using map on every comment


#  HTML-encoded string to text 
>>dangerouslySetInnerHTML allows React to render the raw HTML inside the message string.
It ensures that <br>, <b>, and <a> elements work properly.
>>Steps to Implement dangerouslySetInnerHTML
Identify the part where comment text (snippet?.textOriginal) is being displayed.
Replace it with a <p> tag that uses dangerouslySetInnerHTML.

function MusicPromo() {
  return (
    <div className="p-4 bg-gray-200 rounded-md">
      <p dangerouslySetInnerHTML={{ __html: message }} />
    </div>
  );
}


>>Why Use dangerouslySetInnerHTML?
Some comments may contain bold text, links, emojis, and line breaks (e.g., <b>Hello</b>, <br>, <a href="#">Link</a>).
This method ensures the HTML formatting inside comments is preserved

## 🚨 Security Reminder!
Since dangerouslySetInnerHTML can be risky (prone to XSS attacks), you must sanitize the text before rendering.
Use DOMPurify to prevent any malicious scripts from being injected

npm install dompurify
import DOMPurify from "dompurify";
<p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(message) }} />


# Write reply section 
## emoji section 


# Video suggestion 
>>using tags of the video >> fetched the videos using tag names and dispalyed on the suggestion side
>>first fetch the tags from the running video >> then fetch the video using tags>> replace # with "" then join with "|" to make a string >> in url q="string of tags"
>> then again an api call using string of ids of all the videos comming from above api call to fetch the statistics part
>>then apply map and display all

# Signuppage
# Login page
>>npm i react-hook-from{read about it}
>> its a react library helps in validating{ minlength, max length , required , and etc} the data entered in the form 
>> you can easily handle the errors
read more about it>>https://www.youtube.com/watch?v=wB3Jf7yyvfU

# SearchPage
>> search suggestions can be used as queries 
>>use query to find the videos >> and then find id using destructuring and then make a string using join but before joining all the ids in the string use filter(Boolean) 
>>Use .filter(Boolean) to remove undefined values in videoIds.
Ensured API fetch results are properly validated before setting state

  {The two lists are almost the same, but the second list after using ffilter has one additional ID (_qrizEca1ws).
The first list has an extra comma and some extra spaces in one entry.
The order of some video IDs differs}

>> then fetch the statistics and content details from using other api and then show it on the page

## Pagination is added in the search page and every where 
>>See how it works
you have to mantain two state varaible >> nextpagetoken and prevpagetoken 
>> you have to pass the state value to the api fetching a object ,  that  object contains number of videos and nextpage token and info about the page 

Object
etag: "1kBmDXXLHcraf1Ur148wJepcbCQ"
items: (22) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
kind: "youtube#searchListResponse"
nextPageToken: "CBQQAA"
pageInfo: {totalResults: 1000000, resultsPerPage: 22}
regionCode: "IN"
[[Prototype]]: Object 

>>that api is youtube data api search videos using query 
const Query_videos_url = async (pageToken = "") => {
    const VideosByQuery_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}&pageToken=${pageToken}`;
    const response = await fetch(VideosByQuery_URL);
    const jsondata = await response.json();
<!-- set the pagetoken value extracting from the object -->
    setnextpagetoken(jsondata.nextPageToken || null);
    setprevpagetoken(jsondata.prevPageToken || null);

>>then in the return page>> pass the nextpagetoken value to the api_url to fetch the data..for the same query
       {prevpagetoken && (
          <button onClick={() => Query_videos_url(prevpagetoken)}>
            Previous
          </button>
        )}
        {nextpagetoken && (
          <button onClick={() => Query_videos_url(nextpagetoken)}>
            Next
          </button>
        )}

# remember
React optimizes rendering by only re-rendering components that have state or prop changes. However, if the new state value is identical to the previous one, as determined by an Object.is comparison, React will skip the re-rendering of the component and its children, even though the state was updated.

In React, when the value in a state variable changes, the component re-renders to reflect the updated state. This re-rendering process is triggered automatically by React when the state is updated using the setState method or the useState hook
        
# .find()
>>The .find() method is used to search for the first element in an array that satisfies a given condition. If it finds a matching element, it returns that element; otherwise, it returns undefined
>>const result = array.find((element) => condition);
- {why to not use map in SearchCard?? >>
.map() always iterates through the entire array, even after finding a match, which is unnecessary.
.map() returns a new array, but you’re not using that new array.
Calling setchannelimage() multiple times in a loop can cause multiple unnecessary re-renders.
}

# SearchBar Error ?
>>before usign the Link tag make sure that the component in which you are using the Link should be properly wrapped inside the browserRouter 

>>React Router provides navigation functionality using a context (RouterContext). This context is created when your application is wrapped inside a <BrowserRouter> or <RouterProvider>.
If a component tries to use <Link> or useNavigate() without being inside a router, it throws this error because the useContext hook inside react-router-dom is expecting a valid Router context, but it gets null

>>Missing <BrowserRouter> or <RouterProvider> in App.js
If you use <Link> or useNavigate() inside a component but your app is not wrapped inside a <BrowserRouter> or <RouterProvider>, React doesn't know about the routing system.
Using <Link> Outside the Router Context
If a component containing <Link> is rendered before the router is initialized, the router context doesn't exist yet.
Mixing createBrowserRouter and <BrowserRouter> Incorrectly
If you're using createBrowserRouter (newer method) along with <BrowserRouter> (older method), they may conflict