import { Outlet, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from '@/components/ScrollToTop'
import { SideNav, sideNavReservedWidthPx } from '@/components/SideNav'
import About from '@/pages/About'
import Home from '@/pages/Home'
import GlitchMerchandise from '@/pages/projects/GlitchMerchandise'
import GlitchShowHomepage from '@/pages/projects/GlitchShowHomepage'
import GlitchWebsite from '@/pages/projects/GlitchWebsite'
import HsbcDeceasedEstate from '@/pages/projects/HsbcDeceasedEstate'
import NontreRedesign from '@/pages/projects/NontreRedesign'

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
         <ScrollToTop />
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
               path="/projects/glitch-website"
               element={<GlitchWebsite />}
            />
            <Route
               path="/projects/glitch-show-homepage"
               element={<GlitchShowHomepage />}
            />
            <Route
               path="/projects/glitch-merchandise"
               element={<GlitchMerchandise />}
            />
            <Route
               path="/projects/hsbc-deceased-estate"
               element={<HsbcDeceasedEstate />}
            />
            <Route
               path="/projects/nontre-redesign"
               element={<NontreRedesign />}
            />
            <Route
               path="/projects/:slug"
               element={<StubPage title="Project detail" />}
            />
            <Route
               path="/personal-work"
               element={<StubPage title="Personal work" />}
            />
            <Route path="/about" element={<About />} />
         </Route>
      </Routes>
   )
}

export default App
