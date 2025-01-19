import { Header } from "@/components/header";
import { Suspense } from "react";

import { MyCards } from "@/components/dashboard/my-cards";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { WeeklyActivity } from "@/components/dashboard/weekly-activity";
import { ExpenseStats } from "@/components/dashboard/expense-stats";
import { QuickTransfer } from "@/components/dashboard/quick-transfer";
import { BalanceHistory } from "@/components/dashboard/balance-history";

// Mock data interfaces
interface Card {
  id: string;
  type: string;
  number: string;
  balance: number;
  currency: string;
}

interface Transaction {
  id: string;
  type: string;
  amount: number;
  description: string;
  date: string;
}

// Mock API functions
async function getCards(): Promise<Card[]> {
  return [
    {
      id: "1",
      type: "Visa",
      number: "**** 4242",
      balance: 5420.42,
      currency: "USD",
    },
    {
      id: "2",
      type: "Mastercard",
      number: "**** 5555",
      balance: 2800.0,
      currency: "USD",
    },
  ];
}

async function getRecentTransactions(): Promise<Transaction[]> {
  return [
    {
      id: "1",
      type: "debit",
      amount: 850,
      description: "Deposit from my Card",
      date: "2021-01-28",
    },
    {
      id: "2",
      type: "paypal",
      amount: 2500,
      description: "Deposit Paypal",
      date: "2021-01-25",
    },
    {
      id: "3",
      type: "credit",
      amount: 5400,
      description: "Jemi Wilson",
      date: "2021-01-21",
    },
  ];
}

export default async function DashboardPage() {
  const cards = await getCards();
  const transactions = await getRecentTransactions();

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
                  <Suspense fallback={<div>Loading cards...</div>}>
                    <MyCards cards={cards} />
                  </Suspense>
                </div>
              </div>
            </div>
            <div className="md:col-span-4">
              <Suspense fallback={<div>Loading transactions...</div>}>
                <RecentTransactions transactions={transactions} />
              </Suspense>
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
