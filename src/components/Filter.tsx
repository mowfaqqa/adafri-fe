"use client";
import { useState } from "react";

export default function Filters() {
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  return (
    <section>
      <div className="flex gap-4">
        <select className="border p-2 rounded" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Upcoming">Upcoming</option>
        </select>
        <input type="date" className="border p-2 rounded" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
    </section>
  );
}