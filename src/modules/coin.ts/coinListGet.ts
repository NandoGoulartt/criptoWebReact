import { fetcher } from "../fetcher/fetcher";

const coinListGet = async () => {
  const response = await fetcher({
    url: "coins/markets",
    params: {
      vs_currency: "BRL",
      pais: "brasil",
      estado: "SC",
    },
  });

  return response
}