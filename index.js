"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecipeBox = function (_React$Component) {
  _inherits(RecipeBox, _React$Component);

  function RecipeBox(props) {
    _classCallCheck(this, RecipeBox);

    var _this = _possibleConstructorReturn(this, (RecipeBox.__proto__ || Object.getPrototypeOf(RecipeBox)).call(this, props));

    _this.state = {
      recipes: [{
        name: "good",
        ingredients: "yummystuff"
      }, {
        name: "bad",
        ingredients: "gross stuff"
      }, {
        name: "basic",
        ingredients: "bread and water"
      }]
    };
    _this.test = _this.test.bind(_this);
    _this.createMarkup = _this.createMarkup.bind(_this);

    return _this;
  }

  _createClass(RecipeBox, [{
    key: "test",
    value: function test() {
      console.log(this.state.recipes);
      var abc = this.state.recipes;
      abc.push({ name: "basic", ingredients: "bread and water" });
      this.setState({ abc: abc });
      console.log(this.state.recipes);
    }
  }, {
    key: "createMarkup",
    value: function createMarkup() {
      var cards = "";

      for (var i = 0; i < this.state.recipes.length; i++) {
        cards += "<div class='card'><div class='card-header' role='tab' id='heading" + i + "'><h5 class='mb-0'><a data-toggle='collapse' href='#collapse" + i + "' aria-expanded='true' aria-controls='collapse" + i + "'>" + this.state.recipes[i].name + "</a></h5></div><div id='collapse" + i + "' class='collapse' role='tabpanel' aria-labelledby='heading" + i + "' parent='#accordion'><div class='card-body'>" + this.state.recipes[i].ingredients + "</div></div></div>";
      }

      cards += "";

      return { __html: cards };
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "div",
            { className: "jumbotron" },
            React.createElement(
              "button",
              { onClick: this.test },
              "test"
            ),
            React.createElement("div", { id: "accordion", role: "tablist", dangerouslySetInnerHTML: this.createMarkup() })
          )
        )
      );
    }
  }]);

  return RecipeBox;
}(React.Component);

ReactDOM.render(React.createElement(RecipeBox, null), document.getElementById("recipeBox"));