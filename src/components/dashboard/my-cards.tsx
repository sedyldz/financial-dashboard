import { Card, CardContent } from "@/components/ui/card"

const cards = [
  {
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    cardNumber: "3778 **** **** 1234",
    validThru: "12/22",
    variant: "dark",
  },
  {
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    cardNumber: "3778 **** **** 1234",
    validThru: "12/22",
    variant: "light",
  },
]

export function MyCards() {
  return (
    <>
      {cards.map((card, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className={`p-6 ${
            card.variant === 'dark' ? 'bg-gray-900 text-white' : 'bg-white'
          }`}>
            <div className="space-y-6">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm opacity-70">Balance</p>
                  <p className="text-2xl font-semibold">
                    ${card.balance.toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-red-500 rounded-full opacity-80" />
                  <div className="w-4 h-4 bg-orange-400 rounded-full opacity-80" />
                </div>
              </div>
              <div>
                <p className="text-lg tracking-wider">{card.cardNumber}</p>
                <div className="flex justify-between mt-4">
                  <div>
                    <p className="text-xs opacity-70">CARD HOLDER</p>
                    <p>{card.cardHolder}</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-70">VALID THRU</p>
                    <p>{card.validThru}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}