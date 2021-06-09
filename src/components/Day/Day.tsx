import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDay } from '../../redux/slices/daySlice';
import s from './Day.module.scss';

interface IDay {
    date: number,
    selected: boolean,
    key: number,
    id: number,
}

const day = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const Day: React.FC<IDay> = ({ date, selected, id }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [incomingDate, setIncomingDate] = useState(new Date(date));

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(selected);
    }, [])

    // проверка, является ли переданный день сегодняшним
    if (currentDate.getDate() === incomingDate.getDate() && currentDate.getMonth() === incomingDate.getMonth()) {
        return (
            <div 
                className={`${s.root} ${selected ? s.selected : ''}`}
                onClick={() => dispatch(setDay(id))} //при клике на дату, отправляем в стор ид выбранной даты
            >
                <div className={s.day_name}>
                    Сегодня
                </div>
                <div className={s.date}>
                    { incomingDate.getDate() }
                </div>
            </div>
        )
        // проверка на случай, если бэк прислал массив с прошедшими датами
    } else if ( currentDate.getDate() > incomingDate.getDate() 
                && currentDate.getMonth() >= incomingDate.getMonth() 
                || currentDate.getFullYear() > incomingDate.getFullYear()) {
        return null;
    }
    return (
        <div
            className={`${s.root} ${selected ? s.selected : ''}`}
            onClick={() => dispatch(setDay(id))} //при клике на дату, отправляем в стор ид выбранной даты
        >
            <div className={s.day_name}>
                { day[incomingDate.getDay()] }
            </div>
            <div className={s.date}>
                    { incomingDate.getDate() }
            </div>
        </div>
    )
}

export default Day;
