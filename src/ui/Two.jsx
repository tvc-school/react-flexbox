import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Paper,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  TextField,
} from '@material-ui/core'

// User

const directionOptions = ['row', 'column']
const justifyOptions = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']
const alignItemsOptions = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline']
const alignContentOptions = ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around']
const wrapOptions = ['wrap', 'nowrap']

class Two extends React.Component {
  state = {
    numItems: 2,
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    wrap: 'nowrap'
  }

  handleChange = (e) => {
    console.log('target.name', e.target.name)
    console.log('target.value', e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  flexItems = (classes) => {
    let items = []
    for (let i=0; i < this.state.numItems; i++) {
      items.push(<Paper square className={classes.itemPaper}>Item {i + 1}</Paper>)
    }
    return items
  }

  render() {
    const { alignItems, alignContent, direction, justifyContent, numItems, wrap } = this.state

    const { classes } = this.props

    const style = {
      flexFlow: `${direction} ${wrap}`,
      justifyContent,
      alignItems,
      alignContent,
    }

    return (
      <div className={classes.two}>
        <Paper className={classes.container} style={style}>
          {this.flexItems(classes)}
          {/* <Paper square className={classes.paper}>Item One</Paper>
          <Paper square className={classes.paper}>Item Two</Paper> */}
        </Paper>
        <Paper className={classes.controls} elevation={0}>
          <div className={classes.numItems}>
            <div>
              <TextField
                id="numItems"
                name='numItems'
                label="Number of items"
                value={numItems}
                onChange={this.handleChange}
                type="number"
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                className={classes.numItemsTextField}
              />
            </div>
            <div>
              <FormControl component="fieldset">
                <FormLabel component="legend">wrap</FormLabel>
                <RadioGroup
                  row
                  name="wrap"
                  aria-label="wrap"
                  className={classes.group}
                  value={wrap}
                  onChange={this.handleChange}
                >
                  {
                    wrapOptions.map(o => (
                      <FormControlLabel
                        value={o}
                        control={<Radio color='primary' />}
                        label={o}
                      />
                    ))
                  }
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">direction</FormLabel>
              <RadioGroup
                row
                name="direction"
                aria-label="direction"
                className={classes.group}
                value={direction}
                onChange={this.handleChange}
              >
                {
                  directionOptions.map(o => (
                    <FormControlLabel
                      value={o}
                      control={<Radio color='primary' />}
                      label={o}
                    />
                  ))
                }
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">justify</FormLabel>
              <RadioGroup
                row
                name="justifyContent"
                aria-label="justifyContent"
                className={classes.group}
                value={justifyContent}
                onChange={this.handleChange}
              >
              {
                justifyOptions.map(o => (
                  <FormControlLabel
                    value={o}
                    control={<Radio color='primary' />}
                    label={o}
                  />
                ))
              }

              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">alignItems</FormLabel>
              <RadioGroup
                row
                name="alignItems"
                aria-label="alignItems"
                className={classes.group}
                value={alignItems}
                onChange={this.handleChange}
              >
              {
                alignItemsOptions.map(o => (
                  <FormControlLabel
                    value={o}
                    control={<Radio color='primary' />}
                    label={o}
                  />
                ))
              }

              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">alignContent</FormLabel>
              <RadioGroup
                row
                name="alignContent"
                aria-label="alignContent"
                className={classes.group}
                value={alignContent}
                onChange={this.handleChange}
              >
              {
                alignContentOptions.map(o => (
                  <FormControlLabel
                    value={o}
                    control={<Radio color='primary' />}
                    label={o}
                  />
                ))
              }

              </RadioGroup>
            </FormControl>
          </div>
        </Paper>
      </div>

    )
  }


}

const styles = theme => ({
  two: {
    backgroundColor: 'rgb(100, 100, 100)',
    height: '70%',
    padding: theme.spacing.unit * 2,
  },
  itemPaper: {
    margin: theme.spacing.unit,
    padding: 3,
  },
  container: {
    backgroundColor: 'rgb(150, 150, 150)',
    height: '30%',
    display: 'flex',
  },
  controls: {
    height: '70%',
    marginTop: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit * 3,
    paddingBottm: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
  },
  numItems: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing.unit * 3,
  },
  numItemsTextField: {
    marginRight: 100
  },
})



export default withStyles(styles)(Two)



