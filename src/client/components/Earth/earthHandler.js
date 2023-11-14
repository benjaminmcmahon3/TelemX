import { convertDateFromIso, getCurrentIsoDate } from "../../dataHandler"

const baseUrl = `https://lldev.thespacedevs.com/2.2.0/launch/`
const defualtQuery = `?lsp__id=121`
  
  export async function fetchPastLaunches(limit){
    try{
      let fetchQuery = `&limit=${limit}&net__lte=${getCurrentIsoDate()}&ordering=-net`
      const response = await fetch(baseUrl + defualtQuery + fetchQuery)
      const result = await response.json()
      return (result.results)
    }catch(err){
      console.log(`Error`, err)
    }
  }

  export async function fetchFutureLaunches(limit){
    try{
      let fetchQuery = `&limit=${limit}&net__gte=${getCurrentIsoDate()}&ordering=net`
      const response = await fetch(baseUrl + defualtQuery + fetchQuery)
      const result = await response.json()
      return (result.results)
    }catch(err){
      console.log(`Error`, err)
    }
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