const splitURLAdress = (url) => {
    let data = url.split("://")
    let protocol = data[0];
    data = data[1].split(".com");
    let domain = data[0];
    data = data[1].split("/");

    if (data[1]) {
        return [protocol, domain, data[1]]
    }

    return [protocol, domain]
}

console.log(splitURLAdress("https://www.w3resource.com/javascript-exercises/"))