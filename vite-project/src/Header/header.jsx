import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Photo } from '../Photo'
import Modal1 from '../Modal1/Modal1'
import Modal2 from '../Modal2/Modal2'
import Modal3 from '../Modal3/Modal3'
import Modal4 from '../Modal4/Modal4'
import classes from './header.module.scss'

export default function Header() {
    const [activeModal, setActiveModal] = useState(null)

    const getLink = ({ isActive }) =>
        isActive ? `${classes.link} ${classes.active}` : classes.link

    return (
        <>
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <NavLink to='/' className={classes.logo}>
                        <img src={Photo.Worktap} alt='Worktap' />
                    </NavLink>

                    <ul className={classes.menu}>
                        <li><NavLink to='/birja'          className={getLink}>Биржа</NavLink></li>
                        <li><NavLink to='/works'          className={getLink}>Ворки</NavLink></li>
                        <li><NavLink to='/contests'       className={getLink}>Конкурсы</NavLink></li>
                        <li><NavLink to='/create-work'    className={getLink}>Создать ворк</NavLink></li>
                        <li><NavLink to='/create-order'   className={getLink}>Создать заказ</NavLink></li>
                    </ul>

                    <div className={classes.actions}>
                        <button
                            type='button'
                            onClick={() => setActiveModal('Register')}
                            className={classes.register}
                        >
                            Регистрация
                        </button>
                        <button
                            type='button'
                            onClick={() => setActiveModal('Login')}
                            className={classes.loginBtn}
                        >
                            Войти
                        </button>
                    </div>
                </nav>
            </header>

            {activeModal === 'Login' && (
                <Modal1 onClose={() => setActiveModal(null)} onSwitch={setActiveModal} />
            )}
            {activeModal === 'Register' && (
                <Modal2 onClose={() => setActiveModal(null)} onSwitch={setActiveModal} />
            )}
            {activeModal === 'FindPassword' && (
                <Modal3 onClose={() => setActiveModal(null)} onSwitch={setActiveModal} />
            )}
            {activeModal === 'NewPassword' && (
                <Modal4 onClose={() => setActiveModal(null)} onSwitch={setActiveModal} />
            )}
        </>
    )
}
