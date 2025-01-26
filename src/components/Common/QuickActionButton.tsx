import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";

const QuickActionButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact#booknow");
  };

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      <div
        onClick={handleClick}
        aria-label="Бързо Записване на Час"
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-accent-purple text-white shadow-md transition duration-300 ease-in-out hover:bg-dark-purple"
      >
        <Phone className="w-6 h-6" />
      </div>
    </div>
  );
};

export default QuickActionButton;
