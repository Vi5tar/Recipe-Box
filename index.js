"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecipeCard = function (_React$Component) {
  _inherits(RecipeCard, _React$Component);

  function RecipeCard(props) {
    _classCallCheck(this, RecipeCard);

    var _this = _possibleConstructorReturn(this, (RecipeCard.__proto__ || Object.getPrototypeOf(RecipeCard)).call(this, props));

    _this.createItems = _this.createItems.bind(_this);
    return _this;
  }

  _createClass(RecipeCard, [{
    key: "createItems",
    value: function createItems(items) {
      var output = [];
      for (var i = 0; i < items.length; i++) {
        output.push(React.createElement(
          "li",
          { className: "list-group-item" },
          items[i]
        ));
      }return output;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "card" },
        React.createElement(
          "div",
          { className: "card-header", role: "tab", id: "heading" + this.props.index },
          React.createElement(
            "h5",
            { className: "mb-0" },
            React.createElement(
              "a",
              { "data-toggle": "collapse", "data-parent": "#accordion", href: "#collapse" + this.props.index, "aria-expanded": "false", "aria-controls": "collapse" + this.props.index },
              this.props.name
            )
          )
        ),
        React.createElement(
          "div",
          { id: "collapse" + this.props.index, className: "collapse", role: "tabpanel", "aria-labelledby": "heading" + this.props.index },
          React.createElement(
            "div",
            { className: "card-body" },
            React.createElement(
              "ul",
              { className: "list-group" },
              this.createItems(this.props.ingredients)
            ),
            React.createElement(
              "button",
              { type: "button", className: "btn btn-danger", onClick: this.props.func },
              "Delete"
            ),
            React.createElement(
              "button",
              { type: "button", className: "btn btn-secondary", "data-toggle": "modal", "data-target": "#modal" + this.props.index, onClick: this.props.func4 },
              "Edit"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "modal fade", id: "modal" + this.props.index, tabindex: "-1", role: "dialog", "aria-labelledby": "modalLabel" + this.props.index, "aria-hidden": "true" },
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
                  { className: "modal-title", id: "modalLabel" + this.props.index },
                  "Edit Recipe"
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
                React.createElement(
                  "p",
                  null,
                  "Recipe:"
                ),
                React.createElement("input", { type: "text", className: "form-control", value: this.props.editName, onChange: this.props.func1 }),
                React.createElement(
                  "p",
                  null,
                  "Ingredients:"
                ),
                React.createElement("textarea", { type: "text", className: "form-control", value: this.props.editIngredients, onChange: this.props.func3 })
              ),
              React.createElement(
                "div",
                { className: "modal-footer" },
                React.createElement(
                  "button",
                  { type: "button", className: "btn btn-primary", "data-dismiss": "modal", onClick: this.props.func2 },
                  "Edit Recipe"
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
      );
    }
  }]);

  return RecipeCard;
}(React.Component);

;

