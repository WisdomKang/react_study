import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;

    border-bottom: 1px solid black;
    h1 {
        margin: 0;
        font-size: 36px;
        color: red;
    }

    .day {
        margin-top: 4px;
        color: blue;
        font-size: 21px;
    }

    .tasks-left {
        color: green;
        font-size: 23px;
    }
`;
function TodoHead() {
    return (
        <TodoHeadBlock>
            <h1>오늘이다 색꺄</h1>
            <div className="day">일요일</div>

            <div className="tasks-left"> 왼쪼ㅓㄱ이다 자식아 </div>
        </TodoHeadBlock>
    );
}

export default TodoHead;
