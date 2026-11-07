import { useState } from 'react'
import { Photo } from '../Photo'
import classes from './Modal2.module.scss'

export default function Modal2({ onClose, onSwitch }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [userType, setUserType] = useState('executor')

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
                        <p className={classes.subtitle}>Давайте создадим Вам аккаунт</p>
                        <h2>Заполните все поля</h2>
                    </div>

                    <div className={classes.fields}>
                        <div className={classes.field}>
                            <label>Ваше имя</label>
                            <div className={classes.inputWrap}>
                                <input
                                    type='text'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {!firstName && <span className={classes.hint}>Имя</span>}
                            </div>
                        </div>

                        <div className={classes.field}>
                            <label>Ваше фамилия</label>
                            <div className={classes.inputWrap}>
                                <input
                                    type='text'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {!lastName && <span className={classes.hint}>Фамилия</span>}
                            </div>
                        </div>

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
                            <label>Телефон номер</label>
                            <div className={classes.inputWrap}>
                                <input
                                    type='text'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                {!phone && <span className={classes.hint}>Телефон</span>}
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

                        <div className={classes.roleRow}>
                            <label className={classes.radioLabel}>
                                <input
                                    type='radio'
                                    name='role'
                                    checked={userType === 'executor'}
                                    onChange={() => setUserType('executor')}
                                />
                                <span>Я исполнитель</span>
                            </label>
                            <label className={classes.radioLabel}>
                                <input
                                    type='radio'
                                    name='role'
                                    checked={userType === 'customer'}
                                    onChange={() => setUserType('customer')}
                                />
                                <span>Я заказчик</span>
                            </label>
                        </div>
                    </div>

                    <div className={classes.actions}>
                        <button type='button' className={classes.submitBtn}>
                            Зарегистрироваться
                        </button>
                    </div>

                    <div className={classes.switchRow}>
                        <p>
                            У Вас есть аккаунт?{' '}
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
