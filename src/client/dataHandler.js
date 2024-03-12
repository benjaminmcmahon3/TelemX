// remove "dev" from apiBranch for limited but accurate API data
const apiBranch = 'lldev'
const baseUrl = `https://${apiBranch}.thespacedevs.com/2.2.0/launch/`
const locationReference = {
  'vandy': 11,
  'cape': 12,
  'starbase': 143
};
  
export function getCurrentTime(){
    let isoDate = getCurrentIsoDate()
    return(convertDateFromIso(isoDate))
}

export function getCurrentIsoDate(){
  let date = new Date()
  return(date.toISOString())
}

export function convertDateFromIso(isoDate){
  let d = isoDate.split(/\D+/);
  let unformattedDate = new Date(Date.UTC(d[0], --d[1], d[2], d [3], d[4], d[5], d[6]))
  return (unformattedDate.toLocaleDateString('en-US', { 
    year: 'numeric',
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }))
}

export async function fetchSingleLaunch(id){
  try{
    const url = new URL(id, baseUrl)
    const response = await fetch(url);
    if(!response.ok){
      throw new Error(`HTTP error, status: ${response.status}`);
    }
    const result = await response.json()
    return (result)
  }catch(err){
    throw err
  }
}

export async function fetchLaunches(fetchQuery, signal){
  try{
    const url = new URL(fetchQuery, baseUrl)
    const response = await fetch(url, { signal });
    if(!response.ok){
      throw new Error(`HTTP error, status: ${response.status}`);
    }
    const result = await response.json()
    console.log('Resultant launch data: ', result);
    return (result.results)
  }catch(err){
    throw err;
  }
}

export async function queryDispatcher(timeFrame, limit, launchSite, signal){
  try{
    // Validates input parameters
    if(!['past', 'future'].includes(timeFrame)){
      throw new Error(`Invalid timeFrame: ${timeFrame}`);
    }
    if(!limit){
      throw new Error(`Invalid limit: ${limit}`);
    }
    // Sets filters according to input timeFrame
    const timeFilter = timeFrame === 'past' ? `net__lte=${getCurrentIsoDate()}` : `net__gte=${getCurrentIsoDate()}`;
    const ordering = timeFrame === 'past' ? 'ordering=-net' : 'ordering=net';
    // Builds query
    let fetchQuery = `?lsp__id=121&limit=${limit}&${timeFilter}&${ordering}`;
    if (launchSite){
      fetchQuery += `&pad__location=${locationReference[launchSite]}`;
    }
    return await fetchLaunches(fetchQuery, signal);
  }catch(err){
    throw err;
  }
}