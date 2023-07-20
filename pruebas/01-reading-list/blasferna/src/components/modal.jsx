"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";

export default function Modal({ children }) {
  const router = useRouter();

  const handleOnOpenChange = (open) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog.Root open onOpenChange={handleOnOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 z-30" />

        <Dialog.DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[95%] md:w-auto max-w-[800px]">
          <div className="max-h-[calc(100vh-60px)] overflow-y-auto">
            {children}
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute -right-2 -top-2 text-gray-800 hover:text-gray-900 bg-gray-300 hover:bg-gray-50 rounded-full p-2"
              aria-label="Close"
            >
              <XMarkIcon className="w-5 h-5"></XMarkIcon>
            </button>
          </Dialog.Close>
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
