import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Page Title',
}

export default function Page() {
  return (
    <main>
      <div className="p-10 bg-red-100">
        <h1>Welcome to Preppy</h1>
        <p>Pratice and get ready for your coding interviews</p>
      </div>
    </main>
  )
}
