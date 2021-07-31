import { useEffect, useState } from "react";
import * as S from "./styles";

import { gatinho, outrogatinho } from "../../assets";
import Button from "../../components/Button";

function Home() {
  const [user, setUser] = useState("gaby");

  useEffect(() => {
    setTimeout(() => {
      setUser("outra coisa");
    }, 3000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <S.Container user={user}>
          <S.Title>
            Edit <code>src/App.js</code> and save to reload.
          </S.Title>
          <img alt="" src={gatinho} />
          <img alt="" src={outrogatinho} />
        </S.Container>
        <S.Barrinha />
        <Button backgroundColor="green" width="200px" color="yellow">
          oi
        </Button>
      </header>
    </div>
  );
}

export default Home;
