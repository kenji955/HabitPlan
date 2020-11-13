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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvdGFza3NNb2R1bGUudHN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXJUYXNrSW5mbyIsImNhbGVuZGFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiUGF0dGVybklkIiwidGFza3MiLCJvcmRlciIsImRldGFpbCIsImZsdWciLCJwYXR0ZXJuIiwicGF0dGVybklkIiwicGF0dGVybk5hbWUiLCJwYXR0ZXJuSW5mbyIsInBhdHRlcm5JRCIsImZ1dHVyZVBhdHRlcm5VcGRhdGUiLCJzdGF0ZSIsInVwZGF0ZVBhdHRlcm5JZCIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwidG9kYXkiLCJub3dZZWFyIiwibm93TW9udGgiLCJub3dEYXRlIiwiY2hvaWNlUGF0dGVyblRhc2tzIiwiZmlsdGVyIiwidGFzayIsInNvbWUiLCJ1cGRhdGVUYXNrcyIsIm1hcCIsInRhc2tQYXR0ZXJuIiwia2V5TW9udGhMaXN0Iiwia2V5WWVhciIsInBhcnNlSW50Iiwia2V5RGF0ZUxpc3QiLCJrZXlNb250aCIsImRhdGVUYXNrVXBkYXRlIiwia2V5RGF0ZSIsImRpZmYiLCJvbGRzIiwibmV4dHMiLCJhZGRzIiwiZSIsImluY2x1ZGVzIiwic3VicyIsImtleVllYXJzIiwia2V5TW9udGhzIiwia2V5RGF0ZXMiLCJyZXN1bHQiLCJ1cGRhdGVBcnJheSIsInN1YiIsImFkZCIsInB1c2giLCJ0YXNrc01vZHVsZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiaW5pdCIsImFjdGlvbiIsImRhdGEiLCJwYXlsb2FkIiwiUmVnaXN0ZXIiLCJhbGxEZWxldGUiLCJ0YXNrQ2hlY2tDb21wbGV0ZSIsImluZGV4IiwiZmluZEluZGV4IiwiY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIiLCJUb2RheVRhc2tzIiwidGFza0RldGFpbFJlZ2lzdGVyIiwidGFza1JlZ2lzdGVyIiwicmVnaXN0ZXJUYXNrIiwiY29udGVudCIsImxlbmd0aCIsInRhc2tQYXR0ZXJuVXBkYXRlIiwic3RhdGVQYXR0ZXJuSWRMaXN0IiwibmV3Q2hlY2tlZCIsIk1heCIsInRhc2tQYXR0ZXJuSW5mbyIsImZpbmQiLCJpbmZvIiwicHVzaENvbnRlbnQiLCJ0YXNrRGVsZXRlIiwiZGVsZXRlVGFzayIsInRhc2tSZW1vdmVQYXR0ZXJuIiwiZGV0YWlsVGl0bGUiLCJkZWxldGVkVGFzayIsInBhdHRlcm5SZWdpc3RlciIsIk1heElkIiwicGF0dGVybkNvbnRlbnQiLCJhZGRQYXR0ZXJuIiwicGF0dGVybkRlbGV0ZSIsInVwZGF0ZVBhdHRlcm5MaXN0IiwidXBkYXRlVGFza0xpc3QiLCJ1cGRhdGVQYXR0ZXJuSW5mbyIsInVwZGF0ZVRhc2siLCJkZWxldGVDYWxlbmRhckRhdGUiLCJ5ZWFyIiwibW9udGgiLCJkYXRlIiwicGF0dGVybk5hbWVFZGl0IiwiZWRpdFBhdHRlcm5JbmRleCIsImVkaXRQYXR0ZXJuSWQiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQSxJQUFNQSxZQUFzQixHQUFHO0FBQzNCQyxjQUFZLEVBQUU7QUFDVkMsWUFBUSxFQUFFLDhGQUNMLElBQUlDLElBQUosQ0FBUywyQkFBVCxFQUFzQ0MsV0FBdEMsRUFERyxnR0FFQyxJQUFJRCxJQUFKLENBQVMsMkJBQVQsRUFBc0NFLFFBQXRDLEtBQW1ELENBRnBELDhHQUdLLElBQUlGLElBQUosQ0FBUywyQkFBVCxFQUFzQ0csT0FBdEMsRUFITCxFQUd1RDtBQUMvQ0MsZUFBUyxFQUFFLENBRG9DO0FBRS9DQyxXQUFLLEVBQUUsQ0FDSDtBQUNJQyxhQUFLLEVBQUUsQ0FEWDtBQUVJQyxjQUFNLG9IQUNELE1BREMsRUFDUSxXQURSLHNHQUVELGFBRkMsRUFFZSxrQkFGZixzR0FHRCxhQUhDLEVBR2Usa0JBSGYsV0FGVjtBQU9JQyxZQUFJLEVBQUU7QUFQVixPQURHLEVBVUg7QUFD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Q0FBa0IsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWNDLElBQWQsQ0FBbEI7QUFDSDtBQUNKLGVBTEQ7QUFNSDtBQUNKLFdBckJEO0FBc0JIO0FBQ0osT0F6Q0Q7QUEwQ0gsS0FsV0s7QUFtV047QUFDQUMsbUJBcFdNLDJCQXFXRnJGLEtBcldFLEVBc1dGNEMsTUF0V0UsRUEwV0o7QUFDRTtBQUNBLFVBQU0wQyxnQkFBZ0IsR0FBR3RGLEtBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJXLE9BQW5CLENBQTJCeUQsU0FBM0IsQ0FDckIsVUFBQ3VCLGNBQUQ7QUFBQSxlQUNJQSxjQUFjLENBQUMvRSxTQUFmLElBQTRCaUQsTUFBTSxDQUFDRSxPQUFQLENBQWV5QyxhQUQvQztBQUFBLE9BRHFCLENBQXpCLENBRkYsQ0FNRTs7QUFDQXZGLFdBQUssQ0FBQ2pCLFlBQU4sQ0FBbUJXLE9BQW5CLENBQTJCNEYsZ0JBQTNCLEVBQTZDMUYsV0FBN0MsR0FDSWdELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlbEQsV0FEbkI7QUFFSDtBQW5YSztBQUhrQixDQUFELENBQS9COzJCQXdZSTJDLFdBQVcsQ0FBQ2lELE87SUFiWjdDLEksd0JBQUFBLEk7SUFDQUksUSx3QkFBQUEsUTtJQUNBQyxTLHdCQUFBQSxTO0lBQ0FDLGlCLHdCQUFBQSxpQjtJQUNBRyx1Qix3QkFBQUEsdUI7SUFDQUUsa0Isd0JBQUFBLGtCO0lBQ0FDLFksd0JBQUFBLFk7SUFDQUksaUIsd0JBQUFBLGlCO0lBQ0FRLFUsd0JBQUFBLFU7SUFDQUUsaUIsd0JBQUFBLGlCO0lBQ0FHLGUsd0JBQUFBLGU7SUFDQUksYSx3QkFBQUEsYTtJQUNBUyxlLHdCQUFBQSxlOztBQUdXOUMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45NTA3MGFkMzQ1Nzk1ZWRmM2I3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyBzdWJTZWNvbmRzIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCB7XHJcbiAgICBjYWxlbmRhcixcclxuICAgIHBhdHRlcm4sXHJcbiAgICB0YXNrcyxcclxuICAgIHVzZXJUYXNrLFxyXG4gICAgdXNlclRhc2tJbmZvLFxyXG59IGZyb20gXCIuL3VzZXJUYXNrc1R5cGVcIjtcclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IHVzZXJUYXNrID0ge1xyXG4gICAgdXNlclRhc2tJbmZvOiB7XHJcbiAgICAgICAgY2FsZW5kYXI6IHtcclxuICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMiBPY3QgMjAyMCAwMjowMDowMFwiKS5nZXRGdWxsWWVhcigpXToge1xyXG4gICAgICAgICAgICAgICAgW25ldyBEYXRlKFwiVGh1LCAyMiBPY3QgMjAyMCAwMjowMDowMFwiKS5nZXRNb250aCgpICsgMV06IHtcclxuICAgICAgICAgICAgICAgICAgICBbbmV3IERhdGUoXCJUaHUsIDIyIE9jdCAyMDIwIDAyOjAwOjAwXCIpLmdldERhdGUoKV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCLjgr/jgrnjgq/lkI1cIl06IFwi44K/44K544Kv5ZCNIDIyIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMlwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHVnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIyIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFtuZXcgRGF0ZShcIlRodSwgMjMgT2N0IDIwMjAgMDI6MDA6MDBcIikuZ2V0RGF0ZSgpXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIuOCv+OCueOCr+WQjVwiXTogXCLjgr/jgrnjgq/lkI0gMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0ZXN0RGV0YWlsMVwiXTogXCJ0ZXN0RGV0YWlsMSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBhdHRlcm46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybklkOiAxLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IFwidGVzdFBhdHRlcm4xXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5JZDogMixcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lOiBcInRlc3RQYXR0ZXJuMlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMiAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1wiZGVmYWx1dFwiXTogXCJkZWZhbHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjIgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIyIDFcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMiAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1wiZGVmYWx1dFwiXTogXCJkZWZhbHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjIgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIyIDJcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMyAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1wiZGVmYWx1dFwiXTogXCJkZWZhbHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDFcIl06IFwidGVzdERldGFpbDEgMjMgMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwyXCJdOiBcInRlc3REZXRhaWwxIDIzIDFcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgW1wi44K/44K544Kv5ZCNXCJdOiBcIuOCv+OCueOCr+WQjSAyMyAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1wiZGVmYWx1dFwiXTogXCJkZWZhbHV0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgW1widGVzdERldGFpbDJcIl06IFwidGVzdERldGFpbDEgMjMgMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcInRlc3REZXRhaWwxXCJdOiBcInRlc3REZXRhaWwxIDIzIDJcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSW5mbzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybklEOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuXHJcbi8vIGNvbnN0IGRpZmYgPSAob2xkczogYW55W10sIG5leHRzOiBhbnlbXSkgPT4gKHtcclxuLy8gICAgIGFkZHM6IG5leHRzLmZpbHRlcigoZSkgPT4gIW9sZHMuaW5jbHVkZXMoZSkpLFxyXG4vLyAgICAgc3Viczogb2xkcy5maWx0ZXIoKGUpID0+ICFuZXh0cy5pbmNsdWRlcyhlKSksXHJcbi8vIH0pO1xyXG5cclxuLy8g44OR44K/44O844Oz5pu05paw5pmC44Gr5pyq5p2l44Gr6Kit5a6a44GV44KM44Gm44GE44KL44OR44K/44O844Oz44Gu5YaF5a6544KS5pu05paw44GZ44KL44CCXHJcbi8vIOabtOaWsOWvvuixoeOBr3N0YXRlLmNhbGVuZGFyLnRhc2tzXHJcbi8vIOW5tOaciOaXpeOBjOacquadpeOBp+OBguOCiuOAgeOBi+OBpOOAgeODkeOCv+ODvOODs0lE44GM5ZCM44GY44KC44Gu44KS5a++6LGh44Gr5paw44GX44GE44OR44K/44O844Oz44KS55m76Yyy44GZ44KL44CCXHJcbmNvbnN0IGZ1dHVyZVBhdHRlcm5VcGRhdGUgPSAoc3RhdGU6IHVzZXJUYXNrLCB1cGRhdGVQYXR0ZXJuSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCI9PT09ZnV0dXJlUGF0dGVyblVwZGF0ZeOBk+OBk+OBi+OCiT09PT1cIik7XHJcblxyXG4gICAgY29uc29sZS5sb2coT2JqZWN0LmtleXMoc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyKSk7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBub3dZZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG5vd01vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBjb25zdCBub3dEYXRlID0gdG9kYXkuZ2V0RGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKFxyXG4gICAgICAgICAgICAodGFzaykgPT4gdGFzay5wYXR0ZXJuSUQgPT0gdXBkYXRlUGF0dGVybklkXHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIOODkeOCv+ODvOODs0lE44Gr57SQ5LuY44GP44K/44K544Kv5LiA6Kan44GL44KJ44Kr44Os44Oz44OA44O844G444Gu55m76Yyy5oOF5aCx44KS5oq95Ye644GZ44KL44CCXHJcbiAgICBjb25zdCB1cGRhdGVUYXNrcyA9IGNob2ljZVBhdHRlcm5UYXNrcy5tYXAoKHRhc2spID0+IHtcclxuICAgICAgICAvLyDjg5Hjgr/jg7zjg7PjgYzopIfmlbDnmbvpjLLjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgbjjga7lr77lv5zjgajjgZfjgabjgIHpgbjmip7jgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7NJROOBq+ipsuW9k+OBmeOCi+imgee0oOOBoOOBkeOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgIGNvbnN0IHRhc2tQYXR0ZXJuID0gdGFzay5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKHBhdHRlcm5JbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuSW5mby5wYXR0ZXJuSUQgPT0gdXBkYXRlUGF0dGVybklkO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDphY3liJfjga7jgr/jgrnjgq/jgajmir3lh7rjgZfjgZ/jg5Hjgr/jg7zjg7Pmg4XloLHjgpLmlbTlvaLjgZfjgabov5TjgZnjgIJcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBvcmRlcjogdGFza1BhdHRlcm5bMF0ub3JkZXIsXHJcbiAgICAgICAgICAgIGRldGFpbDogdGFzay5kZXRhaWwsXHJcbiAgICAgICAgICAgIC8vIGRldGFpbDI6IHRhc2suZGV0YWlsMixcclxuICAgICAgICAgICAgZmx1ZzogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGtleU1vbnRoTGlzdCA9IChrZXlZZWFyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qga2V5RGF0ZUxpc3QgPSAoa2V5WWVhcjogc3RyaW5nLCBrZXlNb250aDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildW3BhcnNlSW50KGtleU1vbnRoKV1cclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkYXRlVGFza1VwZGF0ZSA9IChcclxuICAgICAgICBrZXlZZWFyOiBzdHJpbmcsXHJcbiAgICAgICAga2V5TW9udGg6IHN0cmluZyxcclxuICAgICAgICBrZXlEYXRlOiBzdHJpbmdcclxuICAgICkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXVtwYXJzZUludChrZXlNb250aCldW1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5RGF0ZSlcclxuICAgICAgICAgICAgXS5QYXR0ZXJuSWQgPT0gdXBkYXRlUGF0dGVybklkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludChrZXlZZWFyKV1bcGFyc2VJbnQoa2V5TW9udGgpXVtcclxuICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleURhdGUpXHJcbiAgICAgICAgICAgIF0udGFza3MgPSB1cGRhdGVUYXNrcztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT1kYXRlVGFza1VwZGF0ZT09PVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5WWVhcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleU1vbnRoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5RGF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZVRhc2tzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHR5cGUgY2FsZW5kYXJQYXR0ZXJuID0ge1xyXG4gICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgZGV0YWlsOiB7XHJcbiAgICAgICAgICAgIFtjb250ZW50OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmbHVnOiBib29sZWFuO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBkaWZmID0gKG9sZHM6IGNhbGVuZGFyUGF0dGVybltdLCBuZXh0czogY2FsZW5kYXJQYXR0ZXJuW10pID0+ICh7XHJcbiAgICAgICAgYWRkczogbmV4dHMuZmlsdGVyKChlKSA9PiAhb2xkcy5pbmNsdWRlcyhlKSksXHJcbiAgICAgICAgc3Viczogb2xkcy5maWx0ZXIoKGUpID0+ICFuZXh0cy5pbmNsdWRlcyhlKSksXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDnmbvpjLLjgZXjgozjgabjgYTjgovlubTjga7pgKPmg7PphY3liJfjga7jgq3jg7zjgpLlhajjgablj5blvpdcclxuICAgIGNvbnN0IGtleVllYXJzID0gT2JqZWN0LmtleXMoc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyKTtcclxuICAgIGtleVllYXJzLm1hcCgoa2V5WWVhcikgPT4ge1xyXG4gICAgICAgIGlmIChwYXJzZUludChrZXlZZWFyKSA9PSBub3dZZWFyKSB7XHJcbiAgICAgICAgICAgIC8vIOOCguOBl+S7iuW5tOOBoOOBo+OBn+OCieOAgeOBruWHpueQhlxyXG4gICAgICAgICAgICAvLyDnmbvpjLLjgZXjgozjgabjgYTjgovmnIjjga7pgKPmg7PphY3liJfjga7jgq3jg7zjgpLlhajjgablj5blvpdcclxuICAgICAgICAgICAgY29uc3Qga2V5TW9udGhzID0ga2V5TW9udGhMaXN0KGtleVllYXIpO1xyXG5cclxuICAgICAgICAgICAga2V5TW9udGhzLm1hcCgoa2V5TW9udGgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChrZXlNb250aCkgPT0gbm93TW9udGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDjgoLjgZfku4rmnIjjgaDjgaPjgZ/jgolcclxuICAgICAgICAgICAgICAgICAgICAvLyDnmbvpjLLjgZXjgozjgabjgYTjgovml6Xjga7pgKPmg7PphY3liJfjga7jgq3jg7zjgpLlhajjgablj5blvpdcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlEYXRlcyA9IGtleURhdGVMaXN0KGtleVllYXIsIGtleU1vbnRoKTtcclxuICAgICAgICAgICAgICAgICAgICBrZXlEYXRlcy5tYXAoKGtleURhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGtleURhdGUpID4gbm93RGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44KC44GX5piO5pel5Lul6ZmN44Gg44Gj44Gf44KJ55m76Yyy5YaF5a6544KS5pu05paw44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlVGFza1VwZGF0ZShrZXlZZWFyLCBrZXlNb250aCwga2V5RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoa2V5RGF0ZSkgPT0gbm93RGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44KC44GX5LuK5pel44Gg44Gj44Gf44KJ44CB5aSJ5pu05YiG44Gg44GR5Y+N5pig44GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlh6bnkIbmnKrkvZzmiJBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRpZmYoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW3BhcnNlSW50KGtleVllYXIpXVtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoa2V5TW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChrZXlEYXRlKV0udGFza3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGFza3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVBcnJheSA9IHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChrZXlZZWFyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChrZXlNb250aCldW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleURhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLnRhc2tzLmZpbHRlcihmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuc3Vicy5zb21lKChzdWIpID0+IHN1YiAhPSB0YXNrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hZGRzLm1hcCgoYWRkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJyYXkucHVzaChhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoa2V5WWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGtleU1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVtwYXJzZUludChrZXlEYXRlKV0udGFza3MgPSB1cGRhdGVBcnJheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChrZXlNb250aCkgPiBub3dNb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOOCguOBl+adpeaciOS7pemZjeOBoOOBo+OBn+OCieOAgeOBmeOBueOBpuabtOaWsOOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleURhdGVzID0ga2V5RGF0ZUxpc3Qoa2V5WWVhciwga2V5TW9udGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGtleURhdGVzLm1hcCgoa2V5RGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlVGFza1VwZGF0ZShrZXlZZWFyLCBrZXlNb250aCwga2V5RGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoa2V5WWVhcikgPiBub3dZZWFyKSB7XHJcbiAgICAgICAgICAgIC8vIOOCguOBl+adpeW5tOS7pemZjeOBoOOBo+OBn+OCieOAgeOBruWHpueQhuOAguWFqOOBpuabtOaWsOOBmeOCi+OAglxyXG4gICAgICAgICAgICBjb25zdCBrZXlNb250aHMgPSBrZXlNb250aExpc3Qoa2V5WWVhcik7XHJcbiAgICAgICAgICAgIGtleU1vbnRocy5tYXAoKGtleU1vbnRoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlEYXRlcyA9IGtleURhdGVMaXN0KGtleVllYXIsIGtleU1vbnRoKTtcclxuICAgICAgICAgICAgICAgIGtleURhdGVzLm1hcCgoa2V5RGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVUYXNrVXBkYXRlKGtleVllYXIsIGtleU1vbnRoLCBrZXlEYXRlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIj09PT1mdXR1cmVQYXR0ZXJuVXBkYXRl44GT44GT44G+44GnPT09PVwiKTtcclxufTtcclxuXHJcbmNvbnN0IHRhc2tzTW9kdWxlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJ0YXNrc1wiLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBpbml0KHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHVzZXJUYXNrSW5mbz4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXQgZGF0YVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHN0YXRlID0gey4uLmRhdGF9O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImluaXQgc3RhdGUudXNlclRhc2tJbmZvIOWJjVwiKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdGUudXNlclRhc2tJbmZvKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvID0gZGF0YTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbml0IHN0YXRlLnVzZXJUYXNrSW5mbyDlvoxcIik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0YXRlLnVzZXJUYXNrSW5mbyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBSZWdpc3RlcihzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx1c2VyVGFzaz4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAgICAgc3RhdGUgPSB7IC4uLnN0YXRlLCAuLi5kYXRhIH07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGF0ZScpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbGxEZWxldGUoc3RhdGU6IHVzZXJUYXNrKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNrIGFsbERlbGV0ZVwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIERheVBsYW7jgavjgabjgr/jgrnjgq/jgpLjgq/jg6rjg4Pjgq/jgZfjgZ/pmpvjgavlrozkuobjg5Xjg6njgrDjgpJ0cnVl44Gr5aSJ5pu044GZ44KL5Yem55CG44CC5byV5pWw44Gr44Gm5bm044CB5pyI44CB5pel44CB44K/44K544Kv44Gu44Kk44Oz44OH44OD44Kv44K555Wq5Y+344KS5Y+X44GR5Y+W44Gj44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza0NoZWNrQ29tcGxldGUoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyW10+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW2FjdGlvbi5wYXlsb2FkWzBdXVtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgIF1bYWN0aW9uLnBheWxvYWRbMl1dLnRhc2tzLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgICh0YXNrcykgPT4gdGFza3Mub3JkZXIgPT0gYWN0aW9uLnBheWxvYWRbM11cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW2FjdGlvbi5wYXlsb2FkWzFdXVtcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzJdXHJcbiAgICAgICAgICAgIF0udGFza3NbaW5kZXhdLmZsdWcgPSAhc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyW1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMF1cclxuICAgICAgICAgICAgXVthY3Rpb24ucGF5bG9hZFsxXV1bYWN0aW9uLnBheWxvYWRbMl1dLnRhc2tzW2luZGV4XS5mbHVnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5byV5pWw44Gvc3RhdGXjgajlubTjgIHmnIjjgIHml6XjgIHpgbjmip7jgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7NJROOBrjTjgaTjga7mlbDlgKTjgYzmoLzntI3jgZXjgozjgZ/phY3liJdcclxuICAgICAgICBjYWxlbmRhclBhdHRlcm5SZWdpc3RlcihcclxuICAgICAgICAgICAgc3RhdGU6IHVzZXJUYXNrLFxyXG4gICAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyW10+XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIHN0YXRl44GL44KJ6YG45oqe44GV44KM44Gm44GE44KL44OR44K/44O844OzSUTjgYzoqK3lrprjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgpLmir3lh7rjgZnjgovjgIJcclxuICAgICAgICAgICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2spID0+IHRhc2sucGF0dGVybklEID09IGFjdGlvbi5wYXlsb2FkWzNdXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIOODkeOCv+ODvOODs0lE44Gr57SQ5LuY44GP44K/44K544Kv5LiA6Kan44GL44KJ44Kr44Os44Oz44OA44O844G444Gu55m76Yyy5oOF5aCx44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IFRvZGF5VGFza3MgPSBjaG9pY2VQYXR0ZXJuVGFza3MubWFwKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyDjg5Hjgr/jg7zjg7PjgYzopIfmlbDnmbvpjLLjgZXjgozjgabjgYTjgovjgr/jgrnjgq/jgbjjga7lr77lv5zjgajjgZfjgabjgIHpgbjmip7jgZXjgozjgabjgYTjgovjg5Hjgr/jg7zjg7NJROOBq+ipsuW9k+OBmeOCi+imgee0oOOBoOOBkeOCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza1BhdHRlcm4gPSB0YXNrLnBhdHRlcm5JbmZvLmZpbHRlcihmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybkluZm9cclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuSW5mby5wYXR0ZXJuSUQgPT0gYWN0aW9uLnBheWxvYWRbM107XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDphY3liJfjga7jgr/jgrnjgq/jgajmir3lh7rjgZfjgZ/jg5Hjgr/jg7zjg7Pmg4XloLHjgpLmlbTlvaLjgZfjgabov5TjgZnjgIJcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHRhc2tQYXR0ZXJuWzBdLm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbDogdGFzay5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGV0YWlsMjogdGFzay5kZXRhaWwyLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsdWc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDjgZPjgZPjgavlubTjgYzjgarjgYvjgaPjgZ/mmYLjga7lh6bnkIbjgpLliqDjgYjjgotcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkWzBdIGluIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcikge1xyXG4gICAgICAgICAgICAgICAgLy8gc3RhdGXjga5Nb250aOOBrumAo+aDs+mFjeWIl+OBq+aWsOOBl+OBhOaXpeS7mOOBrumAo+aDs+mFjeWIl+OCkui/veWKoOOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgLy8g6L+95Yqg5oOF5aCx44Gv5byV5pWw44Gu5pel44Go44GT44KM44G+44Gn44Gu5Yem55CG44Gn5L2c5oiQ44GX44Gf44Kr44Os44Oz44OA44O855m76Yyy55So5oOF5aCxXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dW1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgICAgICBdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMl1dOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhdHRlcm5JZDogYWN0aW9uLnBheWxvYWRbM10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzOiBUb2RheVRhc2tzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gc3RhdGXjga5Nb250aOOBrumAo+aDs+mFjeWIl+OBq+aWsOOBl+OBhOaXpeS7mOOBrumAo+aDs+mFjeWIl+OCkui/veWKoOOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgLy8g6L+95Yqg5oOF5aCx44Gv5byV5pWw44Gu5pel44Go44GT44KM44G+44Gn44Gu5Yem55CG44Gn5L2c5oiQ44GX44Gf44Kr44Os44Oz44OA44O855m76Yyy55So5oOF5aCxXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbYWN0aW9uLnBheWxvYWRbMF1dID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkWzFdXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYWN0aW9uLnBheWxvYWRbMl1dOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXR0ZXJuSWQ6IGFjdGlvbi5wYXlsb2FkWzNdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M6IFRvZGF5VGFza3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGFjdGlvbi5wYXlsb2FkWzNdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhclthY3Rpb24ucGF5bG9hZFswXV1bXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRbMV1cclxuICAgICAgICAgICAgICAgIF1bYWN0aW9uLnBheWxvYWRbMl1dXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jga7oqbPntLDjgpLoqK3lrprjgZnjgovlh6bnkIbjgILlvJXmlbDjga7jg4bjgq3jgrnjg4jphY3liJfjgavjga9b5YWl5Yqb5YaF5a6544CB6YCj5oOz6YWN5YiX44Gu44Kt44O844CB44K/44K544Kv44Gu6YWN5YiX44KS5oyH5a6a44GZ44KL5pWw5a2XXeOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tEZXRhaWxSZWdpc3RlcihzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KGFjdGlvbi5wYXlsb2FkWzJdKV0uZGV0YWlsID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW3BhcnNlSW50KGFjdGlvbi5wYXlsb2FkWzJdKV0uZGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkWzFdXTogYWN0aW9uLnBheWxvYWRbMF0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jgpLov73liqDjgZnjgovlh6bnkIbjgILlvJXmlbDjga7jg4bjgq3jgrnjg4jphY3liJfjgavjga9b5YWl5Yqb5YaF5a6544CB6YCj5oOz6YWN5YiX44Gu44Kt44O844CB44K/44K544Kv44Gu6YWN5YiX44KS5oyH5a6a44GZ44KL5pWw5a2XXeOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tSZWdpc3RlcihzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx0YXNrcz4pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVnaXN0ZXJUYXNrID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyVGFzay5wYXR0ZXJuSW5mby5tYXAoKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZVBhdHRlcm5UYXNrcyA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2sucGF0dGVybkluZm8uc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrKSA9PiB0YXNrLnBhdHRlcm5JRCA9PSBjb250ZW50LnBhdHRlcm5JRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50Lm9yZGVyID0gY2hvaWNlUGF0dGVyblRhc2tzLmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWdpc3RlclRhc2spO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8udGFza3MucHVzaChyZWdpc3RlclRhc2spO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44Gu44OR44K/44O844Oz55m76Yyy54q25rOB44KS5pu05paw44GZ44KL44CCXHJcbiAgICAgICAgdGFza1BhdHRlcm5VcGRhdGUoXHJcbiAgICAgICAgICAgIHN0YXRlOiB1c2VyVGFzayxcclxuICAgICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcclxuICAgICAgICAgICAgICAgIG5ld0NoZWNrZWQ6IG51bWJlcltdO1xyXG4gICAgICAgICAgICAgICAgaW5kZXg6IG51bWJlcjtcclxuICAgICAgICAgICAgfT5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8g44GT44GT44Gn44KE44KL44GT44Go44Gv77yfXHJcbiAgICAgICAgICAgIC8vIOOBvuOBmuW8leaVsOOBq+OCv+OCueOCr+OBrumFjeWIl+OCpOODs+ODh+ODg+OCr+OCueeVquWPt+OBjOW/heimgVxyXG4gICAgICAgICAgICAvLyDjg5Hjgr/jg7zjg7NJROOBrumFjeWIl+OCkuWPl+OBkeWPluOCi+OAglxyXG4gICAgICAgICAgICAvLyDphY3liJfjgahzdGF0ZeOCkuavlOi8g+OBl+OBpuOAgeOBquOBkeOCjOOBsOeZu+mMsuOAgk9yZGVy44Gv5pyA5aSn5YCkKzHjgILpgIbjgavliYrpmaTjgZXjgozjgabjgYTjgovjgoLjga7jga/pmaTlpJbjgIJcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlUGF0dGVybklkTGlzdCA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1tcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgIF0ucGF0dGVybkluZm8ubWFwKChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5wYXR0ZXJuSUQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlUGF0dGVybklkTGlzdFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGVQYXR0ZXJuSWRMaXN0KTtcclxuICAgICAgICAgICAgY29uc3QgZGlmZiA9IChvbGRzOiBudW1iZXJbXSwgbmV4dHM6IG51bWJlcltdKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgYWRkczogbmV4dHMuZmlsdGVyKChlKSA9PiAhb2xkcy5pbmNsdWRlcyhlKSksXHJcbiAgICAgICAgICAgICAgICBzdWJzOiBvbGRzLmZpbHRlcigoZSkgPT4gIW5leHRzLmluY2x1ZGVzKGUpKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRpZmYoc3RhdGVQYXR0ZXJuSWRMaXN0LCBhY3Rpb24ucGF5bG9hZC5uZXdDaGVja2VkKTtcclxuICAgICAgICAgICAgbGV0IHVwZGF0ZUFycmF5OiB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSUQ6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiBudW1iZXI7XHJcbiAgICAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXRl44GL44KJ5YmK6Zmk5a++6LGh44KS6Zmk5aSW44GX44Gf6YWN5YiX44KS5oq95Ye644GZ44KL44CCXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3Vicy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVBcnJheSA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1tcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5pbmRleFxyXG4gICAgICAgICAgICAgICAgXS5wYXR0ZXJuSW5mby5maWx0ZXIoZnVuY3Rpb24gKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmdXR1cmVQYXR0ZXJuVXBkYXRlKHN0YXRlLCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zdWJzLnNvbWUoKHN1YikgPT4gc3ViICE9IGNvbnRlbnQucGF0dGVybklEKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQXJyYXkgPVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1thY3Rpb24ucGF5bG9hZC5pbmRleF0ucGF0dGVybkluZm87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMTp1cGRhdGVBcnJheVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXBkYXRlQXJyYXkpO1xyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgcmVzdWx0LmFkZHMubWFwKChhZGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBNYXg6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyDov73liqDjgZXjgozjgZ9JROOBjOioreWumuOBleOCjOOBpuOBhOOCi+OCv+OCueOCr+OCkuaKveWHuuOBmeOCi+OAglxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlUGF0dGVyblRhc2tzID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFzay5wYXR0ZXJuSW5mby5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2tQYXR0ZXJuSW5mbykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrUGF0dGVybkluZm8ucGF0dGVybklEID09IGFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgY2hvaWNlUGF0dGVyblRhc2tzLm1hcCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaKveWHuuOBleOCjOOBn+WQhOOCv+OCueOCr+OBruODkeOCv+ODvOODs0lE44KS5q+U6LyD44GX44CB5pyA5aSn5YCk44KS5Y+W5b6X44GZ44KL44CCXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB0YXNrLnBhdHRlcm5JbmZvLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbmZvKSA9PiBpbmZvLnBhdHRlcm5JRCA9PSBhZGRcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIE1heCA8IGNvbnRlbnQucGF0dGVybklEID8gKE1heCA9IGNvbnRlbnQucGF0dGVybklEKSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwdXNoQ29udGVudCA9IHsgcGF0dGVybklEOiBhZGQsIG9yZGVyOiBNYXggKyAxIH07XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVBcnJheS5wdXNoKHB1c2hDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGZ1dHVyZVBhdHRlcm5VcGRhdGUoc3RhdGUsIGFkZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIjI6dXBkYXRlQXJyYXlcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZUFycmF5KTtcclxuXHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1tcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmluZGV4XHJcbiAgICAgICAgICAgIF0ucGF0dGVybkluZm8gPSB1cGRhdGVBcnJheTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OCkuWJiumZpOOBmeOCi+WHpueQhuOAguW8leaVsOOBq+OBr+WJiumZpOWvvuixoeOCv+OCueOCr+OBruOCpOODs+ODh+ODg+OCr+OCueeVquWPt+OBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHRhc2tEZWxldGUoc3RhdGU6IHVzZXJUYXNrLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xyXG4gICAgICAgICAgICAvLyBjb25zdCBkZWxldGVUYXNrID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLnNwbGljZShcclxuICAgICAgICAgICAgLy8gICAgIGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAvLyAgICAgMVxyXG4gICAgICAgICAgICAvLyApO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVUYXNrID0gc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzLmZpbHRlcihmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggIT0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkZWxldGVUYXNrKTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzID0gZGVsZXRlVGFzaztcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOOCv+OCueOCr+OCkuODkeOCv+ODvOODs+OBi+OCiemZpOWkluOBmeOCi+WHpueQhuOAguW8leaVsOOBruOCquODluOCuOOCp+OCr+ODiOOBq+OBr+ODkeOCv+ODvOODs0lE44Go5YmK6Zmk5a++6LGh44K/44K544Kv44Gu5ZCN56ew44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgdGFza1JlbW92ZVBhdHRlcm4oXHJcbiAgICAgICAgICAgIHN0YXRlOiB1c2VyVGFzayxcclxuICAgICAgICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgcGF0dGVybklkOiBudW1iZXI7IGRldGFpbFRpdGxlOiBzdHJpbmcgfT5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MuZmluZEluZGV4KChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5kZXRhaWxbXCLjgr/jgrnjgq/lkI1cIl0gPT0gYWN0aW9uLnBheWxvYWQuZGV0YWlsVGl0bGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVkVGFzayA9IHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc1tcclxuICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgIF0ucGF0dGVybkluZm8uZmlsdGVyKGZ1bmN0aW9uIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudC5wYXR0ZXJuSUQgIT0gYWN0aW9uLnBheWxvYWQucGF0dGVybklkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnRhc2tzW2luZGV4XS5wYXR0ZXJuSW5mbyA9IGRlbGV0ZWRUYXNrO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkZWxldGVkVGFzayk7XHJcbiAgICAgICAgICAgIC8vIGZ1dHVyZVBhdHRlcm5VcGRhdGUoc3RhdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44OR44K/44O844Oz44KS6L+95Yqg44GZ44KL5Yem55CG44CC5byV5pWw44Gr44Gv44OR44K/44O844Oz5ZCN56ew44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgcGF0dGVyblJlZ2lzdGVyKHN0YXRlOiB1c2VyVGFzaywgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pIHtcclxuICAgICAgICAgICAgbGV0IE1heElkOiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8ucGF0dGVybi5tYXAoKHBhdHRlcm5Db250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQgPiBNYXhJZFxyXG4gICAgICAgICAgICAgICAgICAgID8gKE1heElkID0gcGF0dGVybkNvbnRlbnQucGF0dGVybklkKVxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkZFBhdHRlcm4gPSB7XHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuSWQ6IE1heElkICsgMSxcclxuICAgICAgICAgICAgICAgIHBhdHRlcm5OYW1lOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm4ucHVzaChhZGRQYXR0ZXJuKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOODkeOCv+ODvOODs+OCkuWJiumZpOOBmeOCi+WHpueQhuOAguW8leaVsOOBq+OBr+ODkeOCv+ODvOODs0lE44GM5qC857SN44GV44KM44Gm44GE44KL44CCXHJcbiAgICAgICAgcGF0dGVybkRlbGV0ZShzdGF0ZTogdXNlclRhc2ssIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVBhdHRlcm5MaXN0ID0gc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm4uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKHBhdHRlcm5Db250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGF0dGVybkNvbnRlbnQucGF0dGVybklkKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5Db250ZW50LnBhdHRlcm5JZCAhPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZVBhdHRlcm5MaXN0KTtcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm4gPSB1cGRhdGVQYXR0ZXJuTGlzdDtcclxuXHJcbiAgICAgICAgICAgIC8vIOOCv+OCueOCr+OBqOOCq+ODrOODs+ODgOODvOOBq+S/neeuoeOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs+OCkuWFqOOBpuWJiumZpOOBmeOCi+W/heimgeOBjOOBguOCi1xyXG4gICAgICAgICAgICAvLyDjgqvjg6zjg7Pjg4Djg7zjga/mnKrmnaXliIbjgaDjgZFcclxuXHJcbiAgICAgICAgICAgIC8vIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrc+OBq+S/neeuoeOBleOCjOOBpuOBhOOCi+ODkeOCv+ODvOODs+aDheWgseOCkuWJiumZpOOBmeOCi+OAglxyXG4gICAgICAgICAgICBsZXQgdXBkYXRlVGFza0xpc3QgPSBzdGF0ZS51c2VyVGFza0luZm8udGFza3MubWFwKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVQYXR0ZXJuSW5mbyA9IHRhc2sucGF0dGVybkluZm8uZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICh0YXNrUGF0dGVybkluZm8pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tQYXR0ZXJuSW5mby5wYXR0ZXJuSUQgIT0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVRhc2s6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2NvbnRlbnQ6IHN0cmluZ106IHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JbmZvOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm5JRDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1bXTtcclxuICAgICAgICAgICAgICAgIH0gPSB7IGRldGFpbDogdGFzay5kZXRhaWwsIHBhdHRlcm5JbmZvOiB1cGRhdGVQYXR0ZXJuSW5mbyB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZVRhc2s7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyOnVwZGF0ZVRhc2tMaXN0XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGRhdGVUYXNrTGlzdCk7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby50YXNrcyA9IHVwZGF0ZVRhc2tMaXN0O1xyXG5cclxuICAgICAgICAgICAgLy8gc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFy44Gu5pyq5p2l5YiG44Gr5L+d566h44GV44KM44Gm44GE44KL44OR44K/44O844Oz5oOF5aCx44KS5YmK6Zmk44GZ44KL44CCXHJcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm93WWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vd01vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vd0RhdGUgPSB0b2RheS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleVllYXJzID0gT2JqZWN0LmtleXMoc3RhdGUudXNlclRhc2tJbmZvLmNhbGVuZGFyKTtcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ2FsZW5kYXJEYXRlID0gKFxyXG4gICAgICAgICAgICAgICAgeWVhcjogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIGRhdGU6IHN0cmluZ1xyXG4gICAgICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChtb250aClcclxuICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGRhdGUpXS5QYXR0ZXJuSWQgPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChtb250aClcclxuICAgICAgICAgICAgICAgICAgICBdW3BhcnNlSW50KGRhdGUpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAga2V5WWVhcnMubWFwKCh5ZWFyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlNb250aCA9IE9iamVjdC5rZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludCh5ZWFyKV1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoeWVhcikgPiBub3dZZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5a++6LGh44GM5p2l5bm05Lul6ZmN44Gn44GC44KL5aC05ZCI44CB5YmK6Zmk44GZ44KL44CCZGVsZXRl44Gu44G744GG44GM44GE44GEXHJcbiAgICAgICAgICAgICAgICAgICAga2V5TW9udGgubWFwKChtb250aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlEYXRlID0gT2JqZWN0LmtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2VyVGFza0luZm8uY2FsZW5kYXJbcGFyc2VJbnQoeWVhcildW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KG1vbnRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlEYXRlLm1hcCgoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2FsZW5kYXJEYXRlKHllYXIsIG1vbnRoLCBkYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KHllYXIpID09IG5vd1llYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlr77osaHjgYzku4rlubTjgafjgYLjgovloLTlkIhcclxuICAgICAgICAgICAgICAgICAgICBrZXlNb250aC5tYXAoKG1vbnRoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleURhdGUgPSBPYmplY3Qua2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJUYXNrSW5mby5jYWxlbmRhcltwYXJzZUludCh5ZWFyKV1bXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQobW9udGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChtb250aCkgPiBub3dNb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5p2l5pyI5Lul6ZmN44Gu5aC05ZCI44CB5YmK6Zmk44GZ44KL44CCZGVsZXRl44Gu44G744GG44GM44GE44GEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleURhdGUubWFwKChkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQ2FsZW5kYXJEYXRlKHllYXIsIG1vbnRoLCBkYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KG1vbnRoKSA9PSBub3dNb250aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5LuK5pyI44Gu5aC05ZCIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlEYXRlLm1hcCgoZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChkYXRlKSA+IG5vd0RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5piO5pel5Lul6ZmN44Gu5aC05ZCI44CB5YmK6Zmk44GZ44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNhbGVuZGFyRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjg5Hjgr/jg7zjg7PlkI3np7DjgpLnt6jpm4bjgZnjgovlh6bnkIbjgILlvJXmlbDjgavjga/jg5Hjgr/jg7zjg7NJROOBqOODkeOCv+ODvOODs+WQjeensOOBjOagvOe0jeOBleOCjOOBpuOBhOOCi+OAglxyXG4gICAgICAgIHBhdHRlcm5OYW1lRWRpdChcclxuICAgICAgICAgICAgc3RhdGU6IHVzZXJUYXNrLFxyXG4gICAgICAgICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xyXG4gICAgICAgICAgICAgICAgZWRpdFBhdHRlcm5JZDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgcGF0dGVybk5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfT5cclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gSUTjgavlkIjoh7TjgZnjgovopoHntKDjga7jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgpLlj5blvpdcclxuICAgICAgICAgICAgY29uc3QgZWRpdFBhdHRlcm5JbmRleCA9IHN0YXRlLnVzZXJUYXNrSW5mby5wYXR0ZXJuLmZpbmRJbmRleChcclxuICAgICAgICAgICAgICAgIChwYXR0ZXJuQ29udGVudCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuQ29udGVudC5wYXR0ZXJuSWQgPT0gYWN0aW9uLnBheWxvYWQuZWRpdFBhdHRlcm5JZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyDlj5blvpfjgZfjgZ/jgqTjg7Pjg4fjg4Pjgq/jgrnnlarlj7fjgpLnm67ljbDjgavjgIHlvJXmlbDjga7mlrDjgZfjgYTlkI3np7Djgafmm7TmlrDjgZnjgovjgIJcclxuICAgICAgICAgICAgc3RhdGUudXNlclRhc2tJbmZvLnBhdHRlcm5bZWRpdFBhdHRlcm5JbmRleF0ucGF0dGVybk5hbWUgPVxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWQucGF0dGVybk5hbWU7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICAgIGluaXQsXHJcbiAgICBSZWdpc3RlcixcclxuICAgIGFsbERlbGV0ZSxcclxuICAgIHRhc2tDaGVja0NvbXBsZXRlLFxyXG4gICAgY2FsZW5kYXJQYXR0ZXJuUmVnaXN0ZXIsXHJcbiAgICB0YXNrRGV0YWlsUmVnaXN0ZXIsXHJcbiAgICB0YXNrUmVnaXN0ZXIsXHJcbiAgICB0YXNrUGF0dGVyblVwZGF0ZSxcclxuICAgIHRhc2tEZWxldGUsXHJcbiAgICB0YXNrUmVtb3ZlUGF0dGVybixcclxuICAgIHBhdHRlcm5SZWdpc3RlcixcclxuICAgIHBhdHRlcm5EZWxldGUsXHJcbiAgICBwYXR0ZXJuTmFtZUVkaXQsXHJcbn0gPSB0YXNrc01vZHVsZS5hY3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza3NNb2R1bGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=