import React from "react";
import ReactSelect, { SingleValue } from "react-select";
import { SOFTPINKCOLOR } from "~/constants";

interface IOption {
  value: string;
  label: string;
}

interface ISelectProps {
  options: IOption[];
  className: string;
  placeHolder: string;
  onChange: (newValue: SingleValue<IOption>) => void;
}

export const Select = (props: ISelectProps) => {
  return (
    <ReactSelect
      className={props.className}
      placeholder={props.placeHolder}
      isClearable
      onChange={(newValue) => props.onChange(newValue)}
      theme={(theme) => ({
        ...theme,
        // borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "#f1f1f1",
          primary50: SOFTPINKCOLOR,
          primary: SOFTPINKCOLOR,
        },
      })}
      options={props.options}
    />
  );
};
