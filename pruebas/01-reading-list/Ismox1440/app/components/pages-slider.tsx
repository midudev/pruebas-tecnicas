"use client";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type SliderProps = React.ComponentProps<typeof Slider>;

export function PagesSlider({ className, ...props }: SliderProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pages = Number(searchParams.get("pages")) || 1500;
  const [value, setValue] = useState(pages);

  const handleChange = (value: number[]) => {
    setValue(Number(value));
  };

  const handleSubmit = (value: number[]) => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("pages", value.toString());
    router.push(`/home?${queryParams.toString()}`);
  };

  return (
    <div className={cn("lg:w-[30%] flex flex-col gap-2", className)}>
      <p className="text-sm text-gray-600">Hasta {value} paginas</p>
      <Slider
        defaultValue={[pages]}
        max={1500}
        step={1}
        onValueChange={handleChange}
        onValueCommit={handleSubmit}
        {...props}
      />
    </div>
  );
}
