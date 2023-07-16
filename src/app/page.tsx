import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Page Title',
}

export default function Page() {
  return (
    <div>
      <section className="p-5 border border-gray-200">
        <div className="flex flex-col md:flex-row items-stretch gap-10">
          <div className="py-24 w-3/5">
            <div className="mb-20  text-gray-700">
              <h1 className=" text-6xl mb-5 text-black">
                Never be{' '}
                <span className="font-bold text-purple-500 italic">
                  {' '}
                  unprepapered{' '}
                </span>{' '}
                for any Interview again
              </h1>
              <p>Pratice and get ready for your coding interviews.</p>
              <p>
                Let us help you prepare for your interview with your dream job,
                how about that!
              </p>
            </div>

            <button className="bg-purple-400 hover:bg-purple-500 text-white rounded-sm px-8 py-4 me-3">
              Get started
            </button>
            <button className="hover:bg-gray-100 rounded-sm px-8 py-4">
              learn more
            </button>
          </div>
          <div className="w-2/5">
            <div className="bg-purple-200 h-full w-full rounded-lg"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
