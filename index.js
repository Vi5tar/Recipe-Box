"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecipeCard = function RecipeCard(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "card" },
      React.createElement(
        "div",
        { className: "card-header", role: "tab", id: "heading" + props.index },
        React.createElement(
          "h5",
          { className: "mb-0" },
          React.createElement(
            "a",
            { "data-toggle": "collapse", href: "#collapse" + props.index, "aria-expanded": "true", "aria-controls": "collapse" + props.index },
            props.name
          )
        )
      ),
      React.createElement(
        "div",
        { id: "collapse" + props.index, className: "collapse", role: "tabpanel", "aria-labelledby": "heading" + props.index, "data-parent": "#accordion" },
        React.createElement(
          "div",
          { className: "card-body" },
          props.ingredients
        )
      )
    )
  );
};

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
    return _this;
  }

  _createClass(RecipeBox, [{
    key: "test",
    value: function test() {
      var abc = this.state.recipes;
      abc.push({ name: "basic", ingredients: "bread and water" });
      this.setState({ abc: abc });
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
            React.createElement(
              "div",
              { id: "accordion", role: "tablist" },
              this.state.recipes.map(function (recipes, index) {
                return React.createElement(RecipeCard, { name: recipes.name, ingredients: recipes.ingredients, index: index });
              })
            )
          )
        )
      );
    }
  }]);

  return RecipeBox;
}(React.Component);

ReactDOM.render(React.createElement(RecipeBox, null), document.getElementById("recipeBox"));