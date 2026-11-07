import { useState } from 'react'
import cn from 'classnames'
import classes from './exchange_sec1.module.scss'

export default function Exchange_sec1() {
    const [searchVal, setSearchVal] = useState('')
    return (
        <section className={classes.Exchange_sec1}>
            <div className={classes.decoPeach} />
            <div className={classes.decoGreenTop} />
            <div className={classes.decoGreenBot} />
            <div className={classes.decoOrange} />
            <div className={classes.inner}>
                <h1>
                    Ищите и находите подходящую работу среди{' '}
                    <span className={classes.accent}>10,000+</span>{' '}
                    проектов и покажите на что Вы способны!
                </h1>
                <div className={classes.search}>
                    <div className={classes.inputWrap}>
                        <input
                            type='text'
                            value={searchVal}
                            onChange={(e) => setSearchVal(e.target.value)}
                        />
                        {!searchVal && <span className={classes.inputHint}>Какую работу ищете?</span>}
                    </div>
                    <button>Найти</button>
                </div>
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
                <p className={classes.notice}>
                    Ниже все заказы по <span className={classes.accent}>дизайну</span>
                </p>
                <div className={classes.chevron}>▾</div>
            </div>
        </section>
    )
}
