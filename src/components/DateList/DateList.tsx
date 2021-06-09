import React, { useEffect } from 'react';
import Day from '../Day/Day';
import s from './DateList.module.scss';
import Disable from '../../assets/disable.png';
import Union from '../../assets/Union.png';
import { IonImg } from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface IDayList {
    timestamp: number[],
}

const DateList: React.FC<IDayList> = ({ timestamp }) => {
    const day = useSelector((state: RootState) => state.day.value)

    return (
        <div className={s.root}>
            <div className={s.header_block}>
                <span>Возможная дата</span>
                <div className={s.icons}>
                    <button
                        type="button"
                    >
                        <IonImg src={Disable} />
                    </button>
                    <button
                        type="button"
                    >
                        <IonImg src={Union} />
                    </button>
                </div>
            </div>
            {/* обёртка для реализации горизонтального скролла */}
            <div
                className={s.container}
            >
                {
                    timestamp.map((item, index) =>  <Day date={item} selected={index === day} key={`${index}day`} id={index}/>) // если индекс совпадает со значениев в сторе, будем применять другие стили к дате
                }
            </div>
        </div>
    )
}

export default DateList;
