function Dashboard() {
  const thanksCount     = 10  //感謝
  const smileCount      = 20  //笑顔
  const stress          = 30  //ストレス
  const highTouchCount  = 40  //ハイタッチ

  const chartData = [
    { time: '09:00', stress: 35, smile: 45 },
    { time: '11:00', stress: 40, smile: 50 },
    { time: '13:00', stress: 70, smile: 25 },
    { time: '15:00', stress: 40, smile: 50 },
    { time: '17:00', stress: 25, smile: 65 },
    { time: '19:00', stress: 40, smile: 45 },
  ]

  //☆グラフの線を作る
  const makePoints = (key) => {
    const width = 600
    const height = 150

    return chartData
      .map((item, index) => {
        const x =
          (index / (chartData.length - 1)) * width

        const y =
          height - (item[key] / 100) * height

        return `${x},${y}`
      })
      .join(' ')
  }

  //画面
  return (
    <div className="dashboard">

      {/*上の四項目*/}
      <section className="stats">

        <div className="stat-card">
          <p className="stat-title">
            感謝送信数
          </p>

          <div className="stat-value">
            {thanksCount}
            <span> 件</span>
          </div>

          <p className="green-text">
            昨日より4件上昇
          </p>
        </div>


        <div className="stat-card">
          <p className="stat-title">
            笑顔回数
          </p>

          <div className="stat-value">
            {smileCount}
            <span> 回</span>
          </div>

          <p className="green-text">
            平均比100% 活性化
          </p>
        </div>


        <div className="stat-card">
          <p className="stat-title">
            現在のストレス度
          </p>

          <div className="stat-value red-text">
            {stress}
            <span> %</span>
          </div>

          <p className="small-text">
            安全域（穏やか）
          </p>
        </div>


        <div className="stat-card">
          <p className="stat-title">
            ハイタッチ回数
          </p>

          <div className="stat-value">
            {highTouchCount}
            <span> 回</span>
          </div>

          <p className="small-text">
            先週比 微増
          </p>
        </div>

      </section>


      {/* グラフ */}
      <section className="dashboard-grid">

        <div className="card chart-card">

          <h2>
            チーム感情の推移（本日）
          </h2>

          <div className="legend">
            <span className="stress-dot"></span>
            ストレス度

            <span className="smile-dot"></span>
            笑顔回数
          </div>

          <div className="chart">

            <div className="grid-line line1"></div>
            <div className="grid-line line2"></div>
            <div className="grid-line line3"></div>
            <div className="grid-line line4"></div>

            <svg
              viewBox="0 0 600 150"
              preserveAspectRatio="none"
            >
              {/* ストレス度の線 */}
              <polyline
                points={makePoints('stress')}
                fill="none"
                stroke="#ff746f"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* 笑顔回数の線 */}
              <polyline //<-複数の線をつなぐ
                points={makePoints('smile')}
                fill="none"
                stroke="#3498db"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="times">
              {chartData.map((item) => (
                <span key={item.time}>
                  {item.time}
                </span>
              ))}
            </div>

          </div>

        </div>

      </section>


      {/* 最近のアクティビティ */}
      <section className="card activity-card">

        <h2>
          最近のアクティビティ
        </h2>

        <div className="activity-item">

          <span className="time">
            11:00
          </span>

          <span className="badge red-badge">
            介入動作
          </span>

          <p>
            ストレス度の上昇を感知 → やさしい声で発話しました
          </p>

        </div>


        <div className="activity-item">

          <span className="time">
            14:45
          </span>

          <span className="badge green-badge">
            お辞儀動作
          </span>

          <p>
            笑顔と感謝発言を検知し、
            お辞儀とLED点滅を行いました
          </p>

        </div>


        <div className="activity-item">

          <span className="time">
            14:32
          </span>

          <span className="badge blue-badge">
            ハイタッチ
          </span>

          <p>
            頭部タッチセンサーへの接触を検知し、
            効果音を再生しました
          </p>

        </div>

      </section>

    </div>
  )
}

export default Dashboard