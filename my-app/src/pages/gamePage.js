import  React, { useState} from "react";
import Footer from "./ver2.0/footer";
import Headers from "./ver2.0/header";
import { Button, Space } from 'antd';
import Cards from "./game/components/Cards";
import Story from "./game/components/Story";
import "./ver2.0/css/game.css"


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
      <>
      <Headers/>
      
      <div className="titleList">
         <span className="text">小遊戲</span>
      </div>
        <div className="gameContainer">

        
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
      {/* <!-- footer --> */}
     
      </>

  )
}
export default GamePage;