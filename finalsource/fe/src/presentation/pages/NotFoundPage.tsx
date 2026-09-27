import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="min-h-screen grid place-items-center p-6 text-center">
      <section>
        <h1 className="text-3xl font-bold text-slate-900">Page not found</h1>
        <Link className="mt-4 inline-block text-blue-700 underline" to="/">
          Return home
        </Link>
      </section>
    </main>
  )
}

export default NotFoundPage
