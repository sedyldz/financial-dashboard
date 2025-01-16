import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"

const transactions = [
  {
    id: 1,
    name: "Deposit from my Card",
    amount: -850,
    date: "28 January 2021",
    icon: "💳",
  },
  {
    id: 2,
    name: "Deposit Paypal",
    amount: 2500,
    date: "25 January 2021",
    icon: "🅿️",
  },
  {
    id: 3,
    name: "Jemi Wilson",
    amount: 5400,
    date: "21 January 2021",
    icon: "👤",
  },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  {transaction.icon}
                </div>
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <p className={`font-medium ${
                transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.amount > 0 ? '+' : ''}{transaction.amount}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}