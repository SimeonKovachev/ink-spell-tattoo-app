import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const SingleFaq = (props: { question: string; answer: string }) => {
  const { question, answer } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`group flex h-full flex-col relative overflow-hidden rounded-xl border-2 transition-all duration-500 ease-in-out ${
        isOpen
          ? "border-accent-purple/50 bg-dark-2/90 shadow-lg shadow-accent-purple/5"
          : "border-dark-3/20 bg-dark-2/50 hover:border-dark-3/40 hover:bg-dark-2/70"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex min-h-[120px] w-full flex-1 items-center justify-between p-6 text-left transition-all duration-300"
      >
        <div className="flex items-center gap-5 flex-1 pr-6">
          <div
            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${
              isOpen
                ? "bg-accent-purple text-white"
                : "bg-accent-purple/10 text-accent-purple group-hover:bg-accent-purple/20"
            }`}
          >
            <HelpCircle className="h-6 w-6" />
          </div>
          <h3
            className={`text-lg font-bold tracking-tight transition-all duration-300 md:text-xl ${
              isOpen
                ? "text-accent-purple"
                : "text-white group-hover:text-accent-purple/90"
            }`}
          >
            {question}
          </h3>
        </div>
        <ChevronDown
          className={`h-6 w-6 flex-shrink-0 transition-all duration-500 ${
            isOpen
              ? "rotate-180 text-accent-purple"
              : "text-accent-purple/50 group-hover:text-accent-purple"
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 pt-0 text-base leading-relaxed text-dark-6 md:text-lg">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFaq;
