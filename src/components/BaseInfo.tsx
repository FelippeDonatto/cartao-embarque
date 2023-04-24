import clsx from 'clsx'

interface BaseInfoProps {
  base: string
  strong: string
  direcao: 'start' | 'end'
}

export function BaseInfo({ base, strong, direcao = 'start' }: BaseInfoProps) {
  return (
    <div className="flex flex-col">
      <span
        className={clsx('opacity-60 text-sm font-normal tracking-tight', {
          'flex justify-start': direcao === 'start',
          'flex justify-end': direcao === 'end'
        })}
      >
        {base}
      </span>
      <span
        className={clsx(
          'opacity-80 font-medium text-base tracking-tight flex justify-end'
        )}
      >
        {strong}
      </span>
    </div>
  )
}
