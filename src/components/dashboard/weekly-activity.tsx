"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Sat", deposit: 240, withdraw: 450 },
  { name: "Sun", deposit: 130, withdraw: 320 },
  { name: "Mon", deposit: 250, withdraw: 310 },
  { name: "Tue", deposit: 350, withdraw: 450 },
  { name: "Wed", deposit: 230, withdraw: 150 },
  { name: "Thu", deposit: 230, withdraw: 380 },
  { name: "Fri", deposit: 320, withdraw: 390 },
]

export function WeeklyActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="deposit" fill="#4F46E5" name="Deposit" />
            <Bar dataKey="withdraw" fill="#1F2937" name="Withdraw" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}