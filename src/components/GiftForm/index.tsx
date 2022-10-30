import { ChangeEvent, useState } from "react";
import { api } from "../../server/api";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function GiftForm() {
  const [ title, setTitle ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ description, setDescription ] = useState("")
  let imageBase64 = null

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      imageBase64 = String(reader.result)
    }
    reader.readAsDataURL(file)
  }

  async function saveGift(event) {
    event.preventDefault()

    let countError = 0;

    if (title.trim().length < 3) {
      toast("O presente precisa ter um título.", {
        type: 'error',
        theme: 'colored'
      })

      countError++
    }

    if (!price) {
      toast("O presente precisa ter um valor.", {
        type: 'error',
        theme: 'colored'
      })

      countError++
    }

    if (countError > 0) {
      return
    }

    try {
      await api.post('/gift/create', {
        title,
        price,
        description,
        imageBase64
      })

      toast("Seu presente foi adicionado a lista!", {
        type: 'success',
        theme: 'colored',
        icon: '🎁'
      })
  
      setTitle("")
      setPrice("")
      setDescription("")

    } catch (_) {
      toast("Ops, algum erro ocorreu no servidor.", {
        type: 'error',
        theme: 'colored'
      })

      toast("Tente novamente em alguns instantes.", {
        type: 'info',
        theme: 'colored'
      })
    }
  }

  return (
    <>
      <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="/" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-3 sm:col-span-1">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Título *
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <div className="col-span-3 sm:col-span-1">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Preço *
                      </label>
                      <input
                        type="number"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      Descrição
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder=""
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Uma breve descrição sobre o produto.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Imagem do produto</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Carregue um arquivo</span>
                            <input 
                              id="file-upload" 
                              name="file-upload" 
                              type="file" 
                              className="sr-only" 
                              onChange={handleSelectImage}
                            />
                          </label>
                          <p className="pl-1">ou arraste e solte</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF de até 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    
                    onClick={saveGift}
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </form>
            <ToastContainer />
          </div>
    </>
  )
}
