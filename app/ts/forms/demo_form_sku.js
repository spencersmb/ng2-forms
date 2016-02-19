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
var DemoFormSku = (function () {
    function DemoFormSku() {
    }
    DemoFormSku.prototype.onSubmit = function (form) {
        console.log('you submitted value:', form);
    };
    DemoFormSku = __decorate([
        core_1.Component({
            selector: 'demo-form-sku',
            directives: [common_1.FORM_DIRECTIVES],
            template: "\n  <div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Demo Form: Sku</h2>\n    <form #f=\"ngForm\"\n          (ngSubmit)=\"onSubmit(f.value)\"\n          class=\"ui form\">\n\n      <div class=\"field\">\n        <label for=\"skuInput\">SKU</label>\n        <input type=\"text\"\n               id=\"skuInput\"\n               placeholder=\"SKU\"\n               ngControl=\"sku\">\n      </div>\n\n      <button type=\"submit\" class=\"ui button\">Submit</button>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DemoFormSku);
    return DemoFormSku;
})();
exports.DemoFormSku = DemoFormSku;
