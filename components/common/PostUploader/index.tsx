import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

export type PostUploaderProps = {
  isOpen: boolean;
  onIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
};

const PostUploader = ({ isOpen, onIsOpen, children }: PostUploaderProps) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        onClose={() => onIsOpen(false)}
        className="fixed inset-0 p-4 overflow-y-auto z-50"
      >
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          className="w-full h-full flex justify-center items-center"
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="max-w-4xl rounded-xl w-full overflow-hidden bg-white shadow-2xl ring-1 ring-black/5">
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default PostUploader;
