export default function CourseOverlay({
  isOpen,
  onClose,
  title = 'Intro to Robotics',
  description = 'Learn the fundamentals of robotics, coding, and engineering through fun hands-on projects and interactive lessons.'
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white transition hover:scale-105 hover:bg-red-600"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Robotix Course
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-gray-900">
            {title}
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed text-gray-600">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-2xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700">
            Enroll Now
          </button>

          <button
            onClick={onClose}
            className="rounded-2xl border border-gray-300 px-6 py-3 text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

/*
Example Usage:

import { useState } from 'react'
import CourseOverlay from './CourseOverlay'

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <button
        onClick={() => setOpen(true)}
        className="rounded-2xl bg-blue-600 px-6 py-3 text-white"
      >
        Open Course Overlay
      </button>

      <CourseOverlay
        isOpen={open}
        onClose={() => setOpen(false)}
        title="AI & Robotics for Kids"
        description="Students build real robotic systems while learning coding, sensors, automation, and AI concepts in a fun and beginner-friendly environment."
      />
    </div>
  )
}
*/
