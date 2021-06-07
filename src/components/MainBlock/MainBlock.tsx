import { IonHeader } from '@ionic/react';
import React from 'react';
import DateList from '../DateList/DateList';
import Header from '../Header/Header';
import s from './MainBlock.module.scss';

const MainBlock = () => {
    return (
        <div className={s.root}>
            <div style={{ boxShadow: 'none'}}>
                <Header />
            </div>
            <DateList />
        </div>
    )
}

export default MainBlock;
