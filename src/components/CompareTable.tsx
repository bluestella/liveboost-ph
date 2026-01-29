import React from "react"

type ComparisonRow = {
  feature: string
  starter: string
  growth: string
  premium: string
}

export default function CompareTable({
  planLabels,
  planPrices,
  rows,
}: {
  planLabels: [string, string, string]
  planPrices: [string, string, string]
  rows: ComparisonRow[]
}) {
  return (
    <div className="glass-card rounded-3xl border border-gray-100/50 dark:border-white/10 overflow-hidden">
      <div className="grid grid-cols-4 text-sm">
        <div className="p-6 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800 dark:to-slate-700 font-bold text-gray-900 dark:text-white text-left">
          Feature
        </div>
        <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-900 text-center">
          <div className="text-lg font-bold text-gray-900 dark:text-white">{planLabels[0]}</div>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{planPrices[0]}</div>
        </div>
        <div className="p-6 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 text-center relative">
          <div className="text-lg font-bold text-gray-900 dark:text-white">{planLabels[1]}</div>
          <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">{planPrices[1]}</div>
        </div>
        <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 text-center">
          <div className="text-lg font-bold text-gray-900 dark:text-white">{planLabels[2]}</div>
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{planPrices[2]}</div>
        </div>
        {rows.map((row, i) => (
          <React.Fragment key={row.feature}>
            <div className={`p-6 text-left font-medium ${i % 2 === 0 ? "bg-white dark:bg-slate-900" : "bg-slate-50 dark:bg-slate-800"} text-gray-800 dark:text-gray-200`}>
              {row.feature}
            </div>
            <div className={`p-6 text-center font-semibold ${i % 2 === 0 ? "bg-blue-50/30 dark:bg-blue-950/30" : "bg-white dark:bg-slate-900"} text-gray-700 dark:text-gray-200`}>{row.starter}</div>
            <div className={`p-6 text-center font-semibold ${i % 2 === 0 ? "bg-orange-50/50 dark:bg-orange-900/30" : "bg-white dark:bg-slate-900"} text-gray-700 dark:text-gray-200`}>{row.growth}</div>
            <div className={`p-6 text-center font-semibold ${i % 2 === 0 ? "bg-purple-50/30 dark:bg-purple-900/30" : "bg.white dark:bg-slate-900"} text-gray-700 dark:text-gray-200`}>{row.premium}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
