import React from 'react';
import cyberRed from '../../images/cyberRed.svg';
import combination from '../../images/combination_layout.svg';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';

function Auth() {
    const [layout, setLayout] = React.useState('rus');
    function toggleLayout() {
        layout === 'rus' ? setLayout('usa') : setLayout('rus');
    }
    document.addEventListener('keydown', (evt) => {
        if((evt.altKey && evt.shiftKey)) {
            toggleLayout();
        }
    })
    return (
      <div className="auth">
        <div className='auth__userinfo'>
            <form className='auth__form'>
                <img className='auth__form-logo' src={cyberRed} alt="Логотип клуба"/>
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route exact path='/signin' element={<Login/>}/>
                    <Route exact path='/signup' element={<Register/>}/>
                </Routes>
                <div className='auth__adv'>
                    <div className='auth__bg1'></div>
                    <p className='auth__invite'>Скачайте приложение и получите бонус</p>
                    <div className='auth__download'>
                        <a href="https://www.apple.com/ru/app-store/" className='auth__down-link auth__down-link_apple' target="_blank"></a>
                        <a href="https://play.google.com/store/apps/details?id=com.cyber.point" className='auth__down-link auth__down-link_google' target="_blank"></a>
                    </div>
                    <div className='auth__bg2'></div>
                </div>
            </form>
            <div className='auth__layout'>
                <h3 className='auth__layout-title'>Раскладка клавиатуры</h3>
                <div className='auth__flags'>
                    <div className='auth__flag-container' onClick={toggleLayout}>
                        <div className={layout === "rus" ? "auth__overlay" : "auth__overlay_active"}>
                            <div className={layout === "rus" ? 'auth__flag auth__flag_rus auth__flag_active' : "auth__flag auth__flag_rus"}></div>
                        </div>
                    </div>
                    <div className='auth__flag-container' onClick={toggleLayout}>
                        <div className={layout === "usa" ? "auth__overlay" : "auth__overlay_active"}>
                            <div className={layout === "usa" ? 'auth__flag auth__flag_usa auth__flag_active' : "auth__flag auth__flag_usa"}></div>
                        </div>
                    </div>
                </div>
                <div className='auth__layout-info'>
                    <p className='auth__caption'>*Для смены раскладки ввода языка нажмите комбинацию клавиш</p>
                    <img className='auth__combination' src={combination} alt="Комбинация клавиш"/>
                </div>
            </div>
        </div>
        <div className='auth__label'>
            <h1 className='auth__number'>88</h1>
            <div className='auth__label-footer'>
                <p className='auth__zone'>вы находитесь в зоне</p>
                <p className='auth__text'>standart</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Auth;