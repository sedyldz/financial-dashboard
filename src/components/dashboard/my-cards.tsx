import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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
];

export function MyCards() {
  return (
    <>
      {cards.map((card, index) => (
        <Card key={index} className="overflow-hidden rounded-3xl">
          <CardContent
            className={`pt-6 pb-0 px-0 ${
              card.variant === "dark"
                ? "bg-gradient-to-r from-[#5B5A6F] to-[#000000] text-white"
                : "bg-white"
            }`}
          >
            <div className="space-y-6">
              <div className="flex justify-between px-6">
                <div>
                  <p className="text-sm opacity-70">Balance</p>
                  <p className="text-2xl font-semibold">
                    ${card.balance.toLocaleString()}
                  </p>
                </div>
                <div
                  className={`flex gap-1 ${
                    card.variant === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  <Image
                    src={
                      card.variant === "dark"
                        ? "/Chip_Card_White.png"
                        : "/Chip_Card.png"
                    }
                    alt="Card chip"
                    width={34}
                    height={34}
                    className="h-[34px] w-[34px]"
                  />
                </div>
              </div>
              <div className="px-6">
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
              <div className="flex justify-between p-4 bg-gradient-to-b from-white/15 to-transparent">
                <p className="text-lg tracking-wider">{card.cardNumber}</p>
                <svg
                  width="44"
                  height="30"
                  viewBox="0 0 44 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="15"
                    cy="15"
                    r="15"
                    fill="white"
                    fillOpacity="0.5"
                  />
                  <circle
                    cx="29"
                    cy="15"
                    r="15"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
