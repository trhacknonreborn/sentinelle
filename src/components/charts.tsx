import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { seizureSeries, thcSeries } from "@/data/catalog";

function useMounted() {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(true), []);
  return on;
}

const tooltipStyle = {
  background: "#161617",
  border: "1px solid #2c2c2e",
  borderRadius: 8,
  color: "#f1efe8",
  fontSize: 12,
};

export function SeizureChart() {
  const on = useMounted();
  if (!on) return <div className="h-64 rounded-xl bg-surface" />;
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={seizureSeries} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="#2c2c2e" strokeDasharray="3 3" />
          <XAxis dataKey="year" stroke="#8b8a84" tick={{ fill: "#8b8a84", fontSize: 12 }} />
          <YAxis stroke="#8b8a84" tick={{ fill: "#8b8a84", fontSize: 12 }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 12, color: "#8b8a84" }} />
          <Line
            type="monotone"
            dataKey="cocaine"
            name="Cocaïne (tonnes saisies)"
            stroke="#c5cdd8"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="cannabis"
            name="Cannabis (tonnes saisies)"
            stroke="#7a9a84"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ThcChart() {
  const on = useMounted();
  if (!on) return <div className="h-56 rounded-xl bg-surface" />;
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={thcSeries} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="#2c2c2e" strokeDasharray="3 3" />
          <XAxis dataKey="year" stroke="#8b8a84" tick={{ fill: "#8b8a84", fontSize: 12 }} />
          <YAxis
            stroke="#8b8a84"
            tick={{ fill: "#8b8a84", fontSize: 12 }}
            unit="%"
            domain={[0, 40]}
          />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: 12, color: "#8b8a84" }} />
          <Line
            type="monotone"
            dataKey="herbe"
            name="THC herbe (%)"
            stroke="#c5cdd8"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="resine"
            name="THC résine (%)"
            stroke="#c45c4a"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
