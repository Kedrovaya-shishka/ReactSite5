import { useState } from 'react'
import { Photo } from '../Photo'
import classes from './Modal3.module.scss'

export default function Modal3({ onClose, onSwitch }) {
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')

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
                        <p className={classes.subtitle}>Мы отправим Вам код для восстановления пароля</p>
                        <h2>Заполните поле ниже</h2>
                    </div>

                    <div className={classes.fields}>
                        <div className={classes.field}>
                            <label>E-mail</label>
                            <div className={classes.inputWrap}>
                                <input
                                    type='text'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {!email && <span className={classes.hint}>E-mail</span>}
                            </div>
                        </div>

                        <div className={classes.field}>
                            <label>Код</label>
                            <div className={classes.inputWrap}>
                                <input
                                    type='text'
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                />
                                {!code && <span className={classes.hint}>Код из почты</span>}
                            </div>
                        </div>
                    </div>

                    <div className={classes.actions}>
                        <button
                            type='button'
                            className={classes.submitBtn}
                            onClick={() => onSwitch('NewPassword')}
                        >
                            Отправить код
                        </button>
                    </div>

                    <div className={classes.switchRow}>
                        <p>
                            Вспомнили пароль?{' '}
                            <button
                                type='button'
                                className={classes.switchBtn}
                                onClick={() => onSwitch('Login')}
                            >
                                Войдите
                            </button>
                        </p>
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
