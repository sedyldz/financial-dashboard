import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface CardData {
  id: string;
  type: string;
  number: string;
  balance: number;
  currency: string;
  holderName: string;
  validThru: string;
}

interface MyCardsProps {
  cards: CardData[];
}

export function MyCards({ cards }: MyCardsProps) {
  return (
    <>
      {cards.map((card) => (
        <Card key={card.id} className="overflow-hidden rounded-3xl flex-1 min-w-[300px] ">
          <CardContent
            className={`pt-6 pb-0 px-0 ${
              card.type.toLowerCase() === "visa"
                ? "bg-gradient-to-r from-[#5B5A6F] to-[#000000] text-white"
                : "bg-white"
            }`}
          >
            <div className="space-y-6">
              <div className="flex justify-between px-6">
                <div>
                  <p className="text-sm opacity-70">Balance</p>
                  <p className="text-2xl font-semibold">${card.balance.toLocaleString()}</p>
                </div>
                <div
                  className={`flex gap-1 ${
                    card.type.toLowerCase() === "visa" ? "text-white" : "text-black"
                  }`}
                >
                  <Image
                    src={
                      card.type.toLowerCase() === "visa" ? "/Chip_Card_White.png" : "/Chip_Card.png"
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
                    <p>{card.holderName}</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-70">VALID THRU</p>
                    <p>{card.validThru}</p>
                  </div>
                </div>
              </div>
              <div
                className={`flex justify-between p-5 bg-gradient-to-b from-white/15 to-transparent ${
                  card.type.toLowerCase() !== "visa" ? "border-t border-gray-200 pt-4" : ""
                }`}
              >
                <p className={`text-lg tracking-wider`}>{card.number}</p>
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
                    fill={card.type.toLowerCase() === "visa" ? "white" : "#9199AF"}
                    fillOpacity="0.5"
                  />
                  <circle
                    cx="29"
                    cy="15"
                    r="15"
                    fill={card.type.toLowerCase() === "visa" ? "white" : "#9199AF"}
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
