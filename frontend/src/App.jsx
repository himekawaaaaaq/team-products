import './App.css'

import Sidebar from './共通部品/サイドメニュー'
import Header from './共通部品/ヘッダー'
import Dashboard from './画面/01ダッシュボード'

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Header />
        <Dashboard />
      </main>
    </div>
  )
}

export default App