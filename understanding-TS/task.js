var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var college = /** @class */ (function () {
    function college(professor, id, email) {
        this.professor = professor;
        this.id = id;
        this.email = email;
    }
    return college;
}());
var clg = new college("sona", 101, "sona@gmail.com");
console.log(clg);
var details = /** @class */ (function (_super) {
    __extends(details, _super);
    function details(department, marks) {
        var _this = _super.call(this, "sona", 101, "sona@gmail.com") || this;
        _this.department = department;
        _this.marks = marks;
        return _this;
    }
    return details;
}(college));
var data = new details("computer", [80, 96, 78, 67, 88]);
console.log(data);
