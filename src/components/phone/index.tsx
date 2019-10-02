import React from 'react'

import './index.css'

function Phone({ children }: any): JSX.Element {
  return (
    <div className="phone-container">
      <div className="phone-case">
        <div className="speaker"></div>
        <div className="screen">
          {children}
        </div>
        <div className="buttons-container">
          <button onClick={() => alert("THIS WEB WAS MADE BY @fadilnatakusumah")}></button>
        </div>
      </div>
    </div>
  )
}

export default Phone