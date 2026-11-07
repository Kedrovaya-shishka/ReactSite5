import { Photo } from '../Photo'
import classes from './footer.module.scss'

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.wrap}>
                <div className={classes.cols}>
                    <div className={classes.col}>
                        <h4>Топ категории</h4>
                        <ul>
                            <li>Тексты и переводы</li>
                            <li>Разработка</li>
                            <li>Дизайн</li>
                            <li>Аудио, видео монтаж</li>
                            <li>Соцсети и реклама</li>
                            <li>Бизнес и жизнь</li>
                            <li>SEO и оптимизация</li>
                        </ul>
                    </div>
                    <div className={classes.col}>
                        <h4>О Проекте</h4>
                        <ul>
                            <li>О Нас</li>
                            <li>Как Это Работает</li>
                            <li>Политика Приватности</li>
                            <li>Правила Пользования</li>
                            <li>Пресса о нас</li>
                        </ul>
                    </div>
                    <div className={classes.col}>
                        <h4>Поддержка</h4>
                        <ul>
                            <li>Контакты</li>
                            <li>Политика Безопасности</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className={classes.col}>
                        <h4>Follow</h4>
                        <div className={classes.socials}>
                            <button className={classes.socialBtn}>
                                <img src={Photo.Facebook} alt='Facebook' />
                            </button>
                            <button className={classes.socialBtn}>
                                <img src={Photo.Twitter} alt='Twitter' />
                            </button>
                            <button className={classes.socialBtn}>
                                <img src={Photo.LinkedIn} alt='LinkedIn' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classes.copy}>
                    <p>Copyright © 2021 &nbsp;|&nbsp; WorkTap – Worktap.KZ. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}
