export const getGifs = async( category ) => {
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=wvqg9hPF7J3bFMSuaY1N0R20eEeywM0i`;
    const resp = await fetch(url);
    //solo me interesa la data dentro 
    //de la 'data' asi que uso destructuracion
    const {data} = await resp.json();
    //extraigo solo la informacion que necesito, no todo
    const gifs = data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })

    return gifs;
    /*console.log(gifs);
    setImages(gifs);*/
}