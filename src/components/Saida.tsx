interface SaidaProps {
  saida: string
  aero: string
  horario: string
}

export function Saida({ saida, aero, horario }: SaidaProps) {
  return (
    <>
      <div className="flex flex-col items-start">
        <span className="text-sm tracking-tight opacity-60">{saida}</span>
        <span className="font-bold text-4xl opacity-80">{aero}</span>
        <span className="tracking-tight opacity-80">{horario}</span>
      </div>
    </>
  )
}
