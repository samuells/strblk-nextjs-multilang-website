import SbEditable from 'storyblok-react'

const Feature = ({blok}) => (
  <SbEditable content="blok">
    <div className="util__flex">
      <h2>{blok.name}</h2>
    </div>
  </SbEditable>
)

export default Feature