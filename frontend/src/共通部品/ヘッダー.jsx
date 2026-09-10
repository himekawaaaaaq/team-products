import { useEffect, useState } from 'react'

function Header({ currentPage }) {
  const [now, setNow] = useState(new Date())
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const dateText = now.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  })

  const timeText = now.toLocaleTimeString('ja-JP', {
  hour: '2-digit',
  minute: '2-digit',
})

  const pageInfo = {
    dashboard: {
      title: 'ダッシュボード',
      description: 'チームの空気感とDesk PALの稼働状況を確認します',
    },

    character: {
      title: 'キャラクター・音声設定',
      description: 'Desk PALの音声をカスタマイズします',
    },
  }

  const page = pageInfo[currentPage] || pageInfo.dashboard

  return (
    <header className="header">

      <div className="header-title">
        <h1>{page.title}</h1>
        <p>{page.description}</p>
      </div>

      <div className="header-right">

        <div className="current-time">
          <span>{dateText}</span>
          <strong>{timeText}</strong>
        </div>

        <button
          className={
            isOnline
              ? 'status status-online'
              : 'status status-offline'
          }
          onClick={() => setIsOnline(!isOnline)}
        >
          <span
            className={
              isOnline
                ? 'online-dot'
                : 'offline-dot'
            }
          ></span>

          {isOnline ? 'オンライン' : 'オフライン'}
        </button>

      </div>

    </header>
  )
}

export default Header