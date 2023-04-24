interface DestinoProps {
  aero: string
  horario: string
  destino: string
}

export function Destino({ aero, horario, destino }: DestinoProps) {
  return (
    <>
      <div className="flex flex-col items-end">
        <span className="text-sm tracking-tight opacity-60">{destino}</span>
        <span className="font-bold text-4xl opacity-80">{aero}</span>
        <span className="tracking-tight opacity-80">
          {horario}
          <sup className="text-[10px] font-medium">+1</sup>
        </span>
      </div>
    </>
  )
}
