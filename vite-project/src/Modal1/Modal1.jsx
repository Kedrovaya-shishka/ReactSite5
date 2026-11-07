import { useState } from 'react'
import { Photo } from '../Photo'
import classes from './Modal1.module.scss'

export default function Modal1({ onClose, onSwitch }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

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
                        <p className={classes.subtitle}>Добро пожаловать!</p>
                        <h2>Войдите в свой аккаунт</h2>
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

                        <div className={classes.optionsRow}>
                            <label className={classes.checkboxLabel}>
                                <input
                                    type='checkbox'
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                />
                                <span>Запомнить меня</span>
                            </label>
                            <button
                                type='button'
                                className={classes.forgotBtn}
                                onClick={() => onSwitch('FindPassword')}
                            >
                                Забыли пароль?
                            </button>
                        </div>
                    </div>

                    <div className={classes.actions}>
                        <button type='button' className={classes.submitBtn}>
                            Войти
                        </button>
                        <button type='button' className={classes.googleBtn}>
                            <img src={Photo.Google} alt='Google' />
                            <span>Или войдите с помощью Google</span>
                        </button>
                    </div>

                    <div className={classes.switchRow}>
                        <p>
                            У Вас все еще нет аккаунта?{' '}
                            <button
                                type='button'
                                className={classes.switchBtn}
                                onClick={() => onSwitch('Register')}
                            >
                                Зарегистрируйтесь бесплатно!
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
