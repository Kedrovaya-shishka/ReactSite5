import { Photo } from '../Photo'
import classes from './profile_sec3.module.scss'

const reviewText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla.'

export default function Profile_sec3() {
    return (
        <section className={classes.Profile_sec3}>
            <div className={classes.wrap}>
                <div className={classes.head}>
                    <h2>Отзывы</h2>
                    <div className={classes.tabs}>
                        <button className={classes.tabActive}>Положительные (65)</button>
                        <button className={classes.tab}>Отрицательные (10)</button>
                    </div>
                </div>

                <div className={classes.grid}>
                    <div className={classes.card}>
                        <div className={classes.userRow}>
                            <div className={classes.avatar} />
                            <div className={classes.meta}>
                                <h3>Никита Евреев</h3>
                                <img src={Photo.Group17_3} alt='stars' className={classes.stars} />
                            </div>
                        </div>
                        <p>{reviewText}</p>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.userRow}>
                            <div className={classes.avatar} />
                            <div className={classes.meta}>
                                <h3>Никита Евреев</h3>
                                <img src={Photo.Group17_3} alt='stars' className={classes.stars} />
                            </div>
                        </div>
                        <p>{reviewText}</p>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.userRow}>
                            <div className={classes.avatar} />
                            <div className={classes.meta}>
                                <h3>Никита Евреев</h3>
                                <img src={Photo.Group17_3} alt='stars' className={classes.stars} />
                            </div>
                        </div>
                        <p>{reviewText}</p>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.userRow}>
                            <div className={classes.avatar} />
                            <div className={classes.meta}>
                                <h3>Никита Евреев</h3>
                                <img src={Photo.Group17_3} alt='stars' className={classes.stars} />
                            </div>
                        </div>
                        <p>{reviewText}</p>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.userRow}>
                            <div className={classes.avatar} />
                            <div className={classes.meta}>
                                <h3>Никита Евреев</h3>
                                <img src={Photo.Group17_3} alt='stars' className={classes.stars} />
                            </div>
                        </div>
                        <p>{reviewText}</p>
                    </div>

                    <div className={classes.card}>
                        <div className={classes.userRow}>
                            <div className={classes.avatar} />
                            <div className={classes.meta}>
                                <h3>Никита Евреев</h3>
                                <img src={Photo.Group17_3} alt='stars' className={classes.stars} />
                            </div>
                        </div>
                        <p>{reviewText}</p>
                    </div>
                </div>

                <div className={classes.actionRow}>
                    <button className={classes.loadMoreBtn}>Загрузить еще</button>
                </div>
            </div>
        </section>
    )
}
