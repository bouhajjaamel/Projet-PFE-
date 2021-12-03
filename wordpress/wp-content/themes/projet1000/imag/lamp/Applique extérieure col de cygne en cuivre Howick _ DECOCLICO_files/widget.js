var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
/* eslint-disable no-underscore-dangle, class-methods-use-this, @typescript-eslint/no-unused-vars, no-restricted-globals, consistent-return, func-names, no-useless-escape, block-scoped-var */
if (window.navigator.userAgent.indexOf('MSIE') < 0 &&
    window.navigator.userAgent.indexOf('Trident') < 0) {
    var BW = /** @class */ (function () {
        function BW() {
            this.works = true;
            this.pendingIdentitySetting = null;
            this.initialized = false;
            this.widgetOnRight = true;
            this.freeDivMode = undefined;
            this.fullHeight = false;
            this.width = 'min(270px, 90%)';
            this.onThirdPartyTakeoverStart = null;
            this.onThirdPartyTakeoverEnd = null;
            this.onThirdPartyTakeoverResume = null;
            this.consentReceived = false;
            this._mustSetConsentReceived = false;
            this._mustOpenWidget = false;
            this._mustCloseWidget = false;
            // eslint-enable  prefer-template
            this.consentReceivedOnInit = false;
            this._zChatUser = {
                email: '',
                firstName: 'Agent',
                lastName: 'Zendesk',
                type: 'third_party',
                id: 'act_00000000-0000-0000-0000-000000000000',
                avatar: 'assets/leadAvatar.png',
                customData: [],
            };
            this._zChatShouldUseZendeskApi = false;
            this._zChatMustSetVisitor = null;
            this._zChatMustSetRhData = null;
            this._zChatCanUpdateData = false;
            this.pendingOrderEvent = null;
        }
        BW.prototype._re = function (method, route, body) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var xhr = new XMLHttpRequest();
                            xhr.open(method, "" + _this.host + route);
                            var bcSid = window.localStorage.getItem('bc-sid') || '';
                            var randomize = window.localStorage.getItem('bc-randomize-id');
                            if (randomize === 'true') {
                                xhr.setRequestHeader('bc-randomize-id', 'true');
                                window.localStorage.removeItem('bc-randomize-id');
                            }
                            xhr.setRequestHeader('bc-sid', bcSid);
                            xhr.setRequestHeader('Accept', 'application-json');
                            xhr.onload = function () {
                                if (xhr.status >= 200 && xhr.status < 300) {
                                    var newSid = xhr.getResponseHeader('bc-sid') || '';
                                    if (newSid) {
                                        _this.bcSid = newSid;
                                        if (_this.consentReceived) {
                                            window.localStorage.setItem('bc-sid', newSid);
                                        }
                                    }
                                    try {
                                        var result = JSON.parse(xhr.response);
                                        return resolve(result);
                                    }
                                    catch (error) {
                                        return undefined;
                                    }
                                }
                                return reject(xhr.response);
                            };
                            if (body) {
                                xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
                            }
                            xhr.send(JSON.stringify(body));
                        })];
                });
            });
        };
        // eslint-disable  prefer-template
        BW.prototype.get_cookie = function (name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var _i = 0, ca_1 = ca; _i < ca_1.length; _i++) {
                var c = ca_1[_i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
            return null;
        };
        BW.prototype.delete_cookie = function (name, path, domain, sameSite, secure) {
            if (this.get_cookie(name)) {
                document.cookie = name + "=" + (path ? ";path=" + path : '') + (domain ? ";domain=" + domain : '') + (sameSite ? ";samesite=" + sameSite : '') + (secure ? ';secure' : '') + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
            }
        };
        BW.prototype._clearTpCookies = function () {
            var url = new URL(document.URL);
            var domain = url.hostname === 'localhost' ? 'localhost' : "." + url.hostname;
            this.delete_cookie('__zlcmid', '/', domain, 'none', true);
            window.localStorage.removeItem('__zlcstore');
        };
        BW.prototype.init = function (e, v, o) {
            return __awaiter(this, void 0, void 0, function () {
                var existingSid, uids, style, element, widgetUrl, listener;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.token = e.token;
                            this.host = e.host;
                            if (v)
                                this.v = v;
                            this.frame = document.createElement('iframe');
                            this.frame.setAttribute('id', 'botmind-iframe');
                            this.frame.setAttribute('scrolling', 'no');
                            this.frame.setAttribute('allowfullscreen', 'true');
                            this.frame.setAttribute('allow', 'autoplay');
                            this.frame.classList.add('bcDisabled');
                            if (o && o.setWidgetOnLeftSide) {
                                this.widgetOnRight = false;
                            }
                            if (o && o.freeDivMode) {
                                this.freeDivMode = o.freeDivMode;
                            }
                            this.consentReceivedOnInit = !!e.consentReceived;
                            existingSid = window.localStorage.getItem('bc-sid');
                            this.consentReceived = !!e.consentReceived || (!!v && !!v.email) || !!existingSid;
                            return [4 /*yield*/, this._getUids()];
                        case 1:
                            uids = _a.sent();
                            this.sid = uids.id;
                            this.fullHeight = uids.fullHeight;
                            this.widgetHost = uids.widgetHost;
                            if (uids.clearTpCookies) {
                                this._clearTpCookies();
                            }
                            style = document.createElement('style');
                            if (this.freeDivMode) {
                                style.textContent = "\n#botmind-iframe {\n  display: block;\n  border: none;\n  height: 100%;\n  width: 100%;\n  z-index: 2147483647;\n}\n#botmind-iframe.bcDisabled {\n  display: none;\n}\n#botmind-iframe.bcOvertaken {\n  display: none;\n}";
                            }
                            else {
                                style.textContent = "\n#botmind-iframe {\n  display: block;\n  border: none;\n  position: fixed;\n  border-radius: 15px;\n  z-index: 2147483647;\n}\n#botmind-iframe.bcDisabled {\n  display: none;\n}\n#botmind-iframe.bcOvertaken {\n  display: none;\n}\n#botmind-iframe.bcClosed {\n  width: 60px;\n  height: 60px;\n  " + (this.fullHeight
                                    ? "\n  " + (this.widgetOnRight
                                        ? "\n  border-radius: 30px 0px 0px 30px;"
                                        : "\n  border-radius: 0px 30px 30px 0px;") + "\n  "
                                    : 'border-radius: 30px;') + "\n}\n#botmind-iframe.bcClosedCircle {\n  " + (this.fullHeight
                                    ? "\n  " + (this.widgetOnRight
                                        ? "\n  border-radius: 30px 0px 0px 30px !important;"
                                        : "\n  border-radius: 0px 30px 30px 0px !important;") + "\n  "
                                    : 'border-radius: 30px;') + "\n}\n#botmind-iframe.bcClosedSquare {\n  " + (this.fullHeight
                                    ? "\n  " + (this.widgetOnRight
                                        ? "\n  border-radius: 15px 0px 0px 15px !important;"
                                        : "\n  border-radius: 0px 15px 15px 0px !important;") + "\n  "
                                    : 'border-radius: 15px;') + "\n}\n#botmind-iframe.bcClosed.bcHasNewMessages {\n  " + (this.widgetOnRight
                                    ? "\n  border-top-right-radius: 0px;"
                                    : "\n  border-top-left-radius: 0px;") + "\n}\n#botmind-iframe.bcClosed.bcPopNotif {\n  width: 300px;\n  height: 140px;\n}\n@media only screen and (max-width: 600px) {\n  #botmind-iframe {\n  " + (this.widgetOnRight
                                    ? "\n    right: 0px;"
                                    : "\n    left: 0px;") + "\n    bottom: 0px;\n    width: 100%;\n    height: 100%;\n    border-radius: 0px;\n  }\n  #botmind-iframe.bcClosed {\n    height: 45px;\n    width: 45px;\n    bottom: 60px;\n    border-radius: 0;\n    " + (this.widgetOnRight
                                    ? "\n    right: 0;"
                                    : "\n    left: 0;") + "\n  }\n  .bcWidgetOpen {\n    height: 100%;\n    overflow: hidden;\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 600px) {\n  " + (this.fullHeight
                                    ? "\n  #botmind-iframe {\n  " + (this.widgetOnRight
                                        ? "\n    right: 0px;"
                                        : "\n    left: 0px;") + "\n    bottom: 0px;\n    width: 400px;\n    height: 100%;\n  " + (this.widgetOnRight
                                        ? "\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;"
                                        : "\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;") + "\n    box-shadow: 0px 0px 20px -10px #AFAFAF;\n  }\n  #botmind-iframe.bcClosed {\n    bottom: 20px;\n  }\n  "
                                    : "#botmind-iframe {\n  " + (this.widgetOnRight
                                        ? "\n    right: 20px;"
                                        : "\n    left: 20px;") + "\n    bottom: 20px;\n    width: 400px;\n    height: 720px;\n    max-height: calc(100% - 80px);\n    box-shadow: 0px 0px 20px -10px #AFAFAF;\n  }") + "\n}\n\n#botmind-iframe.bcClosed.bcPopNotif {\n  box-shadow: none;\n  border-radius: 0px;\n}\n    ";
                            }
                            this.openIframeStyle = document.createElement('style');
                            this.openIframeMobileStyle = document.createElement('style');
                            this.closedIframeStyle = document.createElement('style');
                            this.closedIframeMobileStyle = document.createElement('style');
                            document.head.append(style);
                            document.head.append(this.openIframeStyle);
                            document.head.append(this.openIframeMobileStyle);
                            document.head.append(this.closedIframeStyle);
                            document.head.append(this.closedIframeMobileStyle);
                            if (this.freeDivMode) {
                                element = document.getElementById(this.freeDivMode);
                                if (!element) {
                                    throw new Error("Botmind target div not found: #" + this.freeDivMode);
                                }
                                element.append(this.frame);
                            }
                            else {
                                document.body.append(this.frame);
                            }
                            widgetUrl = new URL(this.widgetHost + "/?host=" + this.host + "&uid=" + uids.id + "&aid=" + uids.accountId);
                            widgetUrl.searchParams.set('pathName', window.location.pathname);
                            widgetUrl.searchParams.set('pageUrl', window.location.href);
                            widgetUrl.searchParams.set('pageTitle', document.title);
                            widgetUrl.searchParams.set('clearTpCookies', String(uids.clearTpCookies));
                            widgetUrl.searchParams.set('reset', String(uids.reset));
                            widgetUrl.searchParams.set('startWithWidgetOpen', String(false));
                            widgetUrl.searchParams.set('widgetOnRight', String(this.widgetOnRight));
                            widgetUrl.searchParams.set('fullHeight', String(uids.fullHeight));
                            widgetUrl.searchParams.set('freeDivMode', String(!!this.freeDivMode));
                            widgetUrl.searchParams.set('consentReceived', String(this.consentReceived));
                            widgetUrl.searchParams.set('isMobile', String(document.documentElement.clientWidth <= 600));
                            if (uids.ip) {
                                widgetUrl.searchParams.set('sip', uids.ip);
                            }
                            this.currentURL = window.location.href;
                            window.setInterval(this.checkURL.bind(this), 100);
                            if (e.language) {
                                widgetUrl.searchParams.set('language', e.language);
                            }
                            if (v) {
                                if (v.email) {
                                    widgetUrl.searchParams.set('visitorEmail', v.email);
                                }
                                if (v.firstName) {
                                    widgetUrl.searchParams.set('visitorFirstName', v.firstName);
                                }
                                if (v.lastName) {
                                    widgetUrl.searchParams.set('visitorLastName', v.lastName);
                                }
                                if (v.customData) {
                                    widgetUrl.searchParams.set('customData', JSON.stringify(v.customData));
                                }
                            }
                            if (o) {
                                if (o.startWithWidgetOpen) {
                                    widgetUrl.searchParams.set('startWithWidgetOpen', String(true));
                                }
                                widgetUrl.searchParams.set('contactFormMode', String(!!o.contactFormMode));
                            }
                            listener = function (event) {
                                if (event.origin !== _this.widgetHost) {
                                    return;
                                }
                                if (!event.data.type) {
                                    return;
                                }
                                switch (event.data.type) {
                                    case 'bc_initialized':
                                        _this.initialized = true;
                                        if (_this.onInit) {
                                            try {
                                                _this.onInit();
                                            }
                                            catch (error) {
                                                console.error('onInit function threw an exception:');
                                                console.error(error);
                                            }
                                        }
                                        _this._sendWidthToWidget();
                                        if (_this.pendingIdentitySetting) {
                                            _this._setVisitorIdentity(_this.pendingIdentitySetting);
                                        }
                                        if (_this.pendingOrderEvent) {
                                            _this.orderValidatedEvent(_this.pendingOrderEvent.orderAmount, _this.pendingOrderEvent.currency, _this.pendingOrderEvent.transactionId);
                                        }
                                        if (_this._mustSetConsentReceived) {
                                            _this.consentCollected();
                                        }
                                        if (_this._mustOpenWidget) {
                                            _this.openWidget();
                                        }
                                        if (_this._mustCloseWidget) {
                                            _this.closeWidget();
                                        }
                                        break;
                                    case 'bc_enable':
                                        _this.frame.classList.remove('bcDisabled');
                                        if (event.data.data.style === 'square') {
                                            _this.frame.classList.add('bcClosed');
                                            _this.frame.classList.add('bcClosedSquare');
                                        }
                                        else if (event.data.data.style === 'circle') {
                                            _this.frame.classList.add('bcClosed');
                                            _this.frame.classList.add('bcClosedCircle');
                                        }
                                        else {
                                            _this.frame.classList.add('bcClosed');
                                        }
                                        if (_this.consentReceivedOnInit) {
                                            if (_this.frame.contentWindow) {
                                                _this.frame.contentWindow.postMessage({
                                                    type: 'bc_consentReceivedOnInit',
                                                    data: _this.sid,
                                                }, '*');
                                            }
                                        }
                                        break;
                                    case 'bc_disable':
                                        _this.frame.classList.add('bcDisabled');
                                        break;
                                    case 'bc_popNotif':
                                        _this.frame.classList.remove('bcHasNewMessages');
                                        _this.frame.classList.add('bcPopNotif');
                                        break;
                                    case 'bc_newMessages':
                                        _this.frame.classList.add('bcHasNewMessages');
                                        _this.frame.classList.remove('bcPopNotif');
                                        break;
                                    case 'bc_noNewMessages':
                                        _this.frame.classList.remove('bcHasNewMessages');
                                        _this.frame.classList.remove('bcPopNotif');
                                        break;
                                    case 'bc_open':
                                        _this._setIframeAdditionalHeight(0);
                                        _this.frame.classList.remove('bcClosed');
                                        _this.frame.classList.remove('bcClosedCircle');
                                        _this.frame.classList.remove('bcClosedSquare');
                                        document.body.classList.add('bcWidgetOpen');
                                        break;
                                    case 'bc_close':
                                        _this.frame.classList.add('bcClosed');
                                        document.body.classList.remove('bcWidgetOpen');
                                        break;
                                    case 'bc_close_circle':
                                        _this.frame.classList.add('bcClosed');
                                        _this.frame.classList.add('bcClosedCircle');
                                        document.body.classList.remove('bcWidgetOpen');
                                        break;
                                    case 'bc_close_square':
                                        _this.frame.classList.add('bcClosed');
                                        _this.frame.classList.add('bcClosedSquare');
                                        document.body.classList.remove('bcWidgetOpen');
                                        break;
                                    case 'bc_set_iframe_open_css':
                                        _this._setIframeOpenCss(event.data.data);
                                        break;
                                    case 'bc_set_iframe_open_mobile_css':
                                        _this._setIframeOpenMobileCss(event.data.data);
                                        break;
                                    case 'bc_set_iframe_closed_css':
                                        _this._setIframeClosedCss(event.data.data);
                                        break;
                                    case 'bc_set_iframe_closed_mobile_css':
                                        _this._setIframeClosedMobileCss(event.data.data);
                                        break;
                                    case 'bc_setAddHeight':
                                        _this._setIframeAdditionalHeight(event.data.data);
                                        break;
                                    case 'bc_analytics':
                                        if (event.data.data.data) {
                                            document.dispatchEvent(new CustomEvent(event.data.data.type, event.data.data.data));
                                        }
                                        else {
                                            document.dispatchEvent(new CustomEvent(event.data.data.type));
                                        }
                                        break;
                                    case 'bc_getStorage':
                                        _this._getStorage(event.data.data.key, event.data.data.stamp);
                                        break;
                                    case 'bc_setStorage':
                                        _this._setStorage(event.data.data.key, event.data.data.value, event.data.data.stamp);
                                        break;
                                    case 'bc_removeStorage':
                                        _this._removeStorage(event.data.data.key, event.data.data.stamp);
                                        break;
                                    case 'bc_zChat':
                                        _this._zChatEvent(event.data.data.type, event.data.data.data);
                                        break;
                                    case 'bc_tpTakeover':
                                        document.body.classList.remove('bcWidgetOpen');
                                        _this.frame.classList.add('bcOvertaken');
                                        if (_this.onThirdPartyTakeoverStart) {
                                            try {
                                                _this.onThirdPartyTakeoverStart(event.data.data.transcript, event.data.data.messages, event.data.data.visitorMessages, event.data.data.visitor);
                                            }
                                            catch (error) {
                                                console.error('onThirdPartyTakeoverStart function threw an exception:');
                                                console.error(error);
                                            }
                                        }
                                        break;
                                    case 'bc_resumeTpTakeover':
                                        document.body.classList.remove('bcWidgetOpen');
                                        _this.frame.classList.add('bcOvertaken');
                                        if (_this.onThirdPartyTakeoverResume) {
                                            try {
                                                _this.onThirdPartyTakeoverResume();
                                            }
                                            catch (error) {
                                                console.error('onThirdPartyTakeoverResume function threw an exception:');
                                                console.error(error);
                                            }
                                        }
                                        break;
                                    case 'bc_endTpTakeover':
                                        document.body.classList.add('bcWidgetOpen');
                                        _this.frame.classList.remove('bcOvertaken');
                                        if (_this.onThirdPartyTakeoverEnd) {
                                            try {
                                                _this.onThirdPartyTakeoverEnd();
                                            }
                                            catch (error) {
                                                console.error('onThirdPartyTakeoverEnd function threw an exception:');
                                                console.error(error);
                                            }
                                        }
                                        break;
                                    case 'bc_leavingGhostMode':
                                        {
                                            var sidString = _this.bcSid;
                                            if (!sidString) {
                                                sidString = window.localStorage.getItem('bc-sid');
                                            }
                                            if (!sidString) {
                                                console.warn('no sid string');
                                                break;
                                            }
                                            var bcSid = JSON.parse(sidString);
                                            bcSid.id = event.data.data;
                                            _this.bcSid = JSON.stringify(bcSid);
                                            window.localStorage.setItem('bc-sid', _this.bcSid);
                                            if (_this._zChatData && _this._zChatUser) {
                                                _this._zChatLoad();
                                            }
                                        }
                                        break;
                                    default:
                                }
                            };
                            window.addEventListener('message', listener, false);
                            this.frame.setAttribute('src', widgetUrl.href);
                            window.addEventListener('focus', function (data) {
                                if (_this.frame.contentWindow) {
                                    _this.frame.contentWindow.postMessage({ type: 'bc_onpage' }, '*');
                                }
                            });
                            window.addEventListener('blur', function (data) {
                                if (_this.frame.contentWindow) {
                                    _this.frame.contentWindow.postMessage({ type: 'bc_leftpage' }, '*');
                                }
                            });
                            window.addEventListener('resize', function (data) {
                                _this._sendWidthToWidget();
                            });
                            this._clearStorage();
                            return [2 /*return*/];
                    }
                });
            });
        };
        BW.prototype.consentCollected = function () {
            if (this.initialized &&
                !this.consentReceived &&
                this.frame &&
                this.frame.contentWindow !== null) {
                this.consentReceived = true;
                window.localStorage.setItem('bc-sid', this.bcSid);
                this.frame.contentWindow.postMessage({ type: 'bc_consentCollected' }, '*');
            }
            else {
                this._mustSetConsentReceived = true;
            }
        };
        BW.prototype._getStorage = function (key, stamp) {
            var value = JSON.parse(window.localStorage.getItem("botmindStorage-" + key) || 'null');
            if (this.frame.contentWindow) {
                this.frame.contentWindow.postMessage({ type: 'bc_returnGet', data: { stamp: stamp, value: value } }, '*');
            }
        };
        BW.prototype._setStorage = function (key, value, stamp) {
            window.localStorage.setItem("botmindStorage-" + key, JSON.stringify(value));
            if (this.frame.contentWindow) {
                this.frame.contentWindow.postMessage({ type: 'bc_returnSet', data: { stamp: stamp, value: value } }, '*');
            }
        };
        BW.prototype._removeStorage = function (key, stamp) {
            var value = JSON.parse(window.localStorage.getItem("botmindStorage-" + key) || 'null');
            window.localStorage.removeItem("botmindStorage-" + key);
            if (this.frame.contentWindow) {
                this.frame.contentWindow.postMessage({ type: 'bc_returnRemove', data: { stamp: stamp, value: value } }, '*');
            }
        };
        BW.prototype._clearStorage = function (stamp) {
            var toRemove = [];
            for (var _i = 0, _a = Object.keys(window.localStorage); _i < _a.length; _i++) {
                var key = _a[_i];
                if (key.indexOf('botmindStorage-') === 0) {
                    toRemove.push(key);
                }
            }
            for (var _b = 0, toRemove_1 = toRemove; _b < toRemove_1.length; _b++) {
                var key = toRemove_1[_b];
                window.localStorage.removeItem(key);
            }
            if (stamp && this.frame.contentWindow) {
                this.frame.contentWindow.postMessage({ type: 'bc_returnClear', data: { stamp: stamp } }, '*');
            }
        };
        BW.prototype._zChatEvent = function (type, data) {
            switch (type) {
                case 'init':
                    this._zChatInit(data);
                    break;
                case 'onMessage':
                    this._zChatOnMessage(data);
                    break;
                case 'onRhDataChanged':
                    this._zChatOnRhDataChanged(data);
                    break;
                case 'setVisitor':
                    this._zChatSetVisitor(data);
                    break;
                case 'sendHistory':
                    this._zChatSendHistory(data);
                    break;
                case 'endRedirection':
                    this._zChatEndRedirection();
                    break;
                case 'isTyping':
                    this._zChatIsTyping(data);
                    break;
                default:
            }
        };
        BW.prototype._zChatInit = function (data) {
            this._zChatData = data.initData;
            this._zChatUser = data.user;
            if (this.consentReceived) {
                this._zChatLoad();
            }
        };
        BW.prototype._zChatLoad = function () {
            var _this = this;
            // load script
            var script = document.getElementById('zendesk-chat-web-sdk');
            if (script) {
                this._zChatShouldUseZendeskApi = true;
                return;
            }
            script = document.createElement('script');
            script.id = 'zendesk-chat-web-sdk';
            script.type = 'text/javascript';
            script.src = this.widgetHost + "/assets/web-sdk.js";
            var initZChat = function () {
                _this._zChat = window.zChat;
                _this._zChat.on('connection_update', function (status) {
                    switch (status) {
                        case 'connected':
                            {
                                _this._zChatShouldUseZendeskApi = true;
                                if (_this._zChatData.department) {
                                    _this._zChatSetDepartmentId(_this._zChatData.department);
                                }
                                if (_this._zChatMustSetVisitor) {
                                    _this._zChat.setVisitorInfo({
                                        display_name: _this._zChatGetUserFullName(_this._zChatMustSetVisitor),
                                        email: _this._zChatMustSetVisitor.email,
                                    }, function (err) {
                                        if (err) {
                                            console.log(err);
                                        }
                                    });
                                    _this._zChatMustSetVisitor = null;
                                }
                                var data = {
                                    selectedDepartmentId: -1,
                                    departments: _this._zChat.getAllDepartments(),
                                };
                                if (_this._zChatRhData &&
                                    _this._zChatRhData.selectedDepartmentId &&
                                    _this._zChatRhData.selectedDepartmentId !== -1) {
                                    if (typeof _this._zChatRhData.selectedDepartmentId === 'string') {
                                        var selectedDepartment = data.departments.find(function (d) { var _a; return d.name === ((_a = _this._zChatRhData) === null || _a === void 0 ? void 0 : _a.selectedDepartmentId); });
                                        if (selectedDepartment) {
                                            _this._zChatRhData.selectedDepartmentId = selectedDepartment.id;
                                        }
                                    }
                                    if (typeof _this._zChatRhData.selectedDepartmentId === 'number') {
                                        data.selectedDepartmentId = _this._zChatRhData.selectedDepartmentId;
                                    }
                                }
                                else {
                                    data.selectedDepartmentId = _this._zChat.getVisitorDefaultDepartment();
                                }
                                if (_this._zChatMustSetRhData) {
                                    if (_this._zChatMustSetRhData.selectedDepartmentId) {
                                        if (typeof _this._zChatMustSetRhData.selectedDepartmentId === 'string') {
                                            var selectedDepartment = data.departments.find(function (d) { var _a; return d.name === ((_a = _this._zChatMustSetRhData) === null || _a === void 0 ? void 0 : _a.selectedDepartmentId); });
                                            if (selectedDepartment) {
                                                _this._zChatMustSetRhData.selectedDepartmentId = selectedDepartment.id;
                                            }
                                        }
                                        if (typeof _this._zChatMustSetRhData.selectedDepartmentId === 'number') {
                                            _this._zChat.setVisitorDefaultDepartment(_this._zChatMustSetRhData.selectedDepartmentId, _this._zChatDefaultErrorLog);
                                        }
                                    }
                                    _this._zChatMustSetRhData = null;
                                }
                                _this._zChatUpdateThirdPartyData({
                                    handler_type: 'zendesk',
                                    selectedDepartmentId: _this._zChat.getVisitorDefaultDepartment(),
                                    departments: _this._zChat.getAllDepartments(),
                                }).then(function () {
                                    _this._zChatCanUpdateData = true;
                                });
                                _this._zChat.sendVisitorPath({ title: document.title, url: document.location.href }, _this._zChatDefaultErrorLog);
                            }
                            break;
                        case 'connecting':
                        case 'closed':
                            _this._zChatShouldUseZendeskApi = false;
                            break;
                        default:
                            console.error("zChat: Unknown connection status: " + status);
                            break;
                    }
                });
                _this._zChat.on('account_status', function (data) {
                    switch (data) {
                        case 'online':
                            _this._zChatUpdateThirdPartyAgentPresence(true);
                            return;
                        case 'away':
                        case 'offline':
                            _this._zChatUpdateThirdPartyAgentPresence(false);
                            return;
                        default:
                            console.error("zChat: Unknown account status: " + status);
                    }
                });
                _this._zChat.on('department_update', function (data) {
                    if (_this._zChatCanUpdateData) {
                        _this._zChatUpdateThirdPartyData({
                            handler_type: 'zendesk',
                            departments: _this._zChat.getAllDepartments(),
                        });
                    }
                });
                _this._zChat.on('chat', function (data) {
                    switch (data.type) {
                        case 'chat.msg':
                            return _this._zChatMessageEventHandler(data);
                        case 'chat.file':
                            return _this._zChatFileEventHandler(data);
                        case 'chat.queue_position':
                            return;
                        case 'chat.memberjoin':
                            return;
                        case 'chat.memberleave':
                            return;
                        case 'chat.request.rating':
                            return;
                        case 'chat.rating':
                            return;
                        case 'chat.comment':
                            return;
                        case 'typing':
                            return _this._zChatTypingEventHandler(data);
                        case 'last_read':
                            return;
                        default:
                            console.error("zChat: Unknown chat event type: " + data.type);
                    }
                });
                _this._zChat.init({ account_key: _this._zChatData.accountKey });
            };
            script.onload = function () {
                if (typeof window.define === 'function' && window.define.amd) {
                    require(['zChat'], function (zChat) {
                        window.zChat = zChat;
                        initZChat();
                    });
                }
                else {
                    initZChat();
                }
            };
            script.onerror = function (error) { return 'error'; };
            document.getElementsByTagName('head')[0].appendChild(script);
        };
        BW.prototype._zChatSetDepartmentId = function (departmentId) {
            this._zChatData.department = departmentId;
            var department = this._zChat.getDepartment(this._zChatData.department);
            if (department && department.status === 'online') {
                this._zChat.setVisitorDefaultDepartment(department.id, this._zChatDefaultErrorLog);
            }
        };
        BW.prototype._zChatGetUserFullName = function (user) {
            if (user.firstName && user.lastName) {
                return user.firstName + " " + user.lastName;
            }
            if (user.firstName) {
                return user.firstName;
            }
            if (user.lastName) {
                return user.lastName;
            }
            return '';
        };
        BW.prototype._zChatUpdateThirdPartyData = function (data) {
            return this._re('PUT', "/api/chat/" + this.sid + "/tp-data", data);
        };
        BW.prototype._zChatUpdateThirdPartyAgentPresence = function (hasAgents) {
            return this._re('PUT', "/api/chat/" + this.sid + "/tp-agent-present", { hasAgents: hasAgents });
        };
        BW.prototype._zChatMessageEventHandler = function (data) {
            if (this.initialized && this.frame && this.frame.contentWindow) {
                this.frame.contentWindow.postMessage({
                    type: 'bc_zChat',
                    data: {
                        data: {
                            message: data,
                            pageUrl: window.location.href,
                            pageTitle: document.title,
                        },
                        type: 'messageEvent',
                    },
                }, '*');
            }
        };
        BW.prototype._zChatFileEventHandler = function (data) {
            if (this.initialized && this.frame && this.frame.contentWindow) {
                this.frame.contentWindow.postMessage({
                    type: 'bc_zChat',
                    data: {
                        data: {
                            message: data,
                            pageUrl: window.location.href,
                            pageTitle: document.title,
                        },
                        type: 'fileMessageEvent',
                    },
                }, '*');
            }
        };
        BW.prototype._zChatTypingEventHandler = function (data) {
            if (this.initialized && this.frame && this.frame.contentWindow) {
                this.frame.contentWindow.postMessage({
                    type: 'bc_zChat',
                    data: { data: data, type: 'typingEvent' },
                }, '*');
            }
        };
        BW.prototype._zChatOnMessage = function (message) {
            // TODO: When non-text messages will be implemented
            if (this._zChatShouldUseZendeskApi) {
                this._zChat.sendChatMsg(message.content, this._zChatDefaultErrorLog);
            }
        };
        BW.prototype._zChatOnRhDataChanged = function (rhData) {
            if (this._zChatShouldUseZendeskApi) {
                if (rhData && rhData.selectedDepartmentId) {
                    if (typeof rhData.selectedDepartmentId === 'string') {
                        var allDepartments = this._zChat.getAllDepartments();
                        var selectedDepartment = allDepartments.find(function (d) { return d.name === rhData.selectedDepartmentId; });
                        if (selectedDepartment) {
                            rhData.selectedDepartmentId = selectedDepartment.id;
                        }
                    }
                    if (typeof rhData.selectedDepartmentId === 'number') {
                        this._zChat.setVisitorDefaultDepartment(rhData.selectedDepartmentId, this._zChatDefaultErrorLog);
                    }
                }
            }
            else {
                this._zChatMustSetRhData = rhData;
            }
        };
        BW.prototype._zChatSetVisitor = function (visitor) {
            if (this._zChat && this._zChatShouldUseZendeskApi) {
                this._zChat.setVisitorInfo({
                    display_name: this._zChatGetUserFullName(visitor),
                    email: visitor.email,
                }, function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            }
            else {
                this._zChatMustSetVisitor = visitor;
            }
        };
        BW.prototype._zChatSendHistory = function (messages) {
            var _this = this;
            var types = {
                lead: '🧑',
                visitor: '🧑',
                agent: '👨‍💼',
                system: '🤖',
                bot: '🤖',
                third_party: '👨‍💼',
            };
            var firstVisitorTextMessage = '';
            var visitorTextMessages = messages.filter(function (m) {
                return ['visitor', 'lead'].includes(m.author.type) && m.type === 'text';
            });
            if (visitorTextMessages && visitorTextMessages.length) {
                firstVisitorTextMessage = visitorTextMessages[0].content;
            }
            var history = "FIRST MESSAGE:\n" + firstVisitorTextMessage + "\n\n";
            history += 'HISTORY (Last 10 messages from visitor):\n'.concat(messages
                .filter(function (m) { return ['visitor', 'lead'].includes(m.author.type); })
                .map(function (message) {
                var content;
                var temp;
                switch (message.type) {
                    case 'text':
                    case 'image':
                        content = message.content;
                        break;
                    case 'text_payload':
                        temp = message.content;
                        content = temp.text + "(" + temp.payload + ")";
                        break;
                    case 'buttons':
                        content = message.content
                            .map(function (c) {
                            return "[" + c.text + "](" + c.type + ":" + c.content + ")";
                        })
                            .join('|');
                        break;
                    case 'quick_replies':
                        content = message.content.join('|');
                        break;
                    default:
                        content = '';
                        break;
                }
                return "[" + types[message.author.type] + " " + (_this._zChatGetUserFullName(message.author) || '') + "] " + content;
            })
                .slice(-10)
                .join('\n\n'));
            this._zChat.sendChatMsg(history, function (err) {
                if (err)
                    console.error(err);
            });
        };
        BW.prototype._zChatEndRedirection = function () {
            if (this._zChat) {
                this._zChat.endChat(this._zChatDefaultErrorLog);
            }
        };
        BW.prototype._zChatIsTyping = function (isTyping) {
            if (this._zChat && this._zChatShouldUseZendeskApi) {
                this._zChat.sendTyping(isTyping);
            }
        };
        BW.prototype._zChatDefaultErrorLog = function (err) {
            if (err) {
                console.error('zChat callback returned an error:');
                console.error(err);
            }
        };
        BW.prototype._setIframeOpenCss = function (css) {
            this.openIframeStyle.textContent = "@media only screen and (min-width: 600px) { #botmind-iframe {" + css + "} }";
        };
        BW.prototype._setIframeOpenMobileCss = function (css) {
            this.openIframeMobileStyle.textContent = "@media only screen and (max-width: 600px) { #botmind-iframe {" + css + "} }";
        };
        BW.prototype._setIframeClosedCss = function (css) {
            this.closedIframeStyle.textContent = "@media only screen and (min-width: 600px) { #botmind-iframe.bcClosed {" + css + "} }";
        };
        BW.prototype._setIframeClosedMobileCss = function (css) {
            this.closedIframeMobileStyle.textContent = "@media only screen and (max-width: 600px) { #botmind-iframe.bcClosed {" + css + "} }";
        };
        BW.prototype._setIframeAdditionalHeight = function (val) {
            if (val === 0) {
                this.frame.style.height = '';
                this.frame.style.width = '';
                this.frame.style.borderRadius = '';
                this.frame.style.boxShadow = '';
            }
            else {
                this.frame.style.height = 60 + val + "px";
                this.frame.style.width = this.width;
                this.frame.style.borderRadius = '4px 4px 0 0';
                this.frame.style.boxShadow = 'none';
            }
        };
        BW.prototype._mobileCheck = function () {
            var check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                    check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        };
        BW.prototype._sendWidthToWidget = function () {
            var width = document.documentElement.clientWidth;
            if (this.initialized && this.frame && this.frame.contentWindow) {
                this.frame.contentWindow.postMessage({ type: 'bc_sendWidth', data: width }, '*');
            }
            if (this.initialized && this.frame && this.frame.contentWindow) {
                var isMobileDisplay = width <= 600;
                var isMobile = this._mobileCheck();
                var ghostMode = !this.consentReceived;
                this.frame.contentWindow.postMessage({ type: 'bc_sendIsMobile', data: { isMobile: isMobile, isMobileDisplay: isMobileDisplay, ghostMode: ghostMode } }, '*');
                this.width = isMobile ? '100vw' : 'min(270px, 90%)';
            }
        };
        BW.prototype._getUids = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this._re('GET', "/api/widget/v1.0/uid?token=" + this.token + "&consentReceived=" + this.consentReceived)];
                });
            });
        };
        BW.prototype.openWidget = function () {
            if (this.initialized && this.frame && this.frame.contentWindow) {
                if (this.consentReceived) {
                    this._re('PUT', '/api/widget/v1.0/session/open', { value: true });
                }
                else {
                    this.frame.contentWindow.postMessage({ type: 'bc_openWidgetGhost', data: true }, '*');
                }
                this._mustOpenWidget = false;
            }
            else {
                this._mustOpenWidget = true;
                this._mustCloseWidget = false;
            }
        };
        BW.prototype.closeWidget = function () {
            if (this.initialized && this.frame && this.frame.contentWindow) {
                if (this.consentReceived) {
                    this._re('PUT', '/api/widget/v1.0/session/open', { value: false });
                }
                else {
                    this.frame.contentWindow.postMessage({ type: 'bc_openWidgetGhost', data: false }, '*');
                }
                this._mustCloseWidget = false;
            }
            else {
                this._mustCloseWidget = true;
                this._mustOpenWidget = false;
            }
        };
        BW.prototype.hrefChange = function (href, pageName) {
            if (this.initialized && this.frame && this.frame.contentWindow) {
                this.frame.contentWindow.postMessage({ type: 'bc_hrefChange', data: { href: href, pageName: pageName } }, '*');
            }
        };
        BW.prototype.customEvent = function (tag, data) {
            if (this.initialized && this.frame && this.frame.contentWindow) {
                this.frame.contentWindow.postMessage({ type: 'bc_customEvent', data: { tag: tag, data: data } }, '*');
            }
        };
        BW.prototype.orderValidatedEvent = function (orderAmount, currency, transactionId) {
            if (this.initialized && this.frame && this.frame.contentWindow) {
                this.frame.contentWindow.postMessage({
                    type: 'bc_orderValidatedEvent',
                    data: {
                        orderAmount: orderAmount,
                        currency: currency,
                        transactionId: transactionId,
                    },
                }, '*');
                this.pendingOrderEvent = null;
            }
            else {
                this.pendingOrderEvent = { orderAmount: orderAmount, currency: currency, transactionId: transactionId };
            }
        };
        BW.prototype._setVisitorIdentity = function (identity) {
            if (!this.v) {
                if (!identity.firstName)
                    identity.firstName = '';
                if (!identity.lastName)
                    identity.lastName = '';
                if (!identity.customData)
                    identity.customData = [];
                if (!identity.email)
                    identity.email = '';
                this.v = identity;
            }
            else {
                this.v.firstName = identity.firstName || '';
                this.v.lastName = identity.lastName || '';
                this.v.email = identity.email || '';
                this.v.customData = identity.customData || [];
            }
            if (!this.frame.contentWindow) {
                console.error('Error: could not send identity to widget. Frame not loaded.');
                return;
            }
            this.frame.contentWindow.postMessage({ type: 'bc_setUser', data: this.v }, '*');
        };
        BW.prototype.setVisitorIdentity = function (identity) {
            if (this.initialized) {
                this._setVisitorIdentity(identity);
            }
            else {
                this.pendingIdentitySetting = identity;
            }
        };
        BW.prototype.resetVisitor = function () {
            if (this.initialized && this.frame.contentWindow) {
                this.frame.contentWindow.postMessage({ type: 'bc_resetUser' }, '*');
            }
            else {
                console.info('Widget is unitialized');
            }
        };
        BW.prototype.checkURL = function () {
            var oldUrl = new URL(this.currentURL);
            var newUrl = new URL(window.location.href);
            if (oldUrl.pathname !== newUrl.pathname) {
                this.hrefChange(newUrl.href, window.document.title);
            }
            this.currentURL = newUrl.href;
        };
        return BW;
    }());
    // eslint-disable-next-line
    var botmindWidget = new BW();
    window.botmindWidget = botmindWidget;
}
else {
    var BW = /** @class */ (function () {
        function BW() {
            this.works = false;
        }
        BW.prototype.init = function () {
            console.log('Botmind is not compatible with IE');
        };
        return BW;
    }());
    // eslint-disable-next-line
    var botmindWidget = new BW();
    window.botmindWidget = botmindWidget;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3B1YmxpYy93aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0xBQStMO0FBQy9MLElBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDOUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakQ7SUFDQTtRQUFBO1lBQ1MsVUFBSyxHQUFHLElBQUksQ0FBQztZQVVaLDJCQUFzQixHQUtuQixJQUFJLENBQUM7WUFNUixnQkFBVyxHQUFHLEtBQUssQ0FBQztZQUNwQixrQkFBYSxHQUFHLElBQUksQ0FBQztZQUNyQixnQkFBVyxHQUF1QixTQUFTLENBQUM7WUFDNUMsZUFBVSxHQUFHLEtBQUssQ0FBQztZQUNuQixVQUFLLEdBQUcsaUJBQWlCLENBQUM7WUFJM0IsOEJBQXlCLEdBT2hCLElBQUksQ0FBQztZQUNkLDRCQUF1QixHQUF1QixJQUFJLENBQUM7WUFDbkQsK0JBQTBCLEdBQXVCLElBQUksQ0FBQztZQUV0RCxvQkFBZSxHQUFHLEtBQUssQ0FBQztZQUN2Qiw0QkFBdUIsR0FBRyxLQUFLLENBQUM7WUFDaEMsb0JBQWUsR0FBRyxLQUFLLENBQUM7WUFDeEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1lBeUVqQyxpQ0FBaUM7WUFFMUIsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO1lBd21CN0IsZUFBVSxHQUFTO2dCQUN6QixLQUFLLEVBQUUsRUFBRTtnQkFDVCxTQUFTLEVBQUUsT0FBTztnQkFDbEIsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLElBQUksRUFBRSxhQUFhO2dCQUNuQixFQUFFLEVBQUUsMENBQTBDO2dCQUM5QyxNQUFNLEVBQUUsdUJBQXVCO2dCQUMvQixVQUFVLEVBQUUsRUFBRTthQUNmLENBQUM7WUFDTSw4QkFBeUIsR0FBRyxLQUFLLENBQUM7WUFDbEMseUJBQW9CLEdBQWdCLElBQUksQ0FBQztZQUN6Qyx3QkFBbUIsR0FBOEIsSUFBSSxDQUFDO1lBQ3RELHdCQUFtQixHQUFHLEtBQUssQ0FBQztZQTZmN0Isc0JBQWlCLEdBSWIsSUFBSSxDQUFDO1FBbUZsQixDQUFDO1FBanhDZSxnQkFBRyxHQUFqQixVQUNFLE1BQXlDLEVBQ3pDLEtBQWEsRUFDYixJQUFVOzs7O29CQUVWLHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07NEJBQ2pDLElBQU0sR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7NEJBQ2pDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUcsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFPLENBQUMsQ0FBQzs0QkFDekMsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUMxRCxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOzRCQUNqRSxJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7Z0NBQ3hCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztnQ0FDaEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs2QkFDbkQ7NEJBQ0QsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQzs0QkFDdEMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDOzRCQUNuRCxHQUFHLENBQUMsTUFBTSxHQUFHO2dDQUNYLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7b0NBQ3pDLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7b0NBQ3JELElBQUksTUFBTSxFQUFFO3dDQUNWLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO3dDQUNwQixJQUFJLEtBQUksQ0FBQyxlQUFlLEVBQUU7NENBQ3hCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQzt5Q0FDL0M7cUNBQ0Y7b0NBQ0QsSUFBSTt3Q0FDRixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3Q0FDeEMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7cUNBQ3hCO29DQUFDLE9BQU8sS0FBSyxFQUFFO3dDQUNkLE9BQU8sU0FBUyxDQUFDO3FDQUNsQjtpQ0FDRjtnQ0FDRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQzlCLENBQUMsQ0FBQzs0QkFDRixJQUFJLElBQUksRUFBRTtnQ0FDUixHQUFHLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLGdDQUFnQyxDQUFDLENBQUM7NkJBQ3hFOzRCQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNqQyxDQUFDLENBQUMsRUFBQzs7O1NBQ0o7UUFFRCxrQ0FBa0M7UUFDMUIsdUJBQVUsR0FBbEIsVUFBbUIsSUFBWTtZQUM3QixJQUFNLE1BQU0sR0FBTSxJQUFJLE1BQUcsQ0FBQztZQUMxQixJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxLQUFjLFVBQUUsRUFBRixTQUFFLEVBQUYsZ0JBQUUsRUFBRixJQUFFLEVBQUU7Z0JBQWIsSUFBSSxDQUFDLFdBQUE7Z0JBQ1IsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtvQkFDMUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDOUI7Z0JBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDM0IsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUM3QzthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRU8sMEJBQWEsR0FBckIsVUFDRSxJQUFZLEVBQ1osSUFBWSxFQUNaLE1BQWMsRUFDZCxRQUFnQixFQUNoQixNQUFlO1lBRWYsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QixRQUFRLENBQUMsTUFBTSxHQUFNLElBQUksVUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVMsSUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQ3RELE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBVyxNQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FDaEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxlQUFhLFFBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUN4QyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSw0Q0FDZSxDQUFDO2FBQzFDO1FBQ0gsQ0FBQztRQUtPLDRCQUFlLEdBQXZCO1lBQ0UsSUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQUksR0FBRyxDQUFDLFFBQVUsQ0FBQztZQUMvRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxRCxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBRVksaUJBQUksR0FBakIsVUFDRSxDQUFnRixFQUNoRixDQUtDLEVBQ0QsQ0FLQzs7Ozs7Ozs0QkFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7NEJBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDbkIsSUFBSSxDQUFDO2dDQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDOzRCQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7NEJBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDOzRCQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7NEJBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFFdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFtQixFQUFFO2dDQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQzs2QkFDNUI7NEJBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDOzZCQUNsQzs0QkFFRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7NEJBRTNDLFdBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDMUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDOzRCQUVyRSxxQkFBTSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUE7OzRCQUE1QixJQUFJLEdBQUcsU0FBcUI7NEJBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQzs0QkFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDOzRCQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7NEJBRWxDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQ0FDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDOzZCQUN4Qjs0QkFFSyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFFOUMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dDQUNwQixLQUFLLENBQUMsV0FBVyxHQUFHLDROQWExQixDQUFDOzZCQUNJO2lDQUFNO2dDQUNMLEtBQUssQ0FBQyxXQUFXLEdBQUcsNFNBa0J4QixJQUFJLENBQUMsVUFBVTtvQ0FDYixDQUFDLENBQUMsVUFFSixJQUFJLENBQUMsYUFBYTt3Q0FDaEIsQ0FBQyxDQUFDLHVDQUM0Qjt3Q0FDOUIsQ0FBQyxDQUFDLHVDQUM0QixVQUVqQztvQ0FDRyxDQUFDLENBQUMsc0JBQXNCLG1EQUsxQixJQUFJLENBQUMsVUFBVTtvQ0FDYixDQUFDLENBQUMsVUFFSixJQUFJLENBQUMsYUFBYTt3Q0FDaEIsQ0FBQyxDQUFDLGtEQUN1Qzt3Q0FDekMsQ0FBQyxDQUFDLGtEQUN1QyxVQUU1QztvQ0FDRyxDQUFDLENBQUMsc0JBQXNCLG1EQUsxQixJQUFJLENBQUMsVUFBVTtvQ0FDYixDQUFDLENBQUMsVUFFSixJQUFJLENBQUMsYUFBYTt3Q0FDaEIsQ0FBQyxDQUFDLGtEQUN1Qzt3Q0FDekMsQ0FBQyxDQUFDLGtEQUN1QyxVQUU1QztvQ0FDRyxDQUFDLENBQUMsc0JBQXNCLDhEQUsxQixJQUFJLENBQUMsYUFBYTtvQ0FDaEIsQ0FBQyxDQUFDLG1DQUN3QjtvQ0FDMUIsQ0FBQyxDQUFDLGtDQUN1QixnS0FVM0IsSUFBSSxDQUFDLGFBQWE7b0NBQ2hCLENBQUMsQ0FBQyxtQkFDUTtvQ0FDVixDQUFDLENBQUMsa0JBQ08sa05BYVQsSUFBSSxDQUFDLGFBQWE7b0NBQ2hCLENBQUMsQ0FBQyxpQkFDSTtvQ0FDTixDQUFDLENBQUMsZ0JBQ0csdUpBV1QsSUFBSSxDQUFDLFVBQVU7b0NBQ2IsQ0FBQyxDQUFDLCtCQUdKLElBQUksQ0FBQyxhQUFhO3dDQUNoQixDQUFDLENBQUMsbUJBQ1E7d0NBQ1YsQ0FBQyxDQUFDLGtCQUNPLHNFQU1YLElBQUksQ0FBQyxhQUFhO3dDQUNoQixDQUFDLENBQUMsMkVBRTZCO3dDQUMvQixDQUFDLENBQUMseUVBRTRCLGtIQU9qQztvQ0FDRyxDQUFDLENBQUMsMkJBRUosSUFBSSxDQUFDLGFBQWE7d0NBQ2hCLENBQUMsQ0FBQyxvQkFDUzt3Q0FDWCxDQUFDLENBQUMsbUJBQ1Esc0pBT1osdUdBUUMsQ0FBQzs2QkFDQzs0QkFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3ZELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUM3RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDekQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBRS9ELFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBQzNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOzRCQUNqRCxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs0QkFDN0MsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7NEJBQ25ELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQ0FDZCxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0NBQzFELElBQUksQ0FBQyxPQUFPLEVBQUU7b0NBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBa0MsSUFBSSxDQUFDLFdBQWEsQ0FBQyxDQUFDO2lDQUN2RTtnQ0FDRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs2QkFDNUI7aUNBQU07Z0NBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUNsQzs0QkFFSyxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQ3BCLElBQUksQ0FBQyxVQUFVLGVBQVUsSUFBSSxDQUFDLElBQUksYUFBUSxJQUFJLENBQUMsRUFBRSxhQUFRLElBQUksQ0FBQyxTQUFXLENBQzdFLENBQUM7NEJBQ0YsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ2pFLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUM1RCxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUN4RCxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7NEJBQzFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ3hELFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNqRSxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOzRCQUN4RSxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUNsRSxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs0QkFDdEUsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDOzRCQUM1RSxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQzVGLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtnQ0FDWCxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUM1Qzs0QkFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDOzRCQUN2QyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUVsRCxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0NBQ2QsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs2QkFDcEQ7NEJBQ0QsSUFBSSxDQUFDLEVBQUU7Z0NBQ0wsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO29DQUNYLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUNBQ3JEO2dDQUNELElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTtvQ0FDZixTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7aUNBQzdEO2dDQUNELElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQ0FDZCxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7aUNBQzNEO2dDQUNELElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRTtvQ0FDaEIsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7aUNBQ3hFOzZCQUNGOzRCQUVELElBQUksQ0FBQyxFQUFFO2dDQUNMLElBQUksQ0FBQyxDQUFDLG1CQUFtQixFQUFFO29DQUN6QixTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztpQ0FDakU7Z0NBQ0QsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzs2QkFDNUU7NEJBRUssUUFBUSxHQUFHLFVBQUMsS0FBbUI7Z0NBQ25DLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsVUFBVSxFQUFFO29DQUNwQyxPQUFPO2lDQUNSO2dDQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtvQ0FDcEIsT0FBTztpQ0FDUjtnQ0FDRCxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29DQUN2QixLQUFLLGdCQUFnQjt3Q0FDbkIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7d0NBQ3hCLElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTs0Q0FDZixJQUFJO2dEQUNGLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs2Q0FDZjs0Q0FBQyxPQUFPLEtBQUssRUFBRTtnREFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7Z0RBQ3JELE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7NkNBQ3RCO3lDQUNGO3dDQUNELEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO3dDQUMxQixJQUFJLEtBQUksQ0FBQyxzQkFBc0IsRUFBRTs0Q0FDL0IsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO3lDQUN2RDt3Q0FDRCxJQUFJLEtBQUksQ0FBQyxpQkFBaUIsRUFBRTs0Q0FDMUIsS0FBSSxDQUFDLG1CQUFtQixDQUN0QixLQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUNsQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUMvQixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUNyQyxDQUFDO3lDQUNIO3dDQUNELElBQUksS0FBSSxDQUFDLHVCQUF1QixFQUFFOzRDQUNoQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzt5Q0FDekI7d0NBQ0QsSUFBSSxLQUFJLENBQUMsZUFBZSxFQUFFOzRDQUN4QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7eUNBQ25CO3dDQUNELElBQUksS0FBSSxDQUFDLGdCQUFnQixFQUFFOzRDQUN6QixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7eUNBQ3BCO3dDQUNELE1BQU07b0NBQ1IsS0FBSyxXQUFXO3dDQUNkLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzt3Q0FDMUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFOzRDQUN0QyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7NENBQ3JDLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3lDQUM1Qzs2Q0FBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7NENBQzdDLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs0Q0FDckMsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7eUNBQzVDOzZDQUFNOzRDQUNMLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzt5Q0FDdEM7d0NBRUQsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7NENBQzlCLElBQUksS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0RBQzVCLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FDbEM7b0RBQ0UsSUFBSSxFQUFFLDBCQUEwQjtvREFDaEMsSUFBSSxFQUFFLEtBQUksQ0FBQyxHQUFHO2lEQUNmLEVBQ0QsR0FBRyxDQUNKLENBQUM7NkNBQ0g7eUNBQ0Y7d0NBQ0QsTUFBTTtvQ0FDUixLQUFLLFlBQVk7d0NBQ2YsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO3dDQUN2QyxNQUFNO29DQUNSLEtBQUssYUFBYTt3Q0FDaEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7d0NBQ2hELEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3Q0FDdkMsTUFBTTtvQ0FDUixLQUFLLGdCQUFnQjt3Q0FDbkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7d0NBQzdDLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzt3Q0FDMUMsTUFBTTtvQ0FDUixLQUFLLGtCQUFrQjt3Q0FDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7d0NBQ2hELEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzt3Q0FDMUMsTUFBTTtvQ0FDUixLQUFLLFNBQVM7d0NBQ1osS0FBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDO3dDQUNuQyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7d0NBQ3hDLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dDQUM5QyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3Q0FDOUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dDQUM1QyxNQUFNO29DQUNSLEtBQUssVUFBVTt3Q0FDYixLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7d0NBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQzt3Q0FDL0MsTUFBTTtvQ0FDUixLQUFLLGlCQUFpQjt3Q0FDcEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dDQUNyQyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3Q0FDM0MsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dDQUMvQyxNQUFNO29DQUNSLEtBQUssaUJBQWlCO3dDQUNwQixLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7d0NBQ3JDLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dDQUMzQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7d0NBQy9DLE1BQU07b0NBQ1IsS0FBSyx3QkFBd0I7d0NBQzNCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUN4QyxNQUFNO29DQUNSLEtBQUssK0JBQStCO3dDQUNsQyxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3Q0FDOUMsTUFBTTtvQ0FDUixLQUFLLDBCQUEwQjt3Q0FDN0IsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0NBQzFDLE1BQU07b0NBQ1IsS0FBSyxpQ0FBaUM7d0NBQ3BDLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUNoRCxNQUFNO29DQUNSLEtBQUssaUJBQWlCO3dDQUNwQixLQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3Q0FDakQsTUFBTTtvQ0FDUixLQUFLLGNBQWM7d0NBQ2pCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFOzRDQUN4QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3lDQUNyRjs2Q0FBTTs0Q0FDTCxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7eUNBQy9EO3dDQUNELE1BQU07b0NBQ1IsS0FBSyxlQUFlO3dDQUNsQixLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3Q0FDN0QsTUFBTTtvQ0FDUixLQUFLLGVBQWU7d0NBQ2xCLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3Q0FDcEYsTUFBTTtvQ0FDUixLQUFLLGtCQUFrQjt3Q0FDckIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0NBQ2hFLE1BQU07b0NBQ1IsS0FBSyxVQUFVO3dDQUNiLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUM3RCxNQUFNO29DQUNSLEtBQUssZUFBZTt3Q0FDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dDQUMvQyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7d0NBQ3hDLElBQUksS0FBSSxDQUFDLHlCQUF5QixFQUFFOzRDQUNsQyxJQUFJO2dEQUNGLEtBQUksQ0FBQyx5QkFBeUIsQ0FDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUMxQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFDL0IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUN4QixDQUFDOzZDQUNIOzRDQUFDLE9BQU8sS0FBSyxFQUFFO2dEQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztnREFDeEUsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzs2Q0FDdEI7eUNBQ0Y7d0NBQ0QsTUFBTTtvQ0FDUixLQUFLLHFCQUFxQjt3Q0FDeEIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dDQUMvQyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7d0NBQ3hDLElBQUksS0FBSSxDQUFDLDBCQUEwQixFQUFFOzRDQUNuQyxJQUFJO2dEQUNGLEtBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDOzZDQUNuQzs0Q0FBQyxPQUFPLEtBQUssRUFBRTtnREFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7Z0RBQ3pFLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7NkNBQ3RCO3lDQUNGO3dDQUNELE1BQU07b0NBQ1IsS0FBSyxrQkFBa0I7d0NBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzt3Q0FDNUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dDQUMzQyxJQUFJLEtBQUksQ0FBQyx1QkFBdUIsRUFBRTs0Q0FDaEMsSUFBSTtnREFDRixLQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzs2Q0FDaEM7NENBQUMsT0FBTyxLQUFLLEVBQUU7Z0RBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO2dEQUN0RSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDOzZDQUN0Qjt5Q0FDRjt3Q0FDRCxNQUFNO29DQUNSLEtBQUsscUJBQXFCO3dDQUN4Qjs0Q0FDRSxJQUFJLFNBQVMsR0FBa0IsS0FBSSxDQUFDLEtBQUssQ0FBQzs0Q0FDMUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnREFDZCxTQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7NkNBQ25EOzRDQUNELElBQUksQ0FBQyxTQUFTLEVBQUU7Z0RBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnREFDOUIsTUFBTTs2Q0FDUDs0Q0FDRCxJQUFNLEtBQUssR0FBbUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzs0Q0FDcEUsS0FBSyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs0Q0FDM0IsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRDQUNuQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRDQUNsRCxJQUFJLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRTtnREFDdEMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOzZDQUNuQjt5Q0FDRjt3Q0FDRCxNQUFNO29DQUNSLFFBQVE7aUNBQ1Q7NEJBQ0gsQ0FBQyxDQUFDOzRCQUVGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDOzRCQUVwRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUUvQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsSUFBSTtnQ0FDcEMsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtvQ0FDNUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lDQUNsRTs0QkFDSCxDQUFDLENBQUMsQ0FBQzs0QkFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFVBQUMsSUFBSTtnQ0FDbkMsSUFBSSxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtvQ0FDNUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lDQUNwRTs0QkFDSCxDQUFDLENBQUMsQ0FBQzs0QkFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsSUFBSTtnQ0FDckMsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7NEJBQzVCLENBQUMsQ0FBQyxDQUFDOzRCQUVILElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7Ozs7U0FDdEI7UUFFTSw2QkFBZ0IsR0FBdkI7WUFDRSxJQUNFLElBQUksQ0FBQyxXQUFXO2dCQUNoQixDQUFDLElBQUksQ0FBQyxlQUFlO2dCQUNyQixJQUFJLENBQUMsS0FBSztnQkFDVixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQ2pDO2dCQUNBLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUN0RjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO2FBQ3JDO1FBQ0gsQ0FBQztRQUVPLHdCQUFXLEdBQW5CLFVBQW9CLEdBQVcsRUFBRSxLQUFhO1lBQzVDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsb0JBQWtCLEdBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1lBQ3pGLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzdGO1FBQ0gsQ0FBQztRQUVPLHdCQUFXLEdBQW5CLFVBQW9CLEdBQVcsRUFBRSxLQUFVLEVBQUUsS0FBYTtZQUN4RCxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBa0IsR0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM3RjtRQUNILENBQUM7UUFFTywyQkFBYyxHQUF0QixVQUF1QixHQUFXLEVBQUUsS0FBYTtZQUMvQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG9CQUFrQixHQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztZQUN6RixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxvQkFBa0IsR0FBSyxDQUFDLENBQUM7WUFDeEQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUNsQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxFQUFFLEVBQ25ELEdBQUcsQ0FDSixDQUFDO2FBQ0g7UUFDSCxDQUFDO1FBRU8sMEJBQWEsR0FBckIsVUFBc0IsS0FBYztZQUNsQyxJQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7WUFDOUIsS0FBa0IsVUFBZ0MsRUFBaEMsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBaEMsY0FBZ0MsRUFBaEMsSUFBZ0MsRUFBRTtnQkFBL0MsSUFBTSxHQUFHLFNBQUE7Z0JBQ1osSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN4QyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNwQjthQUNGO1lBQ0QsS0FBa0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7Z0JBQXZCLElBQU0sR0FBRyxpQkFBQTtnQkFDWixNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQztZQUNELElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3hGO1FBQ0gsQ0FBQztRQUVPLHdCQUFXLEdBQW5CLFVBQ0UsSUFPYyxFQUNkLElBQVM7WUFFVCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLE1BQU07b0JBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEIsTUFBTTtnQkFDUixLQUFLLFdBQVc7b0JBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0IsTUFBTTtnQkFDUixLQUFLLGlCQUFpQjtvQkFDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNqQyxNQUFNO2dCQUNSLEtBQUssWUFBWTtvQkFDZixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzVCLE1BQU07Z0JBQ1IsS0FBSyxhQUFhO29CQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdCLE1BQU07Z0JBQ1IsS0FBSyxnQkFBZ0I7b0JBQ25CLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO29CQUM1QixNQUFNO2dCQUNSLEtBQUssVUFBVTtvQkFDYixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQixNQUFNO2dCQUNSLFFBQVE7YUFDVDtRQUNILENBQUM7UUFtQk8sdUJBQVUsR0FBbEIsVUFBbUIsSUFHbEI7WUFDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1FBQ0gsQ0FBQztRQUVPLHVCQUFVLEdBQWxCO1lBQUEsaUJBcUtDO1lBcEtDLGNBQWM7WUFDZCxJQUFJLE1BQU0sR0FBNkIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUM7Z0JBQ3RDLE9BQU87YUFDUjtZQUVELE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsc0JBQXNCLENBQUM7WUFDbkMsTUFBTSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztZQUNoQyxNQUFNLENBQUMsR0FBRyxHQUFNLElBQUksQ0FBQyxVQUFVLHVCQUFvQixDQUFDO1lBQ3BELElBQU0sU0FBUyxHQUFHO2dCQUNoQixLQUFJLENBQUMsTUFBTSxHQUFJLE1BQWMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFVBQUMsTUFBeUI7b0JBQzVELFFBQVEsTUFBTSxFQUFFO3dCQUNkLEtBQUssV0FBVzs0QkFDZDtnQ0FDRSxLQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDO2dDQUN0QyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFO29DQUM5QixLQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQ0FDeEQ7Z0NBQ0QsSUFBSSxLQUFJLENBQUMsb0JBQW9CLEVBQUU7b0NBQzdCLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUN4Qjt3Q0FDRSxZQUFZLEVBQUUsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQzt3Q0FDbkUsS0FBSyxFQUFFLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLO3FDQUN2QyxFQUNELFVBQUMsR0FBRzt3Q0FDRixJQUFJLEdBQUcsRUFBRTs0Q0FDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lDQUNsQjtvQ0FDSCxDQUFDLENBQ0YsQ0FBQztvQ0FDRixLQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO2lDQUNsQztnQ0FDRCxJQUFNLElBQUksR0FBRztvQ0FDWCxvQkFBb0IsRUFBc0IsQ0FBQyxDQUFDO29DQUM1QyxXQUFXLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtpQ0FDN0MsQ0FBQztnQ0FDRixJQUNFLEtBQUksQ0FBQyxZQUFZO29DQUNqQixLQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQjtvQ0FDdEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsS0FBSyxDQUFDLENBQUMsRUFDN0M7b0NBQ0EsSUFBSSxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEtBQUssUUFBUSxFQUFFO3dDQUM5RCxJQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUM5QyxVQUFDLENBQUMsWUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLFlBQUssS0FBSSxDQUFDLFlBQVksMENBQUUsb0JBQW9CLENBQUEsQ0FBQSxFQUFBLENBQzFELENBQUM7d0NBQ0YsSUFBSSxrQkFBa0IsRUFBRTs0Q0FDdEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7eUNBQ2hFO3FDQUNGO29DQUNELElBQUksT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLG9CQUFvQixLQUFLLFFBQVEsRUFBRTt3Q0FDOUQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUM7cUNBQ3BFO2lDQUNGO3FDQUFNO29DQUNMLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLDJCQUEyQixFQUFFLENBQUM7aUNBQ3ZFO2dDQUNELElBQUksS0FBSSxDQUFDLG1CQUFtQixFQUFFO29DQUM1QixJQUFJLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRTt3Q0FDakQsSUFBSSxPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsS0FBSyxRQUFRLEVBQUU7NENBQ3JFLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzlDLFVBQUMsQ0FBQyxZQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksWUFBSyxLQUFJLENBQUMsbUJBQW1CLDBDQUFFLG9CQUFvQixDQUFBLENBQUEsRUFBQSxDQUNqRSxDQUFDOzRDQUNGLElBQUksa0JBQWtCLEVBQUU7Z0RBQ3RCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7NkNBQ3ZFO3lDQUNGO3dDQUNELElBQUksT0FBTyxLQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLEtBQUssUUFBUSxFQUFFOzRDQUNyRSxLQUFJLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUNyQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLEVBQzdDLEtBQUksQ0FBQyxxQkFBcUIsQ0FDM0IsQ0FBQzt5Q0FDSDtxQ0FDRjtvQ0FDRCxLQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO2lDQUNqQztnQ0FDRCxLQUFJLENBQUMsMEJBQTBCLENBQUM7b0NBQzlCLFlBQVksRUFBRSxTQUFTO29DQUN2QixvQkFBb0IsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLDJCQUEyQixFQUFFO29DQUMvRCxXQUFXLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtpQ0FDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQztvQ0FDTixLQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO2dDQUNsQyxDQUFDLENBQUMsQ0FBQztnQ0FDSCxLQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDekIsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFDdEQsS0FBSSxDQUFDLHFCQUFxQixDQUMzQixDQUFDOzZCQUNIOzRCQUNELE1BQU07d0JBQ1IsS0FBSyxZQUFZLENBQUM7d0JBQ2xCLEtBQUssUUFBUTs0QkFDWCxLQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDOzRCQUN2QyxNQUFNO3dCQUNSOzRCQUNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUNBQXFDLE1BQVEsQ0FBQyxDQUFDOzRCQUM3RCxNQUFNO3FCQUNUO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUVILEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFVBQUMsSUFBb0I7b0JBQ3BELFFBQVEsSUFBSSxFQUFFO3dCQUNaLEtBQUssUUFBUTs0QkFDWCxLQUFJLENBQUMsbUNBQW1DLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQy9DLE9BQU87d0JBQ1QsS0FBSyxNQUFNLENBQUM7d0JBQ1osS0FBSyxTQUFTOzRCQUNaLEtBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDaEQsT0FBTzt3QkFDVDs0QkFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFrQyxNQUFRLENBQUMsQ0FBQztxQkFDN0Q7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsVUFBQyxJQUFpQjtvQkFDcEQsSUFBSSxLQUFJLENBQUMsbUJBQW1CLEVBQUU7d0JBQzVCLEtBQUksQ0FBQywwQkFBMEIsQ0FBQzs0QkFDOUIsWUFBWSxFQUFFLFNBQVM7NEJBQ3ZCLFdBQVcsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO3lCQUM3QyxDQUFDLENBQUM7cUJBQ0o7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsSUFBdUI7b0JBQzdDLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTt3QkFDakIsS0FBSyxVQUFVOzRCQUNiLE9BQU8sS0FBSSxDQUFDLHlCQUF5QixDQUFXLElBQUksQ0FBQyxDQUFDO3dCQUN4RCxLQUFLLFdBQVc7NEJBQ2QsT0FBTyxLQUFJLENBQUMsc0JBQXNCLENBQVEsSUFBSSxDQUFDLENBQUM7d0JBQ2xELEtBQUsscUJBQXFCOzRCQUN4QixPQUFPO3dCQUNULEtBQUssaUJBQWlCOzRCQUNwQixPQUFPO3dCQUNULEtBQUssa0JBQWtCOzRCQUNyQixPQUFPO3dCQUNULEtBQUsscUJBQXFCOzRCQUN4QixPQUFPO3dCQUNULEtBQUssYUFBYTs0QkFDaEIsT0FBTzt3QkFDVCxLQUFLLGNBQWM7NEJBQ2pCLE9BQU87d0JBQ1QsS0FBSyxRQUFROzRCQUNYLE9BQU8sS0FBSSxDQUFDLHdCQUF3QixDQUFVLElBQUksQ0FBQyxDQUFDO3dCQUN0RCxLQUFLLFdBQVc7NEJBQ2QsT0FBTzt3QkFDVDs0QkFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFtQyxJQUFJLENBQUMsSUFBTSxDQUFDLENBQUM7cUJBQ2pFO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUVILEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsTUFBTSxHQUFHO2dCQUNkLElBQUksT0FBYSxNQUFPLENBQUMsTUFBTSxLQUFLLFVBQVUsSUFBVSxNQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtvQkFDL0QsT0FBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsVUFBQyxLQUFZO3dCQUNwQyxNQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzt3QkFDNUIsU0FBUyxFQUFFLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7cUJBQU07b0JBQ0wsU0FBUyxFQUFFLENBQUM7aUJBQ2I7WUFDSCxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsT0FBTyxHQUFHLFVBQUMsS0FBVSxJQUFLLE9BQUEsT0FBTyxFQUFQLENBQU8sQ0FBQztZQUN6QyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFFTyxrQ0FBcUIsR0FBN0IsVUFBOEIsWUFBb0I7WUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO1lBQzFDLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDekUsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUNwRjtRQUNILENBQUM7UUFFTyxrQ0FBcUIsR0FBN0IsVUFBOEIsSUFBVTtZQUN0QyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbkMsT0FBVSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFVLENBQUM7YUFDN0M7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN2QjtZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3RCO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO1FBRU8sdUNBQTBCLEdBQWxDLFVBQW1DLElBQVM7WUFDMUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxlQUFhLElBQUksQ0FBQyxHQUFHLGFBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBRU8sZ0RBQW1DLEdBQTNDLFVBQTRDLFNBQWtCO1lBQzVELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsZUFBYSxJQUFJLENBQUMsR0FBRyxzQkFBbUIsRUFBRSxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsQ0FBQztRQUNsRixDQUFDO1FBRU8sc0NBQXlCLEdBQWpDLFVBQWtDLElBQWM7WUFDOUMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FDbEM7b0JBQ0UsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLElBQUksRUFBRTt3QkFDSixJQUFJLEVBQUU7NEJBQ0osT0FBTyxFQUFFLElBQUk7NEJBQ2IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTs0QkFDN0IsU0FBUyxFQUFFLFFBQVEsQ0FBQyxLQUFLO3lCQUMxQjt3QkFDRCxJQUFJLEVBQUUsY0FBYztxQkFDckI7aUJBQ0YsRUFDRCxHQUFHLENBQ0osQ0FBQzthQUNIO1FBQ0gsQ0FBQztRQUVPLG1DQUFzQixHQUE5QixVQUErQixJQUFXO1lBQ3hDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQ2xDO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQUU7d0JBQ0osSUFBSSxFQUFFOzRCQUNKLE9BQU8sRUFBRSxJQUFJOzRCQUNiLE9BQU8sRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUk7NEJBQzdCLFNBQVMsRUFBRSxRQUFRLENBQUMsS0FBSzt5QkFDMUI7d0JBQ0QsSUFBSSxFQUFFLGtCQUFrQjtxQkFDekI7aUJBQ0YsRUFDRCxHQUFHLENBQ0osQ0FBQzthQUNIO1FBQ0gsQ0FBQztRQUVPLHFDQUF3QixHQUFoQyxVQUFpQyxJQUFhO1lBQzVDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQ2xDO29CQUNFLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO2lCQUNwQyxFQUNELEdBQUcsQ0FDSixDQUFDO2FBQ0g7UUFDSCxDQUFDO1FBRU8sNEJBQWUsR0FBdkIsVUFBd0IsT0FBZ0I7WUFDdEMsbURBQW1EO1lBQ25ELElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO2dCQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBaUIsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUNoRjtRQUNILENBQUM7UUFFTyxrQ0FBcUIsR0FBN0IsVUFBOEIsTUFBaUM7WUFDN0QsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7Z0JBQ2xDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtvQkFDekMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxvQkFBb0IsS0FBSyxRQUFRLEVBQUU7d0JBQ25ELElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDdkQsSUFBTSxrQkFBa0IsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUM1QyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLG9CQUFvQixFQUF0QyxDQUFzQyxDQUM5QyxDQUFDO3dCQUNGLElBQUksa0JBQWtCLEVBQUU7NEJBQ3RCLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7eUJBQ3JEO3FCQUNGO29CQUNELElBQUksT0FBTyxNQUFNLENBQUMsb0JBQW9CLEtBQUssUUFBUSxFQUFFO3dCQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUNyQyxNQUFNLENBQUMsb0JBQW9CLEVBQzNCLElBQUksQ0FBQyxxQkFBcUIsQ0FDM0IsQ0FBQztxQkFDSDtpQkFDRjthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUM7YUFDbkM7UUFDSCxDQUFDO1FBRU8sNkJBQWdCLEdBQXhCLFVBQXlCLE9BQWE7WUFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtnQkFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQ3hCO29CQUNFLFlBQVksRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDO29CQUNqRCxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7aUJBQ3JCLEVBQ0QsVUFBQyxHQUFHO29CQUNGLElBQUksR0FBRyxFQUFFO3dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2xCO2dCQUNILENBQUMsQ0FDRixDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE9BQU8sQ0FBQzthQUNyQztRQUNILENBQUM7UUFFTyw4QkFBaUIsR0FBekIsVUFBMEIsUUFBbUI7WUFBN0MsaUJBMkRDO1lBMURDLElBQU0sS0FBSyxHQUFRO2dCQUNqQixJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsSUFBSTtnQkFDYixLQUFLLEVBQUUsT0FBTztnQkFDZCxNQUFNLEVBQUUsSUFBSTtnQkFDWixHQUFHLEVBQUUsSUFBSTtnQkFDVCxXQUFXLEVBQUUsT0FBTzthQUNyQixDQUFDO1lBRUYsSUFBSSx1QkFBdUIsR0FBRyxFQUFFLENBQUM7WUFDakMsSUFBTSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQztnQkFDNUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQVEsQ0FBQyxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQztZQUNsRixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksbUJBQW1CLElBQUksbUJBQW1CLENBQUMsTUFBTSxFQUFFO2dCQUNyRCx1QkFBdUIsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDMUQ7WUFFRCxJQUFJLE9BQU8sR0FBRyxxQkFBbUIsdUJBQXVCLFNBQU0sQ0FBQztZQUUvRCxPQUFPLElBQUksNENBQTRDLENBQUMsTUFBTSxDQUM1RCxRQUFRO2lCQUNMLE1BQU0sQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBUSxDQUFDLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQyxFQUFuRCxDQUFtRCxDQUFDO2lCQUNsRSxHQUFHLENBQUMsVUFBQyxPQUFPO2dCQUNYLElBQUksT0FBZSxDQUFDO2dCQUNwQixJQUFJLElBQVMsQ0FBQztnQkFDZCxRQUFRLE9BQU8sQ0FBQyxJQUFJLEVBQUU7b0JBQ3BCLEtBQUssTUFBTSxDQUFDO29CQUNaLEtBQUssT0FBTzt3QkFDVixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQzt3QkFDMUIsTUFBTTtvQkFDUixLQUFLLGNBQWM7d0JBQ2pCLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO3dCQUN2QixPQUFPLEdBQU0sSUFBSSxDQUFDLElBQUksU0FBSSxJQUFJLENBQUMsT0FBTyxNQUFHLENBQUM7d0JBQzFDLE1BQU07b0JBQ1IsS0FBSyxTQUFTO3dCQUNaLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTzs2QkFDdEIsR0FBRyxDQUFDLFVBQUMsQ0FBTTs0QkFDVixPQUFPLE1BQUksQ0FBQyxDQUFDLElBQUksVUFBSyxDQUFDLENBQUMsSUFBSSxTQUFJLENBQUMsQ0FBQyxPQUFPLE1BQUcsQ0FBQzt3QkFDL0MsQ0FBQyxDQUFDOzZCQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDYixNQUFNO29CQUNSLEtBQUssZUFBZTt3QkFDbEIsT0FBTyxHQUFJLE9BQU8sQ0FBQyxPQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDbEQsTUFBTTtvQkFDUjt3QkFDRSxPQUFPLEdBQUcsRUFBRSxDQUFDO3dCQUNiLE1BQU07aUJBQ1Q7Z0JBQ0QsT0FBTyxNQUFJLEtBQUssQ0FBUSxPQUFPLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQyxVQUMzQyxLQUFJLENBQUMscUJBQXFCLENBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsV0FDbkQsT0FBUyxDQUFDO1lBQ2pCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7aUJBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUNoQixDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDbkMsSUFBSSxHQUFHO29CQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRU8saUNBQW9CLEdBQTVCO1lBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQztRQUVPLDJCQUFjLEdBQXRCLFVBQXVCLFFBQWlCO1lBQ3RDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQztRQUVPLGtDQUFxQixHQUE3QixVQUE4QixHQUFRO1lBQ3BDLElBQUksR0FBRyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztnQkFDbkQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQjtRQUNILENBQUM7UUFFTSw4QkFBaUIsR0FBeEIsVUFBeUIsR0FBVztZQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsR0FBRyxrRUFBZ0UsR0FBRyxRQUFLLENBQUM7UUFDOUcsQ0FBQztRQUVNLG9DQUF1QixHQUE5QixVQUErQixHQUFXO1lBQ3hDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEdBQUcsa0VBQWdFLEdBQUcsUUFBSyxDQUFDO1FBQ3BILENBQUM7UUFFTSxnQ0FBbUIsR0FBMUIsVUFBMkIsR0FBVztZQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxHQUFHLDJFQUF5RSxHQUFHLFFBQUssQ0FBQztRQUN6SCxDQUFDO1FBRU0sc0NBQXlCLEdBQWhDLFVBQWlDLEdBQVc7WUFDMUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsR0FBRywyRUFBeUUsR0FBRyxRQUFLLENBQUM7UUFDL0gsQ0FBQztRQUVNLHVDQUEwQixHQUFqQyxVQUFrQyxHQUFXO1lBQzNDLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDYixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxFQUFFLEdBQUcsR0FBRyxPQUFJLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO2dCQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO2FBQ3JDO1FBQ0gsQ0FBQztRQUVPLHlCQUFZLEdBQXBCO1lBQ0UsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLENBQUMsVUFBVSxDQUFDO2dCQUNWLElBQ0UsMFRBQTBULENBQUMsSUFBSSxDQUM3VCxDQUFDLENBQ0Y7b0JBQ0QseWtEQUF5a0QsQ0FBQyxJQUFJLENBQzVrRCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDZjtvQkFFRCxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sSUFBVSxNQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkUsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBRU0sK0JBQWtCLEdBQXpCO1lBQ0UsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7WUFDbkQsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ2xGO1lBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQzlELElBQU0sZUFBZSxHQUFHLEtBQUssSUFBSSxHQUFHLENBQUM7Z0JBQ3JDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDckMsSUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQ2xDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLGVBQWUsaUJBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxFQUFFLEVBQzNFLEdBQUcsQ0FDSixDQUFDO2dCQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO2FBQ3JEO1FBQ0gsQ0FBQztRQUVZLHFCQUFRLEdBQXJCOzs7b0JBU0Usc0JBQU8sSUFBSSxDQUFDLEdBQUcsQ0FDYixLQUFLLEVBQ0wsZ0NBQThCLElBQUksQ0FBQyxLQUFLLHlCQUFvQixJQUFJLENBQUMsZUFBaUIsQ0FDbkYsRUFBQzs7O1NBQ0g7UUFFTSx1QkFBVSxHQUFqQjtZQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUM5RCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLCtCQUErQixFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQ25FO3FCQUFNO29CQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3ZGO2dCQUNELElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2FBQzlCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQztRQUVNLHdCQUFXLEdBQWxCO1lBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQzlELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsK0JBQStCLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztpQkFDcEU7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDeEY7Z0JBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQzthQUM5QjtRQUNILENBQUM7UUFFTSx1QkFBVSxHQUFqQixVQUFrQixJQUFZLEVBQUUsUUFBZ0I7WUFDOUMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FDbEMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLEVBQUUsRUFDbkQsR0FBRyxDQUNKLENBQUM7YUFDSDtRQUNILENBQUM7UUFFTSx3QkFBVyxHQUFsQixVQUFtQixHQUFXLEVBQUUsSUFBUztZQUN2QyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDOUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM1RjtRQUNILENBQUM7UUFRTSxnQ0FBbUIsR0FBMUIsVUFBMkIsV0FBbUIsRUFBRSxRQUFnQixFQUFFLGFBQXFCO1lBQ3JGLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUM5RCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQ2xDO29CQUNFLElBQUksRUFBRSx3QkFBd0I7b0JBQzlCLElBQUksRUFBRTt3QkFDSixXQUFXLGFBQUE7d0JBQ1gsUUFBUSxVQUFBO3dCQUNSLGFBQWEsZUFBQTtxQkFDZDtpQkFDRixFQUNELEdBQUcsQ0FDSixDQUFDO2dCQUNGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsV0FBVyxhQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsYUFBYSxlQUFBLEVBQUUsQ0FBQzthQUNuRTtRQUNILENBQUM7UUFFTSxnQ0FBbUIsR0FBMUIsVUFBMkIsUUFRMUI7WUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7b0JBQUUsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUTtvQkFBRSxRQUFRLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVO29CQUFFLFFBQVEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7b0JBQUUsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxDQUFDLEdBQVEsUUFBUSxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO2dCQUM1QyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO2FBQy9DO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLDZEQUE2RCxDQUFDLENBQUM7Z0JBQzdFLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRixDQUFDO1FBRU0sK0JBQWtCLEdBQXpCLFVBQTBCLFFBUXpCO1lBQ0MsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFFBQVEsQ0FBQzthQUN4QztRQUNILENBQUM7UUFFTSx5QkFBWSxHQUFuQjtZQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUM7UUFJTyxxQkFBUSxHQUFoQjtZQUNFLElBQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QyxJQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyRDtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQyxDQUFDO1FBQ0gsU0FBQztJQUFELENBQUMsQUEvekNELElBK3pDQztJQUNELDJCQUEyQjtJQUMzQixJQUFJLGFBQWEsR0FBUSxJQUFJLEVBQUUsRUFBRSxDQUFDO0lBQzVCLE1BQU8sQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0NBQzdDO0tBQU07SUFDTDtRQUFBO1lBSVMsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDO1FBSlEsaUJBQUksR0FBWDtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUgsU0FBQztJQUFELENBQUMsQUFMRCxJQUtDO0lBQ0QsMkJBQTJCO0lBQzNCLElBQUksYUFBYSxHQUFRLElBQUksRUFBRSxFQUFFLENBQUM7SUFDNUIsTUFBTyxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7Q0FDN0MifQ==