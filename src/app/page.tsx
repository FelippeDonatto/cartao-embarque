import { BaseInfo } from '@/components/BaseInfo'
import { Destino } from '@/components/Destino'
import { Heading } from '@/components/Heading'
import Image from 'next/image'
import aviao from '/public/aviao.png'
import qrCode from '/public/qrCode.png'
import { Saida } from '@/components/Saida'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-screen">
      <Heading />

      <div className="bg-white py-6 px-8 rounded-3xl w-full max-w-[327px]">
        <div className="border-b-2 border-gray-400 border-dashed">
          <div className="flex justify-between items-center mb-6 ">
            <BaseInfo base="Voo" strong="RS995" direcao="start" />
            <BaseInfo base="Data" strong="23/05/2023" direcao="end" />
          </div>

          <div className="flex justify-between items-center gap-2 mb-6">
            <Saida saida="São Paulo, Brasil" aero="GRU" horario="17:00" />
            <div>
              <Image src={aviao} alt="" />
            </div>
            <Destino destino="São Francisco, EUA" aero="SFO" horario="04:48" />
          </div>
        </div>

        <div className="flex justify-between items-center py-6 border-b-2 border-gray-400 border-dashed">
          <BaseInfo base="Passageiro" strong="Rodrigo Terron" direcao="start" />
          <BaseInfo base="Assento" strong="28A" direcao="end" />
        </div>

        <div className="flex flex-col justify-center items-center pt-6 gap-6">
          <div className="flex w-full justify-between">
            <div className="flex flex-col justify-between w-[25%]">
              <div className="flex flex-col justify-between w-full">
                <span className="opacity-60 text-sm tracking-tight">
                  Embarque
                </span>
                <span className="font-medium tracking-tight bg-violet-500 py-1 px-2 w-[54px] rounded-lg text-white">
                  16:15
                </span>
              </div>
              <div className="flex flex-col">
                <span className="opacity-60 text-sm tracking-tight">
                  Terminal
                </span>
                <span className="opacity-80 font-medium tracking-tight">2</span>
              </div>
              <div className="flex flex-col">
                <span className="opacity-60 text-sm tracking-tight">
                  Portão
                </span>
                <span className="opacity-80 font-medium tracking-tight">
                  15
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <Image src={qrCode} alt="" quality={100} />
              <span className="text-sm w-full opacity-60 text-black text-center">
                Grupo de embarque: 3
              </span>
            </div>
          </div>

          <div>
            <h2 className='opacity-80 tracking-tight leading-3'>
              <strong>Atenção</strong>: o portão fecha 16:45
            </h2>
          </div>
        </div>
      </div>

      <p className="w-[300px] mt-5 text-white/70 text-sm text-center">
        Qualquer problema procure o balcão de atendimento da sua companhia aérea
      </p>
    </main>
  )
}
