import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  withStyles
} from 'material-ui'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import BasicConfigurator from './basic-configurator.jsx'
import AdvancedConfigurator from './advanced-configurator.jsx'

const styles = {
  root: {
  }
}

const Configurator = ({ classes }) => (
  <div className={classes.root}>
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography type='subheading'>Basic Configuration</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <BasicConfigurator />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography type='subheading'>Advanced Configuration</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <AdvancedConfigurator />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
)

export default withStyles(styles)(Configurator)
