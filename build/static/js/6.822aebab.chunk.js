(this["webpackJsonppro-test-react"]=this["webpackJsonppro-test-react"]||[]).push([[6],{133:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return r}));var a=function(e){return e.tests.test},r=function(e){return e.tests.type}},141:function(e,t,s){e.exports={container:"Diagram_container__2tuYv",chart:"Diagram_chart__32rsK",answers:"Diagram_answers__2P4on",textAnswers:"Diagram_textAnswers__3C3kI",textAnswersNumber:"Diagram_textAnswersNumber__1wruQ"}},142:function(e,t,s){e.exports={results:"Results_results__1vzZS",resultTitle:"Results_resultTitle__2f5IH",resultName:"Results_resultName__1ukAa",catImages:"Results_catImages__3PZfF",mainMessage:"Results_mainMessage__2feFm",secondaryMessage:"Results_secondaryMessage__3i9ry",button:"Results_button__1YHEd",buttonText:"Results_buttonText__1BH7z"}},153:function(e,t,s){"use strict";s.r(t);var a=s(43),r=s(44),n=s(46),c=s(45),i=s(0),u=s(25),l=s(5),o=s(23),p=s(16),b=s(139),j=s(141),h=s.n(j),m=s(1),d=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){var e;Object(a.a)(this,s);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={percent:null},e}return Object(r.a)(s,[{key:"componentDidUpdate",value:function(e,t){var s=this.props.percent.slice(0,-1);s!==t.percent&&this.setState({percent:s})}},{key:"render",value:function(){return"0%"===this.state.percent?Object(m.jsx)("div",{className:h.a.container,children:Object(m.jsxs)("div",{className:h.a.answers,children:[Object(m.jsxs)("p",{className:h.a.textAnswers,children:["Correct answers -"," ",Object(m.jsx)("span",{className:h.a.textAnswersNumber,children:"0"})]}),Object(m.jsxs)("p",{className:h.a.textAnswers,children:["Total questions -"," ",Object(m.jsx)("span",{className:h.a.textAnswersNumber,children:"12"})]})]})}):Object(m.jsxs)("div",{className:h.a.container,children:[Object(m.jsx)(b.a,{className:h.a.chart,chartType:"PieChart",loader:Object(m.jsx)("div",{children:"Loading Chart"}),data:[["Task","Hours per Day"],["".concat(this.state.percent,"%  Correct "),Number(Math.round(this.state.percent/100*12))],["".concat(100-this.state.percent,"%  Incorrect "),12-Number(Math.round(this.state.percent/100*12))]],options:{pieStartAngle:100,pieSliceText:"none",slices:{0:{color:"#FF6B01"},1:{color:"#D7D7D7"}},chartArea:{left:100,top:10,width:"90%",height:"90%"},backgroundColor:"#f5f6fb"},rootProps:{"data-testid":"1"}}),Object(m.jsxs)("div",{className:h.a.answers,children:[Object(m.jsxs)("p",{className:h.a.textAnswers,children:["Correct answers -"," ",Object(m.jsx)("span",{className:h.a.textAnswersNumber,children:Number(Math.round(this.state.percent/100*12))})]}),Object(m.jsxs)("p",{className:h.a.textAnswers,children:["Total questions -"," ",Object(m.jsx)("span",{className:h.a.textAnswersNumber,children:"12"})]})]})]})}}]),s}(i.Component),x=s.p+"static/media/catResultPage.aa40c4d6.png",O=s(133),f=s(6),_=s.n(f),w=s(11),N=s(30),g=s(29),v=function(e){return e.tests.answers},y=function(e){return e.resultsOfTest.results},A=s(142),T=s.n(A),k=s(56),D=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){var e;Object(a.a)(this,s);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.testAnswers,s=e.typeOfTests,a=e.resultsOperation;t&&12===t.answers.length&&a(t,s)}},{key:"componentDidUpdate",value:function(e,t){var s=this.props.results;s!==t.results&&this.setState({results:s})}},{key:"render",value:function(){var e=this.props,t=e.testAnswers,s=e.results;return null===t||t.answers.length<12?Object(m.jsx)(l.a,{to:p.a.mainPage}):s.answers?Object(m.jsx)(k.a,{}):Object(m.jsxs)("div",{className:T.a.results,children:[Object(m.jsx)("h2",{className:T.a.resultTitle,children:"Results"}),Object(m.jsx)("p",{className:T.a.resultName,children:"technical"===this.props.typeOfTests?"[ Testing technical_ ]":"[ Testing theory_ ]"}),Object(m.jsx)(d,{percent:s.result}),Object(m.jsx)("img",{className:T.a.catImages,src:x,alt:"cat"}),Object(m.jsx)("p",{className:T.a.mainMessage,children:s.mainMessage}),Object(m.jsx)("p",{className:T.a.secondaryMessage,children:s.secondaryMessage}),Object(m.jsx)(o.c,{to:p.a.test,className:T.a.buttonText,children:Object(m.jsx)("button",{className:T.a.button,type:"button",children:"Try again"})})]})}}]),s}(i.Component),M={resultsOperation:function(e,t){return function(){var s=Object(w.a)(_.a.mark((function s(a){var r,n;return _.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(a(Object(N.b)()),"technical"!==t){s.next=14;break}return s.prev=2,s.next=5,Object(g.g)(e);case 5:r=s.sent,a(Object(N.c)(r)),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(2),a(Object(N.a)(s.t0));case 12:s.next=24;break;case 14:return s.prev=14,s.next=17,Object(g.h)(e);case 17:n=s.sent,a(Object(N.c)(n)),s.next=24;break;case 21:s.prev=21,s.t1=s.catch(14),a(Object(N.a)(s.t1));case 24:case"end":return s.stop()}}),s,null,[[2,9],[14,21]])})));return function(e){return s.apply(this,arguments)}}()}};t.default=Object(u.b)((function(e){return{testAnswers:v(e),results:y(e),typeOfTests:Object(O.b)(e)}}),M)(D)}}]);
//# sourceMappingURL=6.822aebab.chunk.js.map