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
      keyYears.map(function (year) {
        var keyMonth = Object.keys(state.userTaskInfo.calendar[parseInt(year)]);

        if (parseInt(year) > nowYear) {
          // 対象が来年以降である場合、削除する。
          keyMonth.map(function (month) {
            var keyDate = Object.keys(state.userTaskInfo.calendar[parseInt(year)][parseInt(month)]);
            var updateList = keyDate.map(function (date) {
              if (state.userTaskInfo.calendar[parseInt(year)][parseInt(month)][parseInt(date)].PatternId != action.payload) {
                return state.userTaskInfo.calendar[parseInt(year)][parseInt(month)][parseInt(date)];
              }
            });
            state.userTaskInfo.calendar[parseInt(year)][parseInt(month)] = updateList;
          });
        } else if (parseInt(year) == nowYear) {
          // 対象が今年である場合
          keyMonth.map(function (month) {
            var keyDate = Object.keys(state.userTaskInfo.calendar[parseInt(year)][parseInt(month)]);

            if (parseInt(month) > nowMonth) {
              // 来月以降の場合、削除する。
              console.log(keyDate);
              var updateList = keyDate.map(function (date) {
                if (state.userTaskInfo.calendar[parseInt(year)][parseInt(month)][parseInt(date)].PatternId != action.payload) {
                  return state.userTaskInfo.calendar[parseInt(year)][parseInt(month)][parseInt(date)];
                }
              });
              state.userTaskInfo.calendar[parseInt(year)][parseInt(month)] = updateList;
            } else if (parseInt(month) == nowMonth) {
              // 今月の場合
              keyDate.map(function (date) {
                if (parseInt(date) > nowDate) {
                  // 明日以降の場合、削除する
                  if (state.userTaskInfo.calendar[parseInt(year)][parseInt(month)][parseInt(date)].PatternId == action.payload) {
                    delete state.userTaskInfo.calendar[parseInt(year)][parseInt(month)][parseInt(date)];
                  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJUYXNrSW5mbyIsImNhbGVuZGFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiUGF0dGVybklkIiwidGFza3MiLCJvcmRlciIsImRldGFpbCIsImZsdWciLCJwYXR0ZXJuIiwicGF0dGVybklkIiwicGF0dGVybk5hbWUiLCJwYXR0ZXJuSW5mbyIsInBhdHRlcm5JRCIsImZ1dHVyZVBhdHRlcm5VcGRhdGUiLCJzdGF0ZSIsInVwZGF0ZVBhdHRlcm5JZCIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwidG9kYXkiLCJub3dZZWFyIiwibm93TW9udGgiLCJub3dEYXRlIiwiY2hvaWNlUGF0dGVyblRhc2tzIiwiZmlsdGVyIiwidGFzayIsInNvbWUiLCJ1cGRhdGVUYXNrcyIsIm1hcCIsInRhc2tQYXR0ZXJuIiwia2V5TW9udGhMaXN0Iiwia2V5WWVhciIsInBhcnNlSW50Iiwia2V5RGF0ZUxpc3QiLCJrZXlNb250aCIsImRhdGVUYXNrVXBkYXRlIiwia2V5RGF0ZSIsImRpZmYiLCJvbGRzIiwibmV4dHMiLCJhZGRzIiwiZSIsImluY2x1ZGVzIiwic3VicyIsImtleVllYXJzIiwia2V5TW9udGhzIiwia2V5RGF0ZXMiLCJyZXN1bHQiLCJ1cGRhdGVBcnJheSIsInN1YiIsImFkZCIsInB1c2giLCJ0YXNrc01vZHVsZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiaW5pdCIsImFjdGlvbiIsImRhdGEiLCJwYXlsb2FkIiwiUmVnaXN0ZXIiLCJhbGxEZWxldGUiLCJ0YXNrQ2hlY2tDb21wbGV0ZSIsImluZGV4IiwiZmluZEluZGV4IiwiY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIiLCJUb2RheVRhc2tzIiwidGFza0RldGFpbFJlZ2lzdGVyIiwidGFza1JlZ2lzdGVyIiwicmVnaXN0ZXJUYXNrIiwiY29udGVudCIsImxlbmd0aCIsInRhc2tQYXR0ZXJuVXBkYXRlIiwic3RhdGVQYXR0ZXJuSWRMaXN0IiwibmV3Q2hlY2tlZCIsIk1heCIsInRhc2tQYXR0ZXJuSW5mbyIsImZpbmQiLCJpbmZvIiwicHVzaENvbnRlbnQiLCJ0YXNrRGVsZXRlIiwiZGVsZXRlVGFzayIsInRhc2tSZW1vdmVQYXR0ZXJuIiwiZGV0YWlsVGl0bGUiLCJkZWxldGVkVGFzayIsInBhdHRlcm5SZWdpc3RlciIsIk1heElkIiwicGF0dGVybkNvbnRlbnQiLCJhZGRQYXR0ZXJuIiwicGF0dGVybkRlbGV0ZSIsInVwZGF0ZVBhdHRlcm5MaXN0IiwidXBkYXRlVGFza0xpc3QiLCJ1cGRhdGVQYXR0ZXJuSW5mbyIsInVwZGF0ZVRhc2siLCJ1cGRhdGVDYWxlbmRhckxpc3QiLCJ5ZWFyIiwibW9udGgiLCJ1cGRhdGVMaXN0IiwiZGF0ZSIsInBhdHRlcm5OYW1lRWRpdCIsImVkaXRQYXR0ZXJuSW5kZXgiLCJlZGl0UGF0dGVybklkIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBY0EsSUFBTUEsWUFBc0IsR0FBRztBQUMzQkMsY0FBWSxFQUFFO0FBQ1ZDLFlBQVEsRUFBRSw4RkFDTCxJQUFJQyxJQUFKLENBQVMsMkJBQVQsRUFBc0NDLFdBQXRDLEVBREcsZ0dBRUMsSUFBSUQsSUFBSixDQUFTLDJCQUFULEVBQXNDRSxRQUF0QyxLQUFtRCxDQUZwRCw4R0FHSyxJQUFJRixJQUFKLENBQVMsMkJBQVQsRUFBc0NHLE9BQXRDLEVBSEwsRUFHdUQ7QUFDL0NDLGVBQVMsRUFBRSxDQURvQztBQUUvQ0MsV0FBSyxFQUFFLENBQ0g7QUFDSUMsYUFBSyxFQUFFLENBRFg7QUFFSUMsY0FBTSxvSEFDRCxNQURDLEVBQ1EsV0FEUixzR0FFRCxhQUZDLEVBRWUsa0JBRmYsc0dBR0QsYUFIQyxFQUdlLGtCQUhmLFdBRlY7QUFPSUMsWUFBSSxFQUFFO0FBUFYs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LEdBQUd2RixLQUFLLENBQUNqQixZQUFOLENBQW1CVyxPQUFuQixDQUEyQnlELFNBQTNCLENBQ3JCLFVBQUN1QixjQUFEO0FBQUEsZUFDSUEsY0FBYyxDQUFDL0UsU0FBZixJQUE0QmlELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlMEMsYUFEL0M7QUFBQSxPQURxQixDQUF6QixDQUZGLENBTUU7O0FBQ0F4RixXQUFLLENBQUNqQixZQUFOLENBQW1CVyxPQUFuQixDQUEyQjZGLGdCQUEzQixFQUE2QzNGLFdBQTdDLEdBQ0lnRCxNQUFNLENBQUNFLE9BQVAsQ0FBZWxELFdBRG5CO0FBRUg7QUFyWUs7QUFIa0IsQ0FBRCxDQUEvQjsyQkEwWkkyQyxXQUFXLENBQUNrRCxPO0lBYlo5QyxJLHdCQUFBQSxJO0lBQ0FJLFEsd0JBQUFBLFE7SUFDQUMsUyx3QkFBQUEsUztJQUNBQyxpQix3QkFBQUEsaUI7SUFDQUcsdUIsd0JBQUFBLHVCO0lBQ0FFLGtCLHdCQUFBQSxrQjtJQUNBQyxZLHdCQUFBQSxZO0lBQ0FJLGlCLHdCQUFBQSxpQjtJQUNBUSxVLHdCQUFBQSxVO0lBQ0FFLGlCLHdCQUFBQSxpQjtJQUNBRyxlLHdCQUFBQSxlO0lBQ0FJLGEsd0JBQUFBLGE7SUFDQVUsZSx3QkFBQUEsZTs7QUFHVy9DLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmM3MTUyNTYxYjMwNTVlOTI2OWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgc3ViU2Vjb25kcyB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgY2FsZW5kYXIsXHJcbiAgICBwYXR0ZXJuLFxyXG4gICAgdGFza3MsXHJcbiAgICB1c2VyVGFzayxcclxuICAgIHVzZXJUYXNrSW5mbyxcclxufSBmcm9tIFwiLi91c2VyVGFza3NUeXBlXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiB1c2VyVGFzayA9IHtcclxuICAgIHVzZXJUYXNrSW5mbzoge1xyXG4gICAgICAgIGNhbGVuZGFyOiB7XHJcbiAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0RnVsbFllYXIoKV06IHtcclxuICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0TW9udGgoKSArIDFdOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMiBPY3QgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIzIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldERhdGUoKV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwYXR0ZXJuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lOiBcInRlc3RQYXR0ZXJuMVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSWQ6IDIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogXCJ0ZXN0UGF0dGVybjJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcblxyXG4vLyBjb25zdCBkaWZmID0gKG9sZHM6IGFueVtdLCBuZXh0czogYW55W10pID0+ICh7XHJcbi8vICAgICBhZGRzOiBuZXh0cy5maWx0ZXIoKGUpID0+ICFvbGRzLmluY2x1ZGVzKGUpKSxcclxuLy8gICAgIHN1YnM6IG9sZHMuZmlsdGVyKChlKSA9PiAhbmV4dHMuaW5jbHVkZXMoZSkpLFxyXG4vLyB9KTtcclxuXHJcbi8vIOODkeOCv+ODvOODs+abtOaWsOaZguOBq+acquadpeOBq+ioreWumuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs+OBruWGheWuueOCkuabtOaWsOOBmeOCi+OAglxyXG4vLyDmm7TmlrDlr77osaHjga9zdGF0ZS5jYWxlbmRhci50YXNrc1xyXG4vLyDlubTmnIjml6XjgYzmnKrmnaXjgafjgYLjgorjgIHjgYvjgaTjgIHjg5Hjgr/jg7zjg7NJROOBjOWQjOOBmOOCguOBruOCkuWvvuixoeOBq+aWsOOBl+OBhOODkeOCv+ODvOODs+OCkueZu+mMsuOBmeOCi+OAglxyXG5jb25zdCBmdXR1cmVQYXR0ZXJuVXBkYXRlID0gKHN0YXRlOiB1c2VyVGFzaywgdXBkYXRlUGF0dGVybklkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiPT09PWZ1dHVyZVBhdHRlcm5VcGRhdGXjgZPjgZPjgYvjgok9PT09XCIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcikpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3Qgbm93WWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBub3dNb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgY29uc3Qgbm93RGF0ZSA9IHRvZGF5LmdldERhdGUoKTtcclxuXHJcbiAgICBjb25zdCBjaG9pY2VQYXR0ZXJuVGFza3MgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmlsdGVyKGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZShcclxuICAgICAgICAgICAgKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IHVwZGF0ZVBhdHRlcm5JZFxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDjg5Hjgr/jg7zjg7NJROOBq+e0kOS7mOOBj+OCv+OCueOCr+S4gOimp+OBi+OCieOCq+ODrOODs+ODgOODvOOBuOOBrueZu+mMsuaDheWgseOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgY29uc3QgdXBkYXRlVGFza3MgPSBjaG9pY2VQYXR0ZXJuVGFza3MubWFwKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgLy8g44OR44K/44O844Oz44GM6KSH5pWw55m76Yyy44GV44KM44Gm44GE44KL44K/44K544Kv44G444Gu5a++5b+c44Go44GX44Gm44CB6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjgavoqbLlvZPjgZnjgovopoHntKDjgaDjgZHjgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICBjb25zdCB0YXNrUGF0dGVybiA9IHRhc2sucGF0dGVybkluZm8uZmlsdGVyKGZ1bmN0aW9uIChwYXR0ZXJuSW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybkluZm8ucGF0dGVybklEID09IHVwZGF0ZVBhdHRlcm5JZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g6YWN5YiX44Gu44K/44K544Kv44Go5oq95Ye644GX44Gf44OR44K/44O844Oz5oOF5aCx44KS5pW05b2i44GX44Gm6L+U44GZ44CCXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3JkZXI6IHRhc2tQYXR0ZXJuWzBdLm9yZGVyLFxyXG4gICAgICAgICAgICBkZXRhaWw6IHRhc2suZGV0YWlsLFxyXG4gICAgICAgICAgICAvLyBkZXRhaWwyOiB0YXNrLmRldGFpbDIsXHJcbiAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBrZXlNb250aExpc3QgPSAoa2V5WWVhcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGtleURhdGVMaXN0ID0gKGtleVllYXI6IHN0cmluZywga2V5TW9udGg6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXVtwYXJzZUludChrZXlNb250aCldXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGF0ZVRhc2tVcGRhdGUgPSAoXHJcbiAgICAgICAga2V5WWVhcjogc3RyaW5nLFxyXG4gICAgICAgIGtleU1vbnRoOiBzdHJpbmcsXHJcbiAgICAgICAga2V5RGF0ZTogc3RyaW5nXHJcbiAgICApID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV1bcGFyc2VJbnQoa2V5TW9udGgpXVtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleURhdGUpXHJcbiAgICAgICAgICAgIF0uUGF0dGVybklkID09IHVwZGF0ZVBhdHRlcm5JZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildW3BhcnNlSW50KGtleU1vbnRoKV1bXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludChrZXlEYXRlKVxyXG4gICAgICAgICAgICBdLnRhc2tzID0gdXBkYXRlVGFza3M7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09ZGF0ZVRhc2tVcGRhdGU9PT1cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleVllYXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlNb250aCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleURhdGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVUYXNrcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0eXBlIGNhbGVuZGFyUGF0dGVybiA9IHtcclxuICAgICAgICBvcmRlcjogbnVtYmVyO1xyXG4gICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICBbY29udGVudDogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmx1ZzogYm9vbGVhbjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGlmZiA9IChvbGRzOiBjYWxlbmRhclBhdHRlcm5bXSwgbmV4dHM6IGNhbGVuZGFyUGF0dGVybltdKSA9PiAoe1xyXG4gICAgICAgIGFkZHM6IG5leHRzLmZpbHRlcigoZSkgPT4gIW9sZHMuaW5jbHVkZXMoZSkpLFxyXG4gICAgICAgIHN1YnM6IG9sZHMuZmlsdGVyKChlKSA9PiAhbmV4dHMuaW5jbHVkZXMoZSkpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g55m76Yyy44GV44KM44Gm44GE44KL5bm044Gu6YCj5oOz6YWN5YiX44Gu44Kt44O844KS5YWo44Gm5Y+W5b6XXHJcbiAgICBjb25zdCBrZXlZZWFycyA9IE9iamVjdC5rZXlzKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcik7XHJcbiAgICBrZXlZZWFycy5tYXAoKGtleVllYXIpID0+IHtcclxuICAgICAgICBpZiAocGFyc2VJbnQoa2V5WWVhcikgPT0gbm93WWVhcikge1xyXG4gICAgICAgICAgICAvLyDjgoLjgZfku4rlubTjgaDjgaPjgZ/jgonjgIHjga7lh6bnkIZcclxuICAgICAgICAgICAgLy8g55m76Yyy44GV44KM44Gm44GE44KL5pyI44Gu6YCj5oOz6YWN5YiX44Gu44Kt44O844KS5YWo44Gm5Y+W5b6XXHJcbiAgICAgICAgICAgIGNvbnN0IGtleU1vbnRocyA9IGtleU1vbnRoTGlzdChrZXlZZWFyKTtcclxuXHJcbiAgICAgICAgICAgIGtleU1vbnRocy5tYXAoKGtleU1vbnRoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoa2V5TW9udGgpID09IG5vd01vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g44KC44GX5LuK5pyI44Gg44Gj44Gf44KJXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g55m76Yyy44GV44KM44Gm44GE44KL5pel44Gu6YCj5oOz6YWN5YiX44Gu44Kt44O844KS5YWo44Gm5Y+W5b6XXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5RGF0ZXMgPSBrZXlEYXRlTGlzdChrZXlZZWFyLCBrZXlNb250aCk7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5RGF0ZXMubWFwKChrZXlEYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChrZXlEYXRlKSA+IG5vd0RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOCguOBl+aYjuaXpeS7pemZjeOBoOOBo+OBn+OCieeZu+mMsuWGheWuueOCkuabtOaWsOOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRhc2tVcGRhdGUoa2V5WWVhciwga2V5TW9udGgsIGtleURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KGtleURhdGUpID09IG5vd0RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOCguOBl+S7iuaXpeOBoOOBo+OBn+OCieOAgeWkieabtOWIhuOBoOOBkeWPjeaYoOOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yem55CG5pyq5L2c5oiQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkaWZmKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleU1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQoa2V5RGF0ZSldLnRhc2tzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRhc2tzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlQXJyYXkgPSBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5WWVhcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQoa2V5TW9udGgpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChrZXlEYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS50YXNrcy5maWx0ZXIoZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnN1YnMuc29tZSgoc3ViKSA9PiBzdWIgIT0gdGFzayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWRkcy5tYXAoKGFkZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFycmF5LnB1c2goYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChrZXlNb250aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQoa2V5RGF0ZSldLnRhc2tzID0gdXBkYXRlQXJyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoa2V5TW9udGgpID4gbm93TW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDjgoLjgZfmnaXmnIjku6XpmY3jgaDjgaPjgZ/jgonjgIHjgZnjgbnjgabmm7TmlrDjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlEYXRlcyA9IGtleURhdGVMaXN0KGtleVllYXIsIGtleU1vbnRoKTtcclxuICAgICAgICAgICAgICAgICAgICBrZXlEYXRlcy5tYXAoKGtleURhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRhc2tVcGRhdGUoa2V5WWVhciwga2V5TW9udGgsIGtleURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KGtleVllYXIpID4gbm93WWVhcikge1xyXG4gICAgICAgICAgICAvLyDjgoLjgZfmnaXlubTku6XpmY3jgaDjgaPjgZ/jgonjgIHjga7lh6bnkIbjgILlhajjgabmm7TmlrDjgZnjgovjgIJcclxuICAgICAgICAgICAgY29uc3Qga2V5TW9udGhzID0ga2V5TW9udGhMaXN0KGtleVllYXIpO1xyXG4gICAgICAgICAgICBrZXlNb250aHMubWFwKChrZXlNb250aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5RGF0ZXMgPSBrZXlEYXRlTGlzdChrZXlZZWFyLCBrZXlNb250aCk7XHJcbiAgICAgICAgICAgICAgICBrZXlEYXRlcy5tYXAoKGtleURhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlVGFza1VwZGF0ZShrZXlZZWFyLCBrZXlNb250aCwga2V5RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCI9PT09ZnV0dXJlUGF0dGVyblVwZGF0ZeOBk+OBk+OBvuOBpz09PT1cIik7XHJcbn07XHJcblxyXG5jb25zdCB0YXNrc01vZHVsZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidGFza3NcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgaW5pdChzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx1c2VyVGFza0luZm8+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbml0IGRhdGFcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyBzdGF0ZSA9IHsuLi5kYXRhfTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbml0IHN0YXRlLnVzZXJUYXNrSW5mbyDliY1cIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlLnVzZXJUYXNrSW5mbyk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mbyA9IGRhdGE7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5pdCBzdGF0ZS51c2VyVGFza0luZm8g5b6MXCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZS51c2VyVGFza0luZm8pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVnaXN0ZXIoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dXNlclRhc2s+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlID0geyAuLi5zdGF0ZSwgLi4uZGF0YSB9O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RhdGUnKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWxsRGVsZXRlKHN0YXRlOiB1c2VyVGFzaykge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVjayBhbGxEZWxldGVcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBEYXlQbGFu44Gr44Gm44K/44K544Kv44KS44Kv44Oq44OD44Kv44GX44Gf6Zqb44Gr5a6M5LqG44OV44Op44Kw44KSdHJ1ZeOBq+WkieabtOOBmeOCi+WHpueQhuOAguW8leaVsOOBq+OBpuW5tOOAgeaciOOAgeaXpeOAgeOCv+OCueOCr+OBruOCpOODs+ODh+ODg+OCr+OCueeVquWPt+OCkuWPl+OBkeWPluOBo+OBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tDaGVja0NvbXBsZXRlKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcltdPikge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICBdW2FjdGlvbi5wYXlsb2FkWzJdXS50YXNrcy5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAodGFza3MpID0+IHRhc2tzLm9yZGVyID09IGFjdGlvbi5wYXlsb2FkWzNdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVthY3Rpb24ucGF5bG9hZFsxXV1bXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsyXVxyXG4gICAgICAgICAgICBdLnRhc2tzW2luZGV4XS5mbHVnID0gIXN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzBdXHJcbiAgICAgICAgICAgIF1bYWN0aW9uLnBheWxvYWRbMV1dW2FjdGlvbi5wYXlsb2FkWzJdXS50YXNrc1tpbmRleF0uZmx1ZztcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOW8leaVsOOBr3N0YXRl44Go5bm044CB5pyI44CB5pel44CB6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjga4044Gk44Gu5pWw5YCk44GM5qC857SN44GV44KM44Gf6YWN5YiXXHJcbiAgICAgICAgY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIoXHJcbiAgICAgICAgICAgIHN0YXRlOiB1c2VyVGFzayxcclxuICAgICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcltdPlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyBzdGF0ZeOBi+OCiemBuOaKnuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs0lE44GM6Kit5a6a44GV44KM44Gm44GE44KL44K/44K544Kv44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSBhY3Rpb24ucGF5bG9hZFszXVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyDjg5Hjgr/jg7zjg7NJROOBq+e0kOS7mOOBj+OCv+OCueOCr+S4gOimp+OBi+OCieOCq+ODrOODs+ODgOODvOOBuOOBrueZu+mMsuaDheWgseOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICBjb25zdCBUb2RheVRhc2tzID0gY2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8g44OR44K/44O844Oz44GM6KSH5pWw55m76Yyy44GV44KM44Gm44GE44KL44K/44K544Kv44G444Gu5a++5b+c44Go44GX44Gm44CB6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjgavoqbLlvZPjgZnjgovopoHntKDjgaDjgZHjgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQYXR0ZXJuID0gdGFzay5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybkluZm8ucGF0dGVybklEID09IGFjdGlvbi5wYXlsb2FkWzNdO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6YWN5YiX44Gu44K/44K544Kv44Go5oq95Ye644GX44Gf44OR44K/44O844Oz5oOF5aCx44KS5pW05b2i44GX44Gm6L+U44GZ44CCXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiB0YXNrUGF0dGVyblswXS5vcmRlcixcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHRhc2suZGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRldGFpbDI6IHRhc2suZGV0YWlsMixcclxuICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8g44GT44GT44Gr5bm044GM44Gq44GL44Gj44Gf5pmC44Gu5Yem55CG44KS5Yqg44GI44KLXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZFswXSBpbiBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXIpIHtcclxuICAgICAgICAgICAgICAgIC8vIHN0YXRl44GuTW9udGjjga7pgKPmg7PphY3liJfjgavmlrDjgZfjgYTml6Xku5jjga7pgKPmg7PphY3liJfjgpLov73liqDjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgIC8vIOi/veWKoOaDheWgseOBr+W8leaVsOOBruaXpeOBqOOBk+OCjOOBvuOBp+OBruWHpueQhuOBp+S9nOaIkOOBl+OBn+OCq+ODrOODs+ODgOODvOeZu+mMsueUqOaDheWgsVxyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAgICAgXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZFsxXVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkWzJdXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IGFjdGlvbi5wYXlsb2FkWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogVG9kYXlUYXNrcyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHN0YXRl44GuTW9udGjjga7pgKPmg7PphY3liJfjgavmlrDjgZfjgYTml6Xku5jjga7pgKPmg7PphY3liJfjgpLov73liqDjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgIC8vIOi/veWKoOaDheWgseOBr+W8leaVsOOBruaXpeOBqOOBk+OCjOOBvuOBp+OBruWHpueQhuOBp+S9nOaIkOOBl+OBn+OCq+ODrOODs+ODgOODvOeZu+mMsueUqOaDheWgsVxyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dLFxyXG4gICAgICAgICAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZFsxXV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkWzJdXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiBhY3Rpb24ucGF5bG9hZFszXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBUb2RheVRhc2tzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBhY3Rpb24ucGF5bG9hZFszXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgICAgICBdW2FjdGlvbi5wYXlsb2FkWzJdXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44Gu6Kmz57Sw44KS6Kit5a6a44GZ44KL5Yem55CG44CC5byV5pWw44Gu44OG44Kt44K544OI6YWN5YiX44Gr44GvW+WFpeWKm+WGheWuueOAgemAo+aDs+mFjeWIl+OBruOCreODvOOAgeOCv+OCueOCr+OBrumFjeWIl+OCkuaMh+WumuOBmeOCi+aVsOWtl13jgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrRGV0YWlsUmVnaXN0ZXIoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nW10+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1twYXJzZUludChhY3Rpb24ucGF5bG9hZFsyXSldLmRldGFpbCA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1twYXJzZUludChhY3Rpb24ucGF5bG9hZFsyXSldLmRldGFpbCxcclxuICAgICAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZFsxXV06IGFjdGlvbi5wYXlsb2FkWzBdLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44KS6L+95Yqg44GZ44KL5Yem55CG44CC5byV5pWw44Gu44OG44Kt44K544OI6YWN5YiX44Gr44GvW+WFpeWKm+WGheWuueOAgemAo+aDs+mFjeWIl+OBruOCreODvOOAgeOCv+OCueOCr+OBrumFjeWIl+OCkuaMh+WumuOBmeOCi+aVsOWtl13jgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrUmVnaXN0ZXIoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248dGFza3M+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ2lzdGVyVGFzayA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICByZWdpc3RlclRhc2sucGF0dGVybkluZm8ubWFwKChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaG9pY2VQYXR0ZXJuVGFza3MgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnBhdHRlcm5JbmZvLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGFzaykgPT4gdGFzay5wYXR0ZXJuSUQgPT0gY29udGVudC5wYXR0ZXJuSURcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29udGVudC5vcmRlciA9IGNob2ljZVBhdHRlcm5UYXNrcy5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVnaXN0ZXJUYXNrKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLnB1c2gocmVnaXN0ZXJUYXNrKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OBruODkeOCv+ODvOODs+eZu+mMsueKtuazgeOCkuabtOaWsOOBmeOCi+OAglxyXG4gICAgICAgIHRhc2tQYXR0ZXJuVXBkYXRlKFxyXG4gICAgICAgICAgICBzdGF0ZTogdXNlclRhc2ssXHJcbiAgICAgICAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7XHJcbiAgICAgICAgICAgICAgICBuZXdDaGVja2VkOiBudW1iZXJbXTtcclxuICAgICAgICAgICAgICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgICAgIH0+XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIOOBk+OBk+OBp+OChOOCi+OBk+OBqOOBr++8n1xyXG4gICAgICAgICAgICAvLyDjgb7jgZrlvJXmlbDjgavjgr/jgrnjgq/jga7phY3liJfjgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgYzlv4XopoFcclxuICAgICAgICAgICAgLy8g44OR44K/44O844OzSUTjga7phY3liJfjgpLlj5fjgZHlj5bjgovjgIJcclxuICAgICAgICAgICAgLy8g6YWN5YiX44Goc3RhdGXjgpLmr5TovIPjgZfjgabjgIHjgarjgZHjgozjgbDnmbvpjLLjgIJPcmRlcuOBr+acgOWkp+WApCsx44CC6YCG44Gr5YmK6Zmk44GV44KM44Gm44GE44KL44KC44Gu44Gv6Zmk5aSW44CCXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZVBhdHRlcm5JZExpc3QgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICBdLnBhdHRlcm5JbmZvLm1hcCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQucGF0dGVybklEO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGF0ZVBhdHRlcm5JZExpc3RcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlUGF0dGVybklkTGlzdCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSAob2xkczogbnVtYmVyW10sIG5leHRzOiBudW1iZXJbXSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIGFkZHM6IG5leHRzLmZpbHRlcigoZSkgPT4gIW9sZHMuaW5jbHVkZXMoZSkpLFxyXG4gICAgICAgICAgICAgICAgc3Viczogb2xkcy5maWx0ZXIoKGUpID0+ICFuZXh0cy5pbmNsdWRlcyhlKSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkaWZmKHN0YXRlUGF0dGVybklkTGlzdCwgYWN0aW9uLnBheWxvYWQubmV3Q2hlY2tlZCk7XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVBcnJheToge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklEOiBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogbnVtYmVyO1xyXG4gICAgICAgICAgICB9W107XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZeOBi+OCieWJiumZpOWvvuixoeOCkumZpOWkluOBl+OBn+mFjeWIl+OCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnN1YnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQXJyYXkgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQuaW5kZXhcclxuICAgICAgICAgICAgICAgIF0ucGF0dGVybkluZm8uZmlsdGVyKGZ1bmN0aW9uIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZnV0dXJlUGF0dGVyblVwZGF0ZShzdGF0ZSwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc3Vicy5zb21lKChzdWIpID0+IHN1YiAhPSBjb250ZW50LnBhdHRlcm5JRCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUFycmF5ID1cclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbYWN0aW9uLnBheWxvYWQuaW5kZXhdLnBhdHRlcm5JbmZvO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjE6dXBkYXRlQXJyYXlcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZUFycmF5KTtcclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHJlc3VsdC5hZGRzLm1hcCgoYWRkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgTWF4OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8g6L+95Yqg44GV44KM44GfSUTjgYzoqK3lrprjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrUGF0dGVybkluZm8pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza1BhdHRlcm5JbmZvLnBhdHRlcm5JRCA9PSBhZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIGNob2ljZVBhdHRlcm5UYXNrcy5tYXAoKHRhc2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmir3lh7rjgZXjgozjgZ/lkITjgr/jgrnjgq/jga7jg5Hjgr/jg7zjg7NJROOCkuavlOi8g+OBl+OAgeacgOWkp+WApOOCkuWPluW+l+OBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gdGFzay5wYXR0ZXJuSW5mby5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaW5mbykgPT4gaW5mby5wYXR0ZXJuSUQgPT0gYWRkXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBNYXggPCBjb250ZW50LnBhdHRlcm5JRCA/IChNYXggPSBjb250ZW50LnBhdHRlcm5JRCkgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHVzaENvbnRlbnQgPSB7IHBhdHRlcm5JRDogYWRkLCBvcmRlcjogTWF4ICsgMSB9O1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQXJyYXkucHVzaChwdXNoQ29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBmdXR1cmVQYXR0ZXJuVXBkYXRlKHN0YXRlLCBhZGQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIyOnVwZGF0ZUFycmF5XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVBcnJheSk7XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICBdLnBhdHRlcm5JbmZvID0gdXBkYXRlQXJyYXk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jgpLliYrpmaTjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjga/liYrpmaTlr77osaHjgr/jgrnjgq/jga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgYzmoLzntI3jgZXjgozjgabjgYTjgovjgIJcclxuICAgICAgICB0YXNrRGVsZXRlKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgLy8gY29uc3QgZGVsZXRlVGFzayA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5zcGxpY2UoXHJcbiAgICAgICAgICAgIC8vICAgICBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgLy8gICAgIDFcclxuICAgICAgICAgICAgLy8gKTtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlVGFzayA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICAgICAgY29udGVudCxcclxuICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ICE9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGVsZXRlVGFzayk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcyA9IGRlbGV0ZVRhc2s7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jgpLjg5Hjgr/jg7zjg7PjgYvjgonpmaTlpJbjgZnjgovlh6bnkIbjgILlvJXmlbDjga7jgqrjg5bjgrjjgqfjgq/jg4jjgavjga/jg5Hjgr/jg7zjg7NJROOBqOWJiumZpOWvvuixoeOCv+OCueOCr+OBruWQjeensOOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tSZW1vdmVQYXR0ZXJuKFxyXG4gICAgICAgICAgICBzdGF0ZTogdXNlclRhc2ssXHJcbiAgICAgICAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IHBhdHRlcm5JZDogbnVtYmVyOyBkZXRhaWxUaXRsZTogc3RyaW5nIH0+XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbmRJbmRleCgoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQuZGV0YWlsW1wi44K/44K544Kv5ZCNXCJdID09IGFjdGlvbi5wYXlsb2FkLmRldGFpbFRpdGxlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlZFRhc2sgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3NbXHJcbiAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICBdLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAoY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQucGF0dGVybklEICE9IGFjdGlvbi5wYXlsb2FkLnBhdHRlcm5JZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1tpbmRleF0ucGF0dGVybkluZm8gPSBkZWxldGVkVGFzaztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGVsZXRlZFRhc2spO1xyXG4gICAgICAgICAgICAvLyBmdXR1cmVQYXR0ZXJuVXBkYXRlKHN0YXRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOODkeOCv+ODvOODs+OCkui/veWKoOOBmeOCi+WHpueQhuOAguW8leaVsOOBq+OBr+ODkeOCv+ODvOODs+WQjeensOOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHBhdHRlcm5SZWdpc3RlcihzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSB7XHJcbiAgICAgICAgICAgIGxldCBNYXhJZDogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm4ubWFwKChwYXR0ZXJuQ29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybkNvbnRlbnQucGF0dGVybklkID4gTWF4SWRcclxuICAgICAgICAgICAgICAgICAgICA/IChNYXhJZCA9IHBhdHRlcm5Db250ZW50LnBhdHRlcm5JZClcclxuICAgICAgICAgICAgICAgICAgICA6IFwiXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBhZGRQYXR0ZXJuID0ge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiBNYXhJZCArIDEsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuLnB1c2goYWRkUGF0dGVybik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjg5Hjgr/jg7zjg7PjgpLliYrpmaTjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjga/jg5Hjgr/jg7zjg7NJROOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHBhdHRlcm5EZWxldGUoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVQYXR0ZXJuTGlzdCA9IHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIChwYXR0ZXJuQ29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhdHRlcm5Db250ZW50LnBhdHRlcm5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQgIT0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVQYXR0ZXJuTGlzdCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuID0gdXBkYXRlUGF0dGVybkxpc3Q7XHJcblxyXG4gICAgICAgICAgICAvLyDjgr/jgrnjgq/jgajjgqvjg6zjg7Pjg4Djg7zjgavkv53nrqHjgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7PjgpLlhajjgabliYrpmaTjgZnjgovlv4XopoHjgYzjgYLjgotcclxuICAgICAgICAgICAgLy8g44Kr44Os44Oz44OA44O844Gv5pyq5p2l5YiG44Gg44GRXHJcblxyXG4gICAgICAgICAgICAvLyBzdGF0ZS51c2VyVGFza0luZm8udGFza3Pjgavkv53nrqHjgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7Pmg4XloLHjgpLliYrpmaTjgZnjgovjgIJcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZVRhc2tMaXN0ID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlUGF0dGVybkluZm8gPSB0YXNrLnBhdHRlcm5JbmZvLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAodGFza1BhdHRlcm5JbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrUGF0dGVybkluZm8ucGF0dGVybklEICE9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVUYXNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb250ZW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICB9W107XHJcbiAgICAgICAgICAgICAgICB9ID0geyBkZXRhaWw6IHRhc2suZGV0YWlsLCBwYXR0ZXJuSW5mbzogdXBkYXRlUGF0dGVybkluZm8gfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVUYXNrO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlcjp1cGRhdGVUYXNrTGlzdFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlVGFza0xpc3QpO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3MgPSB1cGRhdGVUYXNrTGlzdDtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcuOBruacquadpeWIhuOBq+S/neeuoeOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs+aDheWgseOCkuWJiumZpOOBmeOCi+OAglxyXG4gICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vd1llYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBjb25zdCBub3dNb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgICAgICBjb25zdCBub3dEYXRlID0gdG9kYXkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICBsZXQgdXBkYXRlQ2FsZW5kYXJMaXN0ID0gc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyO1xyXG4gICAgICAgICAgICBjb25zdCBrZXlZZWFycyA9IE9iamVjdC5rZXlzKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcik7XHJcbiAgICAgICAgICAgIGtleVllYXJzLm1hcCgoeWVhcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5TW9udGggPSBPYmplY3Qua2V5cyhcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHllYXIpID4gbm93WWVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWvvuixoeOBjOadpeW5tOS7pemZjeOBp+OBguOCi+WgtOWQiOOAgeWJiumZpOOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgICAgIGtleU1vbnRoLm1hcCgobW9udGgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5RGF0ZSA9IE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KHllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChtb250aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlTGlzdCA9IGtleURhdGUubWFwKChkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KHllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQobW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChkYXRlKV0uUGF0dGVybklkICE9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludCh5ZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1bcGFyc2VJbnQobW9udGgpXVtwYXJzZUludChkYXRlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQobW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gPSB1cGRhdGVMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludCh5ZWFyKSA9PSBub3dZZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5a++6LGh44GM5LuK5bm044Gn44GC44KL5aC05ZCIXHJcbiAgICAgICAgICAgICAgICAgICAga2V5TW9udGgubWFwKChtb250aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlEYXRlID0gT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KG1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQobW9udGgpID4gbm93TW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOadpeaciOS7pemZjeOBruWgtOWQiOOAgeWJiumZpOOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVMaXN0ID0ga2V5RGF0ZS5tYXAoKGRhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludCh5ZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChtb250aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChkYXRlKV0uUGF0dGVybklkICE9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludCh5ZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KG1vbnRoKV1bcGFyc2VJbnQoZGF0ZSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KHllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChtb250aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gPSB1cGRhdGVMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KG1vbnRoKSA9PSBub3dNb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5LuK5pyI44Gu5aC05ZCIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlEYXRlLm1hcCgoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXRlKSA+IG5vd0RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5piO5pel5Lul6ZmN44Gu5aC05ZCI44CB5YmK6Zmk44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludCh5ZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChtb250aCldW3BhcnNlSW50KGRhdGUpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5QYXR0ZXJuSWQgPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHllYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KG1vbnRoKV1bcGFyc2VJbnQoZGF0ZSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjg5Hjgr/jg7zjg7PlkI3np7DjgpLnt6jpm4bjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjga/jg5Hjgr/jg7zjg7NJROOBqOODkeOCv+ODvOODs+WQjeensOOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHBhdHRlcm5OYW1lRWRpdChcclxuICAgICAgICAgICAgc3RhdGU6IHVzZXJUYXNrLFxyXG4gICAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgICAgICAgICAgZWRpdFBhdHRlcm5JZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfT5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gSUTjgavlkIjoh7TjgZnjgovopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgpLlj5blvpdcclxuICAgICAgICAgICAgY29uc3QgZWRpdFBhdHRlcm5JbmRleCA9IHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgIChwYXR0ZXJuQ29udGVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQgPT0gYWN0aW9uLnBheWxvYWQuZWRpdFBhdHRlcm5JZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyDlj5blvpfjgZfjgZ/jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgpLnm67ljbDjgavjgIHlvJXmlbDjga7mlrDjgZfjgYTlkI3np7Djgafmm7TmlrDjgZnjgovjgIJcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm5bZWRpdFBhdHRlcm5JbmRleF0ucGF0dGVybk5hbWUgPVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQucGF0dGVybk5hbWU7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICAgIGluaXQsXHJcbiAgICBSZWdpc3RlcixcclxuICAgIGFsbERlbGV0ZSxcclxuICAgIHRhc2tDaGVja0NvbXBsZXRlLFxyXG4gICAgY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIsXHJcbiAgICB0YXNrRGV0YWlsUmVnaXN0ZXIsXHJcbiAgICB0YXNrUmVnaXN0ZXIsXHJcbiAgICB0YXNrUGF0dGVyblVwZGF0ZSxcclxuICAgIHRhc2tEZWxldGUsXHJcbiAgICB0YXNrUmVtb3ZlUGF0dGVybixcclxuICAgIHBhdHRlcm5SZWdpc3RlcixcclxuICAgIHBhdHRlcm5EZWxldGUsXHJcbiAgICBwYXR0ZXJuTmFtZUVkaXQsXHJcbn0gPSB0YXNrc01vZHVsZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza3NNb2R1bGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=