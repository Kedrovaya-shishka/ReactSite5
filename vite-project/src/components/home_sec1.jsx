import { useState } from 'react'
import cn from 'classnames'
import { Photo } from '../Photo'
import classes from './home_sec1.module.scss'

export default function Home_sec1() {
    const [searchVal, setSearchVal] = useState('')
    return (
        <section className={classes.Home_sec1}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <h1>
                        Покупайте фриланс-услуги
                        <br />
                        <span className={classes.accent}>в два клика</span>
                    </h1>
                    <p className={classes.sub}>
                        Ворк — единица работы продавца, которую<br />
                        можно купить как товар в магазине
                    </p>
                    <div className={classes.search}>
                        <div className={classes.inputWrap}>
                            <input
                                type='text'
                                value={searchVal}
                                onChange={(e) => setSearchVal(e.target.value)}
                            />
                            {!searchVal && <span className={classes.inputHint}>Что нужно сделать?</span>}
                        </div>
                        <button>Найти</button>
                    </div>
                    <p className={classes.rubricTitle}>Выберите рубрику, чтобы начать</p>
                    <div className={classes.rubrics}>
                        <button className={classes.tag}>Тексты и переводы</button>
                        <button className={classes.tag}>Разработка</button>
                        <button className={classes.tag}>Дизайн</button>
                        <button className={classes.tag}>Аудио, видео монтаж</button>
                        <button className={classes.tag}>SEO и оптимизация</button>
                        <button className={classes.tag}>Бизнес и жизнь</button>
                        <button className={classes.tag}>Соцсети и реклама</button>
                        <button className={cn(classes.tag, classes.tagActive)}>Все категории</button>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.circle} />
                    <img src={Photo.MenOchki} alt='Фрилансер' className={classes.man} />
                    <div className={classes.dotBig} />
                    <div className={classes.starsCard}>
                        <span className={classes.stars}>★★★★★</span>
                    </div>
                    <div className={classes.dots} />
                </div>
            </div>
        </section>
    )
}
