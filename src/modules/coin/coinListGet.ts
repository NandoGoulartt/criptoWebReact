import { fetcher } from "../fetcher/fetcher";

export const coinListGet = async () => {
  const response = await fetcher({
    url: "coins/markets",
    params: {
      vs_currency: "USD",
    },
  });
 return response
 
}