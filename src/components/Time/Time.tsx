import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTime } from '../../redux/slices/timeSlice';
import { toTwoDigitFormat } from '../../utils/toTwoDigitFormat';
import s from './Time.module.scss';

interface ITime {
    date: number,
    index: number,
    selected: boolean,
}

const Time: React.FC<ITime> = ({ date, index, selected }) => {
    const dispatch = useDispatch()
    const time = toTwoDigitFormat(date); // функция для преобразования времени в фромат с двумя цифрами (9:0 => 09:00 и тд)
    return (
        <div 
            className={`${s.root} ${selected ? s.selected : ''}`}
            onClick={() => dispatch(setTime(index))}
        >
            { time }
        </div>
    )
}

export default Time
