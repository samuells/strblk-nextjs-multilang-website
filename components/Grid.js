import React from 'react'
import Component from './index'
import SbEditable from 'storyblok-react'

const Grid = ({blok}) => (
  <SbEditable content="props.content">
    <div className="util__flex">
      {blok.columns.map((blok) =>
        <Component blok={blok} />
      )}
    </div>
  </SbEditable>
)

export default Grid