type fetcherProps = {
  url: string | URL | globalThis.Request,
  init?: RequestInit,
  params: any
}

const getParams = ( params: string[][] | Record<string, string> | string | URLSearchParams ) => {
  const parmsUrl = '?' + new URLSearchParams(params);
  return parmsUrl
}

const fetcher = async ({ url, init, params }:fetcherProps) => {
  const baseUrl = process.env.REACT_APP_API_URL
  const paramsUrl = getParams(params)
  const urlRequest = `${baseUrl}/${url}${paramsUrl}`
  const options = {
    Headers: { "x_cg_demo_api_key" : process.env.REACT_APP_API_TOKEN },
    ...init
  }
  try{
    const response = await fetch(urlRequest, options);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    
    return { status: true, data:json }

  } catch (error){
  }
}

export { fetcher }
