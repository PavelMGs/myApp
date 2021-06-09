import React from 'react';
import { useSelector } from 'react-redux';
import Time from '../Time/Time';
import { RootState }from '../../redux/store';

import s from './TimeList.module.scss';

interface ITimeList {
    time: number[],
}

const TimeList: React.FC<ITimeList> = ({ time }) => {
    const settedTime = useSelector((store: RootState) => store.time.value);
    return (
        <div className={s.root}>
            <div>
                Свободное время
            </div>
            {/* для горизонтального скролла */}
            <div className={s.container}>
                {
                    time.map((item, index) => <Time date={item} index={index} key={`${index}time`} selected={index === settedTime} />)
                }
            </div>
        </div>
    )
}

export default TimeList;
