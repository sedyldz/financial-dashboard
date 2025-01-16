import { Header } from "@/components/header"

import { MyCards } from "@/components/dashboard/my-cards"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { WeeklyActivity } from "@/components/dashboard/weekly-activity"
import { ExpenseStats } from "@/components/dashboard/expense-stats"
import { QuickTransfer } from "@/components/dashboard/quick-transfer"
import { BalanceHistory } from "@/components/dashboard/balance-history"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
  
      <div className="flex-1">
        <Header />
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold tracking-tight">My Cards</h2>
                <button className="text-primary hover:underline">See All</button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <MyCards />
              </div>
              <WeeklyActivity />
              <QuickTransfer />
            </div>
            <div className="md:col-span-4 space-y-6">
              <RecentTransactions />
              <ExpenseStats />
              <BalanceHistory />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}