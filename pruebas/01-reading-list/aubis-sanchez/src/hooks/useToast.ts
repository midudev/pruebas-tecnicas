import { Toaster, toast } from "sonner";

export const useToast = () => {
  const throwSuccessToast = (label: string) => {
    return toast.success(label);
  };

  return {
    throwSuccessToast,
  };
};
