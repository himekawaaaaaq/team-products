function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo-area">

        <div className="logo-icon">
          ☺
        </div>

        <div>
          <h2>Desk PAL</h2>
          <p>PC COMPANION</p>
        </div>

      </div>


      <nav className="menu">

        <button className="menu-item active">
          ▦ ダッシュボード
        </button>

        <button className="menu-item">
          ♙ キャラクター・音声
        </button>

        <button className="menu-item">
          ☷ センサー・動作感度
        </button>

        <button className="menu-item">
          ⚙ システム・環境連携
        </button>

      </nav>


      <div className="device-card">

        <div className="device-name">
          <span className="online-dot"></span>
          Desk PAL #0023
        </div>

        <p>
          バッテリー 84%（給電中）
        </p>

        <p>
          Wi-Fi DESKPAL-HOME-5G
        </p>

      </div>

    </aside>
  )
}

export default Sidebar