import React from 'react'

import style from '../../styles/Settings.module.css'

function GithubSetting({ isConnected }: { isConnected: boolean }) {
  return (
    <div style={{ position: 'relative' }}>
      {!isConnected && <div className={style.Wrapper}>깃허브와 연결해 주세요.</div>}
      <p>Gihub</p>
      <div>
        <label htmlFor="T-blog">블로그 선택</label>
        <input id="T-blog" type="text" />
      </div>
      <div>
        <label htmlFor="T-visibility">공개여부</label>
        <input id="T-visibility" type="text" />
      </div>
      <div>
        <label htmlFor="T-category">카테고리</label>
        <input id="T-category" type="text" />
      </div>
    </div>
  )
}

export default GithubSetting