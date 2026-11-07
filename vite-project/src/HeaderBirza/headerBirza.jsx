import { NavLink } from 'react-router-dom'
import { Photo } from '../Photo'
import classes from './headerBirza.module.scss'

export default function HeaderBirza() {
    const getLink = ({ isActive }) =>
        isActive ? `${classes.link} ${classes.active}` : classes.link

    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <NavLink to='/' className={classes.logo}>
                    <img src={Photo.Worktap} alt='Worktap' />
                </NavLink>

                <ul className={classes.menu}>
                    <li><NavLink to='/birja'          className={getLink}>Биржа</NavLink></li>
                    <li><NavLink to='/works'          className={getLink}>Ворки</NavLink></li>
                    <li><NavLink to='/contests'       className={getLink}>Конкурсы</NavLink></li>
                    <li><NavLink to='/create-order'   className={getLink}>Создать заказ</NavLink></li>
                </ul>

                <div className={classes.userArea}>
                    <button className={classes.iconBtn}>★</button>
                    <button className={classes.iconBtn}>🔔</button>
                    <button className={classes.iconBtn}>💬</button>
                    <NavLink to='/profile' className={classes.userInfo}>
                        <span className={classes.userName}>Ернар Ибрагимов</span>
                        <img src={Photo.Ellipse59} alt='avatar' className={classes.userAvatar} />
                        <span className={classes.chevron}>▾</span>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}
