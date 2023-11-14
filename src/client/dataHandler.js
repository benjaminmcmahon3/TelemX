// lsp_id=121 filters to only show SpaceX contracts
// limit=5 sets returned query results to 5
  const baseUrl = `https://lldev.thespacedevs.com/2.2.0/launch`
  const defualtQuery = `?lsp__id=121`
  
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
      minute: '2-digit'
    }))
  }

  export async function fetchSingleLaunch(id){
    try{
      const response = await fetch(baseUrl + `/${id}`)
      const result = await response.json()
      return (result)
    }catch(err){
      console.log('Error', err)
    }
  }