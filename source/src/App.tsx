import Quiz from './components/Quiz';
import Modal from './components/Modal';

// modalstore
import modalStore from '../store/modalStore';
import Level1 from './components/Level/Level1';
import Level2 from './components/Level/Level2';

function App() {
  const { isOpened, level } = modalStore();

  let content;

  if (level === 1) {
    content = (
      <Modal>
        <Level1 />
      </Modal>
    );
  } else if (level === 2) {
    content = (
      <Modal>
        <Level2 />
      </Modal>
    );
  }

  return (
    <>
      <div data-theme="light" className="flex items-center justify-center h-full py-[54px]">
        <Quiz />
      </div>
      {isOpened && content}
    </>
  );
}

export default App;
