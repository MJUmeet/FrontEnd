import styles from './loginpage.module.scss';
import service from '../../service';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

const {localStorage} = window;

function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function login(id, passwd) {
    const {data} = await service.login(id, passwd);
    if (data.id === -1) return;
    localStorage.setItem('id', data.id);
    localStorage.setItem('name', data.name);
    console.log('Login success');
    navigate('/', {replace: true});
  }

  const handleSubmit = e => {
    e.preventDefault();
    login(id, password);
  };
  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <p className="title">Login</p>
      <div className={styles.inputWrapper}>
        <input
          onChange={e => setId(e.currentTarget.value)}
          className={styles.field}
          type="text"
          placeholder="id"
          value={id}
        />
        <input
          onChange={e => setPassword(e.currentTarget.value)}
          className={styles.field}
          type="password"
          placeholder="password"
          value={password}
        />
      </div>
      <button className={styles.button} type="submit">
        Sign in
      </button>
      <button className={styles.button} onClick={() => navigate('/signup')}>
        Sign up
      </button>
    </form>
  );
}
export default LoginPage;
