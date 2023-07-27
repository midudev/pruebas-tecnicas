import React from "react";
import { Icon, IconCatalog } from "~/components/Icon";

export const SearchInput = () => {
  return (
    <div className="text-gray-600 focus-within:text-gray-400 relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button
          className="focus:shadow-outline p-1 focus:outline-none"
          type="submit"
        >
          <Icon icon={IconCatalog.searchIcon} className="h-4 w-4 text-gray" />
        </button>
      </span>
      <input
        type="search"
        className="bg-transparent w-full rounded-md py-2 pl-10 text-lg text-primary-black focus:text-primary-black focus:outline-none"
        placeholder="Search book name ..."
      />
    </div>
  );
};

