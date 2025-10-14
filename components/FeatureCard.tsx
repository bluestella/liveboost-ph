import type { FC } from "react";

type Props = {
  title: string;
  description: string;
  // Accept any icon-like React component; avoids lucide-react dependency
  Icon?: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

const FeatureCard: FC<Props> = ({ title, description, Icon }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        {Icon ? (
          <Icon aria-hidden className="h-5 w-5 text-secondary-600" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5 text-secondary-600"
            aria-hidden
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v10M7 12h10" />
          </svg>
        )}
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-gray-900">{description}</p>
    </div>
  );
};

export default FeatureCard;