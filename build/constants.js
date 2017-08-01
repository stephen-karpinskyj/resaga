'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var STORE = exports.STORE = 'store';
var SERVER_ERROR = exports.SERVER_ERROR = 'serverError';
var SUBMIT_SUCCESS = exports.SUBMIT_SUCCESS = 'isSubmitSuccess';
var RESULT = exports.RESULT = 'serverResponse';
var DO_SUBMIT = exports.DO_SUBMIT = 'REDUX_DISPATCH';
var SUBMIT_FAILED = exports.SUBMIT_FAILED = 'SAGA_FAILED';
var SUBMIT_SUCCEED = exports.SUBMIT_SUCCEED = 'SAGA_SUCCEED';
var SUBMIT_ACKED = exports.SUBMIT_ACKED = 'REDUX_ACKNOWLEDGE';
var HOC_CLEAR = exports.HOC_CLEAR = 'REDUX_CLEAN_UP';

var VARIABLES = exports.VARIABLES = 'reduxVariables';
var GET_VARIABLES = exports.GET_VARIABLES = 'getVariables';
var SET_VARIABLE = exports.SET_VARIABLE = 'setVariable';
var SET_VARIABLE_FN = exports.SET_VARIABLE_FN = 'setVariableFn';
var REDUX_SET = exports.REDUX_SET = 'REDUX_SET';
var REDUX_SET_FN = exports.REDUX_SET_FN = 'REDUX_SET_FN';

var SEPARATOR = exports.SEPARATOR = '__';

