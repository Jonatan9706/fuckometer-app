import Link from "next/link";
import { Button } from "./ui/button";
import { HeartCrack } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex items-center py-1 justify-center ">
      <div className="flex items-center justify-between lg:w-6/12 h-10 text-center sm:w-10/12">
        <div className="flex space-x-2 items-center">
          <HeartCrack size={20} color="#f00" />
          <h1 className="text-stone-800 font-bold text-base">Fudidometro</h1>
        </div>
        <div className="space-x-2">
          <Link href="/" className="text-stone-800 font-bold cursor-pointer">
            Entrar
          </Link>
          <Button className="bg-red-600 rounded text-white hover:bg-red-700 cursor-pointer">
            CRIAR CONTA
          </Button>
        </div>
      </div>
    </header>
  );
};
