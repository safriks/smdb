(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e){e.exports={genres:["Classical","Spiritual","Folk","Contemporary","Modern arrangement of folk song","Chamber music","Symphony","Epic piece","Other genre/unspecified"],voices:["Contralto","Alto","Mezzo-soprano","Soprano","Countertenor","Tenor","Baritone","Bass","Special/other"]}},34:function(e,t,a){e.exports=a.p+"static/media/osmdb-logo.0c72c768.svg"},35:function(e,t,a){e.exports=a(77)},41:function(e,t,a){},42:function(e,t,a){},62:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(31),l=a.n(r),c=(a(40),a(41),a(2)),i=a(3),o=a(5),m=a(4),u=a(7),h=a(6),d=a(15),p=(a(42),a(1)),f=a.n(p),E=(a(62),a(9)),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleLogOutClick=function(e){f()({url:"".concat("https://osmdb.herokuapp.com","/log_out"),method:"post",withCredentials:!0}).then(function(e){a.props.logOut()}).catch(function(e){a.setState({err:e})})},a.isUserLoggedIn=function(){return Object.keys(a.state.currentUser).length>0},a.state={currentUser:a.props.currentUser,navBarClassName:a.props.navBarClassName},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.currentUser!==this.props.currentUser){var t=e.currentUser;this.setState({currentUser:t})}else if(e.navBarClassName!==this.props.navBarClassName){var a=e.navBarClassName;this.setState({navBarClassName:a})}}},{key:"render",value:function(){var e=this.isUserLoggedIn();return s.a.createElement("nav",{className:this.state.navBarClassName,role:"navigation","aria-label":"main navigation"},s.a.createElement("div",{className:"navbar-menu is-active"},s.a.createElement("div",{className:"navbar-start"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement("div",{className:"buttons"},e?s.a.createElement(E.a,{to:"/upload",className:"button is-light"},s.a.createElement("strong",null,"Upload sheet music")):s.a.createElement(s.a.Fragment,null),s.a.createElement(E.a,{to:"/",className:"button is-black"},s.a.createElement("i",{className:"fa fa-home","aria-hidden":"true"})),e?s.a.createElement("div",{className:"navbar-item"},s.a.createElement("h3",{className:"nav-text"},"Welcome"," ",s.a.createElement(E.a,{to:"profile",className:"nav-link"},this.state.currentUser.first_name))):s.a.createElement(s.a.Fragment,null)))),s.a.createElement("div",{className:"navbar-end"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement("div",{className:"buttons"},e?s.a.createElement(s.a.Fragment,null):s.a.createElement(E.a,{to:"/sign_up",className:"button is-black"},s.a.createElement("strong",null,"Sign up")),e?s.a.createElement("button",{onClick:this.handleLogOutClick,className:"button is-bordeaux"},"Log out"):s.a.createElement(E.a,{to:"/log_in",className:"button is-light"},"Log in"))))))}}]),t}(n.Component),b=(a(71),a(34)),g=a.n(b),N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={currentUser:a.props.currentUser},a.isUserLoggedIn=function(){return Object.keys(a.state.currentUser).length>0},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.history.location.pathname;this.props.isNavBarBlurred(e)}},{key:"render",value:function(){var e=this.isUserLoggedIn();return s.a.createElement("div",{className:"columns is-centered"},s.a.createElement("div",{className:"column is-half container flex-column col"},s.a.createElement("img",{className:"logo",src:g.a,alt:"smdb-logo"}),s.a.createElement("h1",{className:"header"},"Welcome to Oh Sheet Music Database!"),e?s.a.createElement(s.a.Fragment,null):s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{to:"/log_in",className:"button btn-landing btn-black"},"Log in"),s.a.createElement(E.a,{to:"/sign_up",className:"button btn-landing btn-black"},"Sign up")),s.a.createElement(E.a,{to:"/all_music"},e?s.a.createElement("button",{className:"button btn-landing btn-black"},"Browse"):s.a.createElement("button",{className:"button btn-landing btn-black"},"Browse as guest"))))}}]),t}(n.Component),C=a(18),k=a(10);a(72),a(73);function O(e){return s.a.createElement("div",{onClick:function(){e.selectSheetHandler(e._id)},className:"list-item background"},s.a.createElement("p",null,s.a.createElement("span",{className:"label-text"},"Title: ")),s.a.createElement("p",null,e.title),s.a.createElement("p",null,s.a.createElement("span",{className:"label-text"},"Composer: ")),s.a.createElement("p",null,e.composer.first_name," ",e.composer.last_name))}a(74);var y=a(17),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleDropdownClick=function(e){var t=e.target.attributes[1].value;a.state[t+"Dropdown"]?a.setState(Object(k.a)({},t+"Dropdown",!1)):a.setState(Object(k.a)({},t+"Dropdown",!0))},a.state={genreList:y.genres,composerList:[],genreDropdown:!1,composerDropdown:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("".concat("https://osmdb.herokuapp.com","/composer_list")).then(function(t){e.setState({composerList:t.data})})}},{key:"render",value:function(){var e=this,t=this.state.genreList.map(function(t,a){return s.a.createElement("label",{key:a,className:"checkbox"},s.a.createElement("input",{className:"filter-checkbox",onInput:function(t){e.props.handleGenreFilterInputChange(t)},type:"checkbox",name:t}),t)}),a=this.state.composerList.map(function(t,a){var n="".concat(t.first_name," ").concat(t.last_name);return s.a.createElement("label",{key:a,className:"checkbox"},s.a.createElement("input",{className:"filter-checkbox",onInput:function(t){e.props.handleComposerFilterInputChange(t)},type:"checkbox",name:t.last_name}),n)});return s.a.createElement("div",{className:"background full-height"},s.a.createElement("div",{className:"flex-col"},s.a.createElement("h1",{className:"filter-label",name:"genre",onClick:this.handleDropdownClick},"Genre"),this.state.genreDropdown?t:s.a.createElement(s.a.Fragment,null),s.a.createElement("h1",{className:"filter-label",name:"composer",onClick:this.handleDropdownClick},"Composer"),this.state.composerDropdown?a:s.a.createElement(s.a.Fragment,null)))}}]),t}(n.Component),j=(a(75),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleFavoriteClick=function(e){a.checkIfFavorite()?f()({url:"".concat("https://osmdb.herokuapp.com","/remove_fav"),data:{sheetId:a.state.selectedMusic._id,currentUserId:a.state.currentUser._id},method:"post",withCredentials:!0}).then(function(e){}):f()({url:"".concat("https://osmdb.herokuapp.com","/add_fav"),data:{sheetId:a.state.selectedMusic._id,currentUserId:a.state.currentUser._id},method:"post",withCredentials:!0}).then(function(e){}),f.a.get("".concat("https://osmdb.herokuapp.com","/user_info")).then(function(e){a.setState({currentUser:e.data})})},a.isUserLoggedIn=function(){return Object.keys(a.state.currentUser).length>0},a.checkIfFavorite=function(){var e=a.state.selectedMusic._id;return!0===a.state.currentUser.favs.includes(e)},a.state={selectedMusic:e.selectedMusic[0],currentUser:e.currentUser},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.isUserLoggedIn()&&this.checkIfFavorite()}},{key:"componentDidUpdate",value:function(e){e.selectedMusic[0]!==this.props.selectedMusic[0]&&this.setState({selectedMusic:this.props.selectedMusic[0]})}},{key:"render",value:function(){var e=this.isUserLoggedIn();if(!0===e)var t=this.checkIfFavorite();var a="flex-ctd fav-btn";return a=t?"flex-ctd fav-btn is-fav":"flex-ctd fav-btn not-fav",s.a.createElement("div",{className:"columns background soft-corner"},s.a.createElement("div",{className:"column is-half"},s.a.createElement("p",null,s.a.createElement("span",{className:"label-text"},"Title: ")),s.a.createElement("p",null,this.state.selectedMusic.title),s.a.createElement("p",null,s.a.createElement("span",{className:"label-text"},"Year: ")),s.a.createElement("p",null,this.state.selectedMusic.year),s.a.createElement("p",null,s.a.createElement("span",{className:"label-text"},"Composer: ")),s.a.createElement("p",null,this.state.selectedMusic.composer.first_name," ",this.state.selectedMusic.composer.last_name),s.a.createElement("p",null,s.a.createElement("span",{className:"label-text"},"Arrangement author: ")),s.a.createElement("p",null,this.state.selectedMusic.arrangement_author.first_name," ",this.state.selectedMusic.arrangement_author.last_name),s.a.createElement("p",null,s.a.createElement("span",{className:"label-text"},"Voices: ")),s.a.createElement("ul",null,this.state.selectedMusic.voices.map(function(e,t){return s.a.createElement("li",{key:t.toString()},e)})),s.a.createElement("p",null,s.a.createElement("span",{className:"label-text"},"Genre: ")),s.a.createElement("p",null,this.state.selectedMusic.genre),s.a.createElement("p",null,s.a.createElement("span",{className:"label-text"},"Video: ")),s.a.createElement("a",{href:this.state.selectedMusic.video},this.state.selectedMusic.video),s.a.createElement("p",null,s.a.createElement("span",{className:"label-text"},"Sheet music: ")),s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat("https://osmdb.herokuapp.com","/").concat(this.state.selectedMusic.file)},this.state.selectedMusic.file)),s.a.createElement("div",{className:"column is-half"},e?s.a.createElement("div",{className:"align-ctr dlt-row"},s.a.createElement("button",{onClick:this.handleFavoriteClick,className:a},s.a.createElement("i",{className:"fas fa-heart"})),s.a.createElement(E.a,{to:"/edit_sheet/".concat(this.state.selectedMusic._id),className:"nav-link"},"Edit")):s.a.createElement(s.a.Fragment,null)))}}]),t}(n.Component)),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleClose=function(){a.props.match.params.id="",a.setState({selectedMusic:null})},a.handleSearchInputChange=function(e){var t=e.target.value.toLowerCase();a.setState(Object(k.a)({},e.target.name,t))},a.handleGenreFilterInputChange=function(e){var t=Object(C.a)(a.state.genreFilter);t.includes(e.target.name)?t.splice(e.target.name,1):t.push(e.target.name),a.setState({genreFilter:t})},a.handleComposerFilterInputChange=function(e){var t=Object(C.a)(a.state.composerFilter);t.includes(e.target.name)?t.splice(e.target.name,1):t.push(e.target.name),a.setState({composerFilter:t})},a.searchSheets=function(){return Object(C.a)(a.state.sheets).filter(function(e){return 0===a.state.searchQuery.length||(e.title.toLowerCase().includes(a.state.searchQuery)||e.composer.first_name.toLowerCase().includes(a.state.searchQuery)||e.composer.last_name.toLowerCase().includes(a.state.searchQuery))}).filter(function(e){if(0===a.state.genreFilter.length)return!0;return a.state.genreFilter.some(function(t){for(var a=0;a<e.genre.length;a++)return t===e.genre[a]})}).filter(function(e){if(0===a.state.composerFilter.length)return!0;return a.state.composerFilter.some(function(t){return t===e.composer.last_name})}).map(function(e,t){return s.a.createElement(O,Object.assign({selectSheetHandler:a.selectSheetHandler,key:"sheet ".concat(t+1)},e,{index:t.toString()}))})},a.state={sheets:[],selectedMusic:null,searchQuery:"",genreFilter:[],composerFilter:[],currentUser:e.currentUser},a.selectSheetHandler=a.selectSheetHandler.bind(Object(u.a)(a)),a.handleGenreFilterInputChange=a.handleGenreFilterInputChange.bind(Object(u.a)(a)),a.handleComposerFilterInputChange=a.handleComposerFilterInputChange.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.history.location.pathname;this.props.isNavBarBlurred(t),f.a.get("".concat("https://osmdb.herokuapp.com","/all_music")).then(function(t){e.setState({sheets:t.data})}).catch(function(e){console.log(e)})}},{key:"selectSheetHandler",value:function(e){var t=this.state.sheets.filter(function(t){return t._id===e});this.setState({selectedMusic:t})}},{key:"render",value:function(){var e=this.searchSheets(),t=this.state.selectedMusic;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-8 is-offset-2"},s.a.createElement("input",{className:"search-el search-bar",placeholder:"Search sheet music!",type:"text",name:"searchQuery",onInput:this.handleSearchInputChange}))),s.a.createElement("div",{className:"columns list-container"},this.state.sheets.length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"column is-2 is-offset-1 col overflow"},t?e:s.a.createElement(_,{handleGenreFilterInputChange:this.handleGenreFilterInputChange,handleComposerFilterInputChange:this.handleComposerFilterInputChange})),s.a.createElement("div",{className:"column is-8 col"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-12 dlt-row"},t?s.a.createElement("button",{onClick:this.handleClose,className:"delete"}):s.a.createElement(s.a.Fragment,null))),s.a.createElement("div",{className:"columns overflow"},s.a.createElement("div",{className:"column is-12"},t?s.a.createElement(j,{selectedMusic:this.state.selectedMusic,currentUser:this.state.currentUser}):e))))))}}]),t}(n.Component),U=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleCancelClick=function(t){e.props.history.goBack()},e.handleInputChange=function(t){e.setState(Object(k.a)({},t.target.name,t.target.value))},e.handlePasswordConfirmation=function(t){0===t.target.value.length?e.setState({passwordError:""}):t.target.value===e.state.password?e.setState({passwordError:""}):e.setState({passwordError:"Passwords do not match!"})},e.handleFormSubmit=function(t){t.preventDefault(),f()({url:"".concat("https://osmdb.herokuapp.com","/sign_up"),data:{first_name:e.state.first_name,last_name:e.state.last_name,email:e.state.email,password:e.state.password},method:"post",withCredentials:!0}).then(function(t){e.props.history.push("/log_in")}).catch(function(t){e.setState({err:t})})},e.state={first_name:"",last_name:"",email:"",password:"",confirmpassword:"",passwordError:"",err:null},e.formRef=s.a.createRef(),e.handleInputChange=e.handleInputChange.bind(Object(u.a)(e)),e.handleFormSubmit=e.handleFormSubmit.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.history.location.pathname;this.props.isNavBarBlurred(e)}},{key:"render",value:function(){return s.a.createElement("div",{className:"columns is-centered"},s.a.createElement("div",{className:"column is-half col container"},s.a.createElement("div",null,s.a.createElement("h1",{className:"header flex-ctd"},"Sign up to Oh Sheet Music Database!")),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-6 is-offset-3"},s.a.createElement("form",{ref:this.formRef,onSubmit:this.handleFormSubmit,className:"form"},s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"First name"),s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("input",{className:"input",type:"text",name:"first_name",onChange:this.handleInputChange,required:!0}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-user"})))),s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Last name"),s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("input",{className:"input",type:"text",name:"last_name",onChange:this.handleInputChange,required:!0}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-user"})))),s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Email"),s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("input",{className:"input",type:"email",name:"email",onChange:this.handleInputChange,required:!0}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-envelope"})))),s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Password"),s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("input",{className:"input",type:"password",name:"password",onChange:this.handleInputChange,required:!0}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-lock"})))),s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Confirm password"),s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("input",{className:"input",type:"password",name:"confirmpassword",onChange:this.handlePasswordConfirmation,required:!0}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-lock"}))),s.a.createElement("p",{className:"error-message"},this.state.passwordError)),s.a.createElement("div",{className:"field is-grouped is-grouped-centered"},s.a.createElement("p",{className:"control"},s.a.createElement("button",{type:"submit",className:"button is-primary"},s.a.createElement("strong",null,"Sign up"))),s.a.createElement("button",{onClick:this.handleCancelClick,className:"button is-light"},"Cancel")))))))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleCancelClick=function(e){a.props.history.goBack()},a.handleInputChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleFormSubmit=function(e){e.preventDefault(),f()({url:"".concat("https://osmdb.herokuapp.com","/log_in"),data:{email:a.state.email,password:a.state.password},method:"post",withCredentials:!0}).then(function(e){a.props.getCurrentUser()}).catch(function(e){a.setState({err:e})})},a.state={email:"",password:"",err:null},a.formRef=s.a.createRef(),a.handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a.handleFormSubmit=a.handleFormSubmit.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.history.location.pathname;this.props.isNavBarBlurred(e)}},{key:"render",value:function(){return s.a.createElement("div",{className:"columns is-centered"},s.a.createElement("div",{className:"column is-half col container background"},s.a.createElement("div",null,s.a.createElement("h1",{className:"header flex-ctd"},"Log in to Oh Sheet Music Database!")),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-6 is-offset-3"},s.a.createElement("form",{ref:this.formRef,onSubmit:this.handleFormSubmit,className:"form"},s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Email"),s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("input",{className:"input",type:"email",name:"email",onChange:this.handleInputChange,required:!0}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-envelope"})))),s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Password"),s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("input",{className:"input",type:"password",name:"password",onChange:this.handleInputChange,required:!0}),s.a.createElement("span",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-lock"})))),s.a.createElement("div",{className:"field is-grouped is-grouped-centered"},s.a.createElement("p",{className:"control"},s.a.createElement("button",{type:"submit",className:"button is-black"},s.a.createElement("strong",null,"Login"))),s.a.createElement("button",{onClick:this.handleCancelClick,className:"button is-light"},"Cancel")))))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleCancelClick=function(e){a.props.history.goBack()},a.handleInputChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleClearFileInput=function(e){a.setState({sheet_file:""})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.formRef.current,n=new FormData(t);f()({url:"".concat("https://osmdb.herokuapp.com","/upload"),data:n,method:"post",headers:{"Content-Type":"multipart/form-data"},withCredentials:!0}).then(function(e){var t=e.data._id;a.props.history.push({pathname:"/edit_sheet/:".concat(t),state:{current_sheet:e.data}})}).catch(function(e){a.setState({err:e})})},a.isUserLoggedIn=function(){return Object.keys(a.state.currentUser).length>0},a.state={title:"",composer:"",sheet_file:"",composerList:[],currentUser:a.props.currentUser,err:null},a.formRef=s.a.createRef(),a.handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a.handleFormSubmit=a.handleFormSubmit.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.isUserLoggedIn()){var t=this.props.history.location.pathname;this.props.isNavBarBlurred(t),f.a.get("".concat("https://osmdb.herokuapp.com","/composer_list")).then(function(t){e.setState({composerList:t.data})})}else this.props.history.push("/")}},{key:"render",value:function(){var e=this.state.composerList.map(function(e,t){return s.a.createElement("option",{key:"composer".concat(t+1),value:"".concat(e._id)},"".concat(e.first_name," ").concat(e.last_name))});return s.a.createElement("div",{className:"columns is-centered"},s.a.createElement("div",{className:"column is-half col container background"},s.a.createElement("div",null,s.a.createElement("h1",{className:"header flex-ctd"},"Upload sheet music")),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-6 is-offset-3"},s.a.createElement("form",{ref:this.formRef,className:"form",onSubmit:this.handleFormSubmit},s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Title"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",type:"text",name:"title",onChange:this.handleInputChange,required:!0}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Composer"),s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"select"},s.a.createElement("select",{name:"composer",onChange:this.handleInputChange,required:!0},e)))),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"file is-black"},s.a.createElement("label",{className:"file-label"},s.a.createElement("input",{type:"file",className:"file-input",name:"sheet_file",onChange:this.handleInputChange,required:!0}),s.a.createElement("span",{className:"file-cta"},s.a.createElement("span",{className:"file-icon"},s.a.createElement("i",{className:"fas fa-upload"})),s.a.createElement("span",{className:"file-label"},"Select sheet music"))))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"file-label"},"Selected file"),s.a.createElement("span",{className:"file-name"},this.state.sheet_file),this.state.sheet_file?s.a.createElement("button",{onClick:this.handleClearFileInput,className:"delete"}):s.a.createElement(s.a.Fragment,null)),s.a.createElement("div",{className:"field is-grouped is-grouped-centered"},s.a.createElement("p",{className:"control"},s.a.createElement("button",{type:"submit",className:"button is-black"},s.a.createElement("strong",null,"Next"))),s.a.createElement("button",{onClick:this.handleCancelClick,className:"button is-light"},"Cancel")))))))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){a.setState(Object(k.a)({},e.target.name,e.target.value))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.formRef.current,n=new FormData(t),s=t.querySelector("#file-input").value?"edit_sheet_and_file":"edit_sheet";f()({url:"".concat("https://osmdb.herokuapp.com","/").concat(s),data:n,method:"post",withCredentials:!0}).then(function(e){a.props.history.push("/all_music")}).catch(function(e){a.setState({err:e})})},a.isUserLoggedIn=function(){return Object.keys(a.state.currentUser).length>0},a.state={currentSheetId:"",title:"",year:"",genre:"",voices:[],composer:"",arrangement_author:"",video:"",sheet_file:"",composerList:[],genreList:y.genres,voiceList:y.voices,currentUser:a.props.currentUser,err:null},a.formRef=s.a.createRef(),a.handleInputChange=a.handleInputChange.bind(Object(u.a)(a)),a.handleFormSubmit=a.handleFormSubmit.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.isUserLoggedIn()){this.props.location.state?this.setState({currentSheetId:this.props.location.state.current_sheet._id,title:this.props.location.state.current_sheet.title,year:this.props.location.state.current_sheet.year,genre:this.props.location.state.current_sheet.genre,voices:this.props.location.state.current_sheet.voices,composer:this.props.location.state.current_sheet.composer,arrangement_author:"",video:this.props.location.state.current_sheet.video,file:this.props.location.state.current_sheet.file}):f.a.get("".concat("https://osmdb.herokuapp.com","/").concat(this.props.match.params.id)).then(function(t){var a=t.data[0];e.setState({currentSheetId:a._id,title:a.title,year:a.year,genre:a.genre,voices:a.voices,composer:a.composer,arrangement_author:a.arrangement_author,video:a.video,file:a.file})});var t=this.props.history.location.pathname;this.props.isNavBarBlurred(t),f.a.get("".concat("https://osmdb.herokuapp.com","/composer_list")).then(function(t){e.setState({composerList:t.data})})}else this.props.history.push("/")}},{key:"render",value:function(){var e=this.state.composerList.map(function(e,t){return s.a.createElement("option",{key:"composer".concat(t+1),value:"".concat(e._id)},"".concat(e.first_name," ").concat(e.last_name))}),t=this.state.genreList.map(function(e,t){return s.a.createElement("option",{key:"genre".concat(t+1),value:e},e)}),a=this.state.voiceList.map(function(e,t){return s.a.createElement("option",{key:"voice".concat(t+1),value:e},e)});return s.a.createElement("div",{className:"columns is-centered"},s.a.createElement("div",{className:"column is-half col container background overflow"},s.a.createElement("div",null,s.a.createElement("h1",{className:"header flex-ctd"},"Edit sheet music info")),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-6 is-offset-3"},s.a.createElement("form",{ref:this.formRef,className:"form",onSubmit:this.handleFormSubmit},s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Title"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",type:"text",name:"title",onChange:this.handleInputChange,value:this.state.title,placeholder:this.state.title,required:!0}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Year"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",type:"text",name:"year",onChange:this.handleInputChange,value:this.state.year,placeholder:this.state.year}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Genre"),s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"select"},s.a.createElement("select",{name:"genre",onChange:this.handleInputChange,defaultChecked:this.state.genre,required:!0},t)))),s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Voices"),s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"select"},s.a.createElement("select",{name:"voices",onChange:this.handleInputChange,defaultChecked:this.state.voices,required:!0},a)))),s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Composer"),s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"select"},s.a.createElement("select",{name:"composer",onChange:this.handleInputChange,defaultChecked:this.state.composer,required:!0},e)))),s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Arrangement author"),s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"select"},s.a.createElement("select",{name:"arrangement_author",onChange:this.handleInputChange,value:this.state.arrangement_author,defaultChecked:this.state.arrangement_author},e)))),s.a.createElement("div",{className:"field"},s.a.createElement("label",null,"Video url"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",type:"url",name:"video",pattern:"https://.*",onChange:this.handleInputChange,value:this.state.video,placeholder:this.state.video}))),s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"file is-black"},s.a.createElement("label",{className:"file-label"},s.a.createElement("input",{id:"file-input",type:"file",className:"file-input",name:"sheet_file",onChange:this.handleInputChange}),s.a.createElement("span",{className:"file-cta"},s.a.createElement("span",{className:"file-icon"},s.a.createElement("i",{className:"fas fa-upload"})),s.a.createElement("span",{className:"file-label"},"Select sheet music"))))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"file-label"},"Selected file"),s.a.createElement("span",{className:"file-name"},this.state.sheet_file),this.state.sheet_file?s.a.createElement("button",{onClick:this.handleClearFileInput,className:"delete"}):s.a.createElement(s.a.Fragment,null)),s.a.createElement("div",{className:"field is-grouped is-grouped-centered"},s.a.createElement("p",{className:"control"},s.a.createElement("button",{type:"submit",className:"button is-black"},s.a.createElement("strong",null,"Next"))),s.a.createElement("button",{onClick:this.handleCancelClick,className:"button is-light"},"Cancel")),s.a.createElement("input",{type:"hidden",name:"_id",value:this.state.currentSheetId}))))))}}]),t}(n.Component),F=(a(76),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).isUserLoggedIn=function(){return Object.keys(a.state.currentUser).length>0},a.state={currentUser:e.currentUser,sheets:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.isUserLoggedIn()){var t=this.props.history.location.pathname;this.props.isNavBarBlurred(t),f.a.get("".concat("https://osmdb.herokuapp.com","/all_music")).then(function(t){e.setState({sheets:t.data})}).catch(function(e){console.log(e)})}else this.props.history.push("/")}},{key:"render",value:function(){var e,t=this;if(this.state.currentUser.favs.length<=0)e=s.a.createElement("p",null,"No favorites yet... Go add some!");else{var a=this.state.sheets.filter(function(e){return t.state.currentUser.favs.includes(e._id)});e=s.a.createElement("ul",{className:"custom-list"},a.map(function(e,t){return s.a.createElement("li",{key:"fav".concat(t+1)},e.title)}))}return this.isUserLoggedIn()?s.a.createElement("div",{className:"columns is-centered"},s.a.createElement("div",{className:"column is-half col container background"},s.a.createElement("div",null,s.a.createElement("h1",{className:"header flex-ctd"},"Profile")),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-6 is-offset-3"},s.a.createElement("p",null,s.a.createElement("span",{className:"label-text"},"Name: "),this.state.currentUser.first_name," ",this.state.currentUser.last_name),s.a.createElement("p",null,s.a.createElement("span",{className:"label-text"},"Email: "),this.state.currentUser.email),s.a.createElement("p",null,s.a.createElement("span",{className:"label-text"},"Favorites: ")),e)))):s.a.createElement(s.a.Fragment,null)}}]),t}(n.Component)),x=a(11),M=Object(x.a)(),L=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).getCurrentUser=function(){f()({url:"".concat("https://osmdb.herokuapp.com","/get_user"),method:"post",withCredentials:!0}).then(function(t){e.setState({currentUser:t.data},function(){M.push("/all_music")})}).catch(function(t){e.setState({err:t})})},e.isNavBarBlurred=function(t){"/"===t?e.setState({navBarClassName:"navbar blur"}):e.setState({navBarClassName:"navbar"})},e.logOut=function(){e.setState({currentUser:{}},function(){M.push("/")})},e.state={currentUser:{},navBarClassName:"navbar",err:null},e.getCurrentUser=e.getCurrentUser.bind(Object(u.a)(e)),e.isNavBarBlurred=e.isNavBarBlurred.bind(Object(u.a)(e)),e.logOut=e.logOut.bind(Object(u.a)(e)),e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getCurrentUser()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement(v,{currentUser:this.state.currentUser,navBarClassName:this.state.navBarClassName,logOut:this.logOut}),s.a.createElement(d.d,null,s.a.createElement(d.b,{exact:!0,path:"/",render:function(t){return s.a.createElement(N,Object.assign({},t,{isNavBarBlurred:e.isNavBarBlurred,currentUser:e.state.currentUser}))}}),s.a.createElement(d.b,{exact:!0,path:"/all_music",render:function(t){return s.a.createElement(S,Object.assign({},t,{isNavBarBlurred:e.isNavBarBlurred,currentUser:e.state.currentUser}))}}),s.a.createElement(d.b,{exact:!0,path:"/sign_up",render:function(t){return s.a.createElement(U,Object.assign({},t,{isNavBarBlurred:e.isNavBarBlurred}))}}),s.a.createElement(d.b,{exact:!0,path:"/log_in",render:function(t){return s.a.createElement(I,Object.assign({},t,{getCurrentUser:e.getCurrentUser,isNavBarBlurred:e.isNavBarBlurred}))}}),s.a.createElement(d.b,{exact:!0,path:"/upload",render:function(t){return s.a.createElement(w,Object.assign({},t,{isNavBarBlurred:e.isNavBarBlurred,currentUser:e.state.currentUser}))}}),s.a.createElement(d.b,{exact:!0,path:"/edit_sheet/:id",render:function(t){return s.a.createElement(B,Object.assign({},t,{isNavBarBlurred:e.isNavBarBlurred,currentUser:e.state.currentUser}))}}),s.a.createElement(d.b,{exact:!0,path:"/profile",render:function(t){return s.a.createElement(F,Object.assign({},t,{isNavBarBlurred:e.isNavBarBlurred,currentUser:e.state.currentUser}))}}),s.a.createElement(d.b,{path:"/*",component:d.a})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(d.c,{history:M},s.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.7f8e01eb.chunk.js.map