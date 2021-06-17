import "./App.css";
import Question from "./components/Question/Question";
import QuestionByCategoryList from "./components/QuestionByCategoryList/QuestionByCategoryList";
import CategoryList from "./components/CategoryList/CategoryList";
import QuestionList from "./components/QuestionList/QuestionList";

function App() {
  return (
    <div>
      <Question />
      <QuestionList />
      <CategoryList />
      <QuestionByCategoryList />
    </div>
  );
}

export default App;
