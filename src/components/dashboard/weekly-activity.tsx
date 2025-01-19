"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

interface WeeklyActivityProps {
  data: {
    day: string;
    income: number;
    expenses: number;
  }[];
}

export function WeeklyActivity({ data }: WeeklyActivityProps) {
  return (
    <Card className="border-none shadow-none bg-transparent space-y-6 p-0">
      <CardHeader className="p-0">
        <CardTitle className="text-2xl font-semibold tracking-tight p-0">Weekly Activity</CardTitle>
      </CardHeader>
      <CardContent className="bg-white p-6 border rounded-3xl border-gray-200">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="income" fill="#4F46E5" name="Income" />
            <Bar dataKey="expenses" fill="#1F2937" name="Expenses" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
