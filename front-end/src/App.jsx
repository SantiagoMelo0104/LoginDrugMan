import './App.css';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import MicrosoftIcon from '@mui/icons-material/Microsoft';

function App() {
  return (
    <div className="container glass-effect">
      <form>
        <h1>Login</h1>
        <div className="inputs">
            <div className="input">
                <EmailIcon className="icons" color="action"/>
                <input type="email" placeholder="Email"/>
            </div>
        </div>
        <div className="inputs">
            <div className="input">
                <LockIcon className="icons" color="action"/>
                <input type="password" placeholder="Password"/>
            </div>
        </div>
        <button type="submit" className="btn">Login</button>
        <button type="submit" className="btn">Register</button>
        <div className="underline">
            <div className="unline"></div>
        </div>
        <Button color="inherit" variant="outlined" className="btn1" endIcon={<MicrosoftIcon/>} onClick={() => {
          const popup = window.open(
            "http://localhost:3000/auth/microsoft",
            "targetWindow",
            `toolbar=no,
              location=no,
              status=no,
              menubar=no,
              scrollbars=no,
              height=500,
              width=400
              resizable=no`
          );
          window.addEventListener("message", (event) => {
            if (event.origin === "http://localhost:3000") {
              if (event.data) {
                sessionStorage.setItem("user", JSON.stringify(event.data));
                popup.close();
              }
            }
          });
          }}> Login With:</Button>
      </form>
    </div>
  )
}
export default App
