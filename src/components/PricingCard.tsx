import Link from "next/link"

export type Plan = {
  name: string
  price: string
  badge?: string
  highlighted?: boolean
  features: string[]
}

const themeByIndex = (index: number) => {
  if (index === 0)
    return {
      dotBg: "bg-blue-100",
      dotIcon: "text-blue-600",
      gradient: "from-blue-500 to-indigo-500",
      shadow: "hover:shadow-blue-500/25",
      overlay: "from-blue-50 to-indigo-50",
    }
  if (index === 1)
    return {
      dotBg: "bg-orange-100",
      dotIcon: "text-orange-600",
      gradient: "from-orange-500 to-red-500",
      shadow: "hover:shadow-orange-500/25",
      overlay: "from-orange-50 to-red-50",
    }
  return {
    dotBg: "bg-purple-100",
    dotIcon: "text-purple-600",
    gradient: "from-purple-500 to-pink-500",
    shadow: "hover:shadow-purple-500/25",
    overlay: "from-purple-50 to-pink-50",
  }
}

export default function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  const theme = themeByIndex(index)
  return (
    <div className={`group relative glass-card rounded-3xl p-8 transition-all duration-500 border ${plan.highlighted ? "ring-2 ring-orange-500/50" : "border-gray-100/50 dark:border-white/10"} hover:-translate-y-2`}>
      <div className={`absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br ${theme.overlay} opacity-20 group-hover:opacity-35 transition-opacity`} />
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            {plan.badge}
          </div>
        </div>
      )}
      {!plan.highlighted && plan.badge && (
        <div className="mb-6">
          <span className="inline-block glass-card text-white/90 px-4 py-2 rounded-full text-sm font-semibold border border-white/10">
            {plan.badge}
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
        <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
          {plan.price}
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${theme.dotBg}`}>
              <svg className={`h-4 w-4 ${theme.dotIcon}`} viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-gray-700 dark:text-gray-200 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`w-full inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-r ${theme.gradient} text-white hover:shadow-2xl ${theme.shadow}`}
      >
        Get Started
      </Link>
    </div>
  )
}
