import cn from 'classnames'
import { Photo } from '../Photo'
import classes from './home_sec3.module.scss'

export default function Home_sec3() {
    return (
        <section className={classes.Home_sec3}>
            <div className={classes.wrap}>
                <h2>Топ фрилансеров</h2>
                <div className={classes.grid}>
                    <div className={classes.card}>
                        <div className={classes.cardTop}>
                            <div className={classes.avatarWrap}>
                                <img src={Photo.Ellipse3} alt='Марина Королёва' className={classes.avatar} />
                                <span className={classes.dot} />
                            </div>
                            <div className={classes.info}>
                                <h3>Марина Королёва</h3>
                                <p className={classes.role}>Разработчик PHP</p>
                                <p className={classes.projects}>Выполнено проектов: 65</p>
                                <img src={Photo.Group17} alt='rating' className={classes.stars} />
                            </div>
                        </div>
                        <button className={cn(classes.btn, classes.btnFilled)}>
                            Написать
                        </button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardTop}>
                            <div className={classes.avatarWrap}>
                                <img src={Photo.Group18_1} alt='Семён Сергеев' className={classes.avatar} />
                                <span className={classes.dot} />
                            </div>
                            <div className={classes.info}>
                                <h3>Семён Сергеев</h3>
                                <p className={classes.role}>Копирайтер</p>
                                <p className={classes.projects}>Выполнено проектов: 104</p>
                                <img src={Photo.Group17_3} alt='rating' className={classes.stars} />
                            </div>
                        </div>
                        <button className={classes.btn}>
                            Написать
                        </button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardTop}>
                            <div className={classes.avatarWrap}>
                                <img src={Photo.Group18_2} alt='Ангелина Сорокина' className={classes.avatar} />
                                <span className={classes.dot} />
                            </div>
                            <div className={classes.info}>
                                <h3>Ангелина Сорокина</h3>
                                <p className={classes.role}>Дизайнер сайтов</p>
                                <p className={classes.projects}>Выполнено проектов: 25</p>
                                <img src={Photo.Group17_4} alt='rating' className={classes.stars} />
                            </div>
                        </div>
                        <button className={classes.btn}>
                            Написать
                        </button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardTop}>
                            <div className={classes.avatarWrap}>
                                <img src={Photo.Group18_3} alt='Никита Зайцев' className={classes.avatar} />
                                <span className={classes.dot} />
                            </div>
                            <div className={classes.info}>
                                <h3>Никита Зайцев</h3>
                                <p className={classes.role}>Маркетолог</p>
                                <p className={classes.projects}>Выполнено проектов: 144</p>
                                <img src={Photo.Group17_3} alt='rating' className={classes.stars} />
                            </div>
                        </div>
                        <button className={classes.btn}>
                            Написать
                        </button>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.cardTop}>
                            <div className={classes.avatarWrap}>
                                <img src={Photo.Group18_4} alt='Наталья Захарова' className={classes.avatar} />
                                <span className={classes.dot} />
                            </div>
                            <div className={classes.info}>
                                <h3>Наталья Захарова</h3>
                                <p className={classes.role}>Motion дизайнер</p>
                                <p className={classes.projects}>Выполнено проектов: 71</p>
                                <img src={Photo.Group17_4} alt='rating' className={classes.stars} />
                            </div>
                        </div>
                        <button className={classes.btn}>
                            Написать
                        </button>
                    </div>

                    <div className={classes.cardAll}>
                        <button className={classes.allBtn}>Посмотреть всех ТОП фрилансеров</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
