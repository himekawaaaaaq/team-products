import { useState } from 'react'
import './App.css'

import Sidebar from './共通部品/サイドメニュー'
import Header from './共通部品/ヘッダー'
import Dashboard from './画面/01ダッシュボード'
import Character from './画面/02キャラクター'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  return (
    <div className="app">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="main-content">
        <Header currentPage={currentPage} />

        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'character' && <Character />}
      </main>
    </div>
  )
}

export default App