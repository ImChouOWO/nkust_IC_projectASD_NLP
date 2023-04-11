import React from "react";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Card from "./Card";
import { nanoid } from "nanoid";
import styled from "styled-components";

const DropContextWrapper = styled.div`
  font-family: sans-serif;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 10px;
  min-height: 500px;
`;

const DroppableContainer = styled.div`
  background-color: #f5efe6;
  height: 100%;
`;


const SectionWrapper = styled.div`
  flex-basis: 50%;
`;

const SectionTitleWrapper = styled.div`
  display: flex;
  position: relative;
`;

const SectionTitleInfo = styled.p`
  position: absolute;
  top: 0;
  right: 0;
`;

const WarningText = styled.p`
  color: red;
`;

function Game() {
  const [itemObj, setItemObj] = useState({
    productBacklog: {
      items: [
        {
          content: "前台職缺列表（職缺詳細內容、點選可發送應徵意願）",
          id: nanoid(),
          score: 5
        },
        { content: "應徵者的線上履歷編輯器", id: nanoid(), score: 13 },
        { content: "會員系統（登入、註冊、權限管理）", id: nanoid(), score: 8 },
        {
          content: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
          id: nanoid(),
          score: 8
        }
      ]
    },
    sprintList: {
      items: []
    }
  });

  const [totalScoreSum, setTotalScoreSum] = useState(0);

  const onDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    // 拷貝新的items (來自state)
    let newItemObj = { ...itemObj };

    // splice(start, deleteCount, item )
    // 從source剪下被拖曳的元素
    const [remove] = newItemObj[source.droppableId].items.splice(
      source.index,
      1
    );

    // 在destination位置貼上被拖曳的元素
    newItemObj[destination.droppableId].items.splice(
      destination.index,
      0,
      remove
    );

    // set state新的 itemObj
    setItemObj(newItemObj);

    // 計算sprint內的分數總和
    const newTotalScoreSum = newItemObj.sprintList.items.reduce(
      (acc, val) => acc + val.score,
      0
    );
    setTotalScoreSum(newTotalScoreSum);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <DropContextWrapper>
          <SectionWrapper>
            <h2>Product Backlog</h2>
            <Droppable droppableId="productBacklog">
              {(provided, snapshot) => (
                <DroppableContainer
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {itemObj.productBacklog.items.map((item, index) => (
                    <Card item={item} index={index} key={item.id} />
                  ))}
                  {provided.placeholder}
                </DroppableContainer>
              )}
            </Droppable>
          </SectionWrapper>

          <SectionWrapper>
            <SectionTitleWrapper>
              <h2>Sprint </h2>
              <SectionTitleInfo>20點/5人</SectionTitleInfo>
            </SectionTitleWrapper>

            <Droppable droppableId="sprintList">
              {(provided, snapshot) => (
                <DroppableContainer
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {itemObj.sprintList.items.map((item, index) => (
                    <Card item={item} index={index} key={item.id} />
                  ))}
                  {provided.placeholder}
                </DroppableContainer>
              )}
            </Droppable>
            <p>{`目前點數: ${totalScoreSum}`}</p>
            <WarningText>
              {totalScoreSum > 20 && "點數已超出上限，請移除一些項目"}
            </WarningText>
          </SectionWrapper>
        </DropContextWrapper>
      </DragDropContext>
    </>
  );
}

export default Game;
