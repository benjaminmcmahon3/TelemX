import { getCurrentIsoDate } from "../../dataHandler"

const baseUrl = `https://lldev.thespacedevs.com/2.2.0/launch/?lsp__id=121`
const locationReference = {
  'vandy': 11,
  'cape': 12,
  'starbase': 143
};

export async function fetchPast(launchSite, limit){
  try{
    let fetchQuery = `&limit=${limit}&pad__location=${locationReference[launchSite]}&net__lte=${getCurrentIsoDate()}&ordering=-net`
    const response = await fetch(baseUrl + fetchQuery)
    const result = await response.json()
    return (result.results)
  }catch(err){
    console.log(`Error fetch past launch data from ${launchSite}`, err)
  }
}

export async function fetchFuture(launchSite, limit){
  try{
    let fetchQuery = `&limit=${limit}&pad__location=${locationReference[launchSite]}&net__gte=${getCurrentIsoDate()}&ordering=net`
    const response = await fetch(baseUrl + fetchQuery)
    const result = await response.json()
    return (result.results)
  }catch(err){
    console.log(`Error fetching future launch from ${launchSite}`)
  }
}