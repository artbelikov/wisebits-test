import React from 'react'
import './style.scss'
import PageTitle from 'components/page-title/PageTitle.component'
import Board from 'components/board/Board.component'
import Toolbar from 'components/toolbar/Toolbar.component'

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
        <Toolbar/>
        <Board/>
      </main>
    </div>
  )
}
