// lsp_id=121 filters to only show SpaceX contracts
// limit=5 sets returned query results to 5
  const baseUrl = `https://lldev.thespacedevs.com/2.2.0/`
  const defualtQuery = `launch/?lsp__id=121&`
  
  function getCurrentIsoDate(){
    let date = new Date()
    return(date.toISOString())
  }
  
  export async function fetchFutureLaunches(locationId, limit){
    try{
      let isoDate = getCurrentIsoDate()
      let fetchQuery = `limit=${limit}&pad__location=${locationId}&net__gte=${isoDate}&ordering=net`
      const response = await fetch(baseUrl + defualtQuery + fetchQuery)
      const result = await response.json()
      console.log('Future results from dataHandler: ', `Location ID: ${locationId}`, result)
      return (result.results)
    }catch(err){
      console.log(`Error fetching future launch from ${launchSite}`)
    }
  }
  
  export async function fetchPastLaunches(locationId, limit){
    try{
      let isoDate = getCurrentIsoDate()
      let fetchQuery = `limit=${limit}&pad__location=${locationId}&net__lte=${isoDate}&ordering=-net`
      const response = await fetch(baseUrl + defualtQuery + fetchQuery)
      const result = await response.json()
      console.log('Past results from dataHandler: ', `Location ID: ${locationId}`, result)
      return (result.results)
    }catch(err){
      console.log(`Error fetch past launch data from ${launchSite}`, err)
    }
  }

  export function convertDateFromIso(isoDate){
    let d = isoDate.split(/\D+/);
    let unformattedDate = new Date(Date.UTC(d[0], --d[1], d[2], d [3], d[4], d[5], d[6]))
    return (unformattedDate.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }))
  }

  export async function fetchSingleLaunch(id){
    try{
      const response = await fetch(baseUrl + `launch/${id}`)
      const result = await response.json()
      console.log('Single launch from dataHandler: ', result)
      return (result)
    }catch(err){
      console.log('Error', err)
    }
  }

  export async function fetchDispatcher(queryPackage){
    try{
      if (queryPackage[locationId]){
        console.log('contains location')
      }else if (queryPackage[limit]){
        console.log('contains limit')
      }else if (queryPackage[net__lte]){
        console.log('Dispatching to ')
      }
    }catch(err){
      console.log('Error', err)
    }
  }