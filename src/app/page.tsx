"use client";
import { useState } from "react";

export default function Home() {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: "Push-ups", sets: 3, reps: 12, done: true },
    { id: 2, name: "Squats", sets: 3, reps: 15, done: false },
    { id: 3, name: "Plank", sets: 3, reps: 60, done: false },
  ]);
  const [name, setName] = useState("");
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(10);

  const addWorkout = () => {
    if (!name.trim()) return;
    setWorkouts([...workouts, { id: Date.now(), name, sets, reps, done: false }]);
    setName("");
  };
  const toggleDone = (id: number) => {
    setWorkouts(workouts.map((w) => (w.id === id ? { ...w, done: !w.done } : w)));
  };
  const doneCount = workouts.filter((w) => w.done).length;
  const progress = workouts.length ? Math.round((doneCount / workouts.length) * 100) : 0;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-blue-600 font-semibold">NETTA WANGUI KIRURI</p>
        <h1 className="text-4xl font-bold mt-1">MyFit - Fitness Tracker</h1>
        <p className="text-slate-600 mt-2">Log workouts, track sets and reps, and see your progress.</p>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-5 rounded-xl border text-center"><p className="text-sm text-slate-500">Workouts</p><p className="text-2xl font-bold">{workouts.length}</p></div>
          <div className="bg-white p-5 rounded-xl border text-center"><p className="text-sm text-slate-500">Done</p><p className="text-2xl font-bold">{doneCount}</p></div>
          <div className="bg-white p-5 rounded-xl border text-center"><p className="text-sm text-slate-500">Progress</p><p className="text-2xl font-bold">{progress}%</p></div>
        </div>
        <div className="mt-4 bg-slate-200 rounded-full h-3 overflow-hidden"><div className="bg-green-500 h-3" style={{ width: progress + "%" }} /></div>
        <div className="mt-8 bg-white p-6 rounded-xl border">
          <h2 className="text-xl font-bold mb-4">Add Workout</h2>
          <div className="flex gap-2 flex-wrap">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Workout name - e.g. Lunges" className="flex-1 min-w- px-3 py-2 border rounded-lg" />
            <input type="number" value={sets} onChange={(e) => setSets(Number(e.target.value))} className="w-20 px-3 py-2 border rounded-lg" />
            <input type="number" value={reps} onChange={(e) => setReps(Number(e.target.value))} className="w-20 px-3 py-2 border rounded-lg" />
            <button onClick={addWorkout} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Add</button>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {workouts.map((w) => (
            <div key={w.id} className="bg-white p-4 rounded-xl border flex justify-between items-center">
              <div><p className="font-medium">{w.name}</p><p className="text-sm text-slate-500">{w.sets} sets x {w.reps} reps</p></div>
              <button onClick={() => toggleDone(w.id)} className={`px-4 py-2 rounded-lg font-medium ${w.done ? "bg-green-600 text-white" : "bg-slate-200"}`}>{w.done ? "Done" : "Mark Done"}</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}