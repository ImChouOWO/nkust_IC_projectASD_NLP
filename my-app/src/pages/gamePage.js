import  React, { useState} from "react";
import "../css/style.css";
import "../css/responsive.css";
import Footer from "./footer";
import Headers from "./header";
import { Button, Space } from 'antd';
import Cards from "./game/components/Cards";
import Story from "./game/components/Story";


const GamePage = () => {
    const [cardGame , setCardGame] = useState(false);
    const [storyGame ,setStoryGame] = useState(false);
    const [gameState , setGameState] = useState(true);
    const [loadings, setLoadings] = useState([]);
    const cardLoading = (index) => {
        setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
        });
        setTimeout(() => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            cardSelect();
            return newLoadings;
        });
        }, 1000);
       
    };
    const storyLoading = (index) => {
        setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
        });
        setTimeout(() => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            storySelect();
            return newLoadings;
        });
        }, 1000);
       
    };
    

    const cardSelect =()=>{
        setGameState(false);
        setStoryGame(false);
        setCardGame(true);

    }
    const storySelect =()=>{
        setGameState(false);
        setCardGame(false);
        setStoryGame(true);
    }

  return(
      <main className="main-layout inner_page">
      <Headers/>
      
      <div className="back_re">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="title">
                          <h2></h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="pepole">
         <div className="container">
             <div className="row">
             {gameState ? (
                    <div className="buttonContainer">
                        <div className="selectBtn">
                        <Button
                            type="primary"
                            loading={loadings[0]}
                            onClick={() => cardLoading(0)}
                        >
                            翻牌遊戲
                        </Button>
                        </div>
                        <div className="selectBtn">
                        <Button
                            type="primary"
                            loading={loadings[0]}
                            onClick={() => storyLoading(0)}
                        >
                            看圖說故事
                        </Button>
                        </div>
                        {/* <div className="selectBtn">
                        <Button
                            type="primary"
                            loading={loadings[0]}
                            onClick={() => cardLoading(0)}
                        >
                            memory game
                        </Button>
                        </div>
                        <div className="selectBtn">
                        <Button
                            type="primary"
                            loading={loadings[0]}
                            onClick={() => storyLoading(0)}
                        >
                            puzzle game
                        </Button>
                        </div> */}
                    </div>
                ) : storyGame ? (
                // 加入你想要顯示的拼圖遊戲元件
                    <Story/>
                ) : cardGame ? (
                // 加入你想要顯示的卡片遊戲元件
                <Cards />
                ) : (
                // 在puzzleGame和cardGame都是false的情況下，顯示Cards元件
                // <Cards />
                <div>game error</div>
                )}

            
             
             </div>
         </div>
      </div>
      {/* <!-- footer --> */}
      <Footer/>

  </main>
  )
}
export default GamePage;