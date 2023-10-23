import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import modalStore from "../../../store/modalStore";
import quizStore from "../../../store/quizStore";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Modal: React.FC<Props> = ({ children }) => {
  const { closeModal, isOpened } = modalStore();
  const { restartQuiz } = quizStore();

  const onCloseModal = () => {
    closeModal();
    restartQuiz();
  };
  return (
    <Transition appear show={isOpened} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="md:min-w-xl w-full max-w-4xl transform overflow-hidden rounded-2xl bg-[#D9D9D9] pb-8 pt-3 shadow-xl transition-all md:h-[600px]">
                <div className="flex w-full justify-end pr-3">
                  <button
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white drop-shadow-xl"
                    onClick={onCloseModal}
                  >
                    <span className="font-bold text-black">X</span>
                  </button>
                </div>

                <div className="mt-8 px-4 md:px-12">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
