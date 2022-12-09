import React from 'react'
import ScheduleSelector from 'react-schedule-selector'
import styles from './timeTable.module.scss'

class TimeTable extends React.Component {
  state = { schedule : [] }
 
  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
  }
 
  render() {
    return (
      <div className={styles.wrapper}>
      <ScheduleSelector
        selection={this.state.schedule}
        numDays={7}
        minTime={8}
        maxTime={22}
        timeFormat={"hh:mm A"}
        dateFormat={"ddd"}
        hourlyChunks={2}
        onChange={this.handleChange}
        unselectedColor={'#d9d9d9'}
        selectedColor={'#36454F'}
        hoveredColor={'#90CFC9'}
        Color={'#000000'}
        />
        </div>
    )
  }
}


export default TimeTable;