import React from 'react';
import cyberRed from '../../images/cyberRed.svg';
import combination from '../../images/combination_layout.svg';
import { Link, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';

function Auth() {
    return (
      <div className="auth">
        <div className='auth__userinfo'>
            <form className='auth__form'>
                <img className='auth__form-logo' src={cyberRed} alt="Логотип клуба"/>
                <Routes>
                    <Route exact path="/"/>
                    <Route exact path='/signin' element={<Login/>}/>
                    <Route exact path='/signup' element={<Register/>}/>
                </Routes>
                <div className='auth__checklist'>
                    <input type="checkbox" className="auth__check" id="check_rules"/>
                    <label htmlFor="check_rules">Согласен(а) с правилами посещения комплекса клуба</label>
                    <input type="checkbox" className="auth__check" id="check_data"/>
                    <label htmlFor="check_data">Согласен(а) с политикой обработки персональных данных</label>
                </div>
                <div className='auth__links'>
                    <Link to="/signin">Вход</Link>
                    <Link to="/signup">Регистрация</Link>
                </div>
                <div className='auth__adv'>
                    <p className='auth__invite'>Скачайте приложение и получите бонус</p>
                    <div className='auth__download'>
                        <a className='auth__down-link auth__down-link_apple'></a>
                        <a className='auth__down-link auth__down-link_google'></a>
                    </div>
                </div>
            </form>
            <div className='auth__layout'>
                <h3 className='auth__layout-title'>Раскладка клавиатуры</h3>
                <div className='auth__flags'>
                    <div className='auth__flag auth__flag_rus auth__flag_active'></div>
                    <div className='auth__flag auth__flag_usa'></div>
                </div>
                <div className='auth__layout-info'>
                    <p className='auth__caption'>*Для смены раскладки ввода языка нажмите комбинацию клавиш</p>
                    <img className='auth__combination' src={combination} alt="Комбинация клавиш"/>
                </div>
            </div>
        </div>
        <div className='auth__label'>
            <h1 className='auth__number'>88</h1>
            <p className='auth__zone'>вы находитесь в зоне</p>
            <p className='auth__text'>standart</p>
        </div>
      </div>
    );
  }
  
  export default Auth;