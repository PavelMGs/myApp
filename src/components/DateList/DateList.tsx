import React from 'react';
import Day from '../Day/Day';
import s from './DateList.module.scss';
import Disable from '../../assets/disable.png';
import Union from '../../assets/Union.png';
import { IonImg } from '@ionic/react';

const time = [1623024000000, 1623283200000, 1623369600000, 1623456000000, 1623542400000, 1623628800000, 1623715200000] //условно, получаем с бэка дни, на которые есть запись

const DateList = () => {
    return (
        <div className={s.root}>
            <div className={s.header_block}>
                <span>Возможная дата</span>
                <div className={s.icons}>
                    <button
                        type="button"
                        onClick={() => console.log('Click')}
                    >
                        <IonImg src={Disable} />
                    </button>
                    <button
                        type="button"
                        onClick={() => console.log('Click')}
                    >
                        <IonImg src={Union} />
                    </button>
                </div>
            </div>
            <div className={s.container}>
                {
                    time.map(item => <Day date={item} />)
                }
            </div>
        </div>
    )
}

export default DateList;
