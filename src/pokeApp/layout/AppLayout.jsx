import Header from "../components/header/Header";

export default function AppLayout({ children }) {

  return (
    <>
      <Header />
      <main className="main">
        { children }
      </main>
    </>
  )
}
