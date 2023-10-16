"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.back()}>
      Voltar
    </button>
  );
};
export default BackButton;
