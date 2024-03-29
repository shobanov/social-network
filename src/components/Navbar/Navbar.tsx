import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar: React.FC = () => {
    return  <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs">Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news">News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music">Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings">Settings</NavLink>
                </div>
            </nav>
}

export default Navbar;
/*
 Объект NavLink из модуля react-router-dom для создания ссылок и вместо редиректа переходит на указанный url
без перезагрузки страницы. Он аналогичен Link за тем исключением, что позволяет использовать состояние ссылки.
С помощью атрибутов activeClassName и activeStyle можно установить стиль активной ссылки. 
Атрибут 'to' определяет путь перехода.
 */