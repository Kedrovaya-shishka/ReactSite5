import { Photo } from '../Photo'
import classes from './home_sec4.module.scss'

export default function Home_sec4() {
    return (
        <section className={classes.Home_sec4}>
            <div className={classes.wrap}>
                <div className={classes.head}>
                    <h2>Как решать задачи на WorkTap?</h2>
                    <p>Идеально подходит для бизнеса и частных лиц</p>
                </div>
                <div className={classes.steps}>
                    <div className={classes.step}>
                        <img src={Photo.Group} alt='Выберите услугу' />
                        <h3>Выберите услугу</h3>
                        <p>В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.</p>
                    </div>
                    <div className={classes.step}>
                        <img src={Photo.Group23} alt='Оплатите' />
                        <h3>Оплатите</h3>
                        <p>Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите.</p>
                    </div>
                    <div className={classes.step}>
                        <img src={Photo.Group1} alt='Получите результат' />
                        <h3>Получите результат</h3>
                        <p>Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
