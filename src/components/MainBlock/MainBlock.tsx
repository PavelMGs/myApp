import { IonHeader } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../../firestore';
import { setDay } from '../../redux/slices/daySlice';
import { setTime } from '../../redux/slices/timeSlice';
import { RootState } from '../../redux/store';
import DateList from '../DateList/DateList';
import Header from '../Header/Header';
import RecordBlock from '../RecordBlock/RecordBlock';
import TimeList from '../TimeList/TimeList';
import s from './MainBlock.module.scss';

const timestamp = [1623283200000, 1623369600000, 1623456000000, 1623542400000, 1623628800000, 1623715200000] // условно, получаем с бэка дни, на которые есть запись
const timeL = [1623078000000, 1623079800000, 1623085200000, 1623087000000] 

// Условный объект, который получаем с бэка в массиве, где day - день, time - массив с часами, на которые можно записаться
// const obj = {
//     day: 1623283200000,
//     time: [1623078000000, 1623079800000, 1623085200000, 1623087000000] 
// }

interface IResponce {
    day: number,
    time: number,
}

const MainBlock = () => {
    const state = useSelector((state: RootState) => state);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const dispatch = useDispatch();

    const handleGetRecords = async () => {
        const data = await db.collection('regisrtation').doc('Time').get();
        const { day, time } = data.data() as IResponce;
        dispatch(setDay(timestamp.indexOf(day)));
        dispatch(setTime(timeL.indexOf(time)));
    }

    useEffect(() => {
        handleGetRecords();
    }, [])

    return (
        <div className={s.root}>
            <div style={{ boxShadow: 'none'}}>
                <Header />
            </div>
            <DateList timestamp={timestamp} />
            <TimeList time={timeL} />
            <RecordBlock timestamp={timestamp[state.day.value]} time={timeL[state.time.value]} />
        </div>
    )
}

export default MainBlock;
