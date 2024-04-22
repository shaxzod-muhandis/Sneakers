import "./style/main.css";
import Header from "./components/Header/Header";
import { Section } from "./components/Section/Section";
import Icon from "./assets/react.svg";
function App() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Section title="Home Page" theme="dark" />
          <Section title="Content" />
          <Section title="Info" />
          <Section title={"12"} dark="dark" />
        </div>
        <img src={Icon} alt="" />
      </main>
    </>
  );
}
export default App;
