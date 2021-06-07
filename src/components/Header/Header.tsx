import React from 'react';
import s from './Header.module.scss'
import Man from '../../assets/man.png'
import { IonImg, IonText } from '@ionic/react';

const Header = () => {
    return (
        <div className={s.root}>
            <h1 className={s.header}>Алексей Карачинский</h1>
            <div className={s.block}>
                <div>
                    <IonImg src={Man} />
                </div>
                <IonText>
                    Длительность консультации
                        <br />
                    <b>50 минут</b>
                </IonText>
            </div>
        </div>
    )
}

export default Header;
