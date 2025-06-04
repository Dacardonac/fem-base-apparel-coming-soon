import Card from './components/card/Card'
import s from './App.module.scss'

function App() {

  return (
    <section className={s.section}>
      <Card /*title="We're coming soon"*/
            paragraph="Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals."/>
    </section>
  )
}

export default App
