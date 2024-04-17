const workoutService = require("../services/recordService");

const getRecordForWorkout = (workoutId) => {
    try {
      const record = workoutService.getRecordForWorkout(workoutId);
      return record;
    } catch (error) {
      throw error;
    }
  };
  module.exports = { getRecordForWorkout };