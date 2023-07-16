import Link from 'next/link';
import { type FC, type PropsWithChildren } from 'react';

interface Props {
  totalItems: number;
}

export const Navbar: FC<PropsWithChildren<Props>> = ({ totalItems = 0, children }) => {
  return (
    <div className="navbar bg-gray-800">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Librería
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <i className="bx bx-cart text-xl" />
              <span className="rounded-3xl badge-sm indicator-item bg-secondary text-gray-200">
                {totalItems}
              </span>
            </div>
          </label>
          <div tabIndex={0} className="mt-3 z-1 card card-compact dropdown-content bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">
                {totalItems}&nbsp;
                {totalItems !== 1 ? 'libros' : 'libro'}
              </span>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
