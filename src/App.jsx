import Header from "./uifolders/heder";
import TodoForm from "./uifolders/form";
import TodoList from "./uifolders/todolist";
import Footer from "./uifolders/footer";

const App = () => {
  return (
    <div className="flex flex-col justify-items-center items-center">
      <Header />
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;