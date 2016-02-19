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
var DemoFormWithValidationsShorthand = (function () {
    function DemoFormWithValidationsShorthand(fb) {
        this.myForm = fb.group({
            'sku': ['', common_1.Validators.required]
        });
    }
    DemoFormWithValidationsShorthand.prototype.onSubmit = function (value) {
        console.log('you submitted value:', value.sku);
    };
    DemoFormWithValidationsShorthand = __decorate([
        core_1.Component({
            selector: 'demo-form-with-validations-shorthand',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            template: "\n<div class=\"ui raised segment\">\n  <h2 class=\"ui header\">Demo Form: with validations (shorthand)</h2>\n  <form [ngFormModel]=\"myForm\"\n        (ngSubmit)=\"onSubmit(myForm.value)\"\n        class=\"ui form\">\n\n    <div class=\"field\"\n      [class.error]=\"!myForm.find('sku').valid && myForm.find('sku').touched\">\n      <label for=\"skuInput\">SKU</label>\n      <input type=\"text\"\n             id=\"skuInput\"\n             placeholder=\"SKU\"\n             #sku=\"ngForm\"\n             [ngFormControl]=\"myForm.controls['sku']\">\n       <div *ngIf=\"!sku.control.valid\"\n         class=\"ui error message\">SKU is invalid</div>\n       <div *ngIf=\"sku.control.hasError('required')\"\n         class=\"ui error message\">SKU is required</div>\n    </div>\n\n    <div *ngIf=\"!myForm.valid\"\n      class=\"ui error message\">Form is invalid</div>\n\n    <button type=\"submit\" class=\"ui button\">Submit</button>\n  </form>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object])
    ], DemoFormWithValidationsShorthand);
    return DemoFormWithValidationsShorthand;
    var _a;
})();
exports.DemoFormWithValidationsShorthand = DemoFormWithValidationsShorthand;
