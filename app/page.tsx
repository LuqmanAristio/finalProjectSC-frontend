import Navigation from './component/Navigation'
import Main from './component/Main'

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen h-screen flex-col items-center relative">
      <Navigation></Navigation>
      <Main></Main>
    </main>
  )
}
