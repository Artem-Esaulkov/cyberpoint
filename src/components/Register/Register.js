import {Link} from 'react-router-dom';

function Register() {
  function toggleInputType(evt) {
    const container = evt.target.parentElement;
    const input = container.querySelector(".auth__input");
    input.type === "text" ? (input.type = "password") : (input.type = "text");
  }
  function toggleCheck(evt) {
    const checkbox = evt.target;
    checkbox.classList.contains("auth__psevdocheck") && checkbox.classList.toggle("auth__psevdocheck_checked");
  }
  return (
    <div className="register">
      <h2 className="auth__title">
        Форма регистрации нового пользователя киберспортивного клуба
      </h2>
      <div className="auth__inputlist">
        <div className="auth__input-container">
          <input className="auth__input" type="text" placeholder="Логин" />
          <span></span>
        </div>
        <div className="auth__input-container">
          <input className="auth__input" type="text" placeholder="ФИО" />
          <span></span>
        </div>
        <div className="auth__input-container">
          <input className="auth__input" type="password" placeholder="Пароль" />
          <span></span>
          <button
            type="button"
            className="auth__visible"
            onClick={toggleInputType}
          ></button>
        </div>
        <div className="auth__input-container">
          <input
            className="auth__input"
            type="password"
            placeholder="Подтверждение пароля"
          />
          <span></span>
          <button
            type="button"
            className="auth__visible"
            onClick={toggleInputType}
          ></button>
        </div>
        <div className="auth__input-container">
          <input
            className="auth__input"
            type="tel"
            placeholder="8 (777) 777 - 77 - 77"
          />
        </div>
        <div className="auth__input-container">
          <input className="auth__input" type="email" placeholder="Email" />
          <span></span>
        </div>
      </div>
      <p className="auth__register-caption">Обязательное поле</p>
      <div className="auth__checklist">
        <div className="auth__check-container" onClick={toggleCheck}>
          <div className='auth__psevdocheck'></div>
          <input type="checkbox" className="auth__check" id="check_rules" />
          <label htmlFor="check_rules">
            Согласен(а) с правилами посещения комплекса клуба
          </label>
        </div>
        <div className="auth__check-container" onClick={toggleCheck}>
          <div className='auth__psevdocheck'></div>
          <input type="checkbox" className="auth__check" id="check_data" />
          <label htmlFor="check_data">
            Согласен(а) с политикой обработки персональных данных
          </label>
        </div>
      </div>
      <div className="auth__links">
      <Link to="/signin" className="auth__link auth__link_route">
          Вход
        </Link>
        <button type="submit" className="auth__link">
          Регистрация
        </button>
      </div>
    </div>
  );
}

export default Register;
