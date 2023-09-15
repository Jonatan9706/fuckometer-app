import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";

export const BgGradient = () => {
  return (
    <div className="h-72 bg-gradient-to-r from-violet-800 to-red-500 items-center flex flex-col justify-center text-white">
      <div className="flex lg:w-6/12 sm:w-10/12 items-center lg:space-x-6 sm:space-x-20 flex-col relative">
        <div className="flex items-center lg:space-x-6 sm:space-x-20 w-full">
          <img
            src="https://avatars.githubusercontent.com/u/47986653?v=4"
            className="rounded-full border-withe border-2 w-48 h-48"
          />
          <h1 className="text-white font-bold text-3xl">John Oliveira</h1>
        </div>
        <div className="absolute top-3/4 cursor-pointer hover:underline">
          <HoverCard>
            <HoverCardTrigger>
              Nos conte! O quanto está fudido hoje?
            </HoverCardTrigger>
            <HoverCardContent>Teste</HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};
