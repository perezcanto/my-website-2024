import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg  viewBox="0 0 446.9 438.1" fill='red' aria-hidden="true" {...props}>
      <g className={clsx(
        '  transition-all duration-300',
        invert ? 'fill-white' : 'fill-neutral-950',
      )} id="Forma_2_Capa_2_Relleno_de_color_3_Imagen">
        <g>
          <path
            className="st0 svg-elem-1"
            d="M216.9,408.6c-100,0-181.4-81.4-181.4-181.4S116.8,45.8,216.9,45.8s181.4,81.4,181.4,181.4
        S316.9,408.6,216.9,408.6L216.9,408.6z M216.9,69.3C129.8,69.3,59,140.2,59,227.2s70.8,157.9,157.9,157.9s157.9-70.8,157.9-157.9
        S303.9,69.3,216.9,69.3z"
          />
          <path
            className="st0 svg-elem-2"
            d="M205.3,77.8l20.5,60c0,0-110.5,95.9-124.5,171.6l-8.9-13C92.3,296.4,96.9,213.8,205.3,77.8L205.3,77.8z"
          />
          <polygon
            className="st0 svg-elem-3"
            points="194.7,0 252.2,42.3 302.1,225.4 274.4,237.4"
          />
          <polygon
            className="st0 svg-elem-4"
            points="296.7,302.3 320.8,291.4 353.4,396.4 347.9,438.1"
          />
          <path
            className="st0 svg-elem-5"
            d="M443.8,174.6c-34.9,61.7-129.2,104.7-184.2,129.9C203.2,330.2,88.2,373.9,19.3,357
        c-15.2-3.7-23.4-20.2-17.2-34.6c4.6-10.7,14.8-24.3,29.8-35.7l7.9,22.9c0,0-9.6,6.6-12.5,11.9c-1,1.9-0.1,3.8,3.2,4.2
        c31,3.7,113.2-11,213-53.7c99.5-43.4,151.2-85.5,169.8-110.6c2-2.6,1.2-4.6-0.8-5.2c-5.8-1.6-15.8-0.5-15.8-0.5l-7.4-21.6
        c18.6-3.1,30.6-1.2,41.1,4.3C444.2,145.6,451.5,161,443.8,174.6L443.8,174.6z"
          />
        </g>
      </g>
    </svg>
  )
}

export default function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div className='  flex items-center justify-center w-fit'>

      <svg
        aria-hidden="true"
        className={clsx('w-16 h-16 md:w-20 md:h-20', fillOnHover && 'group/logo', className)}
        {...props}
      >
        <Logomark
          preserveAspectRatio="xMinYMid meet"
          invert={invert}
          filled={filled}
        />
      </svg>
    
    </div>
  )
}
