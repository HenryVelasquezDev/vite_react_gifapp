

export const getGifs = async ( categoria) => {
    const baseUrl = import.meta.env.VITE_GIPHY_URL ;
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY ;
    const url = `${baseUrl}/search?api_key=${apiKey}&q=${categoria}&limit=10`;
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
