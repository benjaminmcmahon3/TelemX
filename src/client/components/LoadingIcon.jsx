import { useEffect, useState } from "react"

export default function LoadingIcon(){

  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(()=>{
    const startLoading = ()=>{
      setIsLoading(true)
    }
    const stopLoading = ()=>{
      setIsLoading(false)
    }

    window.addEventListener('startLoading', startLoading);
    window.addEventListener('stopLoading', stopLoading);

    return(()=>{
      window.removeEventListener('startLoading', startLoading);
      window.removeEventListener('stopLoading', stopLoading);
    })
  },[isLoading])

  if(!isLoading){
    return null
  }

  return(
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .loadingIcon {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 2s linear infinite;
          }
        `}
      </style>
      <div className="loadingIcon"></div>
    </>
  )
}