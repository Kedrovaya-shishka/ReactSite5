import { useState } from 'react'
import { Photo } from '../Photo'
import classes from './exchange_sec2.module.scss'

export default function Exchange_sec2() {
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    return (
        <section className={classes.Exchange_sec2}>
            <div className={classes.wrap}>
                <div className={classes.topBar}>
                    <h2>65 проектов по дизайну</h2>
                    <div className={classes.filters}>
                        <div className={classes.priceWrap}>
                            <input
                                type='number'
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                className={classes.priceInput}
                            />
                            {!minPrice && <span className={classes.priceHint}>Минимальная цена</span>}
                        </div>
                        <span className={classes.sep}>—</span>
                        <div className={classes.priceWrap}>
                            <input
                                type='number'
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                className={classes.priceInput}
                            />
                            {!maxPrice && <span className={classes.priceHint}>Максимальная цена</span>}
                        </div>
                        <select className={classes.sortSelect}>
                            <option>По возрастанию цены</option>
                            <option>По убыванию цены</option>
                            <option>По дате</option>
                        </select>
                    </div>
                </div>
                <div className={classes.list}>
                    <div className={classes.card}>
                        <div className={classes.left}>
                            <h3>Нужно сделать Дизайн сайта по тематике авто</h3>
                            <div className={classes.clientRow}>
                                <img src={Photo.Group18} alt='Екатерина Иванова' className={classes.avatar} />
                                <div className={classes.clientInfo}>
                                    <span className={classes.clientName}>Екатерина Иванова</span>
                                    <span className={classes.clientProjects}>
                                        Размещено проектов на бирже: 25
                                    </span>
                                    <div className={classes.ratingRow}>
                                        <img src={Photo.Group17_3} alt='stars' className={classes.stars} />
                                        <span className={classes.reviews}>15 отзывов</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.right}>
                            <span className={classes.budget}>Бюджет: 50 000 тенге</span>
                            <span className={classes.time}>4 часа 28 минут назад</span>
                            <span className={classes.proposals}>Предложений: 50</span>
                        </div>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.left}>
                            <h3>Нужно сделать Дизайн сайта по тематике авто</h3>
                            <div className={classes.clientRow}>
                                <img src={Photo.Group18} alt='Екатерина Иванова' className={classes.avatar} />
                                <div className={classes.clientInfo}>
                                    <span className={classes.clientName}>Екатерина Иванова</span>
                                    <span className={classes.clientProjects}>
                                        Размещено проектов на бирже: 25
                                    </span>
                                    <div className={classes.ratingRow}>
                                        <img src={Photo.Group17_3} alt='stars' className={classes.stars} />
                                        <span className={classes.reviews}>15 отзывов</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.right}>
                            <span className={classes.budget}>Бюджет: 50 000 тенге</span>
                            <span className={classes.time}>4 часа 28 минут назад</span>
                            <span className={classes.proposals}>Предложений: 50</span>
                        </div>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.left}>
                            <h3>Нужно сделать Дизайн сайта по тематике авто</h3>
                            <div className={classes.clientRow}>
                                <img src={Photo.Group18} alt='Екатерина Иванова' className={classes.avatar} />
                                <div className={classes.clientInfo}>
                                    <span className={classes.clientName}>Екатерина Иванова</span>
                                    <span className={classes.clientProjects}>
                                        Размещено проектов на бирже: 25
                                    </span>
                                    <div className={classes.ratingRow}>
                                        <img src={Photo.Group17_3} alt='stars' className={classes.stars} />
                                        <span className={classes.reviews}>15 отзывов</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.right}>
                            <span className={classes.budget}>Бюджет: 50 000 тенге</span>
                            <span className={classes.time}>4 часа 28 минут назад</span>
                            <span className={classes.proposals}>Предложений: 50</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
