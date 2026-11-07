import { Photo } from '../Photo'
import classes from './home_sec5.module.scss'

export default function Home_sec5() {
    return (
        <section className={classes.Home_sec5}>
            <div className={classes.wrap}>
                <div className={classes.left}>
                    <h2>Как WorkTap помогает бизнесу?</h2>
                    <div className={classes.list}>
                        <div className={classes.item}>
                            <img src={Photo.CreditCard} alt='credit-card' />
                            <p>Оплачивайте с р/с или карты компании</p>
                        </div>
                        <div className={classes.item}>
                            <img src={Photo.Money} alt='money' />
                            <p>Экономьте до 87% бюджета на фрилансе</p>
                        </div>
                        <div className={classes.item}>
                            <img src={Photo.Clock} alt='clock' />
                            <p>Экономьте до 75% времени на решении фриланс задач</p>
                        </div>
                    </div>
                    <p className={classes.slogan}>WorkTap — быстро, просто и безопасно!</p>
                    <button className={classes.startBtn}>Начать!</button>
                </div>
                <div className={classes.right}>
                    <img src={Photo.Workspace} alt='workspace' />
                </div>
            </div>
        </section>
    )
}
