
function route(handle, pathname, response, request){
	if (typeof handle[pathname] === "function"){
        console.log("route a request for " + pathname);
        handle[pathname](response, request);
	}else{
        console.log("no handle for request");
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;