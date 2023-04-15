export const exerciseOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Key': '3bec4ca188msh2259d78f7d00ee0p11f8c8jsn111b97ff3d12',
        // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },    
};

export const youtubeOptions = {
    method: 'GET',
	headers: {
		'API-Key': 'AIzaSyCKvYHXH8AoX75aGdlfFe9qmreKOl_xFm0'
	}
}
// export const youtubeOptions = {
//     method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3bec4ca188msh2259d78f7d00ee0p11f8c8jsn111b97ff3d12',
// 		// 'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
// 		'X-RapidAPI-Host': 'https://youtube138.p.rapidapi.com'
// 	}
// }


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}