exports.default = {
  STORE: STORE,
  SERVER_ERROR: SERVER_ERROR,
  SUBMIT_SUCCESS: SUBMIT_SUCCESS,
  RESULT: RESULT,
  DO_SUBMIT: DO_SUBMIT,
  SUBMIT_FAILED: SUBMIT_FAILED,
  SUBMIT_SUCCEED: SUBMIT_SUCCEED,
  SUBMIT_ACKED: SUBMIT_ACKED,
  HOC_CLEAR: HOC_CLEAR,
  VARIABLES: VARIABLES,
  GET_VARIABLES: GET_VARIABLES,
  SET_VARIABLE: SET_VARIABLE,
  SET_VARIABLE_FN: SET_VARIABLE_FN,
  REDUX_SET: REDUX_SET,
  REDUX_SET_FN: REDUX_SET_FN
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiU1RPUkUiLCJTRVJWRVJfRVJST1IiLCJTVUJNSVRfU1VDQ0VTUyIsIlJFU1VMVCIsIkRPX1NVQk1JVCIsIlNVQk1JVF9GQUlMRUQiLCJTVUJNSVRfU1VDQ0VFRCIsIlNVQk1JVF9BQ0tFRCIsIkhPQ19DTEVBUiIsIlZBUklBQkxFUyIsIkdFVF9WQVJJQUJMRVMiLCJTRVRfVkFSSUFCTEUiLCJTRVRfVkFSSUFCTEVfRk4iLCJSRURVWF9TRVQiLCJSRURVWF9TRVRfRk4iLCJTRVBBUkFUT1IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsd0JBQVEsT0FBZDtBQUNBLElBQU1DLHNDQUFlLGFBQXJCO0FBQ0EsSUFBTUMsMENBQWlCLGlCQUF2QjtBQUNBLElBQU1DLDBCQUFTLGdCQUFmO0FBQ0EsSUFBTUMsZ0NBQVksZ0JBQWxCO0FBQ0EsSUFBTUMsd0NBQWdCLGFBQXRCO0FBQ0EsSUFBTUMsMENBQWlCLGNBQXZCO0FBQ0EsSUFBTUMsc0NBQWUsbUJBQXJCO0FBQ0EsSUFBTUMsZ0NBQVksZ0JBQWxCOztBQUVBLElBQU1DLGdDQUFZLGdCQUFsQjtBQUNBLElBQU1DLHdDQUFnQixjQUF0QjtBQUNBLElBQU1DLHNDQUFlLGFBQXJCO0FBQ0EsSUFBTUMsNENBQWtCLGVBQXhCO0FBQ0EsSUFBTUMsZ0NBQVksV0FBbEI7QUFDQSxJQUFNQyxzQ0FBZSxjQUFyQjs7QUFFQSxJQUFNQyxnQ0FBWSxJQUFsQjs7a0JBRVE7QUFDYmYsY0FEYTtBQUViQyw0QkFGYTtBQUdiQyxnQ0FIYTtBQUliQyxnQkFKYTtBQUtiQyxzQkFMYTtBQU1iQyw4QkFOYTtBQU9iQyxnQ0FQYTtBQVFiQyw0QkFSYTtBQVNiQyxzQkFUYTtBQVViQyxzQkFWYTtBQVdiQyw4QkFYYTtBQVliQyw0QkFaYTtBQWFiQyxrQ0FiYTtBQWNiQyxzQkFkYTtBQWViQztBQWZhLEMiLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNUT1JFID0gJ3N0b3JlJztcbmV4cG9ydCBjb25zdCBTRVJWRVJfRVJST1IgPSAnc2VydmVyRXJyb3InO1xuZXhwb3J0IGNvbnN0IFNVQk1JVF9TVUNDRVNTID0gJ2lzU3VibWl0U3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVTVUxUID0gJ3NlcnZlclJlc3BvbnNlJztcbmV4cG9ydCBjb25zdCBET19TVUJNSVQgPSAnUkVEVVhfRElTUEFUQ0gnO1xuZXhwb3J0IGNvbnN0IFNVQk1JVF9GQUlMRUQgPSAnU0FHQV9GQUlMRUQnO1xuZXhwb3J0IGNvbnN0IFNVQk1JVF9TVUNDRUVEID0gJ1NBR0FfU1VDQ0VFRCc7XG5leHBvcnQgY29uc3QgU1VCTUlUX0FDS0VEID0gJ1JFRFVYX0FDS05PV0xFREdFJztcbmV4cG9ydCBjb25zdCBIT0NfQ0xFQVIgPSAnUkVEVVhfQ0xFQU5fVVAnO1xuXG5leHBvcnQgY29uc3QgVkFSSUFCTEVTID0gJ3JlZHV4VmFyaWFibGVzJztcbmV4cG9ydCBjb25zdCBHRVRfVkFSSUFCTEVTID0gJ2dldFZhcmlhYmxlcyc7XG5leHBvcnQgY29uc3QgU0VUX1ZBUklBQkxFID0gJ3NldFZhcmlhYmxlJztcbmV4cG9ydCBjb25zdCBTRVRfVkFSSUFCTEVfRk4gPSAnc2V0VmFyaWFibGVGbic7XG5leHBvcnQgY29uc3QgUkVEVVhfU0VUID0gJ1JFRFVYX1NFVCc7XG5leHBvcnQgY29uc3QgUkVEVVhfU0VUX0ZOID0gJ1JFRFVYX1NFVF9GTic7XG5cbmV4cG9ydCBjb25zdCBTRVBBUkFUT1IgPSAnX18nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFNUT1JFLFxuICBTRVJWRVJfRVJST1IsXG4gIFNVQk1JVF9TVUNDRVNTLFxuICBSRVNVTFQsXG4gIERPX1NVQk1JVCxcbiAgU1VCTUlUX0ZBSUxFRCxcbiAgU1VCTUlUX1NVQ0NFRUQsXG4gIFNVQk1JVF9BQ0tFRCxcbiAgSE9DX0NMRUFSLFxuICBWQVJJQUJMRVMsXG4gIEdFVF9WQVJJQUJMRVMsXG4gIFNFVF9WQVJJQUJMRSxcbiAgU0VUX1ZBUklBQkxFX0ZOLFxuICBSRURVWF9TRVQsXG4gIFJFRFVYX1NFVF9GTixcbn07XG4iXX0=