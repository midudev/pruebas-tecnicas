import { BookStatus } from "../../context/helpers/interfaces/types";
import { EnBibliotecaIcon, LeidoIcon, LeyendoIcon } from "../utils/Icons";

export default function StatusBookIcon({ status }) {
  return (
    <div className="flex items-center justify-end pt-3">
      {status !== BookStatus.NOT_READ ? (
        <span
          className="bg-white text-black text-lg font-bold px-3 py-3 rounded-full"
          title={status}
        >
          {status === BookStatus.IN_LIBRARY ? (
            <EnBibliotecaIcon />
          ) : status === BookStatus.READING ? (
            <LeyendoIcon />
          ) : (
            <LeidoIcon />
          )}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}
