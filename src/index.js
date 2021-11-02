import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ParticleComponent from "./ParticleComponent";
import { Presentation } from "./components/Presentation";
import '../src/styles.css';

function App() {
  return (
    <Router>
      <div>
        <ParticleComponent />
        <Presentation />
      </div>
      <section id="biography">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tristique tincidunt. Aliquam erat volutpat. Fusce lacinia, lectus ut tristique aliquam, elit est pharetra urna, vitae tempus odio urna vitae tortor. Vestibulum nulla neque, consequat ac lacus in, tincidunt tincidunt ante. Mauris tristique ac velit ac mattis. Phasellus maximus ex sed sodales euismod. Phasellus luctus euismod malesuada. Vestibulum lacus lacus, dictum in augue in, ullamcorper gravida turpis. Maecenas rutrum eros quis arcu convallis, ut vulputate arcu luctus. Sed a dui vel diam pretium faucibus sit amet gravida lorem. Ut quis sodales tellus. Proin tellus turpis, semper at augue id, hendrerit sollicitudin turpis. In eu vehicula nisi. Curabitur dignissim sapien sem, eu porta libero efficitur sit amet.
      Etiam a leo lacinia, egestas diam ut, viverra ante. Proin tristique, magna in cursus egestas, lectus tellus eleifend orci, sed tempor dolor lorem ut augue. Sed pellentesque in purus eget molestie. Integer sed viverra sapien, vel interdum ipsum. Cras mollis lacus eget enim viverra rhoncus. Aliquam felis nulla, cursus at odio at, aliquam sodales eros. Etiam sed ex bibendum, posuere enim vitae, dignissim augue. Nullam ut luctus nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Curabitur at justo turpis. Morbi commodo augue eu sem tincidunt mollis. Morbi sodales nunc libero, a pellentesque nunc tincidunt pellentesque. Nullam nulla elit, iaculis quis turpis eu, sollicitudin malesuada enim.
      </section>
    </Router>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
