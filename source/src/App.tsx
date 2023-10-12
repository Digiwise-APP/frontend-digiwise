import Quiz from "./components/Quiz";
import Modal from "./components/Modal";

// modalstore
import modalStore from "../store/modalStore";
import LevelOne from "./components/Level/LevelOne";
import LevelTwo from "./components/Level/LevelTwo";
import LevelThree from "./components/Level/LevelThree";
import SidebarMenu from "./components/Sidebar/SidebarMenu";
import SidebarProfile from "./components/Sidebar/SidebarProfile";

function App() {
  const { isOpened, level } = modalStore();

  let content;

  if (level === 1) {
    content = (
      <Modal>
        <LevelOne />
      </Modal>
    );
  } else if (level === 2) {
    content = (
      <Modal>
        <LevelTwo />
      </Modal>
    );
  }
   else if (level === 3) {
    content = (
      <Modal>
        <LevelThree />
      </Modal>
    );
  }
  

  return (
    <>
      <SidebarMenu />
      <SidebarProfile />
      <div
        data-theme="light"
        className="flex h-full items-center justify-center py-[54px]"
      >
        <Quiz />
      </div>
      {isOpened && content}
    </>
  );
}

export default App;
