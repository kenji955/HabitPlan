webpackHotUpdate_N_E("pages/DayPlan",{

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
              if (state.userTaskInfo.calendar[parseInt(keyYear)][parseInt(keyMonth)][parseInt(keyDate)].PatternId == updatePatternId) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJUYXNrSW5mbyIsImNhbGVuZGFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiUGF0dGVybklkIiwidGFza3MiLCJvcmRlciIsImRldGFpbCIsImZsdWciLCJwYXR0ZXJuIiwicGF0dGVybklkIiwicGF0dGVybk5hbWUiLCJwYXR0ZXJuSW5mbyIsInBhdHRlcm5JRCIsImZ1dHVyZVBhdHRlcm5VcGRhdGUiLCJzdGF0ZSIsInVwZGF0ZVBhdHRlcm5JZCIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwidG9kYXkiLCJub3dZZWFyIiwibm93TW9udGgiLCJub3dEYXRlIiwiY2hvaWNlUGF0dGVyblRhc2tzIiwiZmlsdGVyIiwidGFzayIsInNvbWUiLCJ1cGRhdGVUYXNrcyIsIm1hcCIsInRhc2tQYXR0ZXJuIiwia2V5TW9udGhMaXN0Iiwia2V5WWVhciIsInBhcnNlSW50Iiwia2V5RGF0ZUxpc3QiLCJrZXlNb250aCIsImRhdGVUYXNrVXBkYXRlIiwia2V5RGF0ZSIsImRpZmYiLCJvbGRzIiwibmV4dHMiLCJhZGRzIiwiZSIsImluY2x1ZGVzIiwic3VicyIsImtleVllYXJzIiwia2V5TW9udGhzIiwia2V5RGF0ZXMiLCJyZXN1bHQiLCJ1cGRhdGVBcnJheSIsInN1YiIsImFkZCIsInB1c2giLCJ0YXNrc01vZHVsZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiaW5pdCIsImFjdGlvbiIsImRhdGEiLCJwYXlsb2FkIiwiUmVnaXN0ZXIiLCJhbGxEZWxldGUiLCJ0YXNrQ2hlY2tDb21wbGV0ZSIsImluZGV4IiwiZmluZEluZGV4IiwiY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIiLCJUb2RheVRhc2tzIiwidGFza0RldGFpbFJlZ2lzdGVyIiwidGFza1JlZ2lzdGVyIiwicmVnaXN0ZXJUYXNrIiwiY29udGVudCIsImxlbmd0aCIsInRhc2tQYXR0ZXJuVXBkYXRlIiwic3RhdGVQYXR0ZXJuSWRMaXN0IiwibmV3Q2hlY2tlZCIsIk1heCIsInRhc2tQYXR0ZXJuSW5mbyIsImZpbmQiLCJpbmZvIiwicHVzaENvbnRlbnQiLCJ0YXNrRGVsZXRlIiwiZGVsZXRlVGFzayIsInRhc2tSZW1vdmVQYXR0ZXJuIiwiZGV0YWlsVGl0bGUiLCJkZWxldGVkVGFzayIsInBhdHRlcm5SZWdpc3RlciIsIk1heElkIiwicGF0dGVybkNvbnRlbnQiLCJhZGRQYXR0ZXJuIiwicGF0dGVybkRlbGV0ZSIsInVwZGF0ZVBhdHRlcm5MaXN0IiwidXBkYXRlVGFza0xpc3QiLCJ1cGRhdGVQYXR0ZXJuSW5mbyIsInVwZGF0ZVRhc2siLCJkZWxldGVDYWxlbmRhckRhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXRlIiwicGF0dGVybk5hbWVFZGl0IiwiZWRpdFBhdHRlcm5JbmRleCIsImVkaXRQYXR0ZXJuSWQiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQSxJQUFNQSxZQUFzQixHQUFHO0FBQzNCQyxjQUFZLEVBQUU7QUFDVkMsWUFBUSxFQUFFLDhGQUNMLElBQUlDLElBQUosQ0FBUywyQkFBVCxFQUFzQ0MsV0FBdEMsRUFERyxnR0FFQyxJQUFJRCxJQUFKLENBQVMsMkJBQVQsRUFBc0NFLFFBQXRDLEtBQW1ELENBRnBELDhHQUdLLElBQUlGLElBQUosQ0FBUywyQkFBVCxFQUFzQ0csT0FBdEMsRUFITCxFQUd1RDtBQUMvQ0MsZUFBUyxFQUFFLENBRG9DO0FBRS9DQyxXQUFLLEVBQUUsQ0FDSDtBQUNJQyxhQUFLLEVBQUUsQ0FEWDtBQUVJQyxjQUFNLG9IQUNELE1BREMsRUFDUSxXQURSLHNHQUVELGFBRkMsRUFFZSxrQkFGZixzR0FHRCxhQUhDLEVBR2Usa0JBSGYsV0FGVjtBQU9JQyxZQUFJLEVBQUU7QUFQVixPQURHLEVBVUg7QUFDSUYsYUFBSyxFQUFFLENBRFg7QUFFSUMsY0FBTSxzSEFDRCxNQURDLEVBQ1EsV0FEUix1R0FFRCxhQUZDLEVBRWUsa0JBRmYsdUdBR0QsYUFIQyxFQUdlLGtCQUhmLFlBRlY7QUFPSUMsWUFBSSxFQUFFO0FBUFYsT0FWRztBQUZ3QyxLQUh2RCxtR0EwQkssSUFBSVIsSUFBSixDQUFTLDJCQUFULEVBQXNDRyxPQUF0QyxFQTFCTCxFQTBCdUQ7QUFDL0NDLGVBQVMsRUFBRSxDQURvQztBQUUvQ0MsV0FBSyxFQUFFLENBQ0g7QUFDSUMsYUFBSyxFQUFFLENBRFg7QUFFSUMsY0FBTSxzSEFDRCxNQURDLEVBQ1EsV0FEUix1R0FFRCxhQUZDLEVBRWUsa0JBRmYsdUdBR0QsYUFIQyxFQUdlLGtCQUhmLFlBRlY7QUFPSUMsWUFBSSxFQUFFO0FBUFYsT0FERyxFQVVIO0FBQ0lGLGFBQUssRUFBRSxDQURYO0FBRUlDLGNBQU0sc0hBQ0QsTUFEQyxFQUNRLFdBRFIsdUdBRUQsYUFGQyxFQUVlLGtCQUZmLHVHQUdELGFBSEMsRUFHZSxrQkFIZixZQUZWO0FBT0lDLFlBQUksRUFBRTtBQVBWLE9BVkc7QUFGd0MsS0ExQnZELFVBREU7QUFzRFZDLFdBQU8sRUFBRSxDQUNMO0FBQ0lDLGVBQVMsRUFBRSxDQURmO0FBRUlDLGlCQUFXLEVBQUU7QUFGakIsS0FESyxFQUtMO0FBQ0lELGVBQVMsRUFBRSxDQURmO0FBRUlDLGlCQUFXLEVBQUU7QUFGakIsS0FMSyxDQXREQztBQWdFVk4sU0FBSyxFQUFFLENBQ0g7QUFDSUUsWUFBTSxzSEFDRCxNQURDLEVBQ1EsV0FEUix1R0FFRCxTQUZDLEVBRVcsU0FGWCx1R0FHRCxhQUhDLEVBR2Usa0JBSGYsdUdBSUQsYUFKQyxFQUllLGtCQUpmLFlBRFY7QUFPSUssaUJBQVcsRUFBRSxDQUNUO0FBQ0lDLGlCQUFTLEVBQUUsQ0FEZjtBQUVJUCxhQUFLLEVBQUU7QUFGWCxPQURTO0FBUGpCLEtBREcsRUFlSDtBQUNJQyxZQUFNLHNIQUNELE1BREMsRUFDUSxXQURSLHVHQUVELFNBRkMsRUFFVyxTQUZYLHVHQUdELGFBSEMsRUFHZSxrQkFIZix1R0FJRCxhQUpDLEVBSWUsa0JBSmYsWUFEVjtBQU9JSyxpQkFBVyxFQUFFLENBQ1Q7QUFDSUMsaUJBQVMsRUFBRSxDQURmO0FBRUlQLGFBQUssRUFBRTtBQUZYLE9BRFM7QUFQakIsS0FmRyxFQTZCSDtBQUNJQyxZQUFNLHNIQUNELE1BREMsRUFDUSxXQURSLHVHQUVELFNBRkMsRUFFVyxTQUZYLHVHQUdELGFBSEMsRUFHZSxrQkFIZix1R0FJRCxhQUpDLEVBSWUsa0JBSmYsWUFEVjtBQU9JSyxpQkFBVyxFQUFFLENBQ1Q7QUFDSUMsaUJBQVMsRUFBRSxDQURmO0FBRUlQLGFBQUssRUFBRTtBQUZYLE9BRFMsRUFLVDtBQUNJTyxpQkFBUyxFQUFFLENBRGY7QUFFSVAsYUFBSyxFQUFFO0FBRlgsT0FMUztBQVBqQixLQTdCRyxFQStDSDtBQUNJQyxZQUFNLHNIQUNELE1BREMsRUFDUSxXQURSLHVHQUVELFNBRkMsRUFFVyxTQUZYLHVHQUdELGFBSEMsRUFHZSxrQkFIZix1R0FJRCxhQUpDLEVBSWUsa0JBSmYsWUFEVjtBQU9JSyxpQkFBVyxFQUFFLENBQ1Q7QUFDSUMsaUJBQVMsRUFBRSxDQURmO0FBRUlQLGFBQUssRUFBRTtBQUZYLE9BRFM7QUFQakIsS0EvQ0c7QUFoRUc7QUFEYSxDQUEvQixDLENBa0lBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLElBQU1RLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFrQkMsZUFBbEIsRUFBOEM7QUFDdEVDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaO0FBRUFELFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsS0FBSyxDQUFDakIsWUFBTixDQUFtQkMsUUFBL0IsQ0FBWjtBQUNBLE1BQU1zQixLQUFLLEdBQUcsSUFBSXJCLElBQUosRUFBZDtBQUNBLE1BQU1zQixPQUFPLEdBQUdELEtBQUssQ0FBQ3BCLFdBQU4sRUFBaEI7QUFDQSxNQUFNc0IsUUFBUSxHQUFHRixLQUFLLENBQUNuQixRQUFOLEtBQW1CLENBQXBDO0FBQ0EsTUFBTXNCLE9BQU8sR0FBR0gsS0FBSyxDQUFDbEIsT0FBTixFQUFoQjtBQUVBLE1BQU1zQixrQkFBa0IsR0FBR1YsS0FBSyxDQUFDakIsWUFBTixDQUFtQk8sS0FBbkIsQ0FBeUJxQixNQUF6QixDQUFnQyxVQUFVQyxJQUFWLEVBQWdCO0FBQ3ZFLFdBQU9BLElBQUksQ0FBQ2YsV0FBTCxDQUFpQmdCLElBQWpCLENBQ0gsVUFBQ0QsSUFBRDtBQUFBLGFBQVVBLElBQUksQ0FBQ2QsU0FBTCxJQUFrQkcsZUFBNUI7QUFBQSxLQURHLENBQVA7QUFHSCxHQUowQixDQUEzQixDQVRzRSxDQWV0RTs7QUFDQSxNQUFNYSxXQUFXLEdBQUdKLGtCQUFrQixDQUFDSyxHQUFuQixDQUF1QixVQUFDSCxJQUFELEVBQVU7QUFDakQ7QUFDQSxRQUFNSSxXQUFXLEdBQUdKLElBQUksQ0FBQ2YsV0FBTCxDQUFpQmMsTUFBakIsQ0FBd0IsVUFBVWQsV0FBVixFQUF1QjtBQUMvRCxhQUFPQSxXQUFXLENBQUNDLFNBQVosSUFBeUJHLGVBQWhDO0FBQ0gsS0FGbUIsQ0FBcEIsQ0FGaUQsQ0FNakQ7O0FBQ0EsV0FBTztBQUNIVixXQUFLLEVBQUV5QixXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWV6QixLQURuQjtBQUVIQyxZQUFNLEVBQUVvQixJQUFJLENBQUNwQixNQUZWO0FBR0g7QUFDQUMsVUFBSSxFQUFFO0FBSkgsS0FBUDtBQU1ILEdBYm1CLENBQXBCOztBQWVBLE1BQU13QixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxPQUFELEVBQXFCO0FBQ3RDLFdBQU9kLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxLQUFLLENBQUNqQixZQUFOLENBQW1CQyxRQUFuQixDQUE0Qm1DLFFBQVEsQ0FBQ0QsT0FBRCxDQUFwQyxDQUFaLENBQVA7QUFDSCxHQUZEOztBQUdBLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNGLE9BQUQsRUFBa0JHLFFBQWxCLEVBQXVDO0FBQ3ZELFdBQU9qQixNQUFNLENBQUNDLElBQVAsQ0FDSEwsS0FBSyxDQUFDakIsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEJtQyxRQUFRLENBQUNELE9BQUQsQ0FBcEMsRUFBK0NDLFFBQVEsQ0FBQ0UsUUFBRCxDQUF2RCxDQURHLENBQVA7QUFHSCxHQUpEOztBQU1BLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FDbkJKLE9BRG1CLEVBRW5CRyxRQUZtQixFQUduQkUsT0FIbUIsRUFJbEI7QUFDRCxRQUNJdkIsS0FBSyxDQUFDakIsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEJtQyxRQUFRLENBQUNELE9BQUQsQ0FBcEMsRUFBK0NDLFFBQVEsQ0FBQ0UsUUFBRCxDQUF2RCxFQUNJRixRQUFRLENBQUNJLE9BQUQsQ0FEWixFQUVFbEMsU0FGRixJQUVlWSxlQUhuQixFQUlFO0FBQ0VELFdBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCbUMsUUFBUSxDQUFDRCxPQUFELENBQXBDLEVBQStDQyxRQUFRLENBQUNFLFFBQUQsQ0FBdkQsRUFDSUYsUUFBUSxDQUFDSSxPQUFELENBRFosRUFFRWpDLEtBRkYsR0FFVXdCLFdBRlY7QUFHQVosYUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVllLE9BQVo7QUFDQWhCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZa0IsUUFBWjtBQUNBbkIsYUFBTyxDQUFDQyxHQUFSLENBQVlvQixPQUFaO0FBQ0FyQixhQUFPLENBQUNDLEdBQVIsQ0FBWVcsV0FBWjtBQUNIO0FBQ0osR0FuQkQ7O0FBNkJBLE1BQU1VLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLElBQUQsRUFBMEJDLEtBQTFCO0FBQUEsV0FBd0Q7QUFDakVDLFVBQUksRUFBRUQsS0FBSyxDQUFDZixNQUFOLENBQWEsVUFBQ2lCLENBQUQ7QUFBQSxlQUFPLENBQUNILElBQUksQ0FBQ0ksUUFBTCxDQUFjRCxDQUFkLENBQVI7QUFBQSxPQUFiLENBRDJEO0FBRWpFRSxVQUFJLEVBQUVMLElBQUksQ0FBQ2QsTUFBTCxDQUFZLFVBQUNpQixDQUFEO0FBQUEsZUFBTyxDQUFDRixLQUFLLENBQUNHLFFBQU4sQ0FBZUQsQ0FBZixDQUFSO0FBQUEsT0FBWjtBQUYyRCxLQUF4RDtBQUFBLEdBQWIsQ0FyRXNFLENBMEV0RTs7O0FBQ0EsTUFBTUcsUUFBUSxHQUFHM0IsTUFBTSxDQUFDQyxJQUFQLENBQVlMLEtBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJDLFFBQS9CLENBQWpCO0FBQ0ErQyxVQUFRLENBQUNoQixHQUFULENBQWEsVUFBQ0csT0FBRCxFQUFhO0FBQ3RCLFFBQUlDLFFBQVEsQ0FBQ0QsT0FBRCxDQUFSLElBQXFCWCxPQUF6QixFQUFrQztBQUM5QjtBQUNBO0FBQ0EsVUFBTXlCLFNBQVMsR0FBR2YsWUFBWSxDQUFDQyxPQUFELENBQTlCO0FBRUFjLGVBQVMsQ0FBQ2pCLEdBQVYsQ0FBYyxVQUFDTSxRQUFELEVBQWM7QUFDeEIsWUFBSUYsUUFBUSxDQUFDRSxRQUFELENBQVIsSUFBc0JiLFFBQTFCLEVBQW9DO0FBQ2hDO0FBQ0E7QUFDQSxjQUFNeUIsUUFBUSxHQUFHYixXQUFXLENBQUNGLE9BQUQsRUFBVUcsUUFBVixDQUE1QjtBQUNBWSxrQkFBUSxDQUFDbEIsR0FBVCxDQUFhLFVBQUNRLE9BQUQsRUFBYTtBQUN0QixnQkFBSUosUUFBUSxDQUFDSSxPQUFELENBQVIsR0FBb0JkLE9BQXhCLEVBQWlDO0FBQzdCO0FBQ0FhLDRCQUFjLENBQUNKLE9BQUQsRUFBVUcsUUFBVixFQUFvQkUsT0FBcEIsQ0FBZDtBQUNILGFBSEQsTUFHTyxJQUFJSixRQUFRLENBQUNJLE9BQUQsQ0FBUixJQUFxQmQsT0FBekIsRUFBa0M7QUFDckM7QUFDQTtBQUNBLGtCQUNJVCxLQUFLLENBQUNqQixZQUFOLENBQW1CQyxRQUFuQixDQUE0Qm1DLFFBQVEsQ0FBQ0QsT0FBRCxDQUFwQyxFQUNJQyxRQUFRLENBQUNFLFFBQUQsQ0FEWixFQUVFRixRQUFRLENBQUNJLE9BQUQsQ0FGVixFQUVxQmxDLFNBRnJCLElBR0FZLGVBSkosRUFLRTtBQUNFLG9CQUFNaUMsTUFBTSxHQUFHVixJQUFJLENBQ2Z4QixLQUFLLENBQUNqQixZQUFOLENBQW1CQyxRQUFuQixDQUNJbUMsUUFBUSxDQUFDRCxPQUFELENBRFosRUFFRUMsUUFBUSxDQUFDRSxRQUFELENBRlYsRUFFc0JGLFFBQVEsQ0FBQ0ksT0FBRCxDQUY5QixFQUdLakMsS0FKVSxFQUtmd0IsV0FMZSxDQUFuQjtBQU9BLG9CQUFNcUIsV0FBVyxHQUFHbkMsS0FBSyxDQUFDakIsWUFBTixDQUFtQkMsUUFBbkIsQ0FDaEJtQyxRQUFRLENBQUNELE9BQUQsQ0FEUSxFQUVsQkMsUUFBUSxDQUFDRSxRQUFELENBRlUsRUFHaEJGLFFBQVEsQ0FBQ0ksT0FBRCxDQUhRLEVBSWxCakMsS0FKa0IsQ0FJWnFCLE1BSlksQ0FJTCxVQUFVQyxJQUFWLEVBQWdCO0FBQzNCLHlCQUFPc0IsTUFBTSxDQUFDSixJQUFQLENBQVlqQixJQUFaLENBQ0gsVUFBQ3VCLEdBQUQ7QUFBQSwyQkFBU0EsR0FBRyxJQUFJeEIsSUFBaEI7QUFBQSxtQkFERyxDQUFQO0FBR0gsaUJBUm1CLENBQXBCO0FBVUFzQixzQkFBTSxDQUFDUCxJQUFQLENBQVlaLEdBQVosQ0FBZ0IsVUFBQ3NCLEdBQUQsRUFBUztBQUNyQkYsNkJBQVcsQ0FBQ0csSUFBWixDQUFpQkQsR0FBakI7QUFDSCxpQkFGRDtBQUdBckMscUJBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCbUMsUUFBUSxDQUFDRCxPQUFELENBQXBDLEVBQ0lDLFFBQVEsQ0FBQ0UsUUFBRCxDQURaLEVBRUVGLFFBQVEsQ0FBQ0ksT0FBRCxDQUZWLEVBRXFCakMsS0FGckIsR0FFNkI2QyxXQUY3QjtBQUdIO0FBQ0o7QUFDSixXQXRDRDtBQXVDSCxTQTNDRCxNQTJDTyxJQUFJaEIsUUFBUSxDQUFDRSxRQUFELENBQVIsR0FBcUJiLFFBQXpCLEVBQW1DO0FBQ3RDO0FBQ0EsY0FBTXlCLFNBQVEsR0FBR2IsV0FBVyxDQUFDRixPQUFELEVBQVVHLFFBQVYsQ0FBNUI7O0FBQ0FZLG1CQUFRLENBQUNsQixHQUFULENBQWEsVUFBQ1EsT0FBRCxFQUFhO0FBQ3RCRCwwQkFBYyxDQUFDSixPQUFELEVBQVVHLFFBQVYsRUFBb0JFLE9BQXBCLENBQWQ7QUFDSCxXQUZEO0FBR0g7QUFDSixPQW5ERDtBQW9ESCxLQXpERCxNQXlETyxJQUFJSixRQUFRLENBQUNELE9BQUQsQ0FBUixHQUFvQlgsT0FBeEIsRUFBaUM7QUFDcEM7QUFDQSxVQUFNeUIsVUFBUyxHQUFHZixZQUFZLENBQUNDLE9BQUQsQ0FBOUI7O0FBQ0FjLGdCQUFTLENBQUNqQixHQUFWLENBQWMsVUFBQ00sUUFBRCxFQUFjO0FBQ3hCLFlBQU1ZLFFBQVEsR0FBR2IsV0FBVyxDQUFDRixPQUFELEVBQVVHLFFBQVYsQ0FBNUI7QUFDQVksZ0JBQVEsQ0FBQ2xCLEdBQVQsQ0FBYSxVQUFDUSxPQUFELEVBQWE7QUFDdEJELHdCQUFjLENBQUNKLE9BQUQsRUFBVUcsUUFBVixFQUFvQkUsT0FBcEIsQ0FBZDtBQUNILFNBRkQ7QUFHSCxPQUxEO0FBTUg7QUFDSixHQXBFRDtBQXNFQXJCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaO0FBQ0gsQ0FuSkQ7O0FBcUpBLElBQU1vQyxXQUFXLEdBQUdDLG9FQUFXLENBQUM7QUFDNUJDLE1BQUksRUFBRSxPQURzQjtBQUU1QjNELGNBQVksRUFBWkEsWUFGNEI7QUFHNUI0RCxVQUFRLEVBQUU7QUFDTkMsUUFETSxnQkFDRDNDLEtBREMsRUFDZ0I0QyxNQURoQixFQUNxRDtBQUN2RCxVQUFNQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsT0FBcEI7QUFDQTVDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVkwQyxJQUFaLEVBSHVELENBSXZEO0FBQ0E7QUFDQTs7QUFDQTdDLFdBQUssQ0FBQ2pCLFlBQU4sR0FBcUI4RCxJQUFyQixDQVB1RCxDQVF2RDtBQUNBO0FBQ0gsS0FYSztBQVlORSxZQVpNLG9CQVlHL0MsS0FaSCxFQVlvQjRDLE1BWnBCLEVBWXFEO0FBQ3ZELFVBQU1DLElBQUksR0FBR0QsTUFBTSxDQUFDRSxPQUFwQjtBQUVBOUMsV0FBSyxtQ0FBUUEsS0FBUixHQUFrQjZDLElBQWxCLENBQUwsQ0FIdUQsQ0FJdkQ7QUFDQTtBQUNILEtBbEJLO0FBbUJORyxhQW5CTSxxQkFtQkloRCxLQW5CSixFQW1CcUI7QUFDdkJBLFdBQUssR0FBR2xCLFlBQVI7QUFDQW9CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0gsS0F0Qks7QUF1Qk47QUFDQThDLHFCQXhCTSw2QkF3QllqRCxLQXhCWixFQXdCNkI0QyxNQXhCN0IsRUF3QjhEO0FBQ2hFLFVBQU1NLEtBQUssR0FBR2xELEtBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCNEQsTUFBTSxDQUFDRSxPQUFQLENBQWUsQ0FBZixDQUE1QixFQUNWRixNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBRFUsRUFFWkYsTUFBTSxDQUFDRSxPQUFQLENBQWUsQ0FBZixDQUZZLEVBRU94RCxLQUZQLENBRWE2RCxTQUZiLENBR1YsVUFBQzdELEtBQUQ7QUFBQSxlQUFXQSxLQUFLLENBQUNDLEtBQU4sSUFBZXFELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FBMUI7QUFBQSxPQUhVLENBQWQ7QUFLQTVDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZK0MsS0FBWjtBQUNBbEQsV0FBSyxDQUFDakIsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEI0RCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBQTVCLEVBQStDRixNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBQS9DLEVBQ0lGLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FESixFQUVFeEQsS0FGRixDQUVRNEQsS0FGUixFQUVlekQsSUFGZixHQUVzQixDQUFDTyxLQUFLLENBQUNqQixZQUFOLENBQW1CQyxRQUFuQixDQUNuQjRELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FEbUIsRUFFckJGLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FGcUIsRUFFRkYsTUFBTSxDQUFDRSxPQUFQLENBQWUsQ0FBZixDQUZFLEVBRWlCeEQsS0FGakIsQ0FFdUI0RCxLQUZ2QixFQUU4QnpELElBSnJEO0FBS0gsS0FwQ0s7QUFxQ047QUFDQTJELDJCQXRDTSxtQ0F1Q0ZwRCxLQXZDRSxFQXdDRjRDLE1BeENFLEVBeUNKO0FBQ0U7QUFDQSxVQUFNbEMsa0JBQWtCLEdBQUdWLEtBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJPLEtBQW5CLENBQXlCcUIsTUFBekIsQ0FDdkIsVUFBVUMsSUFBVixFQUFnQjtBQUNaLGVBQU9BLElBQUksQ0FBQ2YsV0FBTCxDQUFpQmdCLElBQWpCLENBQ0gsVUFBQ0QsSUFBRDtBQUFBLGlCQUFVQSxJQUFJLENBQUNkLFNBQUwsSUFBa0I4QyxNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBQTVCO0FBQUEsU0FERyxDQUFQO0FBR0gsT0FMc0IsQ0FBM0IsQ0FGRixDQVVFOztBQUNBLFVBQU1PLFVBQVUsR0FBRzNDLGtCQUFrQixDQUFDSyxHQUFuQixDQUF1QixVQUFDSCxJQUFELEVBQVU7QUFDaEQ7QUFDQSxZQUFNSSxXQUFXLEdBQUdKLElBQUksQ0FBQ2YsV0FBTCxDQUFpQmMsTUFBakIsQ0FBd0IsVUFDeENkLFdBRHdDLEVBRTFDO0FBQ0UsaUJBQU9BLFdBQVcsQ0FBQ0MsU0FBWixJQUF5QjhDLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FBaEM7QUFDSCxTQUptQixDQUFwQixDQUZnRCxDQVFoRDs7QUFDQSxlQUFPO0FBQ0h2RCxlQUFLLEVBQUV5QixXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWV6QixLQURuQjtBQUVIQyxnQkFBTSxFQUFFb0IsSUFBSSxDQUFDcEIsTUFGVjtBQUdIO0FBQ0FDLGNBQUksRUFBRTtBQUpILFNBQVA7QUFNSCxPQWZrQixDQUFuQixDQVhGLENBNEJFOztBQUNBLFVBQUltRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLEtBQXFCOUMsS0FBSyxDQUFDakIsWUFBTixDQUFtQkMsUUFBNUMsRUFBc0Q7QUFDbEQ7QUFDQTtBQUNBZ0IsYUFBSyxDQUFDakIsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEI0RCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBQTVCLEVBQ0lGLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FESixvQ0FHTzlDLEtBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCNEQsTUFBTSxDQUFDRSxPQUFQLENBQWUsQ0FBZixDQUE1QixFQUNDRixNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBREQsQ0FIUCxxR0FNS0YsTUFBTSxDQUFDRSxPQUFQLENBQWUsQ0FBZixDQU5MLEVBTXlCO0FBQ2pCekQsbUJBQVMsRUFBRXVELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FETTtBQUVqQnhELGVBQUssRUFBRStEO0FBRlUsU0FOekI7QUFXSCxPQWRELE1BY087QUFDSDtBQUNBO0FBQ0FyRCxhQUFLLENBQUNqQixZQUFOLENBQW1CQyxRQUFuQixDQUE0QjRELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FBNUIsb0NBQ085QyxLQUFLLENBQUNqQixZQUFOLENBQW1CQyxRQUFuQixDQUE0QjRELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FBNUIsQ0FEUCxxR0FFS0YsTUFBTSxDQUFDRSxPQUFQLENBQWUsQ0FBZixDQUZMLGdHQUdTRixNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBSFQsRUFHNkI7QUFDakJ6RCxtQkFBUyxFQUFFdUQsTUFBTSxDQUFDRSxPQUFQLENBQWUsQ0FBZixDQURNO0FBRWpCeEQsZUFBSyxFQUFFK0Q7QUFGVSxTQUg3QjtBQVNILE9BdkRILENBeURFOzs7QUFDQW5ELGFBQU8sQ0FBQ0MsR0FBUixDQUNJSCxLQUFLLENBQUNqQixZQUFOLENBQW1CQyxRQUFuQixDQUE0QjRELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FBNUIsRUFDSUYsTUFBTSxDQUFDRSxPQUFQLENBQWUsQ0FBZixDQURKLEVBRUVGLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FGRixDQURKO0FBS0gsS0F4R0s7QUF5R047QUFDQVEsc0JBMUdNLDhCQTBHYXRELEtBMUdiLEVBMEc4QjRDLE1BMUc5QixFQTBHK0Q7QUFDakU1QyxXQUFLLENBQUNqQixZQUFOLENBQW1CTyxLQUFuQixDQUF5QjZCLFFBQVEsQ0FBQ3lCLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FBRCxDQUFqQyxFQUFzRHRELE1BQXRELG1DQUNPUSxLQUFLLENBQUNqQixZQUFOLENBQW1CTyxLQUFuQixDQUF5QjZCLFFBQVEsQ0FBQ3lCLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLENBQWYsQ0FBRCxDQUFqQyxFQUFzRHRELE1BRDdELHFHQUVLb0QsTUFBTSxDQUFDRSxPQUFQLENBQWUsQ0FBZixDQUZMLEVBRXlCRixNQUFNLENBQUNFLE9BQVAsQ0FBZSxDQUFmLENBRnpCO0FBSUgsS0EvR0s7QUFnSE47QUFDQVMsZ0JBakhNLHdCQWlIT3ZELEtBakhQLEVBaUh3QjRDLE1Bakh4QixFQWlIc0Q7QUFDeEQsVUFBTVksWUFBWSxHQUFHWixNQUFNLENBQUNFLE9BQTVCO0FBQ0FVLGtCQUFZLENBQUMzRCxXQUFiLENBQXlCa0IsR0FBekIsQ0FBNkIsVUFBQzBDLE9BQUQsRUFBYTtBQUN0QyxZQUFNL0Msa0JBQWtCLEdBQUdWLEtBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJPLEtBQW5CLENBQXlCcUIsTUFBekIsQ0FDdkIsVUFBVUMsSUFBVixFQUFnQjtBQUNaLGlCQUFPQSxJQUFJLENBQUNmLFdBQUwsQ0FBaUJnQixJQUFqQixDQUNILFVBQUNELElBQUQ7QUFBQSxtQkFBVUEsSUFBSSxDQUFDZCxTQUFMLElBQWtCMkQsT0FBTyxDQUFDM0QsU0FBcEM7QUFBQSxXQURHLENBQVA7QUFHSCxTQUxzQixDQUEzQjtBQU9BMkQsZUFBTyxDQUFDbEUsS0FBUixHQUFnQm1CLGtCQUFrQixDQUFDZ0QsTUFBbkIsR0FBNEIsQ0FBNUM7QUFDSCxPQVREO0FBVUF4RCxhQUFPLENBQUNDLEdBQVIsQ0FBWXFELFlBQVo7QUFDQXhELFdBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJPLEtBQW5CLENBQXlCZ0QsSUFBekIsQ0FBOEJrQixZQUE5QjtBQUNILEtBL0hLO0FBZ0lOO0FBQ0FHLHFCQWpJTSw2QkFrSUYzRCxLQWxJRSxFQW1JRjRDLE1BbklFLEVBdUlKO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFFQSxVQUFNZ0Isa0JBQWtCLEdBQUc1RCxLQUFLLENBQUNqQixZQUFOLENBQW1CTyxLQUFuQixDQUN2QnNELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlSSxLQURRLEVBRXpCckQsV0FGeUIsQ0FFYmtCLEdBRmEsQ0FFVCxVQUFDMEMsT0FBRCxFQUFhO0FBQzNCLGVBQU9BLE9BQU8sQ0FBQzNELFNBQWY7QUFDSCxPQUowQixDQUEzQjtBQUtBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWXlELGtCQUFaOztBQUNBLFVBQU1wQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxJQUFELEVBQWlCQyxLQUFqQjtBQUFBLGVBQXNDO0FBQy9DQyxjQUFJLEVBQUVELEtBQUssQ0FBQ2YsTUFBTixDQUFhLFVBQUNpQixDQUFEO0FBQUEsbUJBQU8sQ0FBQ0gsSUFBSSxDQUFDSSxRQUFMLENBQWNELENBQWQsQ0FBUjtBQUFBLFdBQWIsQ0FEeUM7QUFFL0NFLGNBQUksRUFBRUwsSUFBSSxDQUFDZCxNQUFMLENBQVksVUFBQ2lCLENBQUQ7QUFBQSxtQkFBTyxDQUFDRixLQUFLLENBQUNHLFFBQU4sQ0FBZUQsQ0FBZixDQUFSO0FBQUEsV0FBWjtBQUZ5QyxTQUF0QztBQUFBLE9BQWI7O0FBSUEsVUFBTU0sTUFBTSxHQUFHVixJQUFJLENBQUNvQyxrQkFBRCxFQUFxQmhCLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlZSxVQUFwQyxDQUFuQjtBQUNBLFVBQUkxQixXQUFKO0FBSUFqQyxhQUFPLENBQUNDLEdBQVIsQ0FBWStCLE1BQVosRUF0QkYsQ0F3QkU7O0FBQ0EsVUFBSUEsTUFBTSxDQUFDSixJQUFQLENBQVk0QixNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCdkIsbUJBQVcsR0FBR25DLEtBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJPLEtBQW5CLENBQ1ZzRCxNQUFNLENBQUNFLE9BQVAsQ0FBZUksS0FETCxFQUVackQsV0FGWSxDQUVBYyxNQUZBLENBRU8sVUFBVThDLE9BQVYsRUFBbUI7QUFDcEM7QUFDQSxpQkFBT3ZCLE1BQU0sQ0FBQ0osSUFBUCxDQUFZakIsSUFBWixDQUFpQixVQUFDdUIsR0FBRDtBQUFBLG1CQUFTQSxHQUFHLElBQUlxQixPQUFPLENBQUMzRCxTQUF4QjtBQUFBLFdBQWpCLENBQVA7QUFDSCxTQUxhLENBQWQ7QUFNSCxPQVBELE1BT087QUFDSHFDLG1CQUFXLEdBQ1BuQyxLQUFLLENBQUNqQixZQUFOLENBQW1CTyxLQUFuQixDQUF5QnNELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlSSxLQUF4QyxFQUErQ3JELFdBRG5EO0FBRUg7O0FBRURLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVlnQyxXQUFaLEVBdENGLENBd0NFOztBQUNBRCxZQUFNLENBQUNQLElBQVAsQ0FBWVosR0FBWixDQUFnQixVQUFDc0IsR0FBRCxFQUFTO0FBQ3JCLFlBQUl5QixHQUFXLEdBQUcsQ0FBbEIsQ0FEcUIsQ0FFckI7O0FBQ0EsWUFBTXBELGtCQUFrQixHQUFHVixLQUFLLENBQUNqQixZQUFOLENBQW1CTyxLQUFuQixDQUF5QnFCLE1BQXpCLENBQ3ZCLFVBQVVDLElBQVYsRUFBZ0I7QUFDWixpQkFBT0EsSUFBSSxDQUFDZixXQUFMLENBQWlCZ0IsSUFBakIsQ0FDSCxVQUFDa0QsZUFBRDtBQUFBLG1CQUNJQSxlQUFlLENBQUNqRSxTQUFoQixJQUE2QnVDLEdBRGpDO0FBQUEsV0FERyxDQUFQO0FBSUgsU0FOc0IsQ0FBM0IsQ0FIcUIsQ0FXckI7O0FBQ0EzQiwwQkFBa0IsQ0FBQ0ssR0FBbkIsQ0FBdUIsVUFBQ0gsSUFBRCxFQUFVO0FBQzdCO0FBQ0EsY0FBSTZDLE9BQU8sR0FBRzdDLElBQUksQ0FBQ2YsV0FBTCxDQUFpQm1FLElBQWpCLENBQ1YsVUFBQ0MsSUFBRDtBQUFBLG1CQUFVQSxJQUFJLENBQUNuRSxTQUFMLElBQWtCdUMsR0FBNUI7QUFBQSxXQURVLENBQWQ7QUFHQXlCLGFBQUcsR0FBR0wsT0FBTyxDQUFDM0QsU0FBZCxHQUEyQmdFLEdBQUcsR0FBR0wsT0FBTyxDQUFDM0QsU0FBekMsR0FBc0QsRUFBdEQ7QUFDSCxTQU5EO0FBUUEsWUFBTW9FLFdBQVcsR0FBRztBQUFFcEUsbUJBQVMsRUFBRXVDLEdBQWI7QUFBa0I5QyxlQUFLLEVBQUV1RSxHQUFHLEdBQUc7QUFBL0IsU0FBcEI7QUFDQTNCLG1CQUFXLENBQUNHLElBQVosQ0FBaUI0QixXQUFqQjtBQUNBbkUsMkJBQW1CLENBQUNDLEtBQUQsRUFBUXFDLEdBQVIsQ0FBbkI7QUFDSCxPQXZCRDtBQXdCQW5DLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVlnQyxXQUFaO0FBRUFuQyxXQUFLLENBQUNqQixZQUFOLENBQW1CTyxLQUFuQixDQUNJc0QsTUFBTSxDQUFDRSxPQUFQLENBQWVJLEtBRG5CLEVBRUVyRCxXQUZGLEdBRWdCc0MsV0FGaEI7QUFHSCxLQTlNSztBQStNTjtBQUNBZ0MsY0FoTk0sc0JBZ05LbkUsS0FoTkwsRUFnTnNCNEMsTUFoTnRCLEVBZ05xRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQU13QixVQUFVLEdBQUdwRSxLQUFLLENBQUNqQixZQUFOLENBQW1CTyxLQUFuQixDQUF5QnFCLE1BQXpCLENBQWdDLFVBQy9DOEMsT0FEK0MsRUFFL0NQLEtBRitDLEVBR2pEO0FBQ0UsZUFBT0EsS0FBSyxJQUFJTixNQUFNLENBQUNFLE9BQXZCO0FBQ0gsT0FMa0IsQ0FBbkI7QUFNQTVDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZaUUsVUFBWjtBQUNBcEUsV0FBSyxDQUFDakIsWUFBTixDQUFtQk8sS0FBbkIsR0FBMkI4RSxVQUEzQjtBQUNILEtBN05LO0FBOE5OO0FBQ0FDLHFCQS9OTSw2QkFnT0ZyRSxLQWhPRSxFQWlPRjRDLE1Bak9FLEVBa09KO0FBQ0UsVUFBTU0sS0FBSyxHQUFHbEQsS0FBSyxDQUFDakIsWUFBTixDQUFtQk8sS0FBbkIsQ0FBeUI2RCxTQUF6QixDQUFtQyxVQUFDTSxPQUFELEVBQWE7QUFDMUQsZUFBT0EsT0FBTyxDQUFDakUsTUFBUixDQUFlLE1BQWYsS0FBMEJvRCxNQUFNLENBQUNFLE9BQVAsQ0FBZXdCLFdBQWhEO0FBQ0gsT0FGYSxDQUFkO0FBR0EsVUFBTUMsV0FBVyxHQUFHdkUsS0FBSyxDQUFDakIsWUFBTixDQUFtQk8sS0FBbkIsQ0FDaEI0RCxLQURnQixFQUVsQnJELFdBRmtCLENBRU5jLE1BRk0sQ0FFQyxVQUFVOEMsT0FBVixFQUFtQjtBQUNwQyxlQUFPQSxPQUFPLENBQUMzRCxTQUFSLElBQXFCOEMsTUFBTSxDQUFDRSxPQUFQLENBQWVuRCxTQUEzQztBQUNILE9BSm1CLENBQXBCO0FBS0FLLFdBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJPLEtBQW5CLENBQXlCNEQsS0FBekIsRUFBZ0NyRCxXQUFoQyxHQUE4QzBFLFdBQTlDO0FBQ0FyRSxhQUFPLENBQUNDLEdBQVIsQ0FBWW9FLFdBQVosRUFWRixDQVdFO0FBQ0gsS0E5T0s7QUErT047QUFDQUMsbUJBaFBNLDJCQWdQVXhFLEtBaFBWLEVBZ1AyQjRDLE1BaFAzQixFQWdQMEQ7QUFDNUQsVUFBSTZCLEtBQWEsR0FBRyxDQUFwQjtBQUNBekUsV0FBSyxDQUFDakIsWUFBTixDQUFtQlcsT0FBbkIsQ0FBMkJxQixHQUEzQixDQUErQixVQUFDMkQsY0FBRCxFQUFvQjtBQUMvQ0Esc0JBQWMsQ0FBQy9FLFNBQWYsR0FBMkI4RSxLQUEzQixHQUNPQSxLQUFLLEdBQUdDLGNBQWMsQ0FBQy9FLFNBRDlCLEdBRU0sRUFGTjtBQUdILE9BSkQ7QUFLQSxVQUFNZ0YsVUFBVSxHQUFHO0FBQ2ZoRixpQkFBUyxFQUFFOEUsS0FBSyxHQUFHLENBREo7QUFFZjdFLG1CQUFXLEVBQUVnRCxNQUFNLENBQUNFO0FBRkwsT0FBbkI7QUFJQTlDLFdBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJXLE9BQW5CLENBQTJCNEMsSUFBM0IsQ0FBZ0NxQyxVQUFoQztBQUNILEtBNVBLO0FBNlBOO0FBQ0FDLGlCQTlQTSx5QkE4UFE1RSxLQTlQUixFQThQeUI0QyxNQTlQekIsRUE4UHdEO0FBQzFELFVBQU1pQyxpQkFBaUIsR0FBRzdFLEtBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJXLE9BQW5CLENBQTJCaUIsTUFBM0IsQ0FDdEIsVUFBQytELGNBQUQsRUFBb0I7QUFDaEI7QUFDQTtBQUNBLGVBQU9BLGNBQWMsQ0FBQy9FLFNBQWYsSUFBNEJpRCxNQUFNLENBQUNFLE9BQTFDO0FBQ0gsT0FMcUIsQ0FBMUI7QUFRQTVDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZMEUsaUJBQVo7QUFDQTdFLFdBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJXLE9BQW5CLEdBQTZCbUYsaUJBQTdCLENBVjBELENBWTFEO0FBQ0E7QUFFQTs7QUFDQSxVQUFJQyxjQUFjLEdBQUc5RSxLQUFLLENBQUNqQixZQUFOLENBQW1CTyxLQUFuQixDQUF5QnlCLEdBQXpCLENBQTZCLFVBQUNILElBQUQsRUFBVTtBQUN4RCxZQUFNbUUsaUJBQWlCLEdBQUduRSxJQUFJLENBQUNmLFdBQUwsQ0FBaUJjLE1BQWpCLENBQ3RCLFVBQUNvRCxlQUFELEVBQXFCO0FBQ2pCLGlCQUFPQSxlQUFlLENBQUNqRSxTQUFoQixJQUE2QjhDLE1BQU0sQ0FBQ0UsT0FBM0M7QUFDSCxTQUhxQixDQUExQjtBQUtBLFlBQU1rQyxVQVFMLEdBQUc7QUFBRXhGLGdCQUFNLEVBQUVvQixJQUFJLENBQUNwQixNQUFmO0FBQXVCSyxxQkFBVyxFQUFFa0Y7QUFBcEMsU0FSSjtBQVNBLGVBQU9DLFVBQVA7QUFDSCxPQWhCb0IsQ0FBckI7QUFpQkE5RSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWTJFLGNBQVo7QUFDQTlFLFdBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJPLEtBQW5CLEdBQTJCd0YsY0FBM0IsQ0FuQzBELENBcUMxRDs7QUFDQSxVQUFNeEUsS0FBSyxHQUFHLElBQUlyQixJQUFKLEVBQWQ7QUFDQSxVQUFNc0IsT0FBTyxHQUFHRCxLQUFLLENBQUNwQixXQUFOLEVBQWhCO0FBQ0EsVUFBTXNCLFFBQVEsR0FBR0YsS0FBSyxDQUFDbkIsUUFBTixLQUFtQixDQUFwQztBQUNBLFVBQU1zQixPQUFPLEdBQUdILEtBQUssQ0FBQ2xCLE9BQU4sRUFBaEI7QUFDQSxVQUFNMkMsUUFBUSxHQUFHM0IsTUFBTSxDQUFDQyxJQUFQLENBQVlMLEtBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJDLFFBQS9CLENBQWpCOztBQUNBLFVBQU1pRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQ3ZCQyxJQUR1QixFQUV2QkMsS0FGdUIsRUFHdkJDLElBSHVCLEVBSXRCO0FBQ0QsWUFDSXBGLEtBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJDLFFBQW5CLENBQTRCbUMsUUFBUSxDQUFDK0QsSUFBRCxDQUFwQyxFQUNJL0QsUUFBUSxDQUFDZ0UsS0FBRCxDQURaLEVBRUVoRSxRQUFRLENBQUNpRSxJQUFELENBRlYsRUFFa0IvRixTQUZsQixJQUUrQnVELE1BQU0sQ0FBQ0UsT0FIMUMsRUFJRTtBQUNFLGlCQUFPOUMsS0FBSyxDQUFDakIsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEJtQyxRQUFRLENBQUMrRCxJQUFELENBQXBDLEVBQ0gvRCxRQUFRLENBQUNnRSxLQUFELENBREwsRUFFTGhFLFFBQVEsQ0FBQ2lFLElBQUQsQ0FGSCxDQUFQO0FBR0g7QUFDSixPQWREOztBQWVBckQsY0FBUSxDQUFDaEIsR0FBVCxDQUFhLFVBQUNtRSxJQUFELEVBQVU7QUFDbkIsWUFBTTdELFFBQVEsR0FBR2pCLE1BQU0sQ0FBQ0MsSUFBUCxDQUNiTCxLQUFLLENBQUNqQixZQUFOLENBQW1CQyxRQUFuQixDQUE0Qm1DLFFBQVEsQ0FBQytELElBQUQsQ0FBcEMsQ0FEYSxDQUFqQjs7QUFHQSxZQUFJL0QsUUFBUSxDQUFDK0QsSUFBRCxDQUFSLEdBQWlCM0UsT0FBckIsRUFBOEI7QUFDMUI7QUFDQWMsa0JBQVEsQ0FBQ04sR0FBVCxDQUFhLFVBQUNvRSxLQUFELEVBQVc7QUFDcEIsZ0JBQU01RCxPQUFPLEdBQUduQixNQUFNLENBQUNDLElBQVAsQ0FDWkwsS0FBSyxDQUFDakIsWUFBTixDQUFtQkMsUUFBbkIsQ0FBNEJtQyxRQUFRLENBQUMrRCxJQUFELENBQXBDLEVBQ0kvRCxRQUFRLENBQUNnRSxLQUFELENBRFosQ0FEWSxDQUFoQjtBQUtBNUQsbUJBQU8sQ0FBQ1IsR0FBUixDQUFZLFVBQUNxRSxJQUFELEVBQVU7QUFDbEJILGdDQUFrQixDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBY0MsSUFBZCxDQUFsQjtBQUNILGFBRkQ7QUFHSCxXQVREO0FBVUgsU0FaRCxNQVlPLElBQUlqRSxRQUFRLENBQUMrRCxJQUFELENBQVIsSUFBa0IzRSxPQUF0QixFQUErQjtBQUNsQztBQUNBYyxrQkFBUSxDQUFDTixHQUFULENBQWEsVUFBQ29FLEtBQUQsRUFBVztBQUNwQixnQkFBTTVELE9BQU8sR0FBR25CLE1BQU0sQ0FBQ0MsSUFBUCxDQUNaTCxLQUFLLENBQUNqQixZQUFOLENBQW1CQyxRQUFuQixDQUE0Qm1DLFFBQVEsQ0FBQytELElBQUQsQ0FBcEMsRUFDSS9ELFFBQVEsQ0FBQ2dFLEtBQUQsQ0FEWixDQURZLENBQWhCOztBQUtBLGdCQUFJaEUsUUFBUSxDQUFDZ0UsS0FBRCxDQUFSLEdBQWtCM0UsUUFBdEIsRUFBZ0M7QUFDNUI7QUFDQU4scUJBQU8sQ0FBQ0MsR0FBUixDQUFZb0IsT0FBWjtBQUNBQSxxQkFBTyxDQUFDUixHQUFSLENBQVksVUFBQ3FFLElBQUQsRUFBVTtBQUNsQkgsa0NBQWtCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFjQyxJQUFkLENBQWxCO0FBQ0gsZUFGRDtBQUdILGFBTkQsTUFNTyxJQUFJakUsUUFBUSxDQUFDZ0UsS0FBRCxDQUFSLElBQW1CM0UsUUFBdkIsRUFBaUM7QUFDcEM7QUFDQWUscUJBQU8sQ0FBQ1IsR0FBUixDQUFZLFVBQUNxRSxJQUFELEVBQVU7QUFDbEIsb0JBQUlqRSxRQUFRLENBQUNpRSxJQUFELENBQVIsR0FBaUIzRSxPQUFyQixFQUE4QjtBQUMxQjtBQUNBd0Usb0NBQWtCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFjQyxJQUFkLENBQWxCO0FBQ0g7QUFDSixlQUxEO0FBTUg7QUFDSixXQXJCRDtBQXNCSDtBQUNKLE9BekNEO0FBMENILEtBbFdLO0FBbVdOO0FBQ0FDLG1CQXBXTSwyQkFxV0ZyRixLQXJXRSxFQXNXRjRDLE1BdFdFLEVBMFdKO0FBQ0U7QUFDQSxVQUFNMEMsZ0JBQWdCLEdBQUd0RixLQUFLLENBQUNqQixZQUFOLENBQW1CVyxPQUFuQixDQUEyQnlELFNBQTNCLENBQ3JCLFVBQUN1QixjQUFEO0FBQUEsZUFDSUEsY0FBYyxDQUFDL0UsU0FBZixJQUE0QmlELE1BQU0sQ0FBQ0UsT0FBUCxDQUFleUMsYUFEL0M7QUFBQSxPQURxQixDQUF6QixDQUZGLENBTUU7O0FBQ0F2RixXQUFLLENBQUNqQixZQUFOLENBQW1CVyxPQUFuQixDQUEyQjRGLGdCQUEzQixFQUE2QzFGLFdBQTdDLEdBQ0lnRCxNQUFNLENBQUNFLE9BQVAsQ0FBZWxELFdBRG5CO0FBRUg7QUFuWEs7QUFIa0IsQ0FBRCxDQUEvQjsyQkF3WUkyQyxXQUFXLENBQUNpRCxPO0lBYlo3QyxJLHdCQUFBQSxJO0lBQ0FJLFEsd0JBQUFBLFE7SUFDQUMsUyx3QkFBQUEsUztJQUNBQyxpQix3QkFBQUEsaUI7SUFDQUcsdUIsd0JBQUFBLHVCO0lBQ0FFLGtCLHdCQUFBQSxrQjtJQUNBQyxZLHdCQUFBQSxZO0lBQ0FJLGlCLHdCQUFBQSxpQjtJQUNBUSxVLHdCQUFBQSxVO0lBQ0FFLGlCLHdCQUFBQSxpQjtJQUNBRyxlLHdCQUFBQSxlO0lBQ0FJLGEsd0JBQUFBLGE7SUFDQVMsZSx3QkFBQUEsZTs7QUFHVzlDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0RheVBsYW4uMTNlYmFlOGMxNGNhZjQ1OTMxMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgc3ViU2Vjb25kcyB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgY2FsZW5kYXIsXHJcbiAgICBwYXR0ZXJuLFxyXG4gICAgdGFza3MsXHJcbiAgICB1c2VyVGFzayxcclxuICAgIHVzZXJUYXNrSW5mbyxcclxufSBmcm9tIFwiLi91c2VyVGFza3NUeXBlXCI7XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiB1c2VyVGFzayA9IHtcclxuICAgIHVzZXJUYXNrSW5mbzoge1xyXG4gICAgICAgIGNhbGVuZGFyOiB7XHJcbiAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0RnVsbFllYXIoKV06IHtcclxuICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjIgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0TW9udGgoKSArIDFdOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMiBPY3QgMjAyMCAwMjowMDowMFwiKS5nZXREYXRlKCldOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIzIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldERhdGUoKV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwYXR0ZXJuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JZDogMSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lOiBcInRlc3RQYXR0ZXJuMVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSWQ6IDIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuTmFtZTogXCJ0ZXN0UGF0dGVybjJcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcImRlZmFsdXRcIl06IFwiZGVmYWx1dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybkluZm86IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcblxyXG4vLyBjb25zdCBkaWZmID0gKG9sZHM6IGFueVtdLCBuZXh0czogYW55W10pID0+ICh7XHJcbi8vICAgICBhZGRzOiBuZXh0cy5maWx0ZXIoKGUpID0+ICFvbGRzLmluY2x1ZGVzKGUpKSxcclxuLy8gICAgIHN1YnM6IG9sZHMuZmlsdGVyKChlKSA9PiAhbmV4dHMuaW5jbHVkZXMoZSkpLFxyXG4vLyB9KTtcclxuXHJcbi8vIOODkeOCv+ODvOODs+abtOaWsOaZguOBq+acquadpeOBq+ioreWumuOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs+OBruWGheWuueOCkuabtOaWsOOBmeOCi+OAglxyXG4vLyDmm7TmlrDlr77osaHjga9zdGF0ZS5jYWxlbmRhci50YXNrc1xyXG4vLyDlubTmnIjml6XjgYzmnKrmnaXjgafjgYLjgorjgIHjgYvjgaTjgIHjg5Hjgr/jg7zjg7NJROOBjOWQjOOBmOOCguOBruOCkuWvvuixoeOBq+aWsOOBl+OBhOODkeOCv+ODvOODs+OCkueZu+mMsuOBmeOCi+OAglxyXG5jb25zdCBmdXR1cmVQYXR0ZXJuVXBkYXRlID0gKHN0YXRlOiB1c2VyVGFzaywgdXBkYXRlUGF0dGVybklkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiPT09PWZ1dHVyZVBhdHRlcm5VcGRhdGXjgZPjgZPjgYvjgok9PT09XCIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcikpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3Qgbm93WWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBub3dNb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xyXG4gICAgY29uc3Qgbm93RGF0ZSA9IHRvZGF5LmdldERhdGUoKTtcclxuXHJcbiAgICBjb25zdCBjaG9pY2VQYXR0ZXJuVGFza3MgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmlsdGVyKGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZShcclxuICAgICAgICAgICAgKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IHVwZGF0ZVBhdHRlcm5JZFxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDjg5Hjgr/jg7zjg7NJROOBq+e0kOS7mOOBj+OCv+OCueOCr+S4gOimp+OBi+OCieOCq+ODrOODs+ODgOODvOOBuOOBrueZu+mMsuaDheWgseOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgY29uc3QgdXBkYXRlVGFza3MgPSBjaG9pY2VQYXR0ZXJuVGFza3MubWFwKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgLy8g44OR44K/44O844Oz44GM6KSH5pWw55m76Yyy44GV44KM44Gm44GE44KL44K/44K544Kv44G444Gu5a++5b+c44Go44GX44Gm44CB6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjgavoqbLlvZPjgZnjgovopoHntKDjgaDjgZHjgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICBjb25zdCB0YXNrUGF0dGVybiA9IHRhc2sucGF0dGVybkluZm8uZmlsdGVyKGZ1bmN0aW9uIChwYXR0ZXJuSW5mbykge1xyXG4gICAgICAgICAgICByZXR1cm4gcGF0dGVybkluZm8ucGF0dGVybklEID09IHVwZGF0ZVBhdHRlcm5JZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g6YWN5YiX44Gu44K/44K544Kv44Go5oq95Ye644GX44Gf44OR44K/44O844Oz5oOF5aCx44KS5pW05b2i44GX44Gm6L+U44GZ44CCXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgb3JkZXI6IHRhc2tQYXR0ZXJuWzBdLm9yZGVyLFxyXG4gICAgICAgICAgICBkZXRhaWw6IHRhc2suZGV0YWlsLFxyXG4gICAgICAgICAgICAvLyBkZXRhaWwyOiB0YXNrLmRldGFpbDIsXHJcbiAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBrZXlNb250aExpc3QgPSAoa2V5WWVhcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGtleURhdGVMaXN0ID0gKGtleVllYXI6IHN0cmluZywga2V5TW9udGg6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXVtwYXJzZUludChrZXlNb250aCldXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGF0ZVRhc2tVcGRhdGUgPSAoXHJcbiAgICAgICAga2V5WWVhcjogc3RyaW5nLFxyXG4gICAgICAgIGtleU1vbnRoOiBzdHJpbmcsXHJcbiAgICAgICAga2V5RGF0ZTogc3RyaW5nXHJcbiAgICApID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV1bcGFyc2VJbnQoa2V5TW9udGgpXVtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleURhdGUpXHJcbiAgICAgICAgICAgIF0uUGF0dGVybklkID09IHVwZGF0ZVBhdHRlcm5JZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildW3BhcnNlSW50KGtleU1vbnRoKV1bXHJcbiAgICAgICAgICAgICAgICBwYXJzZUludChrZXlEYXRlKVxyXG4gICAgICAgICAgICBdLnRhc2tzID0gdXBkYXRlVGFza3M7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09ZGF0ZVRhc2tVcGRhdGU9PT1cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleVllYXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlNb250aCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleURhdGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVUYXNrcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0eXBlIGNhbGVuZGFyUGF0dGVybiA9IHtcclxuICAgICAgICBvcmRlcjogbnVtYmVyO1xyXG4gICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICBbY29udGVudDogc3RyaW5nXTogc3RyaW5nO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmx1ZzogYm9vbGVhbjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGlmZiA9IChvbGRzOiBjYWxlbmRhclBhdHRlcm5bXSwgbmV4dHM6IGNhbGVuZGFyUGF0dGVybltdKSA9PiAoe1xyXG4gICAgICAgIGFkZHM6IG5leHRzLmZpbHRlcigoZSkgPT4gIW9sZHMuaW5jbHVkZXMoZSkpLFxyXG4gICAgICAgIHN1YnM6IG9sZHMuZmlsdGVyKChlKSA9PiAhbmV4dHMuaW5jbHVkZXMoZSkpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g55m76Yyy44GV44KM44Gm44GE44KL5bm044Gu6YCj5oOz6YWN5YiX44Gu44Kt44O844KS5YWo44Gm5Y+W5b6XXHJcbiAgICBjb25zdCBrZXlZZWFycyA9IE9iamVjdC5rZXlzKHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcik7XHJcbiAgICBrZXlZZWFycy5tYXAoKGtleVllYXIpID0+IHtcclxuICAgICAgICBpZiAocGFyc2VJbnQoa2V5WWVhcikgPT0gbm93WWVhcikge1xyXG4gICAgICAgICAgICAvLyDjgoLjgZfku4rlubTjgaDjgaPjgZ/jgonjgIHjga7lh6bnkIZcclxuICAgICAgICAgICAgLy8g55m76Yyy44GV44KM44Gm44GE44KL5pyI44Gu6YCj5oOz6YWN5YiX44Gu44Kt44O844KS5YWo44Gm5Y+W5b6XXHJcbiAgICAgICAgICAgIGNvbnN0IGtleU1vbnRocyA9IGtleU1vbnRoTGlzdChrZXlZZWFyKTtcclxuXHJcbiAgICAgICAgICAgIGtleU1vbnRocy5tYXAoKGtleU1vbnRoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoa2V5TW9udGgpID09IG5vd01vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g44KC44GX5LuK5pyI44Gg44Gj44Gf44KJXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g55m76Yyy44GV44KM44Gm44GE44KL5pel44Gu6YCj5oOz6YWN5YiX44Gu44Kt44O844KS5YWo44Gm5Y+W5b6XXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5RGF0ZXMgPSBrZXlEYXRlTGlzdChrZXlZZWFyLCBrZXlNb250aCk7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5RGF0ZXMubWFwKChrZXlEYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChrZXlEYXRlKSA+IG5vd0RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOCguOBl+aYjuaXpeS7pemZjeOBoOOBo+OBn+OCieeZu+mMsuWGheWuueOCkuabtOaWsOOBmeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRhc2tVcGRhdGUoa2V5WWVhciwga2V5TW9udGgsIGtleURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KGtleURhdGUpID09IG5vd0RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOCguOBl+S7iuaXpeOBoOOBo+OBn+OCieOAgeWkieabtOWIhuOBoOOBkeWPjeaYoOOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yem55CG5pyq5L2c5oiQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5TW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChrZXlEYXRlKV0uUGF0dGVybklkID09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGF0dGVybklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkaWZmKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChrZXlZZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGtleU1vbnRoKV1bcGFyc2VJbnQoa2V5RGF0ZSldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGFza3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVRhc2tzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVBcnJheSA9IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5WWVhcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGtleU1vbnRoKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleURhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS50YXNrcy5maWx0ZXIoZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zdWJzLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3ViKSA9PiBzdWIgIT0gdGFza1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWRkcy5tYXAoKGFkZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcnJheS5wdXNoKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5TW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChrZXlEYXRlKV0udGFza3MgPSB1cGRhdGVBcnJheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChrZXlNb250aCkgPiBub3dNb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOOCguOBl+adpeaciOS7pemZjeOBoOOBo+OBn+OCieOAgeOBmeOBueOBpuabtOaWsOOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleURhdGVzID0ga2V5RGF0ZUxpc3Qoa2V5WWVhciwga2V5TW9udGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGtleURhdGVzLm1hcCgoa2V5RGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlVGFza1VwZGF0ZShrZXlZZWFyLCBrZXlNb250aCwga2V5RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoa2V5WWVhcikgPiBub3dZZWFyKSB7XHJcbiAgICAgICAgICAgIC8vIOOCguOBl+adpeW5tOS7pemZjeOBoOOBo+OBn+OCieOAgeOBruWHpueQhuOAguWFqOOBpuabtOaWsOOBmeOCi+OAglxyXG4gICAgICAgICAgICBjb25zdCBrZXlNb250aHMgPSBrZXlNb250aExpc3Qoa2V5WWVhcik7XHJcbiAgICAgICAgICAgIGtleU1vbnRocy5tYXAoKGtleU1vbnRoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlEYXRlcyA9IGtleURhdGVMaXN0KGtleVllYXIsIGtleU1vbnRoKTtcclxuICAgICAgICAgICAgICAgIGtleURhdGVzLm1hcCgoa2V5RGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVUYXNrVXBkYXRlKGtleVllYXIsIGtleU1vbnRoLCBrZXlEYXRlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIj09PT1mdXR1cmVQYXR0ZXJuVXBkYXRl44GT44GT44G+44GnPT09PVwiKTtcclxufTtcclxuXHJcbmNvbnN0IHRhc2tzTW9kdWxlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJ0YXNrc1wiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBpbml0KHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHVzZXJUYXNrSW5mbz4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgZGF0YVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHN0YXRlID0gey4uLmRhdGF9O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluaXQgc3RhdGUudXNlclRhc2tJbmZvIOWJjVwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUudXNlclRhc2tJbmZvKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvID0gZGF0YTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbml0IHN0YXRlLnVzZXJUYXNrSW5mbyDlvoxcIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlLnVzZXJUYXNrSW5mbyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZWdpc3RlcihzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx1c2VyVGFzaz4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCAuLi5kYXRhIH07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGF0ZScpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbGxEZWxldGUoc3RhdGU6IHVzZXJUYXNrKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIGFsbERlbGV0ZVwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIERheVBsYW7jgavjgabjgr/jgrnjgq/jgpLjgq/jg6rjg4Pjgq/jgZfjgZ/pmpvjgavlrozkuobjg5Xjg6njgrDjgpJ0cnVl44Gr5aSJ5pu044GZ44KL5Yem55CG44CC5byV5pWw44Gr44Gm5bm044CB5pyI44CB5pel44CB44K/44K544Kv44Gu44Kk44Oz44OH44OD44Kv44K555Wq5Y+344KS5Y+X44GR5Y+W44Gj44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza0NoZWNrQ29tcGxldGUoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyW10+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgIF1bYWN0aW9uLnBheWxvYWRbMl1dLnRhc2tzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgICh0YXNrcykgPT4gdGFza3Mub3JkZXIgPT0gYWN0aW9uLnBheWxvYWRbM11cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW2FjdGlvbi5wYXlsb2FkWzFdXVtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzJdXHJcbiAgICAgICAgICAgIF0udGFza3NbaW5kZXhdLmZsdWcgPSAhc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMF1cclxuICAgICAgICAgICAgXVthY3Rpb24ucGF5bG9hZFsxXV1bYWN0aW9uLnBheWxvYWRbMl1dLnRhc2tzW2luZGV4XS5mbHVnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5byV5pWw44Gvc3RhdGXjgajlubTjgIHmnIjjgIHml6XjgIHpgbjmip7jgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7NJROOBrjTjgaTjga7mlbDlgKTjgYzmoLzntI3jgZXjgozjgZ/phY3liJdcclxuICAgICAgICBjYWxlbmRhclBhdHRlcm5SZWdpc3RlcihcclxuICAgICAgICAgICAgc3RhdGU6IHVzZXJUYXNrLFxyXG4gICAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyW10+XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIHN0YXRl44GL44KJ6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjgYzoqK3lrprjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IGFjdGlvbi5wYXlsb2FkWzNdXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOODkeOCv+ODvOODs0lE44Gr57SQ5LuY44GP44K/44K544Kv5LiA6Kan44GL44KJ44Kr44Os44Oz44OA44O844G444Gu55m76Yyy5oOF5aCx44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IFRvZGF5VGFza3MgPSBjaG9pY2VQYXR0ZXJuVGFza3MubWFwKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDjg5Hjgr/jg7zjg7PjgYzopIfmlbDnmbvpjLLjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgbjjga7lr77lv5zjgajjgZfjgabjgIHpgbjmip7jgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7NJROOBq+ipsuW9k+OBmeOCi+imgee0oOOBoOOBkeOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1BhdHRlcm4gPSB0YXNrLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybkluZm9cclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuSW5mby5wYXR0ZXJuSUQgPT0gYWN0aW9uLnBheWxvYWRbM107XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDphY3liJfjga7jgr/jgrnjgq/jgajmir3lh7rjgZfjgZ/jg5Hjgr/jg7zjg7Pmg4XloLHjgpLmlbTlvaLjgZfjgabov5TjgZnjgIJcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHRhc2tQYXR0ZXJuWzBdLm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogdGFzay5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGV0YWlsMjogdGFzay5kZXRhaWwyLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDjgZPjgZPjgavlubTjgYzjgarjgYvjgaPjgZ/mmYLjga7lh6bnkIbjgpLliqDjgYjjgotcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkWzBdIGluIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcikge1xyXG4gICAgICAgICAgICAgICAgLy8gc3RhdGXjga5Nb250aOOBrumAo+aDs+mFjeWIl+OBq+aWsOOBl+OBhOaXpeS7mOOBrumAo+aDs+mFjeWIl+OCkui/veWKoOOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgLy8g6L+95Yqg5oOF5aCx44Gv5byV5pWw44Gu5pel44Go44GT44KM44G+44Gn44Gu5Yem55CG44Gn5L2c5oiQ44GX44Gf44Kr44Os44Oz44OA44O855m76Yyy55So5oOF5aCxXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgICAgICBdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMl1dOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogYWN0aW9uLnBheWxvYWRbM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBUb2RheVRhc2tzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gc3RhdGXjga5Nb250aOOBrumAo+aDs+mFjeWIl+OBq+aWsOOBl+OBhOaXpeS7mOOBrumAo+aDs+mFjeWIl+OCkui/veWKoOOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgLy8g6L+95Yqg5oOF5aCx44Gv5byV5pWw44Gu5pel44Go44GT44KM44G+44Gn44Gu5Yem55CG44Gn5L2c5oiQ44GX44Gf44Kr44Os44Oz44OA44O855m76Yyy55So5oOF5aCxXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkWzFdXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMl1dOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IGFjdGlvbi5wYXlsb2FkWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFRvZGF5VGFza3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGFjdGlvbi5wYXlsb2FkWzNdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgICAgIF1bYWN0aW9uLnBheWxvYWRbMl1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jga7oqbPntLDjgpLoqK3lrprjgZnjgovlh6bnkIbjgILlvJXmlbDjga7jg4bjgq3jgrnjg4jphY3liJfjgavjga9b5YWl5Yqb5YaF5a6544CB6YCj5oOz6YWN5YiX44Gu44Kt44O844CB44K/44K544Kv44Gu6YWN5YiX44KS5oyH5a6a44GZ44KL5pWw5a2XXeOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tEZXRhaWxSZWdpc3RlcihzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KGFjdGlvbi5wYXlsb2FkWzJdKV0uZGV0YWlsID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KGFjdGlvbi5wYXlsb2FkWzJdKV0uZGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkWzFdXTogYWN0aW9uLnBheWxvYWRbMF0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jgpLov73liqDjgZnjgovlh6bnkIbjgILlvJXmlbDjga7jg4bjgq3jgrnjg4jphY3liJfjgavjga9b5YWl5Yqb5YaF5a6544CB6YCj5oOz6YWN5YiX44Gu44Kt44O844CB44K/44K544Kv44Gu6YWN5YiX44KS5oyH5a6a44GZ44KL5pWw5a2XXeOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tSZWdpc3RlcihzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx0YXNrcz4pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVnaXN0ZXJUYXNrID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyVGFzay5wYXR0ZXJuSW5mby5tYXAoKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSBjb250ZW50LnBhdHRlcm5JRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50Lm9yZGVyID0gY2hvaWNlUGF0dGVyblRhc2tzLmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWdpc3RlclRhc2spO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3MucHVzaChyZWdpc3RlclRhc2spO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44Gu44OR44K/44O844Oz55m76Yyy54q25rOB44KS5pu05paw44GZ44KL44CCXHJcbiAgICAgICAgdGFza1BhdHRlcm5VcGRhdGUoXHJcbiAgICAgICAgICAgIHN0YXRlOiB1c2VyVGFzayxcclxuICAgICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICAgICAgICAgIG5ld0NoZWNrZWQ6IG51bWJlcltdO1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IG51bWJlcjtcclxuICAgICAgICAgICAgfT5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8g44GT44GT44Gn44KE44KL44GT44Go44Gv77yfXHJcbiAgICAgICAgICAgIC8vIOOBvuOBmuW8leaVsOOBq+OCv+OCueOCr+OBrumFjeWIl+OCpOODs+ODh+ODg+OCr+OCueeVquWPt+OBjOW/heimgVxyXG4gICAgICAgICAgICAvLyDjg5Hjgr/jg7zjg7NJROOBrumFjeWIl+OCkuWPl+OBkeWPluOCi+OAglxyXG4gICAgICAgICAgICAvLyDphY3liJfjgahzdGF0ZeOCkuavlOi8g+OBl+OBpuOAgeOBquOBkeOCjOOBsOeZu+mMsuOAgk9yZGVy44Gv5pyA5aSn5YCkKzHjgILpgIbjgavliYrpmaTjgZXjgozjgabjgYTjgovjgoLjga7jga/pmaTlpJbjgIJcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlUGF0dGVybklkTGlzdCA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1tcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgIF0ucGF0dGVybkluZm8ubWFwKChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5wYXR0ZXJuSUQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlUGF0dGVybklkTGlzdFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGVQYXR0ZXJuSWRMaXN0KTtcclxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IChvbGRzOiBudW1iZXJbXSwgbmV4dHM6IG51bWJlcltdKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgYWRkczogbmV4dHMuZmlsdGVyKChlKSA9PiAhb2xkcy5pbmNsdWRlcyhlKSksXHJcbiAgICAgICAgICAgICAgICBzdWJzOiBvbGRzLmZpbHRlcigoZSkgPT4gIW5leHRzLmluY2x1ZGVzKGUpKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRpZmYoc3RhdGVQYXR0ZXJuSWRMaXN0LCBhY3Rpb24ucGF5bG9hZC5uZXdDaGVja2VkKTtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZUFycmF5OiB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXRl44GL44KJ5YmK6Zmk5a++6LGh44KS6Zmk5aSW44GX44Gf6YWN5YiX44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3Vicy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVBcnJheSA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1tcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICAgICAgXS5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmdXR1cmVQYXR0ZXJuVXBkYXRlKHN0YXRlLCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zdWJzLnNvbWUoKHN1YikgPT4gc3ViICE9IGNvbnRlbnQucGF0dGVybklEKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQXJyYXkgPVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1thY3Rpb24ucGF5bG9hZC5pbmRleF0ucGF0dGVybkluZm87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMTp1cGRhdGVBcnJheVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlQXJyYXkpO1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgcmVzdWx0LmFkZHMubWFwKChhZGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBNYXg6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyDov73liqDjgZXjgozjgZ9JROOBjOioreWumuOBleOCjOOBpuOBhOOCi+OCv+OCueOCr+OCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2tQYXR0ZXJuSW5mbykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrUGF0dGVybkluZm8ucGF0dGVybklEID09IGFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgY2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaKveWHuuOBleOCjOOBn+WQhOOCv+OCueOCr+OBruODkeOCv+ODvOODs0lE44KS5q+U6LyD44GX44CB5pyA5aSn5YCk44KS5Y+W5b6X44GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB0YXNrLnBhdHRlcm5JbmZvLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbmZvKSA9PiBpbmZvLnBhdHRlcm5JRCA9PSBhZGRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIE1heCA8IGNvbnRlbnQucGF0dGVybklEID8gKE1heCA9IGNvbnRlbnQucGF0dGVybklEKSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwdXNoQ29udGVudCA9IHsgcGF0dGVybklEOiBhZGQsIG9yZGVyOiBNYXggKyAxIH07XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVBcnJheS5wdXNoKHB1c2hDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGZ1dHVyZVBhdHRlcm5VcGRhdGUoc3RhdGUsIGFkZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjI6dXBkYXRlQXJyYXlcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZUFycmF5KTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1tcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgIF0ucGF0dGVybkluZm8gPSB1cGRhdGVBcnJheTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OCkuWJiumZpOOBmeOCi+WHpueQhuOAguW8leaVsOOBq+OBr+WJiumZpOWvvuixoeOCv+OCueOCr+OBruOCpOODs+ODh+ODg+OCr+OCueeVquWPt+OBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tEZWxldGUoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xyXG4gICAgICAgICAgICAvLyBjb25zdCBkZWxldGVUYXNrID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLnNwbGljZShcclxuICAgICAgICAgICAgLy8gICAgIGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAvLyAgICAgMVxyXG4gICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggIT0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkZWxldGVUYXNrKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzID0gZGVsZXRlVGFzaztcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OCkuODkeOCv+ODvOODs+OBi+OCiemZpOWkluOBmeOCi+WHpueQhuOAguW8leaVsOOBruOCquODluOCuOOCp+OCr+ODiOOBq+OBr+ODkeOCv+ODvOODs0lE44Go5YmK6Zmk5a++6LGh44K/44K544Kv44Gu5ZCN56ew44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza1JlbW92ZVBhdHRlcm4oXHJcbiAgICAgICAgICAgIHN0YXRlOiB1c2VyVGFzayxcclxuICAgICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgcGF0dGVybklkOiBudW1iZXI7IGRldGFpbFRpdGxlOiBzdHJpbmcgfT5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmluZEluZGV4KChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5kZXRhaWxbXCLjgr/jgrnjgq/lkI1cIl0gPT0gYWN0aW9uLnBheWxvYWQuZGV0YWlsVGl0bGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVkVGFzayA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1tcclxuICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgIF0ucGF0dGVybkluZm8uZmlsdGVyKGZ1bmN0aW9uIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5wYXR0ZXJuSUQgIT0gYWN0aW9uLnBheWxvYWQucGF0dGVybklkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW2luZGV4XS5wYXR0ZXJuSW5mbyA9IGRlbGV0ZWRUYXNrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkZWxldGVkVGFzayk7XHJcbiAgICAgICAgICAgIC8vIGZ1dHVyZVBhdHRlcm5VcGRhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44OR44K/44O844Oz44KS6L+95Yqg44GZ44KL5Yem55CG44CC5byV5pWw44Gr44Gv44OR44K/44O844Oz5ZCN56ew44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgcGF0dGVyblJlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgbGV0IE1heElkOiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybi5tYXAoKHBhdHRlcm5Db250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQgPiBNYXhJZFxyXG4gICAgICAgICAgICAgICAgICAgID8gKE1heElkID0gcGF0dGVybkNvbnRlbnQucGF0dGVybklkKVxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkZFBhdHRlcm4gPSB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSWQ6IE1heElkICsgMSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm4ucHVzaChhZGRQYXR0ZXJuKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOODkeOCv+ODvOODs+OCkuWJiumZpOOBmeOCi+WHpueQhuOAguW8leaVsOOBq+OBr+ODkeOCv+ODvOODs0lE44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgcGF0dGVybkRlbGV0ZShzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVBhdHRlcm5MaXN0ID0gc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm4uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHBhdHRlcm5Db250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGF0dGVybkNvbnRlbnQucGF0dGVybklkKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5Db250ZW50LnBhdHRlcm5JZCAhPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZVBhdHRlcm5MaXN0KTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm4gPSB1cGRhdGVQYXR0ZXJuTGlzdDtcclxuXHJcbiAgICAgICAgICAgIC8vIOOCv+OCueOCr+OBqOOCq+ODrOODs+ODgOODvOOBq+S/neeuoeOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs+OCkuWFqOOBpuWJiumZpOOBmeOCi+W/heimgeOBjOOBguOCi1xyXG4gICAgICAgICAgICAvLyDjgqvjg6zjg7Pjg4Djg7zjga/mnKrmnaXliIbjgaDjgZFcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc+OBq+S/neeuoeOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs+aDheWgseOCkuWJiumZpOOBmeOCi+OAglxyXG4gICAgICAgICAgICBsZXQgdXBkYXRlVGFza0xpc3QgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MubWFwKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVQYXR0ZXJuSW5mbyA9IHRhc2sucGF0dGVybkluZm8uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICh0YXNrUGF0dGVybkluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tQYXR0ZXJuSW5mby5wYXR0ZXJuSUQgIT0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVRhc2s6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2NvbnRlbnQ6IHN0cmluZ106IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgICAgIH0gPSB7IGRldGFpbDogdGFzay5kZXRhaWwsIHBhdHRlcm5JbmZvOiB1cGRhdGVQYXR0ZXJuSW5mbyB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZVRhc2s7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyOnVwZGF0ZVRhc2tMaXN0XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVUYXNrTGlzdCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcyA9IHVwZGF0ZVRhc2tMaXN0O1xyXG5cclxuICAgICAgICAgICAgLy8gc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFy44Gu5pyq5p2l5YiG44Gr5L+d566h44GV44KM44Gm44GE44KL44OR44K/44O844Oz5oOF5aCx44KS5YmK6Zmk44GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm93WWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vd01vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vd0RhdGUgPSB0b2RheS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleVllYXJzID0gT2JqZWN0LmtleXMoc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyKTtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ2FsZW5kYXJEYXRlID0gKFxyXG4gICAgICAgICAgICAgICAgeWVhcjogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRhdGU6IHN0cmluZ1xyXG4gICAgICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChtb250aClcclxuICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGRhdGUpXS5QYXR0ZXJuSWQgPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChtb250aClcclxuICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGRhdGUpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAga2V5WWVhcnMubWFwKCh5ZWFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlNb250aCA9IE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludCh5ZWFyKV1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoeWVhcikgPiBub3dZZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5a++6LGh44GM5p2l5bm05Lul6ZmN44Gn44GC44KL5aC05ZCI44CB5YmK6Zmk44GZ44KL44CCZGVsZXRl44Gu44G744GG44GM44GE44GEXHJcbiAgICAgICAgICAgICAgICAgICAga2V5TW9udGgubWFwKChtb250aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlEYXRlID0gT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KG1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlEYXRlLm1hcCgoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2FsZW5kYXJEYXRlKHllYXIsIG1vbnRoLCBkYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KHllYXIpID09IG5vd1llYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlr77osaHjgYzku4rlubTjgafjgYLjgovloLTlkIhcclxuICAgICAgICAgICAgICAgICAgICBrZXlNb250aC5tYXAoKG1vbnRoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleURhdGUgPSBPYmplY3Qua2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludCh5ZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQobW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChtb250aCkgPiBub3dNb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5p2l5pyI5Lul6ZmN44Gu5aC05ZCI44CB5YmK6Zmk44GZ44KL44CCZGVsZXRl44Gu44G744GG44GM44GE44GEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleURhdGUubWFwKChkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2FsZW5kYXJEYXRlKHllYXIsIG1vbnRoLCBkYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KG1vbnRoKSA9PSBub3dNb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5LuK5pyI44Gu5aC05ZCIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlEYXRlLm1hcCgoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXRlKSA+IG5vd0RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5piO5pel5Lul6ZmN44Gu5aC05ZCI44CB5YmK6Zmk44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNhbGVuZGFyRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjg5Hjgr/jg7zjg7PlkI3np7DjgpLnt6jpm4bjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjga/jg5Hjgr/jg7zjg7NJROOBqOODkeOCv+ODvOODs+WQjeensOOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHBhdHRlcm5OYW1lRWRpdChcclxuICAgICAgICAgICAgc3RhdGU6IHVzZXJUYXNrLFxyXG4gICAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgICAgICAgICAgZWRpdFBhdHRlcm5JZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfT5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gSUTjgavlkIjoh7TjgZnjgovopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgpLlj5blvpdcclxuICAgICAgICAgICAgY29uc3QgZWRpdFBhdHRlcm5JbmRleCA9IHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgIChwYXR0ZXJuQ29udGVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQgPT0gYWN0aW9uLnBheWxvYWQuZWRpdFBhdHRlcm5JZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyDlj5blvpfjgZfjgZ/jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgpLnm67ljbDjgavjgIHlvJXmlbDjga7mlrDjgZfjgYTlkI3np7Djgafmm7TmlrDjgZnjgovjgIJcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm5bZWRpdFBhdHRlcm5JbmRleF0ucGF0dGVybk5hbWUgPVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQucGF0dGVybk5hbWU7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICAgIGluaXQsXHJcbiAgICBSZWdpc3RlcixcclxuICAgIGFsbERlbGV0ZSxcclxuICAgIHRhc2tDaGVja0NvbXBsZXRlLFxyXG4gICAgY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIsXHJcbiAgICB0YXNrRGV0YWlsUmVnaXN0ZXIsXHJcbiAgICB0YXNrUmVnaXN0ZXIsXHJcbiAgICB0YXNrUGF0dGVyblVwZGF0ZSxcclxuICAgIHRhc2tEZWxldGUsXHJcbiAgICB0YXNrUmVtb3ZlUGF0dGVybixcclxuICAgIHBhdHRlcm5SZWdpc3RlcixcclxuICAgIHBhdHRlcm5EZWxldGUsXHJcbiAgICBwYXR0ZXJuTmFtZUVkaXQsXHJcbn0gPSB0YXNrc01vZHVsZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza3NNb2R1bGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=