var RecipeBox = function (_React$Component2) {
  _inherits(RecipeBox, _React$Component2);

  function RecipeBox(props) {
    _classCallCheck(this, RecipeBox);

    var _this2 = _possibleConstructorReturn(this, (RecipeBox.__proto__ || Object.getPrototypeOf(RecipeBox)).call(this, props));

    _this2.state = {
      recipes: [{
        name: "Good",
        ingredients: ["Yummy Stuff"]
      }, {
        name: "Bad",
        ingredients: ["Gross Stuff"]
      }, {
        name: "Basic",
        ingredients: ["Bread", "Water"]
      }],
      inputRecipeName: "",
      inputRecipeIngredients: "",
      editRecipeName: "",
      editRecipeIngredients: ""
    };
    _this2.addRecipe = _this2.addRecipe.bind(_this2);
    _this2.handleRecipeName = _this2.handleRecipeName.bind(_this2);
    _this2.handleRecipeIngredients = _this2.handleRecipeIngredients.bind(_this2);
    _this2.setInitialState = _this2.setInitialState.bind(_this2);
    _this2.handleRecipeNameEdit = _this2.handleRecipeNameEdit.bind(_this2);
    _this2.handleRecipeIngredientsEdit = _this2.handleRecipeIngredientsEdit.bind(_this2);
    _this2.editRecipe = _this2.editRecipe.bind(_this2);
    _this2.storageUpdate = _this2.storageUpdate.bind(_this2);
    return _this2;
  }

  _createClass(RecipeBox, [{
    key: "addRecipe",
    value: function addRecipe() {
      var abc = this.state.recipes;
      var tempIng = [];
      var counter = 0;
      var tempObj = {
        name: this.state.inputRecipeName,
        ingredients: []
      };
      for (var i = 0; i < this.state.inputRecipeIngredients.length; i++) {
        if (this.state.inputRecipeIngredients.charAt(i) == ",") {
          tempObj.ingredients[counter] = tempIng.join("");
          counter++;
          tempIng = [];
          if (i + 1 == " ") {
            i++;
          }
        } else {
          tempIng.push(this.state.inputRecipeIngredients.charAt(i));
        }
      }
      tempObj.ingredients[counter] = tempIng.join("");
      abc.push(tempObj);
      this.setState({ recipes: abc });
      this.storageUpdate();
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
      this.storageUpdate();
    }
  }, {
    key: "setInitialState",
    value: function setInitialState(num) {
      this.setState({ editRecipeName: this.state.recipes[num].name });
      this.setState({ editRecipeIngredients: this.state.recipes[num].ingredients });
    }
  }, {
    key: "handleRecipeNameEdit",
    value: function handleRecipeNameEdit(event) {
      this.setState({ editRecipeName: event.target.value });
    }
  }, {
    key: "handleRecipeIngredientsEdit",
    value: function handleRecipeIngredientsEdit(event) {
      this.setState({ editRecipeIngredients: event.target.value });
    }
  }, {
    key: "editRecipe",
    value: function editRecipe(num) {
      var def = this.state.recipes;
      var tempIng = [];
      var counter = 0;
      var tempObj = {
        name: this.state.editRecipeName,
        ingredients: []
      };
      for (var i = 0; i < this.state.editRecipeIngredients.length; i++) {
        if (this.state.editRecipeIngredients.charAt(i) == ",") {
          tempObj.ingredients[counter] = tempIng.join("");
          counter++;
          tempIng = [];
          if (i + 1 == " ") {
            i++;
          }
        } else {
          tempIng.push(this.state.editRecipeIngredients.charAt(i));
        }
      }
      tempObj.ingredients[counter] = tempIng.join("");
      def[num].name = tempObj.name;
      def[num].ingredients = tempObj.ingredients;
      this.setState({ recipes: def });
      this.storageUpdate();
      this.setState({ editRecipeName: "" });
      this.setState({ editRecipeIngredients: "" });
    }
  }, {
    key: "storageUpdate",
    value: function storageUpdate() {
      localStorage.setItem("recipeStorage", JSON.stringify(this.state.recipes));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof Storage !== "undefined") {
        this.storageUpdate();
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (localStorage.recipeStorage) {
        this.setState({
          recipes: JSON.parse(localStorage.getItem("recipeStorage"))
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

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
              { id: "accordion", role: "tablist", "aria-multiselectable": "true" },
              this.state.recipes.map(function (recipes, index) {
                return React.createElement(RecipeCard, { name: recipes.name, ingredients: recipes.ingredients, index: index, editName: _this3.state.editRecipeName, editIngredients: _this3.state.editRecipeIngredients, func: _this3.removeRecipe.bind(_this3, index), func1: _this3.handleRecipeNameEdit, func2: _this3.editRecipe.bind(_this3, index), func3: _this3.handleRecipeIngredientsEdit, func4: _this3.setInitialState.bind(_this3, index) });
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
                    React.createElement(
                      "p",
                      null,
                      "Recipe:"
                    ),
                    React.createElement("input", { type: "text", className: "form-control", placeholder: "Recipe Name", value: this.state.inputRecipeName, onChange: this.handleRecipeName }),
                    React.createElement(
                      "p",
                      null,
                      "Ingredients:"
                    ),
                    React.createElement("textarea", { type: "text", className: "form-control", placeholder: "Recipe Ingredients Seperated by a Comma", value: this.state.inputRecipeIngredients, onChange: this.handleRecipeIngredients })
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