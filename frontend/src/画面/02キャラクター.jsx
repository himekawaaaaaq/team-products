import { useState } from 'react'

function Character() {
  const [speaker, setSpeaker] = useState('春日部つむぎ')
  const [speed, setSpeed] = useState(1.0)
  const [pitch, setPitch] = useState(1.2)
  const [volume, setVolume] = useState(80)

  const speakers = [
    {
      name: 'ずんだもん',
    },
    {
      name: '春日部つむぎ',
    },
    {
      name: '四国めたん',
    },
  ]

  return (
    <div className="character-layout">

      {/* VOICEVOX 話者選択 */}
      <section className="setting-card">

        <div className="setting-title">
          <div className="setting-icon">🎧</div>

          <div>
            <h2>VOICEVOX 話者選択</h2>
            <p>Desk PALの声のベースとなる話者を選択します</p>
          </div>
        </div>

        <div className="speaker-list">
          {speakers.map((item) => (
            <button
              key={item.name}
              className={speaker === item.name ? 'speaker-item selected' : 'speaker-item'}
              onClick={() => setSpeaker(item.name)}
            >
              <div className="speaker-avatar">♪</div>

              <div className="speaker-info">
                <strong>{item.name}</strong>
                <span>{item.description}</span>
              </div>

              <div className="speaker-play">▶</div>

              {speaker === item.name && (
                <span className="selected-label">選択中</span>
              )}
            </button>
          ))}
        </div>

      </section>

      {/* 音声パラメータ */}
      <section className="setting-card">

        <div className="setting-title">
          <div className="setting-icon">☷</div>

          <div>
            <h2>音声パラメータ調整</h2>
            <p>VOICEVOXの音声パラメータを調整します</p>
          </div>
        </div>

        {/* 話速 */}
        <div className="voice-control">
          <div className="control-header">
            <div>
              <strong>話速（Speed）</strong>
              <p>発話の速さを調整します</p>
            </div>

            <span>{speed.toFixed(1)}x</span>
          </div>

          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
        </div>

        {/* 音高 */}
        <div className="voice-control">
          <div className="control-header">
            <div>
              <strong>音高（Pitch）</strong>
              <p>声の高さを調整します</p>
            </div>

            <span>{pitch.toFixed(1)}</span>
          </div>

          <input
            type="range"
            min="-1"
            max="2"
            step="0.1"
            value={pitch}
            onChange={(e) => setPitch(Number(e.target.value))}
          />
        </div>

        {/* 音量 */}
        <div className="voice-control">
          <div className="control-header">
            <div>
              <strong>音量（Volume）</strong>
              <p>再生する音声の音量を調整します</p>
            </div>

            <span>{volume}%</span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>

      </section>

    </div>
  )
}

export default Character