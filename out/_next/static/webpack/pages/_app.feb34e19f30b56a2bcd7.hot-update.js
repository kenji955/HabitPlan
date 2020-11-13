webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/modules/tasksModule.tsx":
/*!*************************************!*\
  !*** ./src/modules/tasksModule.tsx ***!
  \*************************************/
/*! exports provided: init, Register, allDelete, taskCheckComplete, calendarPatternRegister, taskDetailRegister, taskRegister, taskPatternUpdate, taskDelete, taskRemovePattern, patternRegister, patternDelete, patternNameEdit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allDelete", function() { return allDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskCheckComplete", function() { return taskCheckComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarPatternRegister", function() { return calendarPatternRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskDetailRegister", function() { return taskDetailRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskRegister", function() { return taskRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskPatternUpdate", function() { return taskPatternUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskDelete", function() { return taskDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskRemovePattern", function() { return taskRemovePattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternRegister", function() { return patternRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternDelete", function() { return patternDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternNameEdit", function() { return patternNameEdit; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");


var _detail, _detail2, _detail3, _detail4, _ref, _detail5, _detail6, _detail7, _detail8;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  userTaskInfo: {
    calendar: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, new Date("Thu, 22 Oct 2020 02:00:00").getFullYear(), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, new Date("Thu, 22 Oct 2020 02:00:00").getMonth() + 1, (_ref = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, new Date("Thu, 22 Oct 2020 02:00:00").getDate(), {
      PatternId: 1,
      tasks: [{
        order: 1,
        detail: (_detail = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail, "タスク名", "タスク名 22 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail, "testDetail1", "testDetail1 22 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail, "testDetail2", "testDetail1 22 1"), _detail),
        flug: false
      }, {
        order: 2,
        detail: (_detail2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail2, "タスク名", "タスク名 22 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail2, "testDetail1", "testDetail1 22 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail2, "testDetail2", "testDetail1 22 2"), _detail2),
        flug: false
      }]
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, new Date("Thu, 23 Oct 2020 02:00:00").getDate(), {
      PatternId: 1,
      tasks: [{
        order: 1,
        detail: (_detail3 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail3, "タスク名", "タスク名 23 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail3, "testDetail1", "testDetail1 23 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail3, "testDetail2", "testDetail1 23 1"), _detail3),
        flug: false
      }, {
        order: 2,
        detail: (_detail4 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail4, "タスク名", "タスク名 23 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail4, "testDetail1", "testDetail1 23 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail4, "testDetail2", "testDetail1 23 2"), _detail4),
        flug: false
      }]
    }), _ref))),
    pattern: [{
      patternId: 1,
      patternName: "testPattern1"
    }, {
      patternId: 2,
      patternName: "testPattern2"
    }],
    tasks: [{
      detail: (_detail5 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail5, "タスク名", "タスク名 22 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail5, "defalut", "defalut"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail5, "testDetail1", "testDetail1 22 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail5, "testDetail2", "testDetail1 22 1"), _detail5),
      patternInfo: [{
        patternID: 1,
        order: 1
      }]
    }, {
      detail: (_detail6 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail6, "タスク名", "タスク名 22 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail6, "defalut", "defalut"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail6, "testDetail1", "testDetail1 22 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail6, "testDetail2", "testDetail1 22 2"), _detail6),
      patternInfo: [{
        patternID: 1,
        order: 2
      }]
    }, {
      detail: (_detail7 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail7, "タスク名", "タスク名 23 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail7, "defalut", "defalut"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail7, "testDetail1", "testDetail1 23 1"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail7, "testDetail2", "testDetail1 23 1"), _detail7),
      patternInfo: [{
        patternID: 2,
        order: 1
      }, {
        patternID: 1,
        order: 3
      }]
    }, {
      detail: (_detail8 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail8, "タスク名", "タスク名 23 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail8, "defalut", "defalut"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail8, "testDetail2", "testDetail1 23 2"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_detail8, "testDetail1", "testDetail1 23 2"), _detail8),
      patternInfo: [{
        patternID: 2,
        order: 2
      }]
    }]
  }
}; // const diff = (olds: any[], nexts: any[]) => ({
//     adds: nexts.filter((e) => !olds.includes(e)),
//     subs: olds.filter((e) => !nexts.includes(e)),
// });
// パターン更新時に未来に設定されているパターンの内容を更新する。
// 更新対象はstate.calendar.tasks
// 年月日が未来であり、かつ、パターンIDが同じものを対象に新しいパターンを登録する。

var futurePatternUpdate = function futurePatternUpdate(state, updatePatternId) {
  console.log("====futurePatternUpdateここから====");
  console.log(Object.keys(state.userTaskInfo.calendar));
  var today = new Date();
  var nowYear = today.getFullYear();
  var nowMonth = today.getMonth() + 1;
  var nowDate = today.getDate();
  var choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
    return task.patternInfo.some(function (task) {
      return task.patternID == updatePatternId;
    });
  }); // パターンIDに紐付くタスク一覧からカレンダーへの登録情報を抽出する。

  var updateTasks = choicePatternTasks.map(function (task) {
    // パターンが複数登録されているタスクへの対応として、選択されているパターンIDに該当する要素だけを抽出する。
    var taskPattern = task.patternInfo.filter(function (patternInfo) {
      return patternInfo.patternID == updatePatternId;
    }); // 配列のタスクと抽出したパターン情報を整形して返す。

    return {
      order: taskPattern[0].order,
      detail: task.detail,
      // detail2: task.detail2,
      flug: false
    };
  });

  var keyMonthList = function keyMonthList(keyYear) {
    return Object.keys(state.userTaskInfo.calendar[parseInt(keyYear)]);
  };

  var keyDateList = function keyDateList(keyYear, keyMonth) {
    return Object.keys(state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)]);
  };

  var dateTaskUpdate = function dateTaskUpdate(keyYear, keyMonth, keyDate) {
    if (state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].PatternId == updatePatternId) {
      state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].tasks = updateTasks;
      console.log("===dateTaskUpdate===");
      console.log(keyYear);
      console.log(keyMonth);
      console.log(keyDate);
      console.log(updateTasks);
    }
  };

  var diff = function diff(olds, nexts) {
    return {
      adds: nexts.filter(function (e) {
        return !olds.includes(e);
      }),
      subs: olds.filter(function (e) {
        return !nexts.includes(e);
      })
    };
  }; // 登録されている年の連想配列のキーを全て取得


  var keyYears = Object.keys(state.userTaskInfo.calendar);
  keyYears.map(function (keyYear) {
    if (parseInt(keyYear) == nowYear) {
      // もし今年だったら、の処理
      // 登録されている月の連想配列のキーを全て取得
      var keyMonths = keyMonthList(keyYear);
      keyMonths.map(function (keyMonth) {
        if (parseInt(keyMonth) == nowMonth) {
          // もし今月だったら
          // 登録されている日の連想配列のキーを全て取得
          var keyDates = keyDateList(keyYear, keyMonth);
          keyDates.map(function (keyDate) {
            if (parseInt(keyDate) > nowDate) {
              // もし明日以降だったら登録内容を更新する
              dateTaskUpdate(keyYear, keyMonth, keyDate);
            } else if (parseInt(keyDate) == nowDate) {
              // もし今日だったら、変更分だけ反映する。
              // 処理未作成
              var result = diff(state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].tasks, updateTasks);
              var updateArray = state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].tasks.filter(function (task) {
                return result.subs.some(function (sub) {
                  return sub != task;
                });
              });
              result.adds.map(function (add) {
                updateArray.push(add);
              });
              state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].tasks = updateArray;
            }
          });
        } else if (parseInt(keyMonth) > nowMonth) {
          // もし来月以降だったら、すべて更新する。
          var _keyDates = keyDateList(keyYear, keyMonth);

          _keyDates.map(function (keyDate) {
            dateTaskUpdate(keyYear, keyMonth, keyDate);
          });
        }
      });
    } else if (parseInt(keyYear) > nowYear) {
      // もし来年以降だったら、の処理。全て更新する。
      var _keyMonths = keyMonthList(keyYear);

      _keyMonths.map(function (keyMonth) {
        var keyDates = keyDateList(keyYear, keyMonth);
        keyDates.map(function (keyDate) {
          dateTaskUpdate(keyYear, keyMonth, keyDate);
        });
      });
    }
  });
  console.log("====futurePatternUpdateここまで====");
};

var tasksModule = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSlice"])({
  name: "tasks",
  initialState: initialState,
  reducers: {
    init: function init(state, action) {
      var data = action.payload;
      console.log("init data");
      console.log(data); // state = {...data};
      // console.log("init state.userTaskInfo 前");
      // console.log(state.userTaskInfo);

      state.userTaskInfo = data; // console.log("init state.userTaskInfo 後");
      // console.log(state.userTaskInfo);
    },
    Register: function Register(state, action) {
      var data = action.payload;
      state = _objectSpread(_objectSpread({}, state), data); // console.log('state');
      // console.log(state);
    },
    allDelete: function allDelete(state) {
      state = initialState;
      console.log("check allDelete");
    },
    // DayPlanにてタスクをクリックした際に完了フラグをtrueに変更する処理。引数にて年、月、日、タスクのインデックス番号を受け取っている。
    taskCheckComplete: function taskCheckComplete(state, action) {
      var index = state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks.findIndex(function (tasks) {
        return tasks.order == action.payload[3];
      });
      console.log(index);
      state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[index].flug = !state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]].tasks[index].flug;
    },
    // 引数はstateと年、月、日、選択されているパターンIDの4つの数値が格納された配列
    calendarPatternRegister: function calendarPatternRegister(state, action) {
      // stateから選択されているパターンIDが設定されているタスクを抽出する。
      var choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
        return task.patternInfo.some(function (task) {
          return task.patternID == action.payload[3];
        });
      }); // パターンIDに紐付くタスク一覧からカレンダーへの登録情報を抽出する。

      var TodayTasks = choicePatternTasks.map(function (task) {
        // パターンが複数登録されているタスクへの対応として、選択されているパターンIDに該当する要素だけを抽出する。
        var taskPattern = task.patternInfo.filter(function (patternInfo) {
          return patternInfo.patternID == action.payload[3];
        }); // 配列のタスクと抽出したパターン情報を整形して返す。

        return {
          order: taskPattern[0].order,
          detail: task.detail,
          // detail2: task.detail2,
          flug: false
        };
      }); // ここに年がなかった時の処理を加える

      if (action.payload[0] in state.userTaskInfo.calendar) {
        // stateのMonthの連想配列に新しい日付の連想配列を追加する。
        // 追加情報は引数の日とこれまでの処理で作成したカレンダー登録用情報
        state.userTaskInfo.calendar[action.payload[0]][action.payload[1]] = _objectSpread(_objectSpread({}, state.userTaskInfo.calendar[action.payload[0]][action.payload[1]]), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload[2], {
          PatternId: action.payload[3],
          tasks: TodayTasks
        }));
      } else {
        // stateのMonthの連想配列に新しい日付の連想配列を追加する。
        // 追加情報は引数の日とこれまでの処理で作成したカレンダー登録用情報
        state.userTaskInfo.calendar[action.payload[0]] = _objectSpread(_objectSpread({}, state.userTaskInfo.calendar[action.payload[0]]), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload[1], Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload[2], {
          PatternId: action.payload[3],
          tasks: TodayTasks
        })));
      } // action.payload[3];


      console.log(state.userTaskInfo.calendar[action.payload[0]][action.payload[1]][action.payload[2]]);
    },
    // タスクの詳細を設定する処理。引数のテキスト配列には[入力内容、連想配列のキー、タスクの配列を指定する数字]が格納されている。
    taskDetailRegister: function taskDetailRegister(state, action) {
      state.userTaskInfo.tasks[parseInt(action.payload[2])].detail = _objectSpread(_objectSpread({}, state.userTaskInfo.tasks[parseInt(action.payload[2])].detail), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, action.payload[1], action.payload[0]));
    },
    // タスクを追加する処理。引数のテキスト配列には[入力内容、連想配列のキー、タスクの配列を指定する数字]が格納されている。
    taskRegister: function taskRegister(state, action) {
      var registerTask = action.payload;
      registerTask.patternInfo.map(function (content) {
        var choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
          return task.patternInfo.some(function (task) {
            return task.patternID == content.patternID;
          });
        });
        content.order = choicePatternTasks.length + 1;
      });
      console.log(registerTask);
      state.userTaskInfo.tasks.push(registerTask);
    },
    // タスクのパターン登録状況を更新する。
    taskPatternUpdate: function taskPatternUpdate(state, action) {
      // ここでやることは？
      // まず引数にタスクの配列インデックス番号が必要
      // パターンIDの配列を受け取る。
      // 配列とstateを比較して、なければ登録。Orderは最大値+1。逆に削除されているものは除外。
      var statePatternIdList = state.userTaskInfo.tasks[action.payload.index].patternInfo.map(function (content) {
        return content.patternID;
      });
      console.log("statePatternIdList");
      console.log(statePatternIdList);

      var diff = function diff(olds, nexts) {
        return {
          adds: nexts.filter(function (e) {
            return !olds.includes(e);
          }),
          subs: olds.filter(function (e) {
            return !nexts.includes(e);
          })
        };
      };

      var result = diff(statePatternIdList, action.payload.newChecked);
      var updateArray;
      console.log(result); // stateから削除対象を除外した配列を抽出する。

      if (result.subs.length > 0) {
        updateArray = state.userTaskInfo.tasks[action.payload.index].patternInfo.filter(function (content) {
          // futurePatternUpdate(state,);
          return result.subs.some(function (sub) {
            return sub != content.patternID;
          });
        });
      } else {
        updateArray = state.userTaskInfo.tasks[action.payload.index].patternInfo;
      }

      console.log("1:updateArray");
      console.log(updateArray); //

      result.adds.map(function (add) {
        var Max = 0; // 追加されたIDが設定されているタスクを抽出する。

        var choicePatternTasks = state.userTaskInfo.tasks.filter(function (task) {
          return task.patternInfo.some(function (taskPatternInfo) {
            return taskPatternInfo.patternID == add;
          });
        }); //

        choicePatternTasks.map(function (task) {
          // 抽出された各タスクのパターンIDを比較し、最大値を取得する。
          var content = task.patternInfo.find(function (info) {
            return info.patternID == add;
          });
          Max < content.patternID ? Max = content.patternID : "";
        });
        var pushContent = {
          patternID: add,
          order: Max + 1
        };
        updateArray.push(pushContent);
        futurePatternUpdate(state, add);
      });
      console.log("2:updateArray");
      console.log(updateArray);
      state.userTaskInfo.tasks[action.payload.index].patternInfo = updateArray;
    },
    // タスクを削除する処理。引数には削除対象タスクのインデックス番号が格納されている。
    taskDelete: function taskDelete(state, action) {
      // const deleteTask = state.userTaskInfo.tasks.splice(
      //     action.payload,
      //     1
      // );
      var deleteTask = state.userTaskInfo.tasks.filter(function (content, index) {
        return index != action.payload;
      });
      console.log(deleteTask);
      state.userTaskInfo.tasks = deleteTask;
    },
    // タスクをパターンから除外する処理。引数のオブジェクトにはパターンIDと削除対象タスクの名称が格納されている。
    taskRemovePattern: function taskRemovePattern(state, action) {
      var index = state.userTaskInfo.tasks.findIndex(function (content) {
        return content.detail["タスク名"] == action.payload.detailTitle;
      });
      var deletedTask = state.userTaskInfo.tasks[index].patternInfo.filter(function (content) {
        return content.patternID != action.payload.patternId;
      });
      state.userTaskInfo.tasks[index].patternInfo = deletedTask;
      console.log(deletedTask); // futurePatternUpdate(state);
    },
    // パターンを追加する処理。引数にはパターン名称が格納されている。
    patternRegister: function patternRegister(state, action) {
      var MaxId = 0;
      state.userTaskInfo.pattern.map(function (patternContent) {
        patternContent.patternId > MaxId ? MaxId = patternContent.patternId : "";
      });
      var addPattern = {
        patternId: MaxId + 1,
        patternName: action.payload
      };
      state.userTaskInfo.pattern.push(addPattern);
    },
    // パターンを削除する処理。引数にはパターンIDが格納されている。
    patternDelete: function patternDelete(state, action) {
      var updatePatternList = state.userTaskInfo.pattern.filter(function (patternContent) {
        // console.log(patternContent.patternId);
        // console.log(action.payload);
        return patternContent.patternId != action.payload;
      });
      console.log(updatePatternList);
      state.userTaskInfo.pattern = updatePatternList; // タスクとカレンダーに保管されているパターンを全て削除する必要がある
      // カレンダーは未来分だけ
      // state.userTaskInfo.tasksに保管されているパターン情報を削除する。

      var updateTaskList = state.userTaskInfo.tasks.map(function (task) {
        var updatePatternInfo = task.patternInfo.filter(function (taskPatternInfo) {
          return taskPatternInfo.patternID != action.payload;
        });
        var updateTask = {
          detail: task.detail,
          patternInfo: updatePatternInfo
        };
        return updateTask;
      });
      console.log("after:updateTaskList");
      console.log(updateTaskList);
      state.userTaskInfo.tasks = updateTaskList; // state.userTaskInfo.calendarの未来分に保管されているパターン情報を削除する。

      var today = new Date();
      var nowYear = today.getFullYear();
      var nowMonth = today.getMonth() + 1;
      var nowDate = today.getDate();
      var updateCalendarList = state.userTaskInfo.calendar;
      var keyYears = Object.keys(state.userTaskInfo.calendar);

      var deleteCalendarDate = function deleteCalendarDate(year, month, date) {
        if (state.userTaskInfo.calendar[parseInt(year)][parseInt(month)][parseInt(date)].PatternId == action.payload) {
          delete state.userTaskInfo.calendar[parseInt(year)][parseInt(month)][parseInt(date)];
        }
      };

      keyYears.map(function (year) {
        var keyMonth = Object.keys(state.userTaskInfo.calendar[parseInt(year)]);

        if (parseInt(year) > nowYear) {
          // 対象が来年以降である場合、削除する。deleteのほうがいい
          keyMonth.map(function (month) {
            var keyDate = Object.keys(state.userTaskInfo.calendar[parseInt(year)][parseInt(month)]);
            keyDate.map(function (date) {
              deleteCalendarDate(year, month, date);
            });
          });
        } else if (parseInt(year) == nowYear) {
          // 対象が今年である場合
          keyMonth.map(function (month) {
            var keyDate = Object.keys(state.userTaskInfo.calendar[parseInt(year)][parseInt(month)]);

            if (parseInt(month) > nowMonth) {
              // 来月以降の場合、削除する。deleteのほうがいい
              console.log(keyDate);
              keyDate.map(function (date) {
                deleteCalendarDate(year, month, date);
              });
            } else if (parseInt(month) == nowMonth) {
              // 今月の場合
              keyDate.map(function (date) {
                if (parseInt(date) > nowDate) {
                  // 明日以降の場合、削除する
                  deleteCalendarDate(year, month, date);
                }
              });
            }
          });
        }
      });
    },
    // パターン名称を編集する処理。引数にはパターンIDとパターン名称が格納されている。
    patternNameEdit: function patternNameEdit(state, action) {
      // IDに合致する要素のインデックス番号を取得
      var editPatternIndex = state.userTaskInfo.pattern.findIndex(function (patternContent) {
        return patternContent.patternId == action.payload.editPatternId;
      }); // 取得したインデックス番号を目印に、引数の新しい名称で更新する。

      state.userTaskInfo.pattern[editPatternIndex].patternName = action.payload.patternName;
    }
  }
});
var _tasksModule$actions = tasksModule.actions,
    init = _tasksModule$actions.init,
    Register = _tasksModule$actions.Register,
    allDelete = _tasksModule$actions.allDelete,
    taskCheckComplete = _tasksModule$actions.taskCheckComplete,
    calendarPatternRegister = _tasksModule$actions.calendarPatternRegister,
    taskDetailRegister = _tasksModule$actions.taskDetailRegister,
    taskRegister = _tasksModule$actions.taskRegister,
    taskPatternUpdate = _tasksModule$actions.taskPatternUpdate,
    taskDelete = _tasksModule$actions.taskDelete,
    taskRemovePattern = _tasksModule$actions.taskRemovePattern,
    patternRegister = _tasksModule$actions.patternRegister,
    patternDelete = _tasksModule$actions.patternDelete,
    patternNameEdit = _tasksModule$actions.patternNameEdit;

/* harmony default export */ __webpack_exports__["default"] = (tasksModule);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJUYXNrSW5mbyIsImNhbGVuZGFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiUGF0dGVybklkIiwidGFza3MiLCJvcmRlciIsImRldGFpbCIsImZsdWciLCJwYXR0ZXJuIiwicGF0dGVybklkIiwicGF0dGVybk5hbWUiLCJwYXR0ZXJuSW5mbyIsInBhdHRlcm5JRCIsImZ1dHVyZVBhdHRlcm5VcGRhdGUiLCJzdGF0ZSIsInVwZGF0ZVBhdHRlcm5JZCIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwidG9kYXkiLCJub3dZZWFyIiwibm93TW9udGgiLCJub3dEYXRlIiwiY2hvaWNlUGF0dGVyblRhc2tzIiwiZmlsdGVyIiwidGFzayIsInNvbWUiLCJ1cGRhdGVUYXNrcyIsIm1hcCIsInRhc2tQYXR0ZXJuIiwia2V5TW9udGhMaXN0Iiwia2V5WWVhciIsInBhcnNlSW50Iiwia2V5RGF0ZUxpc3QiLCJrZXlNb250aCIsImRhdGVUYXNrVXBkYXRlIiwia2V5RGF0ZSIsImRpZmYiLCJvbGRzIiwibmV4dHMiLCJhZGRzIiwiZSIsImluY2x1ZGVzIiwic3VicyIsImtleVllYXJzIiwia2V5TW9udGhzIiwia2V5RGF0ZXMiLCJyZXN1bHQiLCJ1cGRhdGVBcnJheSIsInN1YiIsImFkZCIsInB1c2giLCJ0YXNrc01vZHVsZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiaW5pdCIsImFjdGlvbiIsImRhdGEiLCJwYXlsb2FkIiwiUmVnaXN0ZXIiLCJhbGxEZWxldGUiLCJ0YXNrQ2hlY2tDb21wbGV0ZSIsImluZGV4IiwiZmluZEluZGV4IiwiY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIiLCJUb2RheVRhc2tzIiwidGFza0RldGFpbFJlZ2lzdGVyIiwidGFza1JlZ2lzdGVyIiwicmVnaXN0ZXJUYXNrIiwiY29udGVudCIsImxlbmd0aCIsInRhc2tQYXR0ZXJuVXBkYXRlIiwic3RhdGVQYXR0ZXJuSWRMaXN0IiwibmV3Q2hlY2tlZCIsIk1heCIsInRhc2tQYXR0ZXJuSW5mbyIsImZpbmQiLCJpbmZvIiwicHVzaENvbnRlbnQiLCJ0YXNrRGVsZXRlIiwiZGVsZXRlVGFzayIsInRhc2tSZW1vdmVQYXR0ZXJuIiwiZGV0YWlsVGl0bGUiLCJkZWxldGVkVGFzayIsInBhdHRlcm5SZWdpc3RlciIsIk1heElkIiwicGF0dGVybkNvbnRlbnQiLCJhZGRQYXR0ZXJuIiwicGF0dGVybkRlbGV0ZSIsInVwZGF0ZVBhdHRlcm5MaXN0IiwidXBkYXRlVGFza0xpc3QiLCJ1cGRhdGVQYXR0ZXJuSW5mbyIsInVwZGF0ZVRhc2siLCJ1cGRhdGVDYWxlbmRhckxpc3QiLCJkZWxldGVDYWxlbmRhckRhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXRlIiwicGF0dGVybk5hbWVFZGl0IiwiZWRpdFBhdHRlcm5JbmRleCIsImVkaXRQYXR0ZXJuSWQiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQSxJQUFNQSxZQUFzQixHQUFHO0FBQzNCQyxjQUFZLEVBQUU7QUFDVkMsWUFBUSxFQUFFLDhGQUNMLElBQUlDLElBQUosQ0FBUywyQkFBVCxFQUFzQ0MsV0FBdEMsRUFERyxnR0FFQyxJQUFJRCxJQUFKLENBQVMsMkJBQVQsRUFBc0NFLFFBQXRDLEtBQW1ELENBRnBELDhHQUdLLElBQUlGLElBQUosQ0FBUywyQkFBVCxFQUFzQ0csT0FBdEMsRUFITCxFQUd1RDtBQUMvQ0MsZUFBUyxFQUFFLENBRG9DO0FBRS9DQyxXQUFLLEVBQUUsQ0FDSDtBQUNJQyxhQUFLLEVBQUUsQ0FEWDtBQUVJQyxjQUFNLG9IQUNELE1BREMsRUFDUSxXQURSLHNHQUVELGFBRkMsRUFFZSxrQkFGZixzR0FHRCxhQUhDLEVBR2Usa0JBSGYsV0FGVjtBQU9JQyxZQUFJLEVB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RCxFQUFVO0FBQ2xCLG9CQUFJbEUsUUFBUSxDQUFDa0UsSUFBRCxDQUFSLEdBQWlCNUUsT0FBckIsRUFBOEI7QUFDMUI7QUFDQXlFLG9DQUFrQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBY0MsSUFBZCxDQUFsQjtBQUNIO0FBQ0osZUFMRDtBQU1IO0FBQ0osV0FyQkQ7QUFzQkg7QUFDSixPQXpDRDtBQTBDSCxLQW5XSztBQW9XTjtBQUNBQyxtQkFyV00sMkJBc1dGdEYsS0F0V0UsRUF1V0Y0QyxNQXZXRSxFQTJXSjtBQUNFO0FBQ0EsVUFBTTJDLGdCQUFnQixHQUFHdkYsS0FBSyxDQUFDakIsWUFBTixDQUFtQlcsT0FBbkIsQ0FBMkJ5RCxTQUEzQixDQUNyQixVQUFDdUIsY0FBRDtBQUFBLGVBQ0lBLGNBQWMsQ0FBQy9FLFNBQWYsSUFBNEJpRCxNQUFNLENBQUNFLE9BQVAsQ0FBZTBDLGFBRC9DO0FBQUEsT0FEcUIsQ0FBekIsQ0FGRixDQU1FOztBQUNBeEYsV0FBSyxDQUFDakIsWUFBTixDQUFtQlcsT0FBbkIsQ0FBMkI2RixnQkFBM0IsRUFBNkMzRixXQUE3QyxHQUNJZ0QsTUFBTSxDQUFDRSxPQUFQLENBQWVsRCxXQURuQjtBQUVIO0FBcFhLO0FBSGtCLENBQUQsQ0FBL0I7MkJBeVlJMkMsV0FBVyxDQUFDa0QsTztJQWJaOUMsSSx3QkFBQUEsSTtJQUNBSSxRLHdCQUFBQSxRO0lBQ0FDLFMsd0JBQUFBLFM7SUFDQUMsaUIsd0JBQUFBLGlCO0lBQ0FHLHVCLHdCQUFBQSx1QjtJQUNBRSxrQix3QkFBQUEsa0I7SUFDQUMsWSx3QkFBQUEsWTtJQUNBSSxpQix3QkFBQUEsaUI7SUFDQVEsVSx3QkFBQUEsVTtJQUNBRSxpQix3QkFBQUEsaUI7SUFDQUcsZSx3QkFBQUEsZTtJQUNBSSxhLHdCQUFBQSxhO0lBQ0FVLGUsd0JBQUFBLGU7O0FBR1cvQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmZlYjM0ZTE5ZjMwYjU2YTJiY2Q3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHN1YlNlY29uZHMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHtcclxuICAgIGNhbGVuZGFyLFxyXG4gICAgcGF0dGVybixcclxuICAgIHRhc2tzLFxyXG4gICAgdXNlclRhc2ssXHJcbiAgICB1c2VyVGFza0luZm8sXHJcbn0gZnJvbSBcIi4vdXNlclRhc2tzVHlwZVwiO1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogdXNlclRhc2sgPSB7XHJcbiAgICB1c2VyVGFza0luZm86IHtcclxuICAgICAgICBjYWxlbmRhcjoge1xyXG4gICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldEZ1bGxZZWFyKCldOiB7XHJcbiAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldE1vbnRoKCkgKyAxXToge1xyXG4gICAgICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMyBPY3QgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0dGVybjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogXCJ0ZXN0UGF0dGVybjFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiAyLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IFwidGVzdFBhdHRlcm4yXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJkZWZhbHV0XCJdOiBcImRlZmFsdXRcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59O1xyXG5cclxuLy8gY29uc3QgZGlmZiA9IChvbGRzOiBhbnlbXSwgbmV4dHM6IGFueVtdKSA9PiAoe1xyXG4vLyAgICAgYWRkczogbmV4dHMuZmlsdGVyKChlKSA9PiAhb2xkcy5pbmNsdWRlcyhlKSksXHJcbi8vICAgICBzdWJzOiBvbGRzLmZpbHRlcigoZSkgPT4gIW5leHRzLmluY2x1ZGVzKGUpKSxcclxuLy8gfSk7XHJcblxyXG4vLyDjg5Hjgr/jg7zjg7Pmm7TmlrDmmYLjgavmnKrmnaXjgavoqK3lrprjgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7Pjga7lhoXlrrnjgpLmm7TmlrDjgZnjgovjgIJcclxuLy8g5pu05paw5a++6LGh44Gvc3RhdGUuY2FsZW5kYXIudGFza3NcclxuLy8g5bm05pyI5pel44GM5pyq5p2l44Gn44GC44KK44CB44GL44Gk44CB44OR44K/44O844OzSUTjgYzlkIzjgZjjgoLjga7jgpLlr77osaHjgavmlrDjgZfjgYTjg5Hjgr/jg7zjg7PjgpLnmbvpjLLjgZnjgovjgIJcclxuY29uc3QgZnV0dXJlUGF0dGVyblVwZGF0ZSA9IChzdGF0ZTogdXNlclRhc2ssIHVwZGF0ZVBhdHRlcm5JZDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIj09PT1mdXR1cmVQYXR0ZXJuVXBkYXRl44GT44GT44GL44KJPT09PVwiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIpKTtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG5vd1llYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3Qgbm93TW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuICAgIGNvbnN0IG5vd0RhdGUgPSB0b2RheS5nZXREYXRlKCk7XHJcblxyXG4gICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoXHJcbiAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSB1cGRhdGVQYXR0ZXJuSWRcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g44OR44K/44O844OzSUTjgavntJDku5jjgY/jgr/jgrnjgq/kuIDopqfjgYvjgonjgqvjg6zjg7Pjg4Djg7zjgbjjga7nmbvpjLLmg4XloLHjgpLmir3lh7rjgZnjgovjgIJcclxuICAgIGNvbnN0IHVwZGF0ZVRhc2tzID0gY2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgIC8vIOODkeOCv+ODvOODs+OBjOikh+aVsOeZu+mMsuOBleOCjOOBpuOBhOOCi+OCv+OCueOCr+OBuOOBruWvvuW/nOOBqOOBl+OBpuOAgemBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44Gr6Kmy5b2T44GZ44KL6KaB57Sg44Gg44GR44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgY29uc3QgdGFza1BhdHRlcm4gPSB0YXNrLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAocGF0dGVybkluZm8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5JbmZvLnBhdHRlcm5JRCA9PSB1cGRhdGVQYXR0ZXJuSWQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIOmFjeWIl+OBruOCv+OCueOCr+OBqOaKveWHuuOBl+OBn+ODkeOCv+ODvOODs+aDheWgseOCkuaVtOW9ouOBl+OBpui/lOOBmeOAglxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG9yZGVyOiB0YXNrUGF0dGVyblswXS5vcmRlcixcclxuICAgICAgICAgICAgZGV0YWlsOiB0YXNrLmRldGFpbCxcclxuICAgICAgICAgICAgLy8gZGV0YWlsMjogdGFzay5kZXRhaWwyLFxyXG4gICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qga2V5TW9udGhMaXN0ID0gKGtleVllYXI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBrZXlEYXRlTGlzdCA9IChrZXlZZWFyOiBzdHJpbmcsIGtleU1vbnRoOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV1bcGFyc2VJbnQoa2V5TW9udGgpXVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRhdGVUYXNrVXBkYXRlID0gKFxyXG4gICAgICAgIGtleVllYXI6IHN0cmluZyxcclxuICAgICAgICBrZXlNb250aDogc3RyaW5nLFxyXG4gICAgICAgIGtleURhdGU6IHN0cmluZ1xyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildW3BhcnNlSW50KGtleU1vbnRoKV1bXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludChrZXlEYXRlKVxyXG4gICAgICAgICAgICBdLlBhdHRlcm5JZCA9PSB1cGRhdGVQYXR0ZXJuSWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXVtwYXJzZUludChrZXlNb250aCldW1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5RGF0ZSlcclxuICAgICAgICAgICAgXS50YXNrcyA9IHVwZGF0ZVRhc2tzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PWRhdGVUYXNrVXBkYXRlPT09XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlZZWFyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5TW9udGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlEYXRlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlVGFza3MpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdHlwZSBjYWxlbmRhclBhdHRlcm4gPSB7XHJcbiAgICAgICAgb3JkZXI6IG51bWJlcjtcclxuICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgW2NvbnRlbnQ6IHN0cmluZ106IHN0cmluZztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZsdWc6IGJvb2xlYW47XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRpZmYgPSAob2xkczogY2FsZW5kYXJQYXR0ZXJuW10sIG5leHRzOiBjYWxlbmRhclBhdHRlcm5bXSkgPT4gKHtcclxuICAgICAgICBhZGRzOiBuZXh0cy5maWx0ZXIoKGUpID0+ICFvbGRzLmluY2x1ZGVzKGUpKSxcclxuICAgICAgICBzdWJzOiBvbGRzLmZpbHRlcigoZSkgPT4gIW5leHRzLmluY2x1ZGVzKGUpKSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOeZu+mMsuOBleOCjOOBpuOBhOOCi+W5tOOBrumAo+aDs+mFjeWIl+OBruOCreODvOOCkuWFqOOBpuWPluW+l1xyXG4gICAgY29uc3Qga2V5WWVhcnMgPSBPYmplY3Qua2V5cyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIpO1xyXG4gICAga2V5WWVhcnMubWFwKChrZXlZZWFyKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGtleVllYXIpID09IG5vd1llYXIpIHtcclxuICAgICAgICAgICAgLy8g44KC44GX5LuK5bm044Gg44Gj44Gf44KJ44CB44Gu5Yem55CGXHJcbiAgICAgICAgICAgIC8vIOeZu+mMsuOBleOCjOOBpuOBhOOCi+aciOOBrumAo+aDs+mFjeWIl+OBruOCreODvOOCkuWFqOOBpuWPluW+l1xyXG4gICAgICAgICAgICBjb25zdCBrZXlNb250aHMgPSBrZXlNb250aExpc3Qoa2V5WWVhcik7XHJcblxyXG4gICAgICAgICAgICBrZXlNb250aHMubWFwKChrZXlNb250aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGtleU1vbnRoKSA9PSBub3dNb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOOCguOBl+S7iuaciOOBoOOBo+OBn+OCiVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOeZu+mMsuOBleOCjOOBpuOBhOOCi+aXpeOBrumAo+aDs+mFjeWIl+OBruOCreODvOOCkuWFqOOBpuWPluW+l1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleURhdGVzID0ga2V5RGF0ZUxpc3Qoa2V5WWVhciwga2V5TW9udGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGtleURhdGVzLm1hcCgoa2V5RGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoa2V5RGF0ZSkgPiBub3dEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjgoLjgZfmmI7ml6Xku6XpmY3jgaDjgaPjgZ/jgonnmbvpjLLlhoXlrrnjgpLmm7TmlrDjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVUYXNrVXBkYXRlKGtleVllYXIsIGtleU1vbnRoLCBrZXlEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChrZXlEYXRlKSA9PSBub3dEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjgoLjgZfku4rml6XjgaDjgaPjgZ/jgonjgIHlpInmm7TliIbjgaDjgZHlj43mmKDjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWHpueQhuacquS9nOaIkFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGlmZihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChrZXlNb250aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGtleURhdGUpXS50YXNrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUYXNrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUFycmF5ID0gc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleVllYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGtleU1vbnRoKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5RGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0udGFza3MuZmlsdGVyKGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zdWJzLnNvbWUoKHN1YikgPT4gc3ViICE9IHRhc2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZHMubWFwKChhZGQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcnJheS5wdXNoKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5TW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGtleURhdGUpXS50YXNrcyA9IHVwZGF0ZUFycmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KGtleU1vbnRoKSA+IG5vd01vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g44KC44GX5p2l5pyI5Lul6ZmN44Gg44Gj44Gf44KJ44CB44GZ44G544Gm5pu05paw44GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5RGF0ZXMgPSBrZXlEYXRlTGlzdChrZXlZZWFyLCBrZXlNb250aCk7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5RGF0ZXMubWFwKChrZXlEYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVUYXNrVXBkYXRlKGtleVllYXIsIGtleU1vbnRoLCBrZXlEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChrZXlZZWFyKSA+IG5vd1llYXIpIHtcclxuICAgICAgICAgICAgLy8g44KC44GX5p2l5bm05Lul6ZmN44Gg44Gj44Gf44KJ44CB44Gu5Yem55CG44CC5YWo44Gm5pu05paw44GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IGtleU1vbnRocyA9IGtleU1vbnRoTGlzdChrZXlZZWFyKTtcclxuICAgICAgICAgICAga2V5TW9udGhzLm1hcCgoa2V5TW9udGgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleURhdGVzID0ga2V5RGF0ZUxpc3Qoa2V5WWVhciwga2V5TW9udGgpO1xyXG4gICAgICAgICAgICAgICAga2V5RGF0ZXMubWFwKChrZXlEYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVRhc2tVcGRhdGUoa2V5WWVhciwga2V5TW9udGgsIGtleURhdGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiPT09PWZ1dHVyZVBhdHRlcm5VcGRhdGXjgZPjgZPjgb7jgac9PT09XCIpO1xyXG59O1xyXG5cclxuY29uc3QgdGFza3NNb2R1bGUgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInRhc2tzXCIsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGluaXQoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dXNlclRhc2tJbmZvPikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdCBkYXRhXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgLy8gc3RhdGUgPSB7Li4uZGF0YX07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5pdCBzdGF0ZS51c2VyVGFza0luZm8g5YmNXCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8pO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8gPSBkYXRhO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluaXQgc3RhdGUudXNlclRhc2tJbmZvIOW+jFwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUudXNlclRhc2tJbmZvKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHVzZXJUYXNrPikge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZSA9IHsgLi4uc3RhdGUsIC4uLmRhdGEgfTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXRlJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFsbERlbGV0ZShzdGF0ZTogdXNlclRhc2spIHtcclxuICAgICAgICAgICAgc3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2sgYWxsRGVsZXRlXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gRGF5UGxhbuOBq+OBpuOCv+OCueOCr+OCkuOCr+ODquODg+OCr+OBl+OBn+mam+OBq+WujOS6huODleODqeOCsOOCknRydWXjgavlpInmm7TjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjgablubTjgIHmnIjjgIHml6XjgIHjgr/jgrnjgq/jga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgpLlj5fjgZHlj5bjgaPjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrQ2hlY2tDb21wbGV0ZShzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXJbXT4pIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgXVthY3Rpb24ucGF5bG9hZFsyXV0udGFza3MuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgKHRhc2tzKSA9PiB0YXNrcy5vcmRlciA9PSBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bYWN0aW9uLnBheWxvYWRbMV1dW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMl1cclxuICAgICAgICAgICAgXS50YXNrc1tpbmRleF0uZmx1ZyA9ICFzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFswXVxyXG4gICAgICAgICAgICBdW2FjdGlvbi5wYXlsb2FkWzFdXVthY3Rpb24ucGF5bG9hZFsyXV0udGFza3NbaW5kZXhdLmZsdWc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlvJXmlbDjga9zdGF0ZeOBqOW5tOOAgeaciOOAgeaXpeOAgemBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44GuNOOBpOOBruaVsOWApOOBjOagvOe0jeOBleOCjOOBn+mFjeWIl1xyXG4gICAgICAgIGNhbGVuZGFyUGF0dGVyblJlZ2lzdGVyKFxyXG4gICAgICAgICAgICBzdGF0ZTogdXNlclRhc2ssXHJcbiAgICAgICAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXJbXT5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gc3RhdGXjgYvjgonpgbjmip7jgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7NJROOBjOioreWumuOBleOCjOOBpuOBhOOCi+OCv+OCueOCr+OCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICBjb25zdCBjaG9pY2VQYXR0ZXJuVGFza3MgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAodGFzaykgPT4gdGFzay5wYXR0ZXJuSUQgPT0gYWN0aW9uLnBheWxvYWRbM11cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8g44OR44K/44O844OzSUTjgavntJDku5jjgY/jgr/jgrnjgq/kuIDopqfjgYvjgonjgqvjg6zjg7Pjg4Djg7zjgbjjga7nmbvpjLLmg4XloLHjgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgY29uc3QgVG9kYXlUYXNrcyA9IGNob2ljZVBhdHRlcm5UYXNrcy5tYXAoKHRhc2spID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIOODkeOCv+ODvOODs+OBjOikh+aVsOeZu+mMsuOBleOCjOOBpuOBhOOCi+OCv+OCueOCr+OBuOOBruWvvuW/nOOBqOOBl+OBpuOAgemBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44Gr6Kmy5b2T44GZ44KL6KaB57Sg44Gg44GR44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrUGF0dGVybiA9IHRhc2sucGF0dGVybkluZm8uZmlsdGVyKGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mb1xyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5JbmZvLnBhdHRlcm5JRCA9PSBhY3Rpb24ucGF5bG9hZFszXTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOmFjeWIl+OBruOCv+OCueOCr+OBqOaKveWHuuOBl+OBn+ODkeOCv+ODvOODs+aDheWgseOCkuaVtOW9ouOBl+OBpui/lOOBmeOAglxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogdGFza1BhdHRlcm5bMF0ub3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB0YXNrLmRldGFpbCxcclxuICAgICAgICAgICAgICAgICAgICAvLyBkZXRhaWwyOiB0YXNrLmRldGFpbDIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOOBk+OBk+OBq+W5tOOBjOOBquOBi+OBo+OBn+aZguOBruWHpueQhuOCkuWKoOOBiOOCi1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWRbMF0gaW4gc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdGF0ZeOBrk1vbnRo44Gu6YCj5oOz6YWN5YiX44Gr5paw44GX44GE5pel5LuY44Gu6YCj5oOz6YWN5YiX44KS6L+95Yqg44GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICAvLyDov73liqDmg4XloLHjga/lvJXmlbDjga7ml6XjgajjgZPjgozjgb7jgafjga7lh6bnkIbjgafkvZzmiJDjgZfjgZ/jgqvjg6zjg7Pjg4Djg7znmbvpjLLnlKjmg4XloLFcclxuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgICAgIF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZFsyXV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiBhY3Rpb24ucGF5bG9hZFszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFRvZGF5VGFza3MsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdGF0ZeOBrk1vbnRo44Gu6YCj5oOz6YWN5YiX44Gr5paw44GX44GE5pel5LuY44Gu6YCj5oOz6YWN5YiX44KS6L+95Yqg44GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICAvLyDov73liqDmg4XloLHjga/lvJXmlbDjga7ml6XjgajjgZPjgozjgb7jgafjga7lh6bnkIbjgafkvZzmiJDjgZfjgZ/jgqvjg6zjg7Pjg4Djg7znmbvpjLLnlKjmg4XloLFcclxuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXSxcclxuICAgICAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMV1dOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZFsyXV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogYWN0aW9uLnBheWxvYWRbM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogVG9kYXlUYXNrcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYWN0aW9uLnBheWxvYWRbM107XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAgICAgXVthY3Rpb24ucGF5bG9hZFsyXV1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OBruips+e0sOOCkuioreWumuOBmeOCi+WHpueQhuOAguW8leaVsOOBruODhuOCreOCueODiOmFjeWIl+OBq+OBr1vlhaXlipvlhoXlrrnjgIHpgKPmg7PphY3liJfjga7jgq3jg7zjgIHjgr/jgrnjgq/jga7phY3liJfjgpLmjIflrprjgZnjgovmlbDlrZdd44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza0RldGFpbFJlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZ1tdPikge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQoYWN0aW9uLnBheWxvYWRbMl0pXS5kZXRhaWwgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyVGFza0luZm8udGFza3NbcGFyc2VJbnQoYWN0aW9uLnBheWxvYWRbMl0pXS5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMV1dOiBhY3Rpb24ucGF5bG9hZFswXSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OCkui/veWKoOOBmeOCi+WHpueQhuOAguW8leaVsOOBruODhuOCreOCueODiOmFjeWIl+OBq+OBr1vlhaXlipvlhoXlrrnjgIHpgKPmg7PphY3liJfjga7jgq3jg7zjgIHjgr/jgrnjgq/jga7phY3liJfjgpLmjIflrprjgZnjgovmlbDlrZdd44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza1JlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHRhc2tzPikge1xyXG4gICAgICAgICAgICBjb25zdCByZWdpc3RlclRhc2sgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgcmVnaXN0ZXJUYXNrLnBhdHRlcm5JbmZvLm1hcCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IGNvbnRlbnQucGF0dGVybklEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQub3JkZXIgPSBjaG9pY2VQYXR0ZXJuVGFza3MubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlZ2lzdGVyVGFzayk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5wdXNoKHJlZ2lzdGVyVGFzayk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jga7jg5Hjgr/jg7zjg7PnmbvpjLLnirbms4HjgpLmm7TmlrDjgZnjgovjgIJcclxuICAgICAgICB0YXNrUGF0dGVyblVwZGF0ZShcclxuICAgICAgICAgICAgc3RhdGU6IHVzZXJUYXNrLFxyXG4gICAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgICAgICAgICAgbmV3Q2hlY2tlZDogbnVtYmVyW107XHJcbiAgICAgICAgICAgICAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgICAgICAgICB9PlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyDjgZPjgZPjgafjgoTjgovjgZPjgajjga/vvJ9cclxuICAgICAgICAgICAgLy8g44G+44Ga5byV5pWw44Gr44K/44K544Kv44Gu6YWN5YiX44Kk44Oz44OH44OD44Kv44K555Wq5Y+344GM5b+F6KaBXHJcbiAgICAgICAgICAgIC8vIOODkeOCv+ODvOODs0lE44Gu6YWN5YiX44KS5Y+X44GR5Y+W44KL44CCXHJcbiAgICAgICAgICAgIC8vIOmFjeWIl+OBqHN0YXRl44KS5q+U6LyD44GX44Gm44CB44Gq44GR44KM44Gw55m76Yyy44CCT3JkZXLjga/mnIDlpKflgKQrMeOAgumAhuOBq+WJiumZpOOBleOCjOOBpuOBhOOCi+OCguOBruOBr+mZpOWkluOAglxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3RhdGVQYXR0ZXJuSWRMaXN0ID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQuaW5kZXhcclxuICAgICAgICAgICAgXS5wYXR0ZXJuSW5mby5tYXAoKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LnBhdHRlcm5JRDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGVQYXR0ZXJuSWRMaXN0XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZVBhdHRlcm5JZExpc3QpO1xyXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gKG9sZHM6IG51bWJlcltdLCBuZXh0czogbnVtYmVyW10pID0+ICh7XHJcbiAgICAgICAgICAgICAgICBhZGRzOiBuZXh0cy5maWx0ZXIoKGUpID0+ICFvbGRzLmluY2x1ZGVzKGUpKSxcclxuICAgICAgICAgICAgICAgIHN1YnM6IG9sZHMuZmlsdGVyKChlKSA9PiAhbmV4dHMuaW5jbHVkZXMoZSkpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGlmZihzdGF0ZVBhdHRlcm5JZExpc3QsIGFjdGlvbi5wYXlsb2FkLm5ld0NoZWNrZWQpO1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlQXJyYXk6IHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgb3JkZXI6IG51bWJlcjtcclxuICAgICAgICAgICAgfVtdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RhdGXjgYvjgonliYrpmaTlr77osaHjgpLpmaTlpJbjgZfjgZ/phY3liJfjgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdWJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFycmF5ID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgICAgICBdLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAoY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZ1dHVyZVBhdHRlcm5VcGRhdGUoc3RhdGUsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnN1YnMuc29tZSgoc3ViKSA9PiBzdWIgIT0gY29udGVudC5wYXR0ZXJuSUQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVBcnJheSA9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW2FjdGlvbi5wYXlsb2FkLmluZGV4XS5wYXR0ZXJuSW5mbztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIxOnVwZGF0ZUFycmF5XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVBcnJheSk7XHJcblxyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICByZXN1bHQuYWRkcy5tYXAoKGFkZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IE1heDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgIC8vIOi/veWKoOOBleOCjOOBn0lE44GM6Kit5a6a44GV44KM44Gm44GE44KL44K/44K544Kv44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaG9pY2VQYXR0ZXJuVGFza3MgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGFza1BhdHRlcm5JbmZvKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tQYXR0ZXJuSW5mby5wYXR0ZXJuSUQgPT0gYWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBjaG9pY2VQYXR0ZXJuVGFza3MubWFwKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oq95Ye644GV44KM44Gf5ZCE44K/44K544Kv44Gu44OR44K/44O844OzSUTjgpLmr5TovIPjgZfjgIHmnIDlpKflgKTjgpLlj5blvpfjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IHRhc2sucGF0dGVybkluZm8uZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGluZm8pID0+IGluZm8ucGF0dGVybklEID09IGFkZFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgTWF4IDwgY29udGVudC5wYXR0ZXJuSUQgPyAoTWF4ID0gY29udGVudC5wYXR0ZXJuSUQpIDogXCJcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHB1c2hDb250ZW50ID0geyBwYXR0ZXJuSUQ6IGFkZCwgb3JkZXI6IE1heCArIDEgfTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFycmF5LnB1c2gocHVzaENvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgZnV0dXJlUGF0dGVyblVwZGF0ZShzdGF0ZSwgYWRkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjp1cGRhdGVBcnJheVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlQXJyYXkpO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQuaW5kZXhcclxuICAgICAgICAgICAgXS5wYXR0ZXJuSW5mbyA9IHVwZGF0ZUFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44KS5YmK6Zmk44GZ44KL5Yem55CG44CC5byV5pWw44Gr44Gv5YmK6Zmk5a++6LGh44K/44K544Kv44Gu44Kk44Oz44OH44OD44Kv44K555Wq5Y+344GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza0RlbGV0ZShzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGRlbGV0ZVRhc2sgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3Muc3BsaWNlKFxyXG4gICAgICAgICAgICAvLyAgICAgYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIC8vICAgICAxXHJcbiAgICAgICAgICAgIC8vICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmlsdGVyKGZ1bmN0aW9uIChcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCAhPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZVRhc2spO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3MgPSBkZWxldGVUYXNrO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44KS44OR44K/44O844Oz44GL44KJ6Zmk5aSW44GZ44KL5Yem55CG44CC5byV5pWw44Gu44Kq44OW44K444Kn44Kv44OI44Gr44Gv44OR44K/44O844OzSUTjgajliYrpmaTlr77osaHjgr/jgrnjgq/jga7lkI3np7DjgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrUmVtb3ZlUGF0dGVybihcclxuICAgICAgICAgICAgc3RhdGU6IHVzZXJUYXNrLFxyXG4gICAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248eyBwYXR0ZXJuSWQ6IG51bWJlcjsgZGV0YWlsVGl0bGU6IHN0cmluZyB9PlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maW5kSW5kZXgoKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LmRldGFpbFtcIuOCv+OCueOCr+WQjVwiXSA9PSBhY3Rpb24ucGF5bG9hZC5kZXRhaWxUaXRsZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRUYXNrID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW1xyXG4gICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgXS5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50LnBhdHRlcm5JRCAhPSBhY3Rpb24ucGF5bG9hZC5wYXR0ZXJuSWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbaW5kZXhdLnBhdHRlcm5JbmZvID0gZGVsZXRlZFRhc2s7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbGV0ZWRUYXNrKTtcclxuICAgICAgICAgICAgLy8gZnV0dXJlUGF0dGVyblVwZGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjg5Hjgr/jg7zjg7PjgpLov73liqDjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjga/jg5Hjgr/jg7zjg7PlkI3np7DjgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICBwYXR0ZXJuUmVnaXN0ZXIoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikge1xyXG4gICAgICAgICAgICBsZXQgTWF4SWQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuLm1hcCgocGF0dGVybkNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5Db250ZW50LnBhdHRlcm5JZCA+IE1heElkXHJcbiAgICAgICAgICAgICAgICAgICAgPyAoTWF4SWQgPSBwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgYWRkUGF0dGVybiA9IHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JZDogTWF4SWQgKyAxLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybi5wdXNoKGFkZFBhdHRlcm4pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44OR44K/44O844Oz44KS5YmK6Zmk44GZ44KL5Yem55CG44CC5byV5pWw44Gr44Gv44OR44K/44O844OzSUTjgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICBwYXR0ZXJuRGVsZXRlKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlUGF0dGVybkxpc3QgPSBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybi5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAocGF0dGVybkNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybkNvbnRlbnQucGF0dGVybklkICE9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlUGF0dGVybkxpc3QpO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybiA9IHVwZGF0ZVBhdHRlcm5MaXN0O1xyXG5cclxuICAgICAgICAgICAgLy8g44K/44K544Kv44Go44Kr44Os44Oz44OA44O844Gr5L+d566h44GV44KM44Gm44GE44KL44OR44K/44O844Oz44KS5YWo44Gm5YmK6Zmk44GZ44KL5b+F6KaB44GM44GC44KLXHJcbiAgICAgICAgICAgIC8vIOOCq+ODrOODs+ODgOODvOOBr+acquadpeWIhuOBoOOBkVxyXG5cclxuICAgICAgICAgICAgLy8gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tz44Gr5L+d566h44GV44KM44Gm44GE44KL44OR44K/44O844Oz5oOF5aCx44KS5YmK6Zmk44GZ44KL44CCXHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVUYXNrTGlzdCA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5tYXAoKHRhc2spID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVBhdHRlcm5JbmZvID0gdGFzay5wYXR0ZXJuSW5mby5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgKHRhc2tQYXR0ZXJuSW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFza1BhdHRlcm5JbmZvLnBhdHRlcm5JRCAhPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlVGFzazoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29udGVudDogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybkluZm86IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVtdO1xyXG4gICAgICAgICAgICAgICAgfSA9IHsgZGV0YWlsOiB0YXNrLmRldGFpbCwgcGF0dGVybkluZm86IHVwZGF0ZVBhdHRlcm5JbmZvIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlVGFzaztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWZ0ZXI6dXBkYXRlVGFza0xpc3RcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZVRhc2tMaXN0KTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzID0gdXBkYXRlVGFza0xpc3Q7XHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXLjga7mnKrmnaXliIbjgavkv53nrqHjgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7Pmg4XloLHjgpLliYrpmaTjgZnjgovjgIJcclxuICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBub3dZZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm93TW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICAgICAgY29uc3Qgbm93RGF0ZSA9IHRvZGF5LmdldERhdGUoKTtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZUNhbGVuZGFyTGlzdCA9IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcjtcclxuICAgICAgICAgICAgY29uc3Qga2V5WWVhcnMgPSBPYmplY3Qua2V5cyhzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIpO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVDYWxlbmRhckRhdGUgPSAoXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBtb250aDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogc3RyaW5nXHJcbiAgICAgICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludCh5ZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KG1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQoZGF0ZSldLlBhdHRlcm5JZCA9PSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludCh5ZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KG1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQoZGF0ZSldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBrZXlZZWFycy5tYXAoKHllYXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleU1vbnRoID0gT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KHllYXIpXVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh5ZWFyKSA+IG5vd1llYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlr77osaHjgYzmnaXlubTku6XpmY3jgafjgYLjgovloLTlkIjjgIHliYrpmaTjgZnjgovjgIJkZWxldGXjga7jgbvjgYbjgYzjgYTjgYRcclxuICAgICAgICAgICAgICAgICAgICBrZXlNb250aC5tYXAoKG1vbnRoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleURhdGUgPSBPYmplY3Qua2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludCh5ZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQobW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleURhdGUubWFwKChkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDYWxlbmRhckRhdGUoeWVhciwgbW9udGgsIGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoeWVhcikgPT0gbm93WWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWvvuixoeOBjOS7iuW5tOOBp+OBguOCi+WgtOWQiFxyXG4gICAgICAgICAgICAgICAgICAgIGtleU1vbnRoLm1hcCgobW9udGgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5RGF0ZSA9IE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KHllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChtb250aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KG1vbnRoKSA+IG5vd01vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmnaXmnIjku6XpmY3jga7loLTlkIjjgIHliYrpmaTjgZnjgovjgIJkZWxldGXjga7jgbvjgYbjgYzjgYTjgYRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5RGF0ZS5tYXAoKGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDYWxlbmRhckRhdGUoeWVhciwgbW9udGgsIGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQobW9udGgpID09IG5vd01vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDku4rmnIjjga7loLTlkIhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleURhdGUubWFwKChkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGRhdGUpID4gbm93RGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmmI7ml6Xku6XpmY3jga7loLTlkIjjgIHliYrpmaTjgZnjgotcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2FsZW5kYXJEYXRlKHllYXIsIG1vbnRoLCBkYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOODkeOCv+ODvOODs+WQjeensOOCkue3qOmbhuOBmeOCi+WHpueQhuOAguW8leaVsOOBq+OBr+ODkeOCv+ODvOODs0lE44Go44OR44K/44O844Oz5ZCN56ew44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgcGF0dGVybk5hbWVFZGl0KFxyXG4gICAgICAgICAgICBzdGF0ZTogdXNlclRhc2ssXHJcbiAgICAgICAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgICAgICAgICBlZGl0UGF0dGVybklkOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9PlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBJROOBq+WQiOiHtOOBmeOCi+imgee0oOOBruOCpOODs+ODh+ODg+OCr+OCueeVquWPt+OCkuWPluW+l1xyXG4gICAgICAgICAgICBjb25zdCBlZGl0UGF0dGVybkluZGV4ID0gc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm4uZmluZEluZGV4KFxyXG4gICAgICAgICAgICAgICAgKHBhdHRlcm5Db250ZW50KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5Db250ZW50LnBhdHRlcm5JZCA9PSBhY3Rpb24ucGF5bG9hZC5lZGl0UGF0dGVybklkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vIOWPluW+l+OBl+OBn+OCpOODs+ODh+ODg+OCr+OCueeVquWPt+OCkuebruWNsOOBq+OAgeW8leaVsOOBruaWsOOBl+OBhOWQjeensOOBp+abtOaWsOOBmeOCi+OAglxyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybltlZGl0UGF0dGVybkluZGV4XS5wYXR0ZXJuTmFtZSA9XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5wYXR0ZXJuTmFtZTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG4gICAgaW5pdCxcclxuICAgIFJlZ2lzdGVyLFxyXG4gICAgYWxsRGVsZXRlLFxyXG4gICAgdGFza0NoZWNrQ29tcGxldGUsXHJcbiAgICBjYWxlbmRhclBhdHRlcm5SZWdpc3RlcixcclxuICAgIHRhc2tEZXRhaWxSZWdpc3RlcixcclxuICAgIHRhc2tSZWdpc3RlcixcclxuICAgIHRhc2tQYXR0ZXJuVXBkYXRlLFxyXG4gICAgdGFza0RlbGV0ZSxcclxuICAgIHRhc2tSZW1vdmVQYXR0ZXJuLFxyXG4gICAgcGF0dGVyblJlZ2lzdGVyLFxyXG4gICAgcGF0dGVybkRlbGV0ZSxcclxuICAgIHBhdHRlcm5OYW1lRWRpdCxcclxufSA9IHRhc2tzTW9kdWxlLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YXNrc01vZHVsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==