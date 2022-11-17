

export const getGifs = async ( categoria) => {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=M1iKEqA5ZducbcPLAOrICrSj8Xb1yb8B&q=${categoria}&limit=10`;
    const resp = await  fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images.downsized_medium.url 
        }

    });

    return gifs
}
