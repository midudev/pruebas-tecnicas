import { toast } from "sonner";

export const useToast = () => {
  const throwSuccessToast = (label: string) => {
    return toast.success(label);
  };

  const throwErrorToast = (label: string) => {
    return toast.error(label);
  };

  return {
    throwSuccessToast,
    throwErrorToast,
  };
};
