import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const DragItem = styled.div`
  user-select: none;
  min-height: 50px;
  padding: 16px;
  font-size: 1em;
  text-align: center;
  background-color: #7895b2;
  color: #e8dfca;
  margin-bottom: 20px;
  position: relative;
`;

const TimeAvatar = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background-color: #e38b29;
  color: black;
  position: absolute;
  right: 2%;
  top: -20%;
`;

const Card = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <DragItem
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {item.content}

            <TimeAvatar>{item.score}</TimeAvatar>
          </DragItem>
        );
      }}
    </Draggable>
  );
};

export default Card;
