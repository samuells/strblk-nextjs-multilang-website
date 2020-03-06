import Component from './index'

const Page = ({body}) => (
  <main>
    {body.map((blok) =>
      <Component blok={blok} />
    )}
  </main>
)

export default Page