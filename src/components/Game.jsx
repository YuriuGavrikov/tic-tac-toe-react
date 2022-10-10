import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helper'

import './Game.css'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)
    const handleClick = (index) => {
        const boardCopy = [...board]
        // Определить был ли клик по ячейке или игра закончилась
        if (winner || boardCopy[index]) return
        // Определить чей ход Х ? О
        boardCopy[index] = xIsNext ? 'X' : 'O'
        // Обновить стейт
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }
    const startNewGame = () => {
        return (
            <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))} >Начать сначала</ button>
        )
    }

    return (
        <div className='wrapper'>
            {startNewGame()}
            <Board squares={board} click={handleClick} />
            <p className='gameInfo'>
                {winner ? 'Победитель ' + winner : 'Сейчас ходит ' + (xIsNext ? 'X' : 'O')}
            </p>
        </div>
    );
}

export default Game;
