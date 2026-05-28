import { FC } from "react";
import { HelpCategory, scrollToSection } from "../help_center.utils";

interface HelpCategoryCardProps {
  category: HelpCategory;
}

const HelpCategoryCard: FC<HelpCategoryCardProps> = ({ category }) => {
  const handleClick = () => {
    scrollToSection(category.sectionId);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group text-left w-full bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-blue-500/30 p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <div className="text-3xl mb-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
        <i className={category.icon} aria-hidden="true"></i>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
        {category.title}
      </h3>
      <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{category.description}</p>
      <span className="inline-flex items-center gap-1 mt-4 text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 font-medium">
        Learn more
        <i
          className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        ></i>
      </span>
    </button>
  );
};

export default HelpCategoryCard;
