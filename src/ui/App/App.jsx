import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

// User
// import Breakpoints from 'ui/ui-elements/Breakpoints'
import withRoot from 'ui/withRoot'
import Two from 'ui/Two'

const App = ({ classes }) => {

  return (
    <div className={classes.app}>
      <Two />
    </div>
  )

}

const styles = theme => ({
  app: {
    // padding: 100,
    backgroundColor: 'rgba(25, 25, 25)',
    height: '100vh',
    paddingTop: 50,
    paddingRight: '15%',
    paddingLeft: '15%',
  },

})



export default compose(
  withStyles(styles),
  withRoot
)(App)



