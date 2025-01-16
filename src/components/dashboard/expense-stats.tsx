"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

const data = [
  { name: "Entertainment", value: 30 },
  { name: "Investment", value: 20 },
  { name: "Bill Expense", value: 15 },
  { name: "Others", value: 35 },
]

const COLORS = ["#312E81", "#4F46E5", "#F97316", "#111827"]

export function ExpenseStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}