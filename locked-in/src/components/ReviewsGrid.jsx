import React from "react";

const reviews = [
  {
    id: 1,
    name: "Chisa",
    title: "Transformative coaching",
    text: "The coaches pushed me safely past my limits — I'm stronger and more confident than ever.",
    rating: 5,
  },
  {
    id: 2,
    name: "Duke Tohr",
    title: "Best gym in town",
    text: "Great atmosphere and structured programs. The trainers actually care about progress.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ash Cash",
    title: "Friendly & knowledgeable",
    text: "Personalized plans and constant encouragement. Results followed quickly when I stayed consistent.",
    rating: 4,
  },
  {
    id: 4,
    name: "Chibi Lee",
    title: "Worth every minute",
    text: "Clean facilities, organized classes, and coaches who explain every movement clearly.",
    rating: 5,
  },
];

function StarRow({ rating = 5 }) {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-zinc-700"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.455 2.703c-.785.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.548 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.05 2.927z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsGrid() {
  return (
    <div className="max-w-7xl mx-auto w-full px-4">
      <div className="flex flex-col mb-10 gap-3">
        <span className='text-white text-center text-3xl md:text-7xl font-bold'>
            <span className='text-green-700'>Hear</span> from those who turned their goals into results
        </span>
        <span className='text-zinc-400 font-md text-center font-regular m-0 '>Our members share how dedication, expert coaching, and the right environment helped them break barriers and achieve the strength and confidence they once thought impossible.</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((r) => (
          <article
            key={r.id}
            className="card bg-zinc-900 border border-zinc-700 text-white shadow-md h-[350px] flex flex-col"
          >
            <div className="card-body flex-1 flex flex-col p-5">
              <header className="flex items-center gap-3 mb-3">
                <div className="avatar">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-lg font-semibold text-zinc-200">
                    {r.name.split(" ").map(n => n[0]).slice(0,2).join("")}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{r.name}</h4>
                  <p className="text-xs text-zinc-400">{r.title}</p>
                </div>
              </header>

              <p className="text-sm text-zinc-200 mb-4 flex-1">{r.text}</p>

              <footer className="mt-4 flex items-center justify-between">
                <StarRow rating={r.rating} />
              </footer>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
