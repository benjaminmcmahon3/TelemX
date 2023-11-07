// BASE_URL filters through all launches, looking for the SLC-4E pad, and Falcon rocket
const BASE_URL = 'https://lldev.thespacedevs.com/2.2.0/launch/?name=&slug=&rocket__configuration__name=&rocket__configuration__id=&status=&rocket__spacecraftflight__spacecraft__name=&rocket__spacecraftflight__spacecraft__name__icontains=&rocket__spacecraftflight__spacecraft__id=&rocket__configuration__manufacturer__name=&rocket__configuration__manufacturer__name__icontains=&rocket__configuration__full_name=&rocket__configuration__full_name__icontains=Falcon&mission__orbit__name=&mission__orbit__name__icontains=&r_spacex_api_id=&pad=16&pad__location=&orbital_launch_attempt_count=&orbital_launch_attempt_count__lt=&orbital_launch_attempt_count__lte=&orbital_launch_attempt_count__gt=&orbital_launch_attempt_count__gte=&location_launch_attempt_count=&location_launch_attempt_count__lt=&location_launch_attempt_count__lte=&location_launch_attempt_count__gt=&location_launch_attempt_count__gte=&pad_launch_attempt_count=&pad_launch_attempt_count__lt=&pad_launch_attempt_count__lte=&pad_launch_attempt_count__gt=&pad_launch_attempt_count__gte=&agency_launch_attempt_count=&agency_launch_attempt_count__lt=&agency_launch_attempt_count__lte=&agency_launch_attempt_count__gt=&agency_launch_attempt_count__gte=&orbital_launch_attempt_count_year=&orbital_launch_attempt_count_year__lt=&orbital_launch_attempt_count_year__lte=&orbital_launch_attempt_count_year__gt=&orbital_launch_attempt_count_year__gte=&location_launch_attempt_count_year=&location_launch_attempt_count_year__lt=&location_launch_attempt_count_year__lte=&location_launch_attempt_count_year__gt=&location_launch_attempt_count_year__gte=&pad_launch_attempt_count_year=&pad_launch_attempt_count_year__lt=&pad_launch_attempt_count_year__lte=&pad_launch_attempt_count_year__gt=&pad_launch_attempt_count_year__gte=&agency_launch_attempt_count_year=&agency_launch_attempt_count_year__lt=&agency_launch_attempt_count_year__lte=&agency_launch_attempt_count_year__gt=&agency_launch_attempt_count_year__gte=&net__gt=&net__lt=&net__gte=&net__lte=&window_start__gt=&window_start__lt=&window_start__gte=&window_start__lte=&window_end__gt=&window_end__lt=&window_end__gte=&window_end__lte=&last_updated__gte=&last_updated__lte=&day=&month=&year=&id=&include_suborbital=unknown&is_crewed=unknown&launcher_config__id=&status__ids=&spacecraft_config__ids=&serial_number=&video_url='

// fetches all Vandy Falcon mission data
export const fetchAllVandyFalconData = async ()=>{
  try{
    let url = BASE_URL
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

// adds whatever data it is given to a JSON file
const saveData = async (incomingData)=>{
  try{
    console.log('Saving data to local storage')
    localStorage.setItem('vandyFalconData', JSON.stringify(incomingData))
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
