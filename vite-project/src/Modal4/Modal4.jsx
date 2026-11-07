import { useState } from 'react'
import { Photo } from '../Photo'
import classes from './Modal4.module.scss'

export default function Modal4({ onClose, onSwitch }) {
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const handleSubmit = () => {
        if (onSwitch) {
            onSwitch('Login')
        } else if (onClose) {
            onClose()
        }
    }

    return (
        <div className={classes.overlay} onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
        }}>
            <div className={classes.modalWindow}>
                <button className={classes.closeBtn} onClick={onClose}>×</button>

                <div className={classes.left}>
                    <div className={classes.logo}>
                        <img src={Photo.Worktap} alt='Worktap' />
                    </div>

                    <div className={classes.formHeader}>
                        <p className={classes.subtitle}>Давайте восстановим Вам пароль</p>
                        <h2>Придумайте новый пароль</h2>
                    </div>

                    <div className={classes.fields}>
                        <div className={classes.field}>
                            <label>Пароль</label>
                            <div className={classes.inputWrap}>
                                <input
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {!password && <span className={classes.hint}>Пароль</span>}
                            </div>
                        </div>

                        <div className={classes.field}>
                            <label>Повторите пароль</label>
                            <div className={classes.inputWrap}>
                                <input
                                    type='password'
                                    value={repeatPassword}
                                    onChange={(e) => setRepeatPassword(e.target.value)}
                                />
                                {!repeatPassword && <span className={classes.hint}>Пароль</span>}
                            </div>
                        </div>
                    </div>

                    <div className={classes.actions}>
                        <button
                            type='button'
                            className={classes.submitBtn}
                            onClick={handleSubmit}
                        >
                            Изменить пароль
                        </button>
                    </div>
                </div>

                <div className={classes.right}>
                    <img src={Photo.Girl} alt='Worktap workspace' className={classes.bgImg} />
                    <div className={classes.quoteCard}>
                        <p>
                            Worktap — это маркетплейс фриланс услуг, где можно купить услугу как товар в магазине или создать индивидуальный заказ на бирже.
                        </p>
                    </div>
                    <div className={classes.dots}>
                        <span className={classes.dotActive} />
                        <span className={classes.dot} />
                        <span className={classes.dot} />
                        <span className={classes.dot} />
                    </div>
                </div>
            </div>
        </div>
    )
}
