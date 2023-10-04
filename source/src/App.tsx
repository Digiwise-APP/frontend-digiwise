import Quiz from './components/Quiz';
import Modal from './components/Modal';

// modalstore
import modalStore from '../store/modalStore';

function App() {
  const { isOpened } = modalStore();
  return (
    <>
      <div data-theme="light" className="flex items-center justify-center h-full py-[54px]">
        <Quiz />
      </div>
      {isOpened && <Modal />}
    </>
  );
}

export default App;
