"use client";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

const ClearButton = () => {
  const url = useSearchParams();
  const router = useRouter();
  return (
    <div>
      {!!url.toString() && (
        <Button variant="outline" onClick={() => router.push("/home")}>Limpiar Filtros</Button>
      )}
    </div>
  );
};

export default ClearButton;
