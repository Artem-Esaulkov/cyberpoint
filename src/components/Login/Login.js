import {Link} from 'react-router-dom';

function Login() {
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
    <div className="login">
      <h2 className="auth__title">
        Форма входа пользователя киберспортивного клуба
      </h2>
      <div className="auth__inputlist">
        <input className="auth__input" type="text" placeholder="Логин" />
        <div className="auth__input-container">
          <input className="auth__input" type="password" placeholder="Пароль" />
          <button
            type="button"
            className="auth__visible"
            onClick={toggleInputType}
          ></button>
        </div>
      </div>
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
        <button type="submit" className="auth__link">
          Вход
        </button>
        <Link to="/signup" className="auth__link auth__link_route">
          Регистрация
        </Link>
      </div>
    </div>
  );
}

export default Login;
