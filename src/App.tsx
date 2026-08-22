import { Outlet, Route, Routes } from 'react-router-dom'
import { SideNav, sideNavReservedWidthPx } from '@/components/SideNav'
import Home from '@/pages/Home'

/** Temporary route body until real pages exist. */
function StubPage({ title }: { title: string }) {
   return (
      <main className="min-h-dvh bg-background p-8 font-body text-card-body text-base">
         {title} (stub)
      </main>
   )
}

/**
 * Shell: floating `SideNav` + main column.
 * Main horizontal inset uses `--app-nav-reserve` from `sideNavReservedWidthPx`.
 */
function AppLayout() {
   return (
      <div className="min-h-dvh bg-background">
         <SideNav />
         <div
            className="min-h-dvh pt-16 lg:pt-0"
            style={
               {
                  ['--app-nav-reserve' as string]: `${sideNavReservedWidthPx}px`,
               } as Record<string, string>
            }
         >
            <div className="min-h-dvh lg:pl-(--app-nav-reserve)">
               <Outlet />
            </div>
         </div>
      </div>
   )
}

/** Application root: primary layout and client routes. */
function App() {
   return (
      <Routes>
         <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route
               path="/projects/:slug"
               element={<StubPage title="Project detail" />}
            />
            <Route
               path="/personal-work"
               element={<StubPage title="Personal work" />}
            />
            <Route path="/about" element={<StubPage title="About" />} />
         </Route>
      </Routes>
   )
}

export default App
