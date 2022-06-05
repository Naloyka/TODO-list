// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"bM6Q":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTaskHTML = getTaskHTML;

function getTaskHTML(text, done, remoteTask) {
  return "<div class=\"container__task\" ".concat(remoteTask ? "data-flag=\"server\"" : "", ">\n    <div class=\"task\">\n    <div class=\"task__item\">\n    <label class=\"checkbox\">\n        <input type=\"checkbox\" name=\"checkbox\" class=\"checkbox__input\"").concat(done ? ' checked' : '', " id=\"checkbox\">\n        <span class=\"checkbox__label\"></span>\n    </label>\n    <p class=\"text__task").concat(done ? " text__task_done" : "", " \" translate=\"no\">").concat(text, "</p>\n        </div>\n        <button class=\"close\"></button>\n    </div>\n    </div>");
}
},{}],"MbzG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadTaskState = loadTaskState;

var _getTaskHTML = require("./getTaskHTML");

var pasteTask = document.querySelector(".paste__task");

function loadTaskState() {
  window.addEventListener("load", function () {
    for (var i = 0; i < localStorage.length; i++) {
      var openTask = JSON.parse(localStorage[i]);
      var textContent = openTask.textContent;
      var checkboxInput = Boolean(openTask.checked);
      var flagChecked = void 0;
      var flagClass = void 0;

      if (checkboxInput) {
        flagChecked = "checked";
        flagClass = "text__task_done";
      } else {
        flagChecked = "";
        flagClass = "";
      }

      pasteTask.insertAdjacentHTML('beforeend', (0, _getTaskHTML.getTaskHTML)(textContent, flagChecked, false));
    }
  });
}
},{"./getTaskHTML":"bM6Q"}],"zgpx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = load;

function load() {
  var containerTask = Array.from(document.querySelectorAll(".container__task"));

  for (var i = 0; i < containerTask.length; i++) {
    if (containerTask[i].getAttribute("data-flag") !== "server") {
      var textTask = containerTask[i].querySelector(".text__task").textContent;
      var childTask = containerTask[i].querySelector(".checkbox__input").checked;
      var task = {
        "checked": childTask,
        "textContent": textTask
      };
      var objTask = JSON.stringify(task);
      localStorage.setItem("".concat(i), objTask);
    }
  }
}
},{}],"ZRZM":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checked = checked;

var _load = require("./load");

function checked() {
  var checkboxInput = Array.from(document.querySelectorAll(".checkbox__input"));
  var textTask = Array.from(document.querySelectorAll(".text__task"));

  var _loop = function _loop(i) {
    checkboxInput[i].addEventListener("click", function () {
      if (checkboxInput[i].checked) {
        textTask[i].classList.add("text__task_done");
      } else {
        textTask[i].classList.remove("text__task_done");
      }

      (0, _load.load)();
    });
  };

  for (var i = 0; i < checkboxInput.length; i++) {
    _loop(i);
  }
}
},{"./load":"zgpx"}],"Vng4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTask = deleteTask;

var _load = require("./load");

function deleteTask() {
  var close = Array.from(document.querySelectorAll(".close"));
  close.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var deleteElement = item.closest(".container__task");
      console.log(e.target);
      deleteElement.remove();
      localStorage.clear();
      (0, _load.load)();
    });
  });
}
},{"./load":"zgpx"}],"TlJU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadRemoteTasks = loadRemoteTasks;

var _getTaskHTML = require("./getTaskHTML");

var _checked = require("./checked");

var _deleteTask = require("./deleteTask");

var pasteTask = document.querySelector(".paste__task");

