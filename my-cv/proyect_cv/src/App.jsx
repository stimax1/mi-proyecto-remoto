import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import "./App.css";

function App() {
  return (
    <div className="cv-layout">
      <aside className="left-column">
        <Header />
        <Skills />
      </aside>
      <main className="right-column">
        <Profile />
        <Experience />
        <Education />
      </main>
    </div>
  );
}

export default App;
