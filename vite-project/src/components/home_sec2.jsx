import cn from 'classnames'
import { Photo } from '../Photo'
import classes from './home_sec2.module.scss'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...'

export default function Home_sec2() {
    return (
        <section className={classes.Home_sec2}>
            <div className={classes.wrap}>
                <h2>Актуальные ворки</h2>
                <div className={classes.grid}>
                    <div className={classes.card}>
                        <div className={classes.cardHead}>
                            <img src={Photo.Ellipse} alt='avatar' />
                            <h3>Сделать дизайн интернет-магазина</h3>
                        </div>
                        <p>{lorem}</p>
                        <button className={classes.btn}>Посмотреть</button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardHead}>
                            <img src={Photo.Ellipse1} alt='avatar' />
                            <h3>Верстка landing page</h3>
                        </div>
                        <p>{lorem}</p>
                        <button className={cn(classes.btn, classes.btnFilled)}>Посмотреть</button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardHead}>
                            <img src={Photo.Ellipse2} alt='avatar' />
                            <h3>Сделать дизайн сайта-каталога и посадить на какой нибудь ко...</h3>
                        </div>
                        <p>{lorem}</p>
                        <button className={classes.btn}>Посмотреть</button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardHead}>
                            <img src={Photo.Ellipse3} alt='avatar' />
                            <h3>Продвижение instagram</h3>
                        </div>
                        <p>{lorem}</p>
                        <button className={classes.btn}>Посмотреть</button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardHead}>
                            <img src={Photo.Ellipse4} alt='avatar' />
                            <h3>Срочно! Нужен веб дизайнер!</h3>
                        </div>
                        <p>{lorem}</p>
                        <button className={classes.btn}>Посмотреть</button>
                    </div>

                    <div className={classes.cardAll}>
                        <button className={classes.allBtn}>Смотреть все ворки</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
