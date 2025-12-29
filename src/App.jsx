import Header from "./uifolders/heder";
import TodoForm from "./uifolders/form";
import TodoList from "./uifolders/todolist";
import Footer from "./uifolders/footer";

const App = () => {
  return (
    <div >
      <Header />
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;