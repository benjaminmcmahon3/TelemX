import { getCurrentIsoDate } from "../../dataHandler"

const baseUrl = `https://lldev.thespacedevs.com/2.2.0/launch/?lsp__id=121`
  
  export async function fetchPast(limit){
    try{
      let fetchQuery = `&limit=${limit}&net__lte=${getCurrentIsoDate()}&ordering=-net`
      const response = await fetch(baseUrl + fetchQuery)
      const result = await response.json()
      console.log('Past global launch data: ', result)
      return (result.results)
    }catch(err){
      console.log(`Error fetching past global launch data: `, err)
    }
  }

  export async function fetchFuture(limit){
    try{
      let fetchQuery = `&limit=${limit}&net__gte=${getCurrentIsoDate()}&ordering=net`
      const response = await fetch(baseUrl + fetchQuery)
      const result = await response.json()
      console.log('Future global launch data: ', result)
      return (result.results)
    }catch(err){
      console.log(`Error fetching future global launch data: `, err)
    }
  }