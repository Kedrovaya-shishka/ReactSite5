import { Photo } from '../Photo'
import classes from './profile_sec1.module.scss'

export default function Profile_sec1() {
    return (
        <section className={classes.Profile_sec1}>
            <div className={classes.sideBadge}>
                <span>Быстрый поиск ворков</span>
                <span className={classes.badgeArrow}>&gt;</span>
            </div>

            <div className={classes.container}>
                <div className={classes.left}>
                    <p className={classes.profession}>Дизайнер</p>
                    <h1>
                        <span className={classes.accent}>Ернар</span> Ибрагимов
                    </h1>
                    <p className={classes.bio}>
                        Работаю дизайнером с 1999 года.<br />
                        Был опыт в газетах, журналах, типографиях, рекламных агентствах, издательских домах... Порядка 8 лет, занимаюсь логотипами и фирменными стилями.
                    </p>

                    <div className={classes.tags}>
                        <span className={classes.tag}>Figma</span>
                        <span className={classes.tag}>Adobe photoshop</span>
                        <span className={classes.tag}>Adobe illustrator</span>
                        <span className={classes.tag}>Corel draw</span>
                        <span className={classes.tag}>Adobe After Effects</span>
                        <span className={classes.tag}>HTML/CSS</span>
                    </div>

                    <button className={classes.detailsBtn}>
                        <span>Показать подробную информацию</span>
                        <span className={classes.arrow}>▾</span>
                    </button>
                </div>

                <div className={classes.right}>
                    <div className={classes.visual}>
                        <img src={Photo.Ellipse67} alt='decor' className={classes.decorCircleTop} />
                        <img src={Photo.Ellipse68} alt='decor' className={classes.decorCircleBot} />
                        <div className={classes.dotsPattern} />
                        <img src={Photo.Group8} alt='decor' className={classes.zigzag} />

                        <div className={classes.avatarWrapper}>
                            <img src={Photo.Ellipse66} alt='Ернар Ибрагимов' className={classes.avatar} />

                            <div className={classes.onlineBadge}>
                                <span className={classes.onlineDot} />
                                <span>В сети</span>
                            </div>

                            <button className={classes.settingsBtn}>
                                <img src={Photo.Frame28} alt='settings' />
                            </button>

                            <div className={classes.starsCard}>
                                <img src={Photo.Group17_3} alt='rating' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
