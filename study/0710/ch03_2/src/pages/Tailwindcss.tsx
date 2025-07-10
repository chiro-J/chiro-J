import * as D from '../data'

export default function Tailwindcss() {
  return (
    <div className="bg-black/70">
      <p className="w-1/4 p-16 text-lg text-blue-200">
        Tailwindcss
      </p>
      <p className="italic text-gray-500 line-clamp-5">
        {D.randomParagraphs(10)}
      </p>
      <button className="btn btn-primary" style={{ textTransform: 'none' }}>
        Button
      </button>
    </div>
  )
}
