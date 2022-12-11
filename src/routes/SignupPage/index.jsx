import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import service from '../../service';
import styles from './signupPage.module.scss';

function SignupPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  async function signup(id, passwd, username) {
    const {data} = await service.createUser(id, passwd, username);
    if (data.id === -1) {
      console.log('이미 가입된 유저입니다.');
      return;
    }
    navigate('/login');
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit button clicked');
    signup(id, password, username);
  };

  return (
    <div className={styles.page}>
      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <p className={styles.title}>Sign Up</p>
        <input
          placeholder="id"
          className={styles.id}
          type="text"
          value={id}
          onChange={e => setId(e.currentTarget.value)}
        />
        <input
          placeholder="password"
          className={styles.password}
          type="text"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        <input
          placeholder="username"
          className={styles.username}
          type="text"
          value={username}
          onChange={e => setUsername(e.currentTarget.value)}
        />
        <button className={styles.submitButton} type="submit" />
      </form>
    </div>
  );
}
export default SignupPage;
