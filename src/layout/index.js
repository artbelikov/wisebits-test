import React from 'react'
import './style.scss'
import PageTitle from 'components/page-title/PageTitle.component.js'
import Board from 'components/board/Board.component.js'

/**
 * Just a basic layout
 * @returns {*}
 * @constructor
 */
export const Layout = () => {
  return (
    <div className="layout layout-center">
      <header>
        <PageTitle/>
      </header>
      <main>
        <Board/>
      </main>
    </div>
  )
}
