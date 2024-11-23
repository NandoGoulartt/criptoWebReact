import { useEffect, useState } from "react";
import { coinListGet } from "./modules/coin/coinListGet";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

function App() {
  const [coins, setCoins] = useState<any[]>([]);
  const coinsListGet = async () => {
    const response = await coinListGet();
    console.log(response);
    setCoins(response?.data);
  };
  useEffect(() => {
    coinsListGet();
  }, []);

  const rows: GridRowsProp = coins.map(
    (coin: {
      id: string;
      name: string;
      image: string;
      current_price: number;
      symbol: string;
    }) => ({
      id: coin.id,
      name: { image: coin.image, name: coin.name, symbol: coin.symbol },
      current_price: coin.current_price,
    })
  );

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Moeda",
      width: 150,
      renderCell: (params) => (
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <img
            src={params.value.image}
            alt="coin"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "2px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "14px",
                margin: 0,
                lineHeight: "1",
              }}
            >
              {params.value.name}
            </p>
            <p
              style={{
                fontWeight: "bold",
                color: "gray",
                fontSize: "12px",
                margin: 0,
                lineHeight: "1",
              }}
            >
              {params.value.symbol}
            </p>
          </div>
        </div>
      ),
    },
    { field: "current_price", headerName: "Preço", width: 150 },
  ];

  return (
    <div className="App">
      <header className="App-header"></header>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default App;