function loadRemoteTasks() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
  xhr.send();
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === xhr.DONE) {
      var parseJ = JSON.parse(xhr.responseText);

      for (var i = 0; i < 5; i++) {
        var textContent = parseJ[i].title;
        pasteTask.insertAdjacentHTML('beforeend', (0, _getTaskHTML.getTaskHTML)(textContent, false, true));
      }

      (0, _checked.checked)();
      (0, _deleteTask.deleteTask)();
    }
  });
}
},{"./getTaskHTML":"bM6Q","./checked":"ZRZM","./deleteTask":"Vng4"}],"d6sW":[function(require,module,exports) {
"use strict";

var _loadStateTask = require("./loadStateTask");

var _loadRemoteTasks = require("./loadRemoteTasks");

var _getTaskHTML = require("./getTaskHTML");

var _deleteTask = require("./deleteTask");

var _checked = require("./checked");

var _load = require("./load");

/* Option */
var selectOption = document.querySelector(".select__option");
var containerOption = document.querySelector(".option__items");
var body = document.getElementsByTagName("body");
var pasteTask = document.querySelector(".paste__task");
selectOption.addEventListener("click", function () {
  selectOption.classList.toggle("select__option_active");

  if (containerOption.style.display == "block") {
    containerOption.style.display = "none";
  } else {
    containerOption.style.display = "block";
  }
});
/* Закрытие всплывающего окна */

var closeUser = document.querySelector(".close__user");
var containerUser = document.querySelector(".container__user");
var bodyContent = document.querySelector(".body");
closeUser.addEventListener("click", function () {
  containerUser.style = "display: none";
  bodyContent.classList.remove("body");
});
/* Меняем иконку фильтра */

var option = Array.from(document.querySelectorAll(".option"));
option.forEach(function (item) {
  return item.addEventListener("click", function (e) {
    var meaning = e.currentTarget.textContent;
    selectOption.textContent = meaning;
    containerOption.style.display = "none";
    selectOption.classList.toggle("select__option_active");
  });
});
/* Фильтр*/

option.forEach(function (item) {
  item.addEventListener("click", function (e) {
    var stateChecked = Array.from(document.querySelectorAll(".checkbox__input"));
    var containerTask = Array.from(document.querySelectorAll(".container__task"));

    if (item.getAttribute("data-value") == 3) {
      for (var i = 0; i < stateChecked.length; i++) {
        containerTask[i].classList.remove("container__task_hidden");

        if (stateChecked[i].checked === true) {
          containerTask[i].classList.add("container__task_hidden");
        }
      }
    }

    if (item.getAttribute("data-value") == 2) {
      for (var _i = 0; _i < stateChecked.length; _i++) {
        containerTask[_i].classList.remove("container__task_hidden");

        if (stateChecked[_i].checked === false) {
          containerTask[_i].classList.add("container__task_hidden");
        }
      }
    }

    if (item.getAttribute("data-value") == 1) {
      for (var _i2 = 0; _i2 < stateChecked.length; _i2++) {
        containerTask[_i2].classList.remove("container__task_hidden");
      }
    }
  });
});
/* Кнопка добавить задачу*/

var add = document.querySelector(".add");
var containerInput = document.querySelector(".container__input");
var input = document.querySelector(".input");

function addTask() {
  var addTaskItem = function addTaskItem() {
    if (input.value === "") {
      return;
    }

    pasteTask.insertAdjacentHTML('afterbegin', (0, _getTaskHTML.getTaskHTML)(input.value, false, false));
    input.value = "";
    (0, _checked.checked)();
    (0, _load.load)();
    (0, _deleteTask.deleteTask)();
  };

  add.addEventListener("click", function () {
    addTaskItem();
  });
  input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      addTaskItem();
    }
  });
}

addTask();
(0, _deleteTask.deleteTask)();
(0, _loadStateTask.loadTaskState)();
(0, _loadRemoteTasks.loadRemoteTasks)();
},{"./loadStateTask":"MbzG","./loadRemoteTasks":"TlJU","./getTaskHTML":"bM6Q","./deleteTask":"Vng4","./checked":"ZRZM","./load":"zgpx"}]},{},["d6sW"], null)
//# sourceMappingURL=/TODO-list/main.d255ce1b.js.map