import { Header } from "@/components/header";

import { MyCards } from "@/components/dashboard/my-cards";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { WeeklyActivity } from "@/components/dashboard/weekly-activity";
import { ExpenseStats } from "@/components/dashboard/expense-stats";
import { QuickTransfer } from "@/components/dashboard/quick-transfer";
import { BalanceHistory } from "@/components/dashboard/balance-history";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background ">
      <div className="flex-1">
        <Header />
        <main className="p-6 space-y-6 overflow-x-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* First Row */}
            <div className="md:col-span-8">
              <div>
                <div className="flex justify-between items-center mb-6 overflow-x-auto">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    My Cards
                  </h2>
                  <button className="text-primary hover:underline">
                    See All
                  </button>
                </div>
                <div className="flex flex-row gap-4 overflow-x-auto pb-4">
                  <MyCards />
                </div>
              </div>
            </div>
            <div className="md:col-span-4">
              <RecentTransactions />
            </div>

            {/* Second Row */}
            <div className="md:col-span-8">
              <WeeklyActivity />
            </div>
            <div className="md:col-span-4">
              <ExpenseStats />
            </div>

            {/* Third Row */}
            <div className="md:col-span-4">
              <QuickTransfer />
            </div>
            <div className="md:col-span-8">
              <BalanceHistory />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
