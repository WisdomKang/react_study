import React from 'react';

import styled, { css } from 'styled-components';

import { MdDelete, MdDone } from 'react-icons/md';

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px, solid #127fec;
    font-size: 24px;
    display: flex;
    margin-right: 20px;
    cursor: pointer;
    justify-content: center;
    align-items: center;

    ${({ done }) =>
        done &&
        css`
            border: 1px solid #3e8d8a;
            color: #38d9a9;
        `}
`;
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;

    ${({ done }) =>
        done &&
        css`
            color: #ced4da;
        `}
`;
const Remove = styled.div`
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
`;
const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover ${Remove} {
        opacity: 1;
    }
`;

function TodoItem({ id, done, text }) {
    return (
        <TodoItemBlock>
            <CheckCircle>{done && <MdDone></MdDone>}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete></MdDelete>
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;
