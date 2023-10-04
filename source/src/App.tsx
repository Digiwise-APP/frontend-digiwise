import Quiz from './components/Quiz';
import Modal from './components/Modal';

function App() {
  return (
    <>
      <div data-theme="light" className="flex items-center justify-center h-full py-[54px]">
        <Quiz />
      </div>
      <Modal />
    </>
  );
}

export default App;
