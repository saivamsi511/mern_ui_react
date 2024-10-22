import vamsi from './photos/Photo1.jpeg';
import audios from './photos/Arjun Reddy Love BGM.mp3'
import { createContext } from 'react';
export const imageOpen = () => <img src = ""/>;
export function head2(props){
return  (
     <h1>{props.user.email}:{props.user.token}</h1>
)
}
export const loggedinUserContext = createContext({ email:"vamsi@gmail.com",token:"aqddqdqd"})
export const image = <img src = {vamsi} width={200} height={200}></img>
export const audioc =<audio src={audios} controls></audio> 

export var svgIcon = <svg viewBox="0 0 24 24" fill="none" width={200} height={200} ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12C20 7.58172 16.4183 4 12 4M12 20C14.5264 20 16.7792 18.8289 18.2454 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 12H14M14 12L11 9M14 12L11 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

export default image;