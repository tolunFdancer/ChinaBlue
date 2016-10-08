import * as types from './actionType';
import CourseApi from '../api/mockCourseApi';
import { beginAjaxCall, savingAjaxError } from './ajaxStatusActions';

export function loadCourseSuccess(courses) {
  //return { type: types.CREATE_COURSE, course};
  //return { type: 'CREATE_COURSE', course };
  return { type: types.LOAD_COURSE_SUCCESS, courses};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function loadCourse() {
  return function(dispatch) {
    dispatch(beginAjaxCall);
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCourseSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall);
    return CourseApi.saveCourse(course).then(saveCourse => {
      course.id ? dispatch(updateCourseSuccess(saveCourse)) : dispatch(createCourseSuccess(saveCourse));
    }).catch(error => {
      dispatch(savingAjaxError());
      throw(error);
    });
  };
}
