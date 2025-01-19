import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IncomingIcon, PaypalIcon, CreditCardIcon } from "@/components/icons";

interface Transaction {
  id: string;
  type: string;
  amount: number;
  description: string;
  date: string;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

// Helper function to get icon and colors based on transaction type
const getTransactionDisplay = (type: string) => {
  switch (type.toLowerCase()) {
    case "credit":
      return {
        icon: IncomingIcon,
        bgColor: "bg-transaction-green-light",
        textColor: "text-transaction-green",
      };
    case "paypal":
      return {
        icon: PaypalIcon,
        bgColor: "bg-transaction-blue-light",
        textColor: "text-transaction-blue",
      };
    default:
      return {
        icon: CreditCardIcon,
        bgColor: "bg-transaction-yellow-light",
        textColor: "text-transaction-yellow",
      };
  }
};

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <Card className="border-none shadow-none bg-transparent space-y-6 p-0">
      <CardHeader className="p-0">
        <CardTitle className="text-2xl font-semibold tracking-tight p-0">
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-white p-6 border rounded-3xl border-gray-200">
        <div className="space-y-4">
          {transactions.map((transaction) => {
            const display = getTransactionDisplay(transaction.type);
            return (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${display.bgColor}`}
                  >
                    <display.icon className={`h-5 w-5 ${display.textColor}`} />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(transaction.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <p
                  className={`font-medium ${
                    transaction.type.toLowerCase() === "credit" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {transaction.type.toLowerCase() === "credit" ? "+" : "-"}
                  {Math.abs(transaction.amount)}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
