const STAR_PATH =
   'M16.332 0L18.4704 9.21745L25.2526 2.61932L22.0682 11.5296L31.341 9.64565L23.8448 15.4198L32.6641 18.8482L23.2361 19.653L28.8019 27.3052L20.4355 22.8851L20.9806 32.3316L16.332 24.09L11.6834 32.3316L12.2286 22.8851L3.86216 27.3052L9.42793 19.653L-2.28882e-05 18.8482L8.81929 15.4198L1.3231 9.64565L10.5959 11.5296L7.41146 2.61932L14.1937 9.21745L16.332 0Z'

export type LogoProps = {
   className?: string
}

export function Logo({ className = '' }: LogoProps) {
   return (
      <div
         className={`inline-flex items-center gap-1.5 font-display text-logo text-brand-blue ${className}`.trim()}
      >
         <svg
            viewBox="0 0 33 33"
            className="size-[0.92em] shrink-0 fill-current"
            aria-hidden={true}
            xmlns="http://www.w3.org/2000/svg"
         >
            <path d={STAR_PATH} />
         </svg>
         <span className="leading-none">Latticha.L</span>
      </div>
   )
}
