 
export function isLocalhost(){
    let url = 'https://liveserver.nz'; //Live server
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
        url = 'http://localhost:8000';
    return url;    
}