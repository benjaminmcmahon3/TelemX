const BASE_URL = `https://lldev.thespacedevs.com/2.2.0/`

export const fetchAllVandyLaunchData = async ()=>{
  try{
    let url = BASE_URL + 'launch/?pad=16&search=SpaceX&mode=detailed'
    let outgoingData = []
    while (url){
      console.log('Fetching data from: ', url)
      const response = await fetch(url)
      const result = await response.json()
      console.log('Page received: ', result)
      outgoingData = outgoingData.concat(result.results);
      url = result.next
    }
    console.log('Outoging data: ', outgoingData)
    saveData(outgoingData)
  }catch(err){
    console.log('Error fetching all Vandy Falcon data: ', err)
  }
}

export const fetchAllBoosters = async ()=>{
  try{

  }catch(err){
    console.log('Error')
  }
}

const saveData = async (incomingData)=>{
  try{
    console.log('Saving data to local storage')
    localStorage.setItem('vandyLaunchData', JSON.stringify(incomingData))
    window.dispatchEvent(new Event('vandyLaunchDataUpdated'))
  }catch(err){
    console.error('Error saving data to local storage: ', err)
  }
}

// fetches the latest Vandy Falcon mission data
const updateVandyFalconData = async ()=>{
  try{
    // need to get local storage, check for differences, and fetch new data only (look for array indexes that do not match)


  }catch(err){
    console.log('Error')
  }
}

// clears all JSON data
const clearData = async ()=>{
  try{
    localStorage.removeItem('vandyFalconData')
  }catch(err){
    console.log('Error')
  }
}
