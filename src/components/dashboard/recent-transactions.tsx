import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IncomingIcon, PaypalIcon, CreditCardIcon } from "@/components/icons";

const transactions = [
  {
    id: 1,
    name: "Deposit from my Card",
    amount: -850,
    date: "28 January 2021",
    icon: CreditCardIcon,
    bgColor: "bg-transaction-yellow-light",
    textColor: "text-transaction-yellow",
  },
  {
    id: 2,
    name: "Deposit Paypal",
    amount: 2500,
    date: "25 January 2021",
    icon: PaypalIcon,
    bgColor: "bg-transaction-blue-light",
    textColor: "text-transaction-blue",
  },
  {
    id: 3,
    name: "Jemi Wilson",
    amount: 5400,
    date: "21 January 2021",
    icon: IncomingIcon,
    bgColor: "bg-transaction-green-light",
    textColor: "text-transaction-green",
  },
];

export function RecentTransactions() {
  return (
    <Card className="border-none shadow-none bg-transparent space-y-6 p-0">
      <CardHeader className="p-0">
        <CardTitle className="text-2xl font-semibold tracking-tight p-0">
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent className=" bg-white p-6 border rounded-3xl border-gray-200 ">
        <div className="space-y-4 ">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between "
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full  flex items-center justify-center ${transaction.bgColor}`}
                >
                  <transaction.icon
                    className={`h-5 w-5 ${transaction.textColor}`}
                  />
                </div>
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {transaction.date}
                  </p>
                </div>
              </div>
              <p
                className={`font-medium ${
                  transaction.amount > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {transaction.amount > 0 ? "+" : ""}
                {transaction.amount}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
