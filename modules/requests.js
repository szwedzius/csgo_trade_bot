const req = async (url) => {
    const basic = await fetch(url);
    const response = await basic.json();
    return response;
}

req("https://api.csgofloat.com/?url=steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S76561198084749846A698323590D7935523998312483177")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })