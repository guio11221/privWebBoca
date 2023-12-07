import NavBar from '../components/menu/menu'
import Footer from '../components/footer/footer'
import { FiInstagram,  } from 'react-icons/fi'

export default function Example() {

  return (
    <>
    <NavBar />
    <div className="isolate bg-white px-5 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Entre em contato!!</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Isso é fake, não precisa enviar nada, só fizemos para demonstração!!
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Nome
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Sobrenome
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           Enviar
          </button>
        </div>
      </form>
      <div className="mt-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Redes social!!</h2>
            <p className="text-lg text-gray-700 leading-loose">
              Caso tenha alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato
              conosco pelas redes sociais abaixo:
            </p>
            <div className="flex mt-6">
              <div className="flex items-center mr-6">
                <a href='https://instagram.com/eog_xx/' className="flex items-center">
                  <FiInstagram className="text-3xl text-gray-600 hover:text-gray-800" />
                  <span className="ml-2 text-gray-700">Guii Santos</span>
                </a>
              </div>
              <div className="flex items-center">
                <a href='https://instagram.com/jucielly_goncalves_/' className="flex items-center">
                  <FiInstagram className="text-3xl text-gray-600 hover:text-gray-800" />
                  <span className="ml-2 text-gray-700">Jucielly</span>
                </a>
              </div>
            </div>
          </div>
    </div>
    <Footer />
 </>
  )
}
