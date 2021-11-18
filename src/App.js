import { Login } from "./components/Login";
import styled from 'styled-components'
import "./App.css"
import { RightSide } from "./components/RightSide";

function App() {
  return (
    <div class="d-md-flex h-md-100 align-items-center">

      <LoginContainer class="col-md-6 p-0 bg-white h-md-100">
        <Login />
      </LoginContainer>

      <div class="col-md-6 p-0 bg-indigo h-md-100">
        <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center bg-info rounded">
          <RightSide />
        </div>
      </div>

    </div>
  );
}

const LoginContainer = styled.div`
    width: 50%;
    padding: 0em 9em 0em 9em;
    @media (max-width: 1024px) {
      padding: 0 4em 0 4em;
    }
    @media (max-width: 500px) {
      margin: 0;
      width: auto;
    }
`

export default App;
