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