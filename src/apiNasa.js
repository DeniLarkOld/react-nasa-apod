const API_KEY = 'hTwPam0KjEFfQRXUtife4fN8KVXyrCeFBiMyxjMj';

export const getApod = async (date) => {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
  if(date) url += `&date=${date}`; 

  const response = await fetch(url);
  const data = await response.json();

  return {
    copyright: data.copyright,
    date: data.date,
    explanation: data.explanation,
    hdurl: data.hdurl,
    title: data.title,
    url: data.url
  }
  
}
