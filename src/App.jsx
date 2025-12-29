import Header from "./uifolders/heder";
import TodoForm from "./uifolders/form";
import TodoList from "./uifolders/todolist";
import Footer from "./uifolders/footer";

const App = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow rounded">
      <Header />
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;