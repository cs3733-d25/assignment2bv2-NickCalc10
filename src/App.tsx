import './App.css'
import Title from "./Title.tsx";
import Intro from "./Intro.tsx";
import Hobby1 from "./Hobby1.tsx";

function App() {
    return (
      <div>
          <Title
              cName="CS3733-D25"
              teamNum={48}
              hobbies = "Weighlifting and Fishing">
          </Title>
          <Intro
              name1={"Nicholas Calcasola"}
              name2={"Logan Winters"}>
          </Intro>
          <Hobby1
              hobbyName={"Weightlifting"}
              description={"Nicholas Calcasola's hobby is weighlifting, I began lifting weights when I was " +
                  "a senior in highschool and have continued to this day"}
              imageUrl={"src/assets/Weightlifting Pic.webp"}>
          </Hobby1>

      </div>
  )
}

export default App
