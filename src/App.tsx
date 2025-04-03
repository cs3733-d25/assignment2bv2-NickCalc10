import './App.css'
import './list.css'
import Title from "./title.tsx";
import Intro from "./Intro.tsx";
import Hobby1 from "./hobby1.tsx";
import Hobby2 from "./hobby2.tsx";

function App() {
    return (
      <div>
          <Title
              cName="CS3733-D25"
              teamNum={31}
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
          <Hobby2
              hobbyName={"Bass Fishing"}
              description={"Logan Winters hobby is bass fishing, " +
                  "I have always enjoyed the outdoors and have been fishing for many years now"}
              imageUrl={"src/assets/Fish.jpeg"}>
          </Hobby2>

      </div>
  )
}

export default App
