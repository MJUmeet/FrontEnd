import Axios from '../axios';

export default {
  createUser(id, passwd, name) {
    return Axios({
      url: '/api/signup',
      method: 'post',
      data: {
        id,
        passwd,
        name,
      },
    });
  },

  login(id, passwd) {
    return Axios({
      url: 'api/login',
      method: 'post',
      data: {
        id,
        passwd,
      },
    });
  },

  createRoom(id, roomName, meetingTime) {
    return Axios({
      url: '/api/room',
      method: 'post',
      data: {
        id,
        roomName,
        meetingTime,
      },
    });
  },

  lookupRoom(id) {
    console.log(id);
    return Axios({
      url: 'api/rooms',
      method: 'post',
      data: {
        userId: id,
      },
    });
  },

  enrollMember(roomId, userId) {
    return Axios({
      url: 'api/room/user',
      method: 'post',
      data: {
        roomId,
        userId,
      },
    });
  },

  saveTimetable(
    userId,
    roomId,
    mondayTimetable,
    tuesdayTimetable,
    wednesdayTimetable,
    thursdayTimetable,
    fridayTimetable,
    saturdayTimetable,
    sundayTimetable,
  ) {
    return Axios({
      url: 'api/timetable',
      method: 'post',
      data: {
        userId,
        roomId,
        mondayTimetable,
        tuesdayTimetable,
        wednesdayTimetable,
        thursdayTimetable,
        fridayTimetable,
        saturdayTimetable,
        sundayTimetable,
      },
    });
  },
};
