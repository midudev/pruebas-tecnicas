/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAppSelector } from "@/Hooks/useRedux";
import { closeSnackbar } from "@/store/slices/snackbar";
import classNames from "classnames";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const SnackBarComponent = () => {
  const cn = classNames;
  const dispatch = useDispatch();
  const { alert, close, message, open } = useAppSelector(
    (state) => state.snackbar
  );

  const handleClose = () => {
    setTimeout(() => {
      dispatch(closeSnackbar());
    }, 5000);
  };

  useEffect(() => {
    handleClose();
  }, [alert]);

  const classes: any = {
    snackbar: cn({
      "translate-x-0 bg-green-400": open && alert.color === "success",
      "translate-x-0 bg-red-400": open && alert.color === "error",
      "-translate-x-[100rem]": close,
    }),
  };

  return (
    <>
      {alert && (
        <div
          className={`${classes.snackbar} transition-all ease-in-out duration-500 fixed z-[1000] shadow-2x bottom-0 m-5 px-16 py-4 rounded-lg`}
        >
          <p className="text-white text-xl font-Anton">{message}</p>
        </div>
      )}
    </>
  );
};

export default SnackBarComponent;
