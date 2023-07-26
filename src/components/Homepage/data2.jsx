const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTRjZTJlOTE5NWU1NDBhZmNhZWVhMjJhNDRmNTUxNSIsInN1YiI6IjY0N2U4ZmE1OTM4MjhlMDBkY2RlMmIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bdl9NeveDzyHvJA2APag6FlVMfmbCraSb4KhsELQKr0'
    }
  };


const apiUrl = 'https://api.themoviedb.org/3/trending/all/day';

export const fetchDataFromApi = async () => {
  try {
    const response = await fetch(apiUrl,options);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    throw error;
  }
};

export const GetTrillerData = async (dataID) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${dataID}/videos`,options);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    throw error;
  }
};

export const FetchTrends = async (time) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/${time}`,options)
    if(!response.ok)
    {
      throw new Error('Network response was not okay')
    }
    return response.json();
  } catch (error) {
      console.log('Error fetvhing data from api')
      throw error;
  }
}


export const FetchToprated = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated',options)
    if(!response.ok)
    {
      throw new Error('Network response was not okay')
    }
    return response.json();
  } catch (error) {
      console.log('Error fetvhing data from api')
      throw error;
  }
}
