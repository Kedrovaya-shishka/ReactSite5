import { Photo } from '../Photo'
import classes from './profile_sec2.module.scss'

export default function Profile_sec2() {
    return (
        <section className={classes.Profile_sec2}>
            <div className={classes.wrap}>
                <h2>Мой ворки</h2>

                <div className={classes.grid}>
                    <button className={classes.createCard}>
                        <div className={classes.plusIcon}>+</div>
                        <span>Создать ворк</span>
                    </button>
                    <div className={classes.card}>
                        <img src={Photo.Rectangle20} alt='Дизайн сайта' />
                        <div className={classes.info}>
                            <h3>Дизайн сайта</h3>
                            <p>50 000 тенге</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Photo.Rectangle20} alt='Дизайн сайта' />
                        <div className={classes.info}>
                            <h3>Дизайн сайта</h3>
                            <p>50 000 тенге</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Photo.Rectangle20} alt='Дизайн сайта' />
                        <div className={classes.info}>
                            <h3>Дизайн сайта</h3>
                            <p>50 000 тенге</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Photo.Rectangle20} alt='Дизайн сайта' />
                        <div className={classes.info}>
                            <h3>Дизайн сайта</h3>
                            <p>50 000 тенге</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Photo.Rectangle20} alt='Дизайн сайта' />
                        <div className={classes.info}>
                            <h3>Дизайн сайта</h3>
                            <p>50 000 тенге</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Photo.Rectangle20} alt='Дизайн сайта' />
                        <div className={classes.info}>
                            <h3>Дизайн сайта</h3>
                            <p>50 000 тенге</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Photo.Rectangle20} alt='Дизайн сайта' />
                        <div className={classes.info}>
                            <h3>Дизайн сайта</h3>
                            <p>50 000 тенге</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Photo.Rectangle20} alt='Дизайн сайта' />
                        <div className={classes.info}>
                            <h3>Дизайн сайта</h3>
                            <p>50 000 тенге</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Photo.Rectangle20} alt='Дизайн сайта' />
                        <div className={classes.info}>
                            <h3>Дизайн сайта</h3>
                            <p>50 000 тенге</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Photo.Rectangle20} alt='Дизайн сайта' />
                        <div className={classes.info}>
                            <h3>Дизайн сайта</h3>
                            <p>50 000 тенге</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Photo.Rectangle20} alt='Дизайн сайта' />
                        <div className={classes.info}>
                            <h3>Дизайн сайта</h3>
                            <p>50 000 тенге</p>
                        </div>
                    </div>
                </div>
                <div className={classes.actionRow}>
                    <button className={classes.loadMoreBtn}>Загрузить еще</button>
                </div>
            </div>
        </section>
    )
}
