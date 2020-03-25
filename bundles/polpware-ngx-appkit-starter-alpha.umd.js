(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@polpware/ngx-appkit-contracts-alpha'), require('@polpware/ngx-oauth2'), require('@angular/animations'), require('@angular/core'), require('@polpware/ngx-appkit-services-alpha'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http'), require('@angular/router'), require('@angular/platform-browser'), require('ngx-bootstrap/modal'), require('@angular/common'), require('@angular/forms'), require('ngx-bootstrap/dropdown'), require('ngx-bootstrap/tabs'), require('ngx-bootstrap/pagination'), require('ngx-bootstrap/tooltip'), require('ngx-bootstrap/accordion'), require('ngx-bootstrap/popover'), require('ngx-bootstrap/carousel'), require('ngx-bootstrap/alert'), require('@ngx-translate/core'), require('@swimlane/ngx-datatable'), require('ng2-charts')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-appkit-starter-alpha', ['exports', '@polpware/ngx-appkit-contracts-alpha', '@polpware/ngx-oauth2', '@angular/animations', '@angular/core', '@polpware/ngx-appkit-services-alpha', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/router', '@angular/platform-browser', 'ngx-bootstrap/modal', '@angular/common', '@angular/forms', 'ngx-bootstrap/dropdown', 'ngx-bootstrap/tabs', 'ngx-bootstrap/pagination', 'ngx-bootstrap/tooltip', 'ngx-bootstrap/accordion', 'ngx-bootstrap/popover', 'ngx-bootstrap/carousel', 'ngx-bootstrap/alert', '@ngx-translate/core', '@swimlane/ngx-datatable', 'ng2-charts'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-appkit-starter-alpha'] = {}), global.ngxAppkitContractsAlpha, global.ngxOauth2, global.ng.animations, global.ng.core, global.ngxAppkitServicesAlpha, global.rxjs, global.rxjs.operators, global.ng.common.http, global.ng.router, global.ng.platformBrowser, global.modal, global.ng.common, global.ng.forms, global.dropdown, global.tabs, global.pagination, global.tooltip, global.accordion, global.popover, global.carousel, global.alert, global.core$1, global.ngxDatatable, global.ng2Charts));
}(this, (function (exports, ngxAppkitContractsAlpha, ngxOauth2, animations, core, ngxAppkitServicesAlpha, rxjs, operators, http, router, platformBrowser, modal, common, forms, dropdown, tabs, pagination, tooltip, accordion, popover, carousel, alert, core$1, ngxDatatable, ng2Charts) { 'use strict';

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

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/notification.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Notification = /** @class */ (function () {
        function Notification() {
        }
        /**
         * @param {?} data
         * @return {?}
         */
        Notification.Create = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var n = new Notification();
            Object.assign(n, data);
            if (n.date) {
                n.date = ngxAppkitContractsAlpha.Utilities.parseDate(n.date);
            }
            return n;
        };
        return Notification;
    }());
    if (false) {
        /** @type {?} */
        Notification.prototype.id;
        /** @type {?} */
        Notification.prototype.header;
        /** @type {?} */
        Notification.prototype.body;
        /** @type {?} */
        Notification.prototype.isRead;
        /** @type {?} */
        Notification.prototype.isPinned;
        /** @type {?} */
        Notification.prototype.date;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/role.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
    if (false) {
        /** @type {?} */
        Role.prototype.id;
        /** @type {?} */
        Role.prototype.name;
        /** @type {?} */
        Role.prototype.description;
        /** @type {?} */
        Role.prototype.usersCount;
        /** @type {?} */
        Role.prototype.permissions;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/user-edit.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
    if (false) {
        /** @type {?} */
        UserEdit.prototype.currentPassword;
        /** @type {?} */
        UserEdit.prototype.newPassword;
        /** @type {?} */
        UserEdit.prototype.confirmPassword;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/enums.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // =============================
    // Email: info@ebenmonney.com
    // www.ebenmonney.com/templates
    // =============================
    /** @enum {number} */
    var Gender = {
        None: 0,
        Female: 1,
        Male: 2,
    };
    Gender[Gender.None] = 'None';
    Gender[Gender.Female] = 'Female';
    Gender[Gender.Male] = 'Male';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/user-login.model.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
    if (false) {
        /** @type {?} */
        UserLogin.prototype.userName;
        /** @type {?} */
        UserLogin.prototype.password;
        /** @type {?} */
        UserLogin.prototype.rememberMe;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var fadeInOut = animations.trigger('fadeInOut', [
        animations.transition(':enter', [animations.style({ opacity: 0 }), animations.animate('0.4s ease-in', animations.style({ opacity: 1 }))]),
        animations.transition(':leave', [animations.animate('0.4s 10ms ease-out', animations.style({ opacity: 0 }))])
    ]);
    /**
     * @param {?=} duration
     * @return {?}
     */
    function flyInOut(duration) {
        if (duration === void 0) { duration = 0.2; }
        return animations.trigger('flyInOut', [
            animations.state('in', animations.style({ opacity: 1, transform: 'translateX(0)' })),
            animations.transition('void => *', [animations.style({ opacity: 0, transform: 'translateX(-100%)' }), animations.animate(duration + "s ease-in")]),
            animations.transition('* => void', [animations.animate(duration + "s 10ms ease-out", animations.style({ opacity: 0, transform: 'translateX(100%)' }))])
        ]);
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/configuration.service-provider.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfigurationServiceProvider = /** @class */ (function (_super) {
        __extends(ConfigurationServiceProvider, _super);
        function ConfigurationServiceProvider(impl) {
            var _this = _super.call(this) || this;
            _this.impl = impl;
            return _this;
        }
        /**
         * @return {?}
         */
        ConfigurationServiceProvider.prototype.get = /**
         * @return {?}
         */
        function () {
            return this.impl;
        };
        ConfigurationServiceProvider.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ConfigurationServiceProvider.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.ConfigurationService }
        ]; };
        return ConfigurationServiceProvider;
    }(ngxAppkitContractsAlpha.ConfigurationServiceAbstractProvider));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ConfigurationServiceProvider.prototype.impl;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/theme-manager.provider.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ThemeManagerProvider = /** @class */ (function (_super) {
        __extends(ThemeManagerProvider, _super);
        function ThemeManagerProvider(impl) {
            var _this = _super.call(this) || this;
            _this.impl = impl;
            return _this;
        }
        /**
         * @return {?}
         */
        ThemeManagerProvider.prototype.get = /**
         * @return {?}
         */
        function () {
            return this.impl;
        };
        ThemeManagerProvider.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ThemeManagerProvider.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.ThemeManager }
        ]; };
        return ThemeManagerProvider;
    }(ngxAppkitContractsAlpha.ThemeManagerAbstractProvider));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ThemeManagerProvider.prototype.impl;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/account-endpoint.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            get: /**
             * @return {?}
             */
            function () { return this.configurations.baseUrl + this._usersUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountEndpoint.prototype, "userByUserNameUrl", {
            get: /**
             * @return {?}
             */
            function () { return this.configurations.baseUrl + this._userByUserNameUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountEndpoint.prototype, "currentUserUrl", {
            get: /**
             * @return {?}
             */
            function () { return this.configurations.baseUrl + this._currentUserUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountEndpoint.prototype, "currentUserPreferencesUrl", {
            get: /**
             * @return {?}
             */
            function () { return this.configurations.baseUrl + this._currentUserPreferencesUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountEndpoint.prototype, "unblockUserUrl", {
            get: /**
             * @return {?}
             */
            function () { return this.configurations.baseUrl + this._unblockUserUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountEndpoint.prototype, "rolesUrl", {
            get: /**
             * @return {?}
             */
            function () { return this.configurations.baseUrl + this._rolesUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountEndpoint.prototype, "roleByRoleNameUrl", {
            get: /**
             * @return {?}
             */
            function () { return this.configurations.baseUrl + this._roleByRoleNameUrl; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountEndpoint.prototype, "permissionsUrl", {
            get: /**
             * @return {?}
             */
            function () { return this.configurations.baseUrl + this._permissionsUrl; },
            enumerable: true,
            configurable: true
        });
        /**
         * @template T
         * @param {?=} userId
         * @return {?}
         */
        AccountEndpoint.prototype.getUserEndpoint = /**
         * @template T
         * @param {?=} userId
         * @return {?}
         */
        function (userId) {
            var _this = this;
            /** @type {?} */
            var endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
            return this.http.get(endpointUrl, this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getUserEndpoint(userId); }));
            })));
        };
        /**
         * @template T
         * @param {?} userName
         * @return {?}
         */
        AccountEndpoint.prototype.getUserByUserNameEndpoint = /**
         * @template T
         * @param {?} userName
         * @return {?}
         */
        function (userName) {
            var _this = this;
            /** @type {?} */
            var endpointUrl = this.userByUserNameUrl + "/" + userName;
            return this.http.get(endpointUrl, this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getUserByUserNameEndpoint(userName); }));
            })));
        };
        /**
         * @template T
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        AccountEndpoint.prototype.getUsersEndpoint = /**
         * @template T
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (page, pageSize) {
            var _this = this;
            /** @type {?} */
            var endpointUrl = page && pageSize ? this.usersUrl + "/" + page + "/" + pageSize : this.usersUrl;
            return this.http.get(endpointUrl, this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getUsersEndpoint(page, pageSize); }));
            })));
        };
        /**
         * @template T
         * @param {?} userObject
         * @return {?}
         */
        AccountEndpoint.prototype.getNewUserEndpoint = /**
         * @template T
         * @param {?} userObject
         * @return {?}
         */
        function (userObject) {
            var _this = this;
            return this.http.post(this.usersUrl, JSON.stringify(userObject), this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getNewUserEndpoint(userObject); }));
            })));
        };
        /**
         * @template T
         * @param {?} userObject
         * @param {?=} userId
         * @return {?}
         */
        AccountEndpoint.prototype.getUpdateUserEndpoint = /**
         * @template T
         * @param {?} userObject
         * @param {?=} userId
         * @return {?}
         */
        function (userObject, userId) {
            var _this = this;
            /** @type {?} */
            var endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
            return this.http.put(endpointUrl, JSON.stringify(userObject), this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getUpdateUserEndpoint(userObject, userId); }));
            })));
        };
        /**
         * @template T
         * @param {?} valueOrPatch
         * @param {?=} opOrUserId
         * @param {?=} path
         * @param {?=} from
         * @param {?=} userId
         * @return {?}
         */
        AccountEndpoint.prototype.getPatchUpdateUserEndpoint = /**
         * @template T
         * @param {?} valueOrPatch
         * @param {?=} opOrUserId
         * @param {?=} path
         * @param {?=} from
         * @param {?=} userId
         * @return {?}
         */
        function (valueOrPatch, opOrUserId, path, from, userId) {
            var _this = this;
            /** @type {?} */
            var endpointUrl;
            /** @type {?} */
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
            return this.http.patch(endpointUrl, JSON.stringify(patchDocument), this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getPatchUpdateUserEndpoint(valueOrPatch, opOrUserId, path, from, userId); }));
            })));
        };
        /**
         * @template T
         * @return {?}
         */
        AccountEndpoint.prototype.getUserPreferencesEndpoint = /**
         * @template T
         * @return {?}
         */
        function () {
            var _this = this;
            return this.http.get(this.currentUserPreferencesUrl, this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getUserPreferencesEndpoint(); }));
            })));
        };
        /**
         * @template T
         * @param {?} configuration
         * @return {?}
         */
        AccountEndpoint.prototype.getUpdateUserPreferencesEndpoint = /**
         * @template T
         * @param {?} configuration
         * @return {?}
         */
        function (configuration) {
            var _this = this;
            return this.http.put(this.currentUserPreferencesUrl, JSON.stringify(configuration), this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getUpdateUserPreferencesEndpoint(configuration); }));
            })));
        };
        /**
         * @template T
         * @param {?} userId
         * @return {?}
         */
        AccountEndpoint.prototype.getUnblockUserEndpoint = /**
         * @template T
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            var _this = this;
            /** @type {?} */
            var endpointUrl = this.unblockUserUrl + "/" + userId;
            return this.http.put(endpointUrl, null, this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getUnblockUserEndpoint(userId); }));
            })));
        };
        /**
         * @template T
         * @param {?} userId
         * @return {?}
         */
        AccountEndpoint.prototype.getDeleteUserEndpoint = /**
         * @template T
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            var _this = this;
            /** @type {?} */
            var endpointUrl = this.usersUrl + "/" + userId;
            return this.http.delete(endpointUrl, this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getDeleteUserEndpoint(userId); }));
            })));
        };
        /**
         * @template T
         * @param {?} roleId
         * @return {?}
         */
        AccountEndpoint.prototype.getRoleEndpoint = /**
         * @template T
         * @param {?} roleId
         * @return {?}
         */
        function (roleId) {
            var _this = this;
            /** @type {?} */
            var endpointUrl = this.rolesUrl + "/" + roleId;
            return this.http.get(endpointUrl, this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getRoleEndpoint(roleId); }));
            })));
        };
        /**
         * @template T
         * @param {?} roleName
         * @return {?}
         */
        AccountEndpoint.prototype.getRoleByRoleNameEndpoint = /**
         * @template T
         * @param {?} roleName
         * @return {?}
         */
        function (roleName) {
            var _this = this;
            /** @type {?} */
            var endpointUrl = this.roleByRoleNameUrl + "/" + roleName;
            return this.http.get(endpointUrl, this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getRoleByRoleNameEndpoint(roleName); }));
            })));
        };
        /**
         * @template T
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        AccountEndpoint.prototype.getRolesEndpoint = /**
         * @template T
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (page, pageSize) {
            var _this = this;
            /** @type {?} */
            var endpointUrl = page && pageSize ? this.rolesUrl + "/" + page + "/" + pageSize : this.rolesUrl;
            return this.http.get(endpointUrl, this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getRolesEndpoint(page, pageSize); }));
            })));
        };
        /**
         * @template T
         * @param {?} roleObject
         * @return {?}
         */
        AccountEndpoint.prototype.getNewRoleEndpoint = /**
         * @template T
         * @param {?} roleObject
         * @return {?}
         */
        function (roleObject) {
            var _this = this;
            return this.http.post(this.rolesUrl, JSON.stringify(roleObject), this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getNewRoleEndpoint(roleObject); }));
            })));
        };
        /**
         * @template T
         * @param {?} roleObject
         * @param {?} roleId
         * @return {?}
         */
        AccountEndpoint.prototype.getUpdateRoleEndpoint = /**
         * @template T
         * @param {?} roleObject
         * @param {?} roleId
         * @return {?}
         */
        function (roleObject, roleId) {
            var _this = this;
            /** @type {?} */
            var endpointUrl = this.rolesUrl + "/" + roleId;
            return this.http.put(endpointUrl, JSON.stringify(roleObject), this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getUpdateRoleEndpoint(roleObject, roleId); }));
            })));
        };
        /**
         * @template T
         * @param {?} roleId
         * @return {?}
         */
        AccountEndpoint.prototype.getDeleteRoleEndpoint = /**
         * @template T
         * @param {?} roleId
         * @return {?}
         */
        function (roleId) {
            var _this = this;
            /** @type {?} */
            var endpointUrl = this.rolesUrl + "/" + roleId;
            return this.http.delete(endpointUrl, this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getDeleteRoleEndpoint(roleId); }));
            })));
        };
        /**
         * @template T
         * @return {?}
         */
        AccountEndpoint.prototype.getPermissionsEndpoint = /**
         * @template T
         * @return {?}
         */
        function () {
            var _this = this;
            return this.http.get(this.permissionsUrl, this.requestHeaders).pipe(operators.catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return _this.handleError(error, (/**
                 * @return {?}
                 */
                function () { return _this.getPermissionsEndpoint(); }));
            })));
        };
        AccountEndpoint.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AccountEndpoint.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.ConfigurationService },
            { type: http.HttpClient },
            { type: ngxOauth2.AuthService }
        ]; };
        return AccountEndpoint;
    }(ngxOauth2.EndpointBase));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AccountEndpoint.prototype._usersUrl;
        /**
         * @type {?}
         * @private
         */
        AccountEndpoint.prototype._userByUserNameUrl;
        /**
         * @type {?}
         * @private
         */
        AccountEndpoint.prototype._currentUserUrl;
        /**
         * @type {?}
         * @private
         */
        AccountEndpoint.prototype._currentUserPreferencesUrl;
        /**
         * @type {?}
         * @private
         */
        AccountEndpoint.prototype._unblockUserUrl;
        /**
         * @type {?}
         * @private
         */
        AccountEndpoint.prototype._rolesUrl;
        /**
         * @type {?}
         * @private
         */
        AccountEndpoint.prototype._roleByRoleNameUrl;
        /**
         * @type {?}
         * @private
         */
        AccountEndpoint.prototype._permissionsUrl;
        /**
         * @type {?}
         * @private
         */
        AccountEndpoint.prototype.configurations;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/account.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function RolesChangedEventArg() { }
    if (false) {
        /** @type {?} */
        RolesChangedEventArg.prototype.roles;
        /** @type {?} */
        RolesChangedEventArg.prototype.operation;
    }
    var AccountService = /** @class */ (function () {
        function AccountService(authService, accountEndpoint) {
            this.authService = authService;
            this.accountEndpoint = accountEndpoint;
            this._rolesChanged = new rxjs.Subject();
        }
        /**
         * @param {?=} userId
         * @return {?}
         */
        AccountService.prototype.getUser = /**
         * @param {?=} userId
         * @return {?}
         */
        function (userId) {
            return this.accountEndpoint.getUserEndpoint(userId);
        };
        /**
         * @param {?=} userId
         * @return {?}
         */
        AccountService.prototype.getUserAndRoles = /**
         * @param {?=} userId
         * @return {?}
         */
        function (userId) {
            return rxjs.forkJoin(this.accountEndpoint.getUserEndpoint(userId), this.accountEndpoint.getRolesEndpoint());
        };
        /**
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        AccountService.prototype.getUsers = /**
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (page, pageSize) {
            return this.accountEndpoint.getUsersEndpoint(page, pageSize);
        };
        /**
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        AccountService.prototype.getUsersAndRoles = /**
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (page, pageSize) {
            return rxjs.forkJoin(this.accountEndpoint.getUsersEndpoint(page, pageSize), this.accountEndpoint.getRolesEndpoint());
        };
        /**
         * @param {?} user
         * @return {?}
         */
        AccountService.prototype.updateUser = /**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            var _this = this;
            if (user.id) {
                return this.accountEndpoint.getUpdateUserEndpoint(user, user.id);
            }
            else {
                return this.accountEndpoint.getUserByUserNameEndpoint(user.userName).pipe(operators.mergeMap((/**
                 * @param {?} foundUser
                 * @return {?}
                 */
                function (foundUser) {
                    user.id = foundUser.id;
                    return _this.accountEndpoint.getUpdateUserEndpoint(user, user.id);
                })));
            }
        };
        /**
         * @param {?} user
         * @return {?}
         */
        AccountService.prototype.newUser = /**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            return this.accountEndpoint.getNewUserEndpoint(user);
        };
        /**
         * @return {?}
         */
        AccountService.prototype.getUserPreferences = /**
         * @return {?}
         */
        function () {
            return this.accountEndpoint.getUserPreferencesEndpoint();
        };
        /**
         * @param {?} configuration
         * @return {?}
         */
        AccountService.prototype.updateUserPreferences = /**
         * @param {?} configuration
         * @return {?}
         */
        function (configuration) {
            return this.accountEndpoint.getUpdateUserPreferencesEndpoint(configuration);
        };
        /**
         * @param {?} userOrUserId
         * @return {?}
         */
        AccountService.prototype.deleteUser = /**
         * @param {?} userOrUserId
         * @return {?}
         */
        function (userOrUserId) {
            var _this = this;
            if (typeof userOrUserId === 'string' || userOrUserId instanceof String) {
                return this.accountEndpoint.getDeleteUserEndpoint((/** @type {?} */ (userOrUserId))).pipe(operators.tap((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return _this.onRolesUserCountChanged(data.roles); })));
            }
            else {
                if (userOrUserId.id) {
                    return this.deleteUser(userOrUserId.id);
                }
                else {
                    return this.accountEndpoint.getUserByUserNameEndpoint(userOrUserId.userName).pipe(operators.mergeMap((/**
                     * @param {?} user
                     * @return {?}
                     */
                    function (user) { return _this.deleteUser(user.id); })));
                }
            }
        };
        /**
         * @param {?} userId
         * @return {?}
         */
        AccountService.prototype.unblockUser = /**
         * @param {?} userId
         * @return {?}
         */
        function (userId) {
            return this.accountEndpoint.getUnblockUserEndpoint(userId);
        };
        /**
         * @param {?} permissionValue
         * @return {?}
         */
        AccountService.prototype.userHasPermission = /**
         * @param {?} permissionValue
         * @return {?}
         */
        function (permissionValue) {
            return this.permissions.some((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p == permissionValue; }));
        };
        /**
         * @return {?}
         */
        AccountService.prototype.refreshLoggedInUser = /**
         * @return {?}
         */
        function () {
            return this.accountEndpoint.refreshLogin();
        };
        /**
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        AccountService.prototype.getRoles = /**
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (page, pageSize) {
            return this.accountEndpoint.getRolesEndpoint(page, pageSize);
        };
        /**
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        AccountService.prototype.getRolesAndPermissions = /**
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (page, pageSize) {
            return rxjs.forkJoin(this.accountEndpoint.getRolesEndpoint(page, pageSize), this.accountEndpoint.getPermissionsEndpoint());
        };
        /**
         * @param {?} role
         * @return {?}
         */
        AccountService.prototype.updateRole = /**
         * @param {?} role
         * @return {?}
         */
        function (role) {
            var _this = this;
            if (role.id) {
                return this.accountEndpoint.getUpdateRoleEndpoint(role, role.id).pipe(operators.tap((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return _this.onRolesChanged([role], AccountService.roleModifiedOperation); })));
            }
            else {
                return this.accountEndpoint.getRoleByRoleNameEndpoint(role.name).pipe(operators.mergeMap((/**
                 * @param {?} foundRole
                 * @return {?}
                 */
                function (foundRole) {
                    role.id = foundRole.id;
                    return _this.accountEndpoint.getUpdateRoleEndpoint(role, role.id);
                })), operators.tap((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return _this.onRolesChanged([role], AccountService.roleModifiedOperation); })));
            }
        };
        /**
         * @param {?} role
         * @return {?}
         */
        AccountService.prototype.newRole = /**
         * @param {?} role
         * @return {?}
         */
        function (role) {
            var _this = this;
            return this.accountEndpoint.getNewRoleEndpoint(role).pipe(operators.tap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.onRolesChanged([role], AccountService.roleAddedOperation); })));
        };
        /**
         * @param {?} roleOrRoleId
         * @return {?}
         */
        AccountService.prototype.deleteRole = /**
         * @param {?} roleOrRoleId
         * @return {?}
         */
        function (roleOrRoleId) {
            var _this = this;
            if (typeof roleOrRoleId === 'string' || roleOrRoleId instanceof String) {
                return this.accountEndpoint.getDeleteRoleEndpoint((/** @type {?} */ (roleOrRoleId))).pipe(operators.tap((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return _this.onRolesChanged([data], AccountService.roleDeletedOperation); })));
            }
            else {
                if (roleOrRoleId.id) {
                    return this.deleteRole(roleOrRoleId.id);
                }
                else {
                    return this.accountEndpoint.getRoleByRoleNameEndpoint(roleOrRoleId.name).pipe(operators.mergeMap((/**
                     * @param {?} role
                     * @return {?}
                     */
                    function (role) { return _this.deleteRole(role.id); })));
                }
            }
        };
        /**
         * @return {?}
         */
        AccountService.prototype.getPermissions = /**
         * @return {?}
         */
        function () {
            return this.accountEndpoint.getPermissionsEndpoint();
        };
        /**
         * @private
         * @param {?} roles
         * @param {?} op
         * @return {?}
         */
        AccountService.prototype.onRolesChanged = /**
         * @private
         * @param {?} roles
         * @param {?} op
         * @return {?}
         */
        function (roles, op) {
            this._rolesChanged.next({ roles: roles, operation: op });
        };
        /**
         * @param {?} roles
         * @return {?}
         */
        AccountService.prototype.onRolesUserCountChanged = /**
         * @param {?} roles
         * @return {?}
         */
        function (roles) {
            return this.onRolesChanged(roles, AccountService.roleModifiedOperation);
        };
        /**
         * @return {?}
         */
        AccountService.prototype.getRolesChangedEvent = /**
         * @return {?}
         */
        function () {
            return this._rolesChanged.asObservable();
        };
        Object.defineProperty(AccountService.prototype, "permissions", {
            get: /**
             * @return {?}
             */
            function () {
                return this.authService.userPermissions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AccountService.prototype, "currentUser", {
            get: /**
             * @return {?}
             */
            function () {
                return this.authService.currentUser;
            },
            enumerable: true,
            configurable: true
        });
        AccountService.roleAddedOperation = 'add';
        AccountService.roleDeletedOperation = 'delete';
        AccountService.roleModifiedOperation = 'modify';
        AccountService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AccountService.ctorParameters = function () { return [
            { type: ngxOauth2.AuthService },
            { type: AccountEndpoint }
        ]; };
        return AccountService;
    }());
    if (false) {
        /** @type {?} */
        AccountService.roleAddedOperation;
        /** @type {?} */
        AccountService.roleDeletedOperation;
        /** @type {?} */
        AccountService.roleModifiedOperation;
        /**
         * @type {?}
         * @private
         */
        AccountService.prototype._rolesChanged;
        /**
         * @type {?}
         * @private
         */
        AccountService.prototype.authService;
        /**
         * @type {?}
         * @private
         */
        AccountService.prototype.accountEndpoint;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/notification-endpoint.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        /**
         * @template T
         * @param {?} notificationId
         * @return {?}
         */
        NotificationEndpoint.prototype.getNotificationEndpoint = /**
         * @template T
         * @param {?} notificationId
         * @return {?}
         */
        function (notificationId) {
            /** @type {?} */
            var notification = this.demoNotifications.find((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return val.id == notificationId; }));
            /** @type {?} */
            var response;
            if (notification) {
                response = this.createResponse(notification, 200);
            }
            else {
                response = this.createResponse(null, 404);
            }
            return rxjs.of(response.body);
        };
        /**
         * @template T
         * @param {?} page
         * @param {?} pageSize
         * @return {?}
         */
        NotificationEndpoint.prototype.getNotificationsEndpoint = /**
         * @template T
         * @param {?} page
         * @param {?} pageSize
         * @return {?}
         */
        function (page, pageSize) {
            /** @type {?} */
            var notifications = this.demoNotifications;
            /** @type {?} */
            var response = this.createResponse(this.demoNotifications, 200);
            return rxjs.of(response.body);
        };
        /**
         * @template T
         * @param {?=} userId
         * @return {?}
         */
        NotificationEndpoint.prototype.getUnreadNotificationsEndpoint = /**
         * @template T
         * @param {?=} userId
         * @return {?}
         */
        function (userId) {
            /** @type {?} */
            var unreadNotifications = this.demoNotifications.filter((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return !val.isRead; }));
            /** @type {?} */
            var response = this.createResponse(unreadNotifications, 200);
            return rxjs.of(response.body);
        };
        /**
         * @template T
         * @param {?=} lastNotificationDate
         * @return {?}
         */
        NotificationEndpoint.prototype.getNewNotificationsEndpoint = /**
         * @template T
         * @param {?=} lastNotificationDate
         * @return {?}
         */
        function (lastNotificationDate) {
            /** @type {?} */
            var unreadNotifications = this.demoNotifications;
            /** @type {?} */
            var response = this.createResponse(unreadNotifications, 200);
            return rxjs.of(response.body);
        };
        /**
         * @template T
         * @param {?} notificationId
         * @param {?=} isPinned
         * @return {?}
         */
        NotificationEndpoint.prototype.getPinUnpinNotificationEndpoint = /**
         * @template T
         * @param {?} notificationId
         * @param {?=} isPinned
         * @return {?}
         */
        function (notificationId, isPinned) {
            /** @type {?} */
            var notification = this.demoNotifications.find((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return val.id == notificationId; }));
            /** @type {?} */
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
        /**
         * @template T
         * @param {?} notificationIds
         * @param {?} isRead
         * @return {?}
         */
        NotificationEndpoint.prototype.getReadUnreadNotificationEndpoint = /**
         * @template T
         * @param {?} notificationIds
         * @param {?} isRead
         * @return {?}
         */
        function (notificationIds, isRead) {
            var e_1, _a;
            var _loop_1 = function (notificationId) {
                /** @type {?} */
                var notification = this_1.demoNotifications.find((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return val.id == notificationId; }));
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
            /** @type {?} */
            var response = this.createResponse(null, 204);
            return rxjs.of(response.body);
        };
        /**
         * @template T
         * @param {?} notificationId
         * @return {?}
         */
        NotificationEndpoint.prototype.getDeleteNotificationEndpoint = /**
         * @template T
         * @param {?} notificationId
         * @return {?}
         */
        function (notificationId) {
            /** @type {?} */
            var notification = this.demoNotifications.find((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return val.id == notificationId; }));
            /** @type {?} */
            var response;
            if (notification) {
                this.demoNotifications = this.demoNotifications.filter((/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) { return val.id != notificationId; }));
                response = this.createResponse(notification, 200);
            }
            else {
                response = this.createResponse(null, 404);
            }
            return rxjs.of(response.body);
        };
        /**
         * @private
         * @template T
         * @param {?} body
         * @param {?} status
         * @return {?}
         */
        NotificationEndpoint.prototype.createResponse = /**
         * @private
         * @template T
         * @param {?} body
         * @param {?} status
         * @return {?}
         */
        function (body, status) {
            return new http.HttpResponse({ body: body, status: status });
        };
        NotificationEndpoint.decorators = [
            { type: core.Injectable }
        ];
        return NotificationEndpoint;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NotificationEndpoint.prototype.demoNotifications;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/notification.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NotificationService = /** @class */ (function () {
        function NotificationService(notificationEndpoint, authService) {
            this.notificationEndpoint = notificationEndpoint;
            this.authService = authService;
        }
        Object.defineProperty(NotificationService.prototype, "currentUser", {
            get: /**
             * @return {?}
             */
            function () {
                return this.authService.currentUser;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NotificationService.prototype, "recentNotifications", {
            get: /**
             * @return {?}
             */
            function () {
                return this._recentNotifications;
            },
            set: /**
             * @param {?} notifications
             * @return {?}
             */
            function (notifications) {
                this._recentNotifications = notifications;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?=} notificationId
         * @return {?}
         */
        NotificationService.prototype.getNotification = /**
         * @param {?=} notificationId
         * @return {?}
         */
        function (notificationId) {
            return this.notificationEndpoint.getNotificationEndpoint(notificationId).pipe(operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return Notification.Create(response); })));
        };
        /**
         * @param {?} page
         * @param {?} pageSize
         * @return {?}
         */
        NotificationService.prototype.getNotifications = /**
         * @param {?} page
         * @param {?} pageSize
         * @return {?}
         */
        function (page, pageSize) {
            var _this = this;
            return this.notificationEndpoint.getNotificationsEndpoint(page, pageSize).pipe(operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                return _this.getNotificationsFromResponse(response);
            })));
        };
        /**
         * @param {?=} userId
         * @return {?}
         */
        NotificationService.prototype.getUnreadNotifications = /**
         * @param {?=} userId
         * @return {?}
         */
        function (userId) {
            var _this = this;
            return this.notificationEndpoint.getUnreadNotificationsEndpoint(userId).pipe(operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return _this.getNotificationsFromResponse(response); })));
        };
        /**
         * @return {?}
         */
        NotificationService.prototype.getNewNotifications = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this.notificationEndpoint.getNewNotificationsEndpoint(this.lastNotificationDate).pipe(operators.map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return _this.processNewNotificationsFromResponse(response); })));
        };
        /**
         * @return {?}
         */
        NotificationService.prototype.getNewNotificationsPeriodically = /**
         * @return {?}
         */
        function () {
            var _this = this;
            return rxjs.interval(10000).pipe(operators.startWith(0), operators.flatMap((/**
             * @return {?}
             */
            function () {
                return _this.notificationEndpoint.getNewNotificationsEndpoint(_this.lastNotificationDate).pipe(operators.map((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) { return _this.processNewNotificationsFromResponse(response); })));
            })));
        };
        /**
         * @param {?} notificationOrNotificationId
         * @param {?=} isPinned
         * @return {?}
         */
        NotificationService.prototype.pinUnpinNotification = /**
         * @param {?} notificationOrNotificationId
         * @param {?=} isPinned
         * @return {?}
         */
        function (notificationOrNotificationId, isPinned) {
            if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) {
                return this.notificationEndpoint.getPinUnpinNotificationEndpoint((/** @type {?} */ (notificationOrNotificationId)), isPinned);
            }
            else {
                return this.pinUnpinNotification(notificationOrNotificationId.id);
            }
        };
        /**
         * @param {?} notificationIds
         * @param {?} isRead
         * @return {?}
         */
        NotificationService.prototype.readUnreadNotification = /**
         * @param {?} notificationIds
         * @param {?} isRead
         * @return {?}
         */
        function (notificationIds, isRead) {
            return this.notificationEndpoint.getReadUnreadNotificationEndpoint(notificationIds, isRead);
        };
        /**
         * @param {?} notificationOrNotificationId
         * @return {?}
         */
        NotificationService.prototype.deleteNotification = /**
         * @param {?} notificationOrNotificationId
         * @return {?}
         */
        function (notificationOrNotificationId) {
            var _this = this;
            if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) { // Todo: Test me if its check is valid
                return this.notificationEndpoint.getDeleteNotificationEndpoint((/** @type {?} */ (notificationOrNotificationId))).pipe(operators.map((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    _this.recentNotifications = _this.recentNotifications.filter((/**
                     * @param {?} n
                     * @return {?}
                     */
                    function (n) { return n.id != notificationOrNotificationId; }));
                    return Notification.Create(response);
                })));
            }
            else {
                return this.deleteNotification(notificationOrNotificationId.id);
            }
        };
        /**
         * @private
         * @param {?} response
         * @return {?}
         */
        NotificationService.prototype.processNewNotificationsFromResponse = /**
         * @private
         * @param {?} response
         * @return {?}
         */
        function (response) {
            var e_1, _a;
            /** @type {?} */
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
        /**
         * @private
         * @param {?} response
         * @return {?}
         */
        NotificationService.prototype.getNotificationsFromResponse = /**
         * @private
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var notifications = [];
            for (var i in response) {
                notifications[i] = Notification.Create(response[i]);
            }
            notifications.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return b.date.valueOf() - a.date.valueOf(); }));
            notifications.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return (a.isPinned === b.isPinned) ? 0 : a.isPinned ? -1 : 1; }));
            this.recentNotifications = notifications;
            return notifications;
        };
        NotificationService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NotificationService.ctorParameters = function () { return [
            { type: NotificationEndpoint },
            { type: ngxOauth2.AuthService }
        ]; };
        return NotificationService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        NotificationService.prototype.lastNotificationDate;
        /**
         * @type {?}
         * @private
         */
        NotificationService.prototype._recentNotifications;
        /**
         * @type {?}
         * @private
         */
        NotificationService.prototype.notificationEndpoint;
        /**
         * @type {?}
         * @private
         */
        NotificationService.prototype.authService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/translation.service-provider.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TranslationServiceProvider = /** @class */ (function (_super) {
        __extends(TranslationServiceProvider, _super);
        function TranslationServiceProvider(impl) {
            var _this = _super.call(this) || this;
            _this.impl = impl;
            return _this;
        }
        /**
         * @return {?}
         */
        TranslationServiceProvider.prototype.get = /**
         * @return {?}
         */
        function () {
            return this.impl;
        };
        TranslationServiceProvider.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TranslationServiceProvider.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.AppTranslationService }
        ]; };
        return TranslationServiceProvider;
    }(ngxAppkitContractsAlpha.TranslationServiceAbstractProvider));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TranslationServiceProvider.prototype.impl;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/app-title.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppTitleService = /** @class */ (function () {
        function AppTitleService(titleService, router$1) {
            var _this = this;
            this.titleService = titleService;
            this.router = router$1;
            this.sub = this.router.events.pipe(operators.filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event instanceof router.NavigationEnd; })), operators.map((/**
             * @param {?} _
             * @return {?}
             */
            function (_) { return _this.router.routerState.root; })), operators.map((/**
             * @param {?} route
             * @return {?}
             */
            function (route) {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            })), operators.flatMap((/**
             * @param {?} route
             * @return {?}
             */
            function (route) { return route.data; })))
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                /** @type {?} */
                var title = data.title;
                if (title) {
                    /** @type {?} */
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
            }));
        }
        AppTitleService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AppTitleService.ctorParameters = function () { return [
            { type: platformBrowser.Title },
            { type: router.Router }
        ]; };
        return AppTitleService;
    }());
    if (false) {
        /** @type {?} */
        AppTitleService.prototype.sub;
        /** @type {?} */
        AppTitleService.prototype.appName;
        /**
         * @type {?}
         * @private
         */
        AppTitleService.prototype.titleService;
        /**
         * @type {?}
         * @private
         */
        AppTitleService.prototype.router;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/alert.service-provider.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AlertServiceProvider = /** @class */ (function (_super) {
        __extends(AlertServiceProvider, _super);
        function AlertServiceProvider(alertService) {
            var _this = _super.call(this) || this;
            _this.alertService = alertService;
            return _this;
        }
        /**
         * @return {?}
         */
        AlertServiceProvider.prototype.get = /**
         * @return {?}
         */
        function () {
            return this.alertService;
        };
        AlertServiceProvider.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AlertServiceProvider.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.AlertService }
        ]; };
        return AlertServiceProvider;
    }(ngxAppkitContractsAlpha.AlertServiceAbstractProvider));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AlertServiceProvider.prototype.alertService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/local-storage-manager.service-provider.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LocalStoreManagerProvider = /** @class */ (function (_super) {
        __extends(LocalStoreManagerProvider, _super);
        function LocalStoreManagerProvider(impl) {
            var _this = _super.call(this) || this;
            _this.impl = impl;
            return _this;
        }
        /**
         * @return {?}
         */
        LocalStoreManagerProvider.prototype.get = /**
         * @return {?}
         */
        function () {
            return this.impl;
        };
        LocalStoreManagerProvider.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        LocalStoreManagerProvider.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.LocalStoreManager }
        ]; };
        return LocalStoreManagerProvider;
    }(ngxAppkitContractsAlpha.LocalStoreManagerServiceAbstractProvider));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        LocalStoreManagerProvider.prototype.impl;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pipes/group-by.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GroupByPipe = /** @class */ (function () {
        function GroupByPipe() {
        }
        /**
         * @param {?} value
         * @param {?} field
         * @return {?}
         */
        GroupByPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} field
         * @return {?}
         */
        function (value, field) {
            if (!value) {
                return value;
            }
            /** @type {?} */
            var groupedObj = value.reduce((/**
             * @param {?} prev
             * @param {?} cur
             * @return {?}
             */
            function (prev, cur) {
                if (!prev[cur[field]]) {
                    prev[cur[field]] = [cur];
                }
                else {
                    prev[cur[field]].push(cur);
                }
                return prev;
            }), {});
            return Object.keys(groupedObj).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return ({ key: key, value: groupedObj[key] }); }));
        };
        GroupByPipe.decorators = [
            { type: core.Pipe, args: [{ name: 'groupBy' },] }
        ];
        return GroupByPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/notifications-viewer/notifications-viewer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        /**
         * @return {?}
         */
        NotificationsViewerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.isViewOnly) {
                this.columns = [
                    { prop: 'date', cellTemplate: this.dateTemplate, width: 100, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                    { prop: 'header', cellTemplate: this.contentHeaderTemplate, width: 200, resizeable: false, sortable: false, draggable: false },
                ];
            }
            else {
                /** @type {?} */
                var gT = (/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return _this.translationService.getTranslation(key); });
                this.columns = [
                    { prop: '', name: '', width: 10, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                    { prop: 'date', name: gT('notifications.Date'), cellTemplate: this.dateTemplate, width: 30 },
                    { prop: 'body', name: gT('notifications.Notification'), cellTemplate: this.contenBodytTemplate, width: 500 },
                    { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
                ];
            }
            this.initDataLoading();
        };
        /**
         * @return {?}
         */
        NotificationsViewerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.dataLoadingSubscription) {
                this.dataLoadingSubscription.unsubscribe();
            }
        };
        /**
         * @return {?}
         */
        NotificationsViewerComponent.prototype.initDataLoading = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.isViewOnly && this.notificationService.recentNotifications) {
                this.rows = this.processResults(this.notificationService.recentNotifications);
                return;
            }
            this.loadingIndicator = true;
            /** @type {?} */
            var dataLoadTask = this.isViewOnly ? this.notificationService.getNewNotifications() : this.notificationService.getNewNotificationsPeriodically();
            this.dataLoadingSubscription = dataLoadTask
                .subscribe((/**
             * @param {?} notifications
             * @return {?}
             */
            function (notifications) {
                _this.loadingIndicator = false;
                _this.dataLoadingConsecutiveFailurs = 0;
                _this.rows = _this.processResults(notifications);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.loadingIndicator = false;
                _this.alertService.showMessage('Load Error', 'Loading new notifications from the server failed!', ngxAppkitContractsAlpha.MessageSeverity.warn);
                _this.alertService.logError(error);
                if (_this.dataLoadingConsecutiveFailurs++ < 5) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () { return _this.initDataLoading(); }), 5000);
                }
                else {
                    _this.alertService.showStickyMessage('Load Error', 'Loading new notifications from the server failed!', ngxAppkitContractsAlpha.MessageSeverity.error);
                }
            }));
            if (this.isViewOnly) {
                this.dataLoadingSubscription = null;
            }
        };
        /**
         * @private
         * @param {?} notifications
         * @return {?}
         */
        NotificationsViewerComponent.prototype.processResults = /**
         * @private
         * @param {?} notifications
         * @return {?}
         */
        function (notifications) {
            if (this.isViewOnly) {
                notifications.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                function (a, b) {
                    return b.date.valueOf() - a.date.valueOf();
                }));
            }
            return notifications;
        };
        /**
         * @param {?} value
         * @return {?}
         */
        NotificationsViewerComponent.prototype.getPrintedDate = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                return ngxAppkitContractsAlpha.Utilities.printTimeOnly(value) + ' on ' + ngxAppkitContractsAlpha.Utilities.printDateOnly(value);
            }
        };
        /**
         * @param {?} row
         * @return {?}
         */
        NotificationsViewerComponent.prototype.deleteNotification = /**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            var _this = this;
            this.alertService.showDialog('Are you sure you want to delete the notification \"' + row.header + '\"?', ngxAppkitContractsAlpha.DialogType.confirm, (/**
             * @return {?}
             */
            function () { return _this.deleteNotificationHelper(row); }));
        };
        /**
         * @param {?} row
         * @return {?}
         */
        NotificationsViewerComponent.prototype.deleteNotificationHelper = /**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            var _this = this;
            this.alertService.startLoadingMessage('Deleting...');
            this.loadingIndicator = true;
            this.notificationService.deleteNotification(row)
                .subscribe((/**
             * @param {?} results
             * @return {?}
             */
            function (results) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.rows = _this.rows.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.id != row.id; }));
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.alertService.showStickyMessage('Delete Error', "An error occured whilst deleting the notification.\r\nError: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            }));
        };
        /**
         * @param {?} row
         * @return {?}
         */
        NotificationsViewerComponent.prototype.togglePin = /**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            var _this = this;
            /** @type {?} */
            var pin = !row.isPinned;
            /** @type {?} */
            var opText = pin ? 'Pinning' : 'Unpinning';
            this.alertService.startLoadingMessage(opText + '...');
            this.loadingIndicator = true;
            this.notificationService.pinUnpinNotification(row, pin)
                .subscribe((/**
             * @param {?} results
             * @return {?}
             */
            function (results) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                row.isPinned = pin;
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.alertService.showStickyMessage(opText + ' Error', "An error occured whilst " + opText + " the notification.\r\nError: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            }));
        };
        Object.defineProperty(NotificationsViewerComponent.prototype, "canManageNotifications", {
            get: /**
             * @return {?}
             */
            function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.manageRolesPermission); // Todo: Consider creating separate permission for notifications
            },
            enumerable: true,
            configurable: true
        });
        NotificationsViewerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'notifications-viewer',
                        template: "<div>\n    <ngx-datatable class=\"material colored-header sm table-hover\"\n                   [loadingIndicator]=\"loadingIndicator\"\n                   [rows]=\"rows\"\n                   [rowHeight]=\"35\"\n                   [headerHeight]=\"isViewOnly ? 0 : 35\"\n                   [footerHeight]=\"35\"\n                   [limit]=\"10\"\n                   [columns]=\"columns\"\n                   [scrollbarV]=\"verticalScrollbar\"\n                   [columnMode]=\"'force'\">\n    </ngx-datatable>\n\n    <ng-template #statusHeaderTemplate>\n        <i class=\"fa fa-bullhorn\"></i>\n    </ng-template>\n\n    <ng-template #statusTemplate>\n        <span></span>\n    </ng-template>\n\n    <ng-template #dateTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{getPrintedDate(value)}}\">\n            {{getPrintedDate(value)}}\n        </span>\n    </ng-template>\n\n    <ng-template #contentHeaderTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{row.body}}\">\n            {{value}}\n        </span>\n    </ng-template>\n\n    <ng-template #contenBodytTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{row.header}}\">\n            {{value}}\n        </span>\n    </ng-template>\n\n\n    <ng-template #actionsTemplate let-row=\"row\">\n        <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" tooltip=\"{{'notifications.Delete' | translate}}\" container=\"body\" (click)=\"deleteNotification(row)\"><i class=\"fa fa-times\"></i></a>\n        <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" tooltip=\"{{'notifications.Pin' | translate}}\" co container=\"body\" (click)=\"togglePin(row)\">\n            <i *ngIf=\"row.isPinned\" class=\"fa fa-thumb-tack\"></i>\n            <i *ngIf=\"!row.isPinned\" class=\"fa fa-thumb-tack fa-rotate-90\"></i>\n        </a>\n    </ng-template>\n</div>",
                        styles: [".unread{font-weight:700}"]
                    }] }
        ];
        /** @nocollapse */
        NotificationsViewerComponent.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.AlertService },
            { type: ngxAppkitServicesAlpha.AppTranslationService },
            { type: AccountService },
            { type: NotificationService }
        ]; };
        NotificationsViewerComponent.propDecorators = {
            isViewOnly: [{ type: core.Input }],
            verticalScrollbar: [{ type: core.Input }],
            statusHeaderTemplate: [{ type: core.ViewChild, args: ['statusHeaderTemplate', { static: true },] }],
            statusTemplate: [{ type: core.ViewChild, args: ['statusTemplate', { static: true },] }],
            dateTemplate: [{ type: core.ViewChild, args: ['dateTemplate', { static: true },] }],
            contentHeaderTemplate: [{ type: core.ViewChild, args: ['contentHeaderTemplate', { static: true },] }],
            contenBodytTemplate: [{ type: core.ViewChild, args: ['contenBodytTemplate', { static: true },] }],
            actionsTemplate: [{ type: core.ViewChild, args: ['actionsTemplate', { static: true },] }]
        };
        return NotificationsViewerComponent;
    }());
    if (false) {
        /** @type {?} */
        NotificationsViewerComponent.prototype.columns;
        /** @type {?} */
        NotificationsViewerComponent.prototype.rows;
        /** @type {?} */
        NotificationsViewerComponent.prototype.loadingIndicator;
        /** @type {?} */
        NotificationsViewerComponent.prototype.dataLoadingConsecutiveFailurs;
        /** @type {?} */
        NotificationsViewerComponent.prototype.dataLoadingSubscription;
        /** @type {?} */
        NotificationsViewerComponent.prototype.isViewOnly;
        /** @type {?} */
        NotificationsViewerComponent.prototype.verticalScrollbar;
        /** @type {?} */
        NotificationsViewerComponent.prototype.statusHeaderTemplate;
        /** @type {?} */
        NotificationsViewerComponent.prototype.statusTemplate;
        /** @type {?} */
        NotificationsViewerComponent.prototype.dateTemplate;
        /** @type {?} */
        NotificationsViewerComponent.prototype.contentHeaderTemplate;
        /** @type {?} */
        NotificationsViewerComponent.prototype.contenBodytTemplate;
        /** @type {?} */
        NotificationsViewerComponent.prototype.actionsTemplate;
        /**
         * @type {?}
         * @private
         */
        NotificationsViewerComponent.prototype.alertService;
        /**
         * @type {?}
         * @private
         */
        NotificationsViewerComponent.prototype.translationService;
        /**
         * @type {?}
         * @private
         */
        NotificationsViewerComponent.prototype.accountService;
        /**
         * @type {?}
         * @private
         */
        NotificationsViewerComponent.prototype.notificationService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/user-info/user-info.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        /**
         * @return {?}
         */
        UserInfoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (!this.isGeneralEditor) {
                this.loadCurrentUserData();
            }
        };
        /**
         * @private
         * @return {?}
         */
        UserInfoComponent.prototype.loadCurrentUserData = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.alertService.startLoadingMessage();
            if (this.canViewAllRoles) {
                this.accountService.getUserAndRoles().subscribe((/**
                 * @param {?} results
                 * @return {?}
                 */
                function (results) { return _this.onCurrentUserDataLoadSuccessful(results[0], results[1]); }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return _this.onCurrentUserDataLoadFailed(error); }));
            }
            else {
                this.accountService.getUser().subscribe((/**
                 * @param {?} user
                 * @return {?}
                 */
                function (user) { return _this.onCurrentUserDataLoadSuccessful(user, user.roles.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return new Role(x); }))); }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return _this.onCurrentUserDataLoadFailed(error); }));
            }
        };
        /**
         * @private
         * @param {?} user
         * @param {?} roles
         * @return {?}
         */
        UserInfoComponent.prototype.onCurrentUserDataLoadSuccessful = /**
         * @private
         * @param {?} user
         * @param {?} roles
         * @return {?}
         */
        function (user, roles) {
            this.alertService.stopLoadingMessage();
            this.user = user;
            this.allRoles = roles;
        };
        /**
         * @private
         * @param {?} error
         * @return {?}
         */
        UserInfoComponent.prototype.onCurrentUserDataLoadFailed = /**
         * @private
         * @param {?} error
         * @return {?}
         */
        function (error) {
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Load Error', "Unable to retrieve user data from the server.\r\nErrors: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            this.user = new ngxOauth2.User();
        };
        /**
         * @param {?} name
         * @return {?}
         */
        UserInfoComponent.prototype.getRoleByName = /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            return this.allRoles.find((/**
             * @param {?} r
             * @return {?}
             */
            function (r) { return r.name == name; }));
        };
        /**
         * @param {?} caption
         * @param {?} message
         * @return {?}
         */
        UserInfoComponent.prototype.showErrorAlert = /**
         * @param {?} caption
         * @param {?} message
         * @return {?}
         */
        function (caption, message) {
            this.alertService.showMessage(caption, message, ngxAppkitContractsAlpha.MessageSeverity.error);
        };
        /**
         * @param {?} user
         * @return {?}
         */
        UserInfoComponent.prototype.deletePasswordFromUser = /**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            /** @type {?} */
            var userEdit = (/** @type {?} */ (user));
            delete userEdit.currentPassword;
            delete userEdit.newPassword;
            delete userEdit.confirmPassword;
        };
        /**
         * @return {?}
         */
        UserInfoComponent.prototype.edit = /**
         * @return {?}
         */
        function () {
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
        /**
         * @return {?}
         */
        UserInfoComponent.prototype.save = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.isSaving = true;
            this.alertService.startLoadingMessage('Saving changes...');
            if (this.isNewUser) {
                this.accountService.newUser(this.userEdit).subscribe((/**
                 * @param {?} user
                 * @return {?}
                 */
                function (user) { return _this.saveSuccessHelper(user); }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return _this.saveFailedHelper(error); }));
            }
            else {
                this.accountService.updateUser(this.userEdit).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) { return _this.saveSuccessHelper(); }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return _this.saveFailedHelper(error); }));
            }
        };
        /**
         * @private
         * @param {?=} user
         * @return {?}
         */
        UserInfoComponent.prototype.saveSuccessHelper = /**
         * @private
         * @param {?=} user
         * @return {?}
         */
        function (user) {
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
        /**
         * @private
         * @param {?} error
         * @return {?}
         */
        UserInfoComponent.prototype.saveFailedHelper = /**
         * @private
         * @param {?} error
         * @return {?}
         */
        function (error) {
            this.isSaving = false;
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Save Error', 'The below errors occured whilst saving your changes:', ngxAppkitContractsAlpha.MessageSeverity.error, error);
            this.alertService.showStickyMessage(error, null, ngxAppkitContractsAlpha.MessageSeverity.error);
            if (this.changesFailedCallback) {
                this.changesFailedCallback();
            }
        };
        /**
         * @private
         * @param {?} currentUser
         * @param {?} editedUser
         * @return {?}
         */
        UserInfoComponent.prototype.testIsRoleUserCountChanged = /**
         * @private
         * @param {?} currentUser
         * @param {?} editedUser
         * @return {?}
         */
        function (currentUser, editedUser) {
            var _this = this;
            /** @type {?} */
            var rolesAdded = this.isNewUser ? editedUser.roles : editedUser.roles.filter((/**
             * @param {?} role
             * @return {?}
             */
            function (role) { return currentUser.roles.indexOf(role) == -1; }));
            /** @type {?} */
            var rolesRemoved = this.isNewUser ? [] : currentUser.roles.filter((/**
             * @param {?} role
             * @return {?}
             */
            function (role) { return editedUser.roles.indexOf(role) == -1; }));
            /** @type {?} */
            var modifiedRoles = rolesAdded.concat(rolesRemoved);
            if (modifiedRoles.length) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.accountService.onRolesUserCountChanged(modifiedRoles); }));
            }
        };
        /**
         * @return {?}
         */
        UserInfoComponent.prototype.cancel = /**
         * @return {?}
         */
        function () {
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
        /**
         * @return {?}
         */
        UserInfoComponent.prototype.close = /**
         * @return {?}
         */
        function () {
            this.userEdit = this.user = new UserEdit();
            this.showValidationErrors = false;
            this.resetForm();
            this.isEditMode = false;
            if (this.changesSavedCallback) {
                this.changesSavedCallback();
            }
        };
        /**
         * @private
         * @return {?}
         */
        UserInfoComponent.prototype.refreshLoggedInUser = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.accountService.refreshLoggedInUser()
                .subscribe((/**
             * @param {?} user
             * @return {?}
             */
            function (user) {
                _this.loadCurrentUserData();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.alertService.resetStickyMessage();
                _this.alertService.showStickyMessage('Refresh failed', 'An error occured whilst refreshing logged in user information from the server', ngxAppkitContractsAlpha.MessageSeverity.error, error);
            }));
        };
        /**
         * @return {?}
         */
        UserInfoComponent.prototype.changePassword = /**
         * @return {?}
         */
        function () {
            this.isChangePassword = true;
        };
        /**
         * @return {?}
         */
        UserInfoComponent.prototype.unlockUser = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.isSaving = true;
            this.alertService.startLoadingMessage('Unblocking user...');
            this.accountService.unblockUser(this.userEdit.id)
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.isSaving = false;
                _this.userEdit.isLockedOut = false;
                _this.alertService.stopLoadingMessage();
                _this.alertService.showMessage('Success', 'User has been successfully unblocked', ngxAppkitContractsAlpha.MessageSeverity.success);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.isSaving = false;
                _this.alertService.stopLoadingMessage();
                _this.alertService.showStickyMessage('Unblock Error', 'The below errors occured whilst unblocking the user:', ngxAppkitContractsAlpha.MessageSeverity.error, error);
                _this.alertService.showStickyMessage(error, null, ngxAppkitContractsAlpha.MessageSeverity.error);
            }));
        };
        /**
         * @param {?=} replace
         * @return {?}
         */
        UserInfoComponent.prototype.resetForm = /**
         * @param {?=} replace
         * @return {?}
         */
        function (replace) {
            var _this = this;
            if (replace === void 0) { replace = false; }
            this.isChangePassword = false;
            if (!replace) {
                this.form.reset();
            }
            else {
                this.formResetToggle = false;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.formResetToggle = true;
                }));
            }
        };
        /**
         * @param {?} allRoles
         * @return {?}
         */
        UserInfoComponent.prototype.newUser = /**
         * @param {?} allRoles
         * @return {?}
         */
        function (allRoles) {
            this.isGeneralEditor = true;
            this.isNewUser = true;
            this.allRoles = __spread(allRoles);
            this.user = this.userEdit = new UserEdit();
            this.userEdit.isEnabled = true;
            this.edit();
            return this.userEdit;
        };
        /**
         * @param {?} user
         * @param {?} allRoles
         * @return {?}
         */
        UserInfoComponent.prototype.editUser = /**
         * @param {?} user
         * @param {?} allRoles
         * @return {?}
         */
        function (user, allRoles) {
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
        /**
         * @param {?} user
         * @param {?=} allRoles
         * @return {?}
         */
        UserInfoComponent.prototype.displayUser = /**
         * @param {?} user
         * @param {?=} allRoles
         * @return {?}
         */
        function (user, allRoles) {
            this.user = new ngxOauth2.User();
            Object.assign(this.user, user);
            this.deletePasswordFromUser(this.user);
            this.setRoles(user, allRoles);
            this.isEditMode = false;
        };
        /**
         * @private
         * @param {?} user
         * @param {?=} allRoles
         * @return {?}
         */
        UserInfoComponent.prototype.setRoles = /**
         * @private
         * @param {?} user
         * @param {?=} allRoles
         * @return {?}
         */
        function (user, allRoles) {
            var e_1, _a;
            var _this = this;
            this.allRoles = allRoles ? __spread(allRoles) : [];
            if (user.roles) {
                var _loop_1 = function (ur) {
                    if (!this_1.allRoles.some((/**
                     * @param {?} r
                     * @return {?}
                     */
                    function (r) { return r.name == ur; }))) {
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
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    if (_this.rolesSelector) {
                        _this.rolesSelector.refresh();
                    }
                }));
            }
        };
        Object.defineProperty(UserInfoComponent.prototype, "canViewAllRoles", {
            get: /**
             * @return {?}
             */
            function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.viewRolesPermission);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserInfoComponent.prototype, "canAssignRoles", {
            get: /**
             * @return {?}
             */
            function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.assignRolesPermission);
            },
            enumerable: true,
            configurable: true
        });
        UserInfoComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'user-info',
                        template: "<div>\n  <form *ngIf=\"formResetToggle\" [attr.autocomplete]=\"isGeneralEditor ? 'NaN' : null\" name=\"userInfoForm\" #f=\"ngForm\" novalidate\n        (ngSubmit)=\"f.form.valid ? save() :\n\n          (!userName.valid && showErrorAlert('User name is required', 'Please enter a user name (minimum of 2 and maximum of 200 characters)'));\n\n          (userPassword && !userPassword.valid && showErrorAlert('Password is required', 'Please enter the current password'));\n\n          (email.errors?.required && showErrorAlert('Email is required', 'Please enter an email address (maximum of 200 characters)'));\n          (email.errors?.pattern && showErrorAlert('Invalid Email', 'Please enter a valid email address'));\n\n          (isChangePassword && isEditingSelf && !currentPassword.valid && showErrorAlert('Current password is required', 'Please enter the current password'));\n\n          ((isChangePassword || isNewUser) && !newPassword.valid && showErrorAlert('New password is required', 'Please enter the new password (minimum of 6 characters)'));\n\n          ((isChangePassword || isNewUser) && newPassword.valid && confirmPassword.errors?.required && showErrorAlert('Confirmation password is required', 'Please enter the confirmation password'));\n          ((isChangePassword || isNewUser) && newPassword.valid && confirmPassword.errors?.validateEqual && showErrorAlert('Passwword mismatch', 'New password and confirmation password do not match'));\n\n          (canAssignRoles && !isEditingSelf && !roles.valid && showErrorAlert('Roles is required', 'Please select a minimum of 1 role'));\">\n\n    <div class=\"form-group row\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"jobTitle-{{uniqueId}}\">{{'users.editor.JobTitle' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.jobTitle}}</p>\n      </div>\n      <div *ngIf=\"isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input autofocus type=\"text\" attr.id=\"jobTitle-{{uniqueId}}\" name=\"jobTitle\" placeholder=\"Enter Job Title\" class=\"form-control\" [(ngModel)]=\"userEdit.jobTitle\" />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row has-feedback-icon\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"userName-{{uniqueId}}\">{{'users.editor.UserName' | translate}}</label>\n      <div *ngIf=\"!isEditMode || isEditingSelf\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.userName}}</p>\n      </div>\n      <div *ngIf=\"isEditMode && !isEditingSelf\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input type=\"text\" attr.id=\"userName-{{uniqueId}}\" name=\"userName\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Enter user name\"\n               class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && userName.valid, 'is-invalid' : f.submitted && !userName.valid}\"\n               [(ngModel)]=\"userEdit.userName\" #userName=\"ngModel\" required minlength=\"2\" maxlength=\"200\" />\n        <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': userName.valid, 'fa-times' : !userName.valid}\" aria-hidden=\"true\"></i>\n        <span *ngIf=\"showValidationErrors && f.submitted && !userName.valid\" class=\"invalid-feedback\">\n          {{'users.editor.UserNameRequired' | translate}}\n        </span>\n      </div>\n    </div>\n\n    <div *ngIf=\"isEditMode && isEditingSelf && !isChangePassword && user.userName != userEdit.userName\" class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr class=\"password-separator-hr\" />\n      </div>\n    </div>\n    <div *ngIf=\"isEditMode && isEditingSelf && !isChangePassword && user.userName != userEdit.userName\" class=\"form-group row has-feedback-icon\">\n      <label class=\"col-form-label col-lg-2\" for=\"userPassword-{{uniqueId}}\">{{'users.editor.Password' | translate}}</label>\n      <div class=\"col-lg-10\">\n        <input type=\"password\" attr.id=\"userPassword-{{uniqueId}}\" name=\"userPassword\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Enter password\"\n               class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && userPassword.valid, 'is-invalid' : f.submitted && !userPassword.valid}\"\n               [(ngModel)]=\"userEdit.currentPassword\" #userPassword=\"ngModel\" required />\n        <small class=\"hint-sm\">{{'users.editor.PasswordHint' | translate}}</small>\n        <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': userPassword.valid, 'fa-times' : !userPassword.valid}\" aria-hidden=\"true\"></i>\n        <span *ngIf=\"showValidationErrors && f.submitted && !userPassword.valid\" class=\"invalid-feedback\">\n          {{'users.editor.CurrentPasswordRequired' | translate}}\n        </span>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row has-feedback-icon\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"email-{{uniqueId}}\">{{'users.editor.Email' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.email}}</p>\n      </div>\n      <div *ngIf=\"isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input type=\"text\" attr.id=\"email-{{uniqueId}}\" name=\"email\" placeholder=\"Enter email address\" class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && email.valid, 'is-invalid' : f.submitted && !email.valid}\"\n               [(ngModel)]=\"userEdit.email\" #email=\"ngModel\" required maxlength=\"200\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\" />\n        <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': email.valid, 'fa-times' : !email.valid}\" aria-hidden=\"true\"></i>\n        <span *ngIf=\"showValidationErrors && f.submitted && email.errors?.required\" class=\"invalid-feedback\">\n          {{'users.editor.EmailRequired' | translate}}\n        </span>\n        <span *ngIf=\"showValidationErrors && f.submitted && email.errors?.pattern\" class=\"invalid-feedback\">\n          {{'users.editor.InvalidEmail' | translate}}\n        </span>\n      </div>\n    </div>\n\n    <div *ngIf=\"isEditMode\" class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div *ngIf=\"isEditMode\" class=\"form-group row\">\n      <label for=\"newPassword-{{uniqueId}}\" class=\"col-form-label col-lg-2\">{{'users.editor.Password' | translate}}</label>\n      <div *ngIf=\"!isChangePassword && !isNewUser\" class=\"col-lg-10\">\n        <button type=\"button\" (click)=\"changePassword()\" class=\"btn btn-link\">{{'users.editor.ChangePassword' | translate}}</button>\n      </div>\n\n      <div *ngIf=\"isChangePassword || isNewUser\" class=\"col-lg-10\">\n        <div class=\"password-well card card-body bg-light\">\n          <div *ngIf=\"isEditingSelf\" class=\"form-group row has-feedback-icon\">\n            <label class=\"col-form-label col-lg-3\" for=\"currentPassword-{{uniqueId}}\">{{'users.editor.CurrentPassword' | translate}}</label>\n            <div class=\"col-lg-9\">\n              <input type=\"password\" attr.id=\"currentPassword-{{uniqueId}}\" name=\"currentPassword\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Enter current password\" class=\"form-control\"\n                     [ngClass]=\"{'is-valid': f.submitted && currentPassword.valid, 'is-invalid' : f.submitted && !currentPassword.valid}\" [(ngModel)]=\"userEdit.currentPassword\" #currentPassword=\"ngModel\" required />\n              <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': currentPassword.valid, 'fa-times' : !currentPassword.valid}\" aria-hidden=\"true\"></i>\n              <span *ngIf=\"showValidationErrors && f.submitted && !currentPassword.valid\" class=\"invalid-feedback\">\n                {{'users.editor.CurrentPasswordRequired' | translate}}\n              </span>\n            </div>\n          </div>\n\n          <div *ngIf=\"!isNewUser\" class=\"row\">\n            <div class=\"col-lg-12\">\n              <hr class=\"password-separator-hr\" />\n            </div>\n          </div>\n\n          <div class=\"form-group row has-feedback-icon\">\n            <label class=\"col-form-label col-lg-3\" for=\"newPassword-{{uniqueId}}\">{{'users.editor.NewPassword' | translate}}</label>\n            <div class=\"col-lg-9\">\n              <input type=\"password\" attr.id=\"newPassword-{{uniqueId}}\" name=\"newPassword\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Enter new password\" class=\"form-control\"\n                     [ngClass]=\"{'is-valid': f.submitted && newPassword.valid, 'is-invalid' : f.submitted && !newPassword.valid}\" [(ngModel)]=\"userEdit.newPassword\" #newPassword=\"ngModel\"\n                     required minlength=\"6\" validateEqual=\"confirmPassword\" reverse=\"true\" />\n              <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': newPassword.valid, 'fa-times' : !newPassword.valid}\" aria-hidden=\"true\"></i>\n              <span *ngIf=\"showValidationErrors && f.submitted && !newPassword.valid\" class=\"invalid-feedback\">\n                {{'users.editor.NewPasswordRequired' | translate}}\n              </span>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <hr class=\"password-separator-hr\" />\n            </div>\n          </div>\n\n          <div class=\"form-group row has-feedback-icon\">\n            <label class=\"col-form-label col-lg-3\" for=\"confirmPassword-{{uniqueId}}\">{{'users.editor.ConfirmPassword' | translate}}</label>\n            <div class=\"col-lg-9\">\n              <input type=\"password\" attr.id=\"confirmPassword-{{uniqueId}}\" name=\"confirmPassword\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Confirm new password\" class=\"form-control\"\n                     [ngClass]=\"{'is-valid': f.submitted && confirmPassword.valid, 'is-invalid' : f.submitted && !confirmPassword.valid}\" [(ngModel)]=\"userEdit.confirmPassword\" #confirmPassword=\"ngModel\"\n                     required validateEqual=\"newPassword\" />\n              <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': confirmPassword.valid, 'fa-times' : !confirmPassword.valid}\" aria-hidden=\"true\"></i>\n              <span *ngIf=\"showValidationErrors && f.submitted && confirmPassword.errors?.required\" class=\"invalid-feedback\">\n                {{'users.editor.ConfirmationPasswordRequired' | translate}}\n              </span>\n              <span *ngIf=\"showValidationErrors && f.submitted && confirmPassword.errors?.validateEqual && !confirmPassword.errors?.required\" class=\"invalid-feedback\">\n                {{'users.editor.PasswordMismatch' | translate}}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!--******************************************************************************************************-->\n\n    <div *ngIf=\"!isEditMode || canAssignRoles || isEditingSelf\" class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div *ngIf=\"!isEditMode || canAssignRoles || isEditingSelf\" class=\"form-group row has-feedback-icon\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"roles-user-info\">{{'users.editor.Roles' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p ngPreserveWhitespaces class=\"form-control-plaintext\">\n          <span *ngFor=\"let role of user.roles\">\n            <span title='{{getRoleByName(role)?.description}}' class=\"badge badge-pill badge-secondary\">{{role}}</span>\n          </span>\n        </p>\n      </div>\n      <div *ngIf=\"isEditMode && canAssignRoles && !isEditingSelf\" [ngClass]=\"{'is-valid': f.submitted && roles.valid, 'is-invalid' : f.submitted && !roles.valid}\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <select id=\"roles-user-info\" name=\"roles\" [(ngModel)]=\"userEdit.roles\" #roles=\"ngModel\" #rolesSelector=\"bootstrap-select\"\n                class=\"selectpicker form-control left-status\" bootstrapSelect required multiple data-live-search=\"true\" data-actions-box=\"false\" data-live-search-placeholder=\"Search...\" title=\"Select Roles\">\n          <option *ngFor=\"let role of allRoles\" attr.data-content=\"<span title='{{role.description}}' class='badge badge-pill badge-secondary'>{{role.name}}</span>\" attr.value=\"{{role.name}}\">\n            {{role.name}}\n          </option>\n        </select>\n        <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': roles.valid, 'fa-times' : !roles.valid}\" aria-hidden=\"true\"></i>\n        <span *ngIf=\"showValidationErrors && f.submitted && !roles.valid\" class=\"invalid-feedback\">\n          {{'users.editor.RoleRequired' | translate}}\n        </span>\n      </div>\n    </div>\n\n    <!--******************************************************************************************************-->\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"fullName-{{uniqueId}}\">{{'users.editor.FullName' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.fullName}}</p>\n      </div>\n      <div *ngIf=\"isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input type=\"text\" attr.id=\"fullName-{{uniqueId}}\" name=\"fullName\" placeholder=\"Enter full name\" class=\"form-control\" [(ngModel)]=\"userEdit.fullName\" />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"phoneNumber-{{uniqueId}}\">{{'users.editor.PhoneNumber' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.phoneNumber}}</p>\n      </div>\n      <div *ngIf=\"isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input type=\"text\" attr.id=\"phoneNumber-{{uniqueId}}\" name=\"phoneNumber\" placeholder=\"Enter phone number\" class=\"form-control\" [(ngModel)]=\"userEdit.phoneNumber\" />\n      </div>\n    </div>\n\n    <div *ngIf=\"!isViewOnly\" class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.last-separator-hr]=\"!isEditMode\" [class.edit-last-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div *ngIf=\"!isViewOnly\" class=\"form-group row\">\n      <div class=\"col-sm-5\">\n        <div *ngIf=\"isGeneralEditor && isEditMode\" class=\"float-left\">\n          <div class=\"form-check user-enabled\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"idEnabled\" name=\"isEnabled\" [(ngModel)]=\"userEdit.isEnabled\">\n            <label for=\"idEnabled\" class=\"form-check-label\">{{'users.editor.Enabled' | translate}}</label>\n          </div>\n          <button *ngIf=\"userEdit.isLockedOut\" type=\"button\" (click)=\"unlockUser()\" class=\"btn btn-warning unblock-user\" [disabled]=\"isSaving\"><i class='fa fa-unlock-alt'></i> {{'users.editor.Unblock' | translate}}</button>\n        </div>\n      </div>\n      <div class=\"col-sm-7\">\n        <div ngPreserveWhitespaces class=\"float-right\">\n          <button *ngIf=\"!isEditMode && isGeneralEditor\" type=\"button\" (click)=\"close()\" class=\"btn btn-outline-secondary\"><i class='fa fa-close'></i> {{'users.editor.Close' | translate}}</button>\n          <button *ngIf=\"!isEditMode && !isGeneralEditor\" type=\"button\" (click)=\"edit()\" class=\"btn btn-outline-secondary\"><i class='fa fa-edit'></i> {{'users.editor.Edit' | translate}}</button>\n          <button *ngIf=\"isEditMode\" type=\"button\" (click)=\"cancel()\" class=\"btn btn-danger\" [disabled]=\"isSaving\"><i class='fa fa-times'></i> {{'users.editor.Cancel' | translate}}</button>\n          <button *ngIf=\"isEditMode\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isSaving\">\n            <i *ngIf=\"!isSaving\" class='fa fa-save'></i><i *ngIf=\"isSaving\" class='fa fa-circle-o-notch fa-spin'></i> {{isSaving ? ('users.editor.Saving' | translate) : ('users.editor.Save' | translate)}}\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </form>\n</div>\n",
                        styles: [".separator-hr{margin:0 5px;border-top-style:dashed}.edit-separator-hr{margin:10px 5px;border-top-style:dashed}.last-separator-hr{margin-top:5px}.edit-last-separator-hr{margin-top:15px}.password-separator-hr{margin:5px;border-style:none}.form-group{margin-top:0;margin-bottom:0}input.form-control{border-left-width:5px}.invalid-feedback{display:block}.password-well{padding:.5rem}.hint-sm{display:block}.form-check.user-enabled{display:inline-block}.unblock-user{margin-left:34px}@media (min-width:992px){.user-enabled{margin-left:40px}}"]
                    }] }
        ];
        /** @nocollapse */
        UserInfoComponent.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.AlertService },
            { type: AccountService }
        ]; };
        UserInfoComponent.propDecorators = {
            isViewOnly: [{ type: core.Input }],
            isGeneralEditor: [{ type: core.Input }],
            form: [{ type: core.ViewChild, args: ['f', { static: false },] }],
            userName: [{ type: core.ViewChild, args: ['userName', { static: false },] }],
            userPassword: [{ type: core.ViewChild, args: ['userPassword', { static: false },] }],
            email: [{ type: core.ViewChild, args: ['email', { static: false },] }],
            currentPassword: [{ type: core.ViewChild, args: ['currentPassword', { static: false },] }],
            newPassword: [{ type: core.ViewChild, args: ['newPassword', { static: false },] }],
            confirmPassword: [{ type: core.ViewChild, args: ['confirmPassword', { static: false },] }],
            roles: [{ type: core.ViewChild, args: ['roles', { static: false },] }],
            rolesSelector: [{ type: core.ViewChild, args: ['rolesSelector', { static: false },] }]
        };
        return UserInfoComponent;
    }());
    if (false) {
        /** @type {?} */
        UserInfoComponent.prototype.isEditMode;
        /** @type {?} */
        UserInfoComponent.prototype.isNewUser;
        /** @type {?} */
        UserInfoComponent.prototype.isSaving;
        /** @type {?} */
        UserInfoComponent.prototype.isChangePassword;
        /** @type {?} */
        UserInfoComponent.prototype.isEditingSelf;
        /** @type {?} */
        UserInfoComponent.prototype.showValidationErrors;
        /** @type {?} */
        UserInfoComponent.prototype.uniqueId;
        /** @type {?} */
        UserInfoComponent.prototype.user;
        /** @type {?} */
        UserInfoComponent.prototype.userEdit;
        /** @type {?} */
        UserInfoComponent.prototype.allRoles;
        /** @type {?} */
        UserInfoComponent.prototype.formResetToggle;
        /** @type {?} */
        UserInfoComponent.prototype.changesSavedCallback;
        /** @type {?} */
        UserInfoComponent.prototype.changesFailedCallback;
        /** @type {?} */
        UserInfoComponent.prototype.changesCancelledCallback;
        /** @type {?} */
        UserInfoComponent.prototype.isViewOnly;
        /** @type {?} */
        UserInfoComponent.prototype.isGeneralEditor;
        /** @type {?} */
        UserInfoComponent.prototype.form;
        /** @type {?} */
        UserInfoComponent.prototype.userName;
        /** @type {?} */
        UserInfoComponent.prototype.userPassword;
        /** @type {?} */
        UserInfoComponent.prototype.email;
        /** @type {?} */
        UserInfoComponent.prototype.currentPassword;
        /** @type {?} */
        UserInfoComponent.prototype.newPassword;
        /** @type {?} */
        UserInfoComponent.prototype.confirmPassword;
        /** @type {?} */
        UserInfoComponent.prototype.roles;
        /** @type {?} */
        UserInfoComponent.prototype.rolesSelector;
        /**
         * @type {?}
         * @private
         */
        UserInfoComponent.prototype.alertService;
        /**
         * @type {?}
         * @private
         */
        UserInfoComponent.prototype.accountService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/users-management/users-management.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        /**
         * @return {?}
         */
        UsersManagementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var gT = (/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return _this.translationService.getTranslation(key); });
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
        /**
         * @return {?}
         */
        UsersManagementComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.userEditor.changesSavedCallback = (/**
             * @return {?}
             */
            function () {
                _this.addNewUserToList();
                _this.editorModal.hide();
            });
            this.userEditor.changesCancelledCallback = (/**
             * @return {?}
             */
            function () {
                _this.editedUser = null;
                _this.sourceUser = null;
                _this.editorModal.hide();
            });
        };
        /**
         * @return {?}
         */
        UsersManagementComponent.prototype.addNewUserToList = /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            if (this.sourceUser) {
                Object.assign(this.sourceUser, this.editedUser);
                /** @type {?} */
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
                /** @type {?} */
                var user = new ngxOauth2.User();
                Object.assign(user, this.editedUser);
                this.editedUser = null;
                /** @type {?} */
                var maxIndex = 0;
                try {
                    for (var _b = __values(this.rowsCache), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var u = _c.value;
                        if (((/** @type {?} */ (u))).index > maxIndex) {
                            maxIndex = ((/** @type {?} */ (u))).index;
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
                ((/** @type {?} */ (user))).index = maxIndex + 1;
                this.rowsCache.splice(0, 0, user);
                this.rows.splice(0, 0, user);
                this.rows = __spread(this.rows);
            }
        };
        /**
         * @return {?}
         */
        UsersManagementComponent.prototype.loadData = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.alertService.startLoadingMessage();
            this.loadingIndicator = true;
            if (this.canViewRoles) {
                this.accountService.getUsersAndRoles().subscribe((/**
                 * @param {?} results
                 * @return {?}
                 */
                function (results) { return _this.onDataLoadSuccessful(results[0], results[1]); }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return _this.onDataLoadFailed(error); }));
            }
            else {
                this.accountService.getUsers().subscribe((/**
                 * @param {?} users
                 * @return {?}
                 */
                function (users) { return _this.onDataLoadSuccessful(users, _this.accountService.currentUser.roles.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) { return new Role(x); }))); }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return _this.onDataLoadFailed(error); }));
            }
        };
        /**
         * @param {?} users
         * @param {?} roles
         * @return {?}
         */
        UsersManagementComponent.prototype.onDataLoadSuccessful = /**
         * @param {?} users
         * @param {?} roles
         * @return {?}
         */
        function (users, roles) {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            users.forEach((/**
             * @param {?} user
             * @param {?} index
             * @param {?} users
             * @return {?}
             */
            function (user, index, users) {
                ((/** @type {?} */ (user))).index = index + 1;
            }));
            this.rowsCache = __spread(users);
            this.rows = users;
            this.allRoles = roles;
        };
        /**
         * @param {?} error
         * @return {?}
         */
        UsersManagementComponent.prototype.onDataLoadFailed = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage('Load Error', "Unable to retrieve users from the server.\r\nErrors: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        UsersManagementComponent.prototype.onSearchChanged = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.rows = this.rowsCache.filter((/**
             * @param {?} r
             * @return {?}
             */
            function (r) { return ngxAppkitContractsAlpha.Utilities.searchArray(value, false, r.userName, r.fullName, r.email, r.phoneNumber, r.jobTitle, r.roles); }));
        };
        /**
         * @return {?}
         */
        UsersManagementComponent.prototype.onEditorModalHidden = /**
         * @return {?}
         */
        function () {
            this.editingUserName = null;
            this.userEditor.resetForm(true);
        };
        /**
         * @return {?}
         */
        UsersManagementComponent.prototype.newUser = /**
         * @return {?}
         */
        function () {
            this.editingUserName = null;
            this.sourceUser = null;
            this.editedUser = this.userEditor.newUser(this.allRoles);
            this.editorModal.show();
        };
        /**
         * @param {?} row
         * @return {?}
         */
        UsersManagementComponent.prototype.editUser = /**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            this.editingUserName = { name: row.userName };
            this.sourceUser = row;
            this.editedUser = this.userEditor.editUser(row, this.allRoles);
            this.editorModal.show();
        };
        /**
         * @param {?} row
         * @return {?}
         */
        UsersManagementComponent.prototype.deleteUser = /**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            var _this = this;
            this.alertService.showDialog('Are you sure you want to delete \"' + row.userName + '\"?', ngxAppkitContractsAlpha.DialogType.confirm, (/**
             * @return {?}
             */
            function () { return _this.deleteUserHelper(row); }));
        };
        /**
         * @param {?} row
         * @return {?}
         */
        UsersManagementComponent.prototype.deleteUserHelper = /**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            var _this = this;
            this.alertService.startLoadingMessage('Deleting...');
            this.loadingIndicator = true;
            this.accountService.deleteUser(row)
                .subscribe((/**
             * @param {?} results
             * @return {?}
             */
            function (results) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.rowsCache = _this.rowsCache.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item !== row; }));
                _this.rows = _this.rows.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item !== row; }));
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.alertService.showStickyMessage('Delete Error', "An error occured whilst deleting the user.\r\nError: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            }));
        };
        Object.defineProperty(UsersManagementComponent.prototype, "canAssignRoles", {
            get: /**
             * @return {?}
             */
            function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.assignRolesPermission);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UsersManagementComponent.prototype, "canViewRoles", {
            get: /**
             * @return {?}
             */
            function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.viewRolesPermission);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UsersManagementComponent.prototype, "canManageUsers", {
            get: /**
             * @return {?}
             */
            function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.manageUsersPermission);
            },
            enumerable: true,
            configurable: true
        });
        UsersManagementComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'users-management',
                        template: "<div>\n  <div class=\"row control-box\">\n    <div class=\"col-lg-8\">\n      <div class=\"form-group search-box\">\n        <search-box (searchChange)=\"onSearchChanged($event)\" placeholder=\"{{'users.management.Search' | translate}}\">></search-box>\n      </div>\n    </div>\n    <div class=\"col-lg-4 pr-lg-5\">\n      <ul class=\"nav flex-column flex-lg-row justify-content-end\">\n        <li *ngIf=\"canManageUsers && canAssignRoles\" class=\"nav-item toolbaritem\">\n          <a class=\"nav-link\" href=\"javascript:;\" (click)=\"newUser()\">\n            <i class=\"fa fa-plus-circle\"></i> {{'users.management.NewUser' | translate}}\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <ngx-datatable class=\"material colored-header sm table table-striped table-hover\"\n                 [loadingIndicator]=\"loadingIndicator\"\n                 [rows]=\"rows\"\n                 [rowHeight]=\"35\"\n                 [headerHeight]=\"35\"\n                 [footerHeight]=\"35\"\n                 [columns]=\"columns\"\n                 [scrollbarV]=\"true\"\n                 [columnMode]=\"'force'\">\n  </ngx-datatable>\n\n  <ng-template #indexTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n  </ng-template>\n\n  <ng-template #userNameTemplate let-row=\"row\" let-value=\"value\">\n    <span [class.locked-out]=\"row.isLockedOut\" [class.user-disabled]=\"!row.isEnabled\">\n      <i *ngIf=\"row.isLockedOut\" class=\"fa fa-exclamation-triangle\"> </i>\n      <i *ngIf=\"!row.isEnabled\" class=\"fa fa-exclamation\"> </i>\n      {{value}}\n    </span>\n  </ng-template>\n\n  <ng-template #rolesTemplate let-row=\"row\" let-value=\"value\" let-i=\"index\">\n    <span class=\"user-role badge badge-pill badge-secondary\" *ngFor=\"let role of value\">{{role}}</span>\n  </ng-template>\n\n  <ng-template #actionsTemplate let-row=\"row\" let-value=\"value\" let-i=\"index\">\n    <div *ngIf=\"canManageUsers\">\n      <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"editUser(row)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> {{'users.management.Edit' | translate}}</a>|\n      <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"deleteUser(row)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> {{'users.management.Delete' | translate}}</a>\n    </div>\n  </ng-template>\n\n\n  <div class=\"modal fade\" bsModal #editorModal=\"bs-modal\" (onHidden)=\"onEditorModalHidden()\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 *ngIf=\"!editingUserName\" class=\"modal-title float-left\"><i class=\"fa fa-user-plus\"></i> {{'users.management.NewUser' | translate}}</h4>\n          <h4 *ngIf=\"editingUserName\" class=\"modal-title float-left\"><i class=\"fa fa-user-circle-o\"></i> {{'users.management.EditUser' | translate:editingUserName}}</h4>\n          <button type=\"button\" class=\"close float-right\" title=\"Close\" (click)=\"editorModal.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <user-info #userEditor [isGeneralEditor]=\"true\"></user-info>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        styles: [".user-role{font-size:.8em!important;margin-right:1px}.control-box{margin-bottom:5px}.search-box{margin:0}.nav-item.toolbaritem a{padding-top:3px;padding-bottom:3px;min-width:100px}.user-disabled{color:#777;font-style:italic}.locked-out{background-color:#ff4500;color:#f5f5f5;width:100%;display:inline-block;padding-left:5px}"]
                    }] }
        ];
        /** @nocollapse */
        UsersManagementComponent.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.AlertService },
            { type: ngxAppkitServicesAlpha.AppTranslationService },
            { type: AccountService }
        ]; };
        UsersManagementComponent.propDecorators = {
            indexTemplate: [{ type: core.ViewChild, args: ['indexTemplate', { static: true },] }],
            userNameTemplate: [{ type: core.ViewChild, args: ['userNameTemplate', { static: true },] }],
            rolesTemplate: [{ type: core.ViewChild, args: ['rolesTemplate', { static: true },] }],
            actionsTemplate: [{ type: core.ViewChild, args: ['actionsTemplate', { static: true },] }],
            editorModal: [{ type: core.ViewChild, args: ['editorModal', { static: true },] }],
            userEditor: [{ type: core.ViewChild, args: ['userEditor', { static: true },] }]
        };
        return UsersManagementComponent;
    }());
    if (false) {
        /** @type {?} */
        UsersManagementComponent.prototype.columns;
        /** @type {?} */
        UsersManagementComponent.prototype.rows;
        /** @type {?} */
        UsersManagementComponent.prototype.rowsCache;
        /** @type {?} */
        UsersManagementComponent.prototype.editedUser;
        /** @type {?} */
        UsersManagementComponent.prototype.sourceUser;
        /** @type {?} */
        UsersManagementComponent.prototype.editingUserName;
        /** @type {?} */
        UsersManagementComponent.prototype.loadingIndicator;
        /** @type {?} */
        UsersManagementComponent.prototype.allRoles;
        /** @type {?} */
        UsersManagementComponent.prototype.indexTemplate;
        /** @type {?} */
        UsersManagementComponent.prototype.userNameTemplate;
        /** @type {?} */
        UsersManagementComponent.prototype.rolesTemplate;
        /** @type {?} */
        UsersManagementComponent.prototype.actionsTemplate;
        /** @type {?} */
        UsersManagementComponent.prototype.editorModal;
        /** @type {?} */
        UsersManagementComponent.prototype.userEditor;
        /**
         * @type {?}
         * @private
         */
        UsersManagementComponent.prototype.alertService;
        /**
         * @type {?}
         * @private
         */
        UsersManagementComponent.prototype.translationService;
        /**
         * @type {?}
         * @private
         */
        UsersManagementComponent.prototype.accountService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/bootstrap-select.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BootstrapSelectDirective = /** @class */ (function () {
        function BootstrapSelectDirective(el) {
            var _this = this;
            this.el = el;
            this.oldValues = '';
            this.ngModelChange = new core.EventEmitter();
            this.shown = new core.EventEmitter();
            this.hidden = new core.EventEmitter();
            this.changedSubscription = rxjs.fromEvent($(this.el.nativeElement), 'changed.bs.select').subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.checkIsValuesChanged(_this.selected)) {
                    _this.ngModelChange.emit(_this.selected);
                }
            })); }));
            this.shownSubscription = rxjs.fromEvent($(this.el.nativeElement), 'shown.bs.select').subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return setTimeout((/**
             * @return {?}
             */
            function () { return _this.shown.emit(); })); }));
            this.hiddenSubscription = rxjs.fromEvent($(this.el.nativeElement), 'hidden.bs.select').subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return setTimeout((/**
             * @return {?}
             */
            function () { return _this.hidden.emit(); })); }));
        }
        Object.defineProperty(BootstrapSelectDirective.prototype, "ngModel", {
            set: /**
             * @param {?} values
             * @return {?}
             */
            function (values) {
                var _this = this;
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.selected = values; }));
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BootstrapSelectDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            $(this.el.nativeElement).selectpicker();
            if (this.requiredAttribute) {
                $(this.el.nativeElement).selectpicker('setStyle', 'required', 'add');
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.refresh();
                _this.doValidation();
            }));
        };
        /**
         * @return {?}
         */
        BootstrapSelectDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
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
        /**
         * @private
         * @param {?} newValue
         * @return {?}
         */
        BootstrapSelectDirective.prototype.checkIsValuesChanged = /**
         * @private
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            var _this = this;
            return !(newValue == this.oldValues ||
                (newValue instanceof Array && newValue.length === this.oldValues.length && newValue.every((/**
                 * @param {?} v
                 * @param {?} i
                 * @return {?}
                 */
                function (v, i) { return v === _this.oldValues[i]; }))));
        };
        /**
         * @private
         * @return {?}
         */
        BootstrapSelectDirective.prototype.doValidation = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.requiredAttribute) {
                $(this.el.nativeElement).selectpicker('setStyle', !this.valid ? 'ng-valid' : 'ng-invalid', 'remove');
                $(this.el.nativeElement).selectpicker('setStyle', this.valid ? 'ng-valid' : 'ng-invalid', 'add');
            }
        };
        Object.defineProperty(BootstrapSelectDirective.prototype, "requiredAttribute", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                return this.required === '' || this.required == 'true';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BootstrapSelectDirective.prototype.refresh = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                $(_this.el.nativeElement).selectpicker('refresh');
            }));
        };
        /**
         * @return {?}
         */
        BootstrapSelectDirective.prototype.render = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                $(_this.el.nativeElement).selectpicker('render');
            }));
        };
        Object.defineProperty(BootstrapSelectDirective.prototype, "valid", {
            get: /**
             * @return {?}
             */
            function () {
                return this.requiredAttribute ? this.selected && this.selected.length > 0 : true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapSelectDirective.prototype, "selected", {
            get: /**
             * @return {?}
             */
            function () {
                return $(this.el.nativeElement).selectpicker('val');
            },
            set: /**
             * @param {?} values
             * @return {?}
             */
            function (values) {
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
        BootstrapSelectDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bootstrapSelect]',
                        exportAs: 'bootstrap-select'
                    },] }
        ];
        /** @nocollapse */
        BootstrapSelectDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        BootstrapSelectDirective.propDecorators = {
            required: [{ type: core.Input }],
            ngModel: [{ type: core.Input }],
            ngModelChange: [{ type: core.Output }],
            shown: [{ type: core.Output }],
            hidden: [{ type: core.Output }]
        };
        return BootstrapSelectDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        BootstrapSelectDirective.prototype.oldValues;
        /**
         * @type {?}
         * @private
         */
        BootstrapSelectDirective.prototype.changedSubscription;
        /**
         * @type {?}
         * @private
         */
        BootstrapSelectDirective.prototype.shownSubscription;
        /**
         * @type {?}
         * @private
         */
        BootstrapSelectDirective.prototype.hiddenSubscription;
        /** @type {?} */
        BootstrapSelectDirective.prototype.required;
        /** @type {?} */
        BootstrapSelectDirective.prototype.ngModelChange;
        /** @type {?} */
        BootstrapSelectDirective.prototype.shown;
        /** @type {?} */
        BootstrapSelectDirective.prototype.hidden;
        /**
         * @type {?}
         * @private
         */
        BootstrapSelectDirective.prototype.el;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/user-preferences/user-preferences.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserPreferencesComponent = /** @class */ (function () {
        function UserPreferencesComponent(alertService, translationService, accountService, themeManager, configurations) {
            this.alertService = alertService;
            this.translationService = translationService;
            this.accountService = accountService;
            this.themeManager = themeManager;
            this.configurations = configurations;
            this.themeSelectorToggle = true;
        }
        /**
         * @return {?}
         */
        UserPreferencesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.languageChangedSubscription = this.translationService.languageChanged$.subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.themeSelectorToggle = false;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.languageSelector.refresh();
                    _this.homePageSelector.refresh();
                    _this.themeSelectorToggle = true;
                }));
            }));
        };
        /**
         * @return {?}
         */
        UserPreferencesComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.languageChangedSubscription.unsubscribe();
        };
        /**
         * @return {?}
         */
        UserPreferencesComponent.prototype.reloadFromServer = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.alertService.startLoadingMessage();
            this.accountService.getUserPreferences()
                .subscribe((/**
             * @param {?} results
             * @return {?}
             */
            function (results) {
                _this.alertService.stopLoadingMessage();
                _this.configurations.import(results);
                _this.alertService.showMessage('Defaults loaded!', '', ngxAppkitContractsAlpha.MessageSeverity.info);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.alertService.stopLoadingMessage();
                _this.alertService.showStickyMessage('Load Error', "Unable to retrieve user preferences from the server.\r\nErrors: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            }));
        };
        /**
         * @return {?}
         */
        UserPreferencesComponent.prototype.setAsDefault = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.alertService.showDialog('Are you sure you want to set the current configuration as your new defaults?', ngxAppkitContractsAlpha.DialogType.confirm, (/**
             * @return {?}
             */
            function () { return _this.setAsDefaultHelper(); }), (/**
             * @return {?}
             */
            function () { return _this.alertService.showMessage('Operation Cancelled!', '', ngxAppkitContractsAlpha.MessageSeverity.default); }));
        };
        /**
         * @return {?}
         */
        UserPreferencesComponent.prototype.setAsDefaultHelper = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.alertService.startLoadingMessage('', 'Saving new defaults');
            this.accountService.updateUserPreferences(this.configurations.export())
                .subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this.alertService.stopLoadingMessage();
                _this.alertService.showMessage('New Defaults', 'Account defaults updated successfully', ngxAppkitContractsAlpha.MessageSeverity.success);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.alertService.stopLoadingMessage();
                _this.alertService.showStickyMessage('Save Error', "An error occured whilst saving configuration defaults.\r\nErrors: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            }));
        };
        /**
         * @return {?}
         */
        UserPreferencesComponent.prototype.resetDefault = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.alertService.showDialog('Are you sure you want to reset your defaults?', ngxAppkitContractsAlpha.DialogType.confirm, (/**
             * @return {?}
             */
            function () { return _this.resetDefaultHelper(); }), (/**
             * @return {?}
             */
            function () { return _this.alertService.showMessage('Operation Cancelled!', '', ngxAppkitContractsAlpha.MessageSeverity.default); }));
        };
        /**
         * @return {?}
         */
        UserPreferencesComponent.prototype.resetDefaultHelper = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.alertService.startLoadingMessage('', 'Resetting defaults');
            this.accountService.updateUserPreferences(null)
                .subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this.alertService.stopLoadingMessage();
                _this.configurations.import(null);
                _this.alertService.showMessage('Defaults Reset', 'Account defaults reset completed successfully', ngxAppkitContractsAlpha.MessageSeverity.success);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.alertService.stopLoadingMessage();
                _this.alertService.showStickyMessage('Save Error', "An error occured whilst resetting configuration defaults.\r\nErrors: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            }));
        };
        Object.defineProperty(UserPreferencesComponent.prototype, "canViewCustomers", {
            get: /**
             * @return {?}
             */
            function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.viewUsersPermission); // eg. viewCustomersPermission
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserPreferencesComponent.prototype, "canViewProducts", {
            get: /**
             * @return {?}
             */
            function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.viewUsersPermission); // eg. viewProductsPermission
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UserPreferencesComponent.prototype, "canViewOrders", {
            get: /**
             * @return {?}
             */
            function () {
                return true; // eg. viewOrdersPermission
            },
            enumerable: true,
            configurable: true
        });
        UserPreferencesComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'user-preferences',
                        template: "<div>\n    <div class=\"form-group row\">\n        <label for=\"refreshButton\" class=\"col-sm-3 col-form-label\">{{'preferences.ReloadPreferences' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <button id=\"refreshButton\" class=\"btn btn-outline-secondary\" (click)=\"reloadFromServer()\">\n                <i class=\"fa fa-refresh\"></i>\n            </button>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.ReloadPreferencesHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"language\" class=\"col-sm-3 col-form-label\">{{'preferences.Language' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <select id=\"language\" [(ngModel)]=\"configurations.language\" #languageSelector=\"bootstrap-select\" bootstrapSelect class=\"selectpicker form-control\">\n                <option data-subtext=\"(Default)\" value=\"en\">{{'preferences.English' | translate}}</option>\n                <option value=\"fr\">{{'preferences.French' | translate}}</option>\n                <option value=\"de\">{{'preferences.German' | translate}}</option>\n                <option value=\"pt\">{{'preferences.Portuguese' | translate}}</option>\n                <option value=\"ar\">{{'preferences.Arabic' | translate}}</option>\n                <option value=\"ko\">{{'preferences.Korean' | translate}}</option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.LanguageHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"homePage\" class=\"col-sm-3 col-form-label\">{{'preferences.HomePage' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <select id=\"homePage\" [(ngModel)]=\"configurations.homeUrl\" #homePageSelector=\"bootstrap-select\" bootstrapSelect class=\"selectpicker form-control\">\n                <option data-icon=\"fa fa-tachometer\" data-subtext=\"(Default)\" value=\"/\">{{'preferences.Dashboard' | translate}}</option>\n                <option *ngIf=\"canViewCustomers\" data-icon=\"fa fa-handshake-o\" value=\"/customers\">{{'preferences.Customers' | translate}}</option>\n                <option *ngIf=\"canViewProducts\" data-icon=\"fa fa-truck\" value=\"/products\">{{'preferences.Products' | translate}}</option>\n                <option *ngIf=\"canViewOrders\" data-icon=\"fa fa-shopping-cart\" value=\"/orders\">{{'preferences.Orders' | translate}}</option>\n                <option data-icon=\"fa fa-info-circle\" value=\"/about\">{{'preferences.About' | translate}}</option>\n                <option data-icon=\"fa fa-cog\" value=\"/settings\">{{'preferences.Settings' | translate}}</option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.HomePageHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"defaultTheme\" class=\"col-sm-3 col-form-label\">{{'preferences.Theme' | translate}} </label>\n        <div *ngIf=\"themeSelectorToggle\" class=\"col-sm-4\">\n            <select id=\"defaultTheme\" [(ngModel)]=\"configurations.themeId\" bootstrapSelect class=\"selectpicker theme-picker form-control\">\n                <option *ngFor=\"let theme of themeManager.themes\"\n                attr.data-content=\"<div class='theme-item' style='background-color: {{theme.background}}; color: {{theme.color}}'>{{'preferences.' + theme.name + 'Theme' | translate}}\n                <span class='small'>{{theme.isDark ? '(Dark)' : ''}}</span></div>\">\n                {{theme.id}}\n                </option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.ThemeHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardStatistics\">{{'preferences.DashboardStatistics' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardStatistics\" [(ngModel)]=\"configurations.showDashboardStatistics\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardStatisticsHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardTodo\">{{'preferences.DashboardNotifications' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardNotifications\" [(ngModel)]=\"configurations.showDashboardNotifications\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardNotificationsHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardTodo\">{{'preferences.DashboardTodo' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardTodo\" [(ngModel)]=\"configurations.showDashboardTodo\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardTodoHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardBanner\">{{'preferences.DashboardBanner' | translate}}</label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardBanner\" [(ngModel)]=\"configurations.showDashboardBanner\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardBannerHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"last-separator-hr\" />\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <div class=\"col-sm-3\">\n\n        </div>\n        <div class=\"col-sm-9\">\n            <div class=\"row float-left\">\n                <div class=\"col-sm-6 col-reset-default\">\n                    <button type=\"button\" (click)=\"resetDefault()\" class=\"btn btn-success\">\n                        <i class='fa fa-circle-o-notch'></i> {{'preferences.ResetDefault' | translate}}\n                    </button>\n                </div>\n                <div class=\"col-sm-6 col-set-default\">\n                    <button type=\"button\" (click)=\"setAsDefault()\" class=\"btn btn-primary\">\n                        <i class='fa fa-hdd-o'></i> {{'preferences.SetDefault' | translate}}\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n",
                        styles: [".separator-hr{margin:7px 5px;border-top-style:dashed}.subseparator-hr{margin:7px 5px;border-top-style:none}.last-separator-hr{margin-top:7px}.form-group{margin-top:0;margin-bottom:0}.form-control-plaintext{min-height:0}.checkbox{padding-top:0}.col-reset-default{padding-right:0}.col-set-default{padding-left:5px}.col-reset-default .btn,.col-set-default .btn{min-width:150px}@media (min-width:768px){.col-form-label{padding-top:5px}}"]
                    }] }
        ];
        /** @nocollapse */
        UserPreferencesComponent.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.AlertService },
            { type: ngxAppkitServicesAlpha.AppTranslationService },
            { type: AccountService },
            { type: ngxAppkitServicesAlpha.ThemeManager },
            { type: ngxAppkitServicesAlpha.ConfigurationService }
        ]; };
        UserPreferencesComponent.propDecorators = {
            languageSelector: [{ type: core.ViewChild, args: ['languageSelector', { static: true },] }],
            homePageSelector: [{ type: core.ViewChild, args: ['homePageSelector', { static: true },] }]
        };
        return UserPreferencesComponent;
    }());
    if (false) {
        /** @type {?} */
        UserPreferencesComponent.prototype.themeSelectorToggle;
        /** @type {?} */
        UserPreferencesComponent.prototype.languageChangedSubscription;
        /** @type {?} */
        UserPreferencesComponent.prototype.languageSelector;
        /** @type {?} */
        UserPreferencesComponent.prototype.homePageSelector;
        /**
         * @type {?}
         * @private
         */
        UserPreferencesComponent.prototype.alertService;
        /**
         * @type {?}
         * @private
         */
        UserPreferencesComponent.prototype.translationService;
        /**
         * @type {?}
         * @private
         */
        UserPreferencesComponent.prototype.accountService;
        /** @type {?} */
        UserPreferencesComponent.prototype.themeManager;
        /** @type {?} */
        UserPreferencesComponent.prototype.configurations;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/role-editor/role-editor.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        /**
         * @param {?} caption
         * @param {?} message
         * @return {?}
         */
        RoleEditorComponent.prototype.showErrorAlert = /**
         * @param {?} caption
         * @param {?} message
         * @return {?}
         */
        function (caption, message) {
            this.alertService.showMessage(caption, message, ngxAppkitContractsAlpha.MessageSeverity.error);
        };
        /**
         * @return {?}
         */
        RoleEditorComponent.prototype.save = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.isSaving = true;
            this.alertService.startLoadingMessage('Saving changes...');
            this.roleEdit.permissions = this.getSelectedPermissions();
            if (this.isNewRole) {
                this.accountService.newRole(this.roleEdit).subscribe((/**
                 * @param {?} role
                 * @return {?}
                 */
                function (role) { return _this.saveSuccessHelper(role); }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return _this.saveFailedHelper(error); }));
            }
            else {
                this.accountService.updateRole(this.roleEdit).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) { return _this.saveSuccessHelper(); }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) { return _this.saveFailedHelper(error); }));
            }
        };
        /**
         * @private
         * @param {?=} role
         * @return {?}
         */
        RoleEditorComponent.prototype.saveSuccessHelper = /**
         * @private
         * @param {?=} role
         * @return {?}
         */
        function (role) {
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
            if (!this.isNewRole && this.accountService.currentUser.roles.some((/**
             * @param {?} r
             * @return {?}
             */
            function (r) { return r == _this.editingRoleName; }))) {
                this.refreshLoggedInUser();
            }
            if (this.changesSavedCallback) {
                this.changesSavedCallback();
            }
        };
        /**
         * @private
         * @return {?}
         */
        RoleEditorComponent.prototype.refreshLoggedInUser = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this.accountService.refreshLoggedInUser()
                .subscribe((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.alertService.resetStickyMessage();
                _this.alertService.showStickyMessage('Refresh failed', 'An error occured whilst refreshing logged in user information from the server', ngxAppkitContractsAlpha.MessageSeverity.error, error);
            }));
        };
        /**
         * @private
         * @param {?} error
         * @return {?}
         */
        RoleEditorComponent.prototype.saveFailedHelper = /**
         * @private
         * @param {?} error
         * @return {?}
         */
        function (error) {
            this.isSaving = false;
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Save Error', 'The below errors occured whilst saving your changes:', ngxAppkitContractsAlpha.MessageSeverity.error, error);
            this.alertService.showStickyMessage(error, null, ngxAppkitContractsAlpha.MessageSeverity.error);
            if (this.changesFailedCallback) {
                this.changesFailedCallback();
            }
        };
        /**
         * @return {?}
         */
        RoleEditorComponent.prototype.cancel = /**
         * @return {?}
         */
        function () {
            this.roleEdit = new Role();
            this.showValidationErrors = false;
            this.resetForm();
            this.alertService.showMessage('Cancelled', 'Operation cancelled by user', ngxAppkitContractsAlpha.MessageSeverity.default);
            this.alertService.resetStickyMessage();
            if (this.changesCancelledCallback) {
                this.changesCancelledCallback();
            }
        };
        /**
         * @return {?}
         */
        RoleEditorComponent.prototype.selectAll = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.allPermissions.forEach((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return _this.selectedValues[p.value] = true; }));
        };
        /**
         * @return {?}
         */
        RoleEditorComponent.prototype.selectNone = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.allPermissions.forEach((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return _this.selectedValues[p.value] = false; }));
        };
        /**
         * @param {?} groupName
         * @return {?}
         */
        RoleEditorComponent.prototype.toggleGroup = /**
         * @param {?} groupName
         * @return {?}
         */
        function (groupName) {
            var _this = this;
            /** @type {?} */
            var firstMemberValue;
            this.allPermissions.forEach((/**
             * @param {?} p
             * @return {?}
             */
            function (p) {
                if (p.groupName != groupName) {
                    return;
                }
                if (firstMemberValue == null) {
                    firstMemberValue = _this.selectedValues[p.value] == true;
                }
                _this.selectedValues[p.value] = !firstMemberValue;
            }));
        };
        /**
         * @private
         * @return {?}
         */
        RoleEditorComponent.prototype.getSelectedPermissions = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            return this.allPermissions.filter((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return _this.selectedValues[p.value] == true; }));
        };
        /**
         * @param {?=} replace
         * @return {?}
         */
        RoleEditorComponent.prototype.resetForm = /**
         * @param {?=} replace
         * @return {?}
         */
        function (replace) {
            var _this = this;
            if (replace === void 0) { replace = false; }
            if (!replace) {
                this.form.reset();
            }
            else {
                this.formResetToggle = false;
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.formResetToggle = true;
                }));
            }
        };
        /**
         * @param {?} allPermissions
         * @return {?}
         */
        RoleEditorComponent.prototype.newRole = /**
         * @param {?} allPermissions
         * @return {?}
         */
        function (allPermissions) {
            this.isNewRole = true;
            this.showValidationErrors = true;
            this.editingRoleName = null;
            this.allPermissions = allPermissions;
            this.selectedValues = {};
            this.roleEdit = new Role();
            return this.roleEdit;
        };
        /**
         * @param {?} role
         * @param {?} allPermissions
         * @return {?}
         */
        RoleEditorComponent.prototype.editRole = /**
         * @param {?} role
         * @param {?} allPermissions
         * @return {?}
         */
        function (role, allPermissions) {
            var _this = this;
            if (role) {
                this.isNewRole = false;
                this.showValidationErrors = true;
                this.editingRoleName = role.name;
                this.allPermissions = allPermissions;
                this.selectedValues = {};
                role.permissions.forEach((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return _this.selectedValues[p.value] = true; }));
                this.roleEdit = new Role();
                Object.assign(this.roleEdit, role);
                return this.roleEdit;
            }
            else {
                return this.newRole(allPermissions);
            }
        };
        Object.defineProperty(RoleEditorComponent.prototype, "canManageRoles", {
            get: /**
             * @return {?}
             */
            function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.manageRolesPermission);
            },
            enumerable: true,
            configurable: true
        });
        RoleEditorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'role-editor',
                        template: "<div>\n  <form *ngIf=\"formResetToggle\" name=\"roleEditorForm\" #f=\"ngForm\" novalidate\n        (ngSubmit)=\"f.form.valid ? save() :\n          (!roleName.valid && showErrorAlert('Role name is required', 'Please enter a role name (minimum of 2 and maximum of 200 characters)'));\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-5\">\n        <div class=\"form-group row has-feedback-icon\">\n          <label class=\"col-form-label col-md-3\" for=\"roleName\">{{'roles.editor.Name' | translate}}</label>\n          <div class=\"col-md-9\">\n            <input [disabled]=\"!canManageRoles\" type=\"text\" id=\"roleName\" name=\"roleName\" placeholder=\"Enter role name\" class=\"form-control\"\n                   [ngClass]=\"{'is-valid': f.submitted && roleName.valid, 'is-invalid' : f.submitted && !roleName.valid}\" [(ngModel)]=\"roleEdit.name\" #roleName=\"ngModel\" required minlength=\"2\" maxlength=\"200\" />\n            <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': roleName.valid, 'fa-times' : !roleName.valid}\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-7\">\n        <div class=\"form-group row\">\n          <label class=\"col-form-label col-md-3\" for=\"roleDescription\">{{'roles.editor.Description' | translate}}</label>\n          <div class=\"col-md-9\">\n            <input [disabled]=\"!canManageRoles\" type=\"text\" id=\"roleDescription\" name=\"roleDescription\" placeholder=\"Enter role description\" class=\"form-control\" [(ngModel)]=\"roleEdit.description\" />\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <span *ngIf=\"showValidationErrors && f.submitted && !roleName.valid\" class=\"invalid-feedback\">\n          {{'roles.editor.RoleNameRequired' | translate}}\n        </span>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <hr class=\"edit-separator-hr\" />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-12 card card-body bg-light well-sm permissionsRow\">\n        <div class=\"row\">\n\n          <ng-template ngFor let-permissionGroup [ngForOf]=\"allPermissions | groupBy: 'groupName'\" let-i=\"index\">\n            <div class=\"form-group row col-sm-6 permissionsColumn\">\n              <label class=\"col-md-5 col-form-label group-name\" for=\"checkboxes\" (click)=\"toggleGroup(permissionGroup.key)\">{{permissionGroup.key}}</label>\n              <div class=\"col-md-7\">\n                <div class=\"form-check\" *ngFor=\"let permission of permissionGroup.value\">\n                  <input [disabled]=\"!canManageRoles\" name=\"checkboxes-{{permission.value}}\" id=\"checkboxes-{{permission.value}}\" type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"selectedValues[permission.value]\">\n                  <label class=\"form-check-label\" tooltip=\"{{permission.description}}\" for=\"checkboxes-{{permission.value}}\">{{permission.name}}</label>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"(i + 1) % 2 === 0\" class=\"clearfix\"></div>\n          </ng-template>\n\n        </div>\n      </div>\n\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <hr class=\"edit-last-separator-hr\" />\n      </div>\n    </div>\n\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-5\">\n        <div *ngIf=\"canManageRoles\" class=\"float-left\">\n          <a (click)=\"selectAll()\" href=\"javascript:;\" class=\"btn btn-link\">{{'roles.editor.SelectAll' | translate}}</a>|<a (click)=\"selectNone()\" href=\"javascript:;\" class=\"btn btn-link\">{{'roles.editor.SelectNone' | translate}}</a>\n        </div>\n      </div>\n\n      <div class=\"col-sm-7\">\n        <div ngPreserveWhitespaces class=\"float-right\">\n          <button *ngIf=\"!canManageRoles\" type=\"button\" (click)=\"cancel()\" class=\"btn btn-outline-secondary\">{{'roles.editor.Close' | translate}}</button>\n          <button *ngIf=\"canManageRoles\" type=\"button\" (click)=\"cancel()\" class=\"btn btn-danger\" [disabled]=\"isSaving\"><i class='fa fa-times'></i> {{'roles.editor.Cancel' | translate}}</button>\n          <button *ngIf=\"canManageRoles\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isSaving\">\n            <i *ngIf=\"!isSaving\" class='fa fa-save'></i><i *ngIf=\"isSaving\" class='fa fa-circle-o-notch fa-spin'></i> {{isSaving ? ('roles.editor.Saving' | translate) : ('roles.editor.Save' | translate)}}\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </form>\n</div>\n",
                        styles: [".separator-hr{margin:0 5px;border-top-style:dashed}.edit-separator-hr{margin:10px 5px;border-top-style:dashed}.last-separator-hr{margin-top:5px}.edit-last-separator-hr{margin-top:15px}.form-group{margin-top:0;margin-bottom:0}input.form-control{border-left-width:5px}.invalid-feedback{display:block}.group-name{padding-top:0;font-weight:500;padding-right:0}.permissionsColumn{margin-bottom:20px}.permissionsRow{margin:0 15px}.well-sm{padding:.5rem}@media (min-width:992px){.user-enabled{margin-left:40px}}"]
                    }] }
        ];
        /** @nocollapse */
        RoleEditorComponent.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.AlertService },
            { type: AccountService }
        ]; };
        RoleEditorComponent.propDecorators = {
            form: [{ type: core.ViewChild, args: ['f', { static: false },] }]
        };
        return RoleEditorComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        RoleEditorComponent.prototype.isNewRole;
        /** @type {?} */
        RoleEditorComponent.prototype.isSaving;
        /** @type {?} */
        RoleEditorComponent.prototype.showValidationErrors;
        /** @type {?} */
        RoleEditorComponent.prototype.roleEdit;
        /** @type {?} */
        RoleEditorComponent.prototype.allPermissions;
        /** @type {?} */
        RoleEditorComponent.prototype.selectedValues;
        /**
         * @type {?}
         * @private
         */
        RoleEditorComponent.prototype.editingRoleName;
        /** @type {?} */
        RoleEditorComponent.prototype.formResetToggle;
        /** @type {?} */
        RoleEditorComponent.prototype.changesSavedCallback;
        /** @type {?} */
        RoleEditorComponent.prototype.changesFailedCallback;
        /** @type {?} */
        RoleEditorComponent.prototype.changesCancelledCallback;
        /**
         * @type {?}
         * @private
         */
        RoleEditorComponent.prototype.form;
        /**
         * @type {?}
         * @private
         */
        RoleEditorComponent.prototype.alertService;
        /**
         * @type {?}
         * @private
         */
        RoleEditorComponent.prototype.accountService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/roles-management/roles-management.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        /**
         * @return {?}
         */
        RolesManagementComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var gT = (/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return _this.translationService.getTranslation(key); });
            this.columns = [
                { prop: 'index', name: '#', width: 50, cellTemplate: this.indexTemplate, canAutoResize: false },
                { prop: 'name', name: gT('roles.management.Name'), width: 180 },
                { prop: 'description', name: gT('roles.management.Description'), width: 320 },
                { prop: 'usersCount', name: gT('roles.management.Users'), width: 50 },
                { name: '', width: 160, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
            ];
            this.loadData();
        };
        /**
         * @return {?}
         */
        RolesManagementComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.roleEditor.changesSavedCallback = (/**
             * @return {?}
             */
            function () {
                _this.addNewRoleToList();
                _this.editorModal.hide();
            });
            this.roleEditor.changesCancelledCallback = (/**
             * @return {?}
             */
            function () {
                _this.editedRole = null;
                _this.sourceRole = null;
                _this.editorModal.hide();
            });
        };
        /**
         * @return {?}
         */
        RolesManagementComponent.prototype.addNewRoleToList = /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            if (this.sourceRole) {
                Object.assign(this.sourceRole, this.editedRole);
                /** @type {?} */
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
                /** @type {?} */
                var role = new Role();
                Object.assign(role, this.editedRole);
                this.editedRole = null;
                /** @type {?} */
                var maxIndex = 0;
                try {
                    for (var _b = __values(this.rowsCache), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var r = _c.value;
                        if (((/** @type {?} */ (r))).index > maxIndex) {
                            maxIndex = ((/** @type {?} */ (r))).index;
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
                ((/** @type {?} */ (role))).index = maxIndex + 1;
                this.rowsCache.splice(0, 0, role);
                this.rows.splice(0, 0, role);
                this.rows = __spread(this.rows);
            }
        };
        /**
         * @return {?}
         */
        RolesManagementComponent.prototype.loadData = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.alertService.startLoadingMessage();
            this.loadingIndicator = true;
            this.accountService.getRolesAndPermissions()
                .subscribe((/**
             * @param {?} results
             * @return {?}
             */
            function (results) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                /** @type {?} */
                var roles = results[0];
                /** @type {?} */
                var permissions = results[1];
                roles.forEach((/**
                 * @param {?} role
                 * @param {?} index
                 * @param {?} roles
                 * @return {?}
                 */
                function (role, index, roles) {
                    ((/** @type {?} */ (role))).index = index + 1;
                }));
                _this.rowsCache = __spread(roles);
                _this.rows = roles;
                _this.allPermissions = permissions;
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.alertService.showStickyMessage('Load Error', "Unable to retrieve roles from the server.\r\nErrors: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            }));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        RolesManagementComponent.prototype.onSearchChanged = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.rows = this.rowsCache.filter((/**
             * @param {?} r
             * @return {?}
             */
            function (r) { return ngxAppkitContractsAlpha.Utilities.searchArray(value, false, r.name, r.description); }));
        };
        /**
         * @return {?}
         */
        RolesManagementComponent.prototype.onEditorModalHidden = /**
         * @return {?}
         */
        function () {
            this.editingRoleName = null;
            this.roleEditor.resetForm(true);
        };
        /**
         * @return {?}
         */
        RolesManagementComponent.prototype.newRole = /**
         * @return {?}
         */
        function () {
            this.editingRoleName = null;
            this.sourceRole = null;
            this.editedRole = this.roleEditor.newRole(this.allPermissions);
            this.editorModal.show();
        };
        /**
         * @param {?} row
         * @return {?}
         */
        RolesManagementComponent.prototype.editRole = /**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            this.editingRoleName = { name: row.name };
            this.sourceRole = row;
            this.editedRole = this.roleEditor.editRole(row, this.allPermissions);
            this.editorModal.show();
        };
        /**
         * @param {?} row
         * @return {?}
         */
        RolesManagementComponent.prototype.deleteRole = /**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            var _this = this;
            this.alertService.showDialog('Are you sure you want to delete the \"' + row.name + '\" role?', ngxAppkitContractsAlpha.DialogType.confirm, (/**
             * @return {?}
             */
            function () { return _this.deleteRoleHelper(row); }));
        };
        /**
         * @param {?} row
         * @return {?}
         */
        RolesManagementComponent.prototype.deleteRoleHelper = /**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            var _this = this;
            this.alertService.startLoadingMessage('Deleting...');
            this.loadingIndicator = true;
            this.accountService.deleteRole(row)
                .subscribe((/**
             * @param {?} results
             * @return {?}
             */
            function (results) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.rowsCache = _this.rowsCache.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item !== row; }));
                _this.rows = _this.rows.filter((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item !== row; }));
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.alertService.stopLoadingMessage();
                _this.loadingIndicator = false;
                _this.alertService.showStickyMessage('Delete Error', "An error occured whilst deleting the role.\r\nError: \"" + ngxAppkitContractsAlpha.Utilities.getHttpResponseMessages(error) + "\"", ngxAppkitContractsAlpha.MessageSeverity.error, error);
            }));
        };
        Object.defineProperty(RolesManagementComponent.prototype, "canManageRoles", {
            get: /**
             * @return {?}
             */
            function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.manageRolesPermission);
            },
            enumerable: true,
            configurable: true
        });
        RolesManagementComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'roles-management',
                        template: "<div>\n  <div class=\"row control-box\">\n    <div class=\"col-lg-8\">\n      <div class=\"form-group search-box\">\n        <search-box (searchChange)=\"onSearchChanged($event)\" placeholder=\"{{'roles.management.Search' | translate}}\">></search-box>\n      </div>\n    </div>\n    <div class=\"col-lg-4 pr-lg-5\">\n      <ul class=\"nav flex-column flex-lg-row justify-content-end\">\n        <li *ngIf=\"canManageRoles\" class=\"nav-item toolbaritem\">\n          <a class=\"nav-link\" href=\"javascript:;\" (click)=\"newRole()\">\n            <i class=\"fa fa-plus-circle\"></i> {{'roles.management.NewRole' | translate}}\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <ngx-datatable class=\"material colored-header sm table table-striped table-hover\"\n                 [loadingIndicator]=\"loadingIndicator\"\n                 [rows]=\"rows\"\n                 [rowHeight]=\"35\"\n                 [headerHeight]=\"35\"\n                 [footerHeight]=\"35\"\n                 [columns]=\"columns\"\n                 [scrollbarV]=\"true\"\n                 [columnMode]=\"'force'\">\n  </ngx-datatable>\n\n  <ng-template #indexTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n  </ng-template>\n\n\n  <ng-template #actionsTemplate let-row=\"row\" let-value=\"value\" let-i=\"index\">\n    <a *ngIf=\"canManageRoles\" class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"editRole(row)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> {{'roles.management.Edit' | translate}}</a>\n    <a *ngIf=\"!canManageRoles\" class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"editRole(row)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> {{'roles.management.Details' | translate}}</a>\n    {{canManageRoles ? '|' : ''}}\n    <a *ngIf=\"canManageRoles\" class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"deleteRole(row)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> {{'roles.management.Delete' | translate}}</a>\n  </ng-template>\n\n\n  <div class=\"modal fade\" bsModal #editorModal=\"bs-modal\" (onHidden)=\"onEditorModalHidden()\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 *ngIf=\"!canManageRoles\" class=\"modal-title float-left\"><i class=\"fa fa-shield\"></i> {{'roles.management.RoleDetails' | translate:editingRoleName}}</h4>\n          <h4 *ngIf=\"canManageRoles\" class=\"modal-title float-left\"><i class=\"fa fa-shield\"></i> {{editingRoleName ? ('roles.management.EditRole' | translate:editingRoleName) : ('roles.management.NewRole' | translate)}}</h4>\n          <button type=\"button\" class=\"close float-right\" title=\"Close\" (click)=\"editorModal.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <role-editor #roleEditor></role-editor>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        styles: [".control-box{margin-bottom:5px}.search-box{margin:0}.nav-item.toolbaritem a{padding-top:3px;padding-bottom:3px;min-width:100px}"]
                    }] }
        ];
        /** @nocollapse */
        RolesManagementComponent.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.AlertService },
            { type: ngxAppkitServicesAlpha.AppTranslationService },
            { type: AccountService }
        ]; };
        RolesManagementComponent.propDecorators = {
            indexTemplate: [{ type: core.ViewChild, args: ['indexTemplate', { static: true },] }],
            actionsTemplate: [{ type: core.ViewChild, args: ['actionsTemplate', { static: true },] }],
            editorModal: [{ type: core.ViewChild, args: ['editorModal', { static: true },] }],
            roleEditor: [{ type: core.ViewChild, args: ['roleEditor', { static: true },] }]
        };
        return RolesManagementComponent;
    }());
    if (false) {
        /** @type {?} */
        RolesManagementComponent.prototype.columns;
        /** @type {?} */
        RolesManagementComponent.prototype.rows;
        /** @type {?} */
        RolesManagementComponent.prototype.rowsCache;
        /** @type {?} */
        RolesManagementComponent.prototype.allPermissions;
        /** @type {?} */
        RolesManagementComponent.prototype.editedRole;
        /** @type {?} */
        RolesManagementComponent.prototype.sourceRole;
        /** @type {?} */
        RolesManagementComponent.prototype.editingRoleName;
        /** @type {?} */
        RolesManagementComponent.prototype.loadingIndicator;
        /** @type {?} */
        RolesManagementComponent.prototype.indexTemplate;
        /** @type {?} */
        RolesManagementComponent.prototype.actionsTemplate;
        /** @type {?} */
        RolesManagementComponent.prototype.editorModal;
        /** @type {?} */
        RolesManagementComponent.prototype.roleEditor;
        /**
         * @type {?}
         * @private
         */
        RolesManagementComponent.prototype.alertService;
        /**
         * @type {?}
         * @private
         */
        RolesManagementComponent.prototype.translationService;
        /**
         * @type {?}
         * @private
         */
        RolesManagementComponent.prototype.accountService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/todo-demo/todo-demo.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            get: /**
             * @return {?}
             */
            function () {
                if (this.authService.currentUser) {
                    this._currentUserId = this.authService.currentUser.id;
                }
                return this._currentUserId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TodoDemoComponent.prototype, "hideCompletedTasks", {
            get: /**
             * @return {?}
             */
            function () {
                return this._hideCompletedTasks;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (value) {
                    this.rows = this.rowsCache.filter((/**
                     * @param {?} r
                     * @return {?}
                     */
                    function (r) { return !r.completed; }));
                }
                else {
                    this.rows = __spread(this.rowsCache);
                }
                this._hideCompletedTasks = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TodoDemoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.loadingIndicator = true;
            this.fetch((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.refreshDataIndexes(data);
                _this.rows = data;
                _this.rowsCache = __spread(data);
                _this.isDataLoaded = true;
                setTimeout((/**
                 * @return {?}
                 */
                function () { _this.loadingIndicator = false; }), 1500);
            }));
            /** @type {?} */
            var gT = (/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return _this.translationService.getTranslation(key); });
            this.columns = [
                { prop: 'completed', name: '', width: 30, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'name', name: gT('todoDemo.management.Task'), cellTemplate: this.nameTemplate, width: 200 },
                { prop: 'description', name: gT('todoDemo.management.Description'), cellTemplate: this.descriptionTemplate, width: 500 },
                { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
            ];
        };
        /**
         * @return {?}
         */
        TodoDemoComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.saveToDisk();
        };
        /**
         * @param {?} cb
         * @return {?}
         */
        TodoDemoComponent.prototype.fetch = /**
         * @param {?} cb
         * @return {?}
         */
        function (cb) {
            var _this = this;
            /** @type {?} */
            var data = this.getFromDisk();
            if (data == null) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
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
                }), 1000);
            }
            else {
                cb(data);
            }
        };
        /**
         * @param {?} data
         * @return {?}
         */
        TodoDemoComponent.prototype.refreshDataIndexes = /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            var e_1, _a;
            /** @type {?} */
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
        /**
         * @param {?} value
         * @return {?}
         */
        TodoDemoComponent.prototype.onSearchChanged = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.rows = this.rowsCache.filter((/**
             * @param {?} r
             * @return {?}
             */
            function (r) { return ngxAppkitContractsAlpha.Utilities.searchArray(value, false, r.name, r.description) || value == 'important' && r.important || value == 'not important' && !r.important; }));
        };
        /**
         * @param {?} caption
         * @param {?} message
         * @return {?}
         */
        TodoDemoComponent.prototype.showErrorAlert = /**
         * @param {?} caption
         * @param {?} message
         * @return {?}
         */
        function (caption, message) {
            this.alertService.showMessage(caption, message, ngxAppkitContractsAlpha.MessageSeverity.error);
        };
        /**
         * @return {?}
         */
        TodoDemoComponent.prototype.addTask = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.formResetToggle = false;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.formResetToggle = true;
                _this.taskEdit = {};
                _this.editorModal.show();
            }));
        };
        /**
         * @return {?}
         */
        TodoDemoComponent.prototype.save = /**
         * @return {?}
         */
        function () {
            this.rowsCache.splice(0, 0, this.taskEdit);
            this.rows.splice(0, 0, this.taskEdit);
            this.refreshDataIndexes(this.rowsCache);
            this.rows = __spread(this.rows);
            this.saveToDisk();
            this.editorModal.hide();
        };
        /**
         * @param {?} event
         * @param {?} cell
         * @param {?} cellValue
         * @param {?} row
         * @return {?}
         */
        TodoDemoComponent.prototype.updateValue = /**
         * @param {?} event
         * @param {?} cell
         * @param {?} cellValue
         * @param {?} row
         * @return {?}
         */
        function (event, cell, cellValue, row) {
            this.editing[row.$$index + '-' + cell] = false;
            this.rows[row.$$index][cell] = event.target.value;
            this.rows = __spread(this.rows);
            this.saveToDisk();
        };
        /**
         * @param {?} row
         * @return {?}
         */
        TodoDemoComponent.prototype.delete = /**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            var _this = this;
            this.alertService.showDialog('Are you sure you want to delete the task?', ngxAppkitContractsAlpha.DialogType.confirm, (/**
             * @return {?}
             */
            function () { return _this.deleteHelper(row); }));
        };
        /**
         * @param {?} row
         * @return {?}
         */
        TodoDemoComponent.prototype.deleteHelper = /**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            this.rowsCache = this.rowsCache.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item !== row; }));
            this.rows = this.rows.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item !== row; }));
            this.saveToDisk();
        };
        /**
         * @return {?}
         */
        TodoDemoComponent.prototype.getFromDisk = /**
         * @return {?}
         */
        function () {
            return this.localStorage.getDataObject(TodoDemoComponent.DBKeyTodoDemo + ":" + this.currentUserId);
        };
        /**
         * @return {?}
         */
        TodoDemoComponent.prototype.saveToDisk = /**
         * @return {?}
         */
        function () {
            if (this.isDataLoaded) {
                this.localStorage.saveSyncedSessionData(this.rowsCache, TodoDemoComponent.DBKeyTodoDemo + ":" + this.currentUserId);
            }
        };
        TodoDemoComponent.DBKeyTodoDemo = 'todo-demo.todo_list';
        TodoDemoComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'todo-demo',
                        template: "<div>\n    <div class=\"row control-box\">\n        <div class=\"col-lg-8\">\n            <div class=\"form-group search-box\">\n                <search-box (searchChange)=\"onSearchChanged($event)\" placeholder=\"{{'todoDemo.management.Search' | translate}}\"></search-box>\n            </div>\n        </div>\n        <div class=\"col-lg-4\">\n            <ul class=\"nav flex-column flex-lg-row\">\n                <li [class.active]=\"hideCompletedTasks\" class=\"nav-item toolbaritem\">\n                    <a class=\"nav-link\" href=\"javascript:;\" (click)=\"hideCompletedTasks = !hideCompletedTasks\"><i class=\"fa fa-eye-slash\"></i> {{'todoDemo.management.HideCompleted' | translate}}</a>\n                </li>\n                <li class=\"nav-item toolbaritem\">\n                    <a class=\"nav-link\" href=\"javascript:;\" (click)=\"addTask()\"><i class=\"fa fa-plus\"></i> {{'todoDemo.management.AddTask' | translate}}</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <ngx-datatable class=\"material colored-header sm table-hover\"\n                   [loadingIndicator]=\"loadingIndicator\"\n                   [rows]=\"rows\"\n                   [rowHeight]=\"35\"\n                   [headerHeight]=\"35\"\n                   [footerHeight]=\"35\"\n                   [columns]=\"columns\"\n                   [scrollbarV]=\"verticalScrollbar\"\n                   [columnMode]=\"'force'\">\n    </ngx-datatable>\n\n    <ng-template #statusHeaderTemplate>\n        <i class=\"fa fa-check-square-o\"></i>\n    </ng-template>\n\n    <ng-template #statusTemplate let-row=\"row\" let-value=\"value\">\n        <div class=\"form-check\">\n            <input class=\"form-check-input\" attr.name=\"checkboxes-{{value}}\" type=\"checkbox\" [(ngModel)]=\"row.completed\">\n            <label class=\"form-check-label\"></label>\n        </div>\n    </ng-template>\n\n    <ng-template #nameTemplate let-row=\"row\" let-value=\"value\">\n        <span *ngIf=\"!editing[row.$$index + '-name']\" class=\"inline-label\" [class.completed]=\"row.completed\" attr.title=\"Double click to edit - {{value}}\" (dblclick)=\"editing[row.$$index + '-name'] = true\">\n            {{value}}\n        </span>\n        <input *ngIf=\"editing[row.$$index + '-name']\" class=\"inline-editor\" autofocus (blur)=\"updateValue($event, 'name', value, row)\" type=\"text\" [value]=\"value\" />\n    </ng-template>\n\n    <ng-template #descriptionTemplate let-row=\"row\" let-value=\"value\">\n        <span *ngIf=\"!editing[row.$$index + '-description']\" class=\"inline-label\" [class.completed]=\"row.completed\" attr.title=\"Double click to edit - {{value}}\" (dblclick)=\"editing[row.$$index + '-description'] = true\">\n            {{value}}\n        </span>\n        <input *ngIf=\"editing[row.$$index + '-description']\" class=\"inline-editor\" autofocus (blur)=\"updateValue($event, 'description', value, row)\" type=\"text\" [value]=\"value\" />\n    </ng-template>\n\n\n    <ng-template #actionsTemplate let-row=\"row\">\n        <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" tooltip=\"{{'todoDemo.management.Delete' | translate}}\" container=\"body\" (click)=\"delete(row)\"><i class=\"fa fa-times\"></i></a>\n        <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" tooltip=\"{{'todoDemo.management.Important' | translate}}\" container=\"body\" (click)=\"row.important = !row.important\" (mouseover)=\"row.isMouseOver=true\" (mouseout)=\"row.isMouseOver=false\">\n            <i *ngIf=\"row.important || row.isMouseOver\" class=\"fa fa-bookmark\"></i>\n            <i *ngIf=\"!row.important && !row.isMouseOver\" class=\"fa fa-bookmark-o\"></i>\n        </a>\n    </ng-template>\n\n\n\n\n\n    <div class=\"modal fade\" bsModal #editorModal=\"bs-modal\" tabindex=\"-1\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title float-left\"><i class=\"fa fa-tasks\"></i> {{'todoDemo.editor.NewTask' | translate}}</h4>\n                    <button type=\"button\" class=\"close\" title=\"Close\" (click)=\"editorModal.hide()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form *ngIf=\"formResetToggle\" name=\"taskEditorForm\" #f=\"ngForm\" novalidate\n                          (ngSubmit)=\"f.form.valid ? save() :\n                      (!taskName.valid && showErrorAlert('Task name is required', 'Please enter a name for the task'));\">\n\n\n                        <div class=\"form-group row has-feedback-icon\">\n                            <label class=\"col-form-label col-md-3\" for=\"taskName\">{{'todoDemo.editor.Name' | translate}}:</label>\n                            <div class=\"col-md-9\">\n                                <input autofocus type=\"text\" id=\"taskName\" name=\"taskName\" placeholder=\"Enter task name\" class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && taskName.valid, 'is-invalid' : f.submitted && !taskName.valid}\"\n                                       [(ngModel)]=\"taskEdit.name\" #taskName=\"ngModel\" required />\n                                <i *ngIf=\"f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': taskName.valid, 'fa-times' : !taskName.valid}\" aria-hidden=\"true\"></i>\n                                <span *ngIf=\"f.submitted && !taskName.valid\" class=\"invalid-feedback\">\n                                    {{'todoDemo.editor.TaskNameRequired' | translate}}\n                                </span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row description-form-group\">\n                            <label class=\"col-form-label col-md-3\" for=\"taskDescription\">{{'todoDemo.editor.Description' | translate}}:</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" id=\"taskDescription\" name=\"taskDescription\" placeholder=\"Enter task description\" class=\"form-control\" [(ngModel)]=\"taskEdit.description\" />\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <label class=\"col-form-label col-md-3\"> </label>\n                            <div class=\"col-md-9\">\n                                <div class=\"form-check\">\n                                    <input class=\"form-check-input\" id=\"isImportant\" name=\"isImportant\" type=\"checkbox\" [(ngModel)]=\"taskEdit.important\">\n                                    <label for=\"isImportant\" class=\"form-check-label\">{{'todoDemo.editor.Important' | translate}}</label>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <hr class=\"edit-last-separator-hr\" />\n                            </div>\n                        </div>\n\n\n                        <div class=\"form-group actionBtn-form-group\">\n                            <div class=\"float-right\">\n                                <button type=\"submit\" class=\"btn btn-primary\">{{'todoDemo.editor.AddTask' | translate}}</button>\n                            </div>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>",
                        styles: ["input.form-control{border-left-width:5px}.control-box{margin-bottom:5px}.search-box{margin:0}.nav-item.toolbaritem a{padding-top:3px;padding-bottom:3px;min-width:100px;font-weight:700}.completed{text-decoration:line-through}.form-check{margin:0}.inline-label{width:100%;min-height:1rem;display:inline-block}.inline-editor{width:100%}.description-form-group{margin-bottom:5px}.actionBtn-form-group{margin:0}.edit-last-separator-hr{margin:10px 0}"]
                    }] }
        ];
        /** @nocollapse */
        TodoDemoComponent.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.AlertService },
            { type: ngxAppkitServicesAlpha.AppTranslationService },
            { type: ngxAppkitServicesAlpha.LocalStoreManager },
            { type: ngxOauth2.AuthService }
        ]; };
        TodoDemoComponent.propDecorators = {
            verticalScrollbar: [{ type: core.Input }],
            statusHeaderTemplate: [{ type: core.ViewChild, args: ['statusHeaderTemplate', { static: true },] }],
            statusTemplate: [{ type: core.ViewChild, args: ['statusTemplate', { static: true },] }],
            nameTemplate: [{ type: core.ViewChild, args: ['nameTemplate', { static: true },] }],
            descriptionTemplate: [{ type: core.ViewChild, args: ['descriptionTemplate', { static: true },] }],
            actionsTemplate: [{ type: core.ViewChild, args: ['actionsTemplate', { static: true },] }],
            editorModal: [{ type: core.ViewChild, args: ['editorModal', { static: true },] }]
        };
        return TodoDemoComponent;
    }());
    if (false) {
        /** @type {?} */
        TodoDemoComponent.DBKeyTodoDemo;
        /** @type {?} */
        TodoDemoComponent.prototype.rows;
        /** @type {?} */
        TodoDemoComponent.prototype.rowsCache;
        /** @type {?} */
        TodoDemoComponent.prototype.columns;
        /** @type {?} */
        TodoDemoComponent.prototype.editing;
        /** @type {?} */
        TodoDemoComponent.prototype.taskEdit;
        /** @type {?} */
        TodoDemoComponent.prototype.isDataLoaded;
        /** @type {?} */
        TodoDemoComponent.prototype.loadingIndicator;
        /** @type {?} */
        TodoDemoComponent.prototype.formResetToggle;
        /** @type {?} */
        TodoDemoComponent.prototype._currentUserId;
        /** @type {?} */
        TodoDemoComponent.prototype._hideCompletedTasks;
        /** @type {?} */
        TodoDemoComponent.prototype.verticalScrollbar;
        /** @type {?} */
        TodoDemoComponent.prototype.statusHeaderTemplate;
        /** @type {?} */
        TodoDemoComponent.prototype.statusTemplate;
        /** @type {?} */
        TodoDemoComponent.prototype.nameTemplate;
        /** @type {?} */
        TodoDemoComponent.prototype.descriptionTemplate;
        /** @type {?} */
        TodoDemoComponent.prototype.actionsTemplate;
        /** @type {?} */
        TodoDemoComponent.prototype.editorModal;
        /**
         * @type {?}
         * @private
         */
        TodoDemoComponent.prototype.alertService;
        /**
         * @type {?}
         * @private
         */
        TodoDemoComponent.prototype.translationService;
        /**
         * @type {?}
         * @private
         */
        TodoDemoComponent.prototype.localStorage;
        /**
         * @type {?}
         * @private
         */
        TodoDemoComponent.prototype.authService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/search-box/search-box.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchBoxComponent = /** @class */ (function () {
        function SearchBoxComponent() {
            this.placeholder = 'Search...';
            this.searchChange = new core.EventEmitter();
        }
        /**
         * @param {?} value
         * @return {?}
         */
        SearchBoxComponent.prototype.onValueChange = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.searchChange.emit(value); }));
        };
        /**
         * @return {?}
         */
        SearchBoxComponent.prototype.clear = /**
         * @return {?}
         */
        function () {
            this.searchInput.nativeElement.value = '';
            this.onValueChange(this.searchInput.nativeElement.value);
        };
        SearchBoxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'search-box',
                        template: "<div class=\"icon-addon addon-sm\">\n    <label for=\"searchInput\" title=\"Search\"><i class=\"fa fa-search left-icon search-icon\"></i></label>\n    <input id=\"searchInput\" #searchInput type=\"search\" ngModel=\"\" (ngModelChange)=\"onValueChange($event)\" [attr.placeholder]=\"placeholder\" class=\"form-control left-icon right-icon\">\n    <a *ngIf=\"searchInput.value\" href=\"javascript:;\" title=\"Clear\" (click)=\"clear()\" class=\"fa fa-times-circle clear-input right-icon\"></a>\n</div>",
                        styles: [".search-icon{pointer-events:none}"]
                    }] }
        ];
        SearchBoxComponent.propDecorators = {
            placeholder: [{ type: core.Input }],
            searchChange: [{ type: core.Output }],
            searchInput: [{ type: core.ViewChild, args: ['searchInput', { static: true },] }]
        };
        return SearchBoxComponent;
    }());
    if (false) {
        /** @type {?} */
        SearchBoxComponent.prototype.placeholder;
        /** @type {?} */
        SearchBoxComponent.prototype.searchChange;
        /** @type {?} */
        SearchBoxComponent.prototype.searchInput;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/statistics-demo/statistics-demo.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    require('chart.js');
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
                    // grey
                    backgroundColor: 'rgba(148,159,177,0.2)',
                    borderColor: 'rgba(148,159,177,1)',
                    pointBackgroundColor: 'rgba(148,159,177,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
                },
                {
                    // dark grey
                    backgroundColor: 'rgba(77,83,96,0.2)',
                    borderColor: 'rgba(77,83,96,1)',
                    pointBackgroundColor: 'rgba(77,83,96,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(77,83,96,1)'
                },
                {
                    // something else
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
        /**
         * @return {?}
         */
        StatisticsDemoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.timerReference = setInterval((/**
             * @return {?}
             */
            function () { return _this.randomize(); }), 5000);
            /** @type {?} */
            var initialWidth$ = rxjs.of(window.innerWidth);
            /** @type {?} */
            var resizedWidth$ = rxjs.fromEvent(window, 'resize').pipe(operators.map((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return (/** @type {?} */ (event.target.innerWidth)); })));
            this.windowWidth$ = rxjs.merge(initialWidth$, resizedWidth$).pipe(operators.distinctUntilChanged());
            this.windowWidthSub = this.windowWidth$.subscribe((/**
             * @param {?} width
             * @return {?}
             */
            function (width) { return _this.chartLegend = width < 600 ? false : true; }));
        };
        /**
         * @return {?}
         */
        StatisticsDemoComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            clearInterval(this.timerReference);
            this.windowWidthSub.unsubscribe();
        };
        /**
         * @return {?}
         */
        StatisticsDemoComponent.prototype.randomize = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var _chartData = new Array(this.chartData.length);
            for (var i = 0; i < this.chartData.length; i++) {
                _chartData[i] = { data: new Array(this.chartData[i].data.length), label: this.chartData[i].label };
                for (var j = 0; j < this.chartData[i].data.length; j++) {
                    _chartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
                }
            }
            this.chartData = _chartData;
        };
        /**
         * @param {?} type
         * @return {?}
         */
        StatisticsDemoComponent.prototype.changeChartType = /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this.chartType = type;
        };
        /**
         * @param {?} msg
         * @return {?}
         */
        StatisticsDemoComponent.prototype.showMessage = /**
         * @param {?} msg
         * @return {?}
         */
        function (msg) {
            this.alertService.showMessage('Demo', msg, ngxAppkitContractsAlpha.MessageSeverity.info);
        };
        /**
         * @param {?} msg
         * @return {?}
         */
        StatisticsDemoComponent.prototype.showDialog = /**
         * @param {?} msg
         * @return {?}
         */
        function (msg) {
            var _this = this;
            this.alertService.showDialog(msg, ngxAppkitContractsAlpha.DialogType.prompt, (/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return _this.configure(true, val); }), (/**
             * @return {?}
             */
            function () { return _this.configure(false); }));
        };
        /**
         * @param {?} response
         * @param {?=} value
         * @return {?}
         */
        StatisticsDemoComponent.prototype.configure = /**
         * @param {?} response
         * @param {?=} value
         * @return {?}
         */
        function (response, value) {
            var _this = this;
            if (response) {
                this.alertService.showStickyMessage('Simulating...', '', ngxAppkitContractsAlpha.MessageSeverity.wait);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.alertService.resetStickyMessage();
                    _this.alertService.showMessage('Demo', "Your settings was successfully configured to \"" + value + "\"", ngxAppkitContractsAlpha.MessageSeverity.success);
                }), 2000);
            }
            else {
                this.alertService.showMessage('Demo', 'Operation cancelled by user', ngxAppkitContractsAlpha.MessageSeverity.default);
            }
        };
        /**
         * @param {?} e
         * @return {?}
         */
        StatisticsDemoComponent.prototype.chartClicked = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            console.log(e);
        };
        /**
         * @param {?} e
         * @return {?}
         */
        StatisticsDemoComponent.prototype.chartHovered = /**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            console.log(e);
        };
        StatisticsDemoComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'statistics-demo',
                        template: "<div class=\"row statistics-container\">\n  <div class=\"col-md-6\">\n    <div class=\"chart-container\">\n      <canvas baseChart width=\"600\" height=\"250\"\n              [datasets]=\"chartData\"\n              [labels]=\"chartLabels\"\n              [options]=\"chartOptions\"\n              [colors]=\"chartColors\"\n              [legend]=\"chartLegend\"\n              [chartType]=\"chartType\"\n              (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"d-none d-sm-block table-responsive\">\n      <table class=\"table table-sm\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\"></th>\n            <th class=\"border-top-0\" *ngFor=\"let label of chartLabels\">{{label}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let d of chartData\">\n            <th>{{d && d.label.split(' ').pop()}}</th>\n            <td *ngFor=\"let label of chartLabels; let j=index\">{{d && d.data[j]}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <button class=\"refresh-btn\" (click)=\"randomize();showMessage('Manual refresh!');\">REFSH</button>\n    <div class=\"chart-type-container\" dropdown>\n      <button id=\"chartType\" type=\"button\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bar-chart\"></i></button>\n      <ul class=\"dropdown-menu\">\n        <li [class.active]=\"chartType == 'bar'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('bar')\" href=\"javascript:;\">Bar Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'pie'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('pie')\" href=\"javascript:;\">Pie Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'doughnut'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('doughnut')\" href=\"javascript:;\">Doughnut Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'polarArea'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('polarArea')\" href=\"javascript:;\">Polar Area Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'radar'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('radar')\" href=\"javascript:;\">Radar Chart</a>\n        </li>\n        <li class=\"dropdown-divider\"></li>\n        <li [class.active]=\"chartType == 'line'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('line')\" href=\"javascript:;\">Line Chart</a>\n        </li>\n      </ul>\n    </div>\n    <button (click)=\"showMessage('You\\'ve clicked on the menu')\"><i class=\"fa fa-bars\"></i></button>\n    <button (click)=\"showDialog('Enter some value to do serious configuration...')\"><i class=\"fa fa-cogs\"></i></button>\n  </div>\n</div>\n",
                        styles: [".statistics-container{font-size:.875rem}.chart-container{display:block}.refresh-btn{margin-right:10px}.chart-type-container{display:inline-block}.chart-type-container .active{background-color:#e8e8e8}"]
                    }] }
        ];
        /** @nocollapse */
        StatisticsDemoComponent.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.AlertService }
        ]; };
        return StatisticsDemoComponent;
    }());
    if (false) {
        /** @type {?} */
        StatisticsDemoComponent.prototype.chartData;
        /** @type {?} */
        StatisticsDemoComponent.prototype.chartLabels;
        /** @type {?} */
        StatisticsDemoComponent.prototype.chartOptions;
        /** @type {?} */
        StatisticsDemoComponent.prototype.chartColors;
        /** @type {?} */
        StatisticsDemoComponent.prototype.chartLegend;
        /** @type {?} */
        StatisticsDemoComponent.prototype.chartType;
        /** @type {?} */
        StatisticsDemoComponent.prototype.timerReference;
        /** @type {?} */
        StatisticsDemoComponent.prototype.windowWidth$;
        /** @type {?} */
        StatisticsDemoComponent.prototype.windowWidthSub;
        /**
         * @type {?}
         * @private
         */
        StatisticsDemoComponent.prototype.alertService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/bootstrap-tab.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function eventArg() { }
    if (false) {
        /** @type {?} */
        eventArg.prototype.type;
        /** @type {?} */
        eventArg.prototype.target;
        /** @type {?} */
        eventArg.prototype.relatedTarget;
    }
    var BootstrapTabDirective = /** @class */ (function () {
        function BootstrapTabDirective(el, zone) {
            var _this = this;
            this.el = el;
            this.zone = zone;
            this.showBSTab = new core.EventEmitter();
            this.hideBSTab = new core.EventEmitter();
            this.tabShownSubscription = rxjs.fromEvent($(this.el.nativeElement), 'show.bs.tab')
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                _this.runInZone((/**
                 * @return {?}
                 */
                function () { return _this.showBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget }); }));
            }));
            this.tabHiddenSubscription = rxjs.fromEvent($(this.el.nativeElement), 'hidden.bs.tab')
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                _this.runInZone((/**
                 * @return {?}
                 */
                function () { return _this.hideBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget }); }));
            }));
        }
        /**
         * @return {?}
         */
        BootstrapTabDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.tabShownSubscription.unsubscribe();
            this.tabHiddenSubscription.unsubscribe();
        };
        /**
         * @private
         * @param {?} delegate
         * @return {?}
         */
        BootstrapTabDirective.prototype.runInZone = /**
         * @private
         * @param {?} delegate
         * @return {?}
         */
        function (delegate) {
            this.zone.run((/**
             * @return {?}
             */
            function () {
                delegate();
            }));
        };
        /**
         * @param {?} selector
         * @return {?}
         */
        BootstrapTabDirective.prototype.show = /**
         * @param {?} selector
         * @return {?}
         */
        function (selector) {
            $(selector).tab('show');
        };
        BootstrapTabDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bootstrapTab]',
                        exportAs: 'bootstrap-tab'
                    },] }
        ];
        /** @nocollapse */
        BootstrapTabDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.NgZone }
        ]; };
        BootstrapTabDirective.propDecorators = {
            showBSTab: [{ type: core.Output }],
            hideBSTab: [{ type: core.Output }]
        };
        return BootstrapTabDirective;
    }());
    if (false) {
        /** @type {?} */
        BootstrapTabDirective.prototype.showBSTab;
        /** @type {?} */
        BootstrapTabDirective.prototype.hideBSTab;
        /**
         * @type {?}
         * @private
         */
        BootstrapTabDirective.prototype.tabShownSubscription;
        /**
         * @type {?}
         * @private
         */
        BootstrapTabDirective.prototype.tabHiddenSubscription;
        /**
         * @type {?}
         * @private
         */
        BootstrapTabDirective.prototype.el;
        /**
         * @type {?}
         * @private
         */
        BootstrapTabDirective.prototype.zone;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pages/settings/settings.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        /**
         * @return {?}
         */
        SettingsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.fragmentSubscription = this.route.fragment.subscribe((/**
             * @param {?} anchor
             * @return {?}
             */
            function (anchor) { return _this.showContent(anchor); }));
        };
        /**
         * @return {?}
         */
        SettingsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.fragmentSubscription.unsubscribe();
        };
        /**
         * @param {?} anchor
         * @return {?}
         */
        SettingsComponent.prototype.showContent = /**
         * @param {?} anchor
         * @return {?}
         */
        function (anchor) {
            if (anchor) {
                anchor = anchor.toLowerCase();
            }
            if ((this.isFragmentEquals(anchor, this.usersTab) && !this.canViewUsers) ||
                (this.isFragmentEquals(anchor, this.rolesTab) && !this.canViewRoles)) {
                return;
            }
            this.tab.show("#" + (anchor || this.profileTab) + "Tab");
        };
        /**
         * @param {?} fragment1
         * @param {?} fragment2
         * @return {?}
         */
        SettingsComponent.prototype.isFragmentEquals = /**
         * @param {?} fragment1
         * @param {?} fragment2
         * @return {?}
         */
        function (fragment1, fragment2) {
            if (fragment1 == null) {
                fragment1 = '';
            }
            if (fragment2 == null) {
                fragment2 = '';
            }
            return fragment1.toLowerCase() == fragment2.toLowerCase();
        };
        /**
         * @param {?} event
         * @return {?}
         */
        SettingsComponent.prototype.onShowTab = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var activeTab = event.target.hash.split('#', 2).pop();
            this.isProfileActivated = activeTab == this.profileTab;
            this.isPreferencesActivated = activeTab == this.preferencesTab;
            this.isUsersActivated = activeTab == this.usersTab;
            this.isRolesActivated = activeTab == this.rolesTab;
            this.router.navigate([], { fragment: activeTab });
        };
        Object.defineProperty(SettingsComponent.prototype, "canViewUsers", {
            get: /**
             * @return {?}
             */
            function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.viewUsersPermission);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SettingsComponent.prototype, "canViewRoles", {
            get: /**
             * @return {?}
             */
            function () {
                return this.accountService.userHasPermission(ngxOauth2.Permission.viewRolesPermission);
            },
            enumerable: true,
            configurable: true
        });
        SettingsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'settings',
                        template: "<div class=\"container settings-page\">\n    <header class=\"pageHeader\">\n        <h3><i class=\"fa fa-cog fa-lg page-caption\" aria-hidden=\"true\"></i> {{'pageHeader.Settings' | translate}}</h3>\n    </header>\n\n    <div [@fadeInOut]>\n        <div class=\"d-sm-flex flex-row\">\n            <ul bootstrapTab #tab=\"bootstrap-tab\" (showBSTab)=\"onShowTab($event)\" class=\"nav nav-tabs nav-tabs--vertical nav-tabs--left\" role=\"navigation\">\n                <li class=\"nav-item\">\n                    <a id=\"profileTab\" [routerLink]=\"[]\" fragment=\"profile\" data-target=\"#profile\" href=\"#profile\" class=\"nav-link active\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"profile\">\n                        <i class=\"fa fa-user-circle-o fa-fw\" aria-hidden=\"true\"></i> {{'settings.tab.Profile' | translate}}\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a id=\"preferencesTab\" [routerLink]=\"[]\" fragment=\"preferences\" data-target=\"#preferences\" href=\"#preferences\" class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"preferences\">\n                        <i class=\"fa fa-sliders fa-fw\" aria-hidden=\"true\"></i> {{'settings.tab.Preferences' | translate}}\n                    </a>\n                </li>\n            </ul>\n            <div class=\"tab-content w-100\">\n                <div class=\"tab-pane show active\" id=\"profile\" role=\"tabpanel\">\n                    <h4>{{'settings.header.UserProfile' | translate}}</h4>\n                    <hr class=\"separator-hr\" />\n                    <div [@fadeInOut] *ngIf=\"isProfileActivated\" class=\"content-container pl-lg-2\">\n                        <user-info></user-info>\n                    </div>\n\n                </div>\n                <div class=\"tab-pane\" id=\"preferences\" role=\"tabpanel\">\n                    <h4>{{'settings.header.UserPreferences' | translate}}</h4>\n                    <hr class=\"separator-hr\" />\n                    <div [@fadeInOut] *ngIf=\"isPreferencesActivated\" class=\"content-container pl-lg-2\">\n                        <user-preferences></user-preferences>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n",
                        animations: [fadeInOut],
                        styles: [".separator-hr{margin-top:0;margin-bottom:10px}[hidden]{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        SettingsComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: AccountService }
        ]; };
        SettingsComponent.propDecorators = {
            tab: [{ type: core.ViewChild, args: ['tab', { static: true },] }]
        };
        return SettingsComponent;
    }());
    if (false) {
        /** @type {?} */
        SettingsComponent.prototype.isProfileActivated;
        /** @type {?} */
        SettingsComponent.prototype.isPreferencesActivated;
        /** @type {?} */
        SettingsComponent.prototype.isUsersActivated;
        /** @type {?} */
        SettingsComponent.prototype.isRolesActivated;
        /** @type {?} */
        SettingsComponent.prototype.fragmentSubscription;
        /** @type {?} */
        SettingsComponent.prototype.profileTab;
        /** @type {?} */
        SettingsComponent.prototype.preferencesTab;
        /** @type {?} */
        SettingsComponent.prototype.usersTab;
        /** @type {?} */
        SettingsComponent.prototype.rolesTab;
        /** @type {?} */
        SettingsComponent.prototype.tab;
        /**
         * @type {?}
         * @private
         */
        SettingsComponent.prototype.router;
        /**
         * @type {?}
         * @private
         */
        SettingsComponent.prototype.route;
        /**
         * @type {?}
         * @private
         */
        SettingsComponent.prototype.accountService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pages/not-found/not-found.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NotFoundComponent = /** @class */ (function () {
        function NotFoundComponent() {
        }
        NotFoundComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'not-found',
                        template: "<header class=\"pageHeader\">\n    <h3><i class=\"fa fa-exclamation-circle fa-lg page-caption\" aria-hidden=\"true\"></i> {{'pageHeader.NotFound' | translate}}</h3>\n</header>\n\n<div [@fadeInOut] class=\"d-flex h-75\">\n    <div class=\"m-auto\">\n        <div class=\"icon-container\"><i class='fa fa-exclamation-circle'></i> {{'notFound.404' | translate}}</div>\n        <div class=\"text-muted error-description\">{{'notFound.pageNotFound' | translate}}</div>\n        <div><a class=\"btn btn-primary\" routerLink=\"/\"><i class='fa fa-home'></i> {{'notFound.backToHome' | translate}}</a></div>\n    </div>\n</div>\n",
                        animations: [fadeInOut],
                        styles: [".icon-container{font-size:5rem}.error-description{font-size:1.5rem;padding-bottom:10px}"]
                    }] }
        ];
        return NotFoundComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pages/login/login.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.userLogin.rememberMe = this.authService.rememberMe;
            if (this.getShouldRedirect()) {
                this.authService.redirectLoginUser();
            }
            else {
                this.loginStatusSubscription = this.authService.getLoginStatusEvent().subscribe((/**
                 * @param {?} isLoggedIn
                 * @return {?}
                 */
                function (isLoggedIn) {
                    if (_this.getShouldRedirect()) {
                        _this.authService.redirectLoginUser();
                    }
                }));
            }
        };
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.loginStatusSubscription) {
                this.loginStatusSubscription.unsubscribe();
            }
        };
        /**
         * @return {?}
         */
        LoginComponent.prototype.getShouldRedirect = /**
         * @return {?}
         */
        function () {
            return !this.isModal && this.authService.isLoggedIn && !this.authService.isSessionExpired;
        };
        /**
         * @param {?} caption
         * @param {?} message
         * @return {?}
         */
        LoginComponent.prototype.showErrorAlert = /**
         * @param {?} caption
         * @param {?} message
         * @return {?}
         */
        function (caption, message) {
            this.alertService.showMessage(caption, message, ngxAppkitContractsAlpha.MessageSeverity.error);
        };
        /**
         * @return {?}
         */
        LoginComponent.prototype.closeModal = /**
         * @return {?}
         */
        function () {
            if (this.modalClosedCallback) {
                this.modalClosedCallback();
            }
        };
        /**
         * @return {?}
         */
        LoginComponent.prototype.login = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.isLoading = true;
            this.alertService.startLoadingMessage('', 'Attempting login...');
            this.authService.loginWithPassword(this.userLogin.userName, this.userLogin.password, this.userLogin.rememberMe)
                .subscribe((/**
             * @param {?} user
             * @return {?}
             */
            function (user) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.alertService.stopLoadingMessage();
                    _this.isLoading = false;
                    _this.reset();
                    if (!_this.isModal) {
                        _this.alertService.showMessage('Login', "Welcome " + user.userName + "!", ngxAppkitContractsAlpha.MessageSeverity.success);
                    }
                    else {
                        _this.alertService.showMessage('Login', "Session for " + user.userName + " restored!", ngxAppkitContractsAlpha.MessageSeverity.success);
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this.alertService.showStickyMessage('Session Restored', 'Please try your last operation again', ngxAppkitContractsAlpha.MessageSeverity.default);
                        }), 500);
                        _this.closeModal();
                    }
                }), 500);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                _this.alertService.stopLoadingMessage();
                if (ngxAppkitContractsAlpha.Utilities.checkNoNetwork(error)) {
                    _this.alertService.showStickyMessage(ngxAppkitContractsAlpha.Utilities.noNetworkMessageCaption, ngxAppkitContractsAlpha.Utilities.noNetworkMessageDetail, ngxAppkitContractsAlpha.MessageSeverity.error, error);
                    _this.offerAlternateHost();
                }
                else {
                    /** @type {?} */
                    var errorMessage = ngxAppkitContractsAlpha.Utilities.getHttpResponseMessage(error);
                    if (errorMessage) {
                        _this.alertService.showStickyMessage('Unable to login', _this.mapLoginErrorMessage(errorMessage), ngxAppkitContractsAlpha.MessageSeverity.error, error);
                    }
                    else {
                        _this.alertService.showStickyMessage('Unable to login', 'An error occured whilst logging in, please try again later.\nError: ' + ngxAppkitContractsAlpha.Utilities.getResponseBody(error), ngxAppkitContractsAlpha.MessageSeverity.error, error);
                    }
                }
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.isLoading = false;
                }), 500);
            }));
        };
        /**
         * @return {?}
         */
        LoginComponent.prototype.offerAlternateHost = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (ngxAppkitContractsAlpha.Utilities.checkIsLocalHost(location.origin) && ngxAppkitContractsAlpha.Utilities.checkIsLocalHost(this.configurations.baseUrl)) {
                this.alertService.showDialog('Dear Developer!\nIt appears your backend Web API service is not running...\n' +
                    'Would you want to temporarily switch to the online Demo API below?(Or specify another)', ngxAppkitContractsAlpha.DialogType.prompt, (/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    _this.configurations.baseUrl = value;
                    _this.configurations.tokenUrl = value;
                    _this.alertService.showStickyMessage('API Changed!', 'The target Web API has been changed to: ' + value, ngxAppkitContractsAlpha.MessageSeverity.warn);
                }), null, null, null, this.configurations.fallbackBaseUrl);
            }
        };
        /**
         * @param {?} error
         * @return {?}
         */
        LoginComponent.prototype.mapLoginErrorMessage = /**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            if (error == 'invalid_username_or_password') {
                return 'Invalid username or password';
            }
            if (error == 'invalid_grant') {
                return 'This account has been disabled';
            }
            return error;
        };
        /**
         * @return {?}
         */
        LoginComponent.prototype.reset = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.formResetToggle = false;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.formResetToggle = true;
            }));
        };
        LoginComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-login',
                        template: "<div class=\"d-flex h-90\">\n  <div class=\"login-container m-auto\">\n    <div class=\"card boxshadow\">\n      <div class=\"card-header bg-primary dark text-white clearfix\">\n        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i> Login\n        <button *ngIf=\"isModal\" type=\"button\" class=\"close float-right text-light\" aria-label=\"Close\" (click)=\"closeModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"col-md-8 offset-md-2\">\n          <form *ngIf=\"formResetToggle\" class=\"login\" name=\"loginForm\" #f=\"ngForm\" novalidate\n                (ngSubmit)=\"f.form.valid ? login() :\n                          (!username.valid && showErrorAlert('Username is required', 'Please enter a valid username'));\n                          (!password.valid && showErrorAlert('Password is required', 'Please enter a valid password'))\">\n            <div class=\"form-group row has-feedback-icon\">\n              <label class=\"col-form-label col-md-3\" for=\"login-username\">Username:</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" id=\"login-username\" name=\"username\" placeholder=\"Enter username\" autocomplete=\"username\" class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && username.valid, 'is-invalid' : f.submitted && !username.valid}\"\n                       [(ngModel)]=\"userLogin.userName\" #username=\"ngModel\" required />\n                <i *ngIf=\"f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': username.valid, 'fa-times' : !username.valid}\" aria-hidden=\"true\"></i>\n                <span class=\"invalid-feedback\" *ngIf=\"f.submitted && !username.valid\">\n                  Username is required\n                </span>\n              </div>\n            </div>\n            <div class=\"form-group row has-feedback-icon\">\n              <label class=\"col-form-label col-md-3\" for=\"login-password\">Password:</label>\n              <div class=\"col-md-9\">\n                <input type=\"password\" id=\"login-password\" name=\"password\" placeholder=\"Enter password\" autocomplete=\"current-password\" class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && password.valid, 'is-invalid' : f.submitted && !password.valid}\"\n                       [(ngModel)]=\"userLogin.password\" #password=\"ngModel\" required />\n                <i *ngIf=\"f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': password.valid, 'fa-times' : !password.valid}\" aria-hidden=\"true\"></i>\n                <span class=\"invalid-feedback\" *ngIf=\"f.submitted && !password.valid\">\n                  Password is required\n                </span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"offset-md-3 col-md-9\">\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"login-rememberme\" name=\"rememberMe\" [(ngModel)]=\"userLogin.rememberMe\">\n                  <label class=\"form-check-label\" for=\"login-rememberme\">Remember me</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"offset-md-3 col-md-9\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isLoading\">\n                  <i *ngIf=\"isLoading\" class='fa fa-circle-o-notch fa-spin'></i> {{isLoading ? 'Logging in...' : 'Login'}}\n                </button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                        styles: [".boxshadow{position:relative;box-shadow:1px 2px 4px rgba(0,0,0,.5);padding:10px;background:#fff}.boxshadow::after{content:\"\";position:absolute;z-index:-1;box-shadow:0 15px 20px rgba(0,0,0,.3);width:70%;left:15%;height:100px;bottom:0}.cardshadow{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.last-control-group{margin-bottom:-.75rem}.h-90{height:90%}@media (min-width:768px){.login-container{width:700px}}@media (min-width:1200px){.login-container{width:730px}}"]
                    }] }
        ];
        /** @nocollapse */
        LoginComponent.ctorParameters = function () { return [
            { type: ngxAppkitServicesAlpha.AlertService },
            { type: ngxOauth2.AuthService },
            { type: ngxAppkitServicesAlpha.ConfigurationService }
        ]; };
        LoginComponent.propDecorators = {
            isModal: [{ type: core.Input }]
        };
        return LoginComponent;
    }());
    if (false) {
        /** @type {?} */
        LoginComponent.prototype.userLogin;
        /** @type {?} */
        LoginComponent.prototype.isLoading;
        /** @type {?} */
        LoginComponent.prototype.formResetToggle;
        /** @type {?} */
        LoginComponent.prototype.modalClosedCallback;
        /** @type {?} */
        LoginComponent.prototype.loginStatusSubscription;
        /** @type {?} */
        LoginComponent.prototype.isModal;
        /**
         * @type {?}
         * @private
         */
        LoginComponent.prototype.alertService;
        /**
         * @type {?}
         * @private
         */
        LoginComponent.prototype.authService;
        /**
         * @type {?}
         * @private
         */
        LoginComponent.prototype.configurations;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/dependency.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DependencyModule = /** @class */ (function () {
        function DependencyModule() {
        }
        DependencyModule.decorators = [
            { type: core.NgModule, args: [{
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
                    },] }
        ];
        return DependencyModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/equal-validator.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EqualValidator = /** @class */ (function () {
        function EqualValidator(validateEqual, reverse) {
            this.validateEqual = validateEqual;
            this.reverse = reverse;
        }
        /**
         * @param {?} c
         * @return {?}
         */
        EqualValidator.prototype.validate = /**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            /** @type {?} */
            var other = c.root.get(this.validateEqual);
            if (!other) {
                return null;
            }
            return this.reverse === 'true' ? this.validateReverse(c, other) : this.validateNoReverse(c, other);
        };
        /**
         * @private
         * @param {?} c
         * @param {?} other
         * @return {?}
         */
        EqualValidator.prototype.validateNoReverse = /**
         * @private
         * @param {?} c
         * @param {?} other
         * @return {?}
         */
        function (c, other) {
            return other.value === c.value ? null : { validateEqual: true };
        };
        /**
         * @private
         * @param {?} c
         * @param {?} other
         * @return {?}
         */
        EqualValidator.prototype.validateReverse = /**
         * @private
         * @param {?} c
         * @param {?} other
         * @return {?}
         */
        function (c, other) {
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
        EqualValidator.decorators = [
            { type: core.Directive, args: [{
                        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                        providers: [
                            { provide: forms.NG_VALIDATORS, useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return EqualValidator; })), multi: true }
                        ]
                    },] }
        ];
        /** @nocollapse */
        EqualValidator.ctorParameters = function () { return [
            { type: String, decorators: [{ type: core.Attribute, args: ['validateEqual',] }] },
            { type: String, decorators: [{ type: core.Attribute, args: ['reverse',] }] }
        ]; };
        return EqualValidator;
    }());
    if (false) {
        /** @type {?} */
        EqualValidator.prototype.validateEqual;
        /** @type {?} */
        EqualValidator.prototype.reverse;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/last-element.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LastElementDirective = /** @class */ (function () {
        function LastElementDirective() {
            this.lastFunction = new core.EventEmitter();
        }
        Object.defineProperty(LastElementDirective.prototype, "lastElement", {
            set: /**
             * @param {?} isLastElement
             * @return {?}
             */
            function (isLastElement) {
                var _this = this;
                if (isLastElement) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.lastFunction.emit();
                    }));
                }
            },
            enumerable: true,
            configurable: true
        });
        LastElementDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[lastElement]'
                    },] }
        ];
        LastElementDirective.propDecorators = {
            lastElement: [{ type: core.Input }],
            lastFunction: [{ type: core.Output }]
        };
        return LastElementDirective;
    }());
    if (false) {
        /** @type {?} */
        LastElementDirective.prototype.lastFunction;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/autofocus.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AutofocusDirective = /** @class */ (function () {
        function AutofocusDirective(elementRef) {
            this.elementRef = elementRef;
        }
        /**
         * @return {?}
         */
        AutofocusDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.elementRef.nativeElement.focus(); }), 500);
        };
        AutofocusDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[autofocus]'
                    },] }
        ];
        /** @nocollapse */
        AutofocusDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        return AutofocusDirective;
    }());
    if (false) {
        /** @type {?} */
        AutofocusDirective.prototype.elementRef;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/bootstrap-toggle.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BootstrapToggleDirective = /** @class */ (function () {
        function BootstrapToggleDirective(el) {
            var _this = this;
            this.el = el;
            this.ngModelChange = new core.EventEmitter();
            this.checkedSubscription = rxjs.fromEvent($(this.el.nativeElement), 'change')
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this.ngModelChange.emit(e.target.checked); }));
        }
        Object.defineProperty(BootstrapToggleDirective.prototype, "ngModel", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.toggle(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BootstrapToggleDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.initialize();
        };
        /**
         * @return {?}
         */
        BootstrapToggleDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy();
        };
        /**
         * @param {?=} options
         * @return {?}
         */
        BootstrapToggleDirective.prototype.initialize = /**
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            $(this.el.nativeElement).bootstrapToggle(options);
        };
        /**
         * @return {?}
         */
        BootstrapToggleDirective.prototype.destroy = /**
         * @return {?}
         */
        function () {
            if (this.checkedSubscription) {
                this.checkedSubscription.unsubscribe();
            }
            $(this.el.nativeElement).bootstrapToggle('destroy');
        };
        /**
         * @return {?}
         */
        BootstrapToggleDirective.prototype.toggleOn = /**
         * @return {?}
         */
        function () {
            $(this.el.nativeElement).bootstrapToggle('on');
        };
        /**
         * @return {?}
         */
        BootstrapToggleDirective.prototype.toggleOff = /**
         * @return {?}
         */
        function () {
            $(this.el.nativeElement).bootstrapToggle('off');
        };
        /**
         * @param {?=} value
         * @return {?}
         */
        BootstrapToggleDirective.prototype.toggle = /**
         * @param {?=} value
         * @return {?}
         */
        function (value) {
            if (value == null) {
                $(this.el.nativeElement).bootstrapToggle('toggle');
            }
            else {
                $(this.el.nativeElement).prop('checked', value).change();
            }
        };
        /**
         * @return {?}
         */
        BootstrapToggleDirective.prototype.enable = /**
         * @return {?}
         */
        function () {
            $(this.el.nativeElement).bootstrapToggle('enable');
        };
        /**
         * @return {?}
         */
        BootstrapToggleDirective.prototype.disable = /**
         * @return {?}
         */
        function () {
            $(this.el.nativeElement).bootstrapToggle('disable');
        };
        BootstrapToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bootstrapToggle]',
                        exportAs: 'bootstrap-toggle'
                    },] }
        ];
        /** @nocollapse */
        BootstrapToggleDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        BootstrapToggleDirective.propDecorators = {
            ngModel: [{ type: core.Input }],
            ngModelChange: [{ type: core.Output }]
        };
        return BootstrapToggleDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        BootstrapToggleDirective.prototype.checkedSubscription;
        /** @type {?} */
        BootstrapToggleDirective.prototype.ngModelChange;
        /**
         * @type {?}
         * @private
         */
        BootstrapToggleDirective.prototype.el;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/directives/bootstrap-datepicker.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BootstrapDatepickerDirective = /** @class */ (function () {
        function BootstrapDatepickerDirective(el) {
            var _this = this;
            this.el = el;
            this._isShown = false;
            this.options = {};
            this.ngModelChange = new core.EventEmitter();
            this.changedSubscription = rxjs.fromEvent($(this.el.nativeElement), 'change').subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return setTimeout((/**
             * @return {?}
             */
            function () { return _this.ngModelChange.emit(e.target.value); })); }));
            this.shownSubscription = rxjs.fromEvent($(this.el.nativeElement), 'show').subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this._isShown = true; }));
            this.hiddenSubscription = rxjs.fromEvent($(this.el.nativeElement), 'hide').subscribe((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return _this._isShown = false; }));
        }
        Object.defineProperty(BootstrapDatepickerDirective.prototype, "isShown", {
            get: /**
             * @return {?}
             */
            function () {
                return this._isShown;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BootstrapDatepickerDirective.prototype, "ngModel", {
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this.tryUpdate(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BootstrapDatepickerDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.initialize(this.options);
        };
        /**
         * @return {?}
         */
        BootstrapDatepickerDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.destroy();
        };
        /**
         * @param {?=} options
         * @return {?}
         */
        BootstrapDatepickerDirective.prototype.initialize = /**
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            $(this.el.nativeElement).datepicker(options);
        };
        /**
         * @return {?}
         */
        BootstrapDatepickerDirective.prototype.destroy = /**
         * @return {?}
         */
        function () {
            if (this.changedSubscription) {
                this.changedSubscription.unsubscribe();
                this.shownSubscription.unsubscribe();
                this.hiddenSubscription.unsubscribe();
            }
            $(this.el.nativeElement).datepicker('destroy');
        };
        /**
         * @return {?}
         */
        BootstrapDatepickerDirective.prototype.show = /**
         * @return {?}
         */
        function () {
            $(this.el.nativeElement).datepicker('show');
        };
        /**
         * @return {?}
         */
        BootstrapDatepickerDirective.prototype.hide = /**
         * @return {?}
         */
        function () {
            $(this.el.nativeElement).datepicker('hide');
        };
        /**
         * @return {?}
         */
        BootstrapDatepickerDirective.prototype.toggle = /**
         * @return {?}
         */
        function () {
            this.isShown ? this.hide() : this.show();
        };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        BootstrapDatepickerDirective.prototype.tryUpdate = /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            clearTimeout(this.updateTimeout);
            if (!$(this.el.nativeElement).is(':focus')) {
                this.update(value);
            }
            else {
                this.updateTimeout = setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.updateTimeout = null;
                    _this.tryUpdate(value);
                }), 100);
            }
        };
        /**
         * @param {?} value
         * @return {?}
         */
        BootstrapDatepickerDirective.prototype.update = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { return $(_this.el.nativeElement).datepicker('update', value); }));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        BootstrapDatepickerDirective.prototype.setDate = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { return $(_this.el.nativeElement).datepicker('setDate', value); }));
        };
        /**
         * @param {?} value
         * @return {?}
         */
        BootstrapDatepickerDirective.prototype.setUTCDate = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { return $(_this.el.nativeElement).datepicker('setUTCDate', value); }));
        };
        /**
         * @return {?}
         */
        BootstrapDatepickerDirective.prototype.clearDates = /**
         * @return {?}
         */
        function () {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { return $(_this.el.nativeElement).datepicker('clearDates'); }));
        };
        /**
         * @return {?}
         */
        BootstrapDatepickerDirective.prototype.getDate = /**
         * @return {?}
         */
        function () {
            $(this.el.nativeElement).datepicker('getDate');
        };
        /**
         * @return {?}
         */
        BootstrapDatepickerDirective.prototype.getUTCDate = /**
         * @return {?}
         */
        function () {
            $(this.el.nativeElement).datepicker('getUTCDate');
        };
        BootstrapDatepickerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bootstrapDatepicker]',
                        exportAs: 'bootstrap-datepicker'
                    },] }
        ];
        /** @nocollapse */
        BootstrapDatepickerDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        BootstrapDatepickerDirective.propDecorators = {
            options: [{ type: core.Input }],
            ngModel: [{ type: core.Input }],
            ngModelChange: [{ type: core.Output }]
        };
        return BootstrapDatepickerDirective;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        BootstrapDatepickerDirective.prototype._isShown;
        /**
         * @type {?}
         * @private
         */
        BootstrapDatepickerDirective.prototype.updateTimeout;
        /**
         * @type {?}
         * @private
         */
        BootstrapDatepickerDirective.prototype.changedSubscription;
        /**
         * @type {?}
         * @private
         */
        BootstrapDatepickerDirective.prototype.shownSubscription;
        /**
         * @type {?}
         * @private
         */
        BootstrapDatepickerDirective.prototype.hiddenSubscription;
        /** @type {?} */
        BootstrapDatepickerDirective.prototype.options;
        /** @type {?} */
        BootstrapDatepickerDirective.prototype.ngModelChange;
        /**
         * @type {?}
         * @private
         */
        BootstrapDatepickerDirective.prototype.el;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-appkit-starter-alpha.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxAppkitStarterAlphaModule = /** @class */ (function () {
        function NgxAppkitStarterAlphaModule(parentModule) {
            if (parentModule) {
                throw new Error('NgxAppkitStarterAlphaModule is already loaded. Import it in the AppModule only');
            }
        }
        /**
         * @return {?}
         */
        NgxAppkitStarterAlphaModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: NgxAppkitStarterAlphaModule,
                providers: []
            };
        };
        NgxAppkitStarterAlphaModule.decorators = [
            { type: core.NgModule, args: [{
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
                    },] }
        ];
        /** @nocollapse */
        NgxAppkitStarterAlphaModule.ctorParameters = function () { return [
            { type: NgxAppkitStarterAlphaModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        return NgxAppkitStarterAlphaModule;
    }());

    exports.AccountEndpoint = AccountEndpoint;
    exports.AccountService = AccountService;
    exports.AlertServiceProvider = AlertServiceProvider;
    exports.AppTitleService = AppTitleService;
    exports.ConfigurationServiceProvider = ConfigurationServiceProvider;
    exports.DependencyModule = DependencyModule;
    exports.Gender = Gender;
    exports.GroupByPipe = GroupByPipe;
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
    exports.ɵa = EqualValidator;
    exports.ɵb = LastElementDirective;
    exports.ɵc = AutofocusDirective;
    exports.ɵd = BootstrapTabDirective;
    exports.ɵe = BootstrapToggleDirective;
    exports.ɵf = BootstrapSelectDirective;
    exports.ɵg = BootstrapDatepickerDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-appkit-starter-alpha.umd.js.map
