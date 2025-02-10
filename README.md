npm i react-redux @react/toolkit
Create store
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
