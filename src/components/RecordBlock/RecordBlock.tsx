import React, { useEffect, useState } from 'react';
import months from '../../utils/months';
import { toTwoDigitFormat } from '../../utils/toTwoDigitFormat';
import s from './RecordBlock.module.scss';
import db  from '../../firestore';

interface IRecordBlock {
    timestamp: number,
    time: number,
}

const RecordBlock: React.FC<IRecordBlock> = ({ timestamp, time }) => {
    const [day, setDay] = useState(new Date(timestamp));
    const [hours, setHours] = useState(toTwoDigitFormat(time));
    useEffect(() => {
        setDay(new Date(timestamp));
    }, [timestamp]);

    useEffect(() => {
        setHours(toTwoDigitFormat(time));
    }, [time]);

    const handleSubmit = () => {
        db.collection('regisrtation').doc('Time').set({time, day: timestamp})  // отправляем нашу регистрацию в БД
    }

    return (
        <div className={s.root}>
            <div className={s.top_block}>
                <div className={s.date}>

                    <span>Дата</span>

                    <div>
                        {day.getDate()}
                        { //преобразуем индекс месяца в строку 
                            months[day.getMonth()]
                        }
                    </div>

                </div>
                <div className={s.pseudo} />
                <div className={s.time}>
                    <span>Время</span>
                    <div>{hours}</div>
                </div>
            </div>

            <button
                type="submit"
                onClick={handleSubmit}
            >
                Записаться на бесплатную встречу
            </button>
        </div>
    )
}

export default RecordBlock
