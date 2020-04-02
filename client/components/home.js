import React from 'react'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const Home = () => {
  return (
    <div className="container">
      <Link to="/jobs" style={{textDecoration: 'none'}}>
        <h2 className="sub">Welcome to Fetch!</h2>
      </Link>
      <h5 className="sub">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam...
      </h5>
      <div className="main-img">
        <Link to="/jobs">
          <img src="/img/fetch.png" />
        </Link>
      </div>
      <div />
    </div>
  )
}

export default Home
