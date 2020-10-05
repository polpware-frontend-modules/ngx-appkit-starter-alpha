(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@polpware/ngx-appkit-contracts-alpha'), require('@polpware/ngx-oauth2'), require('@angular/animations'), require('@angular/core'), require('@polpware/ngx-appkit-services-alpha'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http'), require('@angular/router'), require('@angular/platform-browser'), require('@angular/forms'), require('@swimlane/ngx-datatable'), require('ngx-bootstrap/tooltip'), require('@angular/common'), require('@ngx-translate/core'), require('ngx-bootstrap/modal'), require('chart.js'), require('ng2-charts'), require('ngx-bootstrap/dropdown'), require('ngx-bootstrap/tabs'), require('ngx-bootstrap/pagination'), require('ngx-bootstrap/accordion'), require('ngx-bootstrap/popover'), require('ngx-bootstrap/carousel'), require('ngx-bootstrap/alert')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-appkit-starter-alpha', ['exports', '@polpware/ngx-appkit-contracts-alpha', '@polpware/ngx-oauth2', '@angular/animations', '@angular/core', '@polpware/ngx-appkit-services-alpha', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/router', '@angular/platform-browser', '@angular/forms', '@swimlane/ngx-datatable', 'ngx-bootstrap/tooltip', '@angular/common', '@ngx-translate/core', 'ngx-bootstrap/modal', 'chart.js', 'ng2-charts', 'ngx-bootstrap/dropdown', 'ngx-bootstrap/tabs', 'ngx-bootstrap/pagination', 'ngx-bootstrap/accordion', 'ngx-bootstrap/popover', 'ngx-bootstrap/carousel', 'ngx-bootstrap/alert'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-appkit-starter-alpha'] = {}), global.ngxAppkitContractsAlpha, global.ngxOauth2, global.ng.animations, global.ng.core, global.ngxAppkitServicesAlpha, global.rxjs, global.rxjs.operators, global.ng.common.http, global.ng.router, global.ng.platformBrowser, global.ng.forms, global.ngxDatatable, global.tooltip, global.ng.common, global.core$1, global.modal, global.chart_js, global.ng2Charts, global.dropdown, global.tabs, global.pagination, global.accordion, global.popover, global.carousel, global.alert));
}(this, (function (exports, ngxAppkitContractsAlpha, ngxOauth2, animations, core, ngxAppkitServicesAlpha, rxjs, operators, http, router, platformBrowser, forms, ngxDatatable, tooltip, common, core$1, modal, chart_js, ng2Charts, dropdown, tabs, pagination, accordion, popover, carousel, alert) { 'use strict';

    chart_js = chart_js && Object.prototype.hasOwnProperty.call(chart_js, 'default') ? chart_js['default'] : chart_js;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    // =============================
    var Notification = /** @class */ (function () {
        function Notification() {
        }
        Notification.Create = function (data) {
            var n = new Notification();
            Object.assign(n, data);
            if (n.date) {
                n.date = ngxAppkitContractsAlpha.Utilities.parseDate(n.date);
            }
            return n;
        };
        return Notification;
    }());

    // =============================
    // Email: info@ebenmonney.com
    // www.ebenmonney.com/templates
    // =============================
    var Role = /** @class */ (function () {
        function Role(name, description, permissions) {
            this.name = name;
            this.description = description;
            this.permissions = permissions;
        }
        return Role;
    }());

    // =============================
    var UserEdit = /** @class */ (function (_super) {
        __extends(UserEdit, _super);
        function UserEdit(currentPassword, newPassword, confirmPassword) {
            var _this = _super.call(this) || this;
            _this.currentPassword = currentPassword;
            _this.newPassword = newPassword;
            _this.confirmPassword = confirmPassword;
            return _this;
        }
        return UserEdit;
    }(ngxOauth2.User));

    // =============================
    // Email: info@ebenmonney.com
    // www.ebenmonney.com/templates
    // =============================

    (function (Gender) {
        Gender[Gender["None"] = 0] = "None";
        Gender[Gender["Female"] = 1] = "Female";
        Gender[Gender["Male"] = 2] = "Male";
    })(exports.Gender || (exports.Gender = {}));

    // =============================
    // Email: info@ebenmonney.com
    // www.ebenmonney.com/templates
    // =============================
    var UserLogin = /** @class */ (function () {
        function UserLogin(userName, password, rememberMe) {
            this.userName = userName;
            this.password = password;
            this.rememberMe = rememberMe;
        }
        return UserLogin;
    }());

    // =============================
    var fadeInOut = animations.trigger('fadeInOut', [
        animations.transition(':enter', [animations.style({ opacity: 0 }), animations.animate('0.4s ease-in', animations.style({ opacity: 1 }))]),
        animations.transition(':leave', [animations.animate('0.4s 10ms ease-out', animations.style({ opacity: 0 }))])
    ]);
    function flyInOut(duration) {
        if (duration === void 0) { duration = 0.2; }
        return animations.trigger('flyInOut', [
            animations.state('in', animations.style({ opacity: 1, transform: 'translateX(0)' })),
            animations.transition('void => *', [animations.style({ opacity: 0, transform: 'translateX(-100%)' }), animations.animate(duration + "s ease-in")]),
            animations.transition('* => void', [animations.animate(duration + "s 10ms ease-out", animations.style({ opacity: 0, transform: 'translateX(100%)' }))])
        ]);
    }

    var ConfigurationServiceProvider = /** @class */ (function (_super) {
        __extends(ConfigurationServiceProvider, _super);
        function ConfigurationServiceProvider(impl) {
            var _this = _super.call(this) || this;
            _this.impl = impl;
            return _this;
        }
        ConfigurationServiceProvider.prototype.get = function () {
            return this.impl;
        };
        /** @nocollapse */ ConfigurationServiceProvider.ɵfac = function ConfigurationServiceProvider_Factory(t) { return new (t || ConfigurationServiceProvider)(core.ɵɵinject(ngxAppkitServicesAlpha.ConfigurationService)); };
        /** @nocollapse */ ConfigurationServiceProvider.ɵprov = core.ɵɵdefineInjectable({ token: ConfigurationServiceProvider, factory: ConfigurationServiceProvider.ɵfac });
        return ConfigurationServiceProvider;
    }(ngxAppkitContractsAlpha.ConfigurationServiceAbstractProvider));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ConfigurationServiceProvider, [{
            type: core.Injectable
        }], function () { return [{ type: ngxAppkitServicesAlpha.ConfigurationService }]; }, null); })();

    var ThemeManagerProvider = /** @class */ (function (_super) {
        __extends(ThemeManagerProvider, _super);
        function ThemeManagerProvider(impl) {
            var _this = _super.call(this) || this;
            _this.impl = impl;
            return _this;
        }
        ThemeManagerProvider.prototype.get = function () {
            return this.impl;
        };
        /** @nocollapse */ ThemeManagerProvider.ɵfac = function ThemeManagerProvider_Factory(t) { return new (t || ThemeManagerProvider)(core.ɵɵinject(ngxAppkitServicesAlpha.ThemeManager)); };
        /** @nocollapse */ ThemeManagerProvider.ɵprov = core.ɵɵdefineInjectable({ token: ThemeManagerProvider, factory: ThemeManagerProvider.ɵfac });
        return ThemeManagerProvider;
    }(ngxAppkitContractsAlpha.ThemeManagerAbstractProvider));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(ThemeManagerProvider, [{
            type: core.Injectable
        }], function () { return [{ type: ngxAppkitServicesAlpha.ThemeManager }]; }, null); })();

    var AccountEndpoint = /** @class */ (function (_super) {
        __extends(AccountEndpoint, _super);
        function AccountEndpoint(configurations, http, authService) {
            var _this = _super.call(this, http, authService) || this;
            _this.configurations = configurations;
            _this._usersUrl = '/api/account/users';
            _this._userByUserNameUrl = '/api/account/users/username';
            _this._currentUserUrl = '/api/account/users/me';
            _this._currentUserPreferencesUrl = '/api/account/users/me/preferences';
            _this._unblockUserUrl = '/api/account/users/unblock';
            _this._rolesUrl = '/api/account/roles';
            _this._roleByRoleNameUrl = '/api/account/roles/name';
            _this._permissionsUrl = '/api/account/permissions';
            return _this;
        }
        Object.defineProperty(AccountEndpoint.prototype, "usersUrl", {
            get: function () { return this.configurations.baseUrl + this._usersUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountEndpoint.prototype, "userByUserNameUrl", {
            get: function () { return this.configurations.baseUrl + this._userByUserNameUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountEndpoint.prototype, "currentUserUrl", {
            get: function () { return this.configurations.baseUrl + this._currentUserUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountEndpoint.prototype, "currentUserPreferencesUrl", {
            get: function () { return this.configurations.baseUrl + this._currentUserPreferencesUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountEndpoint.prototype, "unblockUserUrl", {
            get: function () { return this.configurations.baseUrl + this._unblockUserUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountEndpoint.prototype, "rolesUrl", {
            get: function () { return this.configurations.baseUrl + this._rolesUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountEndpoint.prototype, "roleByRoleNameUrl", {
            get: function () { return this.configurations.baseUrl + this._roleByRoleNameUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountEndpoint.prototype, "permissionsUrl", {
            get: function () { return this.configurations.baseUrl + this._permissionsUrl; },
            enumerable: true,
            configurable: true
        });
        AccountEndpoint.prototype.getUserEndpoint = function (userId) {
            var _this = this;
            var endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
            return this.http.get(endpointUrl, this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getUserEndpoint(userId); });
            }));
        };
        AccountEndpoint.prototype.getUserByUserNameEndpoint = function (userName) {
            var _this = this;
            var endpointUrl = this.userByUserNameUrl + "/" + userName;
            return this.http.get(endpointUrl, this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getUserByUserNameEndpoint(userName); });
            }));
        };
        AccountEndpoint.prototype.getUsersEndpoint = function (page, pageSize) {
            var _this = this;
            var endpointUrl = page && pageSize ? this.usersUrl + "/" + page + "/" + pageSize : this.usersUrl;
            return this.http.get(endpointUrl, this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getUsersEndpoint(page, pageSize); });
            }));
        };
        AccountEndpoint.prototype.getNewUserEndpoint = function (userObject) {
            var _this = this;
            return this.http.post(this.usersUrl, JSON.stringify(userObject), this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getNewUserEndpoint(userObject); });
            }));
        };
        AccountEndpoint.prototype.getUpdateUserEndpoint = function (userObject, userId) {
            var _this = this;
            var endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
            return this.http.put(endpointUrl, JSON.stringify(userObject), this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getUpdateUserEndpoint(userObject, userId); });
            }));
        };
        AccountEndpoint.prototype.getPatchUpdateUserEndpoint = function (valueOrPatch, opOrUserId, path, from, userId) {
            var _this = this;
            var endpointUrl;
            var patchDocument;
            if (path) {
                endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
                patchDocument = from ?
                    [{ value: valueOrPatch, path: path, op: opOrUserId, from: from }] :
                    [{ value: valueOrPatch, path: path, op: opOrUserId }];
            }
            else {
                endpointUrl = opOrUserId ? this.usersUrl + "/" + opOrUserId : this.currentUserUrl;
                patchDocument = valueOrPatch;
            }
            return this.http.patch(endpointUrl, JSON.stringify(patchDocument), this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getPatchUpdateUserEndpoint(valueOrPatch, opOrUserId, path, from, userId); });
            }));
        };
        AccountEndpoint.prototype.getUserPreferencesEndpoint = function () {
            var _this = this;
            return this.http.get(this.currentUserPreferencesUrl, this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getUserPreferencesEndpoint(); });
            }));
        };
        AccountEndpoint.prototype.getUpdateUserPreferencesEndpoint = function (configuration) {
            var _this = this;
            return this.http.put(this.currentUserPreferencesUrl, JSON.stringify(configuration), this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getUpdateUserPreferencesEndpoint(configuration); });
            }));
        };
        AccountEndpoint.prototype.getUnblockUserEndpoint = function (userId) {
            var _this = this;
            var endpointUrl = this.unblockUserUrl + "/" + userId;
            return this.http.put(endpointUrl, null, this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getUnblockUserEndpoint(userId); });
            }));
        };
        AccountEndpoint.prototype.getDeleteUserEndpoint = function (userId) {
            var _this = this;
            var endpointUrl = this.usersUrl + "/" + userId;
            return this.http.delete(endpointUrl, this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getDeleteUserEndpoint(userId); });
            }));
        };
        AccountEndpoint.prototype.getRoleEndpoint = function (roleId) {
            var _this = this;
            var endpointUrl = this.rolesUrl + "/" + roleId;
            return this.http.get(endpointUrl, this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getRoleEndpoint(roleId); });
            }));
        };
        AccountEndpoint.prototype.getRoleByRoleNameEndpoint = function (roleName) {
            var _this = this;
            var endpointUrl = this.roleByRoleNameUrl + "/" + roleName;
            return this.http.get(endpointUrl, this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getRoleByRoleNameEndpoint(roleName); });
            }));
        };
        AccountEndpoint.prototype.getRolesEndpoint = function (page, pageSize) {
            var _this = this;
            var endpointUrl = page && pageSize ? this.rolesUrl + "/" + page + "/" + pageSize : this.rolesUrl;
            return this.http.get(endpointUrl, this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getRolesEndpoint(page, pageSize); });
            }));
        };
        AccountEndpoint.prototype.getNewRoleEndpoint = function (roleObject) {
            var _this = this;
            return this.http.post(this.rolesUrl, JSON.stringify(roleObject), this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getNewRoleEndpoint(roleObject); });
            }));
        };
        AccountEndpoint.prototype.getUpdateRoleEndpoint = function (roleObject, roleId) {
            var _this = this;
            var endpointUrl = this.rolesUrl + "/" + roleId;
            return this.http.put(endpointUrl, JSON.stringify(roleObject), this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getUpdateRoleEndpoint(roleObject, roleId); });
            }));
        };
        AccountEndpoint.prototype.getDeleteRoleEndpoint = function (roleId) {
            var _this = this;
            var endpointUrl = this.rolesUrl + "/" + roleId;
            return this.http.delete(endpointUrl, this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getDeleteRoleEndpoint(roleId); });
            }));
        };
        AccountEndpoint.prototype.getPermissionsEndpoint = function () {
            var _this = this;
            return this.http.get(this.permissionsUrl, this.requestHeaders).pipe(operators.catchError(function (error) {
                return _this.handleError(error, function () { return _this.getPermissionsEndpoint(); });
            }));
        };
        /** @nocollapse */ AccountEndpoint.ɵfac = function AccountEndpoint_Factory(t) { return new (t || AccountEndpoint)(core.ɵɵinject(ngxAppkitServicesAlpha.ConfigurationService), core.ɵɵinject(http.HttpClient), core.ɵɵinject(ngxOauth2.AuthService)); };
        /** @nocollapse */ AccountEndpoint.ɵprov = core.ɵɵdefineInjectable({ token: AccountEndpoint, factory: AccountEndpoint.ɵfac });
        return AccountEndpoint;
    }(ngxOauth2.EndpointBase));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AccountEndpoint, [{
            type: core.Injectable
        }], function () { return [{ type: ngxAppkitServicesAlpha.ConfigurationService }, { type: http.HttpClient }, { type: ngxOauth2.AuthService }]; }, null); })();

    // =============================
    var AccountService = /** @class */ (function () {
        function AccountService(authService, accountEndpoint) {
            this.authService = authService;
            this.accountEndpoint = accountEndpoint;
            this._rolesChanged = new rxjs.Subject();
        }
        AccountService.prototype.getUser = function (userId) {
            return this.accountEndpoint.getUserEndpoint(userId);
        };
        AccountService.prototype.getUserAndRoles = function (userId) {
            return rxjs.forkJoin(this.accountEndpoint.getUserEndpoint(userId), this.accountEndpoint.getRolesEndpoint());
        };
        AccountService.prototype.getUsers = function (page, pageSize) {
            return this.accountEndpoint.getUsersEndpoint(page, pageSize);
        };
        AccountService.prototype.getUsersAndRoles = function (page, pageSize) {
            return rxjs.forkJoin(this.accountEndpoint.getUsersEndpoint(page, pageSize), this.accountEndpoint.getRolesEndpoint());
        };
        AccountService.prototype.updateUser = function (user) {
            var _this = this;
            if (user.id) {
                return this.accountEndpoint.getUpdateUserEndpoint(user, user.id);
            }
            else {
                return this.accountEndpoint.getUserByUserNameEndpoint(user.userName).pipe(operators.mergeMap(function (foundUser) {
                    user.id = foundUser.id;
                    return _this.accountEndpoint.getUpdateUserEndpoint(user, user.id);
                }));
            }
        };
        AccountService.prototype.newUser = function (user) {
            return this.accountEndpoint.getNewUserEndpoint(user);
        };
        AccountService.prototype.getUserPreferences = function () {
            return this.accountEndpoint.getUserPreferencesEndpoint();
        };
        AccountService.prototype.updateUserPreferences = function (configuration) {
            return this.accountEndpoint.getUpdateUserPreferencesEndpoint(configuration);
        };
        AccountService.prototype.deleteUser = function (userOrUserId) {
            var _this = this;
            if (typeof userOrUserId === 'string' || userOrUserId instanceof String) {
                return this.accountEndpoint.getDeleteUserEndpoint(userOrUserId).pipe(operators.tap(function (data) { return _this.onRolesUserCountChanged(data.roles); }));
            }
            else {
                if (userOrUserId.id) {
                    return this.deleteUser(userOrUserId.id);
                }
                else {
                    return this.accountEndpoint.getUserByUserNameEndpoint(userOrUserId.userName).pipe(operators.mergeMap(function (user) { return _this.deleteUser(user.id); }));
                }
            }
        };
        AccountService.prototype.unblockUser = function (userId) {
            return this.accountEndpoint.getUnblockUserEndpoint(userId);
        };
        AccountService.prototype.userHasPermission = function (permissionValue) {
            return this.permissions.some(function (p) { return p == permissionValue; });
        };
        AccountService.prototype.refreshLoggedInUser = function () {
            return this.accountEndpoint.refreshLogin();
        };
        AccountService.prototype.getRoles = function (page, pageSize) {
            return this.accountEndpoint.getRolesEndpoint(page, pageSize);
        };
        AccountService.prototype.getRolesAndPermissions = function (page, pageSize) {
            return rxjs.forkJoin(this.accountEndpoint.getRolesEndpoint(page, pageSize), this.accountEndpoint.getPermissionsEndpoint());
        };
        AccountService.prototype.updateRole = function (role) {
            var _this = this;
            if (role.id) {
                return this.accountEndpoint.getUpdateRoleEndpoint(role, role.id).pipe(operators.tap(function (data) { return _this.onRolesChanged([role], AccountService.roleModifiedOperation); }));
            }
            else {
                return this.accountEndpoint.getRoleByRoleNameEndpoint(role.name).pipe(operators.mergeMap(function (foundRole) {
                    role.id = foundRole.id;
                    return _this.accountEndpoint.getUpdateRoleEndpoint(role, role.id);
                }), operators.tap(function (data) { return _this.onRolesChanged([role], AccountService.roleModifiedOperation); }));
            }
        };
        AccountService.prototype.newRole = function (role) {
            var _this = this;
            return this.accountEndpoint.getNewRoleEndpoint(role).pipe(operators.tap(function (data) { return _this.onRolesChanged([role], AccountService.roleAddedOperation); }));
        };
        AccountService.prototype.deleteRole = function (roleOrRoleId) {
            var _this = this;
            if (typeof roleOrRoleId === 'string' || roleOrRoleId instanceof String) {
                return this.accountEndpoint.getDeleteRoleEndpoint(roleOrRoleId).pipe(operators.tap(function (data) { return _this.onRolesChanged([data], AccountService.roleDeletedOperation); }));
            }
            else {
                if (roleOrRoleId.id) {
                    return this.deleteRole(roleOrRoleId.id);
                }
                else {
                    return this.accountEndpoint.getRoleByRoleNameEndpoint(roleOrRoleId.name).pipe(operators.mergeMap(function (role) { return _this.deleteRole(role.id); }));
                }
            }
        };
        AccountService.prototype.getPermissions = function () {
            return this.accountEndpoint.getPermissionsEndpoint();
        };
        AccountService.prototype.onRolesChanged = function (roles, op) {
            this._rolesChanged.next({ roles: roles, operation: op });
        };
        AccountService.prototype.onRolesUserCountChanged = function (roles) {
            return this.onRolesChanged(roles, AccountService.roleModifiedOperation);
        };
        AccountService.prototype.getRolesChangedEvent = function () {
            return this._rolesChanged.asObservable();
        };
        Object.defineProperty(AccountService.prototype, "permissions", {
            get: function () {
                return this.authService.userPermissions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountService.prototype, "currentUser", {
            get: function () {
                return this.authService.currentUser;
            },
            enumerable: true,
            configurable: true
        });
        AccountService.roleAddedOperation = 'add';
        AccountService.roleDeletedOperation = 'delete';
        AccountService.roleModifiedOperation = 'modify';
        /** @nocollapse */ AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(core.ɵɵinject(ngxOauth2.AuthService), core.ɵɵinject(AccountEndpoint)); };
        /** @nocollapse */ AccountService.ɵprov = core.ɵɵdefineInjectable({ token: AccountService, factory: AccountService.ɵfac });
        return AccountService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AccountService, [{
            type: core.Injectable
        }], function () { return [{ type: ngxOauth2.AuthService }, { type: AccountEndpoint }]; }, null); })();

    var NotificationEndpoint = /** @class */ (function () {
        function NotificationEndpoint() {
            this.demoNotifications = [
                {
                    id: 1,
                    header: 'Welcome',
                    body: 'You are ...',
                    isRead: true,
                    isPinned: true,
                    date: '2019-05-28T16:29:13.5877958'
                }
            ];
        }
        NotificationEndpoint.prototype.getNotificationEndpoint = function (notificationId) {
            var notification = this.demoNotifications.find(function (val) { return val.id == notificationId; });
            var response;
            if (notification) {
                response = this.createResponse(notification, 200);
            }
            else {
                response = this.createResponse(null, 404);
            }
            return rxjs.of(response.body);
        };
        NotificationEndpoint.prototype.getNotificationsEndpoint = function (page, pageSize) {
            var notifications = this.demoNotifications;
            var response = this.createResponse(this.demoNotifications, 200);
            return rxjs.of(response.body);
        };
        NotificationEndpoint.prototype.getUnreadNotificationsEndpoint = function (userId) {
            var unreadNotifications = this.demoNotifications.filter(function (val) { return !val.isRead; });
            var response = this.createResponse(unreadNotifications, 200);
            return rxjs.of(response.body);
        };
        NotificationEndpoint.prototype.getNewNotificationsEndpoint = function (lastNotificationDate) {
            var unreadNotifications = this.demoNotifications;
            var response = this.createResponse(unreadNotifications, 200);
            return rxjs.of(response.body);
        };
        NotificationEndpoint.prototype.getPinUnpinNotificationEndpoint = function (notificationId, isPinned) {
            var notification = this.demoNotifications.find(function (val) { return val.id == notificationId; });
            var response;
            if (notification) {
                response = this.createResponse(null, 204);
                if (isPinned == null) {
                    isPinned = !notification.isPinned;
                }
                notification.isPinned = isPinned;
                notification.isRead = true;
            }
            else {
                response = this.createResponse(null, 404);
            }
            return rxjs.of(response.body);
        };
        NotificationEndpoint.prototype.getReadUnreadNotificationEndpoint = function (notificationIds, isRead) {
            var e_1, _a;
            var _loop_1 = function (notificationId) {
                var notification = this_1.demoNotifications.find(function (val) { return val.id == notificationId; });
                if (notification) {
                    notification.isRead = isRead;
                }
            };
            var this_1 = this;
            try {
                for (var notificationIds_1 = __values(notificationIds), notificationIds_1_1 = notificationIds_1.next(); !notificationIds_1_1.done; notificationIds_1_1 = notificationIds_1.next()) {
                    var notificationId = notificationIds_1_1.value;
                    _loop_1(notificationId);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (notificationIds_1_1 && !notificationIds_1_1.done && (_a = notificationIds_1.return)) _a.call(notificationIds_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var response = this.createResponse(null, 204);
            return rxjs.of(response.body);
        };
        NotificationEndpoint.prototype.getDeleteNotificationEndpoint = function (notificationId) {
            var notification = this.demoNotifications.find(function (val) { return val.id == notificationId; });
            var response;
            if (notification) {
                this.demoNotifications = this.demoNotifications.filter(function (val) { return val.id != notificationId; });
                response = this.createResponse(notification, 200);
            }
            else {
                response = this.createResponse(null, 404);
            }
            return rxjs.of(response.body);
        };
        NotificationEndpoint.prototype.createResponse = function (body, status) {
            return new http.HttpResponse({ body: body, status: status });
        };
        /** @nocollapse */ NotificationEndpoint.ɵfac = function NotificationEndpoint_Factory(t) { return new (t || NotificationEndpoint)(); };
        /** @nocollapse */ NotificationEndpoint.ɵprov = core.ɵɵdefineInjectable({ token: NotificationEndpoint, factory: NotificationEndpoint.ɵfac });
        return NotificationEndpoint;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NotificationEndpoint, [{
            type: core.Injectable
        }], null, null); })();

    var NotificationService = /** @class */ (function () {
        function NotificationService(notificationEndpoint, authService) {
            this.notificationEndpoint = notificationEndpoint;
            this.authService = authService;
        }
        Object.defineProperty(NotificationService.prototype, "currentUser", {
            get: function () {
                return this.authService.currentUser;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NotificationService.prototype, "recentNotifications", {
            get: function () {
                return this._recentNotifications;
            },
            set: function (notifications) {
                this._recentNotifications = notifications;
            },
            enumerable: true,
            configurable: true
        });
        NotificationService.prototype.getNotification = function (notificationId) {
            return this.notificationEndpoint.getNotificationEndpoint(notificationId).pipe(operators.map(function (response) { return Notification.Create(response); }));
        };
        NotificationService.prototype.getNotifications = function (page, pageSize) {
            var _this = this;
            return this.notificationEndpoint.getNotificationsEndpoint(page, pageSize).pipe(operators.map(function (response) {
                return _this.getNotificationsFromResponse(response);
            }));
        };
        NotificationService.prototype.getUnreadNotifications = function (userId) {
            var _this = this;
            return this.notificationEndpoint.getUnreadNotificationsEndpoint(userId).pipe(operators.map(function (response) { return _this.getNotificationsFromResponse(response); }));
        };
        NotificationService.prototype.getNewNotifications = function () {
            var _this = this;
            return this.notificationEndpoint.getNewNotificationsEndpoint(this.lastNotificationDate).pipe(operators.map(function (response) { return _this.processNewNotificationsFromResponse(response); }));
        };
        NotificationService.prototype.getNewNotificationsPeriodically = function () {
            var _this = this;
            return rxjs.interval(10000).pipe(operators.startWith(0), operators.flatMap(function () {
                return _this.notificationEndpoint.getNewNotificationsEndpoint(_this.lastNotificationDate).pipe(operators.map(function (response) { return _this.processNewNotificationsFromResponse(response); }));
            }));
        };
        NotificationService.prototype.pinUnpinNotification = function (notificationOrNotificationId, isPinned) {
            if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) {
                return this.notificationEndpoint.getPinUnpinNotificationEndpoint(notificationOrNotificationId, isPinned);
            }
            else {
                return this.pinUnpinNotification(notificationOrNotificationId.id);
            }
        };
        NotificationService.prototype.readUnreadNotification = function (notificationIds, isRead) {
            return this.notificationEndpoint.getReadUnreadNotificationEndpoint(notificationIds, isRead);
        };
        NotificationService.prototype.deleteNotification = function (notificationOrNotificationId) {
            var _this = this;
            if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) { // Todo: Test me if its check is valid
                return this.notificationEndpoint.getDeleteNotificationEndpoint(notificationOrNotificationId).pipe(operators.map(function (response) {
                    _this.recentNotifications = _this.recentNotifications.filter(function (n) { return n.id != notificationOrNotificationId; });
                    return Notification.Create(response);
                }));
            }
            else {
                return this.deleteNotification(notificationOrNotificationId.id);
            }
        };
        NotificationService.prototype.processNewNotificationsFromResponse = function (response) {
            var e_1, _a;
            var notifications = this.getNotificationsFromResponse(response);
            try {
                for (var notifications_1 = __values(notifications), notifications_1_1 = notifications_1.next(); !notifications_1_1.done; notifications_1_1 = notifications_1.next()) {
                    var n = notifications_1_1.value;
                    if (n.date > this.lastNotificationDate) {
                        this.lastNotificationDate = n.date;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (notifications_1_1 && !notifications_1_1.done && (_a = notifications_1.return)) _a.call(notifications_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return notifications;
        };
        NotificationService.prototype.getNotificationsFromResponse = function (response) {
            var notifications = [];
            for (var i in response) {
                notifications[i] = Notification.Create(response[i]);
            }
            notifications.sort(function (a, b) { return b.date.valueOf() - a.date.valueOf(); });
            notifications.sort(function (a, b) { return (a.isPinned === b.isPinned) ? 0 : a.isPinned ? -1 : 1; });
            this.recentNotifications = notifications;
            return notifications;
        };
        /** @nocollapse */ NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(core.ɵɵinject(NotificationEndpoint), core.ɵɵinject(ngxOauth2.AuthService)); };
        /** @nocollapse */ NotificationService.ɵprov = core.ɵɵdefineInjectable({ token: NotificationService, factory: NotificationService.ɵfac });
        return NotificationService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NotificationService, [{
            type: core.Injectable
        }], function () { return [{ type: NotificationEndpoint }, { type: ngxOauth2.AuthService }]; }, null); })();

    var TranslationServiceProvider = /** @class */ (function (_super) {
        __extends(TranslationServiceProvider, _super);
        function TranslationServiceProvider(impl) {
            var _this = _super.call(this) || this;
            _this.impl = impl;
            return _this;
        }
        TranslationServiceProvider.prototype.get = function () {
            return this.impl;
        };
        /** @nocollapse */ TranslationServiceProvider.ɵfac = function TranslationServiceProvider_Factory(t) { return new (t || TranslationServiceProvider)(core.ɵɵinject(ngxAppkitServicesAlpha.AppTranslationService)); };
        /** @nocollapse */ TranslationServiceProvider.ɵprov = core.ɵɵdefineInjectable({ token: TranslationServiceProvider, factory: TranslationServiceProvider.ɵfac });
        return TranslationServiceProvider;
    }(ngxAppkitContractsAlpha.TranslationServiceAbstractProvider));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TranslationServiceProvider, [{
            type: core.Injectable
        }], function () { return [{ type: ngxAppkitServicesAlpha.AppTranslationService }]; }, null); })();

    // =============================
    var AppTitleService = /** @class */ (function () {
        function AppTitleService(titleService, router$1) {
            var _this = this;
            this.titleService = titleService;
            this.router = router$1;
            this.sub = this.router.events.pipe(operators.filter(function (event) { return event instanceof router.NavigationEnd; }), operators.map(function (_) { return _this.router.routerState.root; }), operators.map(function (route) {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }), operators.flatMap(function (route) { return route.data; }))
                .subscribe(function (data) {
                var title = data.title;
                if (title) {
                    var fragment = _this.router.url.split('#')[1];
                    if (fragment) {
                        title += ' | ' + ngxAppkitContractsAlpha.Utilities.toTitleCase(fragment);
                    }
                }
                if (title && _this.appName) {
                    title += ' - ' + _this.appName;
                }
                else if (_this.appName) {
                    title = _this.appName;
                }
                if (title) {
                    _this.titleService.setTitle(title);
                }
            });
        }
        /** @nocollapse */ AppTitleService.ɵfac = function AppTitleService_Factory(t) { return new (t || AppTitleService)(core.ɵɵinject(platformBrowser.Title), core.ɵɵinject(router.Router)); };
        /** @nocollapse */ AppTitleService.ɵprov = core.ɵɵdefineInjectable({ token: AppTitleService, factory: AppTitleService.ɵfac });
        return AppTitleService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AppTitleService, [{
            type: core.Injectable
        }], function () { return [{ type: platformBrowser.Title }, { type: router.Router }]; }, null); })();

    var AlertServiceProvider = /** @class */ (function (_super) {
        __extends(AlertServiceProvider, _super);
        function AlertServiceProvider(alertService) {
            var _this = _super.call(this) || this;
            _this.alertService = alertService;
            return _this;
        }
        AlertServiceProvider.prototype.get = function () {
            return this.alertService;
        };
        /** @nocollapse */ AlertServiceProvider.ɵfac = function AlertServiceProvider_Factory(t) { return new (t || AlertServiceProvider)(core.ɵɵinject(ngxAppkitServicesAlpha.AlertService)); };
        /** @nocollapse */ AlertServiceProvider.ɵprov = core.ɵɵdefineInjectable({ token: AlertServiceProvider, factory: AlertServiceProvider.ɵfac });
        return AlertServiceProvider;
    }(ngxAppkitContractsAlpha.AlertServiceAbstractProvider));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AlertServiceProvider, [{
            type: core.Injectable
        }], function () { return [{ type: ngxAppkitServicesAlpha.AlertService }]; }, null); })();

    var LocalStoreManagerProvider = /** @class */ (function (_super) {
        __extends(LocalStoreManagerProvider, _super);
        function LocalStoreManagerProvider(impl) {
            var _this = _super.call(this) || this;
            _this.impl = impl;
            return _this;
        }
        LocalStoreManagerProvider.prototype.get = function () {
            return this.impl;
        };
        /** @nocollapse */ LocalStoreManagerProvider.ɵfac = function LocalStoreManagerProvider_Factory(t) { return new (t || LocalStoreManagerProvider)(core.ɵɵinject(ngxAppkitServicesAlpha.LocalStoreManager)); };
        /** @nocollapse */ LocalStoreManagerProvider.ɵprov = core.ɵɵdefineInjectable({ token: LocalStoreManagerProvider, factory: LocalStoreManagerProvider.ɵfac });
        return LocalStoreManagerProvider;
    }(ngxAppkitContractsAlpha.LocalStoreManagerServiceAbstractProvider));
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LocalStoreManagerProvider, [{
            type: core.Injectable
        }], function () { return [{ type: ngxAppkitServicesAlpha.LocalStoreManager }]; }, null); })();

    // =============================
    var GroupByPipe = /** @class */ (function () {
        function GroupByPipe() {
        }
        GroupByPipe.prototype.transform = function (value, field) {
            if (!value) {
                return value;
            }
            var groupedObj = value.reduce(function (prev, cur) {
                if (!prev[cur[field]]) {
                    prev[cur[field]] = [cur];
                }
                else {
                    prev[cur[field]].push(cur);
                }
                return prev;
            }, {});
            return Object.keys(groupedObj).map(function (key) { return ({ key: key, value: groupedObj[key] }); });
        };
        /** @nocollapse */ GroupByPipe.ɵfac = function GroupByPipe_Factory(t) { return new (t || GroupByPipe)(); };
        /** @nocollapse */ GroupByPipe.ɵpipe = core.ɵɵdefinePipe({ name: "groupBy", type: GroupByPipe, pure: true });
        return GroupByPipe;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(GroupByPipe, [{
            type: core.Pipe,
            args: [{ name: 'groupBy' }]
        }], null, null); })();

    // =============================
    var AutofocusDirective = /** @class */ (function () {
        function AutofocusDirective(elementRef) {
            this.elementRef = elementRef;
        }
        AutofocusDirective.prototype.ngOnInit = function () {
            var _this = this;
            setTimeout(function () { return _this.elementRef.nativeElement.focus(); }, 500);
        };
        /** @nocollapse */ AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) { return new (t || AutofocusDirective)(core.ɵɵdirectiveInject(core.ElementRef)); };
        /** @nocollapse */ AutofocusDirective.ɵdir = core.ɵɵdefineDirective({ type: AutofocusDirective, selectors: [["", "autofocus", ""]] });
        return AutofocusDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(AutofocusDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[autofocus]'
                }]
        }], function () { return [{ type: core.ElementRef }]; }, null); })();

    // =============================
    var BootstrapDatepickerDirective = /** @class */ (function () {
        function BootstrapDatepickerDirective(el) {
            var _this = this;
            this.el = el;
            this._isShown = false;
            this.options = {};
            this.ngModelChange = new core.EventEmitter();
            this.changedSubscription = rxjs.fromEvent($(this.el.nativeElement), 'change').subscribe(function (e) { return setTimeout(function () { return _this.ngModelChange.emit(e.target.value); }); });
            this.shownSubscription = rxjs.fromEvent($(this.el.nativeElement), 'show').subscribe(function (e) { return _this._isShown = true; });
            this.hiddenSubscription = rxjs.fromEvent($(this.el.nativeElement), 'hide').subscribe(function (e) { return _this._isShown = false; });
        }
        Object.defineProperty(BootstrapDatepickerDirective.prototype, "isShown", {
            get: function () {
                return this._isShown;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapDatepickerDirective.prototype, "ngModel", {
            set: function (value) {
                this.tryUpdate(value);
            },
            enumerable: true,
            configurable: true
        });
        BootstrapDatepickerDirective.prototype.ngOnInit = function () {
            this.initialize(this.options);
        };
        BootstrapDatepickerDirective.prototype.ngOnDestroy = function () {
            this.destroy();
        };
        BootstrapDatepickerDirective.prototype.initialize = function (options) {
            $(this.el.nativeElement).datepicker(options);
        };
        BootstrapDatepickerDirective.prototype.destroy = function () {
            if (this.changedSubscription) {
                this.changedSubscription.unsubscribe();
                this.shownSubscription.unsubscribe();
                this.hiddenSubscription.unsubscribe();
            }
            $(this.el.nativeElement).datepicker('destroy');
        };
        BootstrapDatepickerDirective.prototype.show = function () {
            $(this.el.nativeElement).datepicker('show');
        };
        BootstrapDatepickerDirective.prototype.hide = function () {
            $(this.el.nativeElement).datepicker('hide');
        };
        BootstrapDatepickerDirective.prototype.toggle = function () {
            this.isShown ? this.hide() : this.show();
        };
        BootstrapDatepickerDirective.prototype.tryUpdate = function (value) {
            var _this = this;
            clearTimeout(this.updateTimeout);
            if (!$(this.el.nativeElement).is(':focus')) {
                this.update(value);
            }
            else {
                this.updateTimeout = setTimeout(function () {
                    _this.updateTimeout = null;
                    _this.tryUpdate(value);
                }, 100);
            }
        };
        BootstrapDatepickerDirective.prototype.update = function (value) {
            var _this = this;
            setTimeout(function () { return $(_this.el.nativeElement).datepicker('update', value); });
        };
        BootstrapDatepickerDirective.prototype.setDate = function (value) {
            var _this = this;
            setTimeout(function () { return $(_this.el.nativeElement).datepicker('setDate', value); });
        };
        BootstrapDatepickerDirective.prototype.setUTCDate = function (value) {
            var _this = this;
            setTimeout(function () { return $(_this.el.nativeElement).datepicker('setUTCDate', value); });
        };
        BootstrapDatepickerDirective.prototype.clearDates = function () {
            var _this = this;
            setTimeout(function () { return $(_this.el.nativeElement).datepicker('clearDates'); });
        };
        BootstrapDatepickerDirective.prototype.getDate = function () {
            $(this.el.nativeElement).datepicker('getDate');
        };
        BootstrapDatepickerDirective.prototype.getUTCDate = function () {
            $(this.el.nativeElement).datepicker('getUTCDate');
        };
        /** @nocollapse */ BootstrapDatepickerDirective.ɵfac = function BootstrapDatepickerDirective_Factory(t) { return new (t || BootstrapDatepickerDirective)(core.ɵɵdirectiveInject(core.ElementRef)); };
        /** @nocollapse */ BootstrapDatepickerDirective.ɵdir = core.ɵɵdefineDirective({ type: BootstrapDatepickerDirective, selectors: [["", "bootstrapDatepicker", ""]], inputs: { options: "options", ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange" }, exportAs: ["bootstrap-datepicker"] });
        return BootstrapDatepickerDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(BootstrapDatepickerDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[bootstrapDatepicker]',
                    exportAs: 'bootstrap-datepicker'
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { options: [{
                type: core.Input
            }], ngModel: [{
                type: core.Input
            }], ngModelChange: [{
                type: core.Output
            }] }); })();

    // =============================
    var BootstrapSelectDirective = /** @class */ (function () {
        function BootstrapSelectDirective(el) {
            var _this = this;
            this.el = el;
            this.oldValues = '';
            this.ngModelChange = new core.EventEmitter();
            this.shown = new core.EventEmitter();
            this.hidden = new core.EventEmitter();
            this.changedSubscription = rxjs.fromEvent($(this.el.nativeElement), 'changed.bs.select').subscribe(function (e) { return setTimeout(function () {
                if (_this.checkIsValuesChanged(_this.selected)) {
                    _this.ngModelChange.emit(_this.selected);
                }
            }); });
            this.shownSubscription = rxjs.fromEvent($(this.el.nativeElement), 'shown.bs.select').subscribe(function (e) { return setTimeout(function () { return _this.shown.emit(); }); });
            this.hiddenSubscription = rxjs.fromEvent($(this.el.nativeElement), 'hidden.bs.select').subscribe(function (e) { return setTimeout(function () { return _this.hidden.emit(); }); });
        }
        Object.defineProperty(BootstrapSelectDirective.prototype, "ngModel", {
            set: function (values) {
                var _this = this;
                setTimeout(function () { return _this.selected = values; });
            },
            enumerable: true,
            configurable: true
        });
        BootstrapSelectDirective.prototype.ngOnInit = function () {
            var _this = this;
            $(this.el.nativeElement).selectpicker();
            if (this.requiredAttribute) {
                $(this.el.nativeElement).selectpicker('setStyle', 'required', 'add');
            }
            setTimeout(function () {
                _this.refresh();
                _this.doValidation();
            });
        };
        BootstrapSelectDirective.prototype.ngOnDestroy = function () {
            if (this.changedSubscription) {
                this.changedSubscription.unsubscribe();
            }
            if (this.shownSubscription) {
                this.shownSubscription.unsubscribe();
            }
            if (this.hiddenSubscription) {
                this.hiddenSubscription.unsubscribe();
            }
            $(this.el.nativeElement).selectpicker('destroy');
        };
        BootstrapSelectDirective.prototype.checkIsValuesChanged = function (newValue) {
            var _this = this;
            return !(newValue == this.oldValues ||
                (newValue instanceof Array && newValue.length === this.oldValues.length && newValue.every(function (v, i) { return v === _this.oldValues[i]; })));
        };
        BootstrapSelectDirective.prototype.doValidation = function () {
            if (this.requiredAttribute) {
                $(this.el.nativeElement).selectpicker('setStyle', !this.valid ? 'ng-valid' : 'ng-invalid', 'remove');
                $(this.el.nativeElement).selectpicker('setStyle', this.valid ? 'ng-valid' : 'ng-invalid', 'add');
            }
        };
        Object.defineProperty(BootstrapSelectDirective.prototype, "requiredAttribute", {
            get: function () {
                return this.required === '' || this.required == 'true';
            },
            enumerable: true,
            configurable: true
        });
        BootstrapSelectDirective.prototype.refresh = function () {
            var _this = this;
            setTimeout(function () {
                $(_this.el.nativeElement).selectpicker('refresh');
            });
        };
        BootstrapSelectDirective.prototype.render = function () {
            var _this = this;
            setTimeout(function () {
                $(_this.el.nativeElement).selectpicker('render');
            });
        };
        Object.defineProperty(BootstrapSelectDirective.prototype, "valid", {
            get: function () {
                return this.requiredAttribute ? this.selected && this.selected.length > 0 : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSelectDirective.prototype, "selected", {
            get: function () {
                return $(this.el.nativeElement).selectpicker('val');
            },
            set: function (values) {
                if (!this.checkIsValuesChanged(values)) {
                    return;
                }
                this.oldValues = this.selected;
                $(this.el.nativeElement).selectpicker('val', values);
                this.doValidation();
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ BootstrapSelectDirective.ɵfac = function BootstrapSelectDirective_Factory(t) { return new (t || BootstrapSelectDirective)(core.ɵɵdirectiveInject(core.ElementRef)); };
        /** @nocollapse */ BootstrapSelectDirective.ɵdir = core.ɵɵdefineDirective({ type: BootstrapSelectDirective, selectors: [["", "bootstrapSelect", ""]], inputs: { required: "required", ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange", shown: "shown", hidden: "hidden" }, exportAs: ["bootstrap-select"] });
        return BootstrapSelectDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(BootstrapSelectDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[bootstrapSelect]',
                    exportAs: 'bootstrap-select'
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { required: [{
                type: core.Input
            }], ngModel: [{
                type: core.Input
            }], ngModelChange: [{
                type: core.Output
            }], shown: [{
                type: core.Output
            }], hidden: [{
                type: core.Output
            }] }); })();

    // =============================
    var BootstrapTabDirective = /** @class */ (function () {
        function BootstrapTabDirective(el, zone) {
            var _this = this;
            this.el = el;
            this.zone = zone;
            this.showBSTab = new core.EventEmitter();
            this.hideBSTab = new core.EventEmitter();
            this.tabShownSubscription = rxjs.fromEvent($(this.el.nativeElement), 'show.bs.tab')
                .subscribe(function (e) {
                _this.runInZone(function () { return _this.showBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget }); });
            });
            this.tabHiddenSubscription = rxjs.fromEvent($(this.el.nativeElement), 'hidden.bs.tab')
                .subscribe(function (e) {
                _this.runInZone(function () { return _this.hideBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget }); });
            });
        }
        BootstrapTabDirective.prototype.ngOnDestroy = function () {
            this.tabShownSubscription.unsubscribe();
            this.tabHiddenSubscription.unsubscribe();
        };
        BootstrapTabDirective.prototype.runInZone = function (delegate) {
            this.zone.run(function () {
                delegate();
            });
        };
        BootstrapTabDirective.prototype.show = function (selector) {
            $(selector).tab('show');
        };
        /** @nocollapse */ BootstrapTabDirective.ɵfac = function BootstrapTabDirective_Factory(t) { return new (t || BootstrapTabDirective)(core.ɵɵdirectiveInject(core.ElementRef), core.ɵɵdirectiveInject(core.NgZone)); };
        /** @nocollapse */ BootstrapTabDirective.ɵdir = core.ɵɵdefineDirective({ type: BootstrapTabDirective, selectors: [["", "bootstrapTab", ""]], outputs: { showBSTab: "showBSTab", hideBSTab: "hideBSTab" }, exportAs: ["bootstrap-tab"] });
        return BootstrapTabDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(BootstrapTabDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[bootstrapTab]',
                    exportAs: 'bootstrap-tab'
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.NgZone }]; }, { showBSTab: [{
                type: core.Output
            }], hideBSTab: [{
                type: core.Output
            }] }); })();

    // =============================
    var BootstrapToggleDirective = /** @class */ (function () {
        function BootstrapToggleDirective(el) {
            var _this = this;
            this.el = el;
            this.ngModelChange = new core.EventEmitter();
            this.checkedSubscription = rxjs.fromEvent($(this.el.nativeElement), 'change')
                .subscribe(function (e) { return _this.ngModelChange.emit(e.target.checked); });
        }
        Object.defineProperty(BootstrapToggleDirective.prototype, "ngModel", {
            set: function (value) {
                this.toggle(value);
            },
            enumerable: true,
            configurable: true
        });
        BootstrapToggleDirective.prototype.ngOnInit = function () {
            this.initialize();
        };
        BootstrapToggleDirective.prototype.ngOnDestroy = function () {
            this.destroy();
        };
        BootstrapToggleDirective.prototype.initialize = function (options) {
            $(this.el.nativeElement).bootstrapToggle(options);
        };
        BootstrapToggleDirective.prototype.destroy = function () {
            if (this.checkedSubscription) {
                this.checkedSubscription.unsubscribe();
            }
            $(this.el.nativeElement).bootstrapToggle('destroy');
        };
        BootstrapToggleDirective.prototype.toggleOn = function () {
            $(this.el.nativeElement).bootstrapToggle('on');
        };
        BootstrapToggleDirective.prototype.toggleOff = function () {
            $(this.el.nativeElement).bootstrapToggle('off');
        };
        BootstrapToggleDirective.prototype.toggle = function (value) {
            if (value == null) {
                $(this.el.nativeElement).bootstrapToggle('toggle');
            }
            else {
                $(this.el.nativeElement).prop('checked', value).change();
            }
        };
        BootstrapToggleDirective.prototype.enable = function () {
            $(this.el.nativeElement).bootstrapToggle('enable');
        };
        BootstrapToggleDirective.prototype.disable = function () {
            $(this.el.nativeElement).bootstrapToggle('disable');
        };
        /** @nocollapse */ BootstrapToggleDirective.ɵfac = function BootstrapToggleDirective_Factory(t) { return new (t || BootstrapToggleDirective)(core.ɵɵdirectiveInject(core.ElementRef)); };
        /** @nocollapse */ BootstrapToggleDirective.ɵdir = core.ɵɵdefineDirective({ type: BootstrapToggleDirective, selectors: [["", "bootstrapToggle", ""]], inputs: { ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange" }, exportAs: ["bootstrap-toggle"] });
        return BootstrapToggleDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(BootstrapToggleDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[bootstrapToggle]',
                    exportAs: 'bootstrap-toggle'
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { ngModel: [{
                type: core.Input
            }], ngModelChange: [{
                type: core.Output
            }] }); })();

    // =============================
    var EqualValidator = /** @class */ (function () {
        function EqualValidator(validateEqual, reverse) {
            this.validateEqual = validateEqual;
            this.reverse = reverse;
        }
        EqualValidator.prototype.validate = function (c) {
            var other = c.root.get(this.validateEqual);
            if (!other) {
                return null;
            }
            return this.reverse === 'true' ? this.validateReverse(c, other) : this.validateNoReverse(c, other);
        };
        EqualValidator.prototype.validateNoReverse = function (c, other) {
            return other.value === c.value ? null : { validateEqual: true };
        };
        EqualValidator.prototype.validateReverse = function (c, other) {
            if (c.value === other.value) {
                if (other.errors) {
                    delete other.errors.validateEqual;
                    if (Object.keys(other.errors).length == 0) {
                        other.setErrors(null);
                    }
                }
            }
            else {
                other.setErrors({ validateEqual: true });
            }
            return null;
        };
        /** @nocollapse */ EqualValidator.ɵfac = function EqualValidator_Factory(t) { return new (t || EqualValidator)(core.ɵɵinjectAttribute('validateEqual'), core.ɵɵinjectAttribute('reverse')); };
        /** @nocollapse */ EqualValidator.ɵdir = core.ɵɵdefineDirective({ type: EqualValidator, selectors: [["", "validateEqual", "", "formControlName", ""], ["", "validateEqual", "", "formControl", ""], ["", "validateEqual", "", "ngModel", ""]], features: [core.ɵɵProvidersFeature([
                    { provide: forms.NG_VALIDATORS, useExisting: core.forwardRef((function () { return EqualValidator; })), multi: true }
                ])] });
        return EqualValidator;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(EqualValidator, [{
            type: core.Directive,
            args: [{
                    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                    providers: [
                        { provide: forms.NG_VALIDATORS, useExisting: core.forwardRef((function () { return EqualValidator; })), multi: true }
                    ]
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Attribute,
                    args: ['validateEqual']
                }] }, { type: undefined, decorators: [{
                    type: core.Attribute,
                    args: ['reverse']
                }] }]; }, null); })();

    // =============================
    var LastElementDirective = /** @class */ (function () {
        function LastElementDirective() {
            this.lastFunction = new core.EventEmitter();
        }
        Object.defineProperty(LastElementDirective.prototype, "lastElement", {
            set: function (isLastElement) {
                var _this = this;
                if (isLastElement) {
                    setTimeout(function () {
                        _this.lastFunction.emit();
                    });
                }
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ LastElementDirective.ɵfac = function LastElementDirective_Factory(t) { return new (t || LastElementDirective)(); };
        /** @nocollapse */ LastElementDirective.ɵdir = core.ɵɵdefineDirective({ type: LastElementDirective, selectors: [["", "lastElement", ""]], inputs: { lastElement: "lastElement" }, outputs: { lastFunction: "lastFunction" } });
        return LastElementDirective;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LastElementDirective, [{
            type: core.Directive,
            args: [{
                    selector: '[lastElement]'
                }]
        }], null, { lastElement: [{
                type: core.Input
            }], lastFunction: [{
                type: core.Output
            }] }); })();

    // =============================
    var _c0 = ["statusHeaderTemplate"];
    var _c1 = ["statusTemplate"];
    var _c2 = ["dateTemplate"];
    var _c3 = ["contentHeaderTemplate"];
    var _c4 = ["contenBodytTemplate"];
    var _c5 = ["actionsTemplate"];
    function NotificationsViewerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 7);
    } }
    function NotificationsViewerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "span");
    } }
    function NotificationsViewerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r12 = ctx.row;
        var value_r13 = ctx.value;
        var ctx_r5 = core.ɵɵnextContext();
        core.ɵɵclassProp("unread", !row_r12.isRead);
        core.ɵɵattribute("title", ctx_r5.getPrintedDate(value_r13));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r5.getPrintedDate(value_r13), " ");
    } }
    function NotificationsViewerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r14 = ctx.row;
        var value_r15 = ctx.value;
        core.ɵɵclassProp("unread", !row_r14.isRead);
        core.ɵɵattribute("title", row_r14.body);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", value_r15, " ");
    } }
    function NotificationsViewerComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r16 = ctx.row;
        var value_r17 = ctx.value;
        core.ɵɵclassProp("unread", !row_r16.isRead);
        core.ɵɵattribute("title", row_r16.header);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", value_r17, " ");
    } }
    function NotificationsViewerComponent_ng_template_12_i_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 13);
    } }
    function NotificationsViewerComponent_ng_template_12_i_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 14);
    } }
    function NotificationsViewerComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
        var _r22 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 8);
        core.ɵɵlistener("click", function NotificationsViewerComponent_ng_template_12_Template_a_click_0_listener() { core.ɵɵrestoreView(_r22); var row_r18 = ctx.row; var ctx_r21 = core.ɵɵnextContext(); return ctx_r21.deleteNotification(row_r18); });
        core.ɵɵpipe(1, "translate");
        core.ɵɵelement(2, "i", 9);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "a", 10);
        core.ɵɵlistener("click", function NotificationsViewerComponent_ng_template_12_Template_a_click_3_listener() { core.ɵɵrestoreView(_r22); var row_r18 = ctx.row; var ctx_r23 = core.ɵɵnextContext(); return ctx_r23.togglePin(row_r18); });
        core.ɵɵpipe(4, "translate");
        core.ɵɵtemplate(5, NotificationsViewerComponent_ng_template_12_i_5_Template, 1, 0, "i", 11);
        core.ɵɵtemplate(6, NotificationsViewerComponent_ng_template_12_i_6_Template, 1, 0, "i", 12);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r18 = ctx.row;
        core.ɵɵpropertyInterpolate("tooltip", core.ɵɵpipeBind1(1, 4, "notifications.Delete"));
        core.ɵɵadvance(3);
        core.ɵɵpropertyInterpolate("tooltip", core.ɵɵpipeBind1(4, 6, "notifications.Pin"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", row_r18.isPinned);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !row_r18.isPinned);
    } }
    var NotificationsViewerComponent = /** @class */ (function () {
        function NotificationsViewerComponent(alertService, translationService, accountService, notificationService) {
            this.alertService = alertService;
            this.translationService = translationService;
            this.accountService = accountService;
            this.notificationService = notificationService;
            this.columns = [];
            this.rows = [];
            this.dataLoadingConsecutiveFailurs = 0;
            this.verticalScrollbar = false;
        }
        NotificationsViewerComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.isViewOnly) {
                this.columns = [
                    { prop: 'date', cellTemplate: this.dateTemplate, width: 100, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                    { prop: 'header', cellTemplate: this.contentHeaderTemplate, width: 200, resizeable: false, sortable: false, draggable: false },
                ];
            }
            else {
                var gT = function (key) { return _this.translationService.getTranslation(key); };
                this.columns = [
                    { prop: '', name: '', width: 10, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                    { prop: 'date', name: gT('notifications.Date'), cellTemplate: this.dateTemplate, width: 30 },
                    { prop: 'body', name: gT('notifications.Notification'), cellTemplate: this.contenBodytTemplate, width: 500 },
                    { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
                ];
            }
            this.initDataLoading();
        };
        NotificationsViewerComponent.prototype.ngOnDestroy = function () {
            if (this.dataLoadingSubscription) {
                this.dataLoadingSubscription.unsubscribe();
            }
        };
        NotificationsViewerComponent.prototype.initDataLoading = function () {
            var _this = this;
            if (this.isViewOnly && this.notificationService.recentNotifications) {
                this.rows = this.processResults(this.notificationService.recentNotifications);
                return;
            }
            this.loadingIndicator = true;
            var dataLoadTask = this.isViewOnly ? this.notificationService.getNewNotifications() : this.notificationService.getNewNotificationsPeriodically();
            this.dataLoadingSubscription = dataLoadTask
                .subscribe(function (notifications) {
                _this.loadingIndicator = false;
                _this.dataLoadingConsecutiveFailurs = 0;
                _this.rows = _this.processResults(notifications);
            }, function (error) {
                _this.loadingIndicator = false;
                _this.alertService.showMessage('Load Error', 'Loading new notifications from the server failed!', ngxAppkitContractsAlpha.MessageSeverity.warn);
                _this.alertService.logError(error);
                if (_this.dataLoadingConsecutiveFailurs++ < 5) {
                    setTimeout(function () { return _this.initDataLoading(); }, 5000);
                }
                else {
                    _this.alertService.showStickyMessage('Load Error', 'Loading new notifications from the server failed!', ngxAppkitContractsAlpha.MessageSeverity.error);
                }
            });
            if (this.isViewOnly) {
                this.dataLoadingSubscription = null;
            }
        };
        NotificationsViewerComponent.prototype.processResults = function (notifications) {
            if (this.isViewOnly) {
                notifications.sort(function (a, b) {
                    return b.date.valueOf() - a.date.valueOf();
                });
            }
            return notifications;
        };
        NotificationsViewerComponent.prototype.getPrintedDate = function (value) {
            if (value) {
                return ngxAppkitContractsAlpha.Utilities.printTimeOnly(value) + ' on ' + ngxAppkitContractsAlpha.Utilities.printDateOnly(value);
            }
        };
        NotificationsViewerComponent.prototype.deleteNotification = function (row) {
            var _this = this;
            this.alertService.showDialog('Are you sure you want to delete the notification \"' + row.header + '\"?', ngxAppkitContractsAlpha.DialogType.confirm, function () { return _this.deleteNotificationHelper(row); });
        };
        NotificationsViewerComponent.prototype.deleteNotificationHelper = function (row) {
            var _this = this;
            this.alertService.startLoadingMessage('Deleting...');
            this.loadingIndicator = true;
            this.notificationService.deleteNotification(row)
                .subscribe(function (results) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.rows = _this.rows.filter(function (item) { return item.id != row.id; });
            }, function (error) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.alertService.showStickyMessage('Delete Error', "An error occured whilst deleting the notification.\r\nError: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            });
        };
        NotificationsViewerComponent.prototype.togglePin = function (row) {
            var _this = this;
            var pin = !row.isPinned;
            var opText = pin ? 'Pinning' : 'Unpinning';
            this.alertService.startLoadingMessage(opText + '...');
            this.loadingIndicator = true;
            this.notificationService.pinUnpinNotification(row, pin)
                .subscribe(function (results) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                row.isPinned = pin;
            }, function (error) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.alertService.showStickyMessage(opText + ' Error', "An error occured whilst " + opText + " the notification.\r\nError: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            });
        };
        Object.defineProperty(NotificationsViewerComponent.prototype, "canManageNotifications", {
            get: function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.manageRolesPermission); // Todo: Consider creating separate permission for notifications
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ NotificationsViewerComponent.ɵfac = function NotificationsViewerComponent_Factory(t) { return new (t || NotificationsViewerComponent)(core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.AlertService), core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.AppTranslationService), core.ɵɵdirectiveInject(AccountService), core.ɵɵdirectiveInject(NotificationService)); };
        /** @nocollapse */ NotificationsViewerComponent.ɵcmp = core.ɵɵdefineComponent({ type: NotificationsViewerComponent, selectors: [["notifications-viewer"]], viewQuery: function NotificationsViewerComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0, true);
                core.ɵɵstaticViewQuery(_c1, true);
                core.ɵɵstaticViewQuery(_c2, true);
                core.ɵɵstaticViewQuery(_c3, true);
                core.ɵɵstaticViewQuery(_c4, true);
                core.ɵɵstaticViewQuery(_c5, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.statusHeaderTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.statusTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.dateTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.contentHeaderTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.contenBodytTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.actionsTemplate = _t.first);
            } }, inputs: { isViewOnly: "isViewOnly", verticalScrollbar: "verticalScrollbar" }, decls: 14, vars: 9, consts: [[1, "material", "colored-header", "sm", "table-hover", 3, "loadingIndicator", "rows", "rowHeight", "headerHeight", "footerHeight", "limit", "columns", "scrollbarV", "columnMode"], ["statusHeaderTemplate", ""], ["statusTemplate", ""], ["dateTemplate", ""], ["contentHeaderTemplate", ""], ["contenBodytTemplate", ""], ["actionsTemplate", ""], [1, "fa", "fa-bullhorn"], ["href", "javascript:;", "container", "body", 1, "btn", "btn-link", "btn-sm", 3, "tooltip", "click"], [1, "fa", "fa-times"], ["href", "javascript:;", "co", "", "container", "body", 1, "btn", "btn-link", "btn-sm", 3, "tooltip", "click"], ["class", "fa fa-thumb-tack", 4, "ngIf"], ["class", "fa fa-thumb-tack fa-rotate-90", 4, "ngIf"], [1, "fa", "fa-thumb-tack"], [1, "fa", "fa-thumb-tack", "fa-rotate-90"]], template: function NotificationsViewerComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div");
                core.ɵɵelement(1, "ngx-datatable", 0);
                core.ɵɵtemplate(2, NotificationsViewerComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(4, NotificationsViewerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(6, NotificationsViewerComponent_ng_template_6_Template, 2, 4, "ng-template", null, 3, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(8, NotificationsViewerComponent_ng_template_8_Template, 2, 4, "ng-template", null, 4, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(10, NotificationsViewerComponent_ng_template_10_Template, 2, 4, "ng-template", null, 5, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(12, NotificationsViewerComponent_ng_template_12_Template, 7, 8, "ng-template", null, 6, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("loadingIndicator", ctx.loadingIndicator)("rows", ctx.rows)("rowHeight", 35)("headerHeight", ctx.isViewOnly ? 0 : 35)("footerHeight", 35)("limit", 10)("columns", ctx.columns)("scrollbarV", ctx.verticalScrollbar)("columnMode", "force");
            } }, directives: [ngxDatatable.DatatableComponent, tooltip.TooltipDirective, common.NgIf], pipes: [core$1.TranslatePipe], styles: [".unread[_ngcontent-%COMP%]{font-weight:700}"] });
        return NotificationsViewerComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NotificationsViewerComponent, [{
            type: core.Component,
            args: [{
                    selector: 'notifications-viewer',
                    templateUrl: './notifications-viewer.component.html',
                    styleUrls: ['./notifications-viewer.component.scss']
                }]
        }], function () { return [{ type: ngxAppkitServicesAlpha.AlertService }, { type: ngxAppkitServicesAlpha.AppTranslationService }, { type: AccountService }, { type: NotificationService }]; }, { isViewOnly: [{
                type: core.Input
            }], verticalScrollbar: [{
                type: core.Input
            }], statusHeaderTemplate: [{
                type: core.ViewChild,
                args: ['statusHeaderTemplate', { static: true }]
            }], statusTemplate: [{
                type: core.ViewChild,
                args: ['statusTemplate', { static: true }]
            }], dateTemplate: [{
                type: core.ViewChild,
                args: ['dateTemplate', { static: true }]
            }], contentHeaderTemplate: [{
                type: core.ViewChild,
                args: ['contentHeaderTemplate', { static: true }]
            }], contenBodytTemplate: [{
                type: core.ViewChild,
                args: ['contenBodytTemplate', { static: true }]
            }], actionsTemplate: [{
                type: core.ViewChild,
                args: ['actionsTemplate', { static: true }]
            }] }); })();

    // =============================
    var _c0$1 = ["searchInput"];
    function SearchBoxComponent_a_5_Template(rf, ctx) { if (rf & 1) {
        var _r3 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 6);
        core.ɵɵlistener("click", function SearchBoxComponent_a_5_Template_a_click_0_listener() { core.ɵɵrestoreView(_r3); var ctx_r2 = core.ɵɵnextContext(); return ctx_r2.clear(); });
        core.ɵɵelementEnd();
    } }
    var SearchBoxComponent = /** @class */ (function () {
        function SearchBoxComponent() {
            this.placeholder = 'Search...';
            this.searchChange = new core.EventEmitter();
        }
        SearchBoxComponent.prototype.onValueChange = function (value) {
            var _this = this;
            setTimeout(function () { return _this.searchChange.emit(value); });
        };
        SearchBoxComponent.prototype.clear = function () {
            this.searchInput.nativeElement.value = '';
            this.onValueChange(this.searchInput.nativeElement.value);
        };
        /** @nocollapse */ SearchBoxComponent.ɵfac = function SearchBoxComponent_Factory(t) { return new (t || SearchBoxComponent)(); };
        /** @nocollapse */ SearchBoxComponent.ɵcmp = core.ɵɵdefineComponent({ type: SearchBoxComponent, selectors: [["search-box"]], viewQuery: function SearchBoxComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0$1, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.searchInput = _t.first);
            } }, inputs: { placeholder: "placeholder" }, outputs: { searchChange: "searchChange" }, decls: 6, vars: 2, consts: [[1, "icon-addon", "addon-sm"], ["for", "searchInput", "title", "Search"], [1, "fa", "fa-search", "left-icon", "search-icon"], ["id", "searchInput", "type", "search", "ngModel", "", 1, "form-control", "left-icon", "right-icon", 3, "ngModelChange"], ["searchInput", ""], ["href", "javascript:;", "title", "Clear", "class", "fa fa-times-circle clear-input right-icon", 3, "click", 4, "ngIf"], ["href", "javascript:;", "title", "Clear", 1, "fa", "fa-times-circle", "clear-input", "right-icon", 3, "click"]], template: function SearchBoxComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "label", 1);
                core.ɵɵelement(2, "i", 2);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(3, "input", 3, 4);
                core.ɵɵlistener("ngModelChange", function SearchBoxComponent_Template_input_ngModelChange_3_listener($event) { return ctx.onValueChange($event); });
                core.ɵɵelementEnd();
                core.ɵɵtemplate(5, SearchBoxComponent_a_5_Template, 1, 0, "a", 5);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                var _r0 = core.ɵɵreference(4);
                core.ɵɵadvance(3);
                core.ɵɵattribute("placeholder", ctx.placeholder);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", _r0.value);
            } }, directives: [forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel, common.NgIf], styles: [".search-icon[_ngcontent-%COMP%]{pointer-events:none}"] });
        return SearchBoxComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SearchBoxComponent, [{
            type: core.Component,
            args: [{
                    selector: 'search-box',
                    templateUrl: './search-box.component.html',
                    styleUrls: ['./search-box.component.scss']
                }]
        }], null, { placeholder: [{
                type: core.Input
            }], searchChange: [{
                type: core.Output
            }], searchInput: [{
                type: core.ViewChild,
                args: ['searchInput', { static: true }]
            }] }); })();

    var _c0$2 = ["f"];
    var _c1$1 = ["userName"];
    var _c2$1 = ["userPassword"];
    var _c3$1 = ["email"];
    var _c4$1 = ["currentPassword"];
    var _c5$1 = ["newPassword"];
    var _c6 = ["confirmPassword"];
    var _c7 = ["roles"];
    var _c8 = ["rolesSelector"];
    function UserInfoComponent_form_1_div_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "p", 13);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r2 = core.ɵɵnextContext(2);
        core.ɵɵclassProp("col-lg-9", ctx_r2.isViewOnly)("col-lg-10", !ctx_r2.isViewOnly);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r2.user.jobTitle);
    } }
    function UserInfoComponent_form_1_div_7_Template(rf, ctx) { if (rf & 1) {
        var _r21 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "input", 14);
        core.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_7_Template_input_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r21); var ctx_r20 = core.ɵɵnextContext(2); return ctx_r20.userEdit.jobTitle = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r3 = core.ɵɵnextContext(2);
        core.ɵɵclassProp("col-lg-9", ctx_r3.isViewOnly)("col-lg-10", !ctx_r3.isViewOnly);
        core.ɵɵadvance(1);
        core.ɵɵattributeInterpolate1("id", "jobTitle-", ctx_r3.uniqueId, "");
        core.ɵɵproperty("ngModel", ctx_r3.userEdit.jobTitle);
    } }
    function UserInfoComponent_form_1_div_15_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "p", 13);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r4 = core.ɵɵnextContext(2);
        core.ɵɵclassProp("col-lg-9", ctx_r4.isViewOnly)("col-lg-10", !ctx_r4.isViewOnly);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r4.user.userName);
    } }
    var _c9 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
    function UserInfoComponent_form_1_div_16_i_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 19);
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r22 = core.ɵɵreference(2);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(1, _c9, _r22.valid, !_r22.valid));
    } }
    function UserInfoComponent_form_1_div_16_span_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 20);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(2, 1, "users.editor.UserNameRequired"), " ");
    } }
    var _c10 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
    function UserInfoComponent_form_1_div_16_Template(rf, ctx) { if (rf & 1) {
        var _r26 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "input", 15, 16);
        core.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_16_Template_input_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r26); var ctx_r25 = core.ɵɵnextContext(2); return ctx_r25.userEdit.userName = $event; });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, UserInfoComponent_form_1_div_16_i_3_Template, 1, 4, "i", 17);
        core.ɵɵtemplate(4, UserInfoComponent_form_1_div_16_span_4_Template, 3, 3, "span", 18);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r22 = core.ɵɵreference(2);
        core.ɵɵnextContext();
        var _r1 = core.ɵɵreference(1);
        var ctx_r5 = core.ɵɵnextContext();
        core.ɵɵclassProp("col-lg-9", ctx_r5.isViewOnly)("col-lg-10", !ctx_r5.isViewOnly);
        core.ɵɵadvance(1);
        core.ɵɵattributeInterpolate1("id", "userName-", ctx_r5.uniqueId, "");
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(10, _c10, _r1.submitted && _r22.valid, _r1.submitted && !_r22.valid))("ngModel", ctx_r5.userEdit.userName);
        core.ɵɵattribute("autocomplete", ctx_r5.isGeneralEditor ? "new-password" : null);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r5.showValidationErrors && _r1.submitted);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r5.showValidationErrors && _r1.submitted && !_r22.valid);
    } }
    function UserInfoComponent_form_1_div_17_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 6);
        core.ɵɵelementStart(1, "div", 7);
        core.ɵɵelement(2, "hr", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    function UserInfoComponent_form_1_div_18_i_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 19);
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r27 = core.ɵɵreference(6);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(1, _c9, _r27.valid, !_r27.valid));
    } }
    function UserInfoComponent_form_1_div_18_span_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 20);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(2, 1, "users.editor.CurrentPasswordRequired"), " ");
    } }
    function UserInfoComponent_form_1_div_18_Template(rf, ctx) { if (rf & 1) {
        var _r31 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 8);
        core.ɵɵelementStart(1, "label", 22);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 23);
        core.ɵɵelementStart(5, "input", 24, 25);
        core.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_18_Template_input_ngModelChange_5_listener($event) { core.ɵɵrestoreView(_r31); var ctx_r30 = core.ɵɵnextContext(2); return ctx_r30.userEdit.currentPassword = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementStart(7, "small", 26);
        core.ɵɵtext(8);
        core.ɵɵpipe(9, "translate");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(10, UserInfoComponent_form_1_div_18_i_10_Template, 1, 4, "i", 17);
        core.ɵɵtemplate(11, UserInfoComponent_form_1_div_18_span_11_Template, 3, 3, "span", 18);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r27 = core.ɵɵreference(6);
        core.ɵɵnextContext();
        var _r1 = core.ɵɵreference(1);
        var ctx_r7 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate1("for", "userPassword-", ctx_r7.uniqueId, "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(3, 9, "users.editor.Password"));
        core.ɵɵadvance(3);
        core.ɵɵattributeInterpolate1("id", "userPassword-", ctx_r7.uniqueId, "");
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(13, _c10, _r1.submitted && _r27.valid, _r1.submitted && !_r27.valid))("ngModel", ctx_r7.userEdit.currentPassword);
        core.ɵɵattribute("autocomplete", ctx_r7.isGeneralEditor ? "new-password" : null);
        core.ɵɵadvance(3);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(9, 11, "users.editor.PasswordHint"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r7.showValidationErrors && _r1.submitted);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r7.showValidationErrors && _r1.submitted && !_r27.valid);
    } }
    function UserInfoComponent_form_1_div_26_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "p", 13);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r8 = core.ɵɵnextContext(2);
        core.ɵɵclassProp("col-lg-9", ctx_r8.isViewOnly)("col-lg-10", !ctx_r8.isViewOnly);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r8.user.email);
    } }
    function UserInfoComponent_form_1_div_27_i_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 19);
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r32 = core.ɵɵreference(2);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(1, _c9, _r32.valid, !_r32.valid));
    } }
    function UserInfoComponent_form_1_div_27_span_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 20);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(2, 1, "users.editor.EmailRequired"), " ");
    } }
    function UserInfoComponent_form_1_div_27_span_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 20);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(2, 1, "users.editor.InvalidEmail"), " ");
    } }
    function UserInfoComponent_form_1_div_27_Template(rf, ctx) { if (rf & 1) {
        var _r37 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "input", 27, 28);
        core.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_27_Template_input_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r37); var ctx_r36 = core.ɵɵnextContext(2); return ctx_r36.userEdit.email = $event; });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, UserInfoComponent_form_1_div_27_i_3_Template, 1, 4, "i", 17);
        core.ɵɵtemplate(4, UserInfoComponent_form_1_div_27_span_4_Template, 3, 3, "span", 18);
        core.ɵɵtemplate(5, UserInfoComponent_form_1_div_27_span_5_Template, 3, 3, "span", 18);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r32 = core.ɵɵreference(2);
        core.ɵɵnextContext();
        var _r1 = core.ɵɵreference(1);
        var ctx_r9 = core.ɵɵnextContext();
        core.ɵɵclassProp("col-lg-9", ctx_r9.isViewOnly)("col-lg-10", !ctx_r9.isViewOnly);
        core.ɵɵadvance(1);
        core.ɵɵattributeInterpolate1("id", "email-", ctx_r9.uniqueId, "");
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(10, _c10, _r1.submitted && _r32.valid, _r1.submitted && !_r32.valid))("ngModel", ctx_r9.userEdit.email);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r9.showValidationErrors && _r1.submitted);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r9.showValidationErrors && _r1.submitted && (_r32.errors == null ? null : _r32.errors.required));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r9.showValidationErrors && _r1.submitted && (_r32.errors == null ? null : _r32.errors.pattern));
    } }
    function UserInfoComponent_form_1_div_28_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 6);
        core.ɵɵelementStart(1, "div", 7);
        core.ɵɵelement(2, "hr");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r10 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵclassProp("separator-hr", !ctx_r10.isEditMode)("edit-separator-hr", ctx_r10.isEditMode);
    } }
    function UserInfoComponent_form_1_div_29_div_4_Template(rf, ctx) { if (rf & 1) {
        var _r41 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 23);
        core.ɵɵelementStart(1, "button", 30);
        core.ɵɵlistener("click", function UserInfoComponent_form_1_div_29_div_4_Template_button_click_1_listener() { core.ɵɵrestoreView(_r41); var ctx_r40 = core.ɵɵnextContext(3); return ctx_r40.changePassword(); });
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(3, 1, "users.editor.ChangePassword"));
    } }
    function UserInfoComponent_form_1_div_29_div_5_div_2_i_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 19);
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r51 = core.ɵɵreference(6);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(1, _c9, _r51.valid, !_r51.valid));
    } }
    function UserInfoComponent_form_1_div_29_div_5_div_2_span_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 20);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(2, 1, "users.editor.CurrentPasswordRequired"), " ");
    } }
    function UserInfoComponent_form_1_div_29_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r55 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 8);
        core.ɵɵelementStart(1, "label", 32);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "div", 33);
        core.ɵɵelementStart(5, "input", 38, 39);
        core.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_29_div_5_div_2_Template_input_ngModelChange_5_listener($event) { core.ɵɵrestoreView(_r55); var ctx_r54 = core.ɵɵnextContext(4); return ctx_r54.userEdit.currentPassword = $event; });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(7, UserInfoComponent_form_1_div_29_div_5_div_2_i_7_Template, 1, 4, "i", 17);
        core.ɵɵtemplate(8, UserInfoComponent_form_1_div_29_div_5_div_2_span_8_Template, 3, 3, "span", 18);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r51 = core.ɵɵreference(6);
        core.ɵɵnextContext(3);
        var _r1 = core.ɵɵreference(1);
        var ctx_r42 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate1("for", "currentPassword-", ctx_r42.uniqueId, "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(3, 8, "users.editor.CurrentPassword"));
        core.ɵɵadvance(3);
        core.ɵɵattributeInterpolate1("id", "currentPassword-", ctx_r42.uniqueId, "");
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(10, _c10, _r1.submitted && _r51.valid, _r1.submitted && !_r51.valid))("ngModel", ctx_r42.userEdit.currentPassword);
        core.ɵɵattribute("autocomplete", ctx_r42.isGeneralEditor ? "new-password" : null);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r42.showValidationErrors && _r1.submitted);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r42.showValidationErrors && _r1.submitted && !_r51.valid);
    } }
    function UserInfoComponent_form_1_div_29_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 6);
        core.ɵɵelementStart(1, "div", 7);
        core.ɵɵelement(2, "hr", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    function UserInfoComponent_form_1_div_29_div_5_i_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 19);
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r44 = core.ɵɵreference(10);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(1, _c9, _r44.valid, !_r44.valid));
    } }
    function UserInfoComponent_form_1_div_29_div_5_span_12_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 20);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(2, 1, "users.editor.NewPasswordRequired"), " ");
    } }
    function UserInfoComponent_form_1_div_29_div_5_i_23_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 19);
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r47 = core.ɵɵreference(22);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(1, _c9, _r47.valid, !_r47.valid));
    } }
    function UserInfoComponent_form_1_div_29_div_5_span_24_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 20);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(2, 1, "users.editor.ConfirmationPasswordRequired"), " ");
    } }
    function UserInfoComponent_form_1_div_29_div_5_span_25_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 20);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(2, 1, "users.editor.PasswordMismatch"), " ");
    } }
    function UserInfoComponent_form_1_div_29_div_5_Template(rf, ctx) { if (rf & 1) {
        var _r57 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 23);
        core.ɵɵelementStart(1, "div", 31);
        core.ɵɵtemplate(2, UserInfoComponent_form_1_div_29_div_5_div_2_Template, 9, 13, "div", 10);
        core.ɵɵtemplate(3, UserInfoComponent_form_1_div_29_div_5_div_3_Template, 3, 0, "div", 9);
        core.ɵɵelementStart(4, "div", 8);
        core.ɵɵelementStart(5, "label", 32);
        core.ɵɵtext(6);
        core.ɵɵpipe(7, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "div", 33);
        core.ɵɵelementStart(9, "input", 34, 35);
        core.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_29_div_5_Template_input_ngModelChange_9_listener($event) { core.ɵɵrestoreView(_r57); var ctx_r56 = core.ɵɵnextContext(3); return ctx_r56.userEdit.newPassword = $event; });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(11, UserInfoComponent_form_1_div_29_div_5_i_11_Template, 1, 4, "i", 17);
        core.ɵɵtemplate(12, UserInfoComponent_form_1_div_29_div_5_span_12_Template, 3, 3, "span", 18);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(13, "div", 6);
        core.ɵɵelementStart(14, "div", 7);
        core.ɵɵelement(15, "hr", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(16, "div", 8);
        core.ɵɵelementStart(17, "label", 32);
        core.ɵɵtext(18);
        core.ɵɵpipe(19, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(20, "div", 33);
        core.ɵɵelementStart(21, "input", 36, 37);
        core.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_29_div_5_Template_input_ngModelChange_21_listener($event) { core.ɵɵrestoreView(_r57); var ctx_r58 = core.ɵɵnextContext(3); return ctx_r58.userEdit.confirmPassword = $event; });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(23, UserInfoComponent_form_1_div_29_div_5_i_23_Template, 1, 4, "i", 17);
        core.ɵɵtemplate(24, UserInfoComponent_form_1_div_29_div_5_span_24_Template, 3, 3, "span", 18);
        core.ɵɵtemplate(25, UserInfoComponent_form_1_div_29_div_5_span_25_Template, 3, 3, "span", 18);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r44 = core.ɵɵreference(10);
        var _r47 = core.ɵɵreference(22);
        core.ɵɵnextContext(2);
        var _r1 = core.ɵɵreference(1);
        var ctx_r39 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r39.isEditingSelf);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r39.isNewUser);
        core.ɵɵadvance(2);
        core.ɵɵpropertyInterpolate1("for", "newPassword-", ctx_r39.uniqueId, "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(7, 19, "users.editor.NewPassword"));
        core.ɵɵadvance(3);
        core.ɵɵattributeInterpolate1("id", "newPassword-", ctx_r39.uniqueId, "");
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(23, _c10, _r1.submitted && _r44.valid, _r1.submitted && !_r44.valid))("ngModel", ctx_r39.userEdit.newPassword);
        core.ɵɵattribute("autocomplete", ctx_r39.isGeneralEditor ? "new-password" : null);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted && !_r44.valid);
        core.ɵɵadvance(5);
        core.ɵɵpropertyInterpolate1("for", "confirmPassword-", ctx_r39.uniqueId, "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(19, 21, "users.editor.ConfirmPassword"));
        core.ɵɵadvance(3);
        core.ɵɵattributeInterpolate1("id", "confirmPassword-", ctx_r39.uniqueId, "");
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(26, _c10, _r1.submitted && _r47.valid, _r1.submitted && !_r47.valid))("ngModel", ctx_r39.userEdit.confirmPassword);
        core.ɵɵattribute("autocomplete", ctx_r39.isGeneralEditor ? "new-password" : null);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted && (_r47.errors == null ? null : _r47.errors.required));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted && (_r47.errors == null ? null : _r47.errors.validateEqual) && !(_r47.errors == null ? null : _r47.errors.required));
    } }
    function UserInfoComponent_form_1_div_29_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 3);
        core.ɵɵelementStart(1, "label", 22);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(4, UserInfoComponent_form_1_div_29_div_4_Template, 4, 3, "div", 29);
        core.ɵɵtemplate(5, UserInfoComponent_form_1_div_29_div_5_Template, 26, 29, "div", 29);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r11 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate1("for", "newPassword-", ctx_r11.uniqueId, "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(3, 4, "users.editor.Password"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r11.isChangePassword && !ctx_r11.isNewUser);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r11.isChangePassword || ctx_r11.isNewUser);
    } }
    function UserInfoComponent_form_1_div_30_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 6);
        core.ɵɵelementStart(1, "div", 7);
        core.ɵɵelement(2, "hr");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r12 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵclassProp("separator-hr", !ctx_r12.isEditMode)("edit-separator-hr", ctx_r12.isEditMode);
    } }
    function UserInfoComponent_form_1_div_31_div_4_span_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span");
        core.ɵɵtext(1, "\n            ");
        core.ɵɵelementStart(2, "span", 43);
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵtext(4, "\n          ");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var role_r62 = ctx.$implicit;
        var ctx_r61 = core.ɵɵnextContext(4);
        var tmp_0_0 = null;
        core.ɵɵadvance(2);
        core.ɵɵpropertyInterpolate("title", (tmp_0_0 = ctx_r61.getRoleByName(role_r62)) == null ? null : tmp_0_0.description);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(role_r62);
    } }
    function UserInfoComponent_form_1_div_31_div_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "p", 13);
        core.ɵɵtext(2, "\n          ");
        core.ɵɵtemplate(3, UserInfoComponent_form_1_div_31_div_4_span_3_Template, 5, 2, "span", 42);
        core.ɵɵtext(4, "\n        ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r59 = core.ɵɵnextContext(3);
        core.ɵɵclassProp("col-lg-9", ctx_r59.isViewOnly)("col-lg-10", !ctx_r59.isViewOnly);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", ctx_r59.user.roles);
    } }
    function UserInfoComponent_form_1_div_31_div_5_option_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var role_r68 = ctx.$implicit;
        core.ɵɵattributeInterpolate2("data-content", "<span title='", role_r68.description, "' class='badge badge-pill badge-secondary'>", role_r68.name, "</span>");
        core.ɵɵattribute("value", role_r68.name);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", role_r68.name, " ");
    } }
    function UserInfoComponent_form_1_div_31_div_5_i_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 19);
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r63 = core.ɵɵreference(2);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(1, _c9, _r63.valid, !_r63.valid));
    } }
    function UserInfoComponent_form_1_div_31_div_5_span_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 20);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(2, 1, "users.editor.RoleRequired"), " ");
    } }
    function UserInfoComponent_form_1_div_31_div_5_Template(rf, ctx) { if (rf & 1) {
        var _r70 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 44);
        core.ɵɵelementStart(1, "select", 45, 46);
        core.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_31_div_5_Template_select_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r70); var ctx_r69 = core.ɵɵnextContext(3); return ctx_r69.userEdit.roles = $event; });
        core.ɵɵtemplate(4, UserInfoComponent_form_1_div_31_div_5_option_4_Template, 2, 4, "option", 42);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(5, UserInfoComponent_form_1_div_31_div_5_i_5_Template, 1, 4, "i", 17);
        core.ɵɵtemplate(6, UserInfoComponent_form_1_div_31_div_5_span_6_Template, 3, 3, "span", 18);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r63 = core.ɵɵreference(2);
        core.ɵɵnextContext(2);
        var _r1 = core.ɵɵreference(1);
        var ctx_r60 = core.ɵɵnextContext();
        core.ɵɵclassProp("col-lg-9", ctx_r60.isViewOnly)("col-lg-10", !ctx_r60.isViewOnly);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(9, _c10, _r1.submitted && _r63.valid, _r1.submitted && !_r63.valid));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r60.userEdit.roles);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", ctx_r60.allRoles);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r60.showValidationErrors && _r1.submitted);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r60.showValidationErrors && _r1.submitted && !_r63.valid);
    } }
    function UserInfoComponent_form_1_div_31_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 8);
        core.ɵɵelementStart(1, "label", 40);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(4, UserInfoComponent_form_1_div_31_div_4_Template, 5, 5, "div", 5);
        core.ɵɵtemplate(5, UserInfoComponent_form_1_div_31_div_5_Template, 7, 12, "div", 41);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r13 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵclassProp("col-lg-3", ctx_r13.isViewOnly)("col-lg-2", !ctx_r13.isViewOnly);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(3, 7, "users.editor.Roles"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r13.isEditMode);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r13.isEditMode && ctx_r13.canAssignRoles && !ctx_r13.isEditingSelf);
    } }
    function UserInfoComponent_form_1_div_39_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "p", 13);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r14 = core.ɵɵnextContext(2);
        core.ɵɵclassProp("col-lg-9", ctx_r14.isViewOnly)("col-lg-10", !ctx_r14.isViewOnly);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r14.user.fullName);
    } }
    function UserInfoComponent_form_1_div_40_Template(rf, ctx) { if (rf & 1) {
        var _r72 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "input", 47);
        core.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_40_Template_input_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r72); var ctx_r71 = core.ɵɵnextContext(2); return ctx_r71.userEdit.fullName = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r15 = core.ɵɵnextContext(2);
        core.ɵɵclassProp("col-lg-9", ctx_r15.isViewOnly)("col-lg-10", !ctx_r15.isViewOnly);
        core.ɵɵadvance(1);
        core.ɵɵattributeInterpolate1("id", "fullName-", ctx_r15.uniqueId, "");
        core.ɵɵproperty("ngModel", ctx_r15.userEdit.fullName);
    } }
    function UserInfoComponent_form_1_div_48_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "p", 13);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r16 = core.ɵɵnextContext(2);
        core.ɵɵclassProp("col-lg-9", ctx_r16.isViewOnly)("col-lg-10", !ctx_r16.isViewOnly);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r16.user.phoneNumber);
    } }
    function UserInfoComponent_form_1_div_49_Template(rf, ctx) { if (rf & 1) {
        var _r74 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "input", 48);
        core.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_49_Template_input_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r74); var ctx_r73 = core.ɵɵnextContext(2); return ctx_r73.userEdit.phoneNumber = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r17 = core.ɵɵnextContext(2);
        core.ɵɵclassProp("col-lg-9", ctx_r17.isViewOnly)("col-lg-10", !ctx_r17.isViewOnly);
        core.ɵɵadvance(1);
        core.ɵɵattributeInterpolate1("id", "phoneNumber-", ctx_r17.uniqueId, "");
        core.ɵɵproperty("ngModel", ctx_r17.userEdit.phoneNumber);
    } }
    function UserInfoComponent_form_1_div_50_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 6);
        core.ɵɵelementStart(1, "div", 7);
        core.ɵɵelement(2, "hr");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r18 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵclassProp("last-separator-hr", !ctx_r18.isEditMode)("edit-last-separator-hr", ctx_r18.isEditMode);
    } }
    function UserInfoComponent_form_1_div_51_div_2_button_6_Template(rf, ctx) { if (rf & 1) {
        var _r82 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 61);
        core.ɵɵlistener("click", function UserInfoComponent_form_1_div_51_div_2_button_6_Template_button_click_0_listener() { core.ɵɵrestoreView(_r82); var ctx_r81 = core.ɵɵnextContext(4); return ctx_r81.unlockUser(); });
        core.ɵɵelement(1, "i", 62);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r80 = core.ɵɵnextContext(4);
        core.ɵɵproperty("disabled", ctx_r80.isSaving);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(3, 2, "users.editor.Unblock"), "");
    } }
    function UserInfoComponent_form_1_div_51_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r84 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 56);
        core.ɵɵelementStart(1, "div", 57);
        core.ɵɵelementStart(2, "input", 58);
        core.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_51_div_2_Template_input_ngModelChange_2_listener($event) { core.ɵɵrestoreView(_r84); var ctx_r83 = core.ɵɵnextContext(3); return ctx_r83.userEdit.isEnabled = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "label", 59);
        core.ɵɵtext(4);
        core.ɵɵpipe(5, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(6, UserInfoComponent_form_1_div_51_div_2_button_6_Template, 4, 4, "button", 60);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r75 = core.ɵɵnextContext(3);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngModel", ctx_r75.userEdit.isEnabled);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(5, 3, "users.editor.Enabled"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r75.userEdit.isLockedOut);
    } }
    function UserInfoComponent_form_1_div_51_button_6_Template(rf, ctx) { if (rf & 1) {
        var _r86 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 63);
        core.ɵɵlistener("click", function UserInfoComponent_form_1_div_51_button_6_Template_button_click_0_listener() { core.ɵɵrestoreView(_r86); var ctx_r85 = core.ɵɵnextContext(3); return ctx_r85.close(); });
        core.ɵɵelement(1, "i", 64);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(3, 1, "users.editor.Close"), "");
    } }
    function UserInfoComponent_form_1_div_51_button_8_Template(rf, ctx) { if (rf & 1) {
        var _r88 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 63);
        core.ɵɵlistener("click", function UserInfoComponent_form_1_div_51_button_8_Template_button_click_0_listener() { core.ɵɵrestoreView(_r88); var ctx_r87 = core.ɵɵnextContext(3); return ctx_r87.edit(); });
        core.ɵɵelement(1, "i", 65);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(3, 1, "users.editor.Edit"), "");
    } }
    function UserInfoComponent_form_1_div_51_button_10_Template(rf, ctx) { if (rf & 1) {
        var _r90 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 66);
        core.ɵɵlistener("click", function UserInfoComponent_form_1_div_51_button_10_Template_button_click_0_listener() { core.ɵɵrestoreView(_r90); var ctx_r89 = core.ɵɵnextContext(3); return ctx_r89.cancel(); });
        core.ɵɵelement(1, "i", 67);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r78 = core.ɵɵnextContext(3);
        core.ɵɵproperty("disabled", ctx_r78.isSaving);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(3, 2, "users.editor.Cancel"), "");
    } }
    function UserInfoComponent_form_1_div_51_button_12_i_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 71);
    } }
    function UserInfoComponent_form_1_div_51_button_12_i_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 72);
    } }
    function UserInfoComponent_form_1_div_51_button_12_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "button", 68);
        core.ɵɵtext(1, "\n            ");
        core.ɵɵtemplate(2, UserInfoComponent_form_1_div_51_button_12_i_2_Template, 1, 0, "i", 69);
        core.ɵɵtemplate(3, UserInfoComponent_form_1_div_51_button_12_i_3_Template, 1, 0, "i", 70);
        core.ɵɵtext(4);
        core.ɵɵpipe(5, "translate");
        core.ɵɵpipe(6, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r79 = core.ɵɵnextContext(3);
        core.ɵɵproperty("disabled", ctx_r79.isSaving);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r79.isSaving);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r79.isSaving);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r79.isSaving ? core.ɵɵpipeBind1(5, 4, "users.editor.Saving") : core.ɵɵpipeBind1(6, 6, "users.editor.Save"), "\n          ");
    } }
    function UserInfoComponent_form_1_div_51_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 3);
        core.ɵɵelementStart(1, "div", 49);
        core.ɵɵtemplate(2, UserInfoComponent_form_1_div_51_div_2_Template, 7, 5, "div", 50);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "div", 51);
        core.ɵɵelementStart(4, "div", 52);
        core.ɵɵtext(5, "\n          ");
        core.ɵɵtemplate(6, UserInfoComponent_form_1_div_51_button_6_Template, 4, 3, "button", 53);
        core.ɵɵtext(7, "\n          ");
        core.ɵɵtemplate(8, UserInfoComponent_form_1_div_51_button_8_Template, 4, 3, "button", 53);
        core.ɵɵtext(9, "\n          ");
        core.ɵɵtemplate(10, UserInfoComponent_form_1_div_51_button_10_Template, 4, 4, "button", 54);
        core.ɵɵtext(11, "\n          ");
        core.ɵɵtemplate(12, UserInfoComponent_form_1_div_51_button_12_Template, 7, 8, "button", 55);
        core.ɵɵtext(13, "\n        ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r19 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r19.isGeneralEditor && ctx_r19.isEditMode);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngIf", !ctx_r19.isEditMode && ctx_r19.isGeneralEditor);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r19.isEditMode && !ctx_r19.isGeneralEditor);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r19.isEditMode);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r19.isEditMode);
    } }
    function UserInfoComponent_form_1_Template(rf, ctx) { if (rf & 1) {
        var _r94 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "form", 1, 2);
        core.ɵɵlistener("ngSubmit", function UserInfoComponent_form_1_Template_form_ngSubmit_0_listener() { core.ɵɵrestoreView(_r94); var _r1 = core.ɵɵreference(1); var ctx_r93 = core.ɵɵnextContext(); _r1.form.valid ? ctx_r93.save() : !ctx_r93.userName.valid && ctx_r93.showErrorAlert("User name is required", "Please enter a user name (minimum of 2 and maximum of 200 characters)"); ctx_r93.userPassword && !ctx_r93.userPassword.valid && ctx_r93.showErrorAlert("Password is required", "Please enter the current password"); (ctx_r93.email.errors == null ? null : ctx_r93.email.errors.required) && ctx_r93.showErrorAlert("Email is required", "Please enter an email address (maximum of 200 characters)"); (ctx_r93.email.errors == null ? null : ctx_r93.email.errors.pattern) && ctx_r93.showErrorAlert("Invalid Email", "Please enter a valid email address"); ctx_r93.isChangePassword && ctx_r93.isEditingSelf && !ctx_r93.currentPassword.valid && ctx_r93.showErrorAlert("Current password is required", "Please enter the current password"); (ctx_r93.isChangePassword || ctx_r93.isNewUser) && !ctx_r93.newPassword.valid && ctx_r93.showErrorAlert("New password is required", "Please enter the new password (minimum of 6 characters)"); (ctx_r93.isChangePassword || ctx_r93.isNewUser) && ctx_r93.newPassword.valid && (ctx_r93.confirmPassword.errors == null ? null : ctx_r93.confirmPassword.errors.required) && ctx_r93.showErrorAlert("Confirmation password is required", "Please enter the confirmation password"); (ctx_r93.isChangePassword || ctx_r93.isNewUser) && ctx_r93.newPassword.valid && (ctx_r93.confirmPassword.errors == null ? null : ctx_r93.confirmPassword.errors.validateEqual) && ctx_r93.showErrorAlert("Passwword mismatch", "New password and confirmation password do not match"); return ctx_r93.canAssignRoles && !ctx_r93.isEditingSelf && !ctx_r93.roles.valid && ctx_r93.showErrorAlert("Roles is required", "Please select a minimum of 1 role"); });
        core.ɵɵelementStart(2, "div", 3);
        core.ɵɵelementStart(3, "label", 4);
        core.ɵɵtext(4);
        core.ɵɵpipe(5, "translate");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(6, UserInfoComponent_form_1_div_6_Template, 3, 5, "div", 5);
        core.ɵɵtemplate(7, UserInfoComponent_form_1_div_7_Template, 2, 6, "div", 5);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "div", 6);
        core.ɵɵelementStart(9, "div", 7);
        core.ɵɵelement(10, "hr");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(11, "div", 8);
        core.ɵɵelementStart(12, "label", 4);
        core.ɵɵtext(13);
        core.ɵɵpipe(14, "translate");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(15, UserInfoComponent_form_1_div_15_Template, 3, 5, "div", 5);
        core.ɵɵtemplate(16, UserInfoComponent_form_1_div_16_Template, 5, 13, "div", 5);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(17, UserInfoComponent_form_1_div_17_Template, 3, 0, "div", 9);
        core.ɵɵtemplate(18, UserInfoComponent_form_1_div_18_Template, 12, 16, "div", 10);
        core.ɵɵelementStart(19, "div", 6);
        core.ɵɵelementStart(20, "div", 7);
        core.ɵɵelement(21, "hr");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(22, "div", 8);
        core.ɵɵelementStart(23, "label", 4);
        core.ɵɵtext(24);
        core.ɵɵpipe(25, "translate");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(26, UserInfoComponent_form_1_div_26_Template, 3, 5, "div", 5);
        core.ɵɵtemplate(27, UserInfoComponent_form_1_div_27_Template, 6, 13, "div", 5);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(28, UserInfoComponent_form_1_div_28_Template, 3, 4, "div", 9);
        core.ɵɵtemplate(29, UserInfoComponent_form_1_div_29_Template, 6, 6, "div", 11);
        core.ɵɵtemplate(30, UserInfoComponent_form_1_div_30_Template, 3, 4, "div", 9);
        core.ɵɵtemplate(31, UserInfoComponent_form_1_div_31_Template, 6, 9, "div", 10);
        core.ɵɵelementStart(32, "div", 6);
        core.ɵɵelementStart(33, "div", 7);
        core.ɵɵelement(34, "hr");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(35, "div", 3);
        core.ɵɵelementStart(36, "label", 4);
        core.ɵɵtext(37);
        core.ɵɵpipe(38, "translate");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(39, UserInfoComponent_form_1_div_39_Template, 3, 5, "div", 5);
        core.ɵɵtemplate(40, UserInfoComponent_form_1_div_40_Template, 2, 6, "div", 5);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(41, "div", 6);
        core.ɵɵelementStart(42, "div", 7);
        core.ɵɵelement(43, "hr");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(44, "div", 3);
        core.ɵɵelementStart(45, "label", 4);
        core.ɵɵtext(46);
        core.ɵɵpipe(47, "translate");
        core.ɵɵelementEnd();
        core.ɵɵtemplate(48, UserInfoComponent_form_1_div_48_Template, 3, 5, "div", 5);
        core.ɵɵtemplate(49, UserInfoComponent_form_1_div_49_Template, 2, 6, "div", 5);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(50, UserInfoComponent_form_1_div_50_Template, 3, 4, "div", 9);
        core.ɵɵtemplate(51, UserInfoComponent_form_1_div_51_Template, 14, 5, "div", 11);
        core.ɵɵelement(52, "div", 12);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵattribute("autocomplete", ctx_r0.isGeneralEditor ? "NaN" : null);
        core.ɵɵadvance(3);
        core.ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
        core.ɵɵpropertyInterpolate1("for", "jobTitle-", ctx_r0.uniqueId, "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(5, 65, "users.editor.JobTitle"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r0.isEditMode);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.isEditMode);
        core.ɵɵadvance(3);
        core.ɵɵclassProp("separator-hr", !ctx_r0.isEditMode)("edit-separator-hr", ctx_r0.isEditMode);
        core.ɵɵadvance(2);
        core.ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
        core.ɵɵpropertyInterpolate1("for", "userName-", ctx_r0.uniqueId, "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(14, 67, "users.editor.UserName"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r0.isEditMode || ctx_r0.isEditingSelf);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.isEditMode && !ctx_r0.isEditingSelf);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.isEditMode && ctx_r0.isEditingSelf && !ctx_r0.isChangePassword && ctx_r0.user.userName != ctx_r0.userEdit.userName);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.isEditMode && ctx_r0.isEditingSelf && !ctx_r0.isChangePassword && ctx_r0.user.userName != ctx_r0.userEdit.userName);
        core.ɵɵadvance(3);
        core.ɵɵclassProp("separator-hr", !ctx_r0.isEditMode)("edit-separator-hr", ctx_r0.isEditMode);
        core.ɵɵadvance(2);
        core.ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
        core.ɵɵpropertyInterpolate1("for", "email-", ctx_r0.uniqueId, "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(25, 69, "users.editor.Email"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r0.isEditMode);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.isEditMode);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.isEditMode);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.isEditMode);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r0.isEditMode || ctx_r0.canAssignRoles || ctx_r0.isEditingSelf);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r0.isEditMode || ctx_r0.canAssignRoles || ctx_r0.isEditingSelf);
        core.ɵɵadvance(3);
        core.ɵɵclassProp("separator-hr", !ctx_r0.isEditMode)("edit-separator-hr", ctx_r0.isEditMode);
        core.ɵɵadvance(2);
        core.ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
        core.ɵɵpropertyInterpolate1("for", "fullName-", ctx_r0.uniqueId, "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(38, 71, "users.editor.FullName"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r0.isEditMode);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.isEditMode);
        core.ɵɵadvance(3);
        core.ɵɵclassProp("separator-hr", !ctx_r0.isEditMode)("edit-separator-hr", ctx_r0.isEditMode);
        core.ɵɵadvance(2);
        core.ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
        core.ɵɵpropertyInterpolate1("for", "phoneNumber-", ctx_r0.uniqueId, "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(47, 73, "users.editor.PhoneNumber"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r0.isEditMode);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r0.isEditMode);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r0.isViewOnly);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r0.isViewOnly);
    } }
    var UserInfoComponent = /** @class */ (function () {
        function UserInfoComponent(alertService, accountService) {
            this.alertService = alertService;
            this.accountService = accountService;
            this.isEditMode = false;
            this.isNewUser = false;
            this.isSaving = false;
            this.isChangePassword = false;
            this.isEditingSelf = false;
            this.showValidationErrors = false;
            this.uniqueId = ngxAppkitContractsAlpha.Utilities.uniqueId();
            this.user = new ngxOauth2.User();
            this.allRoles = [];
            this.formResetToggle = true;
            this.isGeneralEditor = false;
        }
        UserInfoComponent.prototype.ngOnInit = function () {
            if (!this.isGeneralEditor) {
                this.loadCurrentUserData();
            }
        };
        UserInfoComponent.prototype.loadCurrentUserData = function () {
            var _this = this;
            this.alertService.startLoadingMessage();
            if (this.canViewAllRoles) {
                this.accountService.getUserAndRoles().subscribe(function (results) { return _this.onCurrentUserDataLoadSuccessful(results[0], results[1]); }, function (error) { return _this.onCurrentUserDataLoadFailed(error); });
            }
            else {
                this.accountService.getUser().subscribe(function (user) { return _this.onCurrentUserDataLoadSuccessful(user, user.roles.map(function (x) { return new Role(x); })); }, function (error) { return _this.onCurrentUserDataLoadFailed(error); });
            }
        };
        UserInfoComponent.prototype.onCurrentUserDataLoadSuccessful = function (user, roles) {
            this.alertService.stopLoadingMessage();
            this.user = user;
            this.allRoles = roles;
        };
        UserInfoComponent.prototype.onCurrentUserDataLoadFailed = function (error) {
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Load Error', "Unable to retrieve user data from the server.\r\nErrors: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            this.user = new ngxOauth2.User();
        };
        UserInfoComponent.prototype.getRoleByName = function (name) {
            return this.allRoles.find(function (r) { return r.name == name; });
        };
        UserInfoComponent.prototype.showErrorAlert = function (caption, message) {
            this.alertService.showMessage(caption, message, ngxAppkitContractsAlpha.MessageSeverity.error);
        };
        UserInfoComponent.prototype.deletePasswordFromUser = function (user) {
            var userEdit = user;
            delete userEdit.currentPassword;
            delete userEdit.newPassword;
            delete userEdit.confirmPassword;
        };
        UserInfoComponent.prototype.edit = function () {
            if (!this.isGeneralEditor) {
                this.isEditingSelf = true;
                this.userEdit = new UserEdit();
                Object.assign(this.userEdit, this.user);
            }
            else {
                if (!this.userEdit) {
                    this.userEdit = new UserEdit();
                }
                this.isEditingSelf = this.accountService.currentUser ? this.userEdit.id == this.accountService.currentUser.id : false;
            }
            this.isEditMode = true;
            this.showValidationErrors = true;
            this.isChangePassword = false;
        };
        UserInfoComponent.prototype.save = function () {
            var _this = this;
            this.isSaving = true;
            this.alertService.startLoadingMessage('Saving changes...');
            if (this.isNewUser) {
                this.accountService.newUser(this.userEdit).subscribe(function (user) { return _this.saveSuccessHelper(user); }, function (error) { return _this.saveFailedHelper(error); });
            }
            else {
                this.accountService.updateUser(this.userEdit).subscribe(function (response) { return _this.saveSuccessHelper(); }, function (error) { return _this.saveFailedHelper(error); });
            }
        };
        UserInfoComponent.prototype.saveSuccessHelper = function (user) {
            this.testIsRoleUserCountChanged(this.user, this.userEdit);
            if (user) {
                Object.assign(this.userEdit, user);
            }
            this.isSaving = false;
            this.alertService.stopLoadingMessage();
            this.isChangePassword = false;
            this.showValidationErrors = false;
            this.deletePasswordFromUser(this.userEdit);
            Object.assign(this.user, this.userEdit);
            this.userEdit = new UserEdit();
            this.resetForm();
            if (this.isGeneralEditor) {
                if (this.isNewUser) {
                    this.alertService.showMessage('Success', "User \"" + this.user.userName + "\" was created successfully", ngxAppkitContractsAlpha.MessageSeverity.success);
                }
                else if (!this.isEditingSelf) {
                    this.alertService.showMessage('Success', "Changes to user \"" + this.user.userName + "\" was saved successfully", ngxAppkitContractsAlpha.MessageSeverity.success);
                }
            }
            if (this.isEditingSelf) {
                this.alertService.showMessage('Success', 'Changes to your User Profile was saved successfully', ngxAppkitContractsAlpha.MessageSeverity.success);
                this.refreshLoggedInUser();
            }
            this.isEditMode = false;
            if (this.changesSavedCallback) {
                this.changesSavedCallback();
            }
        };
        UserInfoComponent.prototype.saveFailedHelper = function (error) {
            this.isSaving = false;
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Save Error', 'The below errors occured whilst saving your changes:', ngxAppkitContractsAlpha.MessageSeverity.error, error);
            this.alertService.showStickyMessage(error, null, ngxAppkitContractsAlpha.MessageSeverity.error);
            if (this.changesFailedCallback) {
                this.changesFailedCallback();
            }
        };
        UserInfoComponent.prototype.testIsRoleUserCountChanged = function (currentUser, editedUser) {
            var _this = this;
            var rolesAdded = this.isNewUser ? editedUser.roles : editedUser.roles.filter(function (role) { return currentUser.roles.indexOf(role) == -1; });
            var rolesRemoved = this.isNewUser ? [] : currentUser.roles.filter(function (role) { return editedUser.roles.indexOf(role) == -1; });
            var modifiedRoles = rolesAdded.concat(rolesRemoved);
            if (modifiedRoles.length) {
                setTimeout(function () { return _this.accountService.onRolesUserCountChanged(modifiedRoles); });
            }
        };
        UserInfoComponent.prototype.cancel = function () {
            if (this.isGeneralEditor) {
                this.userEdit = this.user = new UserEdit();
            }
            else {
                this.userEdit = new UserEdit();
            }
            this.showValidationErrors = false;
            this.resetForm();
            this.alertService.showMessage('Cancelled', 'Operation cancelled by user', ngxAppkitContractsAlpha.MessageSeverity.default);
            this.alertService.resetStickyMessage();
            if (!this.isGeneralEditor) {
                this.isEditMode = false;
            }
            if (this.changesCancelledCallback) {
                this.changesCancelledCallback();
            }
        };
        UserInfoComponent.prototype.close = function () {
            this.userEdit = this.user = new UserEdit();
            this.showValidationErrors = false;
            this.resetForm();
            this.isEditMode = false;
            if (this.changesSavedCallback) {
                this.changesSavedCallback();
            }
        };
        UserInfoComponent.prototype.refreshLoggedInUser = function () {
            var _this = this;
            this.accountService.refreshLoggedInUser()
                .subscribe(function (user) {
                _this.loadCurrentUserData();
            }, function (error) {
                _this.alertService.resetStickyMessage();
                _this.alertService.showStickyMessage('Refresh failed', 'An error occured whilst refreshing logged in user information from the server', ngxAppkitContractsAlpha.MessageSeverity.error, error);
            });
        };
        UserInfoComponent.prototype.changePassword = function () {
            this.isChangePassword = true;
        };
        UserInfoComponent.prototype.unlockUser = function () {
            var _this = this;
            this.isSaving = true;
            this.alertService.startLoadingMessage('Unblocking user...');
            this.accountService.unblockUser(this.userEdit.id)
                .subscribe(function () {
                _this.isSaving = false;
                _this.userEdit.isLockedOut = false;
                _this.alertService.stopLoadingMessage();
                _this.alertService.showMessage('Success', 'User has been successfully unblocked', ngxAppkitContractsAlpha.MessageSeverity.success);
            }, function (error) {
                _this.isSaving = false;
                _this.alertService.stopLoadingMessage();
                _this.alertService.showStickyMessage('Unblock Error', 'The below errors occured whilst unblocking the user:', ngxAppkitContractsAlpha.MessageSeverity.error, error);
                _this.alertService.showStickyMessage(error, null, ngxAppkitContractsAlpha.MessageSeverity.error);
            });
        };
        UserInfoComponent.prototype.resetForm = function (replace) {
            var _this = this;
            if (replace === void 0) { replace = false; }
            this.isChangePassword = false;
            if (!replace) {
                this.form.reset();
            }
            else {
                this.formResetToggle = false;
                setTimeout(function () {
                    _this.formResetToggle = true;
                });
            }
        };
        UserInfoComponent.prototype.newUser = function (allRoles) {
            this.isGeneralEditor = true;
            this.isNewUser = true;
            this.allRoles = __spread(allRoles);
            this.user = this.userEdit = new UserEdit();
            this.userEdit.isEnabled = true;
            this.edit();
            return this.userEdit;
        };
        UserInfoComponent.prototype.editUser = function (user, allRoles) {
            if (user) {
                this.isGeneralEditor = true;
                this.isNewUser = false;
                this.setRoles(user, allRoles);
                this.user = new ngxOauth2.User();
                this.userEdit = new UserEdit();
                Object.assign(this.user, user);
                Object.assign(this.userEdit, user);
                this.edit();
                return this.userEdit;
            }
            else {
                return this.newUser(allRoles);
            }
        };
        UserInfoComponent.prototype.displayUser = function (user, allRoles) {
            this.user = new ngxOauth2.User();
            Object.assign(this.user, user);
            this.deletePasswordFromUser(this.user);
            this.setRoles(user, allRoles);
            this.isEditMode = false;
        };
        UserInfoComponent.prototype.setRoles = function (user, allRoles) {
            var e_1, _a;
            var _this = this;
            this.allRoles = allRoles ? __spread(allRoles) : [];
            if (user.roles) {
                var _loop_1 = function (ur) {
                    if (!this_1.allRoles.some(function (r) { return r.name == ur; })) {
                        this_1.allRoles.unshift(new Role(ur));
                    }
                };
                var this_1 = this;
                try {
                    for (var _b = __values(user.roles), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var ur = _c.value;
                        _loop_1(ur);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            if (allRoles == null || this.allRoles.length != allRoles.length) {
                setTimeout(function () {
                    if (_this.rolesSelector) {
                        _this.rolesSelector.refresh();
                    }
                });
            }
        };
        Object.defineProperty(UserInfoComponent.prototype, "canViewAllRoles", {
            get: function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.viewRolesPermission);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserInfoComponent.prototype, "canAssignRoles", {
            get: function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.assignRolesPermission);
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ UserInfoComponent.ɵfac = function UserInfoComponent_Factory(t) { return new (t || UserInfoComponent)(core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.AlertService), core.ɵɵdirectiveInject(AccountService)); };
        /** @nocollapse */ UserInfoComponent.ɵcmp = core.ɵɵdefineComponent({ type: UserInfoComponent, selectors: [["user-info"]], viewQuery: function UserInfoComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0$2, true);
                core.ɵɵviewQuery(_c1$1, true);
                core.ɵɵviewQuery(_c2$1, true);
                core.ɵɵviewQuery(_c3$1, true);
                core.ɵɵviewQuery(_c4$1, true);
                core.ɵɵviewQuery(_c5$1, true);
                core.ɵɵviewQuery(_c6, true);
                core.ɵɵviewQuery(_c7, true);
                core.ɵɵviewQuery(_c8, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.form = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.userName = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.userPassword = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.email = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.currentPassword = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.newPassword = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.confirmPassword = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.roles = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.rolesSelector = _t.first);
            } }, inputs: { isViewOnly: "isViewOnly", isGeneralEditor: "isGeneralEditor" }, decls: 2, vars: 1, consts: [["name", "userInfoForm", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["name", "userInfoForm", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "row"], [1, "col-form-label", 3, "for"], [3, "col-lg-9", "col-lg-10", 4, "ngIf"], [1, "row"], [1, "col-lg-12"], [1, "form-group", "row", "has-feedback-icon"], ["class", "row", 4, "ngIf"], ["class", "form-group row has-feedback-icon", 4, "ngIf"], ["class", "form-group row", 4, "ngIf"], [1, "clearfix"], [1, "form-control-plaintext"], ["autofocus", "", "type", "text", "name", "jobTitle", "placeholder", "Enter Job Title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "userName", "placeholder", "Enter user name", "required", "", "minlength", "2", "maxlength", "200", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["userName", "ngModel"], ["class", "fa form-control-feedback", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "form-control-feedback", 3, "ngClass"], [1, "invalid-feedback"], [1, "password-separator-hr"], [1, "col-form-label", "col-lg-2", 3, "for"], [1, "col-lg-10"], ["type", "password", "name", "userPassword", "placeholder", "Enter password", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["userPassword", "ngModel"], [1, "hint-sm"], ["type", "text", "name", "email", "placeholder", "Enter email address", "required", "", "maxlength", "200", "pattern", "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "col-lg-10", 4, "ngIf"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "password-well", "card", "card-body", "bg-light"], [1, "col-form-label", "col-lg-3", 3, "for"], [1, "col-lg-9"], ["type", "password", "name", "newPassword", "placeholder", "Enter new password", "required", "", "minlength", "6", "validateEqual", "confirmPassword", "reverse", "true", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["newPassword", "ngModel"], ["type", "password", "name", "confirmPassword", "placeholder", "Confirm new password", "required", "", "validateEqual", "newPassword", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"], ["type", "password", "name", "currentPassword", "placeholder", "Enter current password", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["currentPassword", "ngModel"], ["for", "roles-user-info", 1, "col-form-label"], [3, "ngClass", "col-lg-9", "col-lg-10", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-pill", "badge-secondary", 3, "title"], [3, "ngClass"], ["id", "roles-user-info", "name", "roles", "bootstrapSelect", "", "required", "", "multiple", "", "data-live-search", "true", "data-actions-box", "false", "data-live-search-placeholder", "Search...", "title", "Select Roles", 1, "selectpicker", "form-control", "left-status", 3, "ngModel", "ngModelChange"], ["roles", "ngModel", "rolesSelector", "bootstrap-select"], ["type", "text", "name", "fullName", "placeholder", "Enter full name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "phoneNumber", "placeholder", "Enter phone number", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-5"], ["class", "float-left", 4, "ngIf"], [1, "col-sm-7"], [1, "float-right"], ["type", "button", "class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", 4, "ngIf"], [1, "float-left"], [1, "form-check", "user-enabled"], ["type", "checkbox", "id", "idEnabled", "name", "isEnabled", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "idEnabled", 1, "form-check-label"], ["type", "button", "class", "btn btn-warning unblock-user", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", "unblock-user", 3, "disabled", "click"], [1, "fa", "fa-unlock-alt"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-close"], [1, "fa", "fa-edit"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-times"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fa fa-save", 4, "ngIf"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "fa", "fa-save"], [1, "fa", "fa-circle-o-notch", "fa-spin"]], template: function UserInfoComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div");
                core.ɵɵtemplate(1, UserInfoComponent_form_1_Template, 53, 75, "form", 0);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.formResetToggle);
            } }, directives: [common.NgIf, forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.NgForm, forms.DefaultValueAccessor, AutofocusDirective, forms.NgControlStatus, forms.NgModel, forms.RequiredValidator, forms.MinLengthValidator, forms.MaxLengthValidator, common.NgClass, forms.PatternValidator, EqualValidator, common.NgForOf, forms.SelectMultipleControlValueAccessor, BootstrapSelectDirective, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x, forms.CheckboxControlValueAccessor], pipes: [core$1.TranslatePipe], styles: [".separator-hr[_ngcontent-%COMP%]{margin:0 5px;border-top-style:dashed}.edit-separator-hr[_ngcontent-%COMP%]{margin:10px 5px;border-top-style:dashed}.last-separator-hr[_ngcontent-%COMP%]{margin-top:5px}.edit-last-separator-hr[_ngcontent-%COMP%]{margin-top:15px}.password-separator-hr[_ngcontent-%COMP%]{margin:5px;border-style:none}.form-group[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}input.form-control[_ngcontent-%COMP%]{border-left-width:5px}.invalid-feedback[_ngcontent-%COMP%]{display:block}.password-well[_ngcontent-%COMP%]{padding:.5rem}.hint-sm[_ngcontent-%COMP%]{display:block}.form-check.user-enabled[_ngcontent-%COMP%]{display:inline-block}.unblock-user[_ngcontent-%COMP%]{margin-left:34px}@media (min-width:992px){.user-enabled[_ngcontent-%COMP%]{margin-left:40px}}"] });
        return UserInfoComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(UserInfoComponent, [{
            type: core.Component,
            args: [{
                    selector: 'user-info',
                    templateUrl: './user-info.component.html',
                    styleUrls: ['./user-info.component.scss']
                }]
        }], function () { return [{ type: ngxAppkitServicesAlpha.AlertService }, { type: AccountService }]; }, { isViewOnly: [{
                type: core.Input
            }], isGeneralEditor: [{
                type: core.Input
            }], form: [{
                type: core.ViewChild,
                args: ['f', { static: false }]
            }], userName: [{
                type: core.ViewChild,
                args: ['userName', { static: false }]
            }], userPassword: [{
                type: core.ViewChild,
                args: ['userPassword', { static: false }]
            }], email: [{
                type: core.ViewChild,
                args: ['email', { static: false }]
            }], currentPassword: [{
                type: core.ViewChild,
                args: ['currentPassword', { static: false }]
            }], newPassword: [{
                type: core.ViewChild,
                args: ['newPassword', { static: false }]
            }], confirmPassword: [{
                type: core.ViewChild,
                args: ['confirmPassword', { static: false }]
            }], roles: [{
                type: core.ViewChild,
                args: ['roles', { static: false }]
            }], rolesSelector: [{
                type: core.ViewChild,
                args: ['rolesSelector', { static: false }]
            }] }); })();

    var _c0$3 = ["indexTemplate"];
    var _c1$2 = ["userNameTemplate"];
    var _c2$2 = ["rolesTemplate"];
    var _c3$2 = ["actionsTemplate"];
    var _c4$2 = ["editorModal"];
    var _c5$2 = ["userEditor"];
    function UsersManagementComponent_li_9_Template(rf, ctx) { if (rf & 1) {
        var _r14 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 23);
        core.ɵɵelementStart(1, "a", 24);
        core.ɵɵlistener("click", function UsersManagementComponent_li_9_Template_a_click_1_listener() { core.ɵɵrestoreView(_r14); var ctx_r13 = core.ɵɵnextContext(); return ctx_r13.newUser(); });
        core.ɵɵelement(2, "i", 25);
        core.ɵɵtext(3);
        core.ɵɵpipe(4, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(3);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(4, 1, "users.management.NewUser"), " ");
    } }
    function UsersManagementComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "strong");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var value_r15 = ctx.value;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(value_r15);
    } }
    function UsersManagementComponent_ng_template_13_i_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 28);
    } }
    function UsersManagementComponent_ng_template_13_i_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 29);
    } }
    function UsersManagementComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span");
        core.ɵɵtemplate(1, UsersManagementComponent_ng_template_13_i_1_Template, 1, 0, "i", 26);
        core.ɵɵtemplate(2, UsersManagementComponent_ng_template_13_i_2_Template, 1, 0, "i", 27);
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r16 = ctx.row;
        var value_r17 = ctx.value;
        core.ɵɵclassProp("locked-out", row_r16.isLockedOut)("user-disabled", !row_r16.isEnabled);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", row_r16.isLockedOut);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !row_r16.isEnabled);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", value_r17, " ");
    } }
    function UsersManagementComponent_ng_template_15_span_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 31);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var role_r24 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(role_r24);
    } }
    function UsersManagementComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, UsersManagementComponent_ng_template_15_span_0_Template, 2, 1, "span", 30);
    } if (rf & 2) {
        var value_r21 = ctx.value;
        core.ɵɵproperty("ngForOf", value_r21);
    } }
    function UsersManagementComponent_ng_template_17_div_0_Template(rf, ctx) { if (rf & 1) {
        var _r31 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div");
        core.ɵɵelementStart(1, "a", 33);
        core.ɵɵlistener("click", function UsersManagementComponent_ng_template_17_div_0_Template_a_click_1_listener() { core.ɵɵrestoreView(_r31); var row_r25 = core.ɵɵnextContext().row; var ctx_r29 = core.ɵɵnextContext(); return ctx_r29.editUser(row_r25); });
        core.ɵɵelement(2, "i", 34);
        core.ɵɵtext(3);
        core.ɵɵpipe(4, "translate");
        core.ɵɵelementEnd();
        core.ɵɵtext(5, "| ");
        core.ɵɵelementStart(6, "a", 33);
        core.ɵɵlistener("click", function UsersManagementComponent_ng_template_17_div_0_Template_a_click_6_listener() { core.ɵɵrestoreView(_r31); var row_r25 = core.ɵɵnextContext().row; var ctx_r32 = core.ɵɵnextContext(); return ctx_r32.deleteUser(row_r25); });
        core.ɵɵelement(7, "i", 35);
        core.ɵɵtext(8);
        core.ɵɵpipe(9, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(3);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(4, 2, "users.management.Edit"), "");
        core.ɵɵadvance(5);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(9, 4, "users.management.Delete"), "");
    } }
    function UsersManagementComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, UsersManagementComponent_ng_template_17_div_0_Template, 10, 6, "div", 32);
    } if (rf & 2) {
        var ctx_r8 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", ctx_r8.canManageUsers);
    } }
    function UsersManagementComponent_h4_24_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "h4", 36);
        core.ɵɵelement(1, "i", 37);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(3, 1, "users.management.NewUser"), "");
    } }
    function UsersManagementComponent_h4_25_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "h4", 36);
        core.ɵɵelement(1, "i", 38);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r11 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind2(3, 1, "users.management.EditUser", ctx_r11.editingUserName), "");
    } }
    var _c6$1 = function () { return { backdrop: "static" }; };
    var UsersManagementComponent = /** @class */ (function () {
        function UsersManagementComponent(alertService, translationService, accountService) {
            this.alertService = alertService;
            this.translationService = translationService;
            this.accountService = accountService;
            this.columns = [];
            this.rows = [];
            this.rowsCache = [];
            this.allRoles = [];
        }
        UsersManagementComponent.prototype.ngOnInit = function () {
            var _this = this;
            var gT = function (key) { return _this.translationService.getTranslation(key); };
            this.columns = [
                { prop: 'index', name: '#', width: 40, cellTemplate: this.indexTemplate, canAutoResize: false },
                { prop: 'jobTitle', name: gT('users.management.Title'), width: 50 },
                { prop: 'userName', name: gT('users.management.UserName'), width: 90, cellTemplate: this.userNameTemplate },
                { prop: 'fullName', name: gT('users.management.FullName'), width: 120 },
                { prop: 'email', name: gT('users.management.Email'), width: 140 },
                { prop: 'roles', name: gT('users.management.Roles'), width: 120, cellTemplate: this.rolesTemplate },
                { prop: 'phoneNumber', name: gT('users.management.PhoneNumber'), width: 100 }
            ];
            if (this.canManageUsers) {
                this.columns.push({ name: '', width: 160, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false });
            }
            this.loadData();
        };
        UsersManagementComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.userEditor.changesSavedCallback = function () {
                _this.addNewUserToList();
                _this.editorModal.hide();
            };
            this.userEditor.changesCancelledCallback = function () {
                _this.editedUser = null;
                _this.sourceUser = null;
                _this.editorModal.hide();
            };
        };
        UsersManagementComponent.prototype.addNewUserToList = function () {
            var e_1, _a;
            if (this.sourceUser) {
                Object.assign(this.sourceUser, this.editedUser);
                var sourceIndex = this.rowsCache.indexOf(this.sourceUser, 0);
                if (sourceIndex > -1) {
                    ngxAppkitContractsAlpha.Utilities.moveArrayItem(this.rowsCache, sourceIndex, 0);
                }
                sourceIndex = this.rows.indexOf(this.sourceUser, 0);
                if (sourceIndex > -1) {
                    ngxAppkitContractsAlpha.Utilities.moveArrayItem(this.rows, sourceIndex, 0);
                }
                this.editedUser = null;
                this.sourceUser = null;
            }
            else {
                var user = new ngxOauth2.User();
                Object.assign(user, this.editedUser);
                this.editedUser = null;
                var maxIndex = 0;
                try {
                    for (var _b = __values(this.rowsCache), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var u = _c.value;
                        if (u.index > maxIndex) {
                            maxIndex = u.index;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                user.index = maxIndex + 1;
                this.rowsCache.splice(0, 0, user);
                this.rows.splice(0, 0, user);
                this.rows = __spread(this.rows);
            }
        };
        UsersManagementComponent.prototype.loadData = function () {
            var _this = this;
            this.alertService.startLoadingMessage();
            this.loadingIndicator = true;
            if (this.canViewRoles) {
                this.accountService.getUsersAndRoles().subscribe(function (results) { return _this.onDataLoadSuccessful(results[0], results[1]); }, function (error) { return _this.onDataLoadFailed(error); });
            }
            else {
                this.accountService.getUsers().subscribe(function (users) { return _this.onDataLoadSuccessful(users, _this.accountService.currentUser.roles.map(function (x) { return new Role(x); })); }, function (error) { return _this.onDataLoadFailed(error); });
            }
        };
        UsersManagementComponent.prototype.onDataLoadSuccessful = function (users, roles) {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            users.forEach(function (user, index, users) {
                user.index = index + 1;
            });
            this.rowsCache = __spread(users);
            this.rows = users;
            this.allRoles = roles;
        };
        UsersManagementComponent.prototype.onDataLoadFailed = function (error) {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage('Load Error', "Unable to retrieve users from the server.\r\nErrors: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
        };
        UsersManagementComponent.prototype.onSearchChanged = function (value) {
            this.rows = this.rowsCache.filter(function (r) { return ngxAppkitContractsAlpha.Utilities.searchArray(value, false, r.userName, r.fullName, r.email, r.phoneNumber, r.jobTitle, r.roles); });
        };
        UsersManagementComponent.prototype.onEditorModalHidden = function () {
            this.editingUserName = null;
            this.userEditor.resetForm(true);
        };
        UsersManagementComponent.prototype.newUser = function () {
            this.editingUserName = null;
            this.sourceUser = null;
            this.editedUser = this.userEditor.newUser(this.allRoles);
            this.editorModal.show();
        };
        UsersManagementComponent.prototype.editUser = function (row) {
            this.editingUserName = { name: row.userName };
            this.sourceUser = row;
            this.editedUser = this.userEditor.editUser(row, this.allRoles);
            this.editorModal.show();
        };
        UsersManagementComponent.prototype.deleteUser = function (row) {
            var _this = this;
            this.alertService.showDialog('Are you sure you want to delete \"' + row.userName + '\"?', ngxAppkitContractsAlpha.DialogType.confirm, function () { return _this.deleteUserHelper(row); });
        };
        UsersManagementComponent.prototype.deleteUserHelper = function (row) {
            var _this = this;
            this.alertService.startLoadingMessage('Deleting...');
            this.loadingIndicator = true;
            this.accountService.deleteUser(row)
                .subscribe(function (results) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.rowsCache = _this.rowsCache.filter(function (item) { return item !== row; });
                _this.rows = _this.rows.filter(function (item) { return item !== row; });
            }, function (error) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.alertService.showStickyMessage('Delete Error', "An error occured whilst deleting the user.\r\nError: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            });
        };
        Object.defineProperty(UsersManagementComponent.prototype, "canAssignRoles", {
            get: function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.assignRolesPermission);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UsersManagementComponent.prototype, "canViewRoles", {
            get: function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.viewRolesPermission);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UsersManagementComponent.prototype, "canManageUsers", {
            get: function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.manageUsersPermission);
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ UsersManagementComponent.ɵfac = function UsersManagementComponent_Factory(t) { return new (t || UsersManagementComponent)(core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.AlertService), core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.AppTranslationService), core.ɵɵdirectiveInject(AccountService)); };
        /** @nocollapse */ UsersManagementComponent.ɵcmp = core.ɵɵdefineComponent({ type: UsersManagementComponent, selectors: [["users-management"]], viewQuery: function UsersManagementComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0$3, true);
                core.ɵɵstaticViewQuery(_c1$2, true);
                core.ɵɵstaticViewQuery(_c2$2, true);
                core.ɵɵstaticViewQuery(_c3$2, true);
                core.ɵɵstaticViewQuery(_c4$2, true);
                core.ɵɵstaticViewQuery(_c5$2, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.indexTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.userNameTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.rolesTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.actionsTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.editorModal = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.userEditor = _t.first);
            } }, decls: 32, vars: 17, consts: [[1, "row", "control-box"], [1, "col-lg-8"], [1, "form-group", "search-box"], [3, "placeholder", "searchChange"], [1, "col-lg-4", "pr-lg-5"], [1, "nav", "flex-column", "flex-lg-row", "justify-content-end"], ["class", "nav-item toolbaritem", 4, "ngIf"], [1, "material", "colored-header", "sm", "table", "table-striped", "table-hover", 3, "loadingIndicator", "rows", "rowHeight", "headerHeight", "footerHeight", "columns", "scrollbarV", "columnMode"], ["indexTemplate", ""], ["userNameTemplate", ""], ["rolesTemplate", ""], ["actionsTemplate", ""], ["bsModal", "", "tabindex", "-1", 1, "modal", "fade", 3, "config", "onHidden"], ["editorModal", "bs-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["class", "modal-title float-left", 4, "ngIf"], ["type", "button", "title", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "isGeneralEditor"], ["userEditor", ""], [1, "nav-item", "toolbaritem"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fa", "fa-plus-circle"], ["class", "fa fa-exclamation-triangle", 4, "ngIf"], ["class", "fa fa-exclamation", 4, "ngIf"], [1, "fa", "fa-exclamation-triangle"], [1, "fa", "fa-exclamation"], ["class", "user-role badge badge-pill badge-secondary", 4, "ngFor", "ngForOf"], [1, "user-role", "badge", "badge-pill", "badge-secondary"], [4, "ngIf"], ["href", "javascript:;", 1, "btn", "btn-link", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], [1, "modal-title", "float-left"], [1, "fa", "fa-user-plus"], [1, "fa", "fa-user-circle-o"]], template: function UsersManagementComponent_Template(rf, ctx) { if (rf & 1) {
                var _r34 = core.ɵɵgetCurrentView();
                core.ɵɵelementStart(0, "div");
                core.ɵɵelementStart(1, "div", 0);
                core.ɵɵelementStart(2, "div", 1);
                core.ɵɵelementStart(3, "div", 2);
                core.ɵɵelementStart(4, "search-box", 3);
                core.ɵɵlistener("searchChange", function UsersManagementComponent_Template_search_box_searchChange_4_listener($event) { return ctx.onSearchChanged($event); });
                core.ɵɵpipe(5, "translate");
                core.ɵɵtext(6, ">");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(7, "div", 4);
                core.ɵɵelementStart(8, "ul", 5);
                core.ɵɵtemplate(9, UsersManagementComponent_li_9_Template, 5, 3, "li", 6);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelement(10, "ngx-datatable", 7);
                core.ɵɵtemplate(11, UsersManagementComponent_ng_template_11_Template, 2, 1, "ng-template", null, 8, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(13, UsersManagementComponent_ng_template_13_Template, 4, 7, "ng-template", null, 9, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(15, UsersManagementComponent_ng_template_15_Template, 1, 1, "ng-template", null, 10, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(17, UsersManagementComponent_ng_template_17_Template, 1, 1, "ng-template", null, 11, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementStart(19, "div", 12, 13);
                core.ɵɵlistener("onHidden", function UsersManagementComponent_Template_div_onHidden_19_listener() { return ctx.onEditorModalHidden(); });
                core.ɵɵelementStart(21, "div", 14);
                core.ɵɵelementStart(22, "div", 15);
                core.ɵɵelementStart(23, "div", 16);
                core.ɵɵtemplate(24, UsersManagementComponent_h4_24_Template, 4, 3, "h4", 17);
                core.ɵɵtemplate(25, UsersManagementComponent_h4_25_Template, 4, 4, "h4", 17);
                core.ɵɵelementStart(26, "button", 18);
                core.ɵɵlistener("click", function UsersManagementComponent_Template_button_click_26_listener() { core.ɵɵrestoreView(_r34); var _r9 = core.ɵɵreference(20); return _r9.hide(); });
                core.ɵɵelementStart(27, "span", 19);
                core.ɵɵtext(28, "\u00D7");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(29, "div", 20);
                core.ɵɵelement(30, "user-info", 21, 22);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(4);
                core.ɵɵpropertyInterpolate("placeholder", core.ɵɵpipeBind1(5, 14, "users.management.Search"));
                core.ɵɵadvance(5);
                core.ɵɵproperty("ngIf", ctx.canManageUsers && ctx.canAssignRoles);
                core.ɵɵadvance(1);
                core.ɵɵproperty("loadingIndicator", ctx.loadingIndicator)("rows", ctx.rows)("rowHeight", 35)("headerHeight", 35)("footerHeight", 35)("columns", ctx.columns)("scrollbarV", true)("columnMode", "force");
                core.ɵɵadvance(9);
                core.ɵɵproperty("config", core.ɵɵpureFunction0(16, _c6$1));
                core.ɵɵadvance(5);
                core.ɵɵproperty("ngIf", !ctx.editingUserName);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.editingUserName);
                core.ɵɵadvance(5);
                core.ɵɵproperty("isGeneralEditor", true);
            } }, directives: [SearchBoxComponent, common.NgIf, ngxDatatable.DatatableComponent, modal.ModalDirective, UserInfoComponent, common.NgForOf], pipes: [core$1.TranslatePipe], styles: [".user-role[_ngcontent-%COMP%]{font-size:.8em!important;margin-right:1px}.control-box[_ngcontent-%COMP%]{margin-bottom:5px}.search-box[_ngcontent-%COMP%]{margin:0}.nav-item.toolbaritem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;min-width:100px}.user-disabled[_ngcontent-%COMP%]{color:#777;font-style:italic}.locked-out[_ngcontent-%COMP%]{background-color:#ff4500;color:#f5f5f5;width:100%;display:inline-block;padding-left:5px}"] });
        return UsersManagementComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(UsersManagementComponent, [{
            type: core.Component,
            args: [{
                    selector: 'users-management',
                    templateUrl: './users-management.component.html',
                    styleUrls: ['./users-management.component.scss']
                }]
        }], function () { return [{ type: ngxAppkitServicesAlpha.AlertService }, { type: ngxAppkitServicesAlpha.AppTranslationService }, { type: AccountService }]; }, { indexTemplate: [{
                type: core.ViewChild,
                args: ['indexTemplate', { static: true }]
            }], userNameTemplate: [{
                type: core.ViewChild,
                args: ['userNameTemplate', { static: true }]
            }], rolesTemplate: [{
                type: core.ViewChild,
                args: ['rolesTemplate', { static: true }]
            }], actionsTemplate: [{
                type: core.ViewChild,
                args: ['actionsTemplate', { static: true }]
            }], editorModal: [{
                type: core.ViewChild,
                args: ['editorModal', { static: true }]
            }], userEditor: [{
                type: core.ViewChild,
                args: ['userEditor', { static: true }]
            }] }); })();

    // =============================
    var _c0$4 = ["languageSelector"];
    var _c1$3 = ["homePageSelector"];
    function UserPreferencesComponent_option_57_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option", 49);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(2, 1, "preferences.Customers"));
    } }
    function UserPreferencesComponent_option_58_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option", 50);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(2, 1, "preferences.Products"));
    } }
    function UserPreferencesComponent_option_59_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option", 51);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(2, 1, "preferences.Orders"));
    } }
    function UserPreferencesComponent_div_77_option_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "option");
        core.ɵɵpipe(1, "translate");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var theme_r7 = ctx.$implicit;
        core.ɵɵattributeInterpolate4("data-content", "<div class='theme-item' style='background-color: ", theme_r7.background, "; color: ", theme_r7.color, "'>", core.ɵɵpipeBind1(1, 5, "preferences." + theme_r7.name + "Theme"), "\n                <span class='small'>", theme_r7.isDark ? "(Dark)" : "", "</span></div>");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", theme_r7.id, " ");
    } }
    function UserPreferencesComponent_div_77_Template(rf, ctx) { if (rf & 1) {
        var _r9 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 2);
        core.ɵɵelementStart(1, "select", 52);
        core.ɵɵlistener("ngModelChange", function UserPreferencesComponent_div_77_Template_select_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r9); var ctx_r8 = core.ɵɵnextContext(); return ctx_r8.configurations.themeId = $event; });
        core.ɵɵtemplate(2, UserPreferencesComponent_div_77_option_2_Template, 3, 7, "option", 53);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r5 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r5.configurations.themeId);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r5.themeManager.themes);
    } }
    var UserPreferencesComponent = /** @class */ (function () {
        function UserPreferencesComponent(alertService, translationService, accountService, themeManager, configurations) {
            this.alertService = alertService;
            this.translationService = translationService;
            this.accountService = accountService;
            this.themeManager = themeManager;
            this.configurations = configurations;
            this.themeSelectorToggle = true;
        }
        UserPreferencesComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.languageChangedSubscription = this.translationService.languageChanged$.subscribe(function (data) {
                _this.themeSelectorToggle = false;
                setTimeout(function () {
                    _this.languageSelector.refresh();
                    _this.homePageSelector.refresh();
                    _this.themeSelectorToggle = true;
                });
            });
        };
        UserPreferencesComponent.prototype.ngOnDestroy = function () {
            this.languageChangedSubscription.unsubscribe();
        };
        UserPreferencesComponent.prototype.reloadFromServer = function () {
            var _this = this;
            this.alertService.startLoadingMessage();
            this.accountService.getUserPreferences()
                .subscribe(function (results) {
                _this.alertService.stopLoadingMessage();
                _this.configurations.import(results);
                _this.alertService.showMessage('Defaults loaded!', '', ngxAppkitContractsAlpha.MessageSeverity.info);
            }, function (error) {
                _this.alertService.stopLoadingMessage();
                _this.alertService.showStickyMessage('Load Error', "Unable to retrieve user preferences from the server.\r\nErrors: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            });
        };
        UserPreferencesComponent.prototype.setAsDefault = function () {
            var _this = this;
            this.alertService.showDialog('Are you sure you want to set the current configuration as your new defaults?', ngxAppkitContractsAlpha.DialogType.confirm, function () { return _this.setAsDefaultHelper(); }, function () { return _this.alertService.showMessage('Operation Cancelled!', '', ngxAppkitContractsAlpha.MessageSeverity.default); });
        };
        UserPreferencesComponent.prototype.setAsDefaultHelper = function () {
            var _this = this;
            this.alertService.startLoadingMessage('', 'Saving new defaults');
            this.accountService.updateUserPreferences(this.configurations.export())
                .subscribe(function (response) {
                _this.alertService.stopLoadingMessage();
                _this.alertService.showMessage('New Defaults', 'Account defaults updated successfully', ngxAppkitContractsAlpha.MessageSeverity.success);
            }, function (error) {
                _this.alertService.stopLoadingMessage();
                _this.alertService.showStickyMessage('Save Error', "An error occured whilst saving configuration defaults.\r\nErrors: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            });
        };
        UserPreferencesComponent.prototype.resetDefault = function () {
            var _this = this;
            this.alertService.showDialog('Are you sure you want to reset your defaults?', ngxAppkitContractsAlpha.DialogType.confirm, function () { return _this.resetDefaultHelper(); }, function () { return _this.alertService.showMessage('Operation Cancelled!', '', ngxAppkitContractsAlpha.MessageSeverity.default); });
        };
        UserPreferencesComponent.prototype.resetDefaultHelper = function () {
            var _this = this;
            this.alertService.startLoadingMessage('', 'Resetting defaults');
            this.accountService.updateUserPreferences(null)
                .subscribe(function (response) {
                _this.alertService.stopLoadingMessage();
                _this.configurations.import(null);
                _this.alertService.showMessage('Defaults Reset', 'Account defaults reset completed successfully', ngxAppkitContractsAlpha.MessageSeverity.success);
            }, function (error) {
                _this.alertService.stopLoadingMessage();
                _this.alertService.showStickyMessage('Save Error', "An error occured whilst resetting configuration defaults.\r\nErrors: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            });
        };
        Object.defineProperty(UserPreferencesComponent.prototype, "canViewCustomers", {
            get: function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.viewUsersPermission); // eg. viewCustomersPermission
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserPreferencesComponent.prototype, "canViewProducts", {
            get: function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.viewUsersPermission); // eg. viewProductsPermission
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserPreferencesComponent.prototype, "canViewOrders", {
            get: function () {
                return true; // eg. viewOrdersPermission
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ UserPreferencesComponent.ɵfac = function UserPreferencesComponent_Factory(t) { return new (t || UserPreferencesComponent)(core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.AlertService), core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.AppTranslationService), core.ɵɵdirectiveInject(AccountService), core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.ThemeManager), core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.ConfigurationService)); };
        /** @nocollapse */ UserPreferencesComponent.ɵcmp = core.ɵɵdefineComponent({ type: UserPreferencesComponent, selectors: [["user-preferences"]], viewQuery: function UserPreferencesComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0$4, true);
                core.ɵɵstaticViewQuery(_c1$3, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.languageSelector = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.homePageSelector = _t.first);
            } }, decls: 155, vars: 91, consts: [[1, "form-group", "row"], ["for", "refreshButton", 1, "col-sm-3", "col-form-label"], [1, "col-sm-4"], ["id", "refreshButton", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-refresh"], [1, "col-sm-5"], [1, "form-control-plaintext", "text-muted", "small"], [1, "row"], [1, "col-md-12"], [1, "separator-hr"], ["for", "language", 1, "col-sm-3", "col-form-label"], ["id", "language", "bootstrapSelect", "", 1, "selectpicker", "form-control", 3, "ngModel", "ngModelChange"], ["languageSelector", "bootstrap-select"], ["data-subtext", "(Default)", "value", "en"], ["value", "fr"], ["value", "de"], ["value", "pt"], ["value", "ar"], ["value", "ko"], ["for", "homePage", 1, "col-sm-3", "col-form-label"], ["id", "homePage", "bootstrapSelect", "", 1, "selectpicker", "form-control", 3, "ngModel", "ngModelChange"], ["homePageSelector", "bootstrap-select"], ["data-icon", "fa fa-tachometer", "data-subtext", "(Default)", "value", "/"], ["data-icon", "fa fa-handshake-o", "value", "/customers", 4, "ngIf"], ["data-icon", "fa fa-truck", "value", "/products", 4, "ngIf"], ["data-icon", "fa fa-shopping-cart", "value", "/orders", 4, "ngIf"], ["data-icon", "fa fa-info-circle", "value", "/about"], ["data-icon", "fa fa-cog", "value", "/settings"], ["for", "defaultTheme", 1, "col-sm-3", "col-form-label"], ["class", "col-sm-4", 4, "ngIf"], ["for", "dashboardStatistics", 1, "col-sm-3", "col-form-label"], [1, "checkbox"], ["name", "dashboardStatistics", "type", "checkbox", "bootstrapToggle", "", "data-size", "small", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "subseparator-hr"], ["for", "dashboardTodo", 1, "col-sm-3", "col-form-label"], ["name", "dashboardNotifications", "type", "checkbox", "bootstrapToggle", "", "data-size", "small", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "dashboardTodo", "type", "checkbox", "bootstrapToggle", "", "data-size", "small", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "dashboardBanner", 1, "col-sm-3", "col-form-label"], ["name", "dashboardBanner", "type", "checkbox", "bootstrapToggle", "", "data-size", "small", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "last-separator-hr"], [1, "col-sm-3"], [1, "col-sm-9"], [1, "row", "float-left"], [1, "col-sm-6", "col-reset-default"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-circle-o-notch"], [1, "col-sm-6", "col-set-default"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-hdd-o"], ["data-icon", "fa fa-handshake-o", "value", "/customers"], ["data-icon", "fa fa-truck", "value", "/products"], ["data-icon", "fa fa-shopping-cart", "value", "/orders"], ["id", "defaultTheme", "bootstrapSelect", "", 1, "selectpicker", "theme-picker", "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"]], template: function UserPreferencesComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div");
                core.ɵɵelementStart(1, "div", 0);
                core.ɵɵelementStart(2, "label", 1);
                core.ɵɵtext(3);
                core.ɵɵpipe(4, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(5, "div", 2);
                core.ɵɵelementStart(6, "button", 3);
                core.ɵɵlistener("click", function UserPreferencesComponent_Template_button_click_6_listener() { return ctx.reloadFromServer(); });
                core.ɵɵelement(7, "i", 4);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(8, "div", 5);
                core.ɵɵelementStart(9, "p", 6);
                core.ɵɵtext(10);
                core.ɵɵpipe(11, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(12, "div", 7);
                core.ɵɵelementStart(13, "div", 8);
                core.ɵɵelement(14, "hr", 9);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(15, "div", 0);
                core.ɵɵelementStart(16, "label", 10);
                core.ɵɵtext(17);
                core.ɵɵpipe(18, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(19, "div", 2);
                core.ɵɵelementStart(20, "select", 11, 12);
                core.ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_select_ngModelChange_20_listener($event) { return ctx.configurations.language = $event; });
                core.ɵɵelementStart(22, "option", 13);
                core.ɵɵtext(23);
                core.ɵɵpipe(24, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(25, "option", 14);
                core.ɵɵtext(26);
                core.ɵɵpipe(27, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(28, "option", 15);
                core.ɵɵtext(29);
                core.ɵɵpipe(30, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(31, "option", 16);
                core.ɵɵtext(32);
                core.ɵɵpipe(33, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(34, "option", 17);
                core.ɵɵtext(35);
                core.ɵɵpipe(36, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(37, "option", 18);
                core.ɵɵtext(38);
                core.ɵɵpipe(39, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(40, "div", 5);
                core.ɵɵelementStart(41, "p", 6);
                core.ɵɵtext(42);
                core.ɵɵpipe(43, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(44, "div", 7);
                core.ɵɵelementStart(45, "div", 8);
                core.ɵɵelement(46, "hr", 9);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(47, "div", 0);
                core.ɵɵelementStart(48, "label", 19);
                core.ɵɵtext(49);
                core.ɵɵpipe(50, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(51, "div", 2);
                core.ɵɵelementStart(52, "select", 20, 21);
                core.ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_select_ngModelChange_52_listener($event) { return ctx.configurations.homeUrl = $event; });
                core.ɵɵelementStart(54, "option", 22);
                core.ɵɵtext(55);
                core.ɵɵpipe(56, "translate");
                core.ɵɵelementEnd();
                core.ɵɵtemplate(57, UserPreferencesComponent_option_57_Template, 3, 3, "option", 23);
                core.ɵɵtemplate(58, UserPreferencesComponent_option_58_Template, 3, 3, "option", 24);
                core.ɵɵtemplate(59, UserPreferencesComponent_option_59_Template, 3, 3, "option", 25);
                core.ɵɵelementStart(60, "option", 26);
                core.ɵɵtext(61);
                core.ɵɵpipe(62, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(63, "option", 27);
                core.ɵɵtext(64);
                core.ɵɵpipe(65, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(66, "div", 5);
                core.ɵɵelementStart(67, "p", 6);
                core.ɵɵtext(68);
                core.ɵɵpipe(69, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(70, "div", 7);
                core.ɵɵelementStart(71, "div", 8);
                core.ɵɵelement(72, "hr", 9);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(73, "div", 0);
                core.ɵɵelementStart(74, "label", 28);
                core.ɵɵtext(75);
                core.ɵɵpipe(76, "translate");
                core.ɵɵelementEnd();
                core.ɵɵtemplate(77, UserPreferencesComponent_div_77_Template, 3, 2, "div", 29);
                core.ɵɵelementStart(78, "div", 5);
                core.ɵɵelementStart(79, "p", 6);
                core.ɵɵtext(80);
                core.ɵɵpipe(81, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(82, "div", 7);
                core.ɵɵelementStart(83, "div", 8);
                core.ɵɵelement(84, "hr", 9);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(85, "div", 0);
                core.ɵɵelementStart(86, "label", 30);
                core.ɵɵtext(87);
                core.ɵɵpipe(88, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(89, "div", 2);
                core.ɵɵelementStart(90, "div", 31);
                core.ɵɵelementStart(91, "input", 32);
                core.ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_input_ngModelChange_91_listener($event) { return ctx.configurations.showDashboardStatistics = $event; });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(92, "div", 5);
                core.ɵɵelementStart(93, "p", 6);
                core.ɵɵtext(94);
                core.ɵɵpipe(95, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(96, "div", 7);
                core.ɵɵelementStart(97, "div", 8);
                core.ɵɵelement(98, "hr", 33);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(99, "div", 0);
                core.ɵɵelementStart(100, "label", 34);
                core.ɵɵtext(101);
                core.ɵɵpipe(102, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(103, "div", 2);
                core.ɵɵelementStart(104, "div", 31);
                core.ɵɵelementStart(105, "input", 35);
                core.ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_input_ngModelChange_105_listener($event) { return ctx.configurations.showDashboardNotifications = $event; });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(106, "div", 5);
                core.ɵɵelementStart(107, "p", 6);
                core.ɵɵtext(108);
                core.ɵɵpipe(109, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(110, "div", 7);
                core.ɵɵelementStart(111, "div", 8);
                core.ɵɵelement(112, "hr", 33);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(113, "div", 0);
                core.ɵɵelementStart(114, "label", 34);
                core.ɵɵtext(115);
                core.ɵɵpipe(116, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(117, "div", 2);
                core.ɵɵelementStart(118, "div", 31);
                core.ɵɵelementStart(119, "input", 36);
                core.ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_input_ngModelChange_119_listener($event) { return ctx.configurations.showDashboardTodo = $event; });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(120, "div", 5);
                core.ɵɵelementStart(121, "p", 6);
                core.ɵɵtext(122);
                core.ɵɵpipe(123, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(124, "div", 7);
                core.ɵɵelementStart(125, "div", 8);
                core.ɵɵelement(126, "hr", 33);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(127, "div", 0);
                core.ɵɵelementStart(128, "label", 37);
                core.ɵɵtext(129);
                core.ɵɵpipe(130, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(131, "div", 2);
                core.ɵɵelementStart(132, "div", 31);
                core.ɵɵelementStart(133, "input", 38);
                core.ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_input_ngModelChange_133_listener($event) { return ctx.configurations.showDashboardBanner = $event; });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(134, "div", 5);
                core.ɵɵelementStart(135, "p", 6);
                core.ɵɵtext(136);
                core.ɵɵpipe(137, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(138, "div", 7);
                core.ɵɵelementStart(139, "div", 8);
                core.ɵɵelement(140, "hr", 39);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(141, "div", 0);
                core.ɵɵelement(142, "div", 40);
                core.ɵɵelementStart(143, "div", 41);
                core.ɵɵelementStart(144, "div", 42);
                core.ɵɵelementStart(145, "div", 43);
                core.ɵɵelementStart(146, "button", 44);
                core.ɵɵlistener("click", function UserPreferencesComponent_Template_button_click_146_listener() { return ctx.resetDefault(); });
                core.ɵɵelement(147, "i", 45);
                core.ɵɵtext(148);
                core.ɵɵpipe(149, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(150, "div", 46);
                core.ɵɵelementStart(151, "button", 47);
                core.ɵɵlistener("click", function UserPreferencesComponent_Template_button_click_151_listener() { return ctx.setAsDefault(); });
                core.ɵɵelement(152, "i", 48);
                core.ɵɵtext(153);
                core.ɵɵpipe(154, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate1("", core.ɵɵpipeBind1(4, 37, "preferences.ReloadPreferences"), " ");
                core.ɵɵadvance(7);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(11, 39, "preferences.ReloadPreferencesHint"));
                core.ɵɵadvance(7);
                core.ɵɵtextInterpolate1("", core.ɵɵpipeBind1(18, 41, "preferences.Language"), " ");
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngModel", ctx.configurations.language);
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(24, 43, "preferences.English"));
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(27, 45, "preferences.French"));
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(30, 47, "preferences.German"));
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(33, 49, "preferences.Portuguese"));
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(36, 51, "preferences.Arabic"));
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(39, 53, "preferences.Korean"));
                core.ɵɵadvance(4);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(43, 55, "preferences.LanguageHint"));
                core.ɵɵadvance(7);
                core.ɵɵtextInterpolate1("", core.ɵɵpipeBind1(50, 57, "preferences.HomePage"), " ");
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngModel", ctx.configurations.homeUrl);
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(56, 59, "preferences.Dashboard"));
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.canViewCustomers);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.canViewProducts);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.canViewOrders);
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(62, 61, "preferences.About"));
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(65, 63, "preferences.Settings"));
                core.ɵɵadvance(4);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(69, 65, "preferences.HomePageHint"));
                core.ɵɵadvance(7);
                core.ɵɵtextInterpolate1("", core.ɵɵpipeBind1(76, 67, "preferences.Theme"), " ");
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.themeSelectorToggle);
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(81, 69, "preferences.ThemeHint"));
                core.ɵɵadvance(7);
                core.ɵɵtextInterpolate1("", core.ɵɵpipeBind1(88, 71, "preferences.DashboardStatistics"), " ");
                core.ɵɵadvance(4);
                core.ɵɵproperty("ngModel", ctx.configurations.showDashboardStatistics);
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(95, 73, "preferences.DashboardStatisticsHint"));
                core.ɵɵadvance(7);
                core.ɵɵtextInterpolate1("", core.ɵɵpipeBind1(102, 75, "preferences.DashboardNotifications"), " ");
                core.ɵɵadvance(4);
                core.ɵɵproperty("ngModel", ctx.configurations.showDashboardNotifications);
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(109, 77, "preferences.DashboardNotificationsHint"));
                core.ɵɵadvance(7);
                core.ɵɵtextInterpolate1("", core.ɵɵpipeBind1(116, 79, "preferences.DashboardTodo"), " ");
                core.ɵɵadvance(4);
                core.ɵɵproperty("ngModel", ctx.configurations.showDashboardTodo);
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(123, 81, "preferences.DashboardTodoHint"));
                core.ɵɵadvance(7);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(130, 83, "preferences.DashboardBanner"));
                core.ɵɵadvance(4);
                core.ɵɵproperty("ngModel", ctx.configurations.showDashboardBanner);
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(137, 85, "preferences.DashboardBannerHint"));
                core.ɵɵadvance(12);
                core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(149, 87, "preferences.ResetDefault"), " ");
                core.ɵɵadvance(5);
                core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(154, 89, "preferences.SetDefault"), " ");
            } }, directives: [forms.SelectControlValueAccessor, BootstrapSelectDirective, forms.NgControlStatus, forms.NgModel, forms.NgSelectOption, forms.ɵangular_packages_forms_forms_x, common.NgIf, forms.CheckboxControlValueAccessor, BootstrapToggleDirective, common.NgForOf], pipes: [core$1.TranslatePipe], styles: [".separator-hr[_ngcontent-%COMP%]{margin:7px 5px;border-top-style:dashed}.subseparator-hr[_ngcontent-%COMP%]{margin:7px 5px;border-top-style:none}.last-separator-hr[_ngcontent-%COMP%]{margin-top:7px}.form-group[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.form-control-plaintext[_ngcontent-%COMP%]{min-height:0}.checkbox[_ngcontent-%COMP%]{padding-top:0}.col-reset-default[_ngcontent-%COMP%]{padding-right:0}.col-set-default[_ngcontent-%COMP%]{padding-left:5px}.col-reset-default[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .col-set-default[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:150px}@media (min-width:768px){.col-form-label[_ngcontent-%COMP%]{padding-top:5px}}"] });
        return UserPreferencesComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(UserPreferencesComponent, [{
            type: core.Component,
            args: [{
                    selector: 'user-preferences',
                    templateUrl: './user-preferences.component.html',
                    styleUrls: ['./user-preferences.component.scss']
                }]
        }], function () { return [{ type: ngxAppkitServicesAlpha.AlertService }, { type: ngxAppkitServicesAlpha.AppTranslationService }, { type: AccountService }, { type: ngxAppkitServicesAlpha.ThemeManager }, { type: ngxAppkitServicesAlpha.ConfigurationService }]; }, { languageSelector: [{
                type: core.ViewChild,
                args: ['languageSelector', { static: true }]
            }], homePageSelector: [{
                type: core.ViewChild,
                args: ['homePageSelector', { static: true }]
            }] }); })();

    // =============================
    var _c0$5 = ["f"];
    var _c1$4 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
    function RoleEditorComponent_form_1_i_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 27);
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r2 = core.ɵɵreference(10);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(1, _c1$4, _r2.valid, !_r2.valid));
    } }
    function RoleEditorComponent_form_1_span_21_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 28);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(2, 1, "roles.editor.RoleNameRequired"), " ");
    } }
    function RoleEditorComponent_form_1_ng_template_28_div_4_Template(rf, ctx) { if (rf & 1) {
        var _r16 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 34);
        core.ɵɵelementStart(1, "input", 35);
        core.ɵɵlistener("ngModelChange", function RoleEditorComponent_form_1_ng_template_28_div_4_Template_input_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r16); var permission_r14 = ctx.$implicit; var ctx_r15 = core.ɵɵnextContext(3); return (ctx_r15.selectedValues[permission_r14.value] = $event); });
        core.ɵɵelementEnd();
        core.ɵɵelementStart(2, "label", 36);
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var permission_r14 = ctx.$implicit;
        var ctx_r12 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate1("name", "checkboxes-", permission_r14.value, "");
        core.ɵɵpropertyInterpolate1("id", "checkboxes-", permission_r14.value, "");
        core.ɵɵproperty("disabled", !ctx_r12.canManageRoles)("ngModel", ctx_r12.selectedValues[permission_r14.value]);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("tooltip", permission_r14.description);
        core.ɵɵpropertyInterpolate1("for", "checkboxes-", permission_r14.value, "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(permission_r14.name);
    } }
    function RoleEditorComponent_form_1_ng_template_28_div_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 26);
    } }
    function RoleEditorComponent_form_1_ng_template_28_Template(rf, ctx) { if (rf & 1) {
        var _r18 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 29);
        core.ɵɵelementStart(1, "label", 30);
        core.ɵɵlistener("click", function RoleEditorComponent_form_1_ng_template_28_Template_label_click_1_listener() { core.ɵɵrestoreView(_r18); var permissionGroup_r10 = ctx.$implicit; var ctx_r17 = core.ɵɵnextContext(2); return ctx_r17.toggleGroup(permissionGroup_r10.key); });
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "div", 31);
        core.ɵɵtemplate(4, RoleEditorComponent_form_1_ng_template_28_div_4_Template, 4, 7, "div", 32);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵtemplate(5, RoleEditorComponent_form_1_ng_template_28_div_5_Template, 1, 0, "div", 33);
    } if (rf & 2) {
        var permissionGroup_r10 = ctx.$implicit;
        var i_r11 = ctx.index;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(permissionGroup_r10.key);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", permissionGroup_r10.value);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (i_r11 + 1) % 2 === 0);
    } }
    function RoleEditorComponent_form_1_div_35_Template(rf, ctx) { if (rf & 1) {
        var _r20 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 37);
        core.ɵɵelementStart(1, "a", 38);
        core.ɵɵlistener("click", function RoleEditorComponent_form_1_div_35_Template_a_click_1_listener() { core.ɵɵrestoreView(_r20); var ctx_r19 = core.ɵɵnextContext(2); return ctx_r19.selectAll(); });
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
        core.ɵɵtext(4, "|");
        core.ɵɵelementStart(5, "a", 38);
        core.ɵɵlistener("click", function RoleEditorComponent_form_1_div_35_Template_a_click_5_listener() { core.ɵɵrestoreView(_r20); var ctx_r21 = core.ɵɵnextContext(2); return ctx_r21.selectNone(); });
        core.ɵɵtext(6);
        core.ɵɵpipe(7, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(3, 2, "roles.editor.SelectAll"));
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(7, 4, "roles.editor.SelectNone"));
    } }
    function RoleEditorComponent_form_1_button_39_Template(rf, ctx) { if (rf & 1) {
        var _r23 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 39);
        core.ɵɵlistener("click", function RoleEditorComponent_form_1_button_39_Template_button_click_0_listener() { core.ɵɵrestoreView(_r23); var ctx_r22 = core.ɵɵnextContext(2); return ctx_r22.cancel(); });
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(2, 1, "roles.editor.Close"));
    } }
    function RoleEditorComponent_form_1_button_41_Template(rf, ctx) { if (rf & 1) {
        var _r25 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 40);
        core.ɵɵlistener("click", function RoleEditorComponent_form_1_button_41_Template_button_click_0_listener() { core.ɵɵrestoreView(_r25); var ctx_r24 = core.ɵɵnextContext(2); return ctx_r24.cancel(); });
        core.ɵɵelement(1, "i", 41);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r8 = core.ɵɵnextContext(2);
        core.ɵɵproperty("disabled", ctx_r8.isSaving);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(3, 2, "roles.editor.Cancel"), "");
    } }
    function RoleEditorComponent_form_1_button_43_i_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 45);
    } }
    function RoleEditorComponent_form_1_button_43_i_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 46);
    } }
    function RoleEditorComponent_form_1_button_43_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "button", 42);
        core.ɵɵtext(1, "\n            ");
        core.ɵɵtemplate(2, RoleEditorComponent_form_1_button_43_i_2_Template, 1, 0, "i", 43);
        core.ɵɵtemplate(3, RoleEditorComponent_form_1_button_43_i_3_Template, 1, 0, "i", 44);
        core.ɵɵtext(4);
        core.ɵɵpipe(5, "translate");
        core.ɵɵpipe(6, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r9 = core.ɵɵnextContext(2);
        core.ɵɵproperty("disabled", ctx_r9.isSaving);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r9.isSaving);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r9.isSaving);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r9.isSaving ? core.ɵɵpipeBind1(5, 4, "roles.editor.Saving") : core.ɵɵpipeBind1(6, 6, "roles.editor.Save"), "\n          ");
    } }
    var _c2$3 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
    function RoleEditorComponent_form_1_Template(rf, ctx) { if (rf & 1) {
        var _r29 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "form", 1, 2);
        core.ɵɵlistener("ngSubmit", function RoleEditorComponent_form_1_Template_form_ngSubmit_0_listener() { core.ɵɵrestoreView(_r29); var _r1 = core.ɵɵreference(1); var _r2 = core.ɵɵreference(10); var ctx_r28 = core.ɵɵnextContext(); return _r1.form.valid ? ctx_r28.save() : !_r2.valid && ctx_r28.showErrorAlert("Role name is required", "Please enter a role name (minimum of 2 and maximum of 200 characters)"); });
        core.ɵɵelementStart(2, "div", 3);
        core.ɵɵelementStart(3, "div", 4);
        core.ɵɵelementStart(4, "div", 5);
        core.ɵɵelementStart(5, "label", 6);
        core.ɵɵtext(6);
        core.ɵɵpipe(7, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "div", 7);
        core.ɵɵelementStart(9, "input", 8, 9);
        core.ɵɵlistener("ngModelChange", function RoleEditorComponent_form_1_Template_input_ngModelChange_9_listener($event) { core.ɵɵrestoreView(_r29); var ctx_r30 = core.ɵɵnextContext(); return ctx_r30.roleEdit.name = $event; });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(11, RoleEditorComponent_form_1_i_11_Template, 1, 4, "i", 10);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(12, "div", 11);
        core.ɵɵelementStart(13, "div", 12);
        core.ɵɵelementStart(14, "label", 13);
        core.ɵɵtext(15);
        core.ɵɵpipe(16, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(17, "div", 7);
        core.ɵɵelementStart(18, "input", 14);
        core.ɵɵlistener("ngModelChange", function RoleEditorComponent_form_1_Template_input_ngModelChange_18_listener($event) { core.ɵɵrestoreView(_r29); var ctx_r31 = core.ɵɵnextContext(); return ctx_r31.roleEdit.description = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(19, "div", 3);
        core.ɵɵelementStart(20, "div", 15);
        core.ɵɵtemplate(21, RoleEditorComponent_form_1_span_21_Template, 3, 3, "span", 16);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(22, "div", 3);
        core.ɵɵelementStart(23, "div", 15);
        core.ɵɵelement(24, "hr", 17);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(25, "div", 3);
        core.ɵɵelementStart(26, "div", 18);
        core.ɵɵelementStart(27, "div", 3);
        core.ɵɵtemplate(28, RoleEditorComponent_form_1_ng_template_28_Template, 6, 3, "ng-template", 19);
        core.ɵɵpipe(29, "groupBy");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(30, "div", 3);
        core.ɵɵelementStart(31, "div", 15);
        core.ɵɵelement(32, "hr", 20);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(33, "div", 12);
        core.ɵɵelementStart(34, "div", 4);
        core.ɵɵtemplate(35, RoleEditorComponent_form_1_div_35_Template, 8, 6, "div", 21);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(36, "div", 11);
        core.ɵɵelementStart(37, "div", 22);
        core.ɵɵtext(38, "\n          ");
        core.ɵɵtemplate(39, RoleEditorComponent_form_1_button_39_Template, 3, 3, "button", 23);
        core.ɵɵtext(40, "\n          ");
        core.ɵɵtemplate(41, RoleEditorComponent_form_1_button_41_Template, 4, 4, "button", 24);
        core.ɵɵtext(42, "\n          ");
        core.ɵɵtemplate(43, RoleEditorComponent_form_1_button_43_Template, 7, 8, "button", 25);
        core.ɵɵtext(44, "\n        ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelement(45, "div", 26);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r1 = core.ɵɵreference(1);
        var _r2 = core.ɵɵreference(10);
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵadvance(6);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(7, 14, "roles.editor.Name"));
        core.ɵɵadvance(3);
        core.ɵɵproperty("disabled", !ctx_r0.canManageRoles)("ngClass", core.ɵɵpureFunction2(21, _c2$3, _r1.submitted && _r2.valid, _r1.submitted && !_r2.valid))("ngModel", ctx_r0.roleEdit.name);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r0.showValidationErrors && _r1.submitted);
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(16, 16, "roles.editor.Description"));
        core.ɵɵadvance(3);
        core.ɵɵproperty("disabled", !ctx_r0.canManageRoles)("ngModel", ctx_r0.roleEdit.description);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", ctx_r0.showValidationErrors && _r1.submitted && !_r2.valid);
        core.ɵɵadvance(7);
        core.ɵɵproperty("ngForOf", core.ɵɵpipeBind2(29, 18, ctx_r0.allPermissions, "groupName"));
        core.ɵɵadvance(7);
        core.ɵɵproperty("ngIf", ctx_r0.canManageRoles);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngIf", !ctx_r0.canManageRoles);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r0.canManageRoles);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r0.canManageRoles);
    } }
    var RoleEditorComponent = /** @class */ (function () {
        function RoleEditorComponent(alertService, accountService) {
            this.alertService = alertService;
            this.accountService = accountService;
            this.isNewRole = false;
            this.showValidationErrors = true;
            this.roleEdit = new Role();
            this.allPermissions = [];
            this.selectedValues = {};
            this.formResetToggle = true;
        }
        RoleEditorComponent.prototype.showErrorAlert = function (caption, message) {
            this.alertService.showMessage(caption, message, ngxAppkitContractsAlpha.MessageSeverity.error);
        };
        RoleEditorComponent.prototype.save = function () {
            var _this = this;
            this.isSaving = true;
            this.alertService.startLoadingMessage('Saving changes...');
            this.roleEdit.permissions = this.getSelectedPermissions();
            if (this.isNewRole) {
                this.accountService.newRole(this.roleEdit).subscribe(function (role) { return _this.saveSuccessHelper(role); }, function (error) { return _this.saveFailedHelper(error); });
            }
            else {
                this.accountService.updateRole(this.roleEdit).subscribe(function (response) { return _this.saveSuccessHelper(); }, function (error) { return _this.saveFailedHelper(error); });
            }
        };
        RoleEditorComponent.prototype.saveSuccessHelper = function (role) {
            var _this = this;
            if (role) {
                Object.assign(this.roleEdit, role);
            }
            this.isSaving = false;
            this.alertService.stopLoadingMessage();
            this.showValidationErrors = false;
            if (this.isNewRole) {
                this.alertService.showMessage('Success', "Role \"" + this.roleEdit.name + "\" was created successfully", ngxAppkitContractsAlpha.MessageSeverity.success);
            }
            else {
                this.alertService.showMessage('Success', "Changes to role \"" + this.roleEdit.name + "\" was saved successfully", ngxAppkitContractsAlpha.MessageSeverity.success);
            }
            this.roleEdit = new Role();
            this.resetForm();
            if (!this.isNewRole && this.accountService.currentUser.roles.some(function (r) { return r == _this.editingRoleName; })) {
                this.refreshLoggedInUser();
            }
            if (this.changesSavedCallback) {
                this.changesSavedCallback();
            }
        };
        RoleEditorComponent.prototype.refreshLoggedInUser = function () {
            var _this = this;
            this.accountService.refreshLoggedInUser()
                .subscribe(function (user) { }, function (error) {
                _this.alertService.resetStickyMessage();
                _this.alertService.showStickyMessage('Refresh failed', 'An error occured whilst refreshing logged in user information from the server', ngxAppkitContractsAlpha.MessageSeverity.error, error);
            });
        };
        RoleEditorComponent.prototype.saveFailedHelper = function (error) {
            this.isSaving = false;
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Save Error', 'The below errors occured whilst saving your changes:', ngxAppkitContractsAlpha.MessageSeverity.error, error);
            this.alertService.showStickyMessage(error, null, ngxAppkitContractsAlpha.MessageSeverity.error);
            if (this.changesFailedCallback) {
                this.changesFailedCallback();
            }
        };
        RoleEditorComponent.prototype.cancel = function () {
            this.roleEdit = new Role();
            this.showValidationErrors = false;
            this.resetForm();
            this.alertService.showMessage('Cancelled', 'Operation cancelled by user', ngxAppkitContractsAlpha.MessageSeverity.default);
            this.alertService.resetStickyMessage();
            if (this.changesCancelledCallback) {
                this.changesCancelledCallback();
            }
        };
        RoleEditorComponent.prototype.selectAll = function () {
            var _this = this;
            this.allPermissions.forEach(function (p) { return _this.selectedValues[p.value] = true; });
        };
        RoleEditorComponent.prototype.selectNone = function () {
            var _this = this;
            this.allPermissions.forEach(function (p) { return _this.selectedValues[p.value] = false; });
        };
        RoleEditorComponent.prototype.toggleGroup = function (groupName) {
            var _this = this;
            var firstMemberValue;
            this.allPermissions.forEach(function (p) {
                if (p.groupName != groupName) {
                    return;
                }
                if (firstMemberValue == null) {
                    firstMemberValue = _this.selectedValues[p.value] == true;
                }
                _this.selectedValues[p.value] = !firstMemberValue;
            });
        };
        RoleEditorComponent.prototype.getSelectedPermissions = function () {
            var _this = this;
            return this.allPermissions.filter(function (p) { return _this.selectedValues[p.value] == true; });
        };
        RoleEditorComponent.prototype.resetForm = function (replace) {
            var _this = this;
            if (replace === void 0) { replace = false; }
            if (!replace) {
                this.form.reset();
            }
            else {
                this.formResetToggle = false;
                setTimeout(function () {
                    _this.formResetToggle = true;
                });
            }
        };
        RoleEditorComponent.prototype.newRole = function (allPermissions) {
            this.isNewRole = true;
            this.showValidationErrors = true;
            this.editingRoleName = null;
            this.allPermissions = allPermissions;
            this.selectedValues = {};
            this.roleEdit = new Role();
            return this.roleEdit;
        };
        RoleEditorComponent.prototype.editRole = function (role, allPermissions) {
            var _this = this;
            if (role) {
                this.isNewRole = false;
                this.showValidationErrors = true;
                this.editingRoleName = role.name;
                this.allPermissions = allPermissions;
                this.selectedValues = {};
                role.permissions.forEach(function (p) { return _this.selectedValues[p.value] = true; });
                this.roleEdit = new Role();
                Object.assign(this.roleEdit, role);
                return this.roleEdit;
            }
            else {
                return this.newRole(allPermissions);
            }
        };
        Object.defineProperty(RoleEditorComponent.prototype, "canManageRoles", {
            get: function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.manageRolesPermission);
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ RoleEditorComponent.ɵfac = function RoleEditorComponent_Factory(t) { return new (t || RoleEditorComponent)(core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.AlertService), core.ɵɵdirectiveInject(AccountService)); };
        /** @nocollapse */ RoleEditorComponent.ɵcmp = core.ɵɵdefineComponent({ type: RoleEditorComponent, selectors: [["role-editor"]], viewQuery: function RoleEditorComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵviewQuery(_c0$5, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.form = _t.first);
            } }, decls: 2, vars: 1, consts: [["name", "roleEditorForm", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["name", "roleEditorForm", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "row"], [1, "col-sm-5"], [1, "form-group", "row", "has-feedback-icon"], ["for", "roleName", 1, "col-form-label", "col-md-3"], [1, "col-md-9"], ["type", "text", "id", "roleName", "name", "roleName", "placeholder", "Enter role name", "required", "", "minlength", "2", "maxlength", "200", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["roleName", "ngModel"], ["class", "fa form-control-feedback", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], [1, "col-sm-7"], [1, "form-group", "row"], ["for", "roleDescription", 1, "col-form-label", "col-md-3"], ["type", "text", "id", "roleDescription", "name", "roleDescription", "placeholder", "Enter role description", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], [1, "col-md-12"], ["class", "invalid-feedback", 4, "ngIf"], [1, "edit-separator-hr"], [1, "col-sm-12", "card", "card-body", "bg-light", "well-sm", "permissionsRow"], ["ngFor", "", 3, "ngForOf"], [1, "edit-last-separator-hr"], ["class", "float-left", 4, "ngIf"], [1, "float-right"], ["type", "button", "class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", 4, "ngIf"], [1, "clearfix"], ["aria-hidden", "true", 1, "fa", "form-control-feedback", 3, "ngClass"], [1, "invalid-feedback"], [1, "form-group", "row", "col-sm-6", "permissionsColumn"], ["for", "checkboxes", 1, "col-md-5", "col-form-label", "group-name", 3, "click"], [1, "col-md-7"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["class", "clearfix", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "disabled", "name", "id", "ngModel", "ngModelChange"], [1, "form-check-label", 3, "tooltip", "for"], [1, "float-left"], ["href", "javascript:;", 1, "btn", "btn-link", 3, "click"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-times"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fa fa-save", 4, "ngIf"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "fa", "fa-save"], [1, "fa", "fa-circle-o-notch", "fa-spin"]], template: function RoleEditorComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div");
                core.ɵɵtemplate(1, RoleEditorComponent_form_1_Template, 46, 24, "form", 0);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.formResetToggle);
            } }, directives: [common.NgIf, forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.NgForm, forms.DefaultValueAccessor, forms.RequiredValidator, forms.MinLengthValidator, forms.MaxLengthValidator, common.NgClass, forms.NgControlStatus, forms.NgModel, common.NgForOf, forms.CheckboxControlValueAccessor, tooltip.TooltipDirective], pipes: [core$1.TranslatePipe, GroupByPipe], styles: [".separator-hr[_ngcontent-%COMP%]{margin:0 5px;border-top-style:dashed}.edit-separator-hr[_ngcontent-%COMP%]{margin:10px 5px;border-top-style:dashed}.last-separator-hr[_ngcontent-%COMP%]{margin-top:5px}.edit-last-separator-hr[_ngcontent-%COMP%]{margin-top:15px}.form-group[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}input.form-control[_ngcontent-%COMP%]{border-left-width:5px}.invalid-feedback[_ngcontent-%COMP%]{display:block}.group-name[_ngcontent-%COMP%]{padding-top:0;font-weight:500;padding-right:0}.permissionsColumn[_ngcontent-%COMP%]{margin-bottom:20px}.permissionsRow[_ngcontent-%COMP%]{margin:0 15px}.well-sm[_ngcontent-%COMP%]{padding:.5rem}@media (min-width:992px){.user-enabled[_ngcontent-%COMP%]{margin-left:40px}}"] });
        return RoleEditorComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(RoleEditorComponent, [{
            type: core.Component,
            args: [{
                    selector: 'role-editor',
                    templateUrl: './role-editor.component.html',
                    styleUrls: ['./role-editor.component.scss']
                }]
        }], function () { return [{ type: ngxAppkitServicesAlpha.AlertService }, { type: AccountService }]; }, { form: [{
                type: core.ViewChild,
                args: ['f', { static: false }]
            }] }); })();

    var _c0$6 = ["indexTemplate"];
    var _c1$5 = ["actionsTemplate"];
    var _c2$4 = ["editorModal"];
    var _c3$3 = ["roleEditor"];
    function RolesManagementComponent_li_9_Template(rf, ctx) { if (rf & 1) {
        var _r10 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 20);
        core.ɵɵelementStart(1, "a", 21);
        core.ɵɵlistener("click", function RolesManagementComponent_li_9_Template_a_click_1_listener() { core.ɵɵrestoreView(_r10); var ctx_r9 = core.ɵɵnextContext(); return ctx_r9.newRole(); });
        core.ɵɵelement(2, "i", 22);
        core.ɵɵtext(3);
        core.ɵɵpipe(4, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(3);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(4, 1, "roles.management.NewRole"), " ");
    } }
    function RolesManagementComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "strong");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var value_r11 = ctx.value;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(value_r11);
    } }
    function RolesManagementComponent_ng_template_13_a_0_Template(rf, ctx) { if (rf & 1) {
        var _r20 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 24);
        core.ɵɵlistener("click", function RolesManagementComponent_ng_template_13_a_0_Template_a_click_0_listener() { core.ɵɵrestoreView(_r20); var row_r12 = core.ɵɵnextContext().row; var ctx_r18 = core.ɵɵnextContext(); return ctx_r18.editRole(row_r12); });
        core.ɵɵelement(1, "i", 25);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(3, 1, "roles.management.Edit"), "");
    } }
    function RolesManagementComponent_ng_template_13_a_1_Template(rf, ctx) { if (rf & 1) {
        var _r23 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 24);
        core.ɵɵlistener("click", function RolesManagementComponent_ng_template_13_a_1_Template_a_click_0_listener() { core.ɵɵrestoreView(_r23); var row_r12 = core.ɵɵnextContext().row; var ctx_r21 = core.ɵɵnextContext(); return ctx_r21.editRole(row_r12); });
        core.ɵɵelement(1, "i", 26);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(3, 1, "roles.management.Details"), "");
    } }
    function RolesManagementComponent_ng_template_13_a_3_Template(rf, ctx) { if (rf & 1) {
        var _r26 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 24);
        core.ɵɵlistener("click", function RolesManagementComponent_ng_template_13_a_3_Template_a_click_0_listener() { core.ɵɵrestoreView(_r26); var row_r12 = core.ɵɵnextContext().row; var ctx_r24 = core.ɵɵnextContext(); return ctx_r24.deleteRole(row_r12); });
        core.ɵɵelement(1, "i", 27);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(3, 1, "roles.management.Delete"), "");
    } }
    function RolesManagementComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, RolesManagementComponent_ng_template_13_a_0_Template, 4, 3, "a", 23);
        core.ɵɵtemplate(1, RolesManagementComponent_ng_template_13_a_1_Template, 4, 3, "a", 23);
        core.ɵɵtext(2);
        core.ɵɵtemplate(3, RolesManagementComponent_ng_template_13_a_3_Template, 4, 3, "a", 23);
    } if (rf & 2) {
        var ctx_r4 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", ctx_r4.canManageRoles);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r4.canManageRoles);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r4.canManageRoles ? "|" : "", " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r4.canManageRoles);
    } }
    function RolesManagementComponent_h4_20_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "h4", 28);
        core.ɵɵelement(1, "i", 29);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r6 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind2(3, 1, "roles.management.RoleDetails", ctx_r6.editingRoleName), "");
    } }
    function RolesManagementComponent_h4_21_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "h4", 28);
        core.ɵɵelement(1, "i", 29);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "translate");
        core.ɵɵpipe(4, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r7 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", ctx_r7.editingRoleName ? core.ɵɵpipeBind2(3, 1, "roles.management.EditRole", ctx_r7.editingRoleName) : core.ɵɵpipeBind1(4, 4, "roles.management.NewRole"), "");
    } }
    var _c4$3 = function () { return { backdrop: "static" }; };
    var RolesManagementComponent = /** @class */ (function () {
        function RolesManagementComponent(alertService, translationService, accountService) {
            this.alertService = alertService;
            this.translationService = translationService;
            this.accountService = accountService;
            this.columns = [];
            this.rows = [];
            this.rowsCache = [];
            this.allPermissions = [];
        }
        RolesManagementComponent.prototype.ngOnInit = function () {
            var _this = this;
            var gT = function (key) { return _this.translationService.getTranslation(key); };
            this.columns = [
                { prop: 'index', name: '#', width: 50, cellTemplate: this.indexTemplate, canAutoResize: false },
                { prop: 'name', name: gT('roles.management.Name'), width: 180 },
                { prop: 'description', name: gT('roles.management.Description'), width: 320 },
                { prop: 'usersCount', name: gT('roles.management.Users'), width: 50 },
                { name: '', width: 160, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
            ];
            this.loadData();
        };
        RolesManagementComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.roleEditor.changesSavedCallback = function () {
                _this.addNewRoleToList();
                _this.editorModal.hide();
            };
            this.roleEditor.changesCancelledCallback = function () {
                _this.editedRole = null;
                _this.sourceRole = null;
                _this.editorModal.hide();
            };
        };
        RolesManagementComponent.prototype.addNewRoleToList = function () {
            var e_1, _a;
            if (this.sourceRole) {
                Object.assign(this.sourceRole, this.editedRole);
                var sourceIndex = this.rowsCache.indexOf(this.sourceRole, 0);
                if (sourceIndex > -1) {
                    ngxAppkitContractsAlpha.Utilities.moveArrayItem(this.rowsCache, sourceIndex, 0);
                }
                sourceIndex = this.rows.indexOf(this.sourceRole, 0);
                if (sourceIndex > -1) {
                    ngxAppkitContractsAlpha.Utilities.moveArrayItem(this.rows, sourceIndex, 0);
                }
                this.editedRole = null;
                this.sourceRole = null;
            }
            else {
                var role = new Role();
                Object.assign(role, this.editedRole);
                this.editedRole = null;
                var maxIndex = 0;
                try {
                    for (var _b = __values(this.rowsCache), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var r = _c.value;
                        if (r.index > maxIndex) {
                            maxIndex = r.index;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                role.index = maxIndex + 1;
                this.rowsCache.splice(0, 0, role);
                this.rows.splice(0, 0, role);
                this.rows = __spread(this.rows);
            }
        };
        RolesManagementComponent.prototype.loadData = function () {
            var _this = this;
            this.alertService.startLoadingMessage();
            this.loadingIndicator = true;
            this.accountService.getRolesAndPermissions()
                .subscribe(function (results) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                var roles = results[0];
                var permissions = results[1];
                roles.forEach(function (role, index, roles) {
                    role.index = index + 1;
                });
                _this.rowsCache = __spread(roles);
                _this.rows = roles;
                _this.allPermissions = permissions;
            }, function (error) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.alertService.showStickyMessage('Load Error', "Unable to retrieve roles from the server.\r\nErrors: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            });
        };
        RolesManagementComponent.prototype.onSearchChanged = function (value) {
            this.rows = this.rowsCache.filter(function (r) { return ngxAppkitContractsAlpha.Utilities.searchArray(value, false, r.name, r.description); });
        };
        RolesManagementComponent.prototype.onEditorModalHidden = function () {
            this.editingRoleName = null;
            this.roleEditor.resetForm(true);
        };
        RolesManagementComponent.prototype.newRole = function () {
            this.editingRoleName = null;
            this.sourceRole = null;
            this.editedRole = this.roleEditor.newRole(this.allPermissions);
            this.editorModal.show();
        };
        RolesManagementComponent.prototype.editRole = function (row) {
            this.editingRoleName = { name: row.name };
            this.sourceRole = row;
            this.editedRole = this.roleEditor.editRole(row, this.allPermissions);
            this.editorModal.show();
        };
        RolesManagementComponent.prototype.deleteRole = function (row) {
            var _this = this;
            this.alertService.showDialog('Are you sure you want to delete the \"' + row.name + '\" role?', ngxAppkitContractsAlpha.DialogType.confirm, function () { return _this.deleteRoleHelper(row); });
        };
        RolesManagementComponent.prototype.deleteRoleHelper = function (row) {
            var _this = this;
            this.alertService.startLoadingMessage('Deleting...');
            this.loadingIndicator = true;
            this.accountService.deleteRole(row)
                .subscribe(function (results) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.rowsCache = _this.rowsCache.filter(function (item) { return item !== row; });
                _this.rows = _this.rows.filter(function (item) { return item !== row; });
            }, function (error) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.alertService.showStickyMessage('Delete Error', "An error occured whilst deleting the role.\r\nError: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            });
        };
        Object.defineProperty(RolesManagementComponent.prototype, "canManageRoles", {
            get: function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.manageRolesPermission);
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ RolesManagementComponent.ɵfac = function RolesManagementComponent_Factory(t) { return new (t || RolesManagementComponent)(core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.AlertService), core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.AppTranslationService), core.ɵɵdirectiveInject(AccountService)); };
        /** @nocollapse */ RolesManagementComponent.ɵcmp = core.ɵɵdefineComponent({ type: RolesManagementComponent, selectors: [["roles-management"]], viewQuery: function RolesManagementComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0$6, true);
                core.ɵɵstaticViewQuery(_c1$5, true);
                core.ɵɵstaticViewQuery(_c2$4, true);
                core.ɵɵstaticViewQuery(_c3$3, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.indexTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.actionsTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.editorModal = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.roleEditor = _t.first);
            } }, decls: 28, vars: 16, consts: [[1, "row", "control-box"], [1, "col-lg-8"], [1, "form-group", "search-box"], [3, "placeholder", "searchChange"], [1, "col-lg-4", "pr-lg-5"], [1, "nav", "flex-column", "flex-lg-row", "justify-content-end"], ["class", "nav-item toolbaritem", 4, "ngIf"], [1, "material", "colored-header", "sm", "table", "table-striped", "table-hover", 3, "loadingIndicator", "rows", "rowHeight", "headerHeight", "footerHeight", "columns", "scrollbarV", "columnMode"], ["indexTemplate", ""], ["actionsTemplate", ""], ["bsModal", "", "tabindex", "-1", 1, "modal", "fade", 3, "config", "onHidden"], ["editorModal", "bs-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["class", "modal-title float-left", 4, "ngIf"], ["type", "button", "title", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["roleEditor", ""], [1, "nav-item", "toolbaritem"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fa", "fa-plus-circle"], ["class", "btn btn-link btn-sm", "href", "javascript:;", 3, "click", 4, "ngIf"], ["href", "javascript:;", 1, "btn", "btn-link", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], [1, "modal-title", "float-left"], [1, "fa", "fa-shield"]], template: function RolesManagementComponent_Template(rf, ctx) { if (rf & 1) {
                var _r27 = core.ɵɵgetCurrentView();
                core.ɵɵelementStart(0, "div");
                core.ɵɵelementStart(1, "div", 0);
                core.ɵɵelementStart(2, "div", 1);
                core.ɵɵelementStart(3, "div", 2);
                core.ɵɵelementStart(4, "search-box", 3);
                core.ɵɵlistener("searchChange", function RolesManagementComponent_Template_search_box_searchChange_4_listener($event) { return ctx.onSearchChanged($event); });
                core.ɵɵpipe(5, "translate");
                core.ɵɵtext(6, ">");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(7, "div", 4);
                core.ɵɵelementStart(8, "ul", 5);
                core.ɵɵtemplate(9, RolesManagementComponent_li_9_Template, 5, 3, "li", 6);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelement(10, "ngx-datatable", 7);
                core.ɵɵtemplate(11, RolesManagementComponent_ng_template_11_Template, 2, 1, "ng-template", null, 8, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(13, RolesManagementComponent_ng_template_13_Template, 4, 4, "ng-template", null, 9, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementStart(15, "div", 10, 11);
                core.ɵɵlistener("onHidden", function RolesManagementComponent_Template_div_onHidden_15_listener() { return ctx.onEditorModalHidden(); });
                core.ɵɵelementStart(17, "div", 12);
                core.ɵɵelementStart(18, "div", 13);
                core.ɵɵelementStart(19, "div", 14);
                core.ɵɵtemplate(20, RolesManagementComponent_h4_20_Template, 4, 4, "h4", 15);
                core.ɵɵtemplate(21, RolesManagementComponent_h4_21_Template, 5, 6, "h4", 15);
                core.ɵɵelementStart(22, "button", 16);
                core.ɵɵlistener("click", function RolesManagementComponent_Template_button_click_22_listener() { core.ɵɵrestoreView(_r27); var _r5 = core.ɵɵreference(16); return _r5.hide(); });
                core.ɵɵelementStart(23, "span", 17);
                core.ɵɵtext(24, "\u00D7");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(25, "div", 18);
                core.ɵɵelement(26, "role-editor", null, 19);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(4);
                core.ɵɵpropertyInterpolate("placeholder", core.ɵɵpipeBind1(5, 13, "roles.management.Search"));
                core.ɵɵadvance(5);
                core.ɵɵproperty("ngIf", ctx.canManageRoles);
                core.ɵɵadvance(1);
                core.ɵɵproperty("loadingIndicator", ctx.loadingIndicator)("rows", ctx.rows)("rowHeight", 35)("headerHeight", 35)("footerHeight", 35)("columns", ctx.columns)("scrollbarV", true)("columnMode", "force");
                core.ɵɵadvance(5);
                core.ɵɵproperty("config", core.ɵɵpureFunction0(15, _c4$3));
                core.ɵɵadvance(5);
                core.ɵɵproperty("ngIf", !ctx.canManageRoles);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.canManageRoles);
            } }, directives: [SearchBoxComponent, common.NgIf, ngxDatatable.DatatableComponent, modal.ModalDirective, RoleEditorComponent], pipes: [core$1.TranslatePipe], styles: [".control-box[_ngcontent-%COMP%]{margin-bottom:5px}.search-box[_ngcontent-%COMP%]{margin:0}.nav-item.toolbaritem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;min-width:100px}"] });
        return RolesManagementComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(RolesManagementComponent, [{
            type: core.Component,
            args: [{
                    selector: 'roles-management',
                    templateUrl: './roles-management.component.html',
                    styleUrls: ['./roles-management.component.scss']
                }]
        }], function () { return [{ type: ngxAppkitServicesAlpha.AlertService }, { type: ngxAppkitServicesAlpha.AppTranslationService }, { type: AccountService }]; }, { indexTemplate: [{
                type: core.ViewChild,
                args: ['indexTemplate', { static: true }]
            }], actionsTemplate: [{
                type: core.ViewChild,
                args: ['actionsTemplate', { static: true }]
            }], editorModal: [{
                type: core.ViewChild,
                args: ['editorModal', { static: true }]
            }], roleEditor: [{
                type: core.ViewChild,
                args: ['roleEditor', { static: true }]
            }] }); })();

    var _c0$7 = ["statusHeaderTemplate"];
    var _c1$6 = ["statusTemplate"];
    var _c2$5 = ["nameTemplate"];
    var _c3$4 = ["descriptionTemplate"];
    var _c4$4 = ["actionsTemplate"];
    var _c5$3 = ["editorModal"];
    function TodoDemoComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 27);
    } }
    function TodoDemoComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
        var _r15 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 28);
        core.ɵɵelementStart(1, "input", 29);
        core.ɵɵlistener("ngModelChange", function TodoDemoComponent_ng_template_21_Template_input_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r15); var row_r12 = ctx.row; return row_r12.completed = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelement(2, "label", 30);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r12 = ctx.row;
        var value_r13 = ctx.value;
        core.ɵɵadvance(1);
        core.ɵɵattributeInterpolate1("name", "checkboxes-", value_r13, "");
        core.ɵɵproperty("ngModel", row_r12.completed);
    } }
    function TodoDemoComponent_ng_template_23_span_0_Template(rf, ctx) { if (rf & 1) {
        var _r21 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "span", 33);
        core.ɵɵlistener("dblclick", function TodoDemoComponent_ng_template_23_span_0_Template_span_dblclick_0_listener() { core.ɵɵrestoreView(_r21); var row_r16 = core.ɵɵnextContext().row; var ctx_r20 = core.ɵɵnextContext(); return (ctx_r20.editing[row_r16.$$index + "-name"] = true); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r23 = core.ɵɵnextContext();
        var row_r16 = ctx_r23.row;
        var value_r17 = ctx_r23.value;
        core.ɵɵclassProp("completed", row_r16.completed);
        core.ɵɵattributeInterpolate1("title", "Double click to edit - ", value_r17, "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", value_r17, " ");
    } }
    function TodoDemoComponent_ng_template_23_input_1_Template(rf, ctx) { if (rf & 1) {
        var _r25 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "input", 34);
        core.ɵɵlistener("blur", function TodoDemoComponent_ng_template_23_input_1_Template_input_blur_0_listener($event) { core.ɵɵrestoreView(_r25); var ctx_r26 = core.ɵɵnextContext(); var value_r17 = ctx_r26.value; var row_r16 = ctx_r26.row; var ctx_r24 = core.ɵɵnextContext(); return ctx_r24.updateValue($event, "name", value_r17, row_r16); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var value_r17 = core.ɵɵnextContext().value;
        core.ɵɵproperty("value", value_r17);
    } }
    function TodoDemoComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, TodoDemoComponent_ng_template_23_span_0_Template, 2, 4, "span", 31);
        core.ɵɵtemplate(1, TodoDemoComponent_ng_template_23_input_1_Template, 1, 1, "input", 32);
    } if (rf & 2) {
        var row_r16 = ctx.row;
        var ctx_r5 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", !ctx_r5.editing[row_r16.$$index + "-name"]);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r5.editing[row_r16.$$index + "-name"]);
    } }
    function TodoDemoComponent_ng_template_25_span_0_Template(rf, ctx) { if (rf & 1) {
        var _r33 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "span", 33);
        core.ɵɵlistener("dblclick", function TodoDemoComponent_ng_template_25_span_0_Template_span_dblclick_0_listener() { core.ɵɵrestoreView(_r33); var row_r28 = core.ɵɵnextContext().row; var ctx_r32 = core.ɵɵnextContext(); return (ctx_r32.editing[row_r28.$$index + "-description"] = true); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r35 = core.ɵɵnextContext();
        var row_r28 = ctx_r35.row;
        var value_r29 = ctx_r35.value;
        core.ɵɵclassProp("completed", row_r28.completed);
        core.ɵɵattributeInterpolate1("title", "Double click to edit - ", value_r29, "");
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", value_r29, " ");
    } }
    function TodoDemoComponent_ng_template_25_input_1_Template(rf, ctx) { if (rf & 1) {
        var _r37 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "input", 34);
        core.ɵɵlistener("blur", function TodoDemoComponent_ng_template_25_input_1_Template_input_blur_0_listener($event) { core.ɵɵrestoreView(_r37); var ctx_r38 = core.ɵɵnextContext(); var value_r29 = ctx_r38.value; var row_r28 = ctx_r38.row; var ctx_r36 = core.ɵɵnextContext(); return ctx_r36.updateValue($event, "description", value_r29, row_r28); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var value_r29 = core.ɵɵnextContext().value;
        core.ɵɵproperty("value", value_r29);
    } }
    function TodoDemoComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵtemplate(0, TodoDemoComponent_ng_template_25_span_0_Template, 2, 4, "span", 31);
        core.ɵɵtemplate(1, TodoDemoComponent_ng_template_25_input_1_Template, 1, 1, "input", 32);
    } if (rf & 2) {
        var row_r28 = ctx.row;
        var ctx_r7 = core.ɵɵnextContext();
        core.ɵɵproperty("ngIf", !ctx_r7.editing[row_r28.$$index + "-description"]);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r7.editing[row_r28.$$index + "-description"]);
    } }
    function TodoDemoComponent_ng_template_27_i_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 40);
    } }
    function TodoDemoComponent_ng_template_27_i_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 41);
    } }
    function TodoDemoComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
        var _r44 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 35);
        core.ɵɵlistener("click", function TodoDemoComponent_ng_template_27_Template_a_click_0_listener() { core.ɵɵrestoreView(_r44); var row_r40 = ctx.row; var ctx_r43 = core.ɵɵnextContext(); return ctx_r43.delete(row_r40); });
        core.ɵɵpipe(1, "translate");
        core.ɵɵelement(2, "i", 36);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "a", 37);
        core.ɵɵlistener("click", function TodoDemoComponent_ng_template_27_Template_a_click_3_listener() { var row_r40 = ctx.row; return row_r40.important = !row_r40.important; })("mouseover", function TodoDemoComponent_ng_template_27_Template_a_mouseover_3_listener() { var row_r40 = ctx.row; return row_r40.isMouseOver = true; })("mouseout", function TodoDemoComponent_ng_template_27_Template_a_mouseout_3_listener() { var row_r40 = ctx.row; return row_r40.isMouseOver = false; });
        core.ɵɵpipe(4, "translate");
        core.ɵɵtemplate(5, TodoDemoComponent_ng_template_27_i_5_Template, 1, 0, "i", 38);
        core.ɵɵtemplate(6, TodoDemoComponent_ng_template_27_i_6_Template, 1, 0, "i", 39);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var row_r40 = ctx.row;
        core.ɵɵpropertyInterpolate("tooltip", core.ɵɵpipeBind1(1, 4, "todoDemo.management.Delete"));
        core.ɵɵadvance(3);
        core.ɵɵpropertyInterpolate("tooltip", core.ɵɵpipeBind1(4, 6, "todoDemo.management.Important"));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", row_r40.important || row_r40.isMouseOver);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !row_r40.important && !row_r40.isMouseOver);
    } }
    var _c6$2 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
    function TodoDemoComponent_form_42_i_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 64);
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r49 = core.ɵɵreference(8);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(1, _c6$2, _r49.valid, !_r49.valid));
    } }
    function TodoDemoComponent_form_42_span_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 65);
        core.ɵɵtext(1);
        core.ɵɵpipe(2, "translate");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(2, 1, "todoDemo.editor.TaskNameRequired"), " ");
    } }
    var _c7$1 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
    function TodoDemoComponent_form_42_Template(rf, ctx) { if (rf & 1) {
        var _r53 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "form", 42, 43);
        core.ɵɵlistener("ngSubmit", function TodoDemoComponent_form_42_Template_form_ngSubmit_0_listener() { core.ɵɵrestoreView(_r53); var _r48 = core.ɵɵreference(1); var _r49 = core.ɵɵreference(8); var ctx_r52 = core.ɵɵnextContext(); return _r48.form.valid ? ctx_r52.save() : !_r49.valid && ctx_r52.showErrorAlert("Task name is required", "Please enter a name for the task"); });
        core.ɵɵelementStart(2, "div", 44);
        core.ɵɵelementStart(3, "label", 45);
        core.ɵɵtext(4);
        core.ɵɵpipe(5, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "div", 46);
        core.ɵɵelementStart(7, "input", 47, 48);
        core.ɵɵlistener("ngModelChange", function TodoDemoComponent_form_42_Template_input_ngModelChange_7_listener($event) { core.ɵɵrestoreView(_r53); var ctx_r54 = core.ɵɵnextContext(); return ctx_r54.taskEdit.name = $event; });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(9, TodoDemoComponent_form_42_i_9_Template, 1, 4, "i", 49);
        core.ɵɵtemplate(10, TodoDemoComponent_form_42_span_10_Template, 3, 3, "span", 50);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(11, "div", 51);
        core.ɵɵelementStart(12, "label", 52);
        core.ɵɵtext(13);
        core.ɵɵpipe(14, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(15, "div", 46);
        core.ɵɵelementStart(16, "input", 53);
        core.ɵɵlistener("ngModelChange", function TodoDemoComponent_form_42_Template_input_ngModelChange_16_listener($event) { core.ɵɵrestoreView(_r53); var ctx_r55 = core.ɵɵnextContext(); return ctx_r55.taskEdit.description = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(17, "div", 54);
        core.ɵɵelement(18, "label", 55);
        core.ɵɵelementStart(19, "div", 46);
        core.ɵɵelementStart(20, "div", 28);
        core.ɵɵelementStart(21, "input", 56);
        core.ɵɵlistener("ngModelChange", function TodoDemoComponent_form_42_Template_input_ngModelChange_21_listener($event) { core.ɵɵrestoreView(_r53); var ctx_r56 = core.ɵɵnextContext(); return ctx_r56.taskEdit.important = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementStart(22, "label", 57);
        core.ɵɵtext(23);
        core.ɵɵpipe(24, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(25, "div", 54);
        core.ɵɵelementStart(26, "div", 58);
        core.ɵɵelement(27, "hr", 59);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(28, "div", 60);
        core.ɵɵelementStart(29, "div", 61);
        core.ɵɵelementStart(30, "button", 62);
        core.ɵɵtext(31);
        core.ɵɵpipe(32, "translate");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelement(33, "div", 63);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r48 = core.ɵɵreference(1);
        var _r49 = core.ɵɵreference(8);
        var ctx_r11 = core.ɵɵnextContext();
        core.ɵɵadvance(4);
        core.ɵɵtextInterpolate1("", core.ɵɵpipeBind1(5, 10, "todoDemo.editor.Name"), ":");
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(18, _c7$1, _r48.submitted && _r49.valid, _r48.submitted && !_r49.valid))("ngModel", ctx_r11.taskEdit.name);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", _r48.submitted);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", _r48.submitted && !_r49.valid);
        core.ɵɵadvance(3);
        core.ɵɵtextInterpolate1("", core.ɵɵpipeBind1(14, 12, "todoDemo.editor.Description"), ":");
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngModel", ctx_r11.taskEdit.description);
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngModel", ctx_r11.taskEdit.important);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(24, 14, "todoDemo.editor.Important"));
        core.ɵɵadvance(8);
        core.ɵɵtextInterpolate(core.ɵɵpipeBind1(32, 16, "todoDemo.editor.AddTask"));
    } }
    var TodoDemoComponent = /** @class */ (function () {
        function TodoDemoComponent(alertService, translationService, localStorage, authService) {
            this.alertService = alertService;
            this.translationService = translationService;
            this.localStorage = localStorage;
            this.authService = authService;
            this.rows = [];
            this.rowsCache = [];
            this.columns = [];
            this.editing = {};
            this.taskEdit = {};
            this.isDataLoaded = false;
            this.loadingIndicator = true;
            this.formResetToggle = true;
            this._hideCompletedTasks = false;
            this.verticalScrollbar = false;
        }
        Object.defineProperty(TodoDemoComponent.prototype, "currentUserId", {
            get: function () {
                if (this.authService.currentUser) {
                    this._currentUserId = this.authService.currentUser.id;
                }
                return this._currentUserId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TodoDemoComponent.prototype, "hideCompletedTasks", {
            get: function () {
                return this._hideCompletedTasks;
            },
            set: function (value) {
                if (value) {
                    this.rows = this.rowsCache.filter(function (r) { return !r.completed; });
                }
                else {
                    this.rows = __spread(this.rowsCache);
                }
                this._hideCompletedTasks = value;
            },
            enumerable: true,
            configurable: true
        });
        TodoDemoComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.loadingIndicator = true;
            this.fetch(function (data) {
                _this.refreshDataIndexes(data);
                _this.rows = data;
                _this.rowsCache = __spread(data);
                _this.isDataLoaded = true;
                setTimeout(function () { _this.loadingIndicator = false; }, 1500);
            });
            var gT = function (key) { return _this.translationService.getTranslation(key); };
            this.columns = [
                { prop: 'completed', name: '', width: 30, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'name', name: gT('todoDemo.management.Task'), cellTemplate: this.nameTemplate, width: 200 },
                { prop: 'description', name: gT('todoDemo.management.Description'), cellTemplate: this.descriptionTemplate, width: 500 },
                { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
            ];
        };
        TodoDemoComponent.prototype.ngOnDestroy = function () {
            this.saveToDisk();
        };
        TodoDemoComponent.prototype.fetch = function (cb) {
            var _this = this;
            var data = this.getFromDisk();
            if (data == null) {
                setTimeout(function () {
                    data = _this.getFromDisk();
                    if (data == null) {
                        data = [
                            { completed: true, important: true, name: 'Create visual studio extension', description: 'Create a visual studio VSIX extension package that will add this project as an aspnet-core project template' },
                            { completed: false, important: true, name: 'Do a quick how-to writeup', description: '' },
                            {
                                completed: false, important: false, name: 'Create aspnet-core/Angular8 tutorials based on this project', description: 'Create tutorials (blog/video/youtube) on how to build applications (full stack)' +
                                    ' using aspnet-core/Angular8. The tutorial will focus on getting productive with the technology right away rather than the details on how and why they work so audience can get onboard quickly.'
                            },
                        ];
                    }
                    cb(data);
                }, 1000);
            }
            else {
                cb(data);
            }
        };
        TodoDemoComponent.prototype.refreshDataIndexes = function (data) {
            var e_1, _a;
            var index = 0;
            try {
                for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var i = data_1_1.value;
                    i.$$index = index++;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        TodoDemoComponent.prototype.onSearchChanged = function (value) {
            this.rows = this.rowsCache.filter(function (r) { return ngxAppkitContractsAlpha.Utilities.searchArray(value, false, r.name, r.description) || value == 'important' && r.important || value == 'not important' && !r.important; });
        };
        TodoDemoComponent.prototype.showErrorAlert = function (caption, message) {
            this.alertService.showMessage(caption, message, ngxAppkitContractsAlpha.MessageSeverity.error);
        };
        TodoDemoComponent.prototype.addTask = function () {
            var _this = this;
            this.formResetToggle = false;
            setTimeout(function () {
                _this.formResetToggle = true;
                _this.taskEdit = {};
                _this.editorModal.show();
            });
        };
        TodoDemoComponent.prototype.save = function () {
            this.rowsCache.splice(0, 0, this.taskEdit);
            this.rows.splice(0, 0, this.taskEdit);
            this.refreshDataIndexes(this.rowsCache);
            this.rows = __spread(this.rows);
            this.saveToDisk();
            this.editorModal.hide();
        };
        TodoDemoComponent.prototype.updateValue = function (event, cell, cellValue, row) {
            this.editing[row.$$index + '-' + cell] = false;
            this.rows[row.$$index][cell] = event.target.value;
            this.rows = __spread(this.rows);
            this.saveToDisk();
        };
        TodoDemoComponent.prototype.delete = function (row) {
            var _this = this;
            this.alertService.showDialog('Are you sure you want to delete the task?', ngxAppkitContractsAlpha.DialogType.confirm, function () { return _this.deleteHelper(row); });
        };
        TodoDemoComponent.prototype.deleteHelper = function (row) {
            this.rowsCache = this.rowsCache.filter(function (item) { return item !== row; });
            this.rows = this.rows.filter(function (item) { return item !== row; });
            this.saveToDisk();
        };
        TodoDemoComponent.prototype.getFromDisk = function () {
            return this.localStorage.getDataObject(TodoDemoComponent.DBKeyTodoDemo + ":" + this.currentUserId);
        };
        TodoDemoComponent.prototype.saveToDisk = function () {
            if (this.isDataLoaded) {
                this.localStorage.saveSyncedSessionData(this.rowsCache, TodoDemoComponent.DBKeyTodoDemo + ":" + this.currentUserId);
            }
        };
        TodoDemoComponent.DBKeyTodoDemo = 'todo-demo.todo_list';
        /** @nocollapse */ TodoDemoComponent.ɵfac = function TodoDemoComponent_Factory(t) { return new (t || TodoDemoComponent)(core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.AlertService), core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.AppTranslationService), core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.LocalStoreManager), core.ɵɵdirectiveInject(ngxOauth2.AuthService)); };
        /** @nocollapse */ TodoDemoComponent.ɵcmp = core.ɵɵdefineComponent({ type: TodoDemoComponent, selectors: [["todo-demo"]], viewQuery: function TodoDemoComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0$7, true);
                core.ɵɵstaticViewQuery(_c1$6, true);
                core.ɵɵstaticViewQuery(_c2$5, true);
                core.ɵɵstaticViewQuery(_c3$4, true);
                core.ɵɵstaticViewQuery(_c4$4, true);
                core.ɵɵstaticViewQuery(_c5$3, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.statusHeaderTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.statusTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.nameTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.descriptionTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.actionsTemplate = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.editorModal = _t.first);
            } }, inputs: { verticalScrollbar: "verticalScrollbar" }, decls: 43, vars: 23, consts: [[1, "row", "control-box"], [1, "col-lg-8"], [1, "form-group", "search-box"], [3, "placeholder", "searchChange"], [1, "col-lg-4"], [1, "nav", "flex-column", "flex-lg-row"], [1, "nav-item", "toolbaritem"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fa", "fa-eye-slash"], [1, "fa", "fa-plus"], [1, "material", "colored-header", "sm", "table-hover", 3, "loadingIndicator", "rows", "rowHeight", "headerHeight", "footerHeight", "columns", "scrollbarV", "columnMode"], ["statusHeaderTemplate", ""], ["statusTemplate", ""], ["nameTemplate", ""], ["descriptionTemplate", ""], ["actionsTemplate", ""], ["bsModal", "", "tabindex", "-1", 1, "modal", "fade"], ["editorModal", "bs-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "float-left"], [1, "fa", "fa-tasks"], ["type", "button", "title", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["name", "taskEditorForm", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], [1, "fa", "fa-check-square-o"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "form-check-label"], ["class", "inline-label", 3, "completed", "dblclick", 4, "ngIf"], ["class", "inline-editor", "autofocus", "", "type", "text", 3, "value", "blur", 4, "ngIf"], [1, "inline-label", 3, "dblclick"], ["autofocus", "", "type", "text", 1, "inline-editor", 3, "value", "blur"], ["href", "javascript:;", "container", "body", 1, "btn", "btn-link", "btn-sm", 3, "tooltip", "click"], [1, "fa", "fa-times"], ["href", "javascript:;", "container", "body", 1, "btn", "btn-link", "btn-sm", 3, "tooltip", "click", "mouseover", "mouseout"], ["class", "fa fa-bookmark", 4, "ngIf"], ["class", "fa fa-bookmark-o", 4, "ngIf"], [1, "fa", "fa-bookmark"], [1, "fa", "fa-bookmark-o"], ["name", "taskEditorForm", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "row", "has-feedback-icon"], ["for", "taskName", 1, "col-form-label", "col-md-3"], [1, "col-md-9"], ["autofocus", "", "type", "text", "id", "taskName", "name", "taskName", "placeholder", "Enter task name", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["taskName", "ngModel"], ["class", "fa form-control-feedback", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "row", "description-form-group"], ["for", "taskDescription", 1, "col-form-label", "col-md-3"], ["type", "text", "id", "taskDescription", "name", "taskDescription", "placeholder", "Enter task description", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-form-label", "col-md-3"], ["id", "isImportant", "name", "isImportant", "type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "isImportant", 1, "form-check-label"], [1, "col-md-12"], [1, "edit-last-separator-hr"], [1, "form-group", "actionBtn-form-group"], [1, "float-right"], ["type", "submit", 1, "btn", "btn-primary"], [1, "clearfix"], ["aria-hidden", "true", 1, "fa", "form-control-feedback", 3, "ngClass"], [1, "invalid-feedback"]], template: function TodoDemoComponent_Template(rf, ctx) { if (rf & 1) {
                var _r57 = core.ɵɵgetCurrentView();
                core.ɵɵelementStart(0, "div");
                core.ɵɵelementStart(1, "div", 0);
                core.ɵɵelementStart(2, "div", 1);
                core.ɵɵelementStart(3, "div", 2);
                core.ɵɵelementStart(4, "search-box", 3);
                core.ɵɵlistener("searchChange", function TodoDemoComponent_Template_search_box_searchChange_4_listener($event) { return ctx.onSearchChanged($event); });
                core.ɵɵpipe(5, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(6, "div", 4);
                core.ɵɵelementStart(7, "ul", 5);
                core.ɵɵelementStart(8, "li", 6);
                core.ɵɵelementStart(9, "a", 7);
                core.ɵɵlistener("click", function TodoDemoComponent_Template_a_click_9_listener() { return ctx.hideCompletedTasks = !ctx.hideCompletedTasks; });
                core.ɵɵelement(10, "i", 8);
                core.ɵɵtext(11);
                core.ɵɵpipe(12, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(13, "li", 6);
                core.ɵɵelementStart(14, "a", 7);
                core.ɵɵlistener("click", function TodoDemoComponent_Template_a_click_14_listener() { return ctx.addTask(); });
                core.ɵɵelement(15, "i", 9);
                core.ɵɵtext(16);
                core.ɵɵpipe(17, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelement(18, "ngx-datatable", 10);
                core.ɵɵtemplate(19, TodoDemoComponent_ng_template_19_Template, 1, 0, "ng-template", null, 11, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(21, TodoDemoComponent_ng_template_21_Template, 3, 2, "ng-template", null, 12, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(23, TodoDemoComponent_ng_template_23_Template, 2, 2, "ng-template", null, 13, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(25, TodoDemoComponent_ng_template_25_Template, 2, 2, "ng-template", null, 14, core.ɵɵtemplateRefExtractor);
                core.ɵɵtemplate(27, TodoDemoComponent_ng_template_27_Template, 7, 8, "ng-template", null, 15, core.ɵɵtemplateRefExtractor);
                core.ɵɵelementStart(29, "div", 16, 17);
                core.ɵɵelementStart(31, "div", 18);
                core.ɵɵelementStart(32, "div", 19);
                core.ɵɵelementStart(33, "div", 20);
                core.ɵɵelementStart(34, "h4", 21);
                core.ɵɵelement(35, "i", 22);
                core.ɵɵtext(36);
                core.ɵɵpipe(37, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(38, "button", 23);
                core.ɵɵlistener("click", function TodoDemoComponent_Template_button_click_38_listener() { core.ɵɵrestoreView(_r57); var _r10 = core.ɵɵreference(30); return _r10.hide(); });
                core.ɵɵelementStart(39, "span", 24);
                core.ɵɵtext(40, "\u00D7");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(41, "div", 25);
                core.ɵɵtemplate(42, TodoDemoComponent_form_42_Template, 34, 21, "form", 26);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(4);
                core.ɵɵpropertyInterpolate("placeholder", core.ɵɵpipeBind1(5, 15, "todoDemo.management.Search"));
                core.ɵɵadvance(4);
                core.ɵɵclassProp("active", ctx.hideCompletedTasks);
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(12, 17, "todoDemo.management.HideCompleted"), "");
                core.ɵɵadvance(5);
                core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(17, 19, "todoDemo.management.AddTask"), "");
                core.ɵɵadvance(2);
                core.ɵɵproperty("loadingIndicator", ctx.loadingIndicator)("rows", ctx.rows)("rowHeight", 35)("headerHeight", 35)("footerHeight", 35)("columns", ctx.columns)("scrollbarV", ctx.verticalScrollbar)("columnMode", "force");
                core.ɵɵadvance(18);
                core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(37, 21, "todoDemo.editor.NewTask"), "");
                core.ɵɵadvance(6);
                core.ɵɵproperty("ngIf", ctx.formResetToggle);
            } }, directives: [SearchBoxComponent, ngxDatatable.DatatableComponent, modal.ModalDirective, common.NgIf, forms.CheckboxControlValueAccessor, forms.NgControlStatus, forms.NgModel, AutofocusDirective, tooltip.TooltipDirective, forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.NgForm, forms.DefaultValueAccessor, forms.RequiredValidator, common.NgClass], pipes: [core$1.TranslatePipe], styles: ["input.form-control[_ngcontent-%COMP%]{border-left-width:5px}.control-box[_ngcontent-%COMP%]{margin-bottom:5px}.search-box[_ngcontent-%COMP%]{margin:0}.nav-item.toolbaritem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;min-width:100px;font-weight:700}.completed[_ngcontent-%COMP%]{text-decoration:line-through}.form-check[_ngcontent-%COMP%]{margin:0}.inline-label[_ngcontent-%COMP%]{width:100%;min-height:1rem;display:inline-block}.inline-editor[_ngcontent-%COMP%]{width:100%}.description-form-group[_ngcontent-%COMP%]{margin-bottom:5px}.actionBtn-form-group[_ngcontent-%COMP%]{margin:0}.edit-last-separator-hr[_ngcontent-%COMP%]{margin:10px 0}"] });
        return TodoDemoComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TodoDemoComponent, [{
            type: core.Component,
            args: [{
                    selector: 'todo-demo',
                    templateUrl: './todo-demo.component.html',
                    styleUrls: ['./todo-demo.component.scss']
                }]
        }], function () { return [{ type: ngxAppkitServicesAlpha.AlertService }, { type: ngxAppkitServicesAlpha.AppTranslationService }, { type: ngxAppkitServicesAlpha.LocalStoreManager }, { type: ngxOauth2.AuthService }]; }, { verticalScrollbar: [{
                type: core.Input
            }], statusHeaderTemplate: [{
                type: core.ViewChild,
                args: ['statusHeaderTemplate', { static: true }]
            }], statusTemplate: [{
                type: core.ViewChild,
                args: ['statusTemplate', { static: true }]
            }], nameTemplate: [{
                type: core.ViewChild,
                args: ['nameTemplate', { static: true }]
            }], descriptionTemplate: [{
                type: core.ViewChild,
                args: ['descriptionTemplate', { static: true }]
            }], actionsTemplate: [{
                type: core.ViewChild,
                args: ['actionsTemplate', { static: true }]
            }], editorModal: [{
                type: core.ViewChild,
                args: ['editorModal', { static: true }]
            }] }); })();

    function StatisticsDemoComponent_th_10_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "th", 6);
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var label_r2 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(label_r2);
    } }
    function StatisticsDemoComponent_tr_12_td_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td");
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var j_r6 = ctx.index;
        var d_r3 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate(d_r3 && d_r3.data[j_r6]);
    } }
    function StatisticsDemoComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "tr");
        core.ɵɵelementStart(1, "th");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵtemplate(3, StatisticsDemoComponent_tr_12_td_3_Template, 2, 1, "td", 8);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var d_r3 = ctx.$implicit;
        var ctx_r1 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(d_r3 && d_r3.label.split(" ").pop());
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r1.chartLabels);
    } }

    var StatisticsDemoComponent = /** @class */ (function () {
        function StatisticsDemoComponent(alertService) {
            this.alertService = alertService;
            this.chartData = [
                { data: [65, 59, 80, 81, 56, 55], label: 'Series A' },
                { data: [28, 48, 40, 19, 86, 27], label: 'Series B' },
                { data: [18, 48, 77, 9, 100, 27], label: 'Series C' }
            ];
            this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            this.chartOptions = {
                responsive: true,
                title: {
                    display: false,
                    fontSize: 16,
                    text: 'Important Stuff'
                }
            };
            this.chartColors = [
                {
                    backgroundColor: 'rgba(148,159,177,0.2)',
                    borderColor: 'rgba(148,159,177,1)',
                    pointBackgroundColor: 'rgba(148,159,177,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                },
                {
                    backgroundColor: 'rgba(77,83,96,0.2)',
                    borderColor: 'rgba(77,83,96,1)',
                    pointBackgroundColor: 'rgba(77,83,96,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(77,83,96,1)'
                },
                {
                    backgroundColor: 'rgba(128,128,128,0.2)',
                    borderColor: 'rgba(128,128,128,1)',
                    pointBackgroundColor: 'rgba(128,128,128,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(128,128,128,0.8)'
                }
            ];
            this.chartLegend = true;
            this.chartType = 'line';
        }
        StatisticsDemoComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.timerReference = setInterval(function () { return _this.randomize(); }, 5000);
            var initialWidth$ = rxjs.of(window.innerWidth);
            var resizedWidth$ = rxjs.fromEvent(window, 'resize').pipe(operators.map(function (event) { return event.target.innerWidth; }));
            this.windowWidth$ = rxjs.merge(initialWidth$, resizedWidth$).pipe(operators.distinctUntilChanged());
            this.windowWidthSub = this.windowWidth$.subscribe(function (width) { return _this.chartLegend = width < 600 ? false : true; });
        };
        StatisticsDemoComponent.prototype.ngOnDestroy = function () {
            clearInterval(this.timerReference);
            this.windowWidthSub.unsubscribe();
        };
        StatisticsDemoComponent.prototype.randomize = function () {
            var _chartData = new Array(this.chartData.length);
            for (var i = 0; i < this.chartData.length; i++) {
                _chartData[i] = { data: new Array(this.chartData[i].data.length), label: this.chartData[i].label };
                for (var j = 0; j < this.chartData[i].data.length; j++) {
                    _chartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
                }
            }
            this.chartData = _chartData;
        };
        StatisticsDemoComponent.prototype.changeChartType = function (type) {
            this.chartType = type;
        };
        StatisticsDemoComponent.prototype.showMessage = function (msg) {
            this.alertService.showMessage('Demo', msg, ngxAppkitContractsAlpha.MessageSeverity.info);
        };
        StatisticsDemoComponent.prototype.showDialog = function (msg) {
            var _this = this;
            this.alertService.showDialog(msg, ngxAppkitContractsAlpha.DialogType.prompt, function (val) { return _this.configure(true, val); }, function () { return _this.configure(false); });
        };
        StatisticsDemoComponent.prototype.configure = function (response, value) {
            var _this = this;
            if (response) {
                this.alertService.showStickyMessage('Simulating...', '', ngxAppkitContractsAlpha.MessageSeverity.wait);
                setTimeout(function () {
                    _this.alertService.resetStickyMessage();
                    _this.alertService.showMessage('Demo', "Your settings was successfully configured to \"" + value + "\"", ngxAppkitContractsAlpha.MessageSeverity.success);
                }, 2000);
            }
            else {
                this.alertService.showMessage('Demo', 'Operation cancelled by user', ngxAppkitContractsAlpha.MessageSeverity.default);
            }
        };
        StatisticsDemoComponent.prototype.chartClicked = function (e) {
            console.log(e);
        };
        StatisticsDemoComponent.prototype.chartHovered = function (e) {
            console.log(e);
        };
        /** @nocollapse */ StatisticsDemoComponent.ɵfac = function StatisticsDemoComponent_Factory(t) { return new (t || StatisticsDemoComponent)(core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.AlertService)); };
        /** @nocollapse */ StatisticsDemoComponent.ɵcmp = core.ɵɵdefineComponent({ type: StatisticsDemoComponent, selectors: [["statistics-demo"]], decls: 42, vars: 20, consts: [[1, "row", "statistics-container"], [1, "col-md-6"], [1, "chart-container"], ["baseChart", "", "width", "600", "height", "250", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"], [1, "d-none", "d-sm-block", "table-responsive"], [1, "table", "table-sm"], [1, "border-top-0"], ["class", "border-top-0", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "refresh-btn", 3, "click"], ["dropdown", "", 1, "chart-type-container"], ["id", "chartType", "type", "button", "data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "fa", "fa-bar-chart"], [1, "dropdown-menu"], ["href", "javascript:;", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [3, "click"], [1, "fa", "fa-bars"], [1, "fa", "fa-cogs"]], template: function StatisticsDemoComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "div", 1);
                core.ɵɵelementStart(2, "div", 2);
                core.ɵɵelementStart(3, "canvas", 3);
                core.ɵɵlistener("chartHover", function StatisticsDemoComponent_Template_canvas_chartHover_3_listener($event) { return ctx.chartHovered($event); })("chartClick", function StatisticsDemoComponent_Template_canvas_chartClick_3_listener($event) { return ctx.chartClicked($event); });
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(4, "div", 1);
                core.ɵɵelementStart(5, "div", 4);
                core.ɵɵelementStart(6, "table", 5);
                core.ɵɵelementStart(7, "thead");
                core.ɵɵelementStart(8, "tr");
                core.ɵɵelement(9, "th", 6);
                core.ɵɵtemplate(10, StatisticsDemoComponent_th_10_Template, 2, 1, "th", 7);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(11, "tbody");
                core.ɵɵtemplate(12, StatisticsDemoComponent_tr_12_Template, 4, 2, "tr", 8);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(13, "button", 9);
                core.ɵɵlistener("click", function StatisticsDemoComponent_Template_button_click_13_listener() { ctx.randomize(); return ctx.showMessage("Manual refresh!"); });
                core.ɵɵtext(14, "REFSH");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(15, "div", 10);
                core.ɵɵelementStart(16, "button", 11);
                core.ɵɵelement(17, "i", 12);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(18, "ul", 13);
                core.ɵɵelementStart(19, "li");
                core.ɵɵelementStart(20, "a", 14);
                core.ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_20_listener() { return ctx.changeChartType("bar"); });
                core.ɵɵtext(21, "Bar Chart");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(22, "li");
                core.ɵɵelementStart(23, "a", 14);
                core.ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_23_listener() { return ctx.changeChartType("pie"); });
                core.ɵɵtext(24, "Pie Chart");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(25, "li");
                core.ɵɵelementStart(26, "a", 14);
                core.ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_26_listener() { return ctx.changeChartType("doughnut"); });
                core.ɵɵtext(27, "Doughnut Chart");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(28, "li");
                core.ɵɵelementStart(29, "a", 14);
                core.ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_29_listener() { return ctx.changeChartType("polarArea"); });
                core.ɵɵtext(30, "Polar Area Chart");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(31, "li");
                core.ɵɵelementStart(32, "a", 14);
                core.ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_32_listener() { return ctx.changeChartType("radar"); });
                core.ɵɵtext(33, "Radar Chart");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelement(34, "li", 15);
                core.ɵɵelementStart(35, "li");
                core.ɵɵelementStart(36, "a", 14);
                core.ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_36_listener() { return ctx.changeChartType("line"); });
                core.ɵɵtext(37, "Line Chart");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(38, "button", 16);
                core.ɵɵlistener("click", function StatisticsDemoComponent_Template_button_click_38_listener() { return ctx.showMessage("You've clicked on the menu"); });
                core.ɵɵelement(39, "i", 17);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(40, "button", 16);
                core.ɵɵlistener("click", function StatisticsDemoComponent_Template_button_click_40_listener() { return ctx.showDialog("Enter some value to do serious configuration..."); });
                core.ɵɵelement(41, "i", 18);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(3);
                core.ɵɵproperty("datasets", ctx.chartData)("labels", ctx.chartLabels)("options", ctx.chartOptions)("colors", ctx.chartColors)("legend", ctx.chartLegend)("chartType", ctx.chartType);
                core.ɵɵadvance(7);
                core.ɵɵproperty("ngForOf", ctx.chartLabels);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngForOf", ctx.chartData);
                core.ɵɵadvance(7);
                core.ɵɵclassProp("active", ctx.chartType == "bar");
                core.ɵɵadvance(3);
                core.ɵɵclassProp("active", ctx.chartType == "pie");
                core.ɵɵadvance(3);
                core.ɵɵclassProp("active", ctx.chartType == "doughnut");
                core.ɵɵadvance(3);
                core.ɵɵclassProp("active", ctx.chartType == "polarArea");
                core.ɵɵadvance(3);
                core.ɵɵclassProp("active", ctx.chartType == "radar");
                core.ɵɵadvance(4);
                core.ɵɵclassProp("active", ctx.chartType == "line");
            } }, directives: [ng2Charts.BaseChartDirective, common.NgForOf, dropdown.BsDropdownDirective], styles: [".statistics-container[_ngcontent-%COMP%]{font-size:.875rem}.chart-container[_ngcontent-%COMP%]{display:block}.refresh-btn[_ngcontent-%COMP%]{margin-right:10px}.chart-type-container[_ngcontent-%COMP%]{display:inline-block}.chart-type-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#e8e8e8}"] });
        return StatisticsDemoComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(StatisticsDemoComponent, [{
            type: core.Component,
            args: [{
                    selector: 'statistics-demo',
                    templateUrl: './statistics-demo.component.html',
                    styleUrls: ['./statistics-demo.component.scss']
                }]
        }], function () { return [{ type: ngxAppkitServicesAlpha.AlertService }]; }, null); })();

    // =============================
    var _c0$8 = ["tab"];
    function SettingsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 16);
        core.ɵɵelement(1, "user-info");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵproperty("@fadeInOut", undefined);
    } }
    function SettingsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 16);
        core.ɵɵelement(1, "user-preferences");
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵproperty("@fadeInOut", undefined);
    } }
    var _c1$7 = function () { return []; };
    var SettingsComponent = /** @class */ (function () {
        function SettingsComponent(router, route, accountService) {
            this.router = router;
            this.route = route;
            this.accountService = accountService;
            this.isProfileActivated = true;
            this.isPreferencesActivated = false;
            this.isUsersActivated = false;
            this.isRolesActivated = false;
            this.profileTab = 'profile';
            this.preferencesTab = 'preferences';
            this.usersTab = 'users';
            this.rolesTab = 'roles';
        }
        SettingsComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.fragmentSubscription = this.route.fragment.subscribe(function (anchor) { return _this.showContent(anchor); });
        };
        SettingsComponent.prototype.ngOnDestroy = function () {
            this.fragmentSubscription.unsubscribe();
        };
        SettingsComponent.prototype.showContent = function (anchor) {
            if (anchor) {
                anchor = anchor.toLowerCase();
            }
            if ((this.isFragmentEquals(anchor, this.usersTab) && !this.canViewUsers) ||
                (this.isFragmentEquals(anchor, this.rolesTab) && !this.canViewRoles)) {
                return;
            }
            this.tab.show("#" + (anchor || this.profileTab) + "Tab");
        };
        SettingsComponent.prototype.isFragmentEquals = function (fragment1, fragment2) {
            if (fragment1 == null) {
                fragment1 = '';
            }
            if (fragment2 == null) {
                fragment2 = '';
            }
            return fragment1.toLowerCase() == fragment2.toLowerCase();
        };
        SettingsComponent.prototype.onShowTab = function (event) {
            var activeTab = event.target.hash.split('#', 2).pop();
            this.isProfileActivated = activeTab == this.profileTab;
            this.isPreferencesActivated = activeTab == this.preferencesTab;
            this.isUsersActivated = activeTab == this.usersTab;
            this.isRolesActivated = activeTab == this.rolesTab;
            this.router.navigate([], { fragment: activeTab });
        };
        Object.defineProperty(SettingsComponent.prototype, "canViewUsers", {
            get: function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.viewUsersPermission);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SettingsComponent.prototype, "canViewRoles", {
            get: function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.viewRolesPermission);
            },
            enumerable: true,
            configurable: true
        });
        /** @nocollapse */ SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(core.ɵɵdirectiveInject(router.Router), core.ɵɵdirectiveInject(router.ActivatedRoute), core.ɵɵdirectiveInject(AccountService)); };
        /** @nocollapse */ SettingsComponent.ɵcmp = core.ɵɵdefineComponent({ type: SettingsComponent, selectors: [["settings"]], viewQuery: function SettingsComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0$8, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.tab = _t.first);
            } }, decls: 33, vars: 22, consts: [[1, "container", "settings-page"], [1, "pageHeader"], ["aria-hidden", "true", 1, "fa", "fa-cog", "fa-lg", "page-caption"], [1, "d-sm-flex", "flex-row"], ["bootstrapTab", "", "role", "navigation", 1, "nav", "nav-tabs", "nav-tabs--vertical", "nav-tabs--left", 3, "showBSTab"], ["tab", "bootstrap-tab"], [1, "nav-item"], ["id", "profileTab", "fragment", "profile", "data-target", "#profile", "href", "#profile", "data-toggle", "tab", "role", "tab", "aria-controls", "profile", 1, "nav-link", "active", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-user-circle-o", "fa-fw"], ["id", "preferencesTab", "fragment", "preferences", "data-target", "#preferences", "href", "#preferences", "data-toggle", "tab", "role", "tab", "aria-controls", "preferences", 1, "nav-link", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-sliders", "fa-fw"], [1, "tab-content", "w-100"], ["id", "profile", "role", "tabpanel", 1, "tab-pane", "show", "active"], [1, "separator-hr"], ["class", "content-container pl-lg-2", 4, "ngIf"], ["id", "preferences", "role", "tabpanel", 1, "tab-pane"], [1, "content-container", "pl-lg-2"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "header", 1);
                core.ɵɵelementStart(2, "h3");
                core.ɵɵelement(3, "i", 2);
                core.ɵɵtext(4);
                core.ɵɵpipe(5, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(6, "div");
                core.ɵɵelementStart(7, "div", 3);
                core.ɵɵelementStart(8, "ul", 4, 5);
                core.ɵɵlistener("showBSTab", function SettingsComponent_Template_ul_showBSTab_8_listener($event) { return ctx.onShowTab($event); });
                core.ɵɵelementStart(10, "li", 6);
                core.ɵɵelementStart(11, "a", 7);
                core.ɵɵelement(12, "i", 8);
                core.ɵɵtext(13);
                core.ɵɵpipe(14, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(15, "li", 6);
                core.ɵɵelementStart(16, "a", 9);
                core.ɵɵelement(17, "i", 10);
                core.ɵɵtext(18);
                core.ɵɵpipe(19, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(20, "div", 11);
                core.ɵɵelementStart(21, "div", 12);
                core.ɵɵelementStart(22, "h4");
                core.ɵɵtext(23);
                core.ɵɵpipe(24, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelement(25, "hr", 13);
                core.ɵɵtemplate(26, SettingsComponent_div_26_Template, 2, 1, "div", 14);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(27, "div", 15);
                core.ɵɵelementStart(28, "h4");
                core.ɵɵtext(29);
                core.ɵɵpipe(30, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelement(31, "hr", 13);
                core.ɵɵtemplate(32, SettingsComponent_div_32_Template, 2, 1, "div", 14);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(4);
                core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(5, 10, "pageHeader.Settings"), "");
                core.ɵɵadvance(2);
                core.ɵɵproperty("@fadeInOut", undefined);
                core.ɵɵadvance(5);
                core.ɵɵproperty("routerLink", core.ɵɵpureFunction0(20, _c1$7));
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(14, 12, "settings.tab.Profile"), " ");
                core.ɵɵadvance(3);
                core.ɵɵproperty("routerLink", core.ɵɵpureFunction0(21, _c1$7));
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(19, 14, "settings.tab.Preferences"), " ");
                core.ɵɵadvance(5);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(24, 16, "settings.header.UserProfile"));
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.isProfileActivated);
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(30, 18, "settings.header.UserPreferences"));
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.isPreferencesActivated);
            } }, directives: [BootstrapTabDirective, router.RouterLinkWithHref, common.NgIf, UserInfoComponent, UserPreferencesComponent], pipes: [core$1.TranslatePipe], styles: [".separator-hr[_ngcontent-%COMP%]{margin-top:0;margin-bottom:10px}[hidden][_ngcontent-%COMP%]{display:none}"], data: { animation: [fadeInOut] } });
        return SettingsComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SettingsComponent, [{
            type: core.Component,
            args: [{
                    selector: 'settings',
                    templateUrl: './settings.component.html',
                    styleUrls: ['./settings.component.scss'],
                    animations: [fadeInOut]
                }]
        }], function () { return [{ type: router.Router }, { type: router.ActivatedRoute }, { type: AccountService }]; }, { tab: [{
                type: core.ViewChild,
                args: ['tab', { static: true }]
            }] }); })();

    // =============================
    var NotFoundComponent = /** @class */ (function () {
        function NotFoundComponent() {
        }
        /** @nocollapse */ NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
        /** @nocollapse */ NotFoundComponent.ɵcmp = core.ɵɵdefineComponent({ type: NotFoundComponent, selectors: [["not-found"]], decls: 19, vars: 13, consts: [[1, "pageHeader"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-circle", "fa-lg", "page-caption"], [1, "d-flex", "h-75"], [1, "m-auto"], [1, "icon-container"], [1, "fa", "fa-exclamation-circle"], [1, "text-muted", "error-description"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "fa", "fa-home"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "header", 0);
                core.ɵɵelementStart(1, "h3");
                core.ɵɵelement(2, "i", 1);
                core.ɵɵtext(3);
                core.ɵɵpipe(4, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementStart(5, "div", 2);
                core.ɵɵelementStart(6, "div", 3);
                core.ɵɵelementStart(7, "div", 4);
                core.ɵɵelement(8, "i", 5);
                core.ɵɵtext(9);
                core.ɵɵpipe(10, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(11, "div", 6);
                core.ɵɵtext(12);
                core.ɵɵpipe(13, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementStart(14, "div");
                core.ɵɵelementStart(15, "a", 7);
                core.ɵɵelement(16, "i", 8);
                core.ɵɵtext(17);
                core.ɵɵpipe(18, "translate");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(4, 5, "pageHeader.NotFound"), "");
                core.ɵɵadvance(2);
                core.ɵɵproperty("@fadeInOut", undefined);
                core.ɵɵadvance(4);
                core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(10, 7, "notFound.404"), "");
                core.ɵɵadvance(3);
                core.ɵɵtextInterpolate(core.ɵɵpipeBind1(13, 9, "notFound.pageNotFound"));
                core.ɵɵadvance(5);
                core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(18, 11, "notFound.backToHome"), "");
            } }, directives: [router.RouterLinkWithHref], pipes: [core$1.TranslatePipe], styles: [".icon-container[_ngcontent-%COMP%]{font-size:5rem}.error-description[_ngcontent-%COMP%]{font-size:1.5rem;padding-bottom:10px}"], data: { animation: [fadeInOut] } });
        return NotFoundComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NotFoundComponent, [{
            type: core.Component,
            args: [{
                    selector: 'not-found',
                    templateUrl: './not-found.component.html',
                    styleUrls: ['./not-found.component.scss'],
                    animations: [fadeInOut]
                }]
        }], null, null); })();

    // =============================
    function LoginComponent_button_6_Template(rf, ctx) { if (rf & 1) {
        var _r3 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 9);
        core.ɵɵlistener("click", function LoginComponent_button_6_Template_button_click_0_listener() { core.ɵɵrestoreView(_r3); var ctx_r2 = core.ɵɵnextContext(); return ctx_r2.closeModal(); });
        core.ɵɵelementStart(1, "span", 10);
        core.ɵɵtext(2, "\u00D7");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } }
    var _c0$9 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
    function LoginComponent_form_9_i_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 30);
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r5 = core.ɵɵreference(7);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(1, _c0$9, _r5.valid, !_r5.valid));
    } }
    function LoginComponent_form_9_span_9_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 31);
        core.ɵɵtext(1, " Username is required ");
        core.ɵɵelementEnd();
    } }
    function LoginComponent_form_9_i_16_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 30);
    } if (rf & 2) {
        core.ɵɵnextContext();
        var _r8 = core.ɵɵreference(15);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(1, _c0$9, _r8.valid, !_r8.valid));
    } }
    function LoginComponent_form_9_span_17_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "span", 31);
        core.ɵɵtext(1, " Password is required ");
        core.ɵɵelementEnd();
    } }
    function LoginComponent_form_9_i_27_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "i", 32);
    } }
    var _c1$8 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
    function LoginComponent_form_9_Template(rf, ctx) { if (rf & 1) {
        var _r13 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "form", 11, 12);
        core.ɵɵlistener("ngSubmit", function LoginComponent_form_9_Template_form_ngSubmit_0_listener() { core.ɵɵrestoreView(_r13); var _r4 = core.ɵɵreference(1); var _r5 = core.ɵɵreference(7); var _r8 = core.ɵɵreference(15); var ctx_r12 = core.ɵɵnextContext(); _r4.form.valid ? ctx_r12.login() : !_r5.valid && ctx_r12.showErrorAlert("Username is required", "Please enter a valid username"); return !_r8.valid && ctx_r12.showErrorAlert("Password is required", "Please enter a valid password"); });
        core.ɵɵelementStart(2, "div", 13);
        core.ɵɵelementStart(3, "label", 14);
        core.ɵɵtext(4, "Username:");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "div", 15);
        core.ɵɵelementStart(6, "input", 16, 17);
        core.ɵɵlistener("ngModelChange", function LoginComponent_form_9_Template_input_ngModelChange_6_listener($event) { core.ɵɵrestoreView(_r13); var ctx_r14 = core.ɵɵnextContext(); return ctx_r14.userLogin.userName = $event; });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(8, LoginComponent_form_9_i_8_Template, 1, 4, "i", 18);
        core.ɵɵtemplate(9, LoginComponent_form_9_span_9_Template, 2, 0, "span", 19);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(10, "div", 13);
        core.ɵɵelementStart(11, "label", 20);
        core.ɵɵtext(12, "Password:");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(13, "div", 15);
        core.ɵɵelementStart(14, "input", 21, 22);
        core.ɵɵlistener("ngModelChange", function LoginComponent_form_9_Template_input_ngModelChange_14_listener($event) { core.ɵɵrestoreView(_r13); var ctx_r15 = core.ɵɵnextContext(); return ctx_r15.userLogin.password = $event; });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(16, LoginComponent_form_9_i_16_Template, 1, 4, "i", 18);
        core.ɵɵtemplate(17, LoginComponent_form_9_span_17_Template, 2, 0, "span", 19);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(18, "div", 23);
        core.ɵɵelementStart(19, "div", 24);
        core.ɵɵelementStart(20, "div", 25);
        core.ɵɵelementStart(21, "input", 26);
        core.ɵɵlistener("ngModelChange", function LoginComponent_form_9_Template_input_ngModelChange_21_listener($event) { core.ɵɵrestoreView(_r13); var ctx_r16 = core.ɵɵnextContext(); return ctx_r16.userLogin.rememberMe = $event; });
        core.ɵɵelementEnd();
        core.ɵɵelementStart(22, "label", 27);
        core.ɵɵtext(23, "Remember me");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(24, "div", 23);
        core.ɵɵelementStart(25, "div", 24);
        core.ɵɵelementStart(26, "button", 28);
        core.ɵɵtemplate(27, LoginComponent_form_9_i_27_Template, 1, 0, "i", 29);
        core.ɵɵtext(28);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r4 = core.ɵɵreference(1);
        var _r5 = core.ɵɵreference(7);
        var _r8 = core.ɵɵreference(15);
        var ctx_r1 = core.ɵɵnextContext();
        core.ɵɵadvance(6);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(12, _c1$8, _r4.submitted && _r5.valid, _r4.submitted && !_r5.valid))("ngModel", ctx_r1.userLogin.userName);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", _r4.submitted);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", _r4.submitted && !_r5.valid);
        core.ɵɵadvance(5);
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction2(15, _c1$8, _r4.submitted && _r8.valid, _r4.submitted && !_r8.valid))("ngModel", ctx_r1.userLogin.password);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", _r4.submitted);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", _r4.submitted && !_r8.valid);
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngModel", ctx_r1.userLogin.rememberMe);
        core.ɵɵadvance(5);
        core.ɵɵproperty("disabled", ctx_r1.isLoading);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1.isLoading);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r1.isLoading ? "Logging in..." : "Login", " ");
    } }
    var LoginComponent = /** @class */ (function () {
        function LoginComponent(alertService, authService, configurations) {
            this.alertService = alertService;
            this.authService = authService;
            this.configurations = configurations;
            this.userLogin = new UserLogin();
            this.isLoading = false;
            this.formResetToggle = true;
            this.isModal = false;
        }
        LoginComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.userLogin.rememberMe = this.authService.rememberMe;
            if (this.getShouldRedirect()) {
                this.authService.redirectLoginUser();
            }
            else {
                this.loginStatusSubscription = this.authService.getLoginStatusEvent().subscribe(function (isLoggedIn) {
                    if (_this.getShouldRedirect()) {
                        _this.authService.redirectLoginUser();
                    }
                });
            }
        };
        LoginComponent.prototype.ngOnDestroy = function () {
            if (this.loginStatusSubscription) {
                this.loginStatusSubscription.unsubscribe();
            }
        };
        LoginComponent.prototype.getShouldRedirect = function () {
            return !this.isModal && this.authService.isLoggedIn && !this.authService.isSessionExpired;
        };
        LoginComponent.prototype.showErrorAlert = function (caption, message) {
            this.alertService.showMessage(caption, message, ngxAppkitContractsAlpha.MessageSeverity.error);
        };
        LoginComponent.prototype.closeModal = function () {
            if (this.modalClosedCallback) {
                this.modalClosedCallback();
            }
        };
        LoginComponent.prototype.login = function () {
            var _this = this;
            this.isLoading = true;
            this.alertService.startLoadingMessage('', 'Attempting login...');
            this.authService.loginWithPassword(this.userLogin.userName, this.userLogin.password, this.userLogin.rememberMe)
                .subscribe(function (user) {
                setTimeout(function () {
                    _this.alertService.stopLoadingMessage();
                    _this.isLoading = false;
                    _this.reset();
                    if (!_this.isModal) {
                        _this.alertService.showMessage('Login', "Welcome " + user.userName + "!", ngxAppkitContractsAlpha.MessageSeverity.success);
                    }
                    else {
                        _this.alertService.showMessage('Login', "Session for " + user.userName + " restored!", ngxAppkitContractsAlpha.MessageSeverity.success);
                        setTimeout(function () {
                            _this.alertService.showStickyMessage('Session Restored', 'Please try your last operation again', ngxAppkitContractsAlpha.MessageSeverity.default);
                        }, 500);
                        _this.closeModal();
                    }
                }, 500);
            }, function (error) {
                _this.alertService.stopLoadingMessage();
                if (ngxAppkitContractsAlpha.Utilities.checkNoNetwork(error)) {
                    _this.alertService.showStickyMessage(ngxAppkitContractsAlpha.Utilities.noNetworkMessageCaption, ngxAppkitContractsAlpha.Utilities.noNetworkMessageDetail, ngxAppkitContractsAlpha.MessageSeverity.error, error);
                    _this.offerAlternateHost();
                }
                else {
                    var errorMessage = ngxAppkitContractsAlpha.Utilities.getHttpResponseMessage(error);
                    if (errorMessage) {
                        _this.alertService.showStickyMessage('Unable to login', _this.mapLoginErrorMessage(errorMessage), ngxAppkitContractsAlpha.MessageSeverity.error, error);
                    }
                    else {
                        _this.alertService.showStickyMessage('Unable to login', 'An error occured whilst logging in, please try again later.\nError: ' + ngxAppkitContractsAlpha.Utilities.getResponseBody(error), ngxAppkitContractsAlpha.MessageSeverity.error, error);
                    }
                }
                setTimeout(function () {
                    _this.isLoading = false;
                }, 500);
            });
        };
        LoginComponent.prototype.offerAlternateHost = function () {
            var _this = this;
            if (ngxAppkitContractsAlpha.Utilities.checkIsLocalHost(location.origin) && ngxAppkitContractsAlpha.Utilities.checkIsLocalHost(this.configurations.baseUrl)) {
                this.alertService.showDialog('Dear Developer!\nIt appears your backend Web API service is not running...\n' +
                    'Would you want to temporarily switch to the online Demo API below?(Or specify another)', ngxAppkitContractsAlpha.DialogType.prompt, function (value) {
                    _this.configurations.baseUrl = value;
                    _this.configurations.tokenUrl = value;
                    _this.alertService.showStickyMessage('API Changed!', 'The target Web API has been changed to: ' + value, ngxAppkitContractsAlpha.MessageSeverity.warn);
                }, null, null, null, this.configurations.fallbackBaseUrl);
            }
        };
        LoginComponent.prototype.mapLoginErrorMessage = function (error) {
            if (error == 'invalid_username_or_password') {
                return 'Invalid username or password';
            }
            if (error == 'invalid_grant') {
                return 'This account has been disabled';
            }
            return error;
        };
        LoginComponent.prototype.reset = function () {
            var _this = this;
            this.formResetToggle = false;
            setTimeout(function () {
                _this.formResetToggle = true;
            });
        };
        /** @nocollapse */ LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.AlertService), core.ɵɵdirectiveInject(ngxOauth2.AuthService), core.ɵɵdirectiveInject(ngxAppkitServicesAlpha.ConfigurationService)); };
        /** @nocollapse */ LoginComponent.ɵcmp = core.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], inputs: { isModal: "isModal" }, decls: 10, vars: 2, consts: [[1, "d-flex", "h-90"], [1, "login-container", "m-auto"], [1, "card", "boxshadow"], [1, "card-header", "bg-primary", "dark", "text-white", "clearfix"], ["aria-hidden", "true", 1, "fa", "fa-lock"], ["type", "button", "class", "close float-right text-light", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "card-body"], [1, "col-md-8", "offset-md-2"], ["class", "login", "name", "loginForm", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", "float-right", "text-light", 3, "click"], ["aria-hidden", "true"], ["name", "loginForm", "novalidate", "", 1, "login", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "row", "has-feedback-icon"], ["for", "login-username", 1, "col-form-label", "col-md-3"], [1, "col-md-9"], ["type", "text", "id", "login-username", "name", "username", "placeholder", "Enter username", "autocomplete", "username", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "fa form-control-feedback", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "login-password", 1, "col-form-label", "col-md-3"], ["type", "password", "id", "login-password", "name", "password", "placeholder", "Enter password", "autocomplete", "current-password", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "form-group", "row"], [1, "offset-md-3", "col-md-9"], [1, "form-check"], ["type", "checkbox", "id", "login-rememberme", "name", "rememberMe", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "login-rememberme", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "form-control-feedback", 3, "ngClass"], [1, "invalid-feedback"], [1, "fa", "fa-circle-o-notch", "fa-spin"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "div", 1);
                core.ɵɵelementStart(2, "div", 2);
                core.ɵɵelementStart(3, "div", 3);
                core.ɵɵelement(4, "i", 4);
                core.ɵɵtext(5, " Login ");
                core.ɵɵtemplate(6, LoginComponent_button_6_Template, 3, 0, "button", 5);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(7, "div", 6);
                core.ɵɵelementStart(8, "div", 7);
                core.ɵɵtemplate(9, LoginComponent_form_9_Template, 29, 18, "form", 8);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(6);
                core.ɵɵproperty("ngIf", ctx.isModal);
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngIf", ctx.formResetToggle);
            } }, directives: [common.NgIf, forms.ɵangular_packages_forms_forms_y, forms.NgControlStatusGroup, forms.NgForm, forms.DefaultValueAccessor, forms.RequiredValidator, common.NgClass, forms.NgControlStatus, forms.NgModel, forms.CheckboxControlValueAccessor], styles: [".boxshadow[_ngcontent-%COMP%]{position:relative;box-shadow:1px 2px 4px rgba(0,0,0,.5);padding:10px;background:#fff}.boxshadow[_ngcontent-%COMP%]::after{content:\"\";position:absolute;z-index:-1;box-shadow:0 15px 20px rgba(0,0,0,.3);width:70%;left:15%;height:100px;bottom:0}.cardshadow[_ngcontent-%COMP%]{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.last-control-group[_ngcontent-%COMP%]{margin-bottom:-.75rem}.h-90[_ngcontent-%COMP%]{height:90%}@media (min-width:768px){.login-container[_ngcontent-%COMP%]{width:700px}}@media (min-width:1200px){.login-container[_ngcontent-%COMP%]{width:730px}}"] });
        return LoginComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(LoginComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-login',
                    templateUrl: './login.component.html',
                    styleUrls: ['./login.component.scss']
                }]
        }], function () { return [{ type: ngxAppkitServicesAlpha.AlertService }, { type: ngxOauth2.AuthService }, { type: ngxAppkitServicesAlpha.ConfigurationService }]; }, { isModal: [{
                type: core.Input
            }] }); })();

    var DependencyModule = /** @class */ (function () {
        function DependencyModule() {
        }
        /** @nocollapse */ DependencyModule.ɵmod = core.ɵɵdefineNgModule({ type: DependencyModule });
        /** @nocollapse */ DependencyModule.ɵinj = core.ɵɵdefineInjector({ factory: function DependencyModule_Factory(t) { return new (t || DependencyModule)(); }, providers: [], imports: [[],
                common.CommonModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                router.RouterModule,
                // Bootstrap, Note that we have imported them in the
                // core modules (and they are only imported once)
                dropdown.BsDropdownModule,
                tabs.TabsModule,
                pagination.PaginationModule,
                modal.ModalModule,
                accordion.AccordionModule,
                popover.PopoverModule,
                tooltip.TooltipModule,
                carousel.CarouselModule,
                alert.AlertModule,
                core$1.TranslateModule,
                ngxDatatable.NgxDatatableModule,
                ng2Charts.ChartsModule] });
        return DependencyModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(DependencyModule, { exports: [common.CommonModule,
            forms.FormsModule,
            forms.ReactiveFormsModule,
            router.RouterModule,
            // Bootstrap, Note that we have imported them in the
            // core modules (and they are only imported once)
            dropdown.BsDropdownModule,
            tabs.TabsModule,
            pagination.PaginationModule,
            modal.ModalModule,
            accordion.AccordionModule,
            popover.PopoverModule,
            tooltip.TooltipModule,
            carousel.CarouselModule,
            alert.AlertModule,
            core$1.TranslateModule,
            ngxDatatable.NgxDatatableModule,
            ng2Charts.ChartsModule] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DependencyModule, [{
            type: core.NgModule,
            args: [{
                    imports: [],
                    declarations: [],
                    exports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        router.RouterModule,
                        // Bootstrap, Note that we have imported them in the
                        // core modules (and they are only imported once)
                        dropdown.BsDropdownModule,
                        tabs.TabsModule,
                        pagination.PaginationModule,
                        modal.ModalModule,
                        accordion.AccordionModule,
                        popover.PopoverModule,
                        tooltip.TooltipModule,
                        carousel.CarouselModule,
                        alert.AlertModule,
                        core$1.TranslateModule,
                        ngxDatatable.NgxDatatableModule,
                        ng2Charts.ChartsModule
                    ],
                    providers: [],
                    entryComponents: []
                }]
        }], null, null); })();

    var NgxAppkitStarterAlphaModule = /** @class */ (function () {
        function NgxAppkitStarterAlphaModule(parentModule) {
            if (parentModule) {
                throw new Error('NgxAppkitStarterAlphaModule is already loaded. Import it in the AppModule only');
            }
        }
        NgxAppkitStarterAlphaModule.forRoot = function () {
            return {
                ngModule: NgxAppkitStarterAlphaModule,
                providers: []
            };
        };
        /** @nocollapse */ NgxAppkitStarterAlphaModule.ɵmod = core.ɵɵdefineNgModule({ type: NgxAppkitStarterAlphaModule });
        /** @nocollapse */ NgxAppkitStarterAlphaModule.ɵinj = core.ɵɵdefineInjector({ factory: function NgxAppkitStarterAlphaModule_Factory(t) { return new (t || NgxAppkitStarterAlphaModule)(core.ɵɵinject(NgxAppkitStarterAlphaModule, 12)); }, providers: [
                // Services
                AppTitleService,
                NotificationService,
                NotificationEndpoint,
                AccountService,
                AccountEndpoint,
                AlertServiceProvider,
                ThemeManagerProvider,
                ConfigurationServiceProvider,
                LocalStoreManagerProvider,
                TranslationServiceProvider,
                { provide: ngxAppkitContractsAlpha.AlertServiceAbstractProvider, useClass: AlertServiceProvider },
                { provide: ngxAppkitContractsAlpha.ThemeManagerAbstractProvider, useClass: ThemeManagerProvider },
                { provide: ngxAppkitContractsAlpha.ConfigurationServiceAbstractProvider, useClass: ConfigurationServiceProvider },
                { provide: ngxAppkitContractsAlpha.LocalStoreManagerServiceAbstractProvider, useClass: LocalStoreManagerProvider },
                { provide: ngxAppkitContractsAlpha.TranslationServiceAbstractProvider, useClass: TranslationServiceProvider }
            ], imports: [[
                    DependencyModule
                ]] });
        return NgxAppkitStarterAlphaModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NgxAppkitStarterAlphaModule, { declarations: [EqualValidator,
            LastElementDirective,
            AutofocusDirective,
            BootstrapTabDirective,
            BootstrapToggleDirective,
            BootstrapSelectDirective,
            BootstrapDatepickerDirective,
            GroupByPipe,
            UsersManagementComponent,
            UserInfoComponent,
            UserPreferencesComponent,
            RolesManagementComponent,
            RoleEditorComponent,
            NotificationsViewerComponent,
            SearchBoxComponent,
            StatisticsDemoComponent,
            TodoDemoComponent,
            LoginComponent,
            SettingsComponent,
            NotFoundComponent], imports: [DependencyModule], exports: [EqualValidator,
            LastElementDirective,
            AutofocusDirective,
            BootstrapTabDirective,
            BootstrapToggleDirective,
            BootstrapSelectDirective,
            BootstrapDatepickerDirective,
            GroupByPipe,
            UsersManagementComponent,
            UserInfoComponent,
            UserPreferencesComponent,
            RolesManagementComponent,
            RoleEditorComponent,
            NotificationsViewerComponent,
            SearchBoxComponent,
            StatisticsDemoComponent,
            TodoDemoComponent,
            LoginComponent,
            SettingsComponent,
            NotFoundComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NgxAppkitStarterAlphaModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [
                        EqualValidator,
                        LastElementDirective,
                        AutofocusDirective,
                        BootstrapTabDirective,
                        BootstrapToggleDirective,
                        BootstrapSelectDirective,
                        BootstrapDatepickerDirective,
                        GroupByPipe,
                        UsersManagementComponent,
                        UserInfoComponent,
                        UserPreferencesComponent,
                        RolesManagementComponent,
                        RoleEditorComponent,
                        NotificationsViewerComponent,
                        SearchBoxComponent,
                        StatisticsDemoComponent,
                        TodoDemoComponent,
                        LoginComponent,
                        SettingsComponent,
                        NotFoundComponent
                    ],
                    imports: [
                        DependencyModule
                    ],
                    exports: [
                        EqualValidator,
                        LastElementDirective,
                        AutofocusDirective,
                        BootstrapTabDirective,
                        BootstrapToggleDirective,
                        BootstrapSelectDirective,
                        BootstrapDatepickerDirective,
                        GroupByPipe,
                        UsersManagementComponent,
                        UserInfoComponent,
                        UserPreferencesComponent,
                        RolesManagementComponent,
                        RoleEditorComponent,
                        NotificationsViewerComponent,
                        SearchBoxComponent,
                        StatisticsDemoComponent,
                        TodoDemoComponent,
                        LoginComponent,
                        SettingsComponent,
                        NotFoundComponent
                    ],
                    providers: [
                        // Services
                        AppTitleService,
                        NotificationService,
                        NotificationEndpoint,
                        AccountService,
                        AccountEndpoint,
                        AlertServiceProvider,
                        ThemeManagerProvider,
                        ConfigurationServiceProvider,
                        LocalStoreManagerProvider,
                        TranslationServiceProvider,
                        { provide: ngxAppkitContractsAlpha.AlertServiceAbstractProvider, useClass: AlertServiceProvider },
                        { provide: ngxAppkitContractsAlpha.ThemeManagerAbstractProvider, useClass: ThemeManagerProvider },
                        { provide: ngxAppkitContractsAlpha.ConfigurationServiceAbstractProvider, useClass: ConfigurationServiceProvider },
                        { provide: ngxAppkitContractsAlpha.LocalStoreManagerServiceAbstractProvider, useClass: LocalStoreManagerProvider },
                        { provide: ngxAppkitContractsAlpha.TranslationServiceAbstractProvider, useClass: TranslationServiceProvider }
                    ],
                    entryComponents: [
                        LoginComponent
                    ]
                }]
        }], function () { return [{ type: NgxAppkitStarterAlphaModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }]; }, null); })();

    exports.AccountEndpoint = AccountEndpoint;
    exports.AccountService = AccountService;
    exports.AlertServiceProvider = AlertServiceProvider;
    exports.AppTitleService = AppTitleService;
    exports.AutofocusDirective = AutofocusDirective;
    exports.BootstrapDatepickerDirective = BootstrapDatepickerDirective;
    exports.BootstrapSelectDirective = BootstrapSelectDirective;
    exports.BootstrapTabDirective = BootstrapTabDirective;
    exports.BootstrapToggleDirective = BootstrapToggleDirective;
    exports.ConfigurationServiceProvider = ConfigurationServiceProvider;
    exports.DependencyModule = DependencyModule;
    exports.EqualValidator = EqualValidator;
    exports.GroupByPipe = GroupByPipe;
    exports.LastElementDirective = LastElementDirective;
    exports.LocalStoreManagerProvider = LocalStoreManagerProvider;
    exports.LoginComponent = LoginComponent;
    exports.NgxAppkitStarterAlphaModule = NgxAppkitStarterAlphaModule;
    exports.NotFoundComponent = NotFoundComponent;
    exports.Notification = Notification;
    exports.NotificationEndpoint = NotificationEndpoint;
    exports.NotificationService = NotificationService;
    exports.NotificationsViewerComponent = NotificationsViewerComponent;
    exports.Role = Role;
    exports.RoleEditorComponent = RoleEditorComponent;
    exports.RolesManagementComponent = RolesManagementComponent;
    exports.SearchBoxComponent = SearchBoxComponent;
    exports.SettingsComponent = SettingsComponent;
    exports.StatisticsDemoComponent = StatisticsDemoComponent;
    exports.ThemeManagerProvider = ThemeManagerProvider;
    exports.TodoDemoComponent = TodoDemoComponent;
    exports.TranslationServiceProvider = TranslationServiceProvider;
    exports.UserEdit = UserEdit;
    exports.UserInfoComponent = UserInfoComponent;
    exports.UserLogin = UserLogin;
    exports.UserPreferencesComponent = UserPreferencesComponent;
    exports.UsersManagementComponent = UsersManagementComponent;
    exports.fadeInOut = fadeInOut;
    exports.flyInOut = flyInOut;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-appkit-starter-alpha.umd.js.map
