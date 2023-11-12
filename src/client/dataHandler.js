// lsp_id=121 filters to only show SpaceX contracts
// limit=5 sets returned query results to 5
// lsp_id=121
  const baseUrl = `https://lldev.thespacedevs.com/2.2.0/`
  const defualtQuery = `launch/?limit=5&`
  
  function getConvertCurrentDate(){
    let date = new Date()
    return(date.toISOString())
  }
  
  export async function fetchFutureLaunches(locationId){
    try{
      let gte = getConvertCurrentDate()
      console.log(`Fetching future launch data after ${gte}, from location ${locationId}`)
  
      let fetchQuery = `pad__location=${locationId}&net__gte=${gte}&ordering=net`
      const response = await fetch(baseUrl + defualtQuery + fetchQuery)
      const result = await response.json()
      console.log('Future results from dataHandler: ', result)
      return (result.results)
  
    }catch(err){
      console.log(`Error fetching future launch from ${launchSite}`)
    }
  }
  
  export async function fetchPastLaunches(locationId){
    try{
      let lte = getConvertCurrentDate()
      console.log(`Fetching past launch data before ${lte}, from location ${locationId}`)
  
      let fetchQuery = `pad__location=${locationId}&net__lte=${lte}&ordering=-net`
      const response = await fetch(baseUrl + defualtQuery + fetchQuery)
      const result = await response.json()
      console.log('Past results from dataHandler: ', result)
      return (result.results)
  
    }catch(err){
      console.log(`Error fetch past launch data from ${launchSite}`, err)
    }
  }
