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
          props.ingredients,
          React.createElement(
            "button",
            { type: "button", className: "btn btn-danger", onClick: props.func },
            "Delete"
          ),
          React.createElement(
            "button",
            { type: "button", className: "btn btn-secondary" },
            "Edit"
          )
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
        ingredients: "yummy stuff"
      }, {
        name: "bad",
        ingredients: "gross stuff"
      }, {
        name: "basic",
        ingredients: "bread and water"
      }],
      inputRecipeName: "",
      inputRecipeIngredients: ""
    };
    _this.addRecipe = _this.addRecipe.bind(_this);
    _this.handleRecipeName = _this.handleRecipeName.bind(_this);
    _this.handleRecipeIngredients = _this.handleRecipeIngredients.bind(_this);
    return _this;
  }

  _createClass(RecipeBox, [{
    key: "addRecipe",
    value: function addRecipe() {
      var abc = this.state.recipes;
      abc.push({ name: this.state.inputRecipeName, ingredients: this.state.inputRecipeIngredients });
      this.setState({ recipes: abc });
      this.setState({ inputRecipeName: "" });
      this.setState({ inputRecipeIngredients: "" });
    }
  }, {
    key: "handleRecipeName",
    value: function handleRecipeName(event) {
      this.setState({ inputRecipeName: event.target.value });
    }
  }, {
    key: "handleRecipeIngredients",
    value: function handleRecipeIngredients(event) {
      this.setState({ inputRecipeIngredients: event.target.value });
    }
  }, {
    key: "removeRecipe",
    value: function removeRecipe(number) {
      var temp = this.state.recipes;
      temp.splice(number, 1);
      this.setState({ recipes: temp });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

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
              "div",
              { id: "accordion", role: "tablist" },
              this.state.recipes.map(function (recipes, index) {
                return React.createElement(RecipeCard, { name: recipes.name, ingredients: recipes.ingredients, index: index, func: _this2.removeRecipe.bind(_this2, index) });
              })
            ),
            React.createElement(
              "div",
              { className: "modal fade", id: "exampleModal", tabindex: "-1", role: "dialog", "aria-labelledby": "exampleModalLabel", "aria-hidden": "true" },
              React.createElement(
                "div",
                { className: "modal-dialog", role: "document" },
                React.createElement(
                  "div",
                  { className: "modal-content" },
                  React.createElement(
                    "div",
                    { className: "modal-header" },
                    React.createElement(
                      "h5",
                      { className: "modal-title", id: "exampleModalLabel" },
                      "Add a Recipe"
                    ),
                    React.createElement(
                      "button",
                      { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                      React.createElement(
                        "span",
                        { "aria-hidden": "true" },
                        "\xD7"
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "modal-body" },
                    React.createElement("input", { value: this.state.inputRecipeName, onChange: this.handleRecipeName }),
                    React.createElement("input", { value: this.state.inputRecipeIngredients, onChange: this.handleRecipeIngredients })
                  ),
                  React.createElement(
                    "div",
                    { className: "modal-footer" },
                    React.createElement(
                      "button",
                      { type: "button", className: "btn btn-primary", "data-dismiss": "modal", onClick: this.addRecipe },
                      "Add Recipe"
                    ),
                    React.createElement(
                      "button",
                      { type: "button", className: "btn btn-secondary", "data-dismiss": "modal" },
                      "Cancel"
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            "button",
            { type: "button", className: "btn btn-primary", "data-toggle": "modal", "data-target": "#exampleModal" },
            "Add Recipe"
          )
        )
      );
    }
  }]);

  return RecipeBox;
}(React.Component);

ReactDOM.render(React.createElement(RecipeBox, null), document.getElementById("recipeBox"));