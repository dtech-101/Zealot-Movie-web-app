const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTRjZTJlOTE5NWU1NDBhZmNhZWVhMjJhNDRmNTUxNSIsInN1YiI6IjY0N2U4ZmE1OTM4MjhlMDBkY2RlMmIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Bdl9NeveDzyHvJA2APag6FlVMfmbCraSb4KhsELQKr0'
}};
  
export const fetchDataFromApi = async (arg) => {
  try {
    const response = await fetch(arg,options)
    if(!response.ok)
    {
      throw new Error('Network response was not okay')
    }
    return response.json();
  } catch (error) {
      console.log('Error fetvhing data from api')
      throw error;
}}
