var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var DemoFormNgModel = (function () {
    function DemoFormNgModel(fb) {
        this.myForm = fb.group({
            'productName': ['', common_1.Validators.required]
        });
    }
    DemoFormNgModel.prototype.onSubmit = function (value) {
        console.log('you submitted value: ', value);
    };
    DemoFormNgModel = __decorate([
        core_1.Component({
            selector: 'demo-form-ng-model',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            template: "\n  <div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Demo Form: with ng-model</h2>\n\n    <div class=\"ui info message\">\n      The product name is: {{productName}}\n    </div>\n\n    <form [ngFormModel]=\"myForm\"\n          (ngSubmit)=\"onSubmit(myForm.value)\"\n          class=\"ui form\">\n\n      <div class=\"field\">\n        <label for=\"productNameInput\">Product Name</label>\n        <input type=\"text\"\n               id=\"productNameInput\"\n               placeholder=\"Product Name\"\n               [ngFormControl]=\"myForm.find('productName')\"\n               [(ngModel)]=\"productName\">\n      </div>\n\n      <div *ngIf=\"!myForm.valid\"\n        class=\"ui error message\">Form is invalid</div>\n      <button type=\"submit\" class=\"ui button\">Submit</button>\n    </form>\n\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object])
    ], DemoFormNgModel);
    return DemoFormNgModel;
    var _a;
})();
exports.DemoFormNgModel = DemoFormNgModel;
