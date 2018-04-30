// BUDGET CONTROLLER
var budgetController = (function () {

    // function constructor (1st letter of function constructor is always capital)
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // function constructor (1st letter of function constructor is always capital)
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

}());

// UI CONTROLLER
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputdescription: '.add__description',
        inputvalue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        //method for get input data 
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputdescription).value,
                value: document.querySelector(DOMstrings.inputvalue).value
            }
        },

        //method for get input data 
        getDOMstrings: function () {
            return DOMstrings;
        }

    };

}());

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    // all event listeners are in this func: setupEventListeners
    var setupEventListeners = function () {

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            } else {
                console.log('You pressed another key');
            }
        });

    };

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function () {

        //1. get data from input field
        var input = UICtrl.getInput();
        console.log(input);

        //2. add item to the budget controller

        //3. add item to the UI

        //4. calculate the budget

        //5. display budget on UI

        //console.log('Its works__Waow');

    }

    return {
        init: function () {
            console.log('Application started..!!');
            setupEventListeners();
        }
    }

}(budgetController, UIController));

controller.init();