import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from '@/components/Logo'

/** Floating menu width (px). */
export const sideNavWidthPx = 203
/** Floating menu height (px), excluding the logo stack above it. */
export const sideNavHeightPx = 206
/**
 * Horizontal space for main content on large screens: `left-6` gutter + panel + gap.
 * Keep in sync with `App.tsx` `lg:pl-[243px]`.
 */
export const sideNavReservedWidthPx = 24 + sideNavWidthPx + 16

export type SideNavProps = {
   className?: string
}

/** Distance from left edge to vertical spine (px). Tighter to nav copy = higher value. */
const SPINE_LEFT_PX = 26
/** Extend spine above the panel (through logo–nav gap and into the logo block). */
const SPINE_EXTEND_TOP_PX = 18
/** Extend spine slightly below the panel bottom. */
const SPINE_EXTEND_BOTTOM_PX = 6

const H_RULE_INSET_RIGHT_PX = 8

/** Spine + horizontal rules: same brown as text at higher opacity than before. */
const NAV_RULE_LINE = 'rgb(121 109 98 / 0.4)'

function NavRule() {
   return (
      <div
         className="pointer-events-none h-px shrink-0"
         style={{
            marginRight: H_RULE_INSET_RIGHT_PX,
            backgroundColor: NAV_RULE_LINE,
         }}
         aria-hidden={true}
      />
   )
}

const headingClass =
   'm-0 py-2 pl-[36px] pr-2 font-body text-[12px] font-medium uppercase leading-tight tracking-[0.12em] text-base/90'

const subLinkClass =
   'block py-1.5 pl-[56px] pr-2 font-body text-[11px] font-normal font-italic italic leading-snug text-base no-underline transition-colors hover:text-[#5c534a]'

const topLinkClass =
   'block py-2 pl-[36px] pr-2 font-body text-[12px] font-medium uppercase leading-tight tracking-[0.1em] text-base/90 no-underline transition-colors hover:text-[#5c534a]'

const activeSub = 'text-light-blue'
const activeTop = 'text-light-blue'

/**
 * Floating primary nav: compact ruled panel (203×206) plus logo, with mobile drawer.
 */
export function SideNav({ className = '' }: SideNavProps) {
   const [open, setOpen] = useState(false)

   useEffect(() => {
      if (!open) return
      const previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
         document.body.style.overflow = previousOverflow
      }
   }, [open])

   const close = () => setOpen(false)

   return (
      <>
         <button
            type="button"
            className="fixed left-4 top-4 z-80 flex h-11 w-11 items-center justify-center rounded-md border border-[rgb(121_109_98/0.2)] bg-background/95 text-[#796d62] shadow-sm backdrop-blur-sm lg:hidden"
            aria-expanded={open}
            aria-controls="side-nav-panel"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((v) => !v)}
         >
            {open ? <CloseIcon /> : <MenuIcon />}
         </button>

         {open ? (
            <button
               type="button"
               className="fixed inset-0 z-65 bg-black/35 lg:hidden"
               aria-label="Close navigation"
               onClick={close}
            />
         ) : null}

         <div
            className={`fixed left-4 top-16 z-70 flex w-[203px] flex-col gap-8 transition-transform duration-200 ease-out lg:left-6 lg:top-6 ${
               open ? 'translate-x-0' : 'translate-x-[-120%] lg:translate-x-0'
            } ${className}`.trim()}
         >
            <Link
               to="/"
               onClick={close}
               className="max-w-[203px] inline-block no-underline transition-opacity hover:opacity-90 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
               aria-label="Home"
            >
               <Logo className="origin-top-left scale-[0.82]" />
            </Link>

            <aside
               id="side-nav-panel"
               className="relative box-border flex h-[206px] w-[203px] shrink-0 flex-col rounded-md bg-background/98 backdrop-blur-sm"
            >
               <div
                  className="pointer-events-none absolute z-4 w-px"
                  style={{
                     left: SPINE_LEFT_PX,
                     top: -SPINE_EXTEND_TOP_PX,
                     bottom: -SPINE_EXTEND_BOTTOM_PX,
                     backgroundColor: NAV_RULE_LINE,
                  }}
                  aria-hidden={true}
               />

               <nav
                  className="relative z-1 flex h-full min-h-0 flex-col overflow-y-auto rounded-md"
                  aria-label="Site"
               >
                  <NavRule />

                  <div className="shrink-0">
                     <p className={headingClass}>PROJECTS</p>
                  </div>

                  <NavRule />

                  <ul className="m-0 flex min-h-0 list-none flex-col p-0">
                     <li>
                        <NavLink
                           to="/projects/ux-design"
                           end
                           onClick={close}
                           className={({ isActive }) =>
                              [subLinkClass, isActive ? activeSub : '']
                                 .filter(Boolean)
                                 .join(' ')
                           }
                        >
                           UX Design
                        </NavLink>
                     </li>
                     <li className="flex flex-col">
                        <NavRule />
                        <NavLink
                           to="/projects/merchandise-design"
                           onClick={close}
                           className={({ isActive }) =>
                              [subLinkClass, isActive ? activeSub : '']
                                 .filter(Boolean)
                                 .join(' ')
                           }
                        >
                           Merchandise Design
                        </NavLink>
                     </li>
                     <li className="flex flex-col">
                        <NavRule />
                        <NavLink
                           to="/projects/branding"
                           onClick={close}
                           className={({ isActive }) =>
                              [subLinkClass, isActive ? activeSub : '']
                                 .filter(Boolean)
                                 .join(' ')
                           }
                        >
                           Branding
                        </NavLink>
                     </li>
                  </ul>

                  <NavRule />

                  <NavLink
                     to="/personal-work"
                     end
                     onClick={close}
                     className={({ isActive }) =>
                        [topLinkClass, isActive ? activeTop : '']
                           .filter(Boolean)
                           .join(' ')
                     }
                  >
                     PERSONAL WORK
                  </NavLink>

                  <NavRule />

                  <NavLink
                     to="/about"
                     end
                     onClick={close}
                     className={({ isActive }) =>
                        [topLinkClass, isActive ? activeTop : '']
                           .filter(Boolean)
                           .join(' ')
                     }
                  >
                     ABOUT
                  </NavLink>

                  <NavRule />
               </nav>
            </aside>
         </div>
      </>
   )
}

function MenuIcon() {
   return (
      <svg
         width="22"
         height="22"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         aria-hidden={true}
      >
         <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
   )
}

function CloseIcon() {
   return (
      <svg
         width="22"
         height="22"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         aria-hidden={true}
      >
         <path d="M6 6l12 12M18 6L6 18" />
      </svg>
   )
}
