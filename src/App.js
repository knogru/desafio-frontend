import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.scss";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios
        .get(
          "https://raw.githubusercontent.com/jsvini/desafio-frontend/master/assets/api.json"
        )
        .catch((error) => {
          console.log(error);
        });
      setData(response.data.data);
    }
    fetchData();
  }, []);

  const size = 10;
  const filter = data.slice(0, size);
  var cards = [];

  if (data) {
    /* a condicional da variável price serve para saber se o anuncio é de aluguel ou venda
     e então exibir o preço correspondente
     
     em address eu não tinha certeza se deveria ser exibido com o cep e cidade 
     (não sou muito boa em alemão), mas foram as informações mais próximas do layout */

    cards = filter.map((card, i) => {
      let url =
          card.advertisementAssets[0].advertisementThumbnails.inventory_m.url,
        title = card.title,
        id = card.additionalId,
        address = `${card.realestateSummary.address.postalCode} ${card.realestateSummary.address.city}`,
        price = card.purpose
          ? card.advertisementPrice.sellPrice
          : card.advertisementPrice.baseRent,
        numberOfRooms = card.realestateSummary.numberOfRooms,
        space = Math.round(card.realestateSummary.space),
        purpose = card.purpose ? "Kaufen" : "Mieten";
      return (
        <Card
          key={i}
          url={url}
          title={title}
          id={id}
          address={address}
          price={price}
          numberOfRooms={numberOfRooms}
          space={space}
          purpose={purpose}
        />
      );
    });
  }

  return <div className="container">{cards}</div>;
}

export default App;
