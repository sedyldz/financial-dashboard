"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ExpenseStatsProps {
  data: {
    category: string;
    amount: number;
    percentage: number;
  }[];
}

const COLORS = ["#312E81", "#4F46E5", "#F97316", "#111827", "#6B7280"];

// Add this custom label renderer function
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  name: string;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="12"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function ExpenseStats({ data }: ExpenseStatsProps) {
  // Transform data for the pie chart
  const pieData = data.map((item) => ({
    name: item.category,
    value: item.amount,
  }));

  return (
    <Card className="border-none shadow-none bg-transparent space-y-6 p-0">
      <CardHeader className="p-0">
        <CardTitle className="text-2xl font-semibold tracking-tight p-0">
          Expense Statistics
        </CardTitle>
      </CardHeader>
      <CardContent className="bg-white p-6 border rounded-3xl border-gray-200">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={140}
              fill="#8884d8"
              dataKey="value"
              nameKey="category"
              label={renderCustomizedLabel}